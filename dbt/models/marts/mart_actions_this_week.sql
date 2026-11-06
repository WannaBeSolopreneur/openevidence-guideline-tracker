with ranked as (
    select
        item_id as action_id,
        item_id,
        source_name,
        title,
        source_url,
        impact_reason,
        published_at,
        case impact_reason
            when 'Boxed warning' then 'A boxed warning changed on this label. A clinician team should read it.'
            when 'Class I recall' then 'This is a Class I drug recall. A clinician team should check who might be affected.'
            when 'CDC recommendation' then 'CDC published a recommendation in MMWR. A clinician team should read the report.'
            when 'FDA guidance' then 'FDA posted a guidance notice. A clinician team should read the Federal Register document.'
            else 'This update is new in the public feed. A clinician team should open the source.'
        end as sentence,
        row_number() over (
            order by
                case
                    when high_impact = 1
                        and published_at >= (select max(fetched_at) from {{ ref('stg_fetch_meta') }}) - interval 21 day
                        then 0
                    when high_impact = 1 then 1
                    else 2
                end,
                case impact_reason
                    when 'Boxed warning' then 1
                    when 'CDC recommendation' then 2
                    when 'Class I recall' then 3
                    when 'FDA guidance' then 4
                    else 5
                end,
                published_at desc,
                item_id
        ) as sort_order
    from {{ ref('fct_guideline_changes') }}
)

select
    action_id,
    item_id,
    source_name,
    title,
    source_url,
    impact_reason,
    published_at,
    sentence,
    sort_order
from ranked
where sort_order <= 5
