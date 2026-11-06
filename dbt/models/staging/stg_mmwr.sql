select
    media_id,
    title,
    description,
    source_url,
    cast(strptime(substr(published_raw, 1, 10), '%Y-%m-%d') as timestamp) as published_at,
    summary,
    fetched_at
from {{ source('raw', 'mmwr') }}
where media_id is not null
    and source_url like 'https://%'
    and published_raw is not null
