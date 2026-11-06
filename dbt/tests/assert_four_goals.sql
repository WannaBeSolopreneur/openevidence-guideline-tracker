select count(*) as goal_count
from {{ ref('mart_goal_status') }}
having count(*) <> 4
    or sum(
        case
            when goal_id in ('sources_fresh', 'hours_to_surface', 'coded_share', 'high_impact_week')
                then 1
            else 0
        end
    ) <> 4
