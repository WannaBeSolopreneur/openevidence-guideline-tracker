select count(*) as action_count
from {{ ref('mart_actions_this_week') }}
having count(*) <> 5
