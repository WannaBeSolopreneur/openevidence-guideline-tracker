select
    item_id,
    source_id,
    source_name,
    published_at,
    title,
    summary,
    source_url,
    high_impact,
    impact_reason,
    area,
    code_label
from {{ ref('fct_guideline_changes') }}
order by published_at desc, item_id
limit 30
