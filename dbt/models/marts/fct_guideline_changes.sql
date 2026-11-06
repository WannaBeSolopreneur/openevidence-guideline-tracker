with icd_ranked as (
    select
        *,
        row_number() over (
            partition by item_id
            order by length(phrase) desc, icd10_code
        ) as rn,
        count(*) over (partition by item_id) as icd_count
    from {{ ref('int_item_icd10') }}
),

icd as (
    select
        item_id,
        max(case when rn = 1 then area end) as area,
        max(icd_count) as icd_count,
        string_agg(
            icd10_code || ' ' || icd10_description,
            '. '
            order by rn
        ) filter (where rn <= 4) as icd10_display
    from icd_ranked
    group by item_id
),

rx_ranked as (
    select
        *,
        row_number() over (
            partition by item_id
            order by case when origin = 'openfda' then 0 else 1 end, query_name
        ) as rn,
        count(*) over (partition by item_id) as rx_count
    from {{ ref('int_item_rxnorm') }}
),

rx as (
    select
        item_id,
        max(rx_count) as rx_count,
        string_agg(
            'RxNorm ' || rxcui || ' ' || query_name,
            '. '
            order by rn
        ) filter (where rn <= 3) as rxnorm_display
    from rx_ranked
    group by item_id
)

select
    items.item_id,
    items.source_id,
    items.source_name,
    items.published_at,
    items.title,
    items.summary,
    items.source_url,
    items.high_impact,
    items.impact_reason,
    items.fetched_at,
    items.first_seen_at,
    greatest(date_diff('hour', items.published_at, items.first_seen_at), 0) as hours_to_surface,
    coalesce(icd.area, 'Not coded') as area,
    coalesce(icd.icd_count, 0) as icd_count,
    icd.icd10_display,
    coalesce(rx.rx_count, 0) as rx_count,
    rx.rxnorm_display,
    case
        when coalesce(icd.icd_count, 0) > 0 or coalesce(rx.rx_count, 0) > 0 then 1
        else 0
    end as is_coded,
    concat_ws(
        '. ',
        case when icd.icd10_display is not null then 'ICD-10 ' || icd.icd10_display end,
        rx.rxnorm_display
    ) as code_label
from {{ ref('int_guideline_items') }} as items
left join icd
    on items.item_id = icd.item_id
left join rx
    on items.item_id = rx.item_id
