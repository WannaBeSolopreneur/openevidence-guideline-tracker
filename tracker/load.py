"""Load cached JSONL into the DuckDB raw schema."""

from __future__ import annotations

import json
import os
from datetime import datetime
from pathlib import Path

import duckdb

ROOT = Path(__file__).resolve().parents[1]
NORM = ROOT / "data" / "raw" / "normalized"


def parse_ts(value: str) -> datetime:
    return datetime.strptime(value, "%Y-%m-%d %H:%M:%S")


def rows(name: str) -> list[dict]:
    path = NORM / name
    if not path.exists():
        raise FileNotFoundError(path)
    loaded = []
    for line in path.read_text(encoding="utf-8").splitlines():
        if line.strip():
            loaded.append(json.loads(line))
    return loaded


def insert(con, table: str, columns: list[str], records: list[dict]) -> None:
    if not records:
        raise RuntimeError(f"No rows for raw.{table}")
    placeholders = ", ".join(["?"] * len(columns))
    column_sql = ", ".join(columns)
    payload = []
    for record in records:
        values = []
        for column in columns:
            value = record.get(column)
            if column in {"fetched_at", "first_seen_at", "looked_up_at"} and isinstance(value, str) and value:
                value = parse_ts(value)
            values.append(value)
        payload.append(values)
    con.executemany(
        f"insert into raw.{table} ({column_sql}) values ({placeholders})",
        payload,
    )


def main() -> None:
    db_path = os.environ.get("TRACKER_DB_PATH", str(ROOT / "data" / "tracker.duckdb"))
    Path(db_path).parent.mkdir(parents=True, exist_ok=True)
    if Path(db_path).exists():
        Path(db_path).unlink()
    con = duckdb.connect(db_path)
    con.execute("create schema if not exists raw")

    con.execute(
        """
        create table raw.openfda_labels (
            label_id varchar,
            set_id varchar,
            effective_time varchar,
            brand_name varchar,
            generic_name varchar,
            product_type varchar,
            rxcui_raw varchar,
            pharm_class varchar,
            has_boxed_warning integer,
            boxed_warning varchar,
            indications varchar,
            recent_major_changes varchar,
            source_url varchar,
            title varchar,
            summary varchar,
            fetched_at timestamp
        )
        """
    )
    con.execute(
        """
        create table raw.openfda_enforcement (
            recall_number varchar,
            event_id varchar,
            classification varchar,
            status varchar,
            report_date varchar,
            product_description varchar,
            reason_for_recall varchar,
            recalling_firm varchar,
            generic_name varchar,
            rxcui_raw varchar,
            source_url varchar,
            title varchar,
            summary varchar,
            fetched_at timestamp
        )
        """
    )
    con.execute(
        """
        create table raw.federal_register (
            document_number varchar,
            title varchar,
            doc_type varchar,
            abstract varchar,
            publication_date varchar,
            html_url varchar,
            agency_slugs varchar,
            summary varchar,
            fetched_at timestamp
        )
        """
    )
    con.execute(
        """
        create table raw.mmwr (
            media_id varchar,
            title varchar,
            description varchar,
            source_url varchar,
            published_raw varchar,
            summary varchar,
            fetched_at timestamp
        )
        """
    )
    con.execute(
        """
        create table raw.rxnorm_lookup (
            query_name varchar,
            rxcui varchar,
            looked_up_at timestamp,
            fetched_at timestamp
        )
        """
    )
    con.execute(
        """
        create table raw.first_seen (
            item_id varchar,
            first_seen_at timestamp,
            fetched_at timestamp
        )
        """
    )
    con.execute(
        """
        create table raw.fetch_meta (
            source_id varchar,
            source_name varchar,
            fetched_at timestamp,
            record_count integer,
            ok integer,
            note varchar
        )
        """
    )

    insert(
        con,
        "openfda_labels",
        [
            "label_id",
            "set_id",
            "effective_time",
            "brand_name",
            "generic_name",
            "product_type",
            "rxcui_raw",
            "pharm_class",
            "has_boxed_warning",
            "boxed_warning",
            "indications",
            "recent_major_changes",
            "source_url",
            "title",
            "summary",
            "fetched_at",
        ],
        rows("openfda_labels.jsonl"),
    )
    insert(
        con,
        "openfda_enforcement",
        [
            "recall_number",
            "event_id",
            "classification",
            "status",
            "report_date",
            "product_description",
            "reason_for_recall",
            "recalling_firm",
            "generic_name",
            "rxcui_raw",
            "source_url",
            "title",
            "summary",
            "fetched_at",
        ],
        rows("openfda_enforcement.jsonl"),
    )
    insert(
        con,
        "federal_register",
        [
            "document_number",
            "title",
            "doc_type",
            "abstract",
            "publication_date",
            "html_url",
            "agency_slugs",
            "summary",
            "fetched_at",
        ],
        rows("federal_register.jsonl"),
    )
    insert(
        con,
        "mmwr",
        ["media_id", "title", "description", "source_url", "published_raw", "summary", "fetched_at"],
        rows("mmwr.jsonl"),
    )
    insert(
        con,
        "rxnorm_lookup",
        ["query_name", "rxcui", "looked_up_at", "fetched_at"],
        rows("rxnorm_lookup.jsonl"),
    )
    insert(
        con,
        "first_seen",
        ["item_id", "first_seen_at", "fetched_at"],
        rows("first_seen.jsonl"),
    )
    insert(
        con,
        "fetch_meta",
        ["source_id", "source_name", "fetched_at", "record_count", "ok", "note"],
        rows("fetch_meta.jsonl"),
    )
    con.close()
    print(f"Loaded raw tables into {db_path}")


if __name__ == "__main__":
    main()
