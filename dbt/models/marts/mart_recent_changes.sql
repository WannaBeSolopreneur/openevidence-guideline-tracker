select *
from {{ ref('fct_guideline_changes') }}
where published_at >= (
    select max(fetched_at) from {{ ref('stg_fetch_meta') }}
) - interval 7 day
