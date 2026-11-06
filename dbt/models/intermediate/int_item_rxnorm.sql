with from_label as (
    select
        items.item_id,
        trim(code.value) as rxcui,
        coalesce(nullif(items.generic_name, ''), 'label code') as query_name,
        'openfda' as origin
    from {{ ref('int_guideline_items') }} as items
    cross join unnest(string_split(coalesce(items.rxcui_raw, ''), ',')) as code(value)
    where trim(code.value) <> ''
),

from_rxnav as (
    select
        items.item_id,
        lookup.rxcui,
        candidates.name as query_name,
        'rxnav' as origin
    from {{ ref('int_guideline_items') }} as items
    inner join {{ ref('stg_drug_candidates') }} as candidates
        on regexp_matches(
            items.drug_text,
            '(^|[^a-z0-9])' || candidates.name || '([^a-z0-9]|$)'
        )
    inner join {{ ref('stg_rxnorm_lookup') }} as lookup
        on lookup.query_name = candidates.name
),

combined as (
    select * from from_label
    union all
    select * from from_rxnav
),

ranked as (
    select
        *,
        row_number() over (
            partition by item_id, rxcui
            order by case when origin = 'openfda' then 0 else 1 end, query_name
        ) as rn
    from combined
    where rxcui is not null
        and rxcui <> ''
)

select
    item_id,
    rxcui,
    query_name,
    origin
from ranked
where rn = 1
