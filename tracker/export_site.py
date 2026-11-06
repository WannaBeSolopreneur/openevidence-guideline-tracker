"""Export marts and the dbt run into the static page payload."""

from __future__ import annotations

import json
import os
from datetime import date, datetime
from decimal import Decimal
from pathlib import Path

import duckdb

ROOT = Path(__file__).resolve().parents[1]
SITE = ROOT / "site"


def jsonable(value):
    if isinstance(value, datetime):
        return value.replace(microsecond=0).isoformat() + "Z"
    if isinstance(value, date):
        return value.isoformat()
    if isinstance(value, Decimal):
        return float(value)
    return value


def table(con, sql: str) -> list[dict]:
    cursor = con.execute(sql)
    columns = [item[0] for item in cursor.description]
    return [
        {column: jsonable(value) for column, value in zip(columns, row)}
        for row in cursor.fetchall()
    ]


def load_json(path: Path) -> dict:
    if not path.exists():
        raise FileNotFoundError(path)
    return json.loads(path.read_text(encoding="utf-8"))


def main() -> None:
    db_path = os.environ.get("TRACKER_DB_PATH", str(ROOT / "data" / "tracker.duckdb"))
    con = duckdb.connect(db_path, read_only=True)
    payload = {
        "profile": json.loads((ROOT / "config" / "profile.json").read_text(encoding="utf-8")),
        "company": json.loads((ROOT / "config" / "company.json").read_text(encoding="utf-8")),
        "goals": table(con, "select * from marts.mart_goal_status order by sort_order"),
        "sources": table(con, "select * from marts.mart_source_freshness order by source_name"),
        "actions": table(con, "select * from marts.mart_actions_this_week order by sort_order"),
        "feed": table(con, "select * from marts.mart_feed"),
        "areas": table(
            con,
            """
            select area, item_count
            from marts.mart_changes_by_area
            order by case when area = 'Not coded' then 1 else 0 end, item_count desc, area
            """,
        ),
        "weekly": table(
            con,
            """
            select week_start, source_id, source_name, item_count
            from marts.mart_weekly_volume
            order by week_start, source_name
            """,
        ),
        "counts": table(
            con,
            """
            select source_id, source_name, count(*) as item_count
            from marts.fct_guideline_changes
            group by source_id, source_name
            order by source_name
            """,
        ),
    }
    con.close()

    build = load_json(ROOT / "dbt" / "target" / "build_results.json")
    freshness = load_json(ROOT / "dbt" / "target" / "sources.json")
    tests = [row for row in build.get("results", []) if str(row.get("unique_id", "")).startswith("test.")]
    passed = sum(1 for row in tests if row.get("status") == "pass")
    freshness_rows = freshness.get("results", [])
    payload["build"] = {
        "tests_passed": passed,
        "tests_total": len(tests),
        "freshness_passed": sum(1 for row in freshness_rows if row.get("status") == "pass"),
        "freshness_total": len(freshness_rows),
        "models": sorted(
            path.relative_to(ROOT / "dbt" / "models").with_suffix("").as_posix()
            for path in (ROOT / "dbt" / "models").rglob("*.sql")
        ),
    }
    payload["generated_at"] = max(row["fetched_at"] for row in payload["sources"])
    if payload["build"]["tests_passed"] != payload["build"]["tests_total"]:
        raise RuntimeError("dbt tests did not all pass")
    if len(payload["actions"]) != 5:
        raise RuntimeError("expected 5 actions")
    for row in payload["feed"] + payload["actions"]:
        if not str(row["source_url"]).startswith("https://"):
            raise RuntimeError(f"missing source url for {row['item_id']}")

    text = json.dumps(payload, indent=2, ensure_ascii=False)
    (SITE / "data.json").write_text(text + "\n", encoding="utf-8")
    (SITE / "data.js").write_text("window.SITE_DATA = " + text + ";\n", encoding="utf-8")
    print(f"Wrote site data for {payload['generated_at']}")


if __name__ == "__main__":
    main()
