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
      "as_of": "2026-11-25",
      "days_elapsed": 3,
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
      "current_value": 20.0,
      "target_value": 48.0,
      "current_label": "20 hours",
      "target_label": "48 hours",
      "progress_ratio": 2.4,
      "pace_ratio": null,
      "status": "on_track",
      "status_label": "On track",
      "sort_order": 2,
      "as_of": "2026-11-25",
      "days_elapsed": 3,
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
      "current_value": 0.35877862595419846,
      "target_value": 0.4,
      "current_label": "35.9%",
      "target_label": "40%",
      "progress_ratio": 0.8969465648854961,
      "pace_ratio": null,
      "status": "at_risk",
      "status_label": "At risk",
      "sort_order": 3,
      "as_of": "2026-11-25",
      "days_elapsed": 3,
      "days_in_period": 7,
      "on_track_ratio": 0.95,
      "at_risk_ratio": 0.8
    },
    {
      "goal_id": "high_impact_week",
      "label": "High-impact changes this week",
      "detail": "Example target. Boxed warnings, CDC recommendations, Class I recalls, and FDA guidance notices published this week. Pace line is day 3 of 7.",
      "unit": "count",
      "metric_kind": "pace",
      "direction": "higher",
      "current_value": 2.0,
      "target_value": 4.0,
      "current_label": "2",
      "target_label": "4",
      "progress_ratio": 0.5,
      "pace_ratio": 0.42857142857142855,
      "status": "on_track",
      "status_label": "On track",
      "sort_order": 4,
      "as_of": "2026-11-25",
      "days_elapsed": 3,
      "days_in_period": 7,
      "on_track_ratio": 0.95,
      "at_risk_ratio": 0.8
    }
  ],
  "sources": [
    {
      "source_id": "cdc_mmwr",
      "source_name": "CDC MMWR",
      "fetched_at": "2026-11-25T21:25:10Z",
      "record_count": 40,
      "ok": 1,
      "note": "CDC media collection 342778, the live MMWR collection.",
      "latest_published_at": "2026-11-25T00:00:00Z"
    },
    {
      "source_id": "openfda_label",
      "source_name": "FDA labels",
      "fetched_at": "2026-11-25T21:25:10Z",
      "record_count": 73,
      "ok": 1,
      "note": "openFDA drug labels, prescription products, plus boxed warnings.",
      "latest_published_at": "2026-11-23T00:00:00Z"
    },
    {
      "source_id": "openfda_enforcement",
      "source_name": "FDA recalls",
      "fetched_at": "2026-11-25T21:25:10Z",
      "record_count": 69,
      "ok": 1,
      "note": "openFDA drug enforcement. The link is the openFDA record.",
      "latest_published_at": "2026-11-18T00:00:00Z"
    },
    {
      "source_id": "federal_register",
      "source_name": "Federal Register",
      "fetched_at": "2026-11-25T21:25:10Z",
      "record_count": 80,
      "ok": 1,
      "note": "FDA, CDC, CMS, and HHS documents that match guidance or recommendation.",
      "latest_published_at": "2026-11-25T00:00:00Z"
    }
  ],
  "actions": [
    {
      "action_id": "openfda_label:4116ccde-2e23-45f4-b12f-6337df877744",
      "item_id": "openfda_label:4116ccde-2e23-45f4-b12f-6337df877744",
      "source_name": "FDA labels",
      "title": "HYZAAR (LOSARTAN POTASSIUM AND HYDROCHLOROTHIAZIDE)",
      "source_url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=4116ccde-2e23-45f4-b12f-6337df877744",
      "impact_reason": "Boxed warning",
      "published_at": "2026-11-18T00:00:00Z",
      "sentence": "A boxed warning changed on this label. A clinician team should read it.",
      "sort_order": 1
    },
    {
      "action_id": "openfda_label:07d43bf6-a695-453a-a5c7-9581effe585c",
      "item_id": "openfda_label:07d43bf6-a695-453a-a5c7-9581effe585c",
      "source_name": "FDA labels",
      "title": "RISPERIDONE",
      "source_url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=07d43bf6-a695-453a-a5c7-9581effe585c",
      "impact_reason": "Boxed warning",
      "published_at": "2026-11-17T00:00:00Z",
      "sentence": "A boxed warning changed on this label. A clinician team should read it.",
      "sort_order": 2
    },
    {
      "action_id": "openfda_label:0f692652-4451-4eef-901d-1e6aadc43847",
      "item_id": "openfda_label:0f692652-4451-4eef-901d-1e6aadc43847",
      "source_name": "FDA labels",
      "title": "OLANZAPINE",
      "source_url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=0f692652-4451-4eef-901d-1e6aadc43847",
      "impact_reason": "Boxed warning",
      "published_at": "2026-11-17T00:00:00Z",
      "sentence": "A boxed warning changed on this label. A clinician team should read it.",
      "sort_order": 3
    },
    {
      "action_id": "openfda_label:0fd4f3cc-409a-4609-affc-29947714461e",
      "item_id": "openfda_label:0fd4f3cc-409a-4609-affc-29947714461e",
      "source_name": "FDA labels",
      "title": "TOFACITINIB",
      "source_url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=0fd4f3cc-409a-4609-affc-29947714461e",
      "impact_reason": "Boxed warning",
      "published_at": "2026-11-17T00:00:00Z",
      "sentence": "A boxed warning changed on this label. A clinician team should read it.",
      "sort_order": 4
    },
    {
      "action_id": "openfda_label:176b400b-2b4e-481d-b6c4-0f99e4c711c3",
      "item_id": "openfda_label:176b400b-2b4e-481d-b6c4-0f99e4c711c3",
      "source_name": "FDA labels",
      "title": "VALSARTAN AND HYDROCHLOROTHIAZIDE",
      "source_url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=176b400b-2b4e-481d-b6c4-0f99e4c711c3",
      "impact_reason": "Boxed warning",
      "published_at": "2026-11-17T00:00:00Z",
      "sentence": "A boxed warning changed on this label. A clinician team should read it.",
      "sort_order": 5
    }
  ],
  "feed": [
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
      "item_id": "federal_register:2026-23798",
      "source_id": "federal_register",
      "source_name": "Federal Register",
      "published_at": "2026-11-23T00:00:00Z",
      "title": "Request for Public Comment on the Proposed Short-Term Exposure Limit for Occupational Exposure to Carbon Monoxide",
      "summary": "The National Institute for Occupational Safety and Health (NIOSH) in the Centers for Disease Control and Prevention (CDC), an operating division of the Department of Health and Human Services (HHS), requests public comment on the draft document, Proposed Short- Term Exposure",
      "source_url": "https://www.federalregister.gov/documents/2026/11/23/2026-23798/request-for-public-comment-on-the-proposed-short-term-exposure-limit-for-occupational-exposure-to",
      "high_impact": 0,
      "impact_reason": null,
      "area": "Not coded",
      "code_label": ""
    },
    {
      "item_id": "federal_register:2026-23799",
      "source_id": "federal_register",
      "source_name": "Federal Register",
      "published_at": "2026-11-23T00:00:00Z",
      "title": "National Institute for Occupational Safety and Health (NIOSH) Center for Occupational Robotics Research (CORR), Request for Information",
      "summary": "The Centers for Disease Control and Prevention's (CDC) National Institute for Occupational Safety and Health (NIOSH), in the Department of Health and Human Services, requests public input on research priorities and prevention needs related to humanoid robots in workplaces.",
      "source_url": "https://www.federalregister.gov/documents/2026/11/23/2026-23799/national-institute-for-occupational-safety-and-health-niosh-center-for-occupational-robotics",
      "high_impact": 0,
      "impact_reason": null,
      "area": "Not coded",
      "code_label": ""
    },
    {
      "item_id": "openfda_label:fc8e868f-9699-4ae6-83d5-fa27789336cd",
      "source_id": "openfda_label",
      "source_name": "FDA labels",
      "published_at": "2026-11-23T00:00:00Z",
      "title": "ADAPALENE AND BENZOYL PEROXIDE",
      "summary": "1 INDICATIONS AND USAGE Adapalene and benzoyl peroxide gel is indicated for the topical treatment of acne vulgaris in patients 9 years of age and older. Adapalene and benzoyl peroxide gel is a combination of adapalene, a retinoid, and benzoyl peroxide, and is indicated for the",
      "source_url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=fc8e868f-9699-4ae6-83d5-fa27789336cd",
      "high_impact": 0,
      "impact_reason": null,
      "area": "Not coded",
      "code_label": "RxNorm 829539 adapalene and benzoyl peroxide. RxNorm 60223 adapalene"
    },
    {
      "item_id": "openfda_label:a4ddf68d-1502-4242-89aa-c96436bdcbf6",
      "source_id": "openfda_label",
      "source_name": "FDA labels",
      "published_at": "2026-11-22T00:00:00Z",
      "title": "MESALAMINE",
      "summary": "1 INDICATIONS AND USAGE Mesalamine rectal suspension enema is indicated for the treatment of active mild to moderate distal ulcerative colitis, proctosigmoiditis or proctitis in adults. Mesalamine rectal suspension enema is an aminosalicylate indicated for treatment of active",
      "source_url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=a4ddf68d-1502-4242-89aa-c96436bdcbf6",
      "high_impact": 0,
      "impact_reason": null,
      "area": "Not coded",
      "code_label": "RxNorm 52582 mesalamine"
    },
    {
      "item_id": "federal_register:2026-23668",
      "source_id": "federal_register",
      "source_name": "Federal Register",
      "published_at": "2026-11-20T00:00:00Z",
      "title": "Transfer of a Premarket Notification (510(k)) Clearance-Questions and Answers, Guidance for Industry and Food and Drug Administration Staff, Availability",
      "summary": "The Food and Drug Administration (FDA or Agency) is announcing the availability of a final guidance titled \"Transfer of a Premarket Notification (510(k)) Clearance--Questions and Answers.\" This guidance provides information on the most frequently asked questions regarding the",
      "source_url": "https://www.federalregister.gov/documents/2026/11/20/2026-23668/transfer-of-a-premarket-notification-510k-clearance-questions-and-answers-guidance-for-industry-and",
      "high_impact": 1,
      "impact_reason": "FDA guidance",
      "area": "Not coded",
      "code_label": ""
    },
    {
      "item_id": "federal_register:2026-23692",
      "source_id": "federal_register",
      "source_name": "Federal Register",
      "published_at": "2026-11-20T00:00:00Z",
      "title": "Product-Specific Guidances, Draft and Revised Draft Guidances for Industry, Availability",
      "summary": "The Food and Drug Administration (FDA or Agency) is announcing the availability of additional draft and revised draft product-specific guidances. The draft guidances provide product-specific recommendations on, among other things, the design of bioequivalence (BE) studies to",
      "source_url": "https://www.federalregister.gov/documents/2026/11/20/2026-23692/product-specific-guidances-draft-and-revised-draft-guidances-for-industry-availability",
      "high_impact": 1,
      "impact_reason": "FDA guidance",
      "area": "Not coded",
      "code_label": ""
    },
    {
      "item_id": "cdc_mmwr:766874",
      "source_id": "cdc_mmwr",
      "source_name": "CDC MMWR",
      "published_at": "2026-11-19T00:00:00Z",
      "title": "Stroke Death Rates Among Adults Aged ≥18 Years - United States, 2000 - 2024",
      "summary": "This report describes stroke death rates among U.S. adults during 2000 - 2024.",
      "source_url": "https://www.cdc.gov/mmwr/volumes/75/wr/mm7545a1.htm?s_cid=mm7545a1_x",
      "high_impact": 0,
      "impact_reason": null,
      "area": "Heart and vessels",
      "code_label": "ICD-10 I63.9 Cerebral infarction unspecified"
    },
    {
      "item_id": "cdc_mmwr:766875",
      "source_id": "cdc_mmwr",
      "source_name": "CDC MMWR",
      "published_at": "2026-11-19T00:00:00Z",
      "title": "Respiratory Virus Activity - United States, July 2025 - June 2026",
      "summary": "This report describes respiratory virus activity in the U.S. during July 2025 - 2026.",
      "source_url": "https://www.cdc.gov/mmwr/volumes/75/wr/mm7545a2.htm?s_cid=mm7545a2_x",
      "high_impact": 0,
      "impact_reason": null,
      "area": "Not coded",
      "code_label": ""
    },
    {
      "item_id": "federal_register:2026-23429",
      "source_id": "federal_register",
      "source_name": "Federal Register",
      "published_at": "2026-11-19T00:00:00Z",
      "title": "HIPAA Privacy Rule: Changes To Support Coordinated Care and Individual Engagement and Reduce Regulatory Burdens",
      "summary": "The Department of Health and Human Services (HHS or \"Department\") is issuing this final rule to modify the Standards for Privacy of Individually Identifiable Health Information (\"Privacy Rule\") under the Health Insurance Portability and Accountability Act of 1996 (HIPAA) and the",
      "source_url": "https://www.federalregister.gov/documents/2026/11/19/2026-23429/hipaa-privacy-rule-changes-to-support-coordinated-care-and-individual-engagement-and-reduce",
      "high_impact": 0,
      "impact_reason": null,
      "area": "Not coded",
      "code_label": ""
    },
    {
      "item_id": "federal_register:2026-23461",
      "source_id": "federal_register",
      "source_name": "Federal Register",
      "published_at": "2026-11-19T00:00:00Z",
      "title": "Medicare, Medicaid, and Marketplace Programs, Comprehensive Regulations To Uncover Suspicious Healthcare (CRUSH)",
      "summary": "This proposed rule would revise provisions regarding provider enrollment, medical review, investigations, and other program integrity oversight provisions to greatly strengthen our ability to crush fraud, enhance program integrity efforts across Medicare, Medicaid, Children's",
      "source_url": "https://www.federalregister.gov/documents/2026/11/19/2026-23461/medicare-medicaid-and-marketplace-programs-comprehensive-regulations-to-uncover-suspicious",
      "high_impact": 0,
      "impact_reason": null,
      "area": "Not coded",
      "code_label": ""
    },
    {
      "item_id": "federal_register:2026-23540",
      "source_id": "federal_register",
      "source_name": "Federal Register",
      "published_at": "2026-11-19T00:00:00Z",
      "title": "Medicare and Medicaid Programs, Quarterly Listing of Program Issuances-July Through September 2026",
      "summary": "This quarterly notice lists Centers for Medicare & Medicaid Services (CMS) manual instructions, substantive and interpretive regulations, and other Federal Register notices that were published in the 3-month period, relating to the Medicare and Medicaid programs and other",
      "source_url": "https://www.federalregister.gov/documents/2026/11/19/2026-23540/medicare-and-medicaid-programs-quarterly-listing-of-program-issuances-july-through-september-2026",
      "high_impact": 0,
      "impact_reason": null,
      "area": "Not coded",
      "code_label": ""
    },
    {
      "item_id": "federal_register:2026-23542",
      "source_id": "federal_register",
      "source_name": "Federal Register",
      "published_at": "2026-11-19T00:00:00Z",
      "title": "Agency Information Collection Activities, Submission for Office of Management and Budget Review, Comment Request, National Youth Tobacco Survey",
      "summary": "The Food and Drug Administration (FDA) is announcing that a proposed collection of information has been submitted to the Office of Management and Budget (OMB) for review and clearance under the Paperwork Reduction Act of 1995.",
      "source_url": "https://www.federalregister.gov/documents/2026/11/19/2026-23542/agency-information-collection-activities-submission-for-office-of-management-and-budget-review",
      "high_impact": 0,
      "impact_reason": null,
      "area": "Not coded",
      "code_label": ""
    },
    {
      "item_id": "federal_register:2026-23601",
      "source_id": "federal_register",
      "source_name": "Federal Register",
      "published_at": "2026-11-19T00:00:00Z",
      "title": "Medicare Program, Medicare Part B Monthly Actuarial Rates, Premium Rates, and Annual Deductible Beginning January 1, 2027",
      "summary": "This notice announces the monthly actuarial rates for aged (age 65 and over) and disabled (under age 65) beneficiaries enrolled in Part B of the Medicare Supplementary Medical Insurance (SMI) program beginning January 1, 2027. In addition, this notice announces the monthly",
      "source_url": "https://www.federalregister.gov/documents/2026/11/19/2026-23601/medicare-program-medicare-part-b-monthly-actuarial-rates-premium-rates-and-annual-deductible",
      "high_impact": 0,
      "impact_reason": null,
      "area": "Not coded",
      "code_label": ""
    },
    {
      "item_id": "federal_register:2026-23460",
      "source_id": "federal_register",
      "source_name": "Federal Register",
      "published_at": "2026-11-18T00:00:00Z",
      "title": "Submission for Office of Management and Budget Review, Monitoring and Compliance for Office of Refugee Resettlement Care Provider Facilities",
      "summary": "The Office of Refugee Resettlement (ORR), Administration for Children and Families (ACF), U.S. Department of Health and Human Services (HHS), is inviting public comments on the proposed information collection, including proposed changes. The request consists of several forms",
      "source_url": "https://www.federalregister.gov/documents/2026/11/18/2026-23460/submission-for-office-of-management-and-budget-review-monitoring-and-compliance-for-office-of",
      "high_impact": 0,
      "impact_reason": null,
      "area": "Not coded",
      "code_label": ""
    },
    {
      "item_id": "openfda_enforcement:D-0174-2027",
      "source_id": "openfda_enforcement",
      "source_name": "FDA recalls",
      "published_at": "2026-11-18T00:00:00Z",
      "title": "Lisdexamfetamine Dimesylate Capsules 40 mg, 100-count bottle, Rx Only, Manufactured by: Ohm Laboratories, New Brunswick, NJ 08901, Distributed by: Sun Pharmaceutical Industries,",
      "summary": "Failed Dissolution Specifications",
      "source_url": "https://api.fda.gov/drug/enforcement.json?search=recall_number:\"D-0174-2027\"&limit=1",
      "high_impact": 0,
      "impact_reason": null,
      "area": "Not coded",
      "code_label": "RxNorm 854830 lisdexamfetamine dimesylate. RxNorm 854838 lisdexamfetamine dimesylate. RxNorm 854834 lisdexamfetamine dimesylate"
    },
    {
      "item_id": "openfda_enforcement:D-0175-2027",
      "source_id": "openfda_enforcement",
      "source_name": "FDA recalls",
      "published_at": "2026-11-18T00:00:00Z",
      "title": "ORL Organic Oral Care Bubblegum Kids natural toothpaste, 4 oz., ORL, Manufactured in USA, ORL LAbs, LLC, Scottsdale, Arizona, USA, UPC# 850006245505",
      "summary": "Cross-contamination: The firm was notified by the FDA of sampling results which found the presence of progesterone, estradiol, or dehydroepiandrosterone (DHEA)",
      "source_url": "https://api.fda.gov/drug/enforcement.json?search=recall_number:\"D-0175-2027\"&limit=1",
      "high_impact": 0,
      "impact_reason": null,
      "area": "Not coded",
      "code_label": "RxNorm 4083 estradiol"
    },
    {
      "item_id": "openfda_enforcement:D-0176-2027",
      "source_id": "openfda_enforcement",
      "source_name": "FDA recalls",
      "published_at": "2026-11-18T00:00:00Z",
      "title": "ORL Organic Oral Care Cinnamint toothpaste, 4 oz., ORL, ORL Labs, LLC, Scottsdale, Arizona, USA UPC# 850006245512",
      "summary": "Cross-contamination: The firm was notified by the FDA of sampling results which found the presence of progesterone, estradiol, or dehydroepiandrosterone (DHEA)",
      "source_url": "https://api.fda.gov/drug/enforcement.json?search=recall_number:\"D-0176-2027\"&limit=1",
      "high_impact": 0,
      "impact_reason": null,
      "area": "Not coded",
      "code_label": "RxNorm 4083 estradiol"
    },
    {
      "item_id": "openfda_enforcement:D-0177-2027",
      "source_id": "openfda_enforcement",
      "source_name": "FDA recalls",
      "published_at": "2026-11-18T00:00:00Z",
      "title": "ORL Organic Oral Care Fresh Mint natural toothpaste, 4 oz., ORL, Manufactured in USA, ORL Labs, LLC, Scottsdale, Arizona, USA, UPC 850006245499",
      "summary": "Cross-contamination: The firm was notified by the FDA of sampling results which found the presence of progesterone, estradiol, or dehydroepiandrosterone (DHEA)",
      "source_url": "https://api.fda.gov/drug/enforcement.json?search=recall_number:\"D-0177-2027\"&limit=1",
      "high_impact": 0,
      "impact_reason": null,
      "area": "Not coded",
      "code_label": "RxNorm 4083 estradiol"
    },
    {
      "item_id": "openfda_enforcement:D-0178-2027",
      "source_id": "openfda_enforcement",
      "source_name": "FDA recalls",
      "published_at": "2026-11-18T00:00:00Z",
      "title": "ORL Organic Oral Care Bubblegum Kids Mouthwash, 16.9 oz., ORL, ORL Labs, LLC, Scottsdale, Arizona, USA, UPC# #850006245475",
      "summary": "Cross-contamination: The firm was notified by the FDA of sampling results which found the presence of progesterone, estradiol, or dehydroepiandrosterone (DHEA)",
      "source_url": "https://api.fda.gov/drug/enforcement.json?search=recall_number:\"D-0178-2027\"&limit=1",
      "high_impact": 0,
      "impact_reason": null,
      "area": "Not coded",
      "code_label": "RxNorm 4083 estradiol"
    },
    {
      "item_id": "openfda_enforcement:D-0179-2027",
      "source_id": "openfda_enforcement",
      "source_name": "FDA recalls",
      "published_at": "2026-11-18T00:00:00Z",
      "title": "Organic Oral Care Cinnamint Kids Mouthwash, 16.9 oz., ORL, ORL Labs, LLC, Scottsdale, Arizona, USA, 16.9 oz. UPC# #850006245468",
      "summary": "Cross-contamination: The firm was notified by the FDA of sampling results which found the presence of progesterone, estradiol, or dehydroepiandrosterone (DHEA)",
      "source_url": "https://api.fda.gov/drug/enforcement.json?search=recall_number:\"D-0179-2027\"&limit=1",
      "high_impact": 0,
      "impact_reason": null,
      "area": "Not coded",
      "code_label": "RxNorm 4083 estradiol"
    },
    {
      "item_id": "openfda_enforcement:D-0180-2027",
      "source_id": "openfda_enforcement",
      "source_name": "FDA recalls",
      "published_at": "2026-11-18T00:00:00Z",
      "title": "ORL Organic Oral Care Fresh mint mouthwash, 16.9 oz., ORL, Manufactured in USA, ORL Labs, LLC, Scottsdale, Arizona, USA, UPC# #850006245451",
      "summary": "Cross-contamination: The firm was notified by the FDA of sampling results which found the presence of progesterone, estradiol, or dehydroepiandrosterone (DHEA)",
      "source_url": "https://api.fda.gov/drug/enforcement.json?search=recall_number:\"D-0180-2027\"&limit=1",
      "high_impact": 0,
      "impact_reason": null,
      "area": "Not coded",
      "code_label": "RxNorm 4083 estradiol"
    },
    {
      "item_id": "openfda_enforcement:D-0189-2027",
      "source_id": "openfda_enforcement",
      "source_name": "FDA recalls",
      "published_at": "2026-11-18T00:00:00Z",
      "title": "UMARY Acido Hialuronico, also known as: \"New Hyaluronic Acid 850mg Sealed 30 Caps\", Suplemento Alimenticio, Contenido Neto: 30 capletas de 850 mg.",
      "summary": "Marketed without approved NDA/ANDA- FDA laboratory analysis found product to be tainted with undeclared ingredients: Dexamethasone, Diclofenac and Omeprazole.",
      "source_url": "https://api.fda.gov/drug/enforcement.json?search=recall_number:\"D-0189-2027\"&limit=1",
      "high_impact": 1,
      "impact_reason": "Class I recall",
      "area": "Not coded",
      "code_label": "RxNorm 3264 dexamethasone. RxNorm 7646 omeprazole"
    },
    {
      "item_id": "openfda_label:4116ccde-2e23-45f4-b12f-6337df877744",
      "source_id": "openfda_label",
      "source_name": "FDA labels",
      "published_at": "2026-11-18T00:00:00Z",
      "title": "HYZAAR (LOSARTAN POTASSIUM AND HYDROCHLOROTHIAZIDE)",
      "summary": "WARNING: FETAL TOXICITY When pregnancy is detected, discontinue HYZAAR as soon as possible. Drugs that act directly on the renin-angiotensin system can cause injury and death to the developing fetus [see Warnings and Precautions (5.1) ] . WARNING: FETAL TOXICITY See full",
      "source_url": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=4116ccde-2e23-45f4-b12f-6337df877744",
      "high_impact": 1,
      "impact_reason": "Boxed warning",
      "area": "Heart and vessels",
      "code_label": "ICD-10 I10 Essential hypertension. RxNorm 5487 hydrochlorothiazide. RxNorm 52175 losartan"
    }
  ],
  "areas": [
    {
      "area": "Heart and vessels",
      "item_count": 17
    },
    {
      "area": "Mental health",
      "item_count": 6
    },
    {
      "area": "Diabetes and metabolism",
      "item_count": 5
    },
    {
      "area": "Brain and nerves",
      "item_count": 2
    },
    {
      "area": "Bone and joint",
      "item_count": 1
    },
    {
      "area": "Cancer",
      "item_count": 1
    },
    {
      "area": "Infection",
      "item_count": 1
    },
    {
      "area": "Skin",
      "item_count": 1
    },
    {
      "area": "Not coded",
      "item_count": 228
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
      "item_count": 2
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
      "item_count": 13
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
      "item_count": 72
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
      "item_count": 15
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
      "item_count": 1
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
      "item_count": 6
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
      "item_count": 73
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
  "generated_at": "2026-11-25T21:25:10Z"
};
