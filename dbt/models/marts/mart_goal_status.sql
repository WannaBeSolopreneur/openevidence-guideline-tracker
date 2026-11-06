with calendar as (
    select
        max(fetched_at) as run_at,
        cast(max(fetched_at) as date) as as_of,
        cast(date_trunc('week', max(fetched_at)) as date) as week_start,
        date_diff(
            'day',
            cast(date_trunc('week', max(fetched_at)) as date),
            cast(max(fetched_at) as date)
        ) + 1 as days_elapsed,
        7 as days_in_period,
        {{ var('on_track_ratio') }} as on_track_ratio,
        {{ var('at_risk_ratio') }} as at_risk_ratio
    from {{ ref('stg_fetch_meta') }}
),

sources as (
    select
        sum(case when ok = 1 then 1 else 0 end) as ok_n,
        count(*) as source_n
    from {{ ref('stg_fetch_meta') }}
),

hours as (
    select median(hours_to_surface) as hours_value
    from {{ ref('mart_recent_changes') }}
),

coded as (
    select avg(is_coded) as coded_share
    from {{ ref('fct_guideline_changes') }}
),

impact as (
    select count(*) as impact_n
    from {{ ref('fct_guideline_changes') }} as changes
    cross join calendar
    where changes.high_impact = 1
        and cast(changes.published_at as date) >= calendar.week_start
        and cast(changes.published_at as date) < calendar.week_start + 7
),

actuals as (
    select
        'sources_fresh' as goal_id,
        sources.ok_n * 1.0 / sources.source_n as current_value,
        cast(sources.ok_n as varchar) || ' of ' || cast(sources.source_n as varchar) as current_label_override,
        cast(sources.source_n as varchar) || ' of ' || cast(sources.source_n as varchar) as target_label_override
    from sources

    union all

    select
        'hours_to_surface' as goal_id,
        hours.hours_value as current_value,
        cast(null as varchar) as current_label_override,
        cast(null as varchar) as target_label_override
    from hours

    union all

    select
        'coded_share' as goal_id,
        coded.coded_share as current_value,
        cast(null as varchar) as current_label_override,
        cast(null as varchar) as target_label_override
    from coded

    union all

    select
        'high_impact_week' as goal_id,
        impact.impact_n as current_value,
        cast(null as varchar) as current_label_override,
        cast(null as varchar) as target_label_override
    from impact
),

scored as (
    select
        goals.goal_id,
        goals.label,
        case
            when goals.metric_kind = 'pace'
                then goals.detail || ' Pace line is day ' || cast(calendar.days_elapsed as varchar)
                    || ' of ' || cast(calendar.days_in_period as varchar) || '.'
            else goals.detail
        end as detail,
        goals.unit,
        goals.metric_kind,
        goals.direction,
        actuals.current_value,
        goals.target_value,
        goals.sort_order,
        calendar.as_of,
        calendar.days_elapsed,
        calendar.days_in_period,
        calendar.on_track_ratio,
        calendar.at_risk_ratio,
        actuals.current_label_override,
        actuals.target_label_override,
        case
            when goals.direction = 'lower' and actuals.current_value is null then null
            when goals.direction = 'lower' and actuals.current_value <= 0 then 1
            when goals.direction = 'lower' then goals.target_value / actuals.current_value
            else actuals.current_value / nullif(goals.target_value, 0)
        end as progress_ratio,
        case
            when goals.metric_kind = 'pace'
                then calendar.days_elapsed * 1.0 / calendar.days_in_period
        end as pace_ratio,
        case
            when goals.direction = 'lower' and actuals.current_value is null then 'behind'
            when goals.direction = 'lower'
                and actuals.current_value <= goals.target_value / calendar.on_track_ratio
                then 'on_track'
            when goals.direction = 'lower'
                and actuals.current_value <= goals.target_value / calendar.at_risk_ratio
                then 'at_risk'
            when goals.direction = 'lower' then 'behind'
            when goals.metric_kind = 'pace'
                and actuals.current_value >= goals.target_value
                    * calendar.days_elapsed * 1.0 / calendar.days_in_period
                    * calendar.on_track_ratio
                then 'on_track'
            when goals.metric_kind = 'pace'
                and actuals.current_value >= goals.target_value
                    * calendar.days_elapsed * 1.0 / calendar.days_in_period
                    * calendar.at_risk_ratio
                then 'at_risk'
            when goals.metric_kind = 'pace' then 'behind'
            when actuals.current_value >= goals.target_value * calendar.on_track_ratio then 'on_track'
            when actuals.current_value >= goals.target_value * calendar.at_risk_ratio then 'at_risk'
            else 'behind'
        end as status
    from {{ ref('stg_goals') }} as goals
    inner join actuals
        on goals.goal_id = actuals.goal_id
    cross join calendar
)

select
    goal_id,
    label,
    detail,
    unit,
    metric_kind,
    direction,
    current_value,
    target_value,
    coalesce(
        current_label_override,
        case unit
            when 'hours' then cast(cast(round(current_value, 0) as integer) as varchar) || ' hours'
            when 'percent' then
                rtrim(rtrim(cast(cast(round(current_value * 100, 1) as decimal(10, 1)) as varchar), '0'), '.') || '%'
            when 'count' then cast(cast(round(current_value, 0) as integer) as varchar)
            else cast(round(current_value, 2) as varchar)
        end
    ) as current_label,
    coalesce(
        target_label_override,
        case unit
            when 'hours' then cast(cast(round(target_value, 0) as integer) as varchar) || ' hours'
            when 'percent' then
                rtrim(rtrim(cast(cast(round(target_value * 100, 1) as decimal(10, 1)) as varchar), '0'), '.') || '%'
            when 'count' then cast(cast(round(target_value, 0) as integer) as varchar)
            else cast(round(target_value, 2) as varchar)
        end
    ) as target_label,
    progress_ratio,
    pace_ratio,
    status,
    case status
        when 'on_track' then 'On track'
        when 'at_risk' then 'At risk'
        else 'Behind'
    end as status_label,
    sort_order,
    as_of,
    days_elapsed,
    days_in_period,
    on_track_ratio,
    at_risk_ratio
from scored
