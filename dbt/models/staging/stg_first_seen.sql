select
    item_id,
    first_seen_at
from {{ source('raw', 'first_seen') }}
