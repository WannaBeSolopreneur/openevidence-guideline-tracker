select
    lower(phrase) as phrase,
    icd10_code,
    icd10_description,
    area,
    scope
from {{ ref('icd10_keywords') }}
