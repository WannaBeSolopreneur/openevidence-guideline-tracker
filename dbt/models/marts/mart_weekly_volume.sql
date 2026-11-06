with bounds as (
    select cast(date_trunc('week', max(fetched_at)) as date) as this_week
    from {{ ref('stg_fetch_meta') }}
),

weeks as (
    select this_week - cast(n * 7 as integer) as week_start
    from bounds
    cross join (select range as n from range(0, 16))
),

sources as (
    select distinct source_id, source_name
    from {{ ref('fct_guideline_changes') }}
),

counts as (
    select
        cast(date_trunc('week', cast(published_at as date)) as date) as week_start,
        source_id,
        count(*) as item_count
    from {{ ref('fct_guideline_changes') }}
    group by 1, 2
)

select
    weeks.week_start,
    sources.source_id,
    sources.source_name,
    coalesce(counts.item_count, 0) as item_count
from weeks
cross join sources
left join counts
    on counts.week_start = weeks.week_start
    and counts.source_id = sources.source_id
