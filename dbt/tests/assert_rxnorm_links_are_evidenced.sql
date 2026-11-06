select
    links.item_id,
    links.rxcui,
    links.query_name,
    links.origin
from {{ ref('int_item_rxnorm') }} as links
inner join {{ ref('int_guideline_items') }} as items
    on links.item_id = items.item_id
left join {{ ref('stg_rxnorm_lookup') }} as lookup
    on lookup.query_name = links.query_name
    and lookup.rxcui = links.rxcui
where (
    links.origin = 'openfda'
    and (',' || coalesce(items.rxcui_raw, '') || ',') not like '%,' || links.rxcui || ',%'
)
or (
    links.origin = 'rxnav'
    and (
        lookup.rxcui is null
        or not regexp_matches(
            items.drug_text,
            '(^|[^a-z0-9])' || links.query_name || '([^a-z0-9]|$)'
        )
    )
)
