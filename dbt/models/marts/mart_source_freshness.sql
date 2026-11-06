select
    meta.source_id,
    meta.source_name,
    meta.fetched_at,
    meta.record_count,
    meta.ok,
    meta.note,
    max(changes.published_at) as latest_published_at
from {{ ref('stg_fetch_meta') }} as meta
left join {{ ref('fct_guideline_changes') }} as changes
    on meta.source_id = changes.source_id
group by
    meta.source_id,
    meta.source_name,
    meta.fetched_at,
    meta.record_count,
    meta.ok,
    meta.note
