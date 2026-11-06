select distinct lower(name) as name
from {{ ref('drug_candidates') }}
where name is not null
    and length(name) >= 5
