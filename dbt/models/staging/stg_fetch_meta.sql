select
    source_id,
    source_name,
    fetched_at,
    record_count,
    ok,
    note
from {{ source('raw', 'fetch_meta') }}
