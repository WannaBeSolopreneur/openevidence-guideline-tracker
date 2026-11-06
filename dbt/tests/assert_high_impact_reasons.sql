select item_id, high_impact, impact_reason
from {{ ref('fct_guideline_changes') }}
where (
    high_impact = 1
    and coalesce(impact_reason, '') not in (
        'Boxed warning',
        'Class I recall',
        'CDC recommendation',
        'FDA guidance'
    )
)
or (
    high_impact = 0
    and impact_reason is not null
)
