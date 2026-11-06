with hits as (
    select
        items.item_id,
        keywords.phrase,
        keywords.icd10_code,
        keywords.icd10_description,
        keywords.area,
        keywords.scope
    from {{ ref('int_guideline_items') }} as items
    inner join {{ ref('stg_icd10_keywords') }} as keywords
        on (
            keywords.scope = 'all'
            and regexp_matches(
                items.match_text,
                '(^|[^a-z0-9])' || keywords.phrase || '([^a-z0-9]|$)'
            )
        )
        or (
            keywords.scope = 'title'
            and regexp_matches(
                items.title_text,
                '(^|[^a-z0-9])' || keywords.phrase || '([^a-z0-9]|$)'
            )
        )
),

longest as (
    select *
    from hits
    where not exists (
        select 1
        from hits as longer
        where longer.item_id = hits.item_id
            and length(longer.phrase) > length(hits.phrase)
            and position(hits.phrase in longer.phrase) > 0
    )
),

one_code as (
    select
        *,
        row_number() over (
            partition by item_id, icd10_code
            order by length(phrase) desc, phrase
        ) as code_rn
    from longest
)

select
    item_id,
    phrase,
    icd10_code,
    icd10_description,
    area,
    scope
from one_code
where code_rn = 1
