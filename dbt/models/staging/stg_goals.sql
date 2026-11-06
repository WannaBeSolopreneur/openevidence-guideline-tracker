select
    goal_id,
    label,
    detail,
    unit,
    metric_kind,
    direction,
    cast(target_value as double) as target_value,
    cast(sort_order as integer) as sort_order
from {{ ref('goals') }}
