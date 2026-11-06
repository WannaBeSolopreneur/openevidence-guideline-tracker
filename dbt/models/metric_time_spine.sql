{{ config(materialized='view', schema='spine') }}

select cast(day_value as date) as date_day
from (
    select unnest(
        generate_series(date '2025-01-01', date '2027-06-01', interval 1 day)
    ) as day_value
)
