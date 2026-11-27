window.SITE_DATA = {
  "profile": {
    "name": "Asad Moulvi",
    "headline": "Data Scientist at DataQHealth",
    "about": "Built by Asad Moulvi, Data Scientist at DataQHealth, where I build healthcare data pipelines that process 10M+ records a year.",
    "links": [
      {
        "label": "GitHub",
        "href": "https://github.com/WannaBeSolopreneur"
      },
      {
        "label": "LinkedIn",
        "href": "https://www.linkedin.com/in/asad-moulvi-aaa278175"
      },
      {
        "label": "Email",
        "href": "mailto:asad.moulvi01@gmail.com"
      }
    ]
  },
  "company": {
    "company": "OpenEvidence",
    "role": "Member of Technical Staff, Health Systems",
    "roleUrl": "https://jobs.ashbyhq.com/openevidence/79569aab-9bc6-4f0d-b98e-e2bdb9fe171a",
    "teamEmail": "engineering@openevidence.com",
    "heroLine": "A small live demo I built for OpenEvidence.",
    "disclaimer": "Independent demo using public data. Not affiliated with OpenEvidence.",
    "problem": "Guidance changes fast. A boxed warning, a CDC report, or an FDA notice can land in the middle of a busy clinic week. The update sits in a label or a federal document, and a doctor can miss it.",
    "solution": "A daily pipeline pulls public updates, keeps the link to the original document, and codes a change to a condition or a drug only when a phrase map or a public drug code says so. The tiles use example targets I set for this demo."
  },
  "goals": [
    {
      "goal_id": "sources_fresh",
      "label": "Sources refreshed today",
      "detail": "Example target. Share of the four public sources that returned on this run.",
      "unit": "ratio",
      "metric_kind": "snapshot",
      "direction": "higher",
      "current_value": 1.0,
      "target_value": 1.0,
      "current_label": "4 of 4",
      "target_label": "4 of 4",
      "progress_ratio": 1.0,
      "pace_ratio": null,
      "status": "on_track",
      "status_label": "On track",
      "sort_order": 1,
      "as_of": "2026-11-27",
      "days_elapsed": 5,
      "days_in_period": 7,
      "on_track_ratio": 0.95,
      "at_risk_ratio": 0.8
    },
    {
      "goal_id": "hours_to_surface",
      "label": "Hours to surface",
      "detail": "Example target. Median hours from the publish date to the first fetch, for items published in the last 7 days. A daily job first sees older items in that window, so the median is often a few days. Lower is better.",
      "unit": "hours",
      "metric_kind": "snapshot",
      "direction": "lower",
      "current_value": 116.0,
      "target_value": 48.0,
      "current_label": "116 hours",
      "target_label": "48 hours",
      "progress_ratio": 0.41379310344827586,
      "pace_ratio": null,
      "status": "behind",
      "status_label": "Behind",
      "sort_order": 2,
      "as_of": "2026-11-27",
      "days_elapsed": 5,
      "days_in_period": 7,
      "on_track_ratio": 0.95,
      "at_risk_ratio": 0.8
    },
    {
      "goal_id": "coded_share",
      "label": "Coded to ICD-10 or RxNorm",
      "detail": "Example target. Share of items with an ICD-10 phrase match or a confirmed RxNorm code.",
      "unit": "percent",
      "metric_kind": "snapshot",
      "direction": "higher",
      "current_value": 0.30970149253731344,
      "target_value": 0.4,
      "current_label": "31%",
      "target_label": "40%",
      "progress_ratio": 0.7742537313432836,
      "pace_ratio": null,
      "status": "behind",
      "status_label": "Behind",
      "sort_order": 3,
      "as_of": "2026-11-27",
      "days_elapsed": 5,
      "days_in_period": 7,
      "on_track_ratio": 0.95,
      "at_risk_ratio": 0.8
    },
    {
      "goal_id": "high_impact_week",
      "label": "High-impact changes this week",
      "detail": "Example target. Boxed warnings, CDC recommendations, Class I recalls, and FDA guidance notices published this week. Pace line is day 5 of 7.",
      "unit": "count",
      "metric_kind": "pace",
      "direction": "higher",
      "current_value": 26.0,
      "target_value": 4.0,
      "current_label": "26",
      "target_label": "4",
      "progress_ratio": 6.5,
      "pace_ratio": 0.7142857142857143,
      "status": "on_track",
      "status_label": "On track",
      "sort_order": 4,
      "as_of": "2026-11-27",
      "days_elapsed": 5,
      "days_in_period": 7,
      "on_track_ratio": 0.95,
      "at_risk_ratio": 0.8
    }
  ],
  "sources": [
    {
      "source_id": "cdc_mmwr",
      "source_name": "CDC MMWR",
      "fetched_at": "2026-11-27T20:55:11Z",
      "record_count": 40,
      "ok": 1,
      "note": "CDC media collection 342778, the live MMWR collection.",
      "latest_published_at": "2026-11-25T00:00:00Z"
    },
    {
      "source_id": "openfda_label",
      "source_name": "FDA labels",
      "fetched_at": "2026-11-27T20:55:11Z",
      "record_count": 79,
      "ok": 1,
      "note": "openFDA drug labels, prescription products, plus boxed warnings.",
      "latest_published_at": "2026-11-24T00:00:00Z"
    },
    {
      "source_id": "openfda_enforcement",
      "source_name": "FDA recalls",
      "fetched_at": "2026-11-27T20:55:11Z",
      "record_count": 69,
      "ok": 1,
      "note": "openFDA drug enforcement. The link is the openFDA record.",
      "latest_published_at": "2026-11-18T00:00:00Z"
    },
    {
      "source_id": "federal_register",
      "source_name": "Federal Register",
      "fetched_at": "2026-11-27T20:55:11Z",
      "record_count": 80,
      "ok": 1,
      "note": "FDA, CDC, CMS, and HHS documents that match guidance or recommendation.",
      "latest_published_at": "2026-11-27T00:00:00Z"
    }
  ],
  "actions": [
    {
      "action_id": "openfda_label:07593aa4-f2c4-4d6e-b186-ab2a4ecaa38a",
      "item_id": "openfda_label:07593aa4-f2c4-4d6e-b186-ab2a4ecaa38a",
      "source_name": "FDA labels",
      "title": "MORPHINE SULFATE",
      "source_url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=07593aa4-f2c4-4d6e-b186-ab2a4ecaa38a",
      "impact_reason": "Boxed warning",
      "published_at": "2026-11-24T00:00:00Z",
      "sentence": "A boxed warning changed on this label. A clinician team should read it.",
      "sort_order": 1
    },
    {
      "action_id": "openfda_label:326e8ab0-6886-4749-9544-885b37070051",
      "item_id": "openfda_label:326e8ab0-6886-4749-9544-885b37070051",
      "source_name": "FDA labels",
      "title": "Paroxetine (PAROXETINE HYDROCHLORIDE)",
      "source_url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=326e8ab0-6886-4749-9544-885b37070051",
      "impact_reason": "Boxed warning",
      "published_at": "2026-11-24T00:00:00Z",
      "sentence": "A boxed warning changed on this label. A clinician team should read it.",
      "sort_order": 2
    },
    {
      "action_id": "openfda_label:337bf03c-c1be-4246-b4b2-eca9fc0fee34",
      "item_id": "openfda_label:337bf03c-c1be-4246-b4b2-eca9fc0fee34",
      "source_name": "FDA labels",
      "title": "SITAGLIPTIN AND METFORMIN HYDROCHLORIDE",
      "source_url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=337bf03c-c1be-4246-b4b2-eca9fc0fee34",
      "impact_reason": "Boxed warning",
      "published_at": "2026-11-24T00:00:00Z",
      "sentence": "A boxed warning changed on this label. A clinician team should read it.",
      "sort_order": 3
    },
    {
      "action_id": "openfda_label:4826031b-c2b7-4cd0-a4da-59068bd34430",
      "item_id": "openfda_label:4826031b-c2b7-4cd0-a4da-59068bd34430",
      "source_name": "FDA labels",
      "title": "Kaitlib Fe (NORETHINDRONE AND ETHINYL ESTRADIOL)",
      "source_url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=4826031b-c2b7-4cd0-a4da-59068bd34430",
      "impact_reason": "Boxed warning",
      "published_at": "2026-11-24T00:00:00Z",
      "sentence": "A boxed warning changed on this label. A clinician team should read it.",
      "sort_order": 4
    },
    {
      "action_id": "openfda_label:4f9bbc93-13e8-4c24-b429-06516d13dee7",
      "item_id": "openfda_label:4f9bbc93-13e8-4c24-b429-06516d13dee7",
      "source_name": "FDA labels",
      "title": "SITAGLIPTIN AND METFORMIN HYDROCHLORIDE",
      "source_url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=4f9bbc93-13e8-4c24-b429-06516d13dee7",
      "impact_reason": "Boxed warning",
      "published_at": "2026-11-24T00:00:00Z",
      "sentence": "A boxed warning changed on this label. A clinician team should read it.",
      "sort_order": 5
    }
  ],
  "feed": [
    {
      "item_id": "federal_register:2026-24021",
      "source_id": "federal_register",
      "source_name": "Federal Register",
      "published_at": "2026-11-27T00:00:00Z",
      "title": "Individualized Human Genome Editing Products: Considerations for BLA Submission and Postapproval Management, Draft Guidance for Industry, Extension of Comment Period",
      "summary": "The Food and Drug Administration (FDA or the Agency) is extending the comment period for the draft guidance for industry titled \"Individualized Human Genome Editing Products: Considerations for BLA Submission and Postapproval Management\" that appeared in the Federal Register of",
      "source_url": "https://www.federalregister.gov/documents/2026/11/27/2026-24021/individualized-human-genome-editing-products-considerations-for-bla-submission-and-postapproval",
      "high_impact": 1,
      "impact_reason": "FDA guidance",
      "area": "Not coded",
      "code_label": ""
    },
    {
      "item_id": "federal_register:2026-24024",
      "source_id": "federal_register",
      "source_name": "Federal Register",
      "published_at": "2026-11-27T00:00:00Z",
      "title": "Agency Information Collection Activities: Submission for OMB Review, Comment Request",
      "summary": "The Centers for Medicare & Medicaid Services (CMS) is announcing an opportunity for the public to comment on CMS' intention to collect information from the public. Under the Paperwork Reduction Act of 1995 (PRA), federal agencies are required to publish notice in the Federal",
      "source_url": "https://www.federalregister.gov/documents/2026/11/27/2026-24024/agency-information-collection-activities-submission-for-omb-review-comment-request",
      "high_impact": 0,
      "impact_reason": null,
      "area": "Not coded",
      "code_label": ""
    },
    {
      "item_id": "federal_register:2026-24026",
      "source_id": "federal_register",
      "source_name": "Federal Register",
      "published_at": "2026-11-27T00:00:00Z",
      "title": "Agency Information Collection Activities: Proposed Collection, Comment Request",
      "summary": "The Centers for Medicare & Medicaid Services (CMS) is announcing an opportunity for the public to comment on CMS' intention to collect information from the public. Under the Paperwork Reduction Act of 1995 (PRA), federal agencies are required to publish notice in the Federal",
      "source_url": "https://www.federalregister.gov/documents/2026/11/27/2026-24026/agency-information-collection-activities-proposed-collection-comment-request",
      "high_impact": 0,
      "impact_reason": null,
      "area": "Not coded",
      "code_label": ""
    },
    {
      "item_id": "cdc_mmwr:766910",
      "source_id": "cdc_mmwr",
      "source_name": "CDC MMWR",
      "published_at": "2026-11-25T00:00:00Z",
      "title": "Differences Between Urban and Rural Counties in Pregnancy-Related Deaths - United States, 2015 - 2024",
      "summary": "This report describes differences between pregnancy-related deaths in urban and rural areas during 2015 - 2024.",
      "source_url": "https://www.cdc.gov/mmwr/volumes/75/wr/mm7546a1.htm?s_cid=OS_mm7546a1_x",
      "high_impact": 0,
      "impact_reason": null,
      "area": "Not coded",
      "code_label": ""
    },
    {
      "item_id": "cdc_mmwr:766911",
      "source_id": "cdc_mmwr",
      "source_name": "CDC MMWR",
      "published_at": "2026-11-25T00:00:00Z",
      "title": "Notes from the Field: Death Involving the Semisynthetic Kratom-Derived Opioid Dihydro-7-Hydroxymitragynine (MGM-15) from a Product Labeled Cat's Claw - San Francisco, California, September 2026",
      "summary": "This report describes an accidental death in San Francisco, California, involving MGM-15.",
      "source_url": "https://www.cdc.gov/mmwr/volumes/75/wr/mm7546a2.htm?s_cid=OS_mm7546a2_x",
      "high_impact": 0,
      "impact_reason": null,
      "area": "Not coded",
      "code_label": ""
    },
    {
      "item_id": "cdc_mmwr:766912",
      "source_id": "cdc_mmwr",
      "source_name": "CDC MMWR",
      "published_at": "2026-11-25T00:00:00Z",
      "title": "QuickStats: Age-Adjusted Percentage of Adults Aged ≥18 Years Who Visited a Doctor or Other Health Professional During the Preceding 12 Months, by Urbanization Level and Family Income - United States, 2025",
      "summary": "This report describes the percentage of adults who visited a doctor or other health professional during the preceding 12 months.",
      "source_url": "https://www.cdc.gov/mmwr/volumes/75/wr/mm7546a3.htm?s_cid=OS_mm7546a3_x",
      "high_impact": 0,
      "impact_reason": null,
      "area": "Not coded",
      "code_label": ""
    },
    {
      "item_id": "federal_register:2026-23960",
      "source_id": "federal_register",
      "source_name": "Federal Register",
      "published_at": "2026-11-25T00:00:00Z",
      "title": "Medicare Program, Contract Year 2028 Policy and Technical Changes to the Medicare Advantage Program, Medicare Prescription Drug Benefit Program, and Programs of All-Inclusive Care for the Elderly",
      "summary": "This proposed rule would revise the Medicare Advantage (Part C), Medicare Prescription Drug Benefit (Part D), and Programs of All- Inclusive Care for the Elderly regulations to implement changes related to marketing and communications, drug coverage, enrollment processes,",
      "source_url": "https://www.federalregister.gov/documents/2026/11/25/2026-23960/medicare-program-contract-year-2028-policy-and-technical-changes-to-the-medicare-advantage-program",
      "high_impact": 0,
      "impact_reason": null,
      "area": "Not coded",
      "code_label": ""
    },
    {
      "item_id": "federal_register:2026-23995",
      "source_id": "federal_register",
      "source_name": "Federal Register",
      "published_at": "2026-11-25T00:00:00Z",
      "title": "Compounding Animal Drugs From Bulk Drug Substances: Compounding Under CGMP in Federally-Registered Facilities, Draft Guidance for Industry, Extension of Comment Period",
      "summary": "The Food and Drug Administration (FDA or the Agency) is extending the comment period for the notice of availability that appeared in the Federal Register of August 28, 2026. In the notice, FDA requested comments on the draft guidance for industry (GFI) #256B titled \"Compounding",
      "source_url": "https://www.federalregister.gov/documents/2026/11/25/2026-23995/compounding-animal-drugs-from-bulk-drug-substances-compounding-under-cgmp-in-federally-registered",
      "high_impact": 1,
      "impact_reason": "FDA guidance",
      "area": "Not coded",
      "code_label": ""
    },
    {
      "item_id": "federal_register:2026-24015",
      "source_id": "federal_register",
      "source_name": "Federal Register",
      "published_at": "2026-11-25T00:00:00Z",
      "title": "Over-the-Counter Monograph Order Requests: Format and Content, Guidance for Industry, Availability",
      "summary": "The Food and Drug Administration (FDA or Agency) is announcing the availability of a final guidance for industry titled \"Over-the- Counter Monograph Order Requests: Format and Content.\" This guidance provides recommendations on the format and content of the information that a",
      "source_url": "https://www.federalregister.gov/documents/2026/11/25/2026-24015/over-the-counter-monograph-order-requests-format-and-content-guidance-for-industry-availability",
      "high_impact": 1,
      "impact_reason": "FDA guidance",
      "area": "Not coded",
      "code_label": ""
    },
    {
      "item_id": "federal_register:2026-23909",
      "source_id": "federal_register",
      "source_name": "Federal Register",
      "published_at": "2026-11-24T00:00:00Z",
      "title": "Proposed Data Collection Submitted for Public Comment and Recommendations",
      "summary": "The Centers for Disease Control and Prevention (CDC), as part of its continuing effort to reduce public burden and maximize the utility of government information, invites the general public and other federal agencies the opportunity to comment on a continuing information",
      "source_url": "https://www.federalregister.gov/documents/2026/11/24/2026-23909/proposed-data-collection-submitted-for-public-comment-and-recommendations",
      "high_impact": 0,
      "impact_reason": null,
      "area": "Not coded",
      "code_label": ""
    },
    {
      "item_id": "openfda_label:0413f511-6b34-4c15-e48b-3fad08baacbe",
      "source_id": "openfda_label",
      "source_name": "FDA labels",
      "published_at": "2026-11-24T00:00:00Z",
      "title": "HEPARIN SODIUM",
      "summary": "1 INDICATIONS AND USAGE HEPARIN SODIUM IN SODIUM CHLORIDE INJECTION is indicated for: • Prophylaxis and treatment of venous thrombosis and pulmonary embolism, • Prophylaxis and treatment of thromboembolic complications associated with atrial fibrillation, • Treatment of acute",
      "source_url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=0413f511-6b34-4c15-e48b-3fad08baacbe",
      "high_impact": 0,
      "impact_reason": null,
      "area": "Heart and vessels",
      "code_label": "ICD-10 I48.91 Unspecified atrial fibrillation. RxNorm 235473 heparin"
    },
    {
      "item_id": "openfda_label:07593aa4-f2c4-4d6e-b186-ab2a4ecaa38a",
      "source_id": "openfda_label",
      "source_name": "FDA labels",
      "published_at": "2026-11-24T00:00:00Z",
      "title": "MORPHINE SULFATE",
      "summary": "WARNING: SERIOUS AND LIFE-THREATENING RISKS FROM USE OF MORPHINE SULFATE TABLETS Addiction, Abuse, and Misuse Because the use of morphine sulfate tablets exposes patients and other users to the risks of opioid addiction, abuse, and misuse, which can lead to overdose and death,",
      "source_url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=07593aa4-f2c4-4d6e-b186-ab2a4ecaa38a",
      "high_impact": 1,
      "impact_reason": "Boxed warning",
      "area": "Not coded",
      "code_label": "RxNorm 7052 morphine"
    },
    {
      "item_id": "openfda_label:10431e74-3aa0-42b2-9df3-5de81c0011cd",
      "source_id": "openfda_label",
      "source_name": "FDA labels",
      "published_at": "2026-11-24T00:00:00Z",
      "title": "LEUCOVORIN CALCIUM",
      "summary": "1 INDICATIONS AND USAGE Leucovorin Calcium Tablets are a folate analog indicated: • To reduce the toxicity of: o Methotrexate in adult patients with impaired methotrexate elimination, and o Folic acid antagonists or dihydrofolate reductase (DHFR) inhibitors following an overdose",
      "source_url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=10431e74-3aa0-42b2-9df3-5de81c0011cd",
      "high_impact": 0,
      "impact_reason": null,
      "area": "Not coded",
      "code_label": "RxNorm 6851 methotrexate"
    },
    {
      "item_id": "openfda_label:13891e5a-e57a-46e8-911c-2f680352b52b",
      "source_id": "openfda_label",
      "source_name": "FDA labels",
      "published_at": "2026-11-24T00:00:00Z",
      "title": "NOVOLOG (INSULIN ASPART)",
      "summary": "1 INDICATIONS AND USAGE NOVOLOG is indicated to improve glycemic control in adults and pediatric patients with diabetes mellitus. NOVOLOG is rapid acting human insulin analog indicated to improve glycemic control in adults and pediatric patients with diabetes mellitus ( 1 ).",
      "source_url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=13891e5a-e57a-46e8-911c-2f680352b52b",
      "high_impact": 0,
      "impact_reason": null,
      "area": "Not coded",
      "code_label": "RxNorm 253182 insulin"
    },
    {
      "item_id": "openfda_label:13bd4214-9b7f-425b-af5f-fc1ddc678230",
      "source_id": "openfda_label",
      "source_name": "FDA labels",
      "published_at": "2026-11-24T00:00:00Z",
      "title": "AMOXICILLIN",
      "summary": "1 INDICATIONS AND USAGE Adults and Pediatric Patients • Upper Respiratory Tract Infections of the Ear, Nose, and Throat Amoxicillin is indicated in the treatment of infections due to susceptible (ONLY β-lactamase - negative) isolates of Streptococcus species. (α- and β-hemolytic",
      "source_url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=13bd4214-9b7f-425b-af5f-fc1ddc678230",
      "high_impact": 0,
      "impact_reason": null,
      "area": "Not coded",
      "code_label": "RxNorm 723 amoxicillin"
    },
    {
      "item_id": "openfda_label:326e8ab0-6886-4749-9544-885b37070051",
      "source_id": "openfda_label",
      "source_name": "FDA labels",
      "published_at": "2026-11-24T00:00:00Z",
      "title": "Paroxetine (PAROXETINE HYDROCHLORIDE)",
      "summary": "WARNING: SUICIDAL THOUGHTS AND BEHAVIORS Antidepressants increased the risk of suicidal thoughts and behaviors in pediatric and young adult patients in short-term studies. Closely monitor all antidepressant-treated patients for clinical worsening, and for emergence of suicidal",
      "source_url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=326e8ab0-6886-4749-9544-885b37070051",
      "high_impact": 1,
      "impact_reason": "Boxed warning",
      "area": "Mental health",
      "code_label": "ICD-10 F32.9 Major depressive disorder single episode unspecified. F41.9 Anxiety disorder unspecified. R45.851 Suicidal ideations. RxNorm 32937 paroxetine"
    },
    {
      "item_id": "openfda_label:32e34077-aff1-4ec7-f9b0-b8e240768fb8",
      "source_id": "openfda_label",
      "source_name": "FDA labels",
      "published_at": "2026-11-24T00:00:00Z",
      "title": "HEPARIN SODIUM",
      "summary": "1 INDICATIONS AND USAGE Heparin Sodium in Sodium Chloride Injection at a concentration of 2 units/mL is indicated as an anticoagulant to maintain catheter patency. Heparin Sodium in Sodium Chloride Injection at a concentration of 2 units/mL is indicated as an anticoagulant to",
      "source_url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=32e34077-aff1-4ec7-f9b0-b8e240768fb8",
      "high_impact": 0,
      "impact_reason": null,
      "area": "Not coded",
      "code_label": "RxNorm 235473 heparin"
    },
    {
      "item_id": "openfda_label:337bf03c-c1be-4246-b4b2-eca9fc0fee34",
      "source_id": "openfda_label",
      "source_name": "FDA labels",
      "published_at": "2026-11-24T00:00:00Z",
      "title": "SITAGLIPTIN AND METFORMIN HYDROCHLORIDE",
      "summary": "WARNING: LACTIC ACIDOSIS Postmarketing cases of metformin-associated lactic acidosis have resulted in death, hypothermia, hypotension, and resistant bradyarrhythmias. The onset of metformin-associated lactic acidosis is often subtle, accompanied only by nonspecific symptoms such",
      "source_url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=337bf03c-c1be-4246-b4b2-eca9fc0fee34",
      "high_impact": 1,
      "impact_reason": "Boxed warning",
      "area": "Diabetes and metabolism",
      "code_label": "ICD-10 E10.9 Type 1 diabetes mellitus without complications. E11.9 Type 2 diabetes mellitus without complications. RxNorm 6809 metformin. RxNorm 593411 sitagliptin"
    },
    {
      "item_id": "openfda_label:4826031b-c2b7-4cd0-a4da-59068bd34430",
      "source_id": "openfda_label",
      "source_name": "FDA labels",
      "published_at": "2026-11-24T00:00:00Z",
      "title": "Kaitlib Fe (NORETHINDRONE AND ETHINYL ESTRADIOL)",
      "summary": "WARNING: CIGARETTE SMOKING AND SERIOUS CARDIOVASCULAR EVENTS See full prescribing information for complete boxed warning. Women over 35 years old who smoke should not use Kaitlib Fe. ( 4 ) Cigarette smoking increases the risk of serious cardiovascular events from combination",
      "source_url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=4826031b-c2b7-4cd0-a4da-59068bd34430",
      "high_impact": 1,
      "impact_reason": "Boxed warning",
      "area": "Not coded",
      "code_label": "RxNorm 4083 estradiol"
    },
    {
      "item_id": "openfda_label:4f9bbc93-13e8-4c24-b429-06516d13dee7",
      "source_id": "openfda_label",
      "source_name": "FDA labels",
      "published_at": "2026-11-24T00:00:00Z",
      "title": "SITAGLIPTIN AND METFORMIN HYDROCHLORIDE",
      "summary": "WARNING: LACTIC ACIDOSIS Postmarketing cases of metformin-associated lactic acidosis have resulted in death, hypothermia, hypotension, and resistant bradyarrhythmias. The onset of metformin-associated lactic acidosis is often subtle, accompanied only by nonspecific symptoms such",
      "source_url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=4f9bbc93-13e8-4c24-b429-06516d13dee7",
      "high_impact": 1,
      "impact_reason": "Boxed warning",
      "area": "Diabetes and metabolism",
      "code_label": "ICD-10 E10.9 Type 1 diabetes mellitus without complications. E11.9 Type 2 diabetes mellitus without complications. RxNorm 6809 metformin. RxNorm 593411 sitagliptin"
    },
    {
      "item_id": "openfda_label:6f14fa40-97ab-4ec5-b66b-793d6d1abac9",
      "source_id": "openfda_label",
      "source_name": "FDA labels",
      "published_at": "2026-11-24T00:00:00Z",
      "title": "EnBrace HR (LEVOMEFOLATE MAGNESIUM, LEUCOVORIN, FOLIC ACID, FERROUS CYSTEINE GLYCINATE, MAGNESIUM ASCORBATE, ZINC ASCORBATE, COCARBOXYLASE, FLAVIN ADENINE DINUCLEOTIDE,)",
      "summary": "INDICATIONS: EnBrace HR ® is indicated in the TREATMENT of vitamin deficiency - specifically vitamin B12 deficiency - and TREATMENT of hyperhomocysteinemia due to vitamin B12 and/or folate deficiency, and the PREVENTION of deficiency of the vitamin B12 cofactor, l-methylfolate.",
      "source_url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=6f14fa40-97ab-4ec5-b66b-793d6d1abac9",
      "high_impact": 0,
      "impact_reason": null,
      "area": "Not coded",
      "code_label": ""
    },
    {
      "item_id": "openfda_label:71956762-d2f7-4763-9afe-1ca8f32a3cbb",
      "source_id": "openfda_label",
      "source_name": "FDA labels",
      "published_at": "2026-11-24T00:00:00Z",
      "title": "ESOMEPRAZOLE MAGNESIUM",
      "summary": "1 INDICATIONS AND USAGE Esomeprazole magnesium is a proton pump inhibitor (PPI). Esomeprazole magnesium delayed-release capsules are indicated for the: Short-term treatment in the healing of erosive esophagitis (EE) in adults and pediatric patients 12 years to 17 years of age. (",
      "source_url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=71956762-d2f7-4763-9afe-1ca8f32a3cbb",
      "high_impact": 0,
      "impact_reason": null,
      "area": "Not coded",
      "code_label": "RxNorm 283742 esomeprazole"
    },
    {
      "item_id": "openfda_label:781cb1ac-a0d2-4b47-b319-f0b90de86384",
      "source_id": "openfda_label",
      "source_name": "FDA labels",
      "published_at": "2026-11-24T00:00:00Z",
      "title": "PREGABALIN",
      "summary": "1 INDICATIONS AND USAGE Pregabalin capsules are indicated for: Management of neuropathic pain associated with diabetic peripheral neuropathy Management of postherpetic neuralgia Adjunctive therapy for the treatment of partial-onset seizures in patients 1 month of age and older",
      "source_url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=781cb1ac-a0d2-4b47-b319-f0b90de86384",
      "high_impact": 0,
      "impact_reason": null,
      "area": "Not coded",
      "code_label": "RxNorm 187832 pregabalin"
    },
    {
      "item_id": "openfda_label:7d1907c9-d292-4cf9-bb63-ebad771bddab",
      "source_id": "openfda_label",
      "source_name": "FDA labels",
      "published_at": "2026-11-24T00:00:00Z",
      "title": "SUCRALFATE",
      "summary": "INDICATIONS & USAGE Sucralfate oral suspension is indicated in the short-term (up to 8 weeks) treatment of active duodenal ulcer.",
      "source_url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=7d1907c9-d292-4cf9-bb63-ebad771bddab",
      "high_impact": 0,
      "impact_reason": null,
      "area": "Not coded",
      "code_label": ""
    },
    {
      "item_id": "openfda_label:83a84897-ccca-42a1-ab1a-bbf1d43a982b",
      "source_id": "openfda_label",
      "source_name": "FDA labels",
      "published_at": "2026-11-24T00:00:00Z",
      "title": "LINEZOLID",
      "summary": "1 INDICATIONS AND USAGE Linezolid is an oxazolidinone-class antibacterial indicated in adults and children for the treatment of the following infections caused by susceptible Gram-positive bacteria: Nosocomial pneumonia ( 1.1 ), Community-acquired pneumonia ( 1.2 ), Complicated",
      "source_url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=83a84897-ccca-42a1-ab1a-bbf1d43a982b",
      "high_impact": 0,
      "impact_reason": null,
      "area": "Lung",
      "code_label": "ICD-10 J18.9 Pneumonia unspecified organism. RxNorm 190376 linezolid. RxNorm 11124 vancomycin"
    },
    {
      "item_id": "openfda_label:942a82a4-cbbd-4e44-9965-8d03f767912b",
      "source_id": "openfda_label",
      "source_name": "FDA labels",
      "published_at": "2026-11-24T00:00:00Z",
      "title": "JARDIANCE (EMPAGLIFLOZIN)",
      "summary": "1 INDICATIONS AND USAGE JARDIANCE is indicated: to reduce the risk of cardiovascular death and hospitalization for heart failure in adults with heart failure. to reduce the risk of sustained decline in eGFR, end-stage kidney disease, cardiovascular death, and hospitalization in",
      "source_url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=942a82a4-cbbd-4e44-9965-8d03f767912b",
      "high_impact": 0,
      "impact_reason": null,
      "area": "Kidney",
      "code_label": "ICD-10 N18.9 Chronic kidney disease unspecified. E11.9 Type 2 diabetes mellitus without complications. I50.9 Heart failure unspecified. RxNorm 1545653 empagliflozin"
    },
    {
      "item_id": "openfda_label:b08eb00c-b2a7-4d06-ad82-7b6c90de98aa",
      "source_id": "openfda_label",
      "source_name": "FDA labels",
      "published_at": "2026-11-24T00:00:00Z",
      "title": "ENOXAPARIN SODIUM",
      "summary": "WARNING: SPINAL/EPIDURAL HEMATOMAS Epidural or spinal hematomas may occur in patients who are anticoagulated with low molecular weight heparins (LMWH) or heparinoids and are receiving neuraxial anesthesia or undergoing spinal puncture. These hematomas may result in long-term or",
      "source_url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=b08eb00c-b2a7-4d06-ad82-7b6c90de98aa",
      "high_impact": 1,
      "impact_reason": "Boxed warning",
      "area": "Heart and vessels",
      "code_label": "ICD-10 I21.9 Acute myocardial infarction unspecified. I82.409 Acute embolism and thrombosis of unspecified deep veins of unspecified lower extremity. RxNorm 67108 enoxaparin. RxNorm 235473 heparin"
    },
    {
      "item_id": "openfda_label:b524d150-0a83-42d1-a884-b930e49760cd",
      "source_id": "openfda_label",
      "source_name": "FDA labels",
      "published_at": "2026-11-24T00:00:00Z",
      "title": "CYCLOBENZAPRINE HYDROCHLORIDE",
      "summary": "INDICATIONS AND USAGE Cyclobenzaprine hydrochloride tablets, USP are indicated as an adjunct to rest and physical therapy for relief of muscle spasm associated with acute, painful musculoskeletal conditions. Improvement is manifested by relief of muscle spasm and its associated",
      "source_url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=b524d150-0a83-42d1-a884-b930e49760cd",
      "high_impact": 0,
      "impact_reason": null,
      "area": "Not coded",
      "code_label": ""
    },
    {
      "item_id": "openfda_label:cab63f24-8728-4927-aba5-53e8d2e44cdb",
      "source_id": "openfda_label",
      "source_name": "FDA labels",
      "published_at": "2026-11-24T00:00:00Z",
      "title": "ONDANSETRON",
      "summary": "1 INDICATIONS AND USAGE Ondansetron orally disintegrating tablets are indicated for the prevention of nausea and vomiting associated with: highly emetogenic cancer chemotherapy, including cisplatin greater than or equal to 50 mg/m 2 initial and repeat courses of moderately",
      "source_url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=cab63f24-8728-4927-aba5-53e8d2e44cdb",
      "high_impact": 0,
      "impact_reason": null,
      "area": "Not coded",
      "code_label": "RxNorm 2555 cisplatin. RxNorm 26225 ondansetron"
    },
    {
      "item_id": "openfda_label:cc8ce128-647d-43b8-bb47-e634fac68ad2",
      "source_id": "openfda_label",
      "source_name": "FDA labels",
      "published_at": "2026-11-24T00:00:00Z",
      "title": "Sitagliptin and metformin hydrochloride Extended Release (SITAGLIPTIN AND METFORMIN HYDROCHLORIDE)",
      "summary": "BOXED WARNING WARNING: LACTIC ACIDOSIS Postmarketing cases of metformin-associated lactic acidosis have resulted in death, hypothermia, hypotension, and resistant bradyarrhythmias. The onset of metformin-associated lactic acidosis is often subtle, accompanied only by nonspecific",
      "source_url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=cc8ce128-647d-43b8-bb47-e634fac68ad2",
      "high_impact": 1,
      "impact_reason": "Boxed warning",
      "area": "Diabetes and metabolism",
      "code_label": "ICD-10 E10.9 Type 1 diabetes mellitus without complications. E11.9 Type 2 diabetes mellitus without complications. RxNorm 6809 metformin. RxNorm 593411 sitagliptin"
    }
  ],
  "areas": [
    {
      "area": "Heart and vessels",
      "item_count": 10
    },
    {
      "area": "Diabetes and metabolism",
      "item_count": 6
    },
    {
      "area": "Mental health",
      "item_count": 6
    },
    {
      "area": "Brain and nerves",
      "item_count": 2
    },
    {
      "area": "Cancer",
      "item_count": 2
    },
    {
      "area": "Infection",
      "item_count": 1
    },
    {
      "area": "Kidney",
      "item_count": 1
    },
    {
      "area": "Lung",
      "item_count": 1
    },
    {
      "area": "Not coded",
      "item_count": 239
    }
  ],
  "weekly": [
    {
      "week_start": "2026-08-10",
      "source_id": "cdc_mmwr",
      "source_name": "CDC MMWR",
      "item_count": 0
    },
    {
      "week_start": "2026-08-10",
      "source_id": "openfda_label",
      "source_name": "FDA labels",
      "item_count": 0
    },
    {
      "week_start": "2026-08-10",
      "source_id": "openfda_enforcement",
      "source_name": "FDA recalls",
      "item_count": 2
    },
    {
      "week_start": "2026-08-10",
      "source_id": "federal_register",
      "source_name": "Federal Register",
      "item_count": 0
    },
    {
      "week_start": "2026-08-17",
      "source_id": "cdc_mmwr",
      "source_name": "CDC MMWR",
      "item_count": 0
    },
    {
      "week_start": "2026-08-17",
      "source_id": "openfda_label",
      "source_name": "FDA labels",
      "item_count": 0
    },
    {
      "week_start": "2026-08-17",
      "source_id": "openfda_enforcement",
      "source_name": "FDA recalls",
      "item_count": 4
    },
    {
      "week_start": "2026-08-17",
      "source_id": "federal_register",
      "source_name": "Federal Register",
      "item_count": 0
    },
    {
      "week_start": "2026-08-24",
      "source_id": "cdc_mmwr",
      "source_name": "CDC MMWR",
      "item_count": 0
    },
    {
      "week_start": "2026-08-24",
      "source_id": "openfda_label",
      "source_name": "FDA labels",
      "item_count": 0
    },
    {
      "week_start": "2026-08-24",
      "source_id": "openfda_enforcement",
      "source_name": "FDA recalls",
      "item_count": 2
    },
    {
      "week_start": "2026-08-24",
      "source_id": "federal_register",
      "source_name": "Federal Register",
      "item_count": 0
    },
    {
      "week_start": "2026-08-31",
      "source_id": "cdc_mmwr",
      "source_name": "CDC MMWR",
      "item_count": 1
    },
    {
      "week_start": "2026-08-31",
      "source_id": "openfda_label",
      "source_name": "FDA labels",
      "item_count": 0
    },
    {
      "week_start": "2026-08-31",
      "source_id": "openfda_enforcement",
      "source_name": "FDA recalls",
      "item_count": 3
    },
    {
      "week_start": "2026-08-31",
      "source_id": "federal_register",
      "source_name": "Federal Register",
      "item_count": 0
    },
    {
      "week_start": "2026-09-07",
      "source_id": "cdc_mmwr",
      "source_name": "CDC MMWR",
      "item_count": 4
    },
    {
      "week_start": "2026-09-07",
      "source_id": "openfda_label",
      "source_name": "FDA labels",
      "item_count": 0
    },
    {
      "week_start": "2026-09-07",
      "source_id": "openfda_enforcement",
      "source_name": "FDA recalls",
      "item_count": 2
    },
    {
      "week_start": "2026-09-07",
      "source_id": "federal_register",
      "source_name": "Federal Register",
      "item_count": 0
    },
    {
      "week_start": "2026-09-14",
      "source_id": "cdc_mmwr",
      "source_name": "CDC MMWR",
      "item_count": 2
    },
    {
      "week_start": "2026-09-14",
      "source_id": "openfda_label",
      "source_name": "FDA labels",
      "item_count": 0
    },
    {
      "week_start": "2026-09-14",
      "source_id": "openfda_enforcement",
      "source_name": "FDA recalls",
      "item_count": 3
    },
    {
      "week_start": "2026-09-14",
      "source_id": "federal_register",
      "source_name": "Federal Register",
      "item_count": 0
    },
    {
      "week_start": "2026-09-21",
      "source_id": "cdc_mmwr",
      "source_name": "CDC MMWR",
      "item_count": 4
    },
    {
      "week_start": "2026-09-21",
      "source_id": "openfda_label",
      "source_name": "FDA labels",
      "item_count": 0
    },
    {
      "week_start": "2026-09-21",
      "source_id": "openfda_enforcement",
      "source_name": "FDA recalls",
      "item_count": 1
    },
    {
      "week_start": "2026-09-21",
      "source_id": "federal_register",
      "source_name": "Federal Register",
      "item_count": 0
    },
    {
      "week_start": "2026-09-28",
      "source_id": "cdc_mmwr",
      "source_name": "CDC MMWR",
      "item_count": 3
    },
    {
      "week_start": "2026-09-28",
      "source_id": "openfda_label",
      "source_name": "FDA labels",
      "item_count": 0
    },
    {
      "week_start": "2026-09-28",
      "source_id": "openfda_enforcement",
      "source_name": "FDA recalls",
      "item_count": 1
    },
    {
      "week_start": "2026-09-28",
      "source_id": "federal_register",
      "source_name": "Federal Register",
      "item_count": 0
    },
    {
      "week_start": "2026-10-05",
      "source_id": "cdc_mmwr",
      "source_name": "CDC MMWR",
      "item_count": 2
    },
    {
      "week_start": "2026-10-05",
      "source_id": "openfda_label",
      "source_name": "FDA labels",
      "item_count": 0
    },
    {
      "week_start": "2026-10-05",
      "source_id": "openfda_enforcement",
      "source_name": "FDA recalls",
      "item_count": 3
    },
    {
      "week_start": "2026-10-05",
      "source_id": "federal_register",
      "source_name": "Federal Register",
      "item_count": 0
    },
    {
      "week_start": "2026-10-12",
      "source_id": "cdc_mmwr",
      "source_name": "CDC MMWR",
      "item_count": 10
    },
    {
      "week_start": "2026-10-12",
      "source_id": "openfda_label",
      "source_name": "FDA labels",
      "item_count": 0
    },
    {
      "week_start": "2026-10-12",
      "source_id": "openfda_enforcement",
      "source_name": "FDA recalls",
      "item_count": 4
    },
    {
      "week_start": "2026-10-12",
      "source_id": "federal_register",
      "source_name": "Federal Register",
      "item_count": 3
    },
    {
      "week_start": "2026-10-19",
      "source_id": "cdc_mmwr",
      "source_name": "CDC MMWR",
      "item_count": 2
    },
    {
      "week_start": "2026-10-19",
      "source_id": "openfda_label",
      "source_name": "FDA labels",
      "item_count": 0
    },
    {
      "week_start": "2026-10-19",
      "source_id": "openfda_enforcement",
      "source_name": "FDA recalls",
      "item_count": 0
    },
    {
      "week_start": "2026-10-19",
      "source_id": "federal_register",
      "source_name": "Federal Register",
      "item_count": 9
    },
    {
      "week_start": "2026-10-26",
      "source_id": "cdc_mmwr",
      "source_name": "CDC MMWR",
      "item_count": 3
    },
    {
      "week_start": "2026-10-26",
      "source_id": "openfda_label",
      "source_name": "FDA labels",
      "item_count": 0
    },
    {
      "week_start": "2026-10-26",
      "source_id": "openfda_enforcement",
      "source_name": "FDA recalls",
      "item_count": 4
    },
    {
      "week_start": "2026-10-26",
      "source_id": "federal_register",
      "source_name": "Federal Register",
      "item_count": 12
    },
    {
      "week_start": "2026-11-02",
      "source_id": "cdc_mmwr",
      "source_name": "CDC MMWR",
      "item_count": 2
    },
    {
      "week_start": "2026-11-02",
      "source_id": "openfda_label",
      "source_name": "FDA labels",
      "item_count": 0
    },
    {
      "week_start": "2026-11-02",
      "source_id": "openfda_enforcement",
      "source_name": "FDA recalls",
      "item_count": 0
    },
    {
      "week_start": "2026-11-02",
      "source_id": "federal_register",
      "source_name": "Federal Register",
      "item_count": 14
    },
    {
      "week_start": "2026-11-09",
      "source_id": "cdc_mmwr",
      "source_name": "CDC MMWR",
      "item_count": 2
    },
    {
      "week_start": "2026-11-09",
      "source_id": "openfda_label",
      "source_name": "FDA labels",
      "item_count": 0
    },
    {
      "week_start": "2026-11-09",
      "source_id": "openfda_enforcement",
      "source_name": "FDA recalls",
      "item_count": 32
    },
    {
      "week_start": "2026-11-09",
      "source_id": "federal_register",
      "source_name": "Federal Register",
      "item_count": 20
    },
    {
      "week_start": "2026-11-16",
      "source_id": "cdc_mmwr",
      "source_name": "CDC MMWR",
      "item_count": 2
    },
    {
      "week_start": "2026-11-16",
      "source_id": "openfda_label",
      "source_name": "FDA labels",
      "item_count": 7
    },
    {
      "week_start": "2026-11-16",
      "source_id": "openfda_enforcement",
      "source_name": "FDA recalls",
      "item_count": 8
    },
    {
      "week_start": "2026-11-16",
      "source_id": "federal_register",
      "source_name": "Federal Register",
      "item_count": 13
    },
    {
      "week_start": "2026-11-23",
      "source_id": "cdc_mmwr",
      "source_name": "CDC MMWR",
      "item_count": 3
    },
    {
      "week_start": "2026-11-23",
      "source_id": "openfda_label",
      "source_name": "FDA labels",
      "item_count": 72
    },
    {
      "week_start": "2026-11-23",
      "source_id": "openfda_enforcement",
      "source_name": "FDA recalls",
      "item_count": 0
    },
    {
      "week_start": "2026-11-23",
      "source_id": "federal_register",
      "source_name": "Federal Register",
      "item_count": 9
    }
  ],
  "counts": [
    {
      "source_id": "cdc_mmwr",
      "source_name": "CDC MMWR",
      "item_count": 40
    },
    {
      "source_id": "openfda_label",
      "source_name": "FDA labels",
      "item_count": 79
    },
    {
      "source_id": "openfda_enforcement",
      "source_name": "FDA recalls",
      "item_count": 69
    },
    {
      "source_id": "federal_register",
      "source_name": "Federal Register",
      "item_count": 80
    }
  ],
  "build": {
    "tests_passed": 39,
    "tests_total": 39,
    "freshness_passed": 5,
    "freshness_total": 5,
    "models": [
      "intermediate/int_guideline_items",
      "intermediate/int_item_icd10",
      "intermediate/int_item_rxnorm",
      "marts/fct_guideline_changes",
      "marts/mart_actions_this_week",
      "marts/mart_changes_by_area",
      "marts/mart_feed",
      "marts/mart_goal_status",
      "marts/mart_recent_changes",
      "marts/mart_source_freshness",
      "marts/mart_weekly_volume",
      "metric_time_spine",
      "staging/stg_drug_candidates",
      "staging/stg_federal_register",
      "staging/stg_fetch_meta",
      "staging/stg_first_seen",
      "staging/stg_goals",
      "staging/stg_icd10_keywords",
      "staging/stg_mmwr",
      "staging/stg_openfda_enforcement",
      "staging/stg_openfda_labels",
      "staging/stg_rxnorm_lookup"
    ]
  },
  "generated_at": "2026-11-27T20:55:11Z"
};
