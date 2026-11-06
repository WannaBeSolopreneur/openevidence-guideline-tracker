select
    lower(query_name) as query_name,
    rxcui,
    looked_up_at,
    fetched_at
from {{ source('raw', 'rxnorm_lookup') }}
where query_name is not null
    and rxcui is not null
    and rxcui <> ''
