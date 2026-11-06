# Guideline change tracker

A live page of public clinical updates for a Member of Technical Staff, Health Systems application at OpenEvidence. It is an independent demo. It is not affiliated with OpenEvidence, and it does not use OpenEvidence data or branding.

The page says guidance changes fast, and a boxed warning, a CDC report, or an FDA notice can be missed in a busy clinic week. A daily pipeline pulls public updates, keeps the link to the original document, and codes a change only when a phrase map or a public drug code says so.

## What is on the page

The navy hero names OpenEvidence and the role. Four tiles use example targets I set for this demo. They are not OpenEvidence goals.

On the 6 Nov 2026 pull:

| Source | Items |
| --- | ---: |
| FDA labels | 64 |
| FDA recalls | 66 |
| Federal Register | 80 |
| CDC MMWR | 40 |

That pull scored 4 of 4 sources on track, a 41 hour median to surface (on track against a 48 hour example), 40.8% of items coded (on track against 40%), and 2 high-impact changes published this week (behind a pace target of 4). The page prints the fetch time in UTC and a freshness line for each source.

## How to run

```bash
python3 -m venv .venv
.venv/bin/python -m pip install -r requirements.txt
make all
```

`make all` fetches, loads DuckDB, runs `dbt build`, checks source freshness, and writes `site/data.js`. Open `site/index.html` in a browser. The static page does not call an API.

## Pipeline

1. `tracker/fetch.py` calls the public APIs and stores the raw bodies in `data/raw/cache`.
2. Normalized rows land in `data/raw/normalized`, with a first-seen ledger so later runs keep the original fetch time.
3. `tracker/load.py` loads a typed `raw` schema.
4. dbt builds staging views, intermediate views, and mart tables.
5. `tracker/export_site.py` writes `site/data.json` and `site/data.js`.

GitHub Actions runs the same path every day at 12:00 UTC (`.github/workflows/daily.yml`) and commits the refreshed data. A Pages deploy job is in the workflow, and it runs only when the repository variable `DEPLOY_PAGES` is `true`. This repository stays private.

## Sources

Kept:

- openFDA drug labels. Newest prescription labels, plus prescription labels with a boxed warning. The link is DailyMed for that `set_id`.
- openFDA drug enforcement. Recent reports, plus Class I recalls. The link is the openFDA record for that recall number. The FDA recall HTML pages do not contain the recall text, so they are not used.
- Federal Register documents from FDA, CDC, CMS, and HHS that match guidance or recommendation. The link is the document page.
- CDC MMWR from the public media collection `342778`, which is the live MMWR collection. Each row links to the CDC article URL in that JSON.

Dropped:

- USPSTF. The public API has required a key since 1 Mar 2021, and the keyless call only returns a warning.
- The legacy MMWR RSS file at `cdc.gov/mmwr/rss/mmwr.xml`. Its newest item is from 2018. The live RSS item links do not open the article, so this tracker uses the JSON listing for the same collection.

## Codes

ICD-10 links come from `dbt/seeds/icd10_keywords.csv`. A phrase has to appear in the title, summary, or a short snippet. Short tokens such as copd, ckd, hiv, adhd, covid, and stroke match the title only. A longer phrase wins when a shorter phrase sits inside it. Colon and colorectal phrases both use C18.9. That is a simplification, and the README is the place it is documented. The matcher does not read the full label.

RxNorm links come from the `rxcui` on the openFDA record, or from RxNav when a generic name in the seed appears in the text and RxNav returns a code. A miss is not stored as a code. Nothing is invented.

High impact means a boxed warning, a Class I recall, an MMWR title that contains recommendation, or a Federal Register title that contains guidance and an FDA agency. Other notices stay in the feed and are not marked high impact.

## Tests

`dbt build` on this pull passed 39 data tests. Source freshness passed 5 checks. Tests require a source URL on every displayed item, an evidenced ICD-10 or RxNorm link, the four example goals, and the pace status rules.

## About the profile

`config/profile.json` uses one public sentence. The private job-demo-template repository was not readable from this environment, so no extra biography was added.
