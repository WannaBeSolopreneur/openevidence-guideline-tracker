with labels as (
    select
        'openfda_label:' || set_id as item_id,
        'openfda_label' as source_id,
        'FDA labels' as source_name,
        published_at,
        title,
        summary,
        source_url,
        has_boxed_warning as high_impact,
        case when has_boxed_warning = 1 then 'Boxed warning' end as impact_reason,
        lower(title) as title_text,
        lower(concat_ws(' ', title, summary, indications)) as match_text,
        lower(concat_ws(' ', title, summary, generic_name, indications)) as drug_text,
        generic_name,
        rxcui_raw,
        fetched_at
    from {{ ref('stg_openfda_labels') }}
),

recalls as (
    select
        'openfda_enforcement:' || recall_number as item_id,
        'openfda_enforcement' as source_id,
        'FDA recalls' as source_name,
        published_at,
        title,
        summary,
        source_url,
        case when classification = 'Class I' then 1 else 0 end as high_impact,
        case when classification = 'Class I' then 'Class I recall' end as impact_reason,
        lower(title) as title_text,
        lower(concat_ws(' ', title, summary, reason_for_recall)) as match_text,
        lower(concat_ws(' ', title, summary, generic_name, reason_for_recall)) as drug_text,
        generic_name,
        rxcui_raw,
        fetched_at
    from {{ ref('stg_openfda_enforcement') }}
),

register as (
    select
        'federal_register:' || document_number as item_id,
        'federal_register' as source_id,
        'Federal Register' as source_name,
        published_at,
        title,
        summary,
        source_url,
        case
            when lower(title) like '%guidance%'
                and agency_slugs like '%food-and-drug-administration%'
                then 1
            else 0
        end as high_impact,
        case
            when lower(title) like '%guidance%'
                and agency_slugs like '%food-and-drug-administration%'
                then 'FDA guidance'
        end as impact_reason,
        lower(title) as title_text,
        lower(concat_ws(' ', title, summary, abstract)) as match_text,
        lower(concat_ws(' ', title, summary, abstract)) as drug_text,
        '' as generic_name,
        '' as rxcui_raw,
        fetched_at
    from {{ ref('stg_federal_register') }}
),

mmwr as (
    select
        'cdc_mmwr:' || media_id as item_id,
        'cdc_mmwr' as source_id,
        'CDC MMWR' as source_name,
        published_at,
        title,
        summary,
        source_url,
        case when lower(title) like '%recommendation%' then 1 else 0 end as high_impact,
        case when lower(title) like '%recommendation%' then 'CDC recommendation' end as impact_reason,
        lower(title) as title_text,
        lower(concat_ws(' ', title, summary, description)) as match_text,
        lower(concat_ws(' ', title, summary, description)) as drug_text,
        '' as generic_name,
        '' as rxcui_raw,
        fetched_at
    from {{ ref('stg_mmwr') }}
),

unioned as (
    select * from labels
    union all
    select * from recalls
    union all
    select * from register
    union all
    select * from mmwr
)

select
    unioned.item_id,
    unioned.source_id,
    unioned.source_name,
    unioned.published_at,
    unioned.title,
    unioned.summary,
    unioned.source_url,
    unioned.high_impact,
    unioned.impact_reason,
    unioned.title_text,
    unioned.match_text,
    unioned.drug_text,
    unioned.generic_name,
    unioned.rxcui_raw,
    unioned.fetched_at,
    coalesce(seen.first_seen_at, unioned.fetched_at) as first_seen_at
from unioned
left join {{ ref('stg_first_seen') }} as seen
    on unioned.item_id = seen.item_id
where unioned.published_at is not null
    and unioned.source_url like 'https://%'
