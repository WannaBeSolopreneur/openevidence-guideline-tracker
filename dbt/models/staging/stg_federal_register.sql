with ranked as (
    select
        *,
        row_number() over (
            partition by document_number
            order by publication_date desc
        ) as rn
    from {{ source('raw', 'federal_register') }}
    where document_number is not null
        and publication_date is not null
        and html_url like 'https://%'
)

select
    document_number,
    title,
    doc_type,
    abstract,
    cast(publication_date as timestamp) as published_at,
    html_url as source_url,
    agency_slugs,
    summary,
    fetched_at
from ranked
where rn = 1
