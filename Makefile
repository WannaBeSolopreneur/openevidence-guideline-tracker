.PHONY: all venv fetch load dbt export

PYTHON := .venv/bin/python
export TRACKER_DB_PATH := $(CURDIR)/data/tracker.duckdb
export DBT_PROFILES_DIR := $(CURDIR)/dbt
export DBT_SEND_ANONYMOUS_USAGE_STATS := false

all: export

.venv/bin/python: requirements.txt
	python3 -m venv .venv
	$(PYTHON) -m pip install -r requirements.txt

venv: .venv/bin/python

fetch: venv
	$(PYTHON) -m tracker.fetch

load: fetch
	$(PYTHON) -m tracker.load

dbt: load
	cd dbt && ../.venv/bin/dbt build --profiles-dir . && cp target/run_results.json target/build_results.json
	cd dbt && ../.venv/bin/dbt source freshness --profiles-dir .

export: dbt
	$(PYTHON) -m tracker.export_site
