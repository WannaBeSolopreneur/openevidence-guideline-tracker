"""Pull public guidance updates and cache the raw responses.

Sources that come back:
- openFDA drug labels, recent prescription labels and boxed warnings
- openFDA drug enforcement, recent reports and Class I recalls
- Federal Register documents from FDA, CDC, CMS, and HHS
- CDC MMWR items from the public media collection that also backs the MMWR RSS

USPSTF is not called. Their API has required a key since 2021.
The legacy MMWR RSS file stops in 2018, and the live RSS item links do not
open the article, so MMWR rows use the same CDC collection as JSON.
"""

from __future__ import annotations

import json
import re
import time
import urllib.error
import urllib.request
from datetime import datetime, timedelta, timezone
from pathlib import Path
from urllib.parse import quote, urlencode

ROOT = Path(__file__).resolve().parents[1]
RAW = ROOT / "data" / "raw"
CACHE = RAW / "cache"
NORM = RAW / "normalized"
SEED = ROOT / "dbt" / "seeds" / "drug_candidates.csv"

USER_AGENT = "guideline-tracker-demo/1.0 (independent public-data demo)"


def utcnow() -> datetime:
    return datetime.now(timezone.utc).replace(microsecond=0)


def stamp(value: datetime) -> str:
    return value.strftime("%Y-%m-%d %H:%M:%S")


def clean(value, limit: int = 400) -> str:
    if value is None:
        return ""
    if isinstance(value, list):
        value = " ".join(str(part) for part in value if part)
    text = str(value)
    text = (
        text.replace("\u2014", " - ")
        .replace("\u2013", " - ")
        .replace("\u2012", " - ")
        .replace(";", ",")
        .replace("\u00a0", " ")
    )
    text = re.sub(r"\s+", " ", text).strip()
    if limit and len(text) > limit:
        cut = text[:limit].rsplit(" ", 1)[0]
        text = cut or text[:limit]
    return text


def first(value) -> str:
    if isinstance(value, list):
        return "" if not value or value[0] is None else str(value[0])
    if value is None:
        return ""
    return str(value)


def as_dict(value) -> dict:
    return value if isinstance(value, dict) else {}


def rxcui_csv(value, limit: int = 3) -> str:
    items = value if isinstance(value, list) else ([value] if value else [])
    out: list[str] = []
    for item in items:
        token = str(item).strip()
        if token.isdigit() and token not in out:
            out.append(token)
        if len(out) >= limit:
            break
    return ",".join(out)


def fetch_bytes(url: str, accept: str = "application/json", timeout: int = 60) -> tuple[int, bytes]:
    request = urllib.request.Request(
        url,
        headers={"User-Agent": USER_AGENT, "Accept": accept},
    )
    last_error: Exception | None = None
    for attempt in range(3):
        try:
            with urllib.request.urlopen(request, timeout=timeout) as response:
                return response.status, response.read()
        except urllib.error.HTTPError as error:
            body = error.read()[:400]
            last_error = RuntimeError(f"HTTP {error.code} for {url} {body!r}")
            if error.code in (400, 404):
                raise last_error
            time.sleep(1.2 * (attempt + 1))
        except Exception as error:  # noqa: BLE001
            last_error = error
            time.sleep(1.2 * (attempt + 1))
    raise RuntimeError(f"Failed to fetch {url}") from last_error


def save_raw(name: str, body: bytes) -> None:
    path = CACHE / name
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_bytes(body)


def write_jsonl(name: str, rows: list[dict]) -> None:
    NORM.mkdir(parents=True, exist_ok=True)
    path = NORM / name
    with path.open("w", encoding="utf-8") as handle:
        for row in rows:
            handle.write(json.dumps(row, ensure_ascii=False) + "\n")


def openfda(path: str, search: str, limit: int, sort: str, cache_name: str) -> dict:
    url = (
        f"https://api.fda.gov/{path}?search={quote(search, safe='[]:+\"')}"
        f"&limit={limit}&sort={quote(sort, safe=':')}"
    )
    status, body = fetch_bytes(url)
    save_raw(cache_name, body)
    if status != 200:
        raise RuntimeError(f"openFDA status {status} for {search}")
    time.sleep(0.35)
    return json.loads(body)


def ymd(value) -> str:
    return value.strftime("%Y%m%d")


def label_rows(results: list[dict], fetched: str) -> list[dict]:
    rows = []
    for result in results:
        openfda_block = as_dict(result.get("openfda"))
        set_id = result.get("set_id") or ""
        if not set_id:
            continue
        product_type = first(openfda_block.get("product_type"))
        brand = clean(first(openfda_block.get("brand_name")), 120)
        generic = clean(first(openfda_block.get("generic_name")), 160)
        if brand and generic and brand.lower() != generic.lower():
            title = clean(f"{brand} ({generic})", 180)
        else:
            title = clean(generic or brand or "Drug label update", 180)
        boxed = clean(result.get("boxed_warning"), 500)
        indications = clean(result.get("indications_and_usage"), 600)
        recent = clean(result.get("recent_major_changes"), 300)
        summary = boxed or indications or recent or "Label updated in the openFDA drug label index."
        rows.append(
            {
                "label_id": result.get("id") or set_id,
                "set_id": set_id,
                "effective_time": str(result.get("effective_time") or ""),
                "brand_name": brand,
                "generic_name": generic,
                "product_type": product_type,
                "rxcui_raw": rxcui_csv(openfda_block.get("rxcui")),
                "pharm_class": clean(first(openfda_block.get("pharm_class")), 160),
                "has_boxed_warning": 1 if boxed else 0,
                "boxed_warning": boxed,
                "indications": indications,
                "recent_major_changes": recent,
                "source_url": f"https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid={set_id}",
                "title": title,
                "summary": clean(summary, 280),
                "fetched_at": fetched,
            }
        )
    return rows


def enforcement_url(recall_number: str) -> str:
    search = f'recall_number:"{recall_number}"'
    return "https://api.fda.gov/drug/enforcement.json?search=" + quote(search, safe=':"') + "&limit=1"


def enforcement_rows(results: list[dict], fetched: str) -> list[dict]:
    rows = []
    for result in results:
        recall_number = str(result.get("recall_number") or "").strip()
        if not recall_number:
            continue
        openfda_block = as_dict(result.get("openfda"))
        description = clean(result.get("product_description"), 220)
        reason = clean(result.get("reason_for_recall"), 280)
        title = description or f"Drug recall {recall_number}"
        rows.append(
            {
                "recall_number": recall_number,
                "event_id": str(result.get("event_id") or ""),
                "classification": clean(result.get("classification"), 40),
                "status": clean(result.get("status"), 40),
                "report_date": str(result.get("report_date") or ""),
                "product_description": description,
                "reason_for_recall": reason,
                "recalling_firm": clean(result.get("recalling_firm"), 160),
                "generic_name": clean(first(openfda_block.get("generic_name")), 160),
                "rxcui_raw": rxcui_csv(openfda_block.get("rxcui")),
                "source_url": enforcement_url(recall_number),
                "title": clean(title, 180),
                "summary": reason or "Drug recall reported in the openFDA enforcement index.",
                "fetched_at": fetched,
            }
        )
    return rows


def federal_register(agencies: list[str], term: str, start: str, per_page: int) -> dict:
    params: list[tuple[str, str]] = [
        ("per_page", str(per_page)),
        ("order", "newest"),
        ("conditions[publication_date][gte]", start),
        ("conditions[term]", term),
    ]
    for agency in agencies:
        params.append(("conditions[agencies][]", agency))
    for field in (
        "title",
        "type",
        "abstract",
        "publication_date",
        "html_url",
        "pdf_url",
        "document_number",
        "agencies",
    ):
        params.append(("fields[]", field))
    url = "https://www.federalregister.gov/api/v1/documents.json?" + urlencode(params)
    status, body = fetch_bytes(url)
    save_raw(f"federal_register_{agencies[0]}_{per_page}.json", body)
    if status != 200:
        raise RuntimeError(f"Federal Register status {status}")
    time.sleep(0.35)
    return json.loads(body)


def fr_rows(results: list[dict], fetched: str) -> list[dict]:
    rows = []
    for result in results:
        number = str(result.get("document_number") or "").strip()
        url = str(result.get("html_url") or "").strip()
        if url.startswith("http://"):
            url = "https://" + url[len("http://") :]
        if not number or not url.startswith("https://"):
            continue
        slugs = []
        for agency in result.get("agencies") or []:
            if isinstance(agency, dict) and agency.get("slug"):
                slugs.append(agency["slug"])
        abstract = clean(result.get("abstract"), 500)
        rows.append(
            {
                "document_number": number,
                "title": clean(result.get("title"), 220),
                "doc_type": clean(result.get("type"), 40),
                "abstract": abstract,
                "publication_date": str(result.get("publication_date") or ""),
                "html_url": url,
                "agency_slugs": "|".join(slugs),
                "summary": clean(abstract, 280) or "Federal Register document.",
                "fetched_at": fetched,
            }
        )
    return rows


def mmwr_rows(payload: dict, fetched: str) -> list[dict]:
    rows = []
    for result in payload.get("results") or []:
        url = str(result.get("sourceUrl") or result.get("targetUrl") or "").strip()
        if url.startswith("http://"):
            url = "https://" + url[len("http://") :]
        if not url.startswith("https://"):
            continue
        title = clean(result.get("name"), 220)
        description = clean(result.get("description"), 400)
        if not title:
            continue
        rows.append(
            {
                "media_id": str(result.get("id") or ""),
                "title": title,
                "description": description,
                "source_url": url,
                "published_raw": str(result.get("datePublished") or ""),
                "summary": clean(description, 280) or "CDC MMWR report.",
                "fetched_at": fetched,
            }
        )
    return rows


def load_candidates() -> list[str]:
    names = []
    for line in SEED.read_text(encoding="utf-8").splitlines()[1:]:
        name = line.strip().lower()
        if len(name) >= 5 and name.isalpha():
            names.append(name)
    return sorted(set(names))


def mentioned(name: str, text: str) -> bool:
    return re.search(rf"(^|[^a-z0-9]){re.escape(name)}([^a-z0-9]|$)", text) is not None


def rxnav_lookup(name: str) -> str | None:
    url = "https://rxnav.nlm.nih.gov/REST/rxcui.json?" + urlencode({"name": name, "search": "2"})
    _status, body = fetch_bytes(url)
    folder = CACHE / "rxnav"
    folder.mkdir(parents=True, exist_ok=True)
    (folder / f"{name}.json").write_bytes(body)
    payload = json.loads(body)
    ids = ((payload.get("idGroup") or {}).get("rxnormId")) or []
    if not ids:
        return None
    rxcui = str(ids[0])
    return rxcui if rxcui.isdigit() else None


def dedupe(rows: list[dict], key: str, prefer) -> list[dict]:
    chosen: dict[str, dict] = {}
    for row in rows:
        current = chosen.get(row[key])
        if current is None or prefer(row, current):
            chosen[row[key]] = row
    return list(chosen.values())


def main() -> None:
    CACHE.mkdir(parents=True, exist_ok=True)
    now = utcnow()
    fetched = stamp(now)
    end = now.date()
    start_180 = end - timedelta(days=180)
    start_365 = end - timedelta(days=365)
    fr_start = (end - timedelta(days=180)).isoformat()

    prescription = openfda(
        "drug/label.json",
        f'effective_time:[{ymd(start_180)} TO {ymd(end)}] AND openfda.product_type:"HUMAN PRESCRIPTION DRUG"',
        60,
        "effective_time:desc",
        "openfda_labels_recent.json",
    )
    boxed = openfda(
        "drug/label.json",
        f"effective_time:[{ymd(start_180)} TO {ymd(end)}] AND _exists_:boxed_warning "
        'AND openfda.product_type:"HUMAN PRESCRIPTION DRUG"',
        30,
        "effective_time:desc",
        "openfda_labels_boxed.json",
    )
    labels = label_rows(prescription.get("results") or [], fetched)
    labels += label_rows(boxed.get("results") or [], fetched)
    labels = [
        row
        for row in labels
        if row["product_type"] == "HUMAN PRESCRIPTION DRUG" and row["effective_time"].isdigit()
    ]
    labels = dedupe(
        labels,
        "set_id",
        lambda new, old: (new["has_boxed_warning"], new["effective_time"])
        > (old["has_boxed_warning"], old["effective_time"]),
    )
    if not labels:
        raise RuntimeError("openFDA returned no prescription labels")

    recent_recalls = openfda(
        "drug/enforcement.json",
        f"report_date:[{ymd(start_180)} TO {ymd(end)}]",
        40,
        "report_date:desc",
        "openfda_enforcement_recent.json",
    )
    class_i = openfda(
        "drug/enforcement.json",
        f'report_date:[{ymd(start_365)} TO {ymd(end)}] AND classification:"Class I"',
        30,
        "report_date:desc",
        "openfda_enforcement_class_i.json",
    )
    recalls = enforcement_rows(recent_recalls.get("results") or [], fetched)
    recalls += enforcement_rows(class_i.get("results") or [], fetched)
    recalls = [row for row in recalls if row["report_date"].isdigit() and row["source_url"].startswith("https://")]
    recalls = dedupe(
        recalls,
        "recall_number",
        lambda new, old: (new["classification"] == "Class I", new["report_date"])
        > (old["classification"] == "Class I", old["report_date"]),
    )
    if not recalls:
        raise RuntimeError("openFDA returned no enforcement reports")

    fr_payloads = [
        federal_register(["food-and-drug-administration"], "guidance", fr_start, 40),
        federal_register(["centers-for-disease-control-and-prevention"], "recommendation", fr_start, 20),
        federal_register(["centers-for-medicare-medicaid-services"], "guidance", fr_start, 20),
        federal_register(["health-and-human-services-department"], "guidance", fr_start, 15),
    ]
    documents = []
    for payload in fr_payloads:
        documents.extend(fr_rows(payload.get("results") or [], fetched))
    documents = dedupe(documents, "document_number", lambda new, old: new["publication_date"] > old["publication_date"])
    documents.sort(key=lambda row: row["publication_date"], reverse=True)
    documents = documents[:80]
    if not documents:
        raise RuntimeError("Federal Register returned no documents")

    mmwr_url = "https://tools.cdc.gov/api/v2/resources/media.json?parentid=342778&max=40"
    status, body = fetch_bytes(mmwr_url)
    save_raw("mmwr_media_342778.json", body)
    if status != 200:
        raise RuntimeError(f"CDC MMWR status {status}")
    mmwr = mmwr_rows(json.loads(body), fetched)
    if not mmwr:
        raise RuntimeError("CDC MMWR returned no items with a source URL")

    texts = []
    for row in labels:
        texts.append(" ".join([row["title"], row["summary"], row["indications"], row["generic_name"]]).lower())
    for row in recalls:
        texts.append(" ".join([row["title"], row["summary"], row["generic_name"]]).lower())
    for row in documents:
        texts.append(" ".join([row["title"], row["summary"], row["abstract"]]).lower())
    for row in mmwr:
        texts.append(" ".join([row["title"], row["summary"], row["description"]]).lower())
    blob = "\n".join(texts)

    cache_path = RAW / "rxnorm_cache.json"
    cache = json.loads(cache_path.read_text(encoding="utf-8")) if cache_path.exists() else {}
    wanted = set()
    for name in load_candidates():
        if mentioned(name, blob):
            wanted.add(name)
    lookups = 0
    for name in sorted(wanted):
        if name in cache or lookups >= 80:
            continue
        try:
            rxcui = rxnav_lookup(name)
        except Exception:
            rxcui = None
        cache[name] = {"rxcui": rxcui, "looked_up_at": fetched}
        lookups += 1
        time.sleep(0.15)
    cache_path.write_text(json.dumps(cache, indent=2, sort_keys=True), encoding="utf-8")
    rxnorm_rows = [
        {
            "query_name": name,
            "rxcui": entry.get("rxcui") or "",
            "looked_up_at": entry.get("looked_up_at") or fetched,
            "fetched_at": fetched,
        }
        for name, entry in sorted(cache.items())
        if isinstance(entry, dict)
    ]
    if not rxnorm_rows:
        raise RuntimeError("RxNav cache is empty")

    write_jsonl("openfda_labels.jsonl", labels)
    write_jsonl("openfda_enforcement.jsonl", recalls)
    write_jsonl("federal_register.jsonl", documents)
    write_jsonl("mmwr.jsonl", mmwr)
    write_jsonl("rxnorm_lookup.jsonl", rxnorm_rows)

    item_ids = [f"openfda_label:{row['set_id']}" for row in labels]
    item_ids += [f"openfda_enforcement:{row['recall_number']}" for row in recalls]
    item_ids += [f"federal_register:{row['document_number']}" for row in documents]
    item_ids += [f"cdc_mmwr:{row['media_id']}" for row in mmwr]
    ledger_path = RAW / "first_seen.json"
    ledger = json.loads(ledger_path.read_text(encoding="utf-8")) if ledger_path.exists() else {}
    for item_id in item_ids:
        ledger.setdefault(item_id, fetched)
    ledger_path.write_text(json.dumps(ledger, indent=2, sort_keys=True), encoding="utf-8")
    write_jsonl(
        "first_seen.jsonl",
        [
            {"item_id": item_id, "first_seen_at": seen_at, "fetched_at": fetched}
            for item_id, seen_at in sorted(ledger.items())
            if item_id in set(item_ids)
        ],
    )

    meta = [
        {
            "source_id": "openfda_label",
            "source_name": "FDA labels",
            "fetched_at": fetched,
            "record_count": len(labels),
            "ok": 1,
            "note": "openFDA drug labels, prescription products, plus boxed warnings.",
        },
        {
            "source_id": "openfda_enforcement",
            "source_name": "FDA recalls",
            "fetched_at": fetched,
            "record_count": len(recalls),
            "ok": 1,
            "note": "openFDA drug enforcement. The link is the openFDA record.",
        },
        {
            "source_id": "federal_register",
            "source_name": "Federal Register",
            "fetched_at": fetched,
            "record_count": len(documents),
            "ok": 1,
            "note": "FDA, CDC, CMS, and HHS documents that match guidance or recommendation.",
        },
        {
            "source_id": "cdc_mmwr",
            "source_name": "CDC MMWR",
            "fetched_at": fetched,
            "record_count": len(mmwr),
            "ok": 1,
            "note": "CDC media collection 342778, the live MMWR collection.",
        },
    ]
    write_jsonl("fetch_meta.jsonl", meta)
    manifest = {
        "fetched_at": fetched,
        "counts": {row["source_id"]: row["record_count"] for row in meta},
        "rxnorm_cached": len(rxnorm_rows),
        "rxnorm_lookups_this_run": lookups,
        "dropped": [
            "USPSTF. The public API requires a key and the keyless response is only a warning.",
            "Legacy CDC MMWR RSS at cdc.gov/mmwr/rss/mmwr.xml. The newest item is from 2018.",
        ],
    }
    (RAW / "manifest.json").write_text(json.dumps(manifest, indent=2), encoding="utf-8")
    print(json.dumps(manifest["counts"]))


if __name__ == "__main__":
    main()
