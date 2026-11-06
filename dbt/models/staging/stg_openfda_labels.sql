with ranked as (
    select
        *,
        row_number() over (
            partition by set_id
            order by has_boxed_warning desc, effective_time desc
        ) as rn
    from {{ source('raw', 'openfda_labels') }}
    where set_id is not null
        and effective_time is not null
        and source_url like 'https://%'
)

select
    label_id,
    set_id,
    strptime(effective_time, '%Y%m%d') as published_at,
    title,
    summary,
    lower(generic_name) as generic_name,
    product_type,
    rxcui_raw,
    has_boxed_warning,
    indications,
    boxed_warning,
    source_url,
    fetched_at
from ranked
where rn = 1
