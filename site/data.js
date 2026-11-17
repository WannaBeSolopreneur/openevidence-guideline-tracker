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
      "as_of": "2026-11-17",
      "days_elapsed": 2,
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
      "current_value": 164.0,
      "target_value": 48.0,
      "current_label": "164 hours",
      "target_label": "48 hours",
      "progress_ratio": 0.2926829268292683,
      "pace_ratio": null,
      "status": "behind",
      "status_label": "Behind",
      "sort_order": 2,
      "as_of": "2026-11-17",
      "days_elapsed": 2,
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
      "current_value": 0.2835249042145594,
      "target_value": 0.4,
      "current_label": "28.4%",
      "target_label": "40%",
      "progress_ratio": 0.7088122605363985,
      "pace_ratio": null,
      "status": "behind",
      "status_label": "Behind",
      "sort_order": 3,
      "as_of": "2026-11-17",
      "days_elapsed": 2,
      "days_in_period": 7,
      "on_track_ratio": 0.95,
      "at_risk_ratio": 0.8
    },
    {
      "goal_id": "high_impact_week",
      "label": "High-impact changes this week",
      "detail": "Example target. Boxed warnings, CDC recommendations, Class I recalls, and FDA guidance notices published this week. Pace line is day 2 of 7.",
      "unit": "count",
      "metric_kind": "pace",
      "direction": "higher",
      "current_value": 0.0,
      "target_value": 4.0,
      "current_label": "0",
      "target_label": "4",
      "progress_ratio": 0.0,
      "pace_ratio": 0.2857142857142857,
      "status": "behind",
      "status_label": "Behind",
      "sort_order": 4,
      "as_of": "2026-11-17",
      "days_elapsed": 2,
      "days_in_period": 7,
      "on_track_ratio": 0.95,
      "at_risk_ratio": 0.8
    }
  ],
  "sources": [
    {
      "source_id": "cdc_mmwr",
      "source_name": "CDC MMWR",
      "fetched_at": "2026-11-17T20:39:49Z",
      "record_count": 40,
      "ok": 1,
      "note": "CDC media collection 342778, the live MMWR collection.",
      "latest_published_at": "2026-11-12T00:00:00Z"
    },
    {
      "source_id": "openfda_label",
      "source_name": "FDA labels",
      "fetched_at": "2026-11-17T20:39:49Z",
      "record_count": 72,
      "ok": 1,
      "note": "openFDA drug labels, prescription products, plus boxed warnings.",
      "latest_published_at": "2026-11-12T00:00:00Z"
    },
    {
      "source_id": "openfda_enforcement",
      "source_name": "FDA recalls",
      "fetched_at": "2026-11-17T20:39:49Z",
      "record_count": 69,
      "ok": 1,
      "note": "openFDA drug enforcement. The link is the openFDA record.",
      "latest_published_at": "2026-11-11T00:00:00Z"
    },
    {
      "source_id": "federal_register",
      "source_name": "Federal Register",
      "fetched_at": "2026-11-17T20:39:49Z",
      "record_count": 80,
      "ok": 1,
      "note": "FDA, CDC, CMS, and HHS documents that match guidance or recommendation.",
      "latest_published_at": "2026-11-17T00:00:00Z"
    }
  ],
  "actions": [
    {
      "action_id": "openfda_label:0db62c57-d020-4ddb-b24a-ecb349ce3850",
      "item_id": "openfda_label:0db62c57-d020-4ddb-b24a-ecb349ce3850",
      "source_name": "FDA labels",
      "title": "LEVOTHYROXINE SODIUM",
      "source_url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=0db62c57-d020-4ddb-b24a-ecb349ce3850",
      "impact_reason": "Boxed warning",
      "published_at": "2026-11-12T00:00:00Z",
      "sentence": "A boxed warning changed on this label. A clinician team should read it.",
      "sort_order": 1
    },
    {
      "action_id": "openfda_label:63466eb1-16b1-4d86-8c65-ce85def031b2",
      "item_id": "openfda_label:63466eb1-16b1-4d86-8c65-ce85def031b2",
      "source_name": "FDA labels",
      "title": "LEVOTHYROXINE SODIUM",
      "source_url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=63466eb1-16b1-4d86-8c65-ce85def031b2",
      "impact_reason": "Boxed warning",
      "published_at": "2026-11-12T00:00:00Z",
      "sentence": "A boxed warning changed on this label. A clinician team should read it.",
      "sort_order": 2
    },
    {
      "action_id": "openfda_label:6563b923-269f-40c3-b992-cbacdfca6e16",
      "item_id": "openfda_label:6563b923-269f-40c3-b992-cbacdfca6e16",
      "source_name": "FDA labels",
      "title": "BUPROPION HYDROCHLORIDE",
      "source_url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=6563b923-269f-40c3-b992-cbacdfca6e16",
      "impact_reason": "Boxed warning",
      "published_at": "2026-11-12T00:00:00Z",
      "sentence": "A boxed warning changed on this label. A clinician team should read it.",
      "sort_order": 3
    },
    {
      "action_id": "openfda_label:668a2730-e95a-4639-a506-ae95a6502ca1",
      "item_id": "openfda_label:668a2730-e95a-4639-a506-ae95a6502ca1",
      "source_name": "FDA labels",
      "title": "PIPERACILLIN AND TAZOBACTAM",
      "source_url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=668a2730-e95a-4639-a506-ae95a6502ca1",
      "impact_reason": "Boxed warning",
      "published_at": "2026-11-12T00:00:00Z",
      "sentence": "A boxed warning changed on this label. A clinician team should read it.",
      "sort_order": 4
    },
    {
      "action_id": "openfda_label:8f86f677-2ebd-43c4-b2dd-2e07d4d54147",
      "item_id": "openfda_label:8f86f677-2ebd-43c4-b2dd-2e07d4d54147",
      "source_name": "FDA labels",
      "title": "BUPROPION HYDROCHLORIDE",
      "source_url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=8f86f677-2ebd-43c4-b2dd-2e07d4d54147",
      "impact_reason": "Boxed warning",
      "published_at": "2026-11-12T00:00:00Z",
      "sentence": "A boxed warning changed on this label. A clinician team should read it.",
      "sort_order": 5
    }
  ],
  "feed": [
    {
      "item_id": "federal_register:2026-23300",
      "source_id": "federal_register",
      "source_name": "Federal Register",
      "published_at": "2026-11-17T00:00:00Z",
      "title": "Draft Policy Update to the NIH Policy for Data and Safety Monitoring",
      "summary": "The National Institutes of Health (NIH) is committed to ensuring risk-based monitoring for participant safety and to upholding the quality and integrity of data for all NIH-supported clinical research. To further this goal, NIH is seeking public input on proposed updates to the",
      "source_url": "https://www.federalregister.gov/documents/2026/11/17/2026-23300/draft-policy-update-to-the-nih-policy-for-data-and-safety-monitoring",
      "high_impact": 0,
      "impact_reason": null,
      "area": "Not coded",
      "code_label": ""
    },
    {
      "item_id": "federal_register:2026-23301",
      "source_id": "federal_register",
      "source_name": "Federal Register",
      "published_at": "2026-11-17T00:00:00Z",
      "title": "Agency Forms Undergoing Paperwork Reduction Act Review",
      "summary": "Federal Register document.",
      "source_url": "https://www.federalregister.gov/documents/2026/11/17/2026-23301/agency-forms-undergoing-paperwork-reduction-act-review",
      "high_impact": 0,
      "impact_reason": null,
      "area": "Not coded",
      "code_label": ""
    },
    {
      "item_id": "federal_register:2026-23350",
      "source_id": "federal_register",
      "source_name": "Federal Register",
      "published_at": "2026-11-17T00:00:00Z",
      "title": "Agency Information Collection Activities: Proposed Collection, Comment Request",
      "summary": "Federal Register document.",
      "source_url": "https://www.federalregister.gov/documents/2026/11/17/2026-23350/agency-information-collection-activities-proposed-collection-comment-request",
      "high_impact": 0,
      "impact_reason": null,
      "area": "Not coded",
      "code_label": ""
    },
    {
      "item_id": "federal_register:2026-23351",
      "source_id": "federal_register",
      "source_name": "Federal Register",
      "published_at": "2026-11-17T00:00:00Z",
      "title": "Rulemaking To Provide That N-acetyl-L-cysteine Is Not Excluded From the Dietary Supplement Definition",
      "summary": "The Food and Drug Administration (FDA or we) is proposing to issue a regulation finding that N-acetyl-L-cysteine (NAC) is not excluded from the dietary supplement definition in the Federal Food, Drug, and Cosmetic Act (FD&C Act). This action, if finalized, would allow products",
      "source_url": "https://www.federalregister.gov/documents/2026/11/17/2026-23351/rulemaking-to-provide-that-n-acetyl-l-cysteine-is-not-excluded-from-the-dietary-supplement",
      "high_impact": 0,
      "impact_reason": null,
      "area": "Not coded",
      "code_label": ""
    },
    {
      "item_id": "federal_register:2026-23204",
      "source_id": "federal_register",
      "source_name": "Federal Register",
      "published_at": "2026-11-16T00:00:00Z",
      "title": "Target Product Profile for a Rapid Diagnostic Test for West Nile Virus Disease: Request for Information",
      "summary": "The Centers for Disease Control and Prevention (CDC) in the Department of Health and Human Services (HHS) announces the opening of a docket to obtain comment on the proposed Target Product Profile for a Rapid Diagnostic Test for West Nile Virus Disease for Use in Hospitals and",
      "source_url": "https://www.federalregister.gov/documents/2026/11/16/2026-23204/target-product-profile-for-a-rapid-diagnostic-test-for-west-nile-virus-disease-request-for",
      "high_impact": 0,
      "impact_reason": null,
      "area": "Not coded",
      "code_label": ""
    },
    {
      "item_id": "federal_register:2026-23205",
      "source_id": "federal_register",
      "source_name": "Federal Register",
      "published_at": "2026-11-16T00:00:00Z",
      "title": "Target Product Profile for Monoclonal Antibodies for West Nile Virus Disease Prevention: Request for Information",
      "summary": "The Centers for Disease Control and Prevention (CDC) in the Department of Health and Human Services (HHS) announces the opening of a docket to obtain comment on the proposed Target Product Profile for Monoclonal Antibodies for West Nile Virus Disease Prevention. This Request for",
      "source_url": "https://www.federalregister.gov/documents/2026/11/16/2026-23205/target-product-profile-for-monoclonal-antibodies-for-west-nile-virus-disease-prevention-request-for",
      "high_impact": 0,
      "impact_reason": null,
      "area": "Not coded",
      "code_label": ""
    },
    {
      "item_id": "federal_register:2026-23206",
      "source_id": "federal_register",
      "source_name": "Federal Register",
      "published_at": "2026-11-16T00:00:00Z",
      "title": "Target Product Profile for a Human West Nile Virus Vaccine: Request for Information",
      "summary": "The Centers for Disease Control and Prevention (CDC) in the Department of Health and Human Services (HHS) announces the opening of a docket to obtain comment on the proposed Target Product Profile for a Human West Nile Virus Vaccine. This Request for Information (RFI) invites",
      "source_url": "https://www.federalregister.gov/documents/2026/11/16/2026-23206/target-product-profile-for-a-human-west-nile-virus-vaccine-request-for-information",
      "high_impact": 0,
      "impact_reason": null,
      "area": "Not coded",
      "code_label": ""
    },
    {
      "item_id": "federal_register:2026-23279",
      "source_id": "federal_register",
      "source_name": "Federal Register",
      "published_at": "2026-11-16T00:00:00Z",
      "title": "Restoring Flexibility To Support Head Start Program Access",
      "summary": "In this final rule, the Administration for Children and Families (ACF) removes requirements from the Head Start Program Performance Standards (Performance Standards) to restore local flexibility to Head Start programs and improve access to quality services. Specifically, this",
      "source_url": "https://www.federalregister.gov/documents/2026/11/16/2026-23279/restoring-flexibility-to-support-head-start-program-access",
      "high_impact": 0,
      "impact_reason": null,
      "area": "Not coded",
      "code_label": ""
    },
    {
      "item_id": "federal_register:2026-23114",
      "source_id": "federal_register",
      "source_name": "Federal Register",
      "published_at": "2026-11-13T00:00:00Z",
      "title": "Order Under Sections 362 and 365 of the Public Health Service Act Continuing the Suspension of the Right To Introduce Certain Persons From Countries Where a Quarantinable Communicable Disease Exists",
      "summary": "The Centers for Disease Control and Prevention (CDC), a component of the Department of Health and Human Services (HHS), announces it is issuing an Order under Sections 362 and 365 of the Public Health Service Act, and associated implementing regulations, continuing the",
      "source_url": "https://www.federalregister.gov/documents/2026/11/13/2026-23114/order-under-sections-362-and-365-of-the-public-health-service-act-continuing-the-suspension-of-the",
      "high_impact": 0,
      "impact_reason": null,
      "area": "Not coded",
      "code_label": ""
    },
    {
      "item_id": "federal_register:2026-23119",
      "source_id": "federal_register",
      "source_name": "Federal Register",
      "published_at": "2026-11-13T00:00:00Z",
      "title": "Agency Information Collection Activities: Submission for OMB Review, Comment Request",
      "summary": "The Centers for Medicare & Medicaid Services (CMS) is announcing an opportunity for the public to comment on CMS' intention to collect information from the public. Under the Paperwork Reduction Act of 1995 (PRA), federal agencies are required to publish notice in the Federal",
      "source_url": "https://www.federalregister.gov/documents/2026/11/13/2026-23119/agency-information-collection-activities-submission-for-omb-review-comment-request",
      "high_impact": 0,
      "impact_reason": null,
      "area": "Not coded",
      "code_label": ""
    },
    {
      "item_id": "federal_register:2026-23146",
      "source_id": "federal_register",
      "source_name": "Federal Register",
      "published_at": "2026-11-13T00:00:00Z",
      "title": "Agency Information Collection Activities: Submission for OMB Review, Comment Request",
      "summary": "The Centers for Medicare & Medicaid Services (CMS) is announcing an opportunity for the public to comment on CMS' intention to collect information from the public. Under the Paperwork Reduction Act of 1995 (PRA), federal agencies are required to publish notice in the Federal",
      "source_url": "https://www.federalregister.gov/documents/2026/11/13/2026-23146/agency-information-collection-activities-submission-for-omb-review-comment-request",
      "high_impact": 0,
      "impact_reason": null,
      "area": "Not coded",
      "code_label": ""
    },
    {
      "item_id": "federal_register:2026-23189",
      "source_id": "federal_register",
      "source_name": "Federal Register",
      "published_at": "2026-11-13T00:00:00Z",
      "title": "Agency Information Collection Activities: Proposed Collection, Comment Request",
      "summary": "The Centers for Medicare & Medicaid Services (CMS) is announcing an opportunity for the public to comment on CMS' intention to collect information from the public. Under the Paperwork Reduction Act of 1995 (PRA), federal agencies are required to publish notice in the Federal",
      "source_url": "https://www.federalregister.gov/documents/2026/11/13/2026-23189/agency-information-collection-activities-proposed-collection-comment-request",
      "high_impact": 0,
      "impact_reason": null,
      "area": "Not coded",
      "code_label": ""
    },
    {
      "item_id": "cdc_mmwr:766820",
      "source_id": "cdc_mmwr",
      "source_name": "CDC MMWR",
      "published_at": "2026-11-12T00:00:00Z",
      "title": "Use of Glucagon-Like Peptide-1 Medications and Modified Medication Use Among Adults - United States, 2025",
      "summary": "This report describes GLP-1 and compounded GLP-1 use among adults during 2025.",
      "source_url": "https://www.cdc.gov/mmwr/volumes/75/wr/mm7544a1.htm?s_cid=OS_mm7544a1_x",
      "high_impact": 0,
      "impact_reason": null,
      "area": "Not coded",
      "code_label": "RxNorm 4832 glucagon"
    },
    {
      "item_id": "cdc_mmwr:766823",
      "source_id": "cdc_mmwr",
      "source_name": "CDC MMWR",
      "published_at": "2026-11-12T00:00:00Z",
      "title": "Notes from the Field: Dengue Outbreak - American Samoa, 2025 - 2026",
      "summary": "This report describes a dengue outbreak in America Samoa that resulted in 1,048 confirmed cases and 371 hospitalizations during June 2025 - August 2026.",
      "source_url": "https://www.cdc.gov/mmwr/volumes/75/wr/mm7544a2.htm?s_cid=mm7544a2_x",
      "high_impact": 0,
      "impact_reason": null,
      "area": "Not coded",
      "code_label": ""
    },
    {
      "item_id": "federal_register:2026-22964",
      "source_id": "federal_register",
      "source_name": "Federal Register",
      "published_at": "2026-11-12T00:00:00Z",
      "title": "Agency Information Collection Activities, Proposed Collection, Comment Request, Veterinary Feed Directive",
      "summary": "The Food and Drug Administration (FDA or Agency) is announcing an opportunity for public comment on the proposed collection of certain information by the Agency. Under the Paperwork Reduction Act of 1995 (PRA), Federal Agencies are required to publish notice in the Federal",
      "source_url": "https://www.federalregister.gov/documents/2026/11/12/2026-22964/agency-information-collection-activities-proposed-collection-comment-request-veterinary-feed",
      "high_impact": 0,
      "impact_reason": null,
      "area": "Not coded",
      "code_label": ""
    },
    {
      "item_id": "federal_register:2026-22965",
      "source_id": "federal_register",
      "source_name": "Federal Register",
      "published_at": "2026-11-12T00:00:00Z",
      "title": "Agency Information Collection Activities, Proposed Collection, Comment Request, Voluntary Qualified Importer Program",
      "summary": "The Food and Drug Administration (FDA or Agency) is announcing an opportunity for public comment on the proposed collection of certain information by the Agency. Under the Paperwork Reduction Act of 1995 (PRA), Federal Agencies are required to publish notice in the Federal",
      "source_url": "https://www.federalregister.gov/documents/2026/11/12/2026-22965/agency-information-collection-activities-proposed-collection-comment-request-voluntary-qualified",
      "high_impact": 0,
      "impact_reason": null,
      "area": "Not coded",
      "code_label": ""
    },
    {
      "item_id": "federal_register:2026-22970",
      "source_id": "federal_register",
      "source_name": "Federal Register",
      "published_at": "2026-11-12T00:00:00Z",
      "title": "Early-Phase IND Protocol Recommendations for Solid Tumors, Draft Guidance for Industry, Availability",
      "summary": "The Food and Drug Administration (FDA or Agency) is announcing the availability of a draft guidance for industry titled \"Early-Phase IND Protocol Recommendations for Solid Tumors.\" The purpose of this draft guidance is to provide recommendations to sponsors and clinical",
      "source_url": "https://www.federalregister.gov/documents/2026/11/12/2026-22970/early-phase-ind-protocol-recommendations-for-solid-tumors-draft-guidance-for-industry-availability",
      "high_impact": 1,
      "impact_reason": "FDA guidance",
      "area": "Not coded",
      "code_label": ""
    },
    {
      "item_id": "federal_register:2026-22996",
      "source_id": "federal_register",
      "source_name": "Federal Register",
      "published_at": "2026-11-12T00:00:00Z",
      "title": "Patient-Level Data for Drugs and Biological Products Submissions Containing Real-World Data and Real-World Evidence, Request for Information",
      "summary": "The Food and Drug Administration (FDA or Agency), is announcing a request for information (RFI) from interested parties to share perspectives on patient-level data access related to the use of real-world evidence (RWE) in regulatory decision-making for drugs and biological",
      "source_url": "https://www.federalregister.gov/documents/2026/11/12/2026-22996/patient-level-data-for-drugs-and-biological-products-submissions-containing-real-world-data-and",
      "high_impact": 0,
      "impact_reason": null,
      "area": "Not coded",
      "code_label": ""
    },
    {
      "item_id": "federal_register:2026-23005",
      "source_id": "federal_register",
      "source_name": "Federal Register",
      "published_at": "2026-11-12T00:00:00Z",
      "title": "Hematology and Pathology Devices, Reclassification of Immunohistochemistry Test Systems for Use With a Corresponding Approved Oncology Therapeutic Product",
      "summary": "The Food and Drug Administration (FDA) is proposing to reclassify immunohistochemistry (IHC) test systems indicated for use with a corresponding approved oncology therapeutic product (product codes MVC, NKF, QQT, NQF, PLS, PKW, QUL, QNH, QZJ, SBL, SER, and SHF), which are",
      "source_url": "https://www.federalregister.gov/documents/2026/11/12/2026-23005/hematology-and-pathology-devices-reclassification-of-immunohistochemistry-test-systems-for-use-with",
      "high_impact": 0,
      "impact_reason": null,
      "area": "Not coded",
      "code_label": ""
    },
    {
      "item_id": "federal_register:2026-23037",
      "source_id": "federal_register",
      "source_name": "Federal Register",
      "published_at": "2026-11-12T00:00:00Z",
      "title": "Agency Information Collection Activities: Proposed Collection, Comment Request",
      "summary": "The Centers for Medicare & Medicaid Services (CMS) is announcing an opportunity for the public to comment on CMS' intention to collect information from the public. Under the Paperwork Reduction Act of 1995 (PRA), federal agencies are required to publish notice in the Federal",
      "source_url": "https://www.federalregister.gov/documents/2026/11/12/2026-23037/agency-information-collection-activities-proposed-collection-comment-request",
      "high_impact": 0,
      "impact_reason": null,
      "area": "Not coded",
      "code_label": ""
    },
    {
      "item_id": "openfda_label:0556378a-b794-4235-ba09-ebdc295e9092",
      "source_id": "openfda_label",
      "source_name": "FDA labels",
      "published_at": "2026-11-12T00:00:00Z",
      "title": "Nafcillin (NAFCILLIN SODIUM)",
      "summary": "INDICATIONS AND USAGE Nafcillin is indicated in the treatment of infections caused by penicillinase-producing staphylococci which have demonstrated susceptibility to the drug. Culture and susceptibility tests should be performed initially to determine the causative organism and",
      "source_url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=0556378a-b794-4235-ba09-ebdc295e9092",
      "high_impact": 0,
      "impact_reason": null,
      "area": "Not coded",
      "code_label": ""
    },
    {
      "item_id": "openfda_label:0db62c57-d020-4ddb-b24a-ecb349ce3850",
      "source_id": "openfda_label",
      "source_name": "FDA labels",
      "published_at": "2026-11-12T00:00:00Z",
      "title": "LEVOTHYROXINE SODIUM",
      "summary": "WARNING: NOT FOR TREATMENT OF OBESITY OR FOR WEIGHT LOSS Thyroid hormones, including levothyroxine sodium, either alone or with other therapeutic agents, should not be used for the treatment of obesity or for weight loss. In euthyroid patients, doses within the range of daily",
      "source_url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=0db62c57-d020-4ddb-b24a-ecb349ce3850",
      "high_impact": 1,
      "impact_reason": "Boxed warning",
      "area": "Diabetes and metabolism",
      "code_label": "ICD-10 E03.9 Hypothyroidism unspecified. E66.9 Obesity unspecified. RxNorm 10582 levothyroxine"
    },
    {
      "item_id": "openfda_label:19546563-50b7-4160-8cbe-f8e7079cba69",
      "source_id": "openfda_label",
      "source_name": "FDA labels",
      "published_at": "2026-11-12T00:00:00Z",
      "title": "Ampicillin (AMPICILLIN SODIUM)",
      "summary": "INDICATIONS AND USAGE Ampicillin for Injection, USP is indicated in the treatment of infections caused by susceptible strains of the designated organisms in the following conditions: Respiratory Tract Infections caused by Streptococcus pneumoniae, Staphylococcus aureus",
      "source_url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=19546563-50b7-4160-8cbe-f8e7079cba69",
      "high_impact": 0,
      "impact_reason": null,
      "area": "Not coded",
      "code_label": ""
    },
    {
      "item_id": "openfda_label:4446d4c8-056d-4bc3-8f58-21255b063398",
      "source_id": "openfda_label",
      "source_name": "FDA labels",
      "published_at": "2026-11-12T00:00:00Z",
      "title": "AMPICILLIN AND SULBACTAM",
      "summary": "INDICATIONS AND USAGE Ampicillin and sulbactam for injection is indicated for the treatment of infections due to susceptible strains of the designated microorganisms in the conditions listed below. Skin and Skin Structure Infections caused by beta-lactamase producing strains of",
      "source_url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=4446d4c8-056d-4bc3-8f58-21255b063398",
      "high_impact": 0,
      "impact_reason": null,
      "area": "Not coded",
      "code_label": ""
    },
    {
      "item_id": "openfda_label:4b699dd8-d232-4bdb-88ce-9b42ed93e036",
      "source_id": "openfda_label",
      "source_name": "FDA labels",
      "published_at": "2026-11-12T00:00:00Z",
      "title": "ZOLEDRONIC ACID",
      "summary": "1 INDICATIONS AND USAGE Zoledronic acid injection is a bisphosphonate indicated for the treatment of: Hypercalcemia of malignancy. ( 1.1 ) Patients with multiple myeloma and patients with documented bone metastases from solid tumors, in conjunction with standard antineoplastic",
      "source_url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=4b699dd8-d232-4bdb-88ce-9b42ed93e036",
      "high_impact": 0,
      "impact_reason": null,
      "area": "Cancer",
      "code_label": "ICD-10 C61 Malignant neoplasm of prostate"
    },
    {
      "item_id": "openfda_label:577dd6f0-d56a-4c82-9f72-274c3a4a0f01",
      "source_id": "openfda_label",
      "source_name": "FDA labels",
      "published_at": "2026-11-12T00:00:00Z",
      "title": "AMPICILLIN AND SULBACTAM",
      "summary": "INDICATIONS AND USAGE Ampicillin and sulbactam for injection is indicated for the treatment of infections due to susceptible strains of the designated microorganisms in the conditions listed below. Skin and Skin Structure Infections caused by beta-lactamase producing strains of",
      "source_url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=577dd6f0-d56a-4c82-9f72-274c3a4a0f01",
      "high_impact": 0,
      "impact_reason": null,
      "area": "Not coded",
      "code_label": ""
    },
    {
      "item_id": "openfda_label:63466eb1-16b1-4d86-8c65-ce85def031b2",
      "source_id": "openfda_label",
      "source_name": "FDA labels",
      "published_at": "2026-11-12T00:00:00Z",
      "title": "LEVOTHYROXINE SODIUM",
      "summary": "WARNING: NOT FOR TREATMENT OF OBESITY OR FOR WEIGHT LOSS Thyroid hormones, including levothyroxine sodium, either alone or with other therapeutic agents, should not be used for the treatment of obesity or for weight loss. In euthyroid patients, doses within the range of daily",
      "source_url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=63466eb1-16b1-4d86-8c65-ce85def031b2",
      "high_impact": 1,
      "impact_reason": "Boxed warning",
      "area": "Diabetes and metabolism",
      "code_label": "ICD-10 E03.9 Hypothyroidism unspecified. E66.9 Obesity unspecified. RxNorm 10582 levothyroxine"
    },
    {
      "item_id": "openfda_label:6563b923-269f-40c3-b992-cbacdfca6e16",
      "source_id": "openfda_label",
      "source_name": "FDA labels",
      "published_at": "2026-11-12T00:00:00Z",
      "title": "BUPROPION HYDROCHLORIDE",
      "summary": "WARNING: SUICIDAL THOUGHTS AND BEHAVIORS SUICIDALITY AND ANTIDEPRESSANT DRUGS Antidepressants increased the risk of suicidal thoughts and behavior in children, adolescents, and young adults in short-term trials. These trials did not show an increase in the risk of suicidal",
      "source_url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=6563b923-269f-40c3-b992-cbacdfca6e16",
      "high_impact": 1,
      "impact_reason": "Boxed warning",
      "area": "Mental health",
      "code_label": "ICD-10 F32.9 Major depressive disorder single episode unspecified. R45.851 Suicidal ideations. RxNorm 42347 bupropion"
    },
    {
      "item_id": "openfda_label:668a2730-e95a-4639-a506-ae95a6502ca1",
      "source_id": "openfda_label",
      "source_name": "FDA labels",
      "published_at": "2026-11-12T00:00:00Z",
      "title": "PIPERACILLIN AND TAZOBACTAM",
      "summary": "PHARMACY BULK PACKAGE - NOT FOR DIRECT INFUSION PHARMACY BULK PACKAGE - NOT FOR DIRECT INFUSION",
      "source_url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=668a2730-e95a-4639-a506-ae95a6502ca1",
      "high_impact": 1,
      "impact_reason": "Boxed warning",
      "area": "Lung",
      "code_label": "ICD-10 J18.9 Pneumonia unspecified organism. RxNorm 8339 piperacillin"
    },
    {
      "item_id": "openfda_label:6f044d16-295e-43ff-72a3-b045c387bc5c",
      "source_id": "openfda_label",
      "source_name": "FDA labels",
      "published_at": "2026-11-12T00:00:00Z",
      "title": "Sodium Phosphates (SODIUM PHOSPHATE, MONOBASIC, MONOHYDRATE AND SODIUM PHOSPHATE, DIBASIC, ANHYDROUS)",
      "summary": "INDICATIONS AND USAGE Sodium Phosphates Injection, USP, 3 mM P/mL is indicated as a source of phosphorus, for addition to large volume intravenous fluids, to prevent or correct hypophosphatemia in patients with restricted or no oral intake. It is also useful as an additive for",
      "source_url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=6f044d16-295e-43ff-72a3-b045c387bc5c",
      "high_impact": 0,
      "impact_reason": null,
      "area": "Not coded",
      "code_label": ""
    }
  ],
  "areas": [
    {
      "area": "Heart and vessels",
      "item_count": 13
    },
    {
      "area": "Mental health",
      "item_count": 12
    },
    {
      "area": "Brain and nerves",
      "item_count": 3
    },
    {
      "area": "Cancer",
      "item_count": 3
    },
    {
      "area": "Lung",
      "item_count": 3
    },
    {
      "area": "Diabetes and metabolism",
      "item_count": 2
    },
    {
      "area": "Infection",
      "item_count": 2
    },
    {
      "area": "Not coded",
      "item_count": 220
    }
  ],
  "weekly": [
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
      "item_count": 1
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
      "item_count": 0
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
      "item_count": 0
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
      "item_count": 0
    },
    {
      "week_start": "2026-10-12",
      "source_id": "federal_register",
      "source_name": "Federal Register",
      "item_count": 13
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
      "item_count": 0
    },
    {
      "week_start": "2026-10-26",
      "source_id": "openfda_enforcement",
      "source_name": "FDA recalls",
      "item_count": 3
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
      "item_count": 15
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
      "item_count": 72
    },
    {
      "week_start": "2026-11-09",
      "source_id": "openfda_enforcement",
      "source_name": "FDA recalls",
      "item_count": 39
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
      "item_count": 0
    },
    {
      "week_start": "2026-11-16",
      "source_id": "openfda_label",
      "source_name": "FDA labels",
      "item_count": 0
    },
    {
      "week_start": "2026-11-16",
      "source_id": "openfda_enforcement",
      "source_name": "FDA recalls",
      "item_count": 0
    },
    {
      "week_start": "2026-11-16",
      "source_id": "federal_register",
      "source_name": "Federal Register",
      "item_count": 8
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
      "item_count": 72
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
  "generated_at": "2026-11-17T20:39:49Z"
};
