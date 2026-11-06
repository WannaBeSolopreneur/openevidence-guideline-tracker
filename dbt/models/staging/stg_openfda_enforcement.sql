with ranked as (
    select
        *,
        row_number() over (
            partition by recall_number
            order by
                case when classification = 'Class I' then 0 else 1 end,
                report_date desc
        ) as rn
    from {{ source('raw', 'openfda_enforcement') }}
    where recall_number is not null
        and report_date is not null
        and source_url like 'https://%'
)

select
    recall_number,
    event_id,
    classification,
    status,
    strptime(report_date, '%Y%m%d') as published_at,
    title,
    summary,
    lower(generic_name) as generic_name,
    rxcui_raw,
    reason_for_recall,
    source_url,
    fetched_at
from ranked
where rn = 1
