select item_id, source_url
from {{ ref('fct_guideline_changes') }}
where source_url is null
    or source_url not like 'https://%'

union all

select item_id, source_url
from {{ ref('mart_feed') }}
where source_url is null
    or source_url not like 'https://%'

union all

select item_id, source_url
from {{ ref('mart_actions_this_week') }}
where source_url is null
    or source_url not like 'https://%'
