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
      "as_of": "2026-11-07",
      "days_elapsed": 6,
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
      "current_value": 41.0,
      "target_value": 48.0,
      "current_label": "41 hours",
      "target_label": "48 hours",
      "progress_ratio": 1.170731707317073,
      "pace_ratio": null,
      "status": "on_track",
      "status_label": "On track",
      "sort_order": 2,
      "as_of": "2026-11-07",
      "days_elapsed": 6,
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
      "current_value": 0.408,
      "target_value": 0.4,
      "current_label": "40.8%",
      "target_label": "40%",
      "progress_ratio": 1.0199999999999998,
      "pace_ratio": null,
      "status": "on_track",
      "status_label": "On track",
      "sort_order": 3,
      "as_of": "2026-11-07",
      "days_elapsed": 6,
      "days_in_period": 7,
      "on_track_ratio": 0.95,
      "at_risk_ratio": 0.8
    },
    {
      "goal_id": "high_impact_week",
      "label": "High-impact changes this week",
      "detail": "Example target. Boxed warnings, CDC recommendations, Class I recalls, and FDA guidance notices published this week. Pace line is day 6 of 7.",
      "unit": "count",
      "metric_kind": "pace",
      "direction": "higher",
      "current_value": 2.0,
      "target_value": 4.0,
      "current_label": "2",
      "target_label": "4",
      "progress_ratio": 0.5,
      "pace_ratio": 0.8571428571428571,
      "status": "behind",
      "status_label": "Behind",
      "sort_order": 4,
      "as_of": "2026-11-07",
      "days_elapsed": 6,
      "days_in_period": 7,
      "on_track_ratio": 0.95,
      "at_risk_ratio": 0.8
    }
  ],
  "sources": [
    {
      "source_id": "cdc_mmwr",
      "source_name": "CDC MMWR",
      "fetched_at": "2026-11-07T17:38:14Z",
      "record_count": 40,
      "ok": 1,
      "note": "CDC media collection 342778, the live MMWR collection.",
      "latest_published_at": "2026-11-05T00:00:00Z"
    },
    {
      "source_id": "openfda_label",
      "source_name": "FDA labels",
      "fetched_at": "2026-11-07T17:38:14Z",
      "record_count": 64,
      "ok": 1,
      "note": "openFDA drug labels, prescription products, plus boxed warnings.",
      "latest_published_at": "2026-10-29T00:00:00Z"
    },
    {
      "source_id": "openfda_enforcement",
      "source_name": "FDA recalls",
      "fetched_at": "2026-11-07T17:38:14Z",
      "record_count": 66,
      "ok": 1,
      "note": "openFDA drug enforcement. The link is the openFDA record.",
      "latest_published_at": "2026-10-28T00:00:00Z"
    },
    {
      "source_id": "federal_register",
      "source_name": "Federal Register",
      "fetched_at": "2026-11-07T17:38:14Z",
      "record_count": 80,
      "ok": 1,
      "note": "FDA, CDC, CMS, and HHS documents that match guidance or recommendation.",
      "latest_published_at": "2026-11-06T00:00:00Z"
    }
  ],
  "actions": [
    {
      "action_id": "openfda_label:623b9672-b41e-4ec9-b2cc-f5bb383c39ba",
      "item_id": "openfda_label:623b9672-b41e-4ec9-b2cc-f5bb383c39ba",
      "source_name": "FDA labels",
      "title": "Sertraline HCl (SERTRALINE HYDROCHLORIDE)",
      "source_url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=623b9672-b41e-4ec9-b2cc-f5bb383c39ba",
      "impact_reason": "Boxed warning",
      "published_at": "2026-10-23T00:00:00Z",
      "sentence": "A boxed warning changed on this label. A clinician team should read it.",
      "sort_order": 1
    },
    {
      "action_id": "openfda_label:7c1dd8ce-c490-40b4-b17a-da331df24cba",
      "item_id": "openfda_label:7c1dd8ce-c490-40b4-b17a-da331df24cba",
      "source_name": "FDA labels",
      "title": "CARBAMAZEPINE",
      "source_url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=7c1dd8ce-c490-40b4-b17a-da331df24cba",
      "impact_reason": "Boxed warning",
      "published_at": "2026-10-23T00:00:00Z",
      "sentence": "A boxed warning changed on this label. A clinician team should read it.",
      "sort_order": 2
    },
    {
      "action_id": "openfda_enforcement:D-0082-2027",
      "item_id": "openfda_enforcement:D-0082-2027",
      "source_name": "FDA recalls",
      "title": "Argatroban Injection, USP, 250 mg/2.5mL (100 mg/mL), 2.5 mL x 1 Single Dose Vial, Rx only, Manufactured for: Endo USA, Malvern,PA 19355/Argatroban Injection, 250 mg/2.5mL (100",
      "source_url": "https://api.fda.gov/drug/enforcement.json?search=recall_number:\"D-0082-2027\"&limit=1",
      "impact_reason": "Class I recall",
      "published_at": "2026-10-28T00:00:00Z",
      "sentence": "This is a Class I drug recall. A clinician team should check who might be affected.",
      "sort_order": 3
    },
    {
      "action_id": "openfda_enforcement:D-0083-2027",
      "item_id": "openfda_enforcement:D-0083-2027",
      "source_name": "FDA recalls",
      "title": "Argatroban Injection, USP, 250 mg/2.5mL (100 mg/mL), 2.5 mL x 1 Single Dose Vial, Rx only, Manufactured for: Endo USA, Malvern,PA 19355/ Argatroban Injection, 250 mg/2.5mL (100",
      "source_url": "https://api.fda.gov/drug/enforcement.json?search=recall_number:\"D-0083-2027\"&limit=1",
      "impact_reason": "Class I recall",
      "published_at": "2026-10-28T00:00:00Z",
      "sentence": "This is a Class I drug recall. A clinician team should check who might be affected.",
      "sort_order": 4
    },
    {
      "action_id": "openfda_enforcement:D-0084-2027",
      "item_id": "openfda_enforcement:D-0084-2027",
      "source_name": "FDA recalls",
      "title": "Glutathione Injection (Glutathione-L, Ascorbic Acid, Sodium Hydroxide, Bacteriostatic Water), 200 mg/mL, 10 mL multi-dose vial, Rx only, Subcutaneous Only, Greenwich Rx.",
      "source_url": "https://api.fda.gov/drug/enforcement.json?search=recall_number:\"D-0084-2027\"&limit=1",
      "impact_reason": "Class I recall",
      "published_at": "2026-10-28T00:00:00Z",
      "sentence": "This is a Class I drug recall. A clinician team should check who might be affected.",
      "sort_order": 5
    }
  ],
  "feed": [
    {
      "item_id": "federal_register:2026-22657",
      "source_id": "federal_register",
      "source_name": "Federal Register",
      "published_at": "2026-11-06T00:00:00Z",
      "title": "Medical Devices, Ear, Nose, and Throat Devices, Classification of the External Mechanical Stimulator for the Relief of Congestion",
      "summary": "The Food and Drug Administration (FDA) is classifying the external mechanical stimulator for the relief of congestion into class II (special controls). The special controls that apply to the device type are identified in this order and will be part of the codified language for",
      "source_url": "https://www.federalregister.gov/documents/2026/11/06/2026-22657/medical-devices-ear-nose-and-throat-devices-classification-of-the-external-mechanical-stimulator-for",
      "high_impact": 0,
      "impact_reason": null,
      "area": "Not coded",
      "code_label": ""
    },
    {
      "item_id": "federal_register:2026-22739",
      "source_id": "federal_register",
      "source_name": "Federal Register",
      "published_at": "2026-11-06T00:00:00Z",
      "title": "Medicare Program: Hospital Outpatient Prospective Payment and Ambulatory Surgical Center Payment Systems, and Quality Reporting Programs, including the Hospital Outpatient Quality Reporting Program and Ambulatory",
      "summary": "This final rule with comment period revises the Medicare Hospital Outpatient Prospective Payment System (OPPS) and the Medicare Ambulatory Surgical Center (ASC) payment system for calendar year 2027 based on our continuing experience with these systems. We also describe the",
      "source_url": "https://www.federalregister.gov/documents/2026/11/06/2026-22739/medicare-program-hospital-outpatient-prospective-payment-and-ambulatory-surgical-center-payment",
      "high_impact": 0,
      "impact_reason": null,
      "area": "Not coded",
      "code_label": ""
    },
    {
      "item_id": "cdc_mmwr:766796",
      "source_id": "cdc_mmwr",
      "source_name": "CDC MMWR",
      "published_at": "2026-11-05T00:00:00Z",
      "title": "Hantavirus Outbreak Caused by Andes Virus Linked to International Cruise Ship Travel - United States, 2026",
      "summary": "This report describes cases of hantavirus among people on a cruise ship in the Atlantic Ocean.",
      "source_url": "https://www.cdc.gov/mmwr/volumes/75/wr/mm7543a1.htm?s_cid=OS_mm7543a1_x",
      "high_impact": 0,
      "impact_reason": null,
      "area": "Not coded",
      "code_label": ""
    },
    {
      "item_id": "cdc_mmwr:766798",
      "source_id": "cdc_mmwr",
      "source_name": "CDC MMWR",
      "published_at": "2026-11-05T00:00:00Z",
      "title": "Cutaneous Aspergillosis Among Extremely Preterm Neonates in Neonatal Intensive Care Units - Michigan and New York, 2023 - 2024",
      "summary": "This report describes two clusters of cutaneous aspergillosis in neonatal intensive care units in Michigan and New York.",
      "source_url": "https://www.cdc.gov/mmwr/volumes/75/wr/mm7543a2.htm?s_cid=OS_mm7543a2_x",
      "high_impact": 0,
      "impact_reason": null,
      "area": "Not coded",
      "code_label": ""
    },
    {
      "item_id": "federal_register:2026-22549",
      "source_id": "federal_register",
      "source_name": "Federal Register",
      "published_at": "2026-11-05T00:00:00Z",
      "title": "Office of the Director, Notice of Charter Renewal",
      "summary": "Federal Register document.",
      "source_url": "https://www.federalregister.gov/documents/2026/11/05/2026-22549/office-of-the-director-notice-of-charter-renewal",
      "high_impact": 0,
      "impact_reason": null,
      "area": "Not coded",
      "code_label": ""
    },
    {
      "item_id": "federal_register:2026-22557",
      "source_id": "federal_register",
      "source_name": "Federal Register",
      "published_at": "2026-11-05T00:00:00Z",
      "title": "Proposed Information Collection Activity, Information Comparison With Insurance Data",
      "summary": "The Office of Child Support Enforcement (OCSE), Administration for Children and Families (ACF), is requesting Office of Management and Budget (OMB) approval of the Information Comparison with Insurance Data (OMB #0970-0342, expiration January 31, 2027) for an additional 3 years.",
      "source_url": "https://www.federalregister.gov/documents/2026/11/05/2026-22557/proposed-information-collection-activity-information-comparison-with-insurance-data",
      "high_impact": 0,
      "impact_reason": null,
      "area": "Not coded",
      "code_label": ""
    },
    {
      "item_id": "federal_register:2026-22589",
      "source_id": "federal_register",
      "source_name": "Federal Register",
      "published_at": "2026-11-05T00:00:00Z",
      "title": "Medical Devices, Orthopedic Devices, Classification of the Wearable Vibration Device for Orthopedic Use",
      "summary": "The Food and Drug Administration (FDA) is classifying the wearable vibration device for orthopedic use into class II (special controls). The special controls that apply to the device type are identified in this order and will be part of the codified language for classification",
      "source_url": "https://www.federalregister.gov/documents/2026/11/05/2026-22589/medical-devices-orthopedic-devices-classification-of-the-wearable-vibration-device-for-orthopedic",
      "high_impact": 0,
      "impact_reason": null,
      "area": "Not coded",
      "code_label": ""
    },
    {
      "item_id": "federal_register:2026-22590",
      "source_id": "federal_register",
      "source_name": "Federal Register",
      "published_at": "2026-11-05T00:00:00Z",
      "title": "Medical Devices, Neurological Devices, Classification of the Prognostic Assessment Software of Mild Cognitive Impairment",
      "summary": "The Food and Drug Administration (FDA) is classifying the prognostic assessment software of mild cognitive impairment into class II (special controls). The special controls that apply to the device type are identified in this order and will be part of the codified language for",
      "source_url": "https://www.federalregister.gov/documents/2026/11/05/2026-22590/medical-devices-neurological-devices-classification-of-the-prognostic-assessment-software-of-mild",
      "high_impact": 0,
      "impact_reason": null,
      "area": "Not coded",
      "code_label": ""
    },
    {
      "item_id": "federal_register:2026-22593",
      "source_id": "federal_register",
      "source_name": "Federal Register",
      "published_at": "2026-11-05T00:00:00Z",
      "title": "Medical Devices, Hematology and Pathology Devices, Classification of the Digital Cervical Cytology Slide Imaging System With Artificial Intelligence Algorithm",
      "summary": "The Food and Drug Administration (FDA) is classifying the digital cervical cytology slide imaging system with artificial intelligence algorithm into class II (special controls). The special controls that apply to the device type are identified in this order and will be part of",
      "source_url": "https://www.federalregister.gov/documents/2026/11/05/2026-22593/medical-devices-hematology-and-pathology-devices-classification-of-the-digital-cervical-cytology",
      "high_impact": 0,
      "impact_reason": null,
      "area": "Not coded",
      "code_label": ""
    },
    {
      "item_id": "federal_register:2026-22611",
      "source_id": "federal_register",
      "source_name": "Federal Register",
      "published_at": "2026-11-05T00:00:00Z",
      "title": "Agency Information Collection Activities: Submission for OMB Review, Comment Request",
      "summary": "The Centers for Medicare & Medicaid Services (CMS) is announcing an opportunity for the public to comment on CMS' intention to collect information from the public. Under the Paperwork Reduction Act of 1995 (PRA), federal agencies are required to publish notice in the Federal",
      "source_url": "https://www.federalregister.gov/documents/2026/11/05/2026-22611/agency-information-collection-activities-submission-for-omb-review-comment-request",
      "high_impact": 0,
      "impact_reason": null,
      "area": "Not coded",
      "code_label": ""
    },
    {
      "item_id": "federal_register:2026-22612",
      "source_id": "federal_register",
      "source_name": "Federal Register",
      "published_at": "2026-11-05T00:00:00Z",
      "title": "Agency Information Collection Activities: Proposed Collection, Comment Request",
      "summary": "The Centers for Medicare & Medicaid Services (CMS) is announcing an opportunity for the public to comment on CMS' intention to collect information from the public. Under the Paperwork Reduction Act of 1995 (PRA), federal agencies are required to publish notice in the Federal",
      "source_url": "https://www.federalregister.gov/documents/2026/11/05/2026-22612/agency-information-collection-activities-proposed-collection-comment-request",
      "high_impact": 0,
      "impact_reason": null,
      "area": "Not coded",
      "code_label": ""
    },
    {
      "item_id": "federal_register:2026-22369",
      "source_id": "federal_register",
      "source_name": "Federal Register",
      "published_at": "2026-11-03T00:00:00Z",
      "title": "Recommendations for Reducing the Risk of Transfusion-Transmitted Hepatitis B Virus, Guidance for Industry, Availability",
      "summary": "The Food and Drug Administration (FDA or Agency) is announcing the availability of a final guidance titled \"Recommendations for Reducing the Risk of Transfusion-Transmitted Hepatitis B Virus.\" The guidance document provides blood establishments that collect blood and blood",
      "source_url": "https://www.federalregister.gov/documents/2026/11/03/2026-22369/recommendations-for-reducing-the-risk-of-transfusion-transmitted-hepatitis-b-virus-guidance-for",
      "high_impact": 1,
      "impact_reason": "FDA guidance",
      "area": "Not coded",
      "code_label": ""
    },
    {
      "item_id": "federal_register:2026-22370",
      "source_id": "federal_register",
      "source_name": "Federal Register",
      "published_at": "2026-11-03T00:00:00Z",
      "title": "Agency Information Collection Activities: Proposed Collection, Comment Request",
      "summary": "The Centers for Medicare & Medicaid Services (CMS) is announcing an opportunity for the public to comment on CMS' intention to collect information from the public. Under the Paperwork Reduction Act of 1995 (PRA), federal agencies are required to publish notice in the Federal",
      "source_url": "https://www.federalregister.gov/documents/2026/11/03/2026-22370/agency-information-collection-activities-proposed-collection-comment-request",
      "high_impact": 0,
      "impact_reason": null,
      "area": "Not coded",
      "code_label": ""
    },
    {
      "item_id": "federal_register:2026-22380",
      "source_id": "federal_register",
      "source_name": "Federal Register",
      "published_at": "2026-11-03T00:00:00Z",
      "title": "Nondiscrimination on the Basis of Disability in Programs or Activities Receiving Federal Financial Assistance",
      "summary": "The Department of Health and Human Services (HHS or Department) issues this rule to revise the regulation implementing section 504 of the Rehabilitation Act of 1973 (section 504) as it applies to recipients of HHS funding (entitled \"Nondiscrimination on the Basis of Disability",
      "source_url": "https://www.federalregister.gov/documents/2026/11/03/2026-22380/nondiscrimination-on-the-basis-of-disability-in-programs-or-activities-receiving-federal-financial",
      "high_impact": 0,
      "impact_reason": null,
      "area": "Not coded",
      "code_label": ""
    },
    {
      "item_id": "federal_register:2026-22381",
      "source_id": "federal_register",
      "source_name": "Federal Register",
      "published_at": "2026-11-03T00:00:00Z",
      "title": "Medicare and Medicaid Programs, Organ Procurement Organizations Conditions for Coverage: Revisions to the Conditions for Coverage",
      "summary": "This final rule revises the Conditions for Coverage for Organ Procurement Organizations (OPOs) to clarify outstanding procedural questions and provide additional operational flexibility for OPOs to achieve high performance resulting in the successful procurement, distribution,",
      "source_url": "https://www.federalregister.gov/documents/2026/11/03/2026-22381/medicare-and-medicaid-programs-organ-procurement-organizations-conditions-for-coverage-revisions-to",
      "high_impact": 0,
      "impact_reason": null,
      "area": "Not coded",
      "code_label": ""
    },
    {
      "item_id": "federal_register:2026-22427",
      "source_id": "federal_register",
      "source_name": "Federal Register",
      "published_at": "2026-11-03T00:00:00Z",
      "title": "Potency Assurance for Cellular and Gene Therapy Products, Guidance for Industry, Availability",
      "summary": "The Food and Drug Administration (FDA or Agency) is announcing the availability of a final guidance titled \"Potency Assurance for Cellular and Gene Therapy Products.\" The guidance document provides recommendations to help assure the potency of human cellular therapy or gene",
      "source_url": "https://www.federalregister.gov/documents/2026/11/03/2026-22427/potency-assurance-for-cellular-and-gene-therapy-products-guidance-for-industry-availability",
      "high_impact": 1,
      "impact_reason": "FDA guidance",
      "area": "Not coded",
      "code_label": ""
    },
    {
      "item_id": "federal_register:2026-22273",
      "source_id": "federal_register",
      "source_name": "Federal Register",
      "published_at": "2026-11-02T00:00:00Z",
      "title": "Infant Formula Nutrient Requirements",
      "summary": "The Food and Drug Administration (FDA or we) proposes to amend the regulations on nutrient specifications and labeling for infant formula as part of its phased, comprehensive review of infant formula nutrients. This action, if finalized, would amend the minimum and/or maximum",
      "source_url": "https://www.federalregister.gov/documents/2026/11/02/2026-22273/infant-formula-nutrient-requirements",
      "high_impact": 0,
      "impact_reason": null,
      "area": "Not coded",
      "code_label": ""
    },
    {
      "item_id": "federal_register:2026-22326",
      "source_id": "federal_register",
      "source_name": "Federal Register",
      "published_at": "2026-11-02T00:00:00Z",
      "title": "Agency Information Collection Activities: Proposed Collection, Comment Request",
      "summary": "The Centers for Medicare & Medicaid Services (CMS) is announcing an opportunity for the public to comment on CMS' intention to collect information from the public. Under the Paperwork Reduction Act of 1995 (PRA), federal agencies are required to publish notice in the Federal",
      "source_url": "https://www.federalregister.gov/documents/2026/11/02/2026-22326/agency-information-collection-activities-proposed-collection-comment-request",
      "high_impact": 0,
      "impact_reason": null,
      "area": "Not coded",
      "code_label": ""
    },
    {
      "item_id": "federal_register:2026-22329",
      "source_id": "federal_register",
      "source_name": "Federal Register",
      "published_at": "2026-11-02T00:00:00Z",
      "title": "Agency Forms Undergoing Paperwork Reduction Act Review",
      "summary": "Federal Register document.",
      "source_url": "https://www.federalregister.gov/documents/2026/11/02/2026-22329/agency-forms-undergoing-paperwork-reduction-act-review",
      "high_impact": 0,
      "impact_reason": null,
      "area": "Not coded",
      "code_label": ""
    },
    {
      "item_id": "federal_register:2026-22330",
      "source_id": "federal_register",
      "source_name": "Federal Register",
      "published_at": "2026-11-02T00:00:00Z",
      "title": "Agency Forms Undergoing Paperwork Reduction Act Review",
      "summary": "Federal Register document.",
      "source_url": "https://www.federalregister.gov/documents/2026/11/02/2026-22330/agency-forms-undergoing-paperwork-reduction-act-review",
      "high_impact": 0,
      "impact_reason": null,
      "area": "Not coded",
      "code_label": ""
    },
    {
      "item_id": "federal_register:2026-22179",
      "source_id": "federal_register",
      "source_name": "Federal Register",
      "published_at": "2026-10-30T00:00:00Z",
      "title": "Medical Devices, General and Plastic Surgery Devices, Classification of the Software-Aided Adjunctive Diagnostic Device for Use by Physicians on Lesions Suspicious for Skin Cancer",
      "summary": "The Food and Drug Administration (FDA) is classifying the software-aided adjunctive diagnostic device for use by physicians on lesions suspicious for skin cancer into class II (special controls). The special controls that apply to the device type are identified in this order and",
      "source_url": "https://www.federalregister.gov/documents/2026/10/30/2026-22179/medical-devices-general-and-plastic-surgery-devices-classification-of-the-software-aided-adjunctive",
      "high_impact": 0,
      "impact_reason": null,
      "area": "Not coded",
      "code_label": ""
    },
    {
      "item_id": "federal_register:2026-22180",
      "source_id": "federal_register",
      "source_name": "Federal Register",
      "published_at": "2026-10-30T00:00:00Z",
      "title": "Medical Devices, Radiology Devices, Classification of the Radiology Software for Referral of Findings Related to Fibrotic Lung Disease",
      "summary": "The Food and Drug Administration (FDA) is classifying the radiology software for referral of findings related to fibrotic lung disease into class II (special controls). The special controls that apply to the device type are identified in this order and will be part of the",
      "source_url": "https://www.federalregister.gov/documents/2026/10/30/2026-22180/medical-devices-radiology-devices-classification-of-the-radiology-software-for-referral-of-findings",
      "high_impact": 0,
      "impact_reason": null,
      "area": "Not coded",
      "code_label": ""
    },
    {
      "item_id": "federal_register:2026-22181",
      "source_id": "federal_register",
      "source_name": "Federal Register",
      "published_at": "2026-10-30T00:00:00Z",
      "title": "Medical Devices, Anesthesiology Devices, Classification of the Spinal Imaging System for Neuraxial Procedures",
      "summary": "The Food and Drug Administration (FDA) is classifying the spinal imaging system for neuraxial procedures into class II (special controls). The special controls that apply to the device type are identified in this order and will be part of the codified language for classification",
      "source_url": "https://www.federalregister.gov/documents/2026/10/30/2026-22181/medical-devices-anesthesiology-devices-classification-of-the-spinal-imaging-system-for-neuraxial",
      "high_impact": 0,
      "impact_reason": null,
      "area": "Not coded",
      "code_label": ""
    },
    {
      "item_id": "federal_register:2026-22182",
      "source_id": "federal_register",
      "source_name": "Federal Register",
      "published_at": "2026-10-30T00:00:00Z",
      "title": "Medical Devices, Anesthesiology Devices, Classification of the Over-the-Counter Device To Assess Risk of Sleep Apnea",
      "summary": "The Food and Drug Administration (FDA) is classifying the over-the-counter device to assess risk of sleep apnea into class II (special controls). The special controls that apply to the device type are identified in this order and will be part of the codified language for",
      "source_url": "https://www.federalregister.gov/documents/2026/10/30/2026-22182/medical-devices-anesthesiology-devices-classification-of-the-over-the-counter-device-to-assess-risk",
      "high_impact": 0,
      "impact_reason": null,
      "area": "Not coded",
      "code_label": ""
    },
    {
      "item_id": "federal_register:2026-22185",
      "source_id": "federal_register",
      "source_name": "Federal Register",
      "published_at": "2026-10-30T00:00:00Z",
      "title": "Solicitation of Nominations for Appointment to the Advisory Committee on Immunization Practices",
      "summary": "In accordance with the Federal Advisory Committee Act, the Centers for Disease Control and Prevention (CDC), within the Department of Health and Human Services (HHS), is seeking nominations for membership on the Advisory Committee on Immunization Practices (ACIP). The ACIP",
      "source_url": "https://www.federalregister.gov/documents/2026/10/30/2026-22185/solicitation-of-nominations-for-appointment-to-the-advisory-committee-on-immunization-practices",
      "high_impact": 0,
      "impact_reason": null,
      "area": "Not coded",
      "code_label": ""
    },
    {
      "item_id": "federal_register:2026-22194",
      "source_id": "federal_register",
      "source_name": "Federal Register",
      "published_at": "2026-10-30T00:00:00Z",
      "title": "Medicare Program, CY 2027 Changes to the End-Stage Renal Disease (ESRD) Prospective Payment System, Acute Kidney Injury (AKI) Dialysis Payment, and ESRD Quality Incentive Program",
      "summary": "This final rule updates and revises the End-Stage Renal Disease (ESRD) Prospective Payment System for calendar year 2027. This rule also includes updates to the payment rate for renal dialysis services furnished by an ESRD facility to individuals with acute kidney injury. In",
      "source_url": "https://www.federalregister.gov/documents/2026/10/30/2026-22194/medicare-program-cy-2027-changes-to-the-end-stage-renal-disease-esrd-prospective-payment-system",
      "high_impact": 0,
      "impact_reason": null,
      "area": "Not coded",
      "code_label": ""
    },
    {
      "item_id": "federal_register:2026-22203",
      "source_id": "federal_register",
      "source_name": "Federal Register",
      "published_at": "2026-10-30T00:00:00Z",
      "title": "Essential Drug Delivery Performance Characteristics for Devices Intended To Deliver Drugs and Biological Products, Revised Draft Guidance for Industry, Availability",
      "summary": "The Food and Drug Administration (FDA or Agency) is announcing the availability of a revised draft guidance for industry entitled \"Essential Drug Delivery Performance Characteristics for Devices Intended to Deliver Drugs and Biological Products.\" This revised draft guidance",
      "source_url": "https://www.federalregister.gov/documents/2026/10/30/2026-22203/essential-drug-delivery-performance-characteristics-for-devices-intended-to-deliver-drugs-and",
      "high_impact": 1,
      "impact_reason": "FDA guidance",
      "area": "Not coded",
      "code_label": ""
    },
    {
      "item_id": "cdc_mmwr:766755",
      "source_id": "cdc_mmwr",
      "source_name": "CDC MMWR",
      "published_at": "2026-10-29T00:00:00Z",
      "title": "Notes from the Field: Use of Enhanced Surveillance to Detect Severe Group A Streptococcus Infections Among Persons Experiencing Homelessness - Missoula County, Montana, July 2024 - September 2025",
      "summary": "The Morbidity and Mortality Weekly Report (MMWR) Series is prepared by the Centers for Disease Control and Prevention (CDC).",
      "source_url": "https://www.cdc.gov/mmwr/volumes/75/wr/mm7542a1.htm?s_cid=OS_mm7542a1_x",
      "high_impact": 0,
      "impact_reason": null,
      "area": "Not coded",
      "code_label": ""
    },
    {
      "item_id": "cdc_mmwr:766756",
      "source_id": "cdc_mmwr",
      "source_name": "CDC MMWR",
      "published_at": "2026-10-29T00:00:00Z",
      "title": "Notes from the Field: Use of Enhanced Surveillance to Detect Severe Group A Streptococcus Infections Among Persons Experiencing Homelessness - Missoula County, Montana, July 2024 - September 2025",
      "summary": "The Morbidity and Mortality Weekly Report (MMWR) Series is prepared by the Centers for Disease Control and Prevention (CDC).",
      "source_url": "https://www.cdc.gov/mmwr/volumes/75/wr/mm7542a1.htm",
      "high_impact": 0,
      "impact_reason": null,
      "area": "Not coded",
      "code_label": ""
    },
    {
      "item_id": "cdc_mmwr:766759",
      "source_id": "cdc_mmwr",
      "source_name": "CDC MMWR",
      "published_at": "2026-10-29T00:00:00Z",
      "title": "QuickStats: Percentage of Children and Adolescents Aged 5 - 17 Years Who Had Ever Received a Diagnosis of Attention-Deficit/Hyperactivity Disorder, by Sex and Year - United States, 2019 - 2025",
      "summary": "This report describes the percentage of children and adolescents who had ever received an attention-deficit/hyperactivity disorder diagnosis during 2019 - 2025.",
      "source_url": "https://www.cdc.gov/mmwr/volumes/75/wr/mm7542a2.htm?s_cid=OS_mm7542a2_x",
      "high_impact": 0,
      "impact_reason": null,
      "area": "Mental health",
      "code_label": "ICD-10 F90.9 Attention-deficit hyperactivity disorder unspecified type"
    }
  ],
  "areas": [
    {
      "area": "Heart and vessels",
      "item_count": 13
    },
    {
      "area": "Diabetes and metabolism",
      "item_count": 7
    },
    {
      "area": "Mental health",
      "item_count": 7
    },
    {
      "area": "Brain and nerves",
      "item_count": 6
    },
    {
      "area": "Infection",
      "item_count": 3
    },
    {
      "area": "Cancer",
      "item_count": 2
    },
    {
      "area": "Bone and joint",
      "item_count": 1
    },
    {
      "area": "Lung",
      "item_count": 1
    },
    {
      "area": "Not coded",
      "item_count": 208
    }
  ],
  "weekly": [
    {
      "week_start": "2026-07-20",
      "source_id": "cdc_mmwr",
      "source_name": "CDC MMWR",
      "item_count": 0
    },
    {
      "week_start": "2026-07-20",
      "source_id": "openfda_label",
      "source_name": "FDA labels",
      "item_count": 0
    },
    {
      "week_start": "2026-07-20",
      "source_id": "openfda_enforcement",
      "source_name": "FDA recalls",
      "item_count": 0
    },
    {
      "week_start": "2026-07-20",
      "source_id": "federal_register",
      "source_name": "Federal Register",
      "item_count": 0
    },
    {
      "week_start": "2026-07-27",
      "source_id": "cdc_mmwr",
      "source_name": "CDC MMWR",
      "item_count": 0
    },
    {
      "week_start": "2026-07-27",
      "source_id": "openfda_label",
      "source_name": "FDA labels",
      "item_count": 0
    },
    {
      "week_start": "2026-07-27",
      "source_id": "openfda_enforcement",
      "source_name": "FDA recalls",
      "item_count": 1
    },
    {
      "week_start": "2026-07-27",
      "source_id": "federal_register",
      "source_name": "Federal Register",
      "item_count": 0
    },
    {
      "week_start": "2026-08-03",
      "source_id": "cdc_mmwr",
      "source_name": "CDC MMWR",
      "item_count": 0
    },
    {
      "week_start": "2026-08-03",
      "source_id": "openfda_label",
      "source_name": "FDA labels",
      "item_count": 0
    },
    {
      "week_start": "2026-08-03",
      "source_id": "openfda_enforcement",
      "source_name": "FDA recalls",
      "item_count": 0
    },
    {
      "week_start": "2026-08-03",
      "source_id": "federal_register",
      "source_name": "Federal Register",
      "item_count": 0
    },
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
      "item_count": 3
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
      "item_count": 2
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
      "item_count": 3
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
      "item_count": 2
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
      "item_count": 33
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
      "item_count": 9
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
      "item_count": 4
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
      "item_count": 4
    },
    {
      "week_start": "2026-09-28",
      "source_id": "openfda_enforcement",
      "source_name": "FDA recalls",
      "item_count": 0
    },
    {
      "week_start": "2026-09-28",
      "source_id": "federal_register",
      "source_name": "Federal Register",
      "item_count": 6
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
      "item_count": 4
    },
    {
      "week_start": "2026-10-05",
      "source_id": "openfda_enforcement",
      "source_name": "FDA recalls",
      "item_count": 0
    },
    {
      "week_start": "2026-10-05",
      "source_id": "federal_register",
      "source_name": "Federal Register",
      "item_count": 18
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
      "item_count": 5
    },
    {
      "week_start": "2026-10-12",
      "source_id": "openfda_enforcement",
      "source_name": "FDA recalls",
      "item_count": 6
    },
    {
      "week_start": "2026-10-12",
      "source_id": "federal_register",
      "source_name": "Federal Register",
      "item_count": 14
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
      "item_count": 3
    },
    {
      "week_start": "2026-10-19",
      "source_id": "openfda_enforcement",
      "source_name": "FDA recalls",
      "item_count": 5
    },
    {
      "week_start": "2026-10-19",
      "source_id": "federal_register",
      "source_name": "Federal Register",
      "item_count": 10
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
      "item_count": 2
    },
    {
      "week_start": "2026-10-26",
      "source_id": "openfda_enforcement",
      "source_name": "FDA recalls",
      "item_count": 28
    },
    {
      "week_start": "2026-10-26",
      "source_id": "federal_register",
      "source_name": "Federal Register",
      "item_count": 14
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
      "item_count": 18
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
      "item_count": 64
    },
    {
      "source_id": "openfda_enforcement",
      "source_name": "FDA recalls",
      "item_count": 66
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
  "generated_at": "2026-11-07T17:38:14Z"
};
