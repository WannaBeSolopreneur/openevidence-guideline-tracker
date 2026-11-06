select source_id, ok
from {{ ref('mart_source_freshness') }}
where ok <> 1
    or source_id not in ('openfda_label', 'openfda_enforcement', 'federal_register', 'cdc_mmwr')
    or (select count(*) from {{ ref('mart_source_freshness') }}) <> 4
