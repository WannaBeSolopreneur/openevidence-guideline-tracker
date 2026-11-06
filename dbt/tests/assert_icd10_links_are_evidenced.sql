select
    links.item_id,
    links.phrase,
    links.icd10_code
from {{ ref('int_item_icd10') }} as links
inner join {{ ref('int_guideline_items') }} as items
    on links.item_id = items.item_id
where not (
    (
        links.scope = 'all'
        and regexp_matches(
            items.match_text,
            '(^|[^a-z0-9])' || links.phrase || '([^a-z0-9]|$)'
        )
    )
    or (
        links.scope = 'title'
        and regexp_matches(
            items.title_text,
            '(^|[^a-z0-9])' || links.phrase || '([^a-z0-9]|$)'
        )
    )
)
