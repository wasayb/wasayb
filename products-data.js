window.PRODUCT_CATALOG = [
  {
    "id": "p00",
    "slug": "agentledger",
    "name": "AgentLedger",
    "lane": "AI agent governance",
    "motif": "control",
    "fields": [
      "Registered agent",
      "Accountable owner",
      "Risk tier",
      "Allowed tool scope",
      "Approval evidence"
    ],
    "status": "Private flagship build",
    "featured": true,
    "pitch": "Local-first AI-agent change control for named owners, declared tool scope, risk-aware decisions, approval evidence, and auditability.",
    "buyer": "Engineering or security leader",
    "outcome": "Accountable agent-action control",
    "recordLabel": "agent action request",
    "sourceLabel": "agent registry, policy, or synthetic event reference",
    "resolveLabel": "record controlled outcome",
    "resolutionFields": [
      "Approval evidence"
    ],
    "stateFlow": [
      {
        "value": "open",
        "label": "Open",
        "meaning": "agent action request registered"
      },
      {
        "value": "in_review",
        "label": "In review",
        "meaning": "agent registry, policy, or synthetic event reference"
      },
      {
        "value": "resolved",
        "label": "Resolved",
        "meaning": "record controlled outcome"
      },
      {
        "value": "blocked",
        "label": "Blocked",
        "meaning": "Decision held for follow-up"
      }
    ],
    "transitions": [
      {
        "from": "open",
        "to": "in_review"
      },
      {
        "from": "in_review",
        "to": "resolved",
        "gate": "Approval evidence"
      },
      {
        "from": "open",
        "to": "blocked"
      }
    ]
  },
  {
    "id": "p01",
    "slug": "access-proof",
    "name": "AccessProof",
    "lane": "IT operations",
    "motif": "assurance",
    "fields": [
      "Access reference",
      "Review action",
      "Access owner",
      "Decision evidence"
    ],
    "status": "Private local build",
    "pitch": "Tracks access-review evidence, exceptions, approvals, and removals for growing SaaS companies.",
    "buyer": "IT or security manager",
    "outcome": "Less access-review risk",
    "recordLabel": "access-review exception",
    "sourceLabel": "access or approval fixture",
    "resolveLabel": "record access decision",
    "resolutionFields": [
      "Access reference"
    ],
    "stateFlow": [
      {
        "value": "open",
        "label": "Open",
        "meaning": "access-review exception registered"
      },
      {
        "value": "in_review",
        "label": "In review",
        "meaning": "access or approval fixture"
      },
      {
        "value": "resolved",
        "label": "Resolved",
        "meaning": "record access decision"
      },
      {
        "value": "blocked",
        "label": "Blocked",
        "meaning": "Decision held for follow-up"
      }
    ],
    "transitions": [
      {
        "from": "open",
        "to": "in_review"
      },
      {
        "from": "in_review",
        "to": "resolved",
        "gate": "Access reference"
      },
      {
        "from": "open",
        "to": "blocked"
      }
    ]
  },
  {
    "id": "p02",
    "slug": "agency-proof",
    "name": "AgencyProof",
    "lane": "Agency operations",
    "motif": "queue",
    "fields": [
      "Client stage",
      "Approval version",
      "Delivery owner",
      "Sign-off evidence"
    ],
    "status": "Private local build",
    "pitch": "Consolidates client feedback, approval versions, dependencies, and delivery sign-off for creative work.",
    "buyer": "Agency owner or delivery lead",
    "outcome": "Less rework and clearer approvals",
    "recordLabel": "client approval handoff",
    "sourceLabel": "brief, feedback, or asset fixture",
    "resolveLabel": "confirm approval",
    "resolutionFields": [
      "Client stage"
    ],
    "stateFlow": [
      {
        "value": "open",
        "label": "Open",
        "meaning": "client approval handoff registered"
      },
      {
        "value": "in_review",
        "label": "In review",
        "meaning": "brief, feedback, or asset fixture"
      },
      {
        "value": "resolved",
        "label": "Resolved",
        "meaning": "confirm approval"
      },
      {
        "value": "blocked",
        "label": "Blocked",
        "meaning": "Decision held for follow-up"
      }
    ],
    "transitions": [
      {
        "from": "open",
        "to": "in_review"
      },
      {
        "from": "in_review",
        "to": "resolved",
        "gate": "Client stage"
      },
      {
        "from": "open",
        "to": "blocked"
      }
    ]
  },
  {
    "id": "p03",
    "slug": "arresolve",
    "name": "ARResolve",
    "lane": "Finance operations",
    "motif": "ledger",
    "fields": [
      "Fictional invoice reference",
      "Dispute reason",
      "Collections owner",
      "Fictional resolution evidence"
    ],
    "status": "Private local build",
    "pitch": "Prioritizes invoice disputes and missing-payment evidence before collections follow-up.",
    "buyer": "Accounts receivable leader",
    "outcome": "Faster cash resolution",
    "recordLabel": "receivables dispute",
    "sourceLabel": "fictional invoice or payment fixture",
    "resolveLabel": "close dispute",
    "resolutionFields": [
      "Fictional invoice reference"
    ],
    "stateFlow": [
      {
        "value": "open",
        "label": "Open",
        "meaning": "receivables dispute registered"
      },
      {
        "value": "in_review",
        "label": "In review",
        "meaning": "fictional invoice or payment fixture"
      },
      {
        "value": "resolved",
        "label": "Resolved",
        "meaning": "close dispute"
      },
      {
        "value": "blocked",
        "label": "Blocked",
        "meaning": "Decision held for follow-up"
      }
    ],
    "transitions": [
      {
        "from": "open",
        "to": "in_review"
      },
      {
        "from": "in_review",
        "to": "resolved",
        "gate": "Fictional invoice reference"
      },
      {
        "from": "open",
        "to": "blocked"
      }
    ]
  },
  {
    "id": "p04",
    "slug": "audit-flow",
    "name": "AuditFlow",
    "lane": "Internal audit",
    "motif": "assurance",
    "fields": [
      "Control-test reference",
      "Remediation plan",
      "Remediation owner",
      "Closure evidence"
    ],
    "status": "Private local build",
    "pitch": "Turns control testing, evidence requests, exceptions, and remediation into an owner-visible continuous-audit workflow.",
    "buyer": "Internal audit or finance leader",
    "outcome": "Reduced audit-cycle friction",
    "recordLabel": "audit remediation",
    "sourceLabel": "control-test or evidence fixture",
    "resolveLabel": "close remediation",
    "resolutionFields": [
      "Control-test reference"
    ],
    "stateFlow": [
      {
        "value": "open",
        "label": "Open",
        "meaning": "audit remediation registered"
      },
      {
        "value": "in_review",
        "label": "In review",
        "meaning": "control-test or evidence fixture"
      },
      {
        "value": "resolved",
        "label": "Resolved",
        "meaning": "close remediation"
      },
      {
        "value": "blocked",
        "label": "Blocked",
        "meaning": "Decision held for follow-up"
      }
    ],
    "transitions": [
      {
        "from": "open",
        "to": "in_review"
      },
      {
        "from": "in_review",
        "to": "resolved",
        "gate": "Control-test reference"
      },
      {
        "from": "open",
        "to": "blocked"
      }
    ]
  },
  {
    "id": "p05",
    "slug": "auth-atlas",
    "name": "AuthAtlas",
    "lane": "Healthcare administration",
    "motif": "assurance",
    "fields": [
      "Fictional case reference",
      "Fictional payer follow-up",
      "Case owner",
      "Fictional closure evidence"
    ],
    "status": "Private local build",
    "pitch": "Organizes prior-authorization evidence, status, deadlines, and payer follow-ups for specialty practices.",
    "buyer": "Practice administrator",
    "outcome": "Less authorization friction",
    "recordLabel": "authorization evidence case",
    "sourceLabel": "fictional authorization fixture",
    "resolveLabel": "close authorization case",
    "resolutionFields": [
      "Fictional case reference"
    ],
    "stateFlow": [
      {
        "value": "open",
        "label": "Open",
        "meaning": "authorization evidence case registered"
      },
      {
        "value": "in_review",
        "label": "In review",
        "meaning": "fictional authorization fixture"
      },
      {
        "value": "resolved",
        "label": "Resolved",
        "meaning": "close authorization case"
      },
      {
        "value": "blocked",
        "label": "Blocked",
        "meaning": "Decision held for follow-up"
      }
    ],
    "transitions": [
      {
        "from": "open",
        "to": "in_review"
      },
      {
        "from": "in_review",
        "to": "resolved",
        "gate": "Fictional case reference"
      },
      {
        "from": "open",
        "to": "blocked"
      }
    ]
  },
  {
    "id": "p06",
    "slug": "bid-trace",
    "name": "BidTrace",
    "lane": "Construction operations",
    "motif": "workbench",
    "fields": [
      "Trade package",
      "Variance type",
      "Estimator owner",
      "Bid decision evidence"
    ],
    "status": "Private local build",
    "pitch": "Compares subcontractor bids against a scope checklist and highlights gaps, duplicates, and open assumptions.",
    "buyer": "Specialty contractor estimator",
    "outcome": "Reduced bid risk",
    "recordLabel": "bid-scope variance",
    "sourceLabel": "bid or scope-checklist fixture",
    "resolveLabel": "accept bid review",
    "resolutionFields": [
      "Trade package"
    ],
    "stateFlow": [
      {
        "value": "open",
        "label": "Open",
        "meaning": "bid-scope variance registered"
      },
      {
        "value": "in_review",
        "label": "In review",
        "meaning": "bid or scope-checklist fixture"
      },
      {
        "value": "resolved",
        "label": "Resolved",
        "meaning": "accept bid review"
      },
      {
        "value": "blocked",
        "label": "Blocked",
        "meaning": "Decision held for follow-up"
      }
    ],
    "transitions": [
      {
        "from": "open",
        "to": "in_review"
      },
      {
        "from": "in_review",
        "to": "resolved",
        "gate": "Trade package"
      },
      {
        "from": "open",
        "to": "blocked"
      }
    ]
  },
  {
    "id": "p07",
    "slug": "brief-bridge",
    "name": "BriefBridge",
    "lane": "Agency operations",
    "motif": "queue",
    "fields": [
      "Brief objective",
      "Asset readiness",
      "Account owner",
      "Approval evidence"
    ],
    "status": "Private local build",
    "pitch": "Turns client calls, loose briefs, assets, and feedback into an approval-ready creative delivery brief.",
    "buyer": "Agency account director",
    "outcome": "Fewer ambiguous creative handoffs",
    "recordLabel": "creative delivery brief",
    "sourceLabel": "call, asset, or feedback fixture",
    "resolveLabel": "approve brief",
    "resolutionFields": [
      "Brief objective"
    ],
    "stateFlow": [
      {
        "value": "open",
        "label": "Open",
        "meaning": "creative delivery brief registered"
      },
      {
        "value": "in_review",
        "label": "In review",
        "meaning": "call, asset, or feedback fixture"
      },
      {
        "value": "resolved",
        "label": "Resolved",
        "meaning": "approve brief"
      },
      {
        "value": "blocked",
        "label": "Blocked",
        "meaning": "Decision held for follow-up"
      }
    ],
    "transitions": [
      {
        "from": "open",
        "to": "in_review"
      },
      {
        "from": "in_review",
        "to": "resolved",
        "gate": "Brief objective"
      },
      {
        "from": "open",
        "to": "blocked"
      }
    ]
  },
  {
    "id": "p08",
    "slug": "care-roster",
    "name": "CareRoster",
    "lane": "Healthcare staffing",
    "motif": "queue",
    "fields": [
      "Fictional roster reference",
      "Credential state",
      "Staffing owner",
      "Fictional resolution evidence"
    ],
    "status": "Private local build",
    "pitch": "Reconciles credential, schedule, documentation, and exception state for small care providers.",
    "buyer": "Healthcare staffing operator",
    "outcome": "Lower staffing compliance risk",
    "recordLabel": "fictional staffing exception",
    "sourceLabel": "fictional credential or schedule fixture",
    "resolveLabel": "close staffing exception",
    "resolutionFields": [
      "Fictional roster reference"
    ],
    "stateFlow": [
      {
        "value": "open",
        "label": "Open",
        "meaning": "fictional staffing exception registered"
      },
      {
        "value": "in_review",
        "label": "In review",
        "meaning": "fictional credential or schedule fixture"
      },
      {
        "value": "resolved",
        "label": "Resolved",
        "meaning": "close staffing exception"
      },
      {
        "value": "blocked",
        "label": "Blocked",
        "meaning": "Decision held for follow-up"
      }
    ],
    "transitions": [
      {
        "from": "open",
        "to": "in_review"
      },
      {
        "from": "in_review",
        "to": "resolved",
        "gate": "Fictional roster reference"
      },
      {
        "from": "open",
        "to": "blocked"
      }
    ]
  },
  {
    "id": "p09",
    "slug": "catalog-fix",
    "name": "CatalogFix",
    "lane": "E-commerce operations",
    "motif": "field",
    "fields": [
      "Catalog reference",
      "Rule check",
      "Catalog owner",
      "Publish evidence"
    ],
    "status": "Private local build",
    "pitch": "Validates product catalog changes across suppliers, marketplace feeds, and storefront rules before publication.",
    "buyer": "E-commerce operations manager",
    "outcome": "Fewer listing and fulfillment errors",
    "recordLabel": "catalog-change review",
    "sourceLabel": "supplier, listing, or feed fixture",
    "resolveLabel": "approve catalog change",
    "resolutionFields": [
      "Catalog reference"
    ],
    "stateFlow": [
      {
        "value": "open",
        "label": "Open",
        "meaning": "catalog-change review registered"
      },
      {
        "value": "in_review",
        "label": "In review",
        "meaning": "supplier, listing, or feed fixture"
      },
      {
        "value": "resolved",
        "label": "Resolved",
        "meaning": "approve catalog change"
      },
      {
        "value": "blocked",
        "label": "Blocked",
        "meaning": "Decision held for follow-up"
      }
    ],
    "transitions": [
      {
        "from": "open",
        "to": "in_review"
      },
      {
        "from": "in_review",
        "to": "resolved",
        "gate": "Catalog reference"
      },
      {
        "from": "open",
        "to": "blocked"
      }
    ]
  },
  {
    "id": "p10",
    "slug": "change-order-link",
    "name": "ChangeOrderLink",
    "lane": "Construction operations",
    "motif": "assurance",
    "fields": [
      "Project change reference",
      "Cost consequence",
      "Project owner",
      "Approval evidence"
    ],
    "status": "Private local build",
    "pitch": "Links field changes, photos, approvals, and cost consequences into an auditable change-order workflow.",
    "buyer": "Project manager at a subcontractor",
    "outcome": "Faster approved change orders",
    "recordLabel": "change-order record",
    "sourceLabel": "field-change or photo fixture",
    "resolveLabel": "approve change order",
    "resolutionFields": [
      "Project change reference"
    ],
    "stateFlow": [
      {
        "value": "open",
        "label": "Open",
        "meaning": "change-order record registered"
      },
      {
        "value": "in_review",
        "label": "In review",
        "meaning": "field-change or photo fixture"
      },
      {
        "value": "resolved",
        "label": "Resolved",
        "meaning": "approve change order"
      },
      {
        "value": "blocked",
        "label": "Blocked",
        "meaning": "Decision held for follow-up"
      }
    ],
    "transitions": [
      {
        "from": "open",
        "to": "in_review"
      },
      {
        "from": "in_review",
        "to": "resolved",
        "gate": "Project change reference"
      },
      {
        "from": "open",
        "to": "blocked"
      }
    ]
  },
  {
    "id": "p11",
    "slug": "change-proof",
    "name": "ChangeProof",
    "lane": "Developer governance",
    "motif": "assurance",
    "fields": [
      "Change reference",
      "Evidence bundle",
      "Review owner",
      "Approval reference"
    ],
    "status": "Private local build",
    "pitch": "Creates a reviewable impact record for AI-assisted pull requests, linking claims to tests, tickets, and approvals.",
    "buyer": "Engineering leader",
    "outcome": "Safer AI-assisted delivery",
    "recordLabel": "implementation brief",
    "sourceLabel": "ticket, document, or decision fixture",
    "resolveLabel": "approve brief",
    "resolutionFields": [
      "Change reference"
    ],
    "stateFlow": [
      {
        "value": "open",
        "label": "Open",
        "meaning": "implementation brief registered"
      },
      {
        "value": "in_review",
        "label": "In review",
        "meaning": "ticket, document, or decision fixture"
      },
      {
        "value": "resolved",
        "label": "Resolved",
        "meaning": "approve brief"
      },
      {
        "value": "blocked",
        "label": "Blocked",
        "meaning": "Decision held for follow-up"
      }
    ],
    "transitions": [
      {
        "from": "open",
        "to": "in_review"
      },
      {
        "from": "in_review",
        "to": "resolved",
        "gate": "Change reference"
      },
      {
        "from": "open",
        "to": "blocked"
      }
    ]
  },
  {
    "id": "p12",
    "slug": "claim-check",
    "name": "ClaimCheck",
    "lane": "Healthcare administration",
    "motif": "assurance",
    "fields": [
      "Fictional claim reference",
      "Completeness issue",
      "Review owner",
      "Fictional resolution evidence"
    ],
    "status": "Private local build",
    "pitch": "Flags claim-submission completeness issues before staff submit repetitive payer workflows.",
    "buyer": "Revenue-cycle manager",
    "outcome": "Fewer preventable claim delays",
    "recordLabel": "claim-completeness review",
    "sourceLabel": "fictional claim fixture",
    "resolveLabel": "close claim review",
    "resolutionFields": [
      "Fictional claim reference"
    ],
    "stateFlow": [
      {
        "value": "open",
        "label": "Open",
        "meaning": "claim-completeness review registered"
      },
      {
        "value": "in_review",
        "label": "In review",
        "meaning": "fictional claim fixture"
      },
      {
        "value": "resolved",
        "label": "Resolved",
        "meaning": "close claim review"
      },
      {
        "value": "blocked",
        "label": "Blocked",
        "meaning": "Decision held for follow-up"
      }
    ],
    "transitions": [
      {
        "from": "open",
        "to": "in_review"
      },
      {
        "from": "in_review",
        "to": "resolved",
        "gate": "Fictional claim reference"
      },
      {
        "from": "open",
        "to": "blocked"
      }
    ]
  },
  {
    "id": "p13",
    "slug": "client-ops",
    "name": "ClientOps",
    "lane": "Professional services",
    "motif": "queue",
    "fields": [
      "Engagement reference",
      "Request state",
      "Delivery owner",
      "Activation evidence"
    ],
    "status": "Private local build",
    "pitch": "Combines client onboarding, document requests, approvals, and delivery status for small service teams.",
    "buyer": "Professional-services owner",
    "outcome": "Faster client activation",
    "recordLabel": "client-activation record",
    "sourceLabel": "onboarding or document fixture",
    "resolveLabel": "confirm activation",
    "resolutionFields": [
      "Engagement reference"
    ],
    "stateFlow": [
      {
        "value": "open",
        "label": "Open",
        "meaning": "client-activation record registered"
      },
      {
        "value": "in_review",
        "label": "In review",
        "meaning": "onboarding or document fixture"
      },
      {
        "value": "resolved",
        "label": "Resolved",
        "meaning": "confirm activation"
      },
      {
        "value": "blocked",
        "label": "Blocked",
        "meaning": "Decision held for follow-up"
      }
    ],
    "transitions": [
      {
        "from": "open",
        "to": "in_review"
      },
      {
        "from": "in_review",
        "to": "resolved",
        "gate": "Engagement reference"
      },
      {
        "from": "open",
        "to": "blocked"
      }
    ]
  },
  {
    "id": "p14",
    "slug": "close-narrative",
    "name": "CloseNarrative",
    "lane": "Finance operations",
    "motif": "ledger",
    "fields": [
      "Fictional close period",
      "Variance theme",
      "Narrative owner",
      "Fictional review evidence"
    ],
    "status": "Private local build",
    "pitch": "Produces a reviewed monthly-close narrative from reconciliations, variances, and owner commentary.",
    "buyer": "Controller",
    "outcome": "Clearer management reporting",
    "recordLabel": "fictional close narrative",
    "sourceLabel": "fictional reconciliation or variance fixture",
    "resolveLabel": "approve narrative",
    "resolutionFields": [
      "Fictional close period"
    ],
    "stateFlow": [
      {
        "value": "open",
        "label": "Open",
        "meaning": "fictional close narrative registered"
      },
      {
        "value": "in_review",
        "label": "In review",
        "meaning": "fictional reconciliation or variance fixture"
      },
      {
        "value": "resolved",
        "label": "Resolved",
        "meaning": "approve narrative"
      },
      {
        "value": "blocked",
        "label": "Blocked",
        "meaning": "Decision held for follow-up"
      }
    ],
    "transitions": [
      {
        "from": "open",
        "to": "in_review"
      },
      {
        "from": "in_review",
        "to": "resolved",
        "gate": "Fictional close period"
      },
      {
        "from": "open",
        "to": "blocked"
      }
    ]
  },
  {
    "id": "p15",
    "slug": "contract-signal",
    "name": "ContractSignal",
    "lane": "Procurement operations",
    "motif": "assurance",
    "fields": [
      "Contract reference",
      "Obligation type",
      "Commercial owner",
      "Action evidence"
    ],
    "status": "Private local build",
    "pitch": "Highlights renewal, obligation, notice, and owner actions hidden in vendor contracts and procurement records.",
    "buyer": "Procurement leader",
    "outcome": "Fewer missed contract actions",
    "recordLabel": "contract action",
    "sourceLabel": "contract or notice fixture",
    "resolveLabel": "confirm contract action",
    "resolutionFields": [
      "Contract reference"
    ],
    "stateFlow": [
      {
        "value": "open",
        "label": "Open",
        "meaning": "contract action registered"
      },
      {
        "value": "in_review",
        "label": "In review",
        "meaning": "contract or notice fixture"
      },
      {
        "value": "resolved",
        "label": "Resolved",
        "meaning": "confirm contract action"
      },
      {
        "value": "blocked",
        "label": "Blocked",
        "meaning": "Decision held for follow-up"
      }
    ],
    "transitions": [
      {
        "from": "open",
        "to": "in_review"
      },
      {
        "from": "in_review",
        "to": "resolved",
        "gate": "Contract reference"
      },
      {
        "from": "open",
        "to": "blocked"
      }
    ]
  },
  {
    "id": "p16",
    "slug": "contract-watch",
    "name": "ContractWatch",
    "lane": "Developer operations",
    "motif": "assurance",
    "fields": [
      "Contract surface",
      "Consumer impact",
      "Migration owner",
      "Migration evidence"
    ],
    "status": "Private local build",
    "pitch": "Detects API-contract changes and turns them into accountable migration checklists for dependent teams.",
    "buyer": "Platform engineering lead",
    "outcome": "Fewer broken integrations",
    "recordLabel": "contract migration record",
    "sourceLabel": "API contract or consumer fixture",
    "resolveLabel": "confirm migration",
    "resolutionFields": [
      "Contract surface"
    ],
    "stateFlow": [
      {
        "value": "open",
        "label": "Open",
        "meaning": "contract migration record registered"
      },
      {
        "value": "in_review",
        "label": "In review",
        "meaning": "API contract or consumer fixture"
      },
      {
        "value": "resolved",
        "label": "Resolved",
        "meaning": "confirm migration"
      },
      {
        "value": "blocked",
        "label": "Blocked",
        "meaning": "Decision held for follow-up"
      }
    ],
    "transitions": [
      {
        "from": "open",
        "to": "in_review"
      },
      {
        "from": "in_review",
        "to": "resolved",
        "gate": "Contract surface"
      },
      {
        "from": "open",
        "to": "blocked"
      }
    ]
  },
  {
    "id": "p17",
    "slug": "data-dock",
    "name": "DataDock",
    "lane": "Data operations",
    "motif": "evidence",
    "fields": [
      "Import run",
      "Exception type",
      "Remediation owner",
      "Resolution evidence"
    ],
    "status": "Private local build",
    "pitch": "Validates recurring spreadsheet and API imports, routes exceptions to owners, and preserves remediation history.",
    "buyer": "Operations or data lead",
    "outcome": "Fewer downstream data errors",
    "recordLabel": "implementation brief",
    "sourceLabel": "ticket, document, or decision fixture",
    "resolveLabel": "approve brief",
    "resolutionFields": [
      "Import run"
    ],
    "stateFlow": [
      {
        "value": "open",
        "label": "Open",
        "meaning": "implementation brief registered"
      },
      {
        "value": "in_review",
        "label": "In review",
        "meaning": "ticket, document, or decision fixture"
      },
      {
        "value": "resolved",
        "label": "Resolved",
        "meaning": "approve brief"
      },
      {
        "value": "blocked",
        "label": "Blocked",
        "meaning": "Decision held for follow-up"
      }
    ],
    "transitions": [
      {
        "from": "open",
        "to": "in_review"
      },
      {
        "from": "in_review",
        "to": "resolved",
        "gate": "Import run"
      },
      {
        "from": "open",
        "to": "blocked"
      }
    ]
  },
  {
    "id": "p18",
    "slug": "document-delta",
    "name": "DocumentDelta",
    "lane": "Document operations",
    "motif": "evidence",
    "fields": [
      "Document reference",
      "Delta summary",
      "Review owner",
      "Review evidence"
    ],
    "status": "Private local build",
    "pitch": "Detects meaningful version changes in operational documents and assigns review tasks with source diffs.",
    "buyer": "Operations or compliance lead",
    "outcome": "Fewer missed document changes",
    "recordLabel": "document-change review",
    "sourceLabel": "version or source-document fixture",
    "resolveLabel": "confirm review",
    "resolutionFields": [
      "Document reference"
    ],
    "stateFlow": [
      {
        "value": "open",
        "label": "Open",
        "meaning": "document-change review registered"
      },
      {
        "value": "in_review",
        "label": "In review",
        "meaning": "version or source-document fixture"
      },
      {
        "value": "resolved",
        "label": "Resolved",
        "meaning": "confirm review"
      },
      {
        "value": "blocked",
        "label": "Blocked",
        "meaning": "Decision held for follow-up"
      }
    ],
    "transitions": [
      {
        "from": "open",
        "to": "in_review"
      },
      {
        "from": "in_review",
        "to": "resolved",
        "gate": "Document reference"
      },
      {
        "from": "open",
        "to": "blocked"
      }
    ]
  },
  {
    "id": "p19",
    "slug": "evidence-os",
    "name": "EvidenceOS",
    "lane": "Compliance operations",
    "motif": "assurance",
    "fields": [
      "Control reference",
      "Evidence period",
      "Evidence owner",
      "Acceptance evidence"
    ],
    "status": "Private local build",
    "pitch": "Collects recurring compliance evidence from systems and owners into review-ready audit packets.",
    "buyer": "Security or compliance lead",
    "outcome": "Less audit-preparation overhead",
    "recordLabel": "audit evidence packet",
    "sourceLabel": "control, system, or owner fixture",
    "resolveLabel": "accept evidence",
    "resolutionFields": [
      "Control reference"
    ],
    "stateFlow": [
      {
        "value": "open",
        "label": "Open",
        "meaning": "audit evidence packet registered"
      },
      {
        "value": "in_review",
        "label": "In review",
        "meaning": "control, system, or owner fixture"
      },
      {
        "value": "resolved",
        "label": "Resolved",
        "meaning": "accept evidence"
      },
      {
        "value": "blocked",
        "label": "Blocked",
        "meaning": "Decision held for follow-up"
      }
    ],
    "transitions": [
      {
        "from": "open",
        "to": "in_review"
      },
      {
        "from": "in_review",
        "to": "resolved",
        "gate": "Control reference"
      },
      {
        "from": "open",
        "to": "blocked"
      }
    ]
  },
  {
    "id": "p20",
    "slug": "facilities-loop",
    "name": "FacilitiesLoop",
    "lane": "Facilities operations",
    "motif": "field",
    "fields": [
      "Site reference",
      "Inspection state",
      "Facilities owner",
      "Completion evidence"
    ],
    "status": "Private local build",
    "pitch": "Coordinates recurring inspections, work orders, vendor proof, and owner approvals across distributed sites.",
    "buyer": "Facilities operations manager",
    "outcome": "More predictable maintenance",
    "recordLabel": "facility maintenance loop",
    "sourceLabel": "inspection or work-order fixture",
    "resolveLabel": "confirm maintenance outcome",
    "resolutionFields": [
      "Site reference"
    ],
    "stateFlow": [
      {
        "value": "open",
        "label": "Open",
        "meaning": "facility maintenance loop registered"
      },
      {
        "value": "in_review",
        "label": "In review",
        "meaning": "inspection or work-order fixture"
      },
      {
        "value": "resolved",
        "label": "Resolved",
        "meaning": "confirm maintenance outcome"
      },
      {
        "value": "blocked",
        "label": "Blocked",
        "meaning": "Decision held for follow-up"
      }
    ],
    "transitions": [
      {
        "from": "open",
        "to": "in_review"
      },
      {
        "from": "in_review",
        "to": "resolved",
        "gate": "Site reference"
      },
      {
        "from": "open",
        "to": "blocked"
      }
    ]
  },
  {
    "id": "p21",
    "slug": "field-invoice",
    "name": "FieldInvoice",
    "lane": "Field-service operations",
    "motif": "ledger",
    "fields": [
      "Work reference",
      "Materials state",
      "Invoice owner",
      "Approval evidence"
    ],
    "status": "Private local build",
    "pitch": "Reconciles completed work, photos, materials, customer approval, and invoice readiness for service contractors.",
    "buyer": "Field-service owner",
    "outcome": "Faster invoiceable closeout",
    "recordLabel": "invoiceable closeout",
    "sourceLabel": "work, photo, or approval fixture",
    "resolveLabel": "confirm invoice readiness",
    "resolutionFields": [
      "Work reference"
    ],
    "stateFlow": [
      {
        "value": "open",
        "label": "Open",
        "meaning": "invoiceable closeout registered"
      },
      {
        "value": "in_review",
        "label": "In review",
        "meaning": "work, photo, or approval fixture"
      },
      {
        "value": "resolved",
        "label": "Resolved",
        "meaning": "confirm invoice readiness"
      },
      {
        "value": "blocked",
        "label": "Blocked",
        "meaning": "Decision held for follow-up"
      }
    ],
    "transitions": [
      {
        "from": "open",
        "to": "in_review"
      },
      {
        "from": "in_review",
        "to": "resolved",
        "gate": "Work reference"
      },
      {
        "from": "open",
        "to": "blocked"
      }
    ]
  },
  {
    "id": "p22",
    "slug": "grant-track",
    "name": "GrantTrack",
    "lane": "Nonprofit operations",
    "motif": "evidence",
    "fields": [
      "Grant reference",
      "Obligation type",
      "Program owner",
      "Completion evidence"
    ],
    "status": "Private local build",
    "pitch": "Tracks grant evidence, reporting obligations, restricted-fund actions, and renewal deadlines.",
    "buyer": "Nonprofit operations director",
    "outcome": "Fewer missed reporting obligations",
    "recordLabel": "grant obligation",
    "sourceLabel": "grant or reporting fixture",
    "resolveLabel": "close obligation",
    "resolutionFields": [
      "Grant reference"
    ],
    "stateFlow": [
      {
        "value": "open",
        "label": "Open",
        "meaning": "grant obligation registered"
      },
      {
        "value": "in_review",
        "label": "In review",
        "meaning": "grant or reporting fixture"
      },
      {
        "value": "resolved",
        "label": "Resolved",
        "meaning": "close obligation"
      },
      {
        "value": "blocked",
        "label": "Blocked",
        "meaning": "Decision held for follow-up"
      }
    ],
    "transitions": [
      {
        "from": "open",
        "to": "in_review"
      },
      {
        "from": "in_review",
        "to": "resolved",
        "gate": "Grant reference"
      },
      {
        "from": "open",
        "to": "blocked"
      }
    ]
  },
  {
    "id": "p23",
    "slug": "handoff-os",
    "name": "HandoffOS",
    "lane": "Revenue operations",
    "motif": "queue",
    "fields": [
      "Promise reference",
      "Scope risk",
      "Handoff owner",
      "Acceptance evidence"
    ],
    "status": "Private local build",
    "pitch": "Produces an accountable sales-to-customer-success handoff with promise, scope, risk, and source evidence.",
    "buyer": "Revenue operations leader",
    "outcome": "Fewer post-sale surprises",
    "recordLabel": "sales-to-success handoff",
    "sourceLabel": "sales promise or scope fixture",
    "resolveLabel": "accept handoff",
    "resolutionFields": [
      "Promise reference"
    ],
    "stateFlow": [
      {
        "value": "open",
        "label": "Open",
        "meaning": "sales-to-success handoff registered"
      },
      {
        "value": "in_review",
        "label": "In review",
        "meaning": "sales promise or scope fixture"
      },
      {
        "value": "resolved",
        "label": "Resolved",
        "meaning": "accept handoff"
      },
      {
        "value": "blocked",
        "label": "Blocked",
        "meaning": "Decision held for follow-up"
      }
    ],
    "transitions": [
      {
        "from": "open",
        "to": "in_review"
      },
      {
        "from": "in_review",
        "to": "resolved",
        "gate": "Promise reference"
      },
      {
        "from": "open",
        "to": "blocked"
      }
    ]
  },
  {
    "id": "p24",
    "slug": "hiring-evidence",
    "name": "HiringEvidence",
    "lane": "Recruiting operations",
    "motif": "assurance",
    "fields": [
      "Fictional candidate reference",
      "Calibration state",
      "Hiring owner",
      "Fictional decision evidence"
    ],
    "status": "Private local build",
    "pitch": "Turns structured interviews into calibrated evidence packs while preserving human hiring decisions.",
    "buyer": "Head of talent",
    "outcome": "Better interview consistency",
    "recordLabel": "fictional interview evidence pack",
    "sourceLabel": "fictional interview fixture",
    "resolveLabel": "record hiring decision",
    "resolutionFields": [
      "Fictional candidate reference"
    ],
    "stateFlow": [
      {
        "value": "open",
        "label": "Open",
        "meaning": "fictional interview evidence pack registered"
      },
      {
        "value": "in_review",
        "label": "In review",
        "meaning": "fictional interview fixture"
      },
      {
        "value": "resolved",
        "label": "Resolved",
        "meaning": "record hiring decision"
      },
      {
        "value": "blocked",
        "label": "Blocked",
        "meaning": "Decision held for follow-up"
      }
    ],
    "transitions": [
      {
        "from": "open",
        "to": "in_review"
      },
      {
        "from": "in_review",
        "to": "resolved",
        "gate": "Fictional candidate reference"
      },
      {
        "from": "open",
        "to": "blocked"
      }
    ]
  },
  {
    "id": "p25",
    "slug": "incident-brief",
    "name": "IncidentBrief",
    "lane": "Developer operations",
    "motif": "queue",
    "fields": [
      "Incident window",
      "Impact statement",
      "Incident owner",
      "Learning evidence"
    ],
    "status": "Private local build",
    "pitch": "Builds a source-linked incident brief from alerts, deploys, changes, and owner notes for review before a postmortem.",
    "buyer": "SRE or engineering manager",
    "outcome": "Faster, more consistent incident learning",
    "recordLabel": "incident learning brief",
    "sourceLabel": "alert, deploy, or owner-note fixture",
    "resolveLabel": "close learning item",
    "resolutionFields": [
      "Incident window"
    ],
    "stateFlow": [
      {
        "value": "open",
        "label": "Open",
        "meaning": "incident learning brief registered"
      },
      {
        "value": "in_review",
        "label": "In review",
        "meaning": "alert, deploy, or owner-note fixture"
      },
      {
        "value": "resolved",
        "label": "Resolved",
        "meaning": "close learning item"
      },
      {
        "value": "blocked",
        "label": "Blocked",
        "meaning": "Decision held for follow-up"
      }
    ],
    "transitions": [
      {
        "from": "open",
        "to": "in_review"
      },
      {
        "from": "in_review",
        "to": "resolved",
        "gate": "Incident window"
      },
      {
        "from": "open",
        "to": "blocked"
      }
    ]
  },
  {
    "id": "p26",
    "slug": "intake-desk",
    "name": "IntakeDesk",
    "lane": "Legal operations",
    "motif": "queue",
    "fields": [
      "Fictional matter reference",
      "Conflict-check state",
      "Intake owner",
      "Next-step evidence"
    ],
    "status": "Private local build",
    "pitch": "Turns unstructured client intake into conflict-check, document-request, and next-step workflows for small firms.",
    "buyer": "Managing partner",
    "outcome": "Faster qualified intake",
    "recordLabel": "intake workflow",
    "sourceLabel": "fictional matter-intake fixture",
    "resolveLabel": "close intake step",
    "resolutionFields": [
      "Fictional matter reference"
    ],
    "stateFlow": [
      {
        "value": "open",
        "label": "Open",
        "meaning": "intake workflow registered"
      },
      {
        "value": "in_review",
        "label": "In review",
        "meaning": "fictional matter-intake fixture"
      },
      {
        "value": "resolved",
        "label": "Resolved",
        "meaning": "close intake step"
      },
      {
        "value": "blocked",
        "label": "Blocked",
        "meaning": "Decision held for follow-up"
      }
    ],
    "transitions": [
      {
        "from": "open",
        "to": "in_review"
      },
      {
        "from": "in_review",
        "to": "resolved",
        "gate": "Fictional matter reference"
      },
      {
        "from": "open",
        "to": "blocked"
      }
    ]
  },
  {
    "id": "p27",
    "slug": "invoice-guard",
    "name": "InvoiceGuard",
    "lane": "Finance operations",
    "motif": "ledger",
    "fields": [
      "Fictional invoice reference",
      "Exception rule",
      "AP owner",
      "Fictional approval evidence"
    ],
    "status": "Private local build",
    "pitch": "Reviews invoice exceptions against purchase orders, receiving evidence, and approval rules before payment.",
    "buyer": "Accounts payable manager",
    "outcome": "Fewer payment exceptions",
    "recordLabel": "fictional invoice exception",
    "sourceLabel": "fictional PO or receiving fixture",
    "resolveLabel": "close invoice review",
    "resolutionFields": [
      "Fictional invoice reference"
    ],
    "stateFlow": [
      {
        "value": "open",
        "label": "Open",
        "meaning": "fictional invoice exception registered"
      },
      {
        "value": "in_review",
        "label": "In review",
        "meaning": "fictional PO or receiving fixture"
      },
      {
        "value": "resolved",
        "label": "Resolved",
        "meaning": "close invoice review"
      },
      {
        "value": "blocked",
        "label": "Blocked",
        "meaning": "Decision held for follow-up"
      }
    ],
    "transitions": [
      {
        "from": "open",
        "to": "in_review"
      },
      {
        "from": "in_review",
        "to": "resolved",
        "gate": "Fictional invoice reference"
      },
      {
        "from": "open",
        "to": "blocked"
      }
    ]
  },
  {
    "id": "p28",
    "slug": "knowledge-expiry",
    "name": "KnowledgeExpiry",
    "lane": "Knowledge operations",
    "motif": "evidence",
    "fields": [
      "Knowledge reference",
      "Staleness signal",
      "Content owner",
      "Freshness evidence"
    ],
    "status": "Private local build",
    "pitch": "Finds stale operational knowledge, assigns owners, and tracks evidence before AI systems reuse it.",
    "buyer": "Operations or knowledge leader",
    "outcome": "More reliable internal answers",
    "recordLabel": "knowledge-freshness review",
    "sourceLabel": "knowledge-base or source fixture",
    "resolveLabel": "confirm freshness",
    "resolutionFields": [
      "Knowledge reference"
    ],
    "stateFlow": [
      {
        "value": "open",
        "label": "Open",
        "meaning": "knowledge-freshness review registered"
      },
      {
        "value": "in_review",
        "label": "In review",
        "meaning": "knowledge-base or source fixture"
      },
      {
        "value": "resolved",
        "label": "Resolved",
        "meaning": "confirm freshness"
      },
      {
        "value": "blocked",
        "label": "Blocked",
        "meaning": "Decision held for follow-up"
      }
    ],
    "transitions": [
      {
        "from": "open",
        "to": "in_review"
      },
      {
        "from": "in_review",
        "to": "resolved",
        "gate": "Knowledge reference"
      },
      {
        "from": "open",
        "to": "blocked"
      }
    ]
  },
  {
    "id": "p29",
    "slug": "lab-chain",
    "name": "LabChain",
    "lane": "Laboratory operations",
    "motif": "evidence",
    "fields": [
      "Fictional sample reference",
      "Custody gap",
      "Laboratory owner",
      "Fictional corrective evidence"
    ],
    "status": "Private local build",
    "pitch": "Tracks sample exceptions, chain-of-custody gaps, and corrective actions for small testing labs.",
    "buyer": "Laboratory operations lead",
    "outcome": "Fewer sample-resolution delays",
    "recordLabel": "fictional sample exception",
    "sourceLabel": "fictional sample or custody fixture",
    "resolveLabel": "close sample exception",
    "resolutionFields": [
      "Fictional sample reference"
    ],
    "stateFlow": [
      {
        "value": "open",
        "label": "Open",
        "meaning": "fictional sample exception registered"
      },
      {
        "value": "in_review",
        "label": "In review",
        "meaning": "fictional sample or custody fixture"
      },
      {
        "value": "resolved",
        "label": "Resolved",
        "meaning": "close sample exception"
      },
      {
        "value": "blocked",
        "label": "Blocked",
        "meaning": "Decision held for follow-up"
      }
    ],
    "transitions": [
      {
        "from": "open",
        "to": "in_review"
      },
      {
        "from": "in_review",
        "to": "resolved",
        "gate": "Fictional sample reference"
      },
      {
        "from": "open",
        "to": "blocked"
      }
    ]
  },
  {
    "id": "p30",
    "slug": "lease-fix",
    "name": "LeaseFix",
    "lane": "Property operations",
    "motif": "ledger",
    "fields": [
      "Property reference",
      "Work-order state",
      "Vendor owner",
      "Closeout evidence"
    ],
    "status": "Private local build",
    "pitch": "Converts tenant maintenance requests into verified vendor work orders with approval and closeout evidence.",
    "buyer": "Property management operator",
    "outcome": "Faster maintenance closure",
    "recordLabel": "maintenance closeout",
    "sourceLabel": "tenant request or vendor fixture",
    "resolveLabel": "verify closeout",
    "resolutionFields": [
      "Property reference"
    ],
    "stateFlow": [
      {
        "value": "open",
        "label": "Open",
        "meaning": "maintenance closeout registered"
      },
      {
        "value": "in_review",
        "label": "In review",
        "meaning": "tenant request or vendor fixture"
      },
      {
        "value": "resolved",
        "label": "Resolved",
        "meaning": "verify closeout"
      },
      {
        "value": "blocked",
        "label": "Blocked",
        "meaning": "Decision held for follow-up"
      }
    ],
    "transitions": [
      {
        "from": "open",
        "to": "in_review"
      },
      {
        "from": "in_review",
        "to": "resolved",
        "gate": "Property reference"
      },
      {
        "from": "open",
        "to": "blocked"
      }
    ]
  },
  {
    "id": "p31",
    "slug": "matter-close",
    "name": "MatterClose",
    "lane": "Legal operations",
    "motif": "ledger",
    "fields": [
      "Fictional matter reference",
      "Retention state",
      "Closeout owner",
      "Fictional confirmation evidence"
    ],
    "status": "Private local build",
    "pitch": "Coordinates matter closeout, document retention, outstanding tasks, and client confirmation for boutique firms.",
    "buyer": "Legal operations manager",
    "outcome": "Lower closeout risk",
    "recordLabel": "matter-closeout record",
    "sourceLabel": "fictional matter fixture",
    "resolveLabel": "confirm closeout",
    "resolutionFields": [
      "Fictional matter reference"
    ],
    "stateFlow": [
      {
        "value": "open",
        "label": "Open",
        "meaning": "matter-closeout record registered"
      },
      {
        "value": "in_review",
        "label": "In review",
        "meaning": "fictional matter fixture"
      },
      {
        "value": "resolved",
        "label": "Resolved",
        "meaning": "confirm closeout"
      },
      {
        "value": "blocked",
        "label": "Blocked",
        "meaning": "Decision held for follow-up"
      }
    ],
    "transitions": [
      {
        "from": "open",
        "to": "in_review"
      },
      {
        "from": "in_review",
        "to": "resolved",
        "gate": "Fictional matter reference"
      },
      {
        "from": "open",
        "to": "blocked"
      }
    ]
  },
  {
    "id": "p32",
    "slug": "offer-loop",
    "name": "OfferLoop",
    "lane": "Recruiting operations",
    "motif": "ledger",
    "fields": [
      "Fictional candidate reference",
      "Approval gate",
      "Talent owner",
      "Fictional offer evidence"
    ],
    "status": "Private local build",
    "pitch": "Coordinates interview evidence, approval gates, offer details, and candidate-status updates without hidden handoffs.",
    "buyer": "Talent operations lead",
    "outcome": "Faster, consistent offer execution",
    "recordLabel": "fictional offer workflow",
    "sourceLabel": "fictional interview or offer fixture",
    "resolveLabel": "confirm offer step",
    "resolutionFields": [
      "Fictional candidate reference"
    ],
    "stateFlow": [
      {
        "value": "open",
        "label": "Open",
        "meaning": "fictional offer workflow registered"
      },
      {
        "value": "in_review",
        "label": "In review",
        "meaning": "fictional interview or offer fixture"
      },
      {
        "value": "resolved",
        "label": "Resolved",
        "meaning": "confirm offer step"
      },
      {
        "value": "blocked",
        "label": "Blocked",
        "meaning": "Decision held for follow-up"
      }
    ],
    "transitions": [
      {
        "from": "open",
        "to": "in_review"
      },
      {
        "from": "in_review",
        "to": "resolved",
        "gate": "Fictional candidate reference"
      },
      {
        "from": "open",
        "to": "blocked"
      }
    ]
  },
  {
    "id": "p33",
    "slug": "permit-relay",
    "name": "PermitRelay",
    "lane": "Field operations",
    "motif": "assurance",
    "fields": [
      "Permit reference",
      "Inspection milestone",
      "Responsibility owner",
      "Closeout evidence"
    ],
    "status": "Private local build",
    "pitch": "Tracks permit document completeness, inspection milestones, and responsibility across small commercial projects.",
    "buyer": "Construction operations manager",
    "outcome": "Fewer permit-driven delays",
    "recordLabel": "permit-readiness item",
    "sourceLabel": "permit or inspection fixture",
    "resolveLabel": "close permit item",
    "resolutionFields": [
      "Permit reference"
    ],
    "stateFlow": [
      {
        "value": "open",
        "label": "Open",
        "meaning": "permit-readiness item registered"
      },
      {
        "value": "in_review",
        "label": "In review",
        "meaning": "permit or inspection fixture"
      },
      {
        "value": "resolved",
        "label": "Resolved",
        "meaning": "close permit item"
      },
      {
        "value": "blocked",
        "label": "Blocked",
        "meaning": "Decision held for follow-up"
      }
    ],
    "transitions": [
      {
        "from": "open",
        "to": "in_review"
      },
      {
        "from": "in_review",
        "to": "resolved",
        "gate": "Permit reference"
      },
      {
        "from": "open",
        "to": "blocked"
      }
    ]
  },
  {
    "id": "p34",
    "slug": "policy-relay",
    "name": "PolicyRelay",
    "lane": "Compliance operations",
    "motif": "assurance",
    "fields": [
      "Policy reference",
      "Control action",
      "Control owner",
      "Control evidence"
    ],
    "status": "Private local build",
    "pitch": "Turns policy changes into owner-specific controls, acknowledgement, evidence, and renewal tasks.",
    "buyer": "Compliance manager",
    "outcome": "More reliable policy execution",
    "recordLabel": "policy-control task",
    "sourceLabel": "policy or evidence fixture",
    "resolveLabel": "confirm control outcome",
    "resolutionFields": [
      "Policy reference"
    ],
    "stateFlow": [
      {
        "value": "open",
        "label": "Open",
        "meaning": "policy-control task registered"
      },
      {
        "value": "in_review",
        "label": "In review",
        "meaning": "policy or evidence fixture"
      },
      {
        "value": "resolved",
        "label": "Resolved",
        "meaning": "confirm control outcome"
      },
      {
        "value": "blocked",
        "label": "Blocked",
        "meaning": "Decision held for follow-up"
      }
    ],
    "transitions": [
      {
        "from": "open",
        "to": "in_review"
      },
      {
        "from": "in_review",
        "to": "resolved",
        "gate": "Policy reference"
      },
      {
        "from": "open",
        "to": "blocked"
      }
    ]
  },
  {
    "id": "p35",
    "slug": "policy-test",
    "name": "PolicyTest",
    "lane": "AI governance",
    "motif": "assurance",
    "fields": [
      "Policy reference",
      "Redaction state",
      "Governance owner",
      "Decision evidence"
    ],
    "status": "Private local build",
    "pitch": "Tests internal AI workflows against policy rules, redacts sensitive inputs, and records reviewer decisions.",
    "buyer": "AI governance lead",
    "outcome": "Safer internal AI adoption",
    "recordLabel": "AI policy test result",
    "sourceLabel": "redacted policy-test fixture",
    "resolveLabel": "record policy decision",
    "resolutionFields": [
      "Policy reference"
    ],
    "stateFlow": [
      {
        "value": "open",
        "label": "Open",
        "meaning": "AI policy test result registered"
      },
      {
        "value": "in_review",
        "label": "In review",
        "meaning": "redacted policy-test fixture"
      },
      {
        "value": "resolved",
        "label": "Resolved",
        "meaning": "record policy decision"
      },
      {
        "value": "blocked",
        "label": "Blocked",
        "meaning": "Decision held for follow-up"
      }
    ],
    "transitions": [
      {
        "from": "open",
        "to": "in_review"
      },
      {
        "from": "in_review",
        "to": "resolved",
        "gate": "Policy reference"
      },
      {
        "from": "open",
        "to": "blocked"
      }
    ]
  },
  {
    "id": "p36",
    "slug": "queue-craft",
    "name": "QueueCraft",
    "lane": "Developer operations",
    "motif": "queue",
    "fields": [
      "Job reference",
      "Attempt state",
      "Recovery owner",
      "Recovery evidence"
    ],
    "status": "Private local build",
    "pitch": "Provides a visible, retry-safe workflow layer for background jobs in small product teams.",
    "buyer": "Technical founder",
    "outcome": "Reliable asynchronous work without platform overbuild",
    "recordLabel": "implementation brief",
    "sourceLabel": "ticket, document, or decision fixture",
    "resolveLabel": "approve brief",
    "resolutionFields": [
      "Job reference"
    ],
    "stateFlow": [
      {
        "value": "open",
        "label": "Open",
        "meaning": "implementation brief registered"
      },
      {
        "value": "in_review",
        "label": "In review",
        "meaning": "ticket, document, or decision fixture"
      },
      {
        "value": "resolved",
        "label": "Resolved",
        "meaning": "approve brief"
      },
      {
        "value": "blocked",
        "label": "Blocked",
        "meaning": "Decision held for follow-up"
      }
    ],
    "transitions": [
      {
        "from": "open",
        "to": "in_review"
      },
      {
        "from": "in_review",
        "to": "resolved",
        "gate": "Job reference"
      },
      {
        "from": "open",
        "to": "blocked"
      }
    ]
  },
  {
    "id": "p37",
    "slug": "quote-pulse",
    "name": "QuotePulse",
    "lane": "B2B sales operations",
    "motif": "ledger",
    "fields": [
      "Request reference",
      "Completeness state",
      "Quote owner",
      "Qualification evidence"
    ],
    "status": "Private local build",
    "pitch": "Routes inbound technical quote requests through completeness checks, evidence collection, and timely ownership.",
    "buyer": "Sales operations manager",
    "outcome": "Higher-quality quoting",
    "recordLabel": "technical quote request",
    "sourceLabel": "requirement or request fixture",
    "resolveLabel": "qualify quote",
    "resolutionFields": [
      "Request reference"
    ],
    "stateFlow": [
      {
        "value": "open",
        "label": "Open",
        "meaning": "technical quote request registered"
      },
      {
        "value": "in_review",
        "label": "In review",
        "meaning": "requirement or request fixture"
      },
      {
        "value": "resolved",
        "label": "Resolved",
        "meaning": "qualify quote"
      },
      {
        "value": "blocked",
        "label": "Blocked",
        "meaning": "Decision held for follow-up"
      }
    ],
    "transitions": [
      {
        "from": "open",
        "to": "in_review"
      },
      {
        "from": "in_review",
        "to": "resolved",
        "gate": "Request reference"
      },
      {
        "from": "open",
        "to": "blocked"
      }
    ]
  },
  {
    "id": "p38",
    "slug": "reconcile-hq",
    "name": "ReconcileHQ",
    "lane": "Finance operations",
    "motif": "ledger",
    "fields": [
      "Fictional ledger reference",
      "Variance explanation",
      "Controller owner",
      "Fictional approval evidence"
    ],
    "status": "Private local build",
    "pitch": "Provides an evidence queue for monthly close reconciliations, exceptions, approvals, and audit trails.",
    "buyer": "Controller at a growing business",
    "outcome": "Shorter, safer close",
    "recordLabel": "reconciliation exception",
    "sourceLabel": "fictional ledger or statement fixture",
    "resolveLabel": "close reconciliation",
    "resolutionFields": [
      "Fictional ledger reference"
    ],
    "stateFlow": [
      {
        "value": "open",
        "label": "Open",
        "meaning": "reconciliation exception registered"
      },
      {
        "value": "in_review",
        "label": "In review",
        "meaning": "fictional ledger or statement fixture"
      },
      {
        "value": "resolved",
        "label": "Resolved",
        "meaning": "close reconciliation"
      },
      {
        "value": "blocked",
        "label": "Blocked",
        "meaning": "Decision held for follow-up"
      }
    ],
    "transitions": [
      {
        "from": "open",
        "to": "in_review"
      },
      {
        "from": "in_review",
        "to": "resolved",
        "gate": "Fictional ledger reference"
      },
      {
        "from": "open",
        "to": "blocked"
      }
    ]
  },
  {
    "id": "p39",
    "slug": "renewal-signal",
    "name": "RenewalSignal",
    "lane": "Customer success",
    "motif": "ledger",
    "fields": [
      "Risk signal",
      "Account plan",
      "CSM owner",
      "Intervention evidence"
    ],
    "status": "Private local build",
    "pitch": "Creates a source-backed renewal-risk brief from usage, tickets, account notes, and delivery commitments.",
    "buyer": "Customer success leader",
    "outcome": "Earlier, clearer renewal intervention",
    "recordLabel": "renewal-risk brief",
    "sourceLabel": "usage, ticket, or account-note fixture",
    "resolveLabel": "confirm intervention",
    "resolutionFields": [
      "Risk signal"
    ],
    "stateFlow": [
      {
        "value": "open",
        "label": "Open",
        "meaning": "renewal-risk brief registered"
      },
      {
        "value": "in_review",
        "label": "In review",
        "meaning": "usage, ticket, or account-note fixture"
      },
      {
        "value": "resolved",
        "label": "Resolved",
        "meaning": "confirm intervention"
      },
      {
        "value": "blocked",
        "label": "Blocked",
        "meaning": "Decision held for follow-up"
      }
    ],
    "transitions": [
      {
        "from": "open",
        "to": "in_review"
      },
      {
        "from": "in_review",
        "to": "resolved",
        "gate": "Risk signal"
      },
      {
        "from": "open",
        "to": "blocked"
      }
    ]
  },
  {
    "id": "p40",
    "slug": "return-lens",
    "name": "ReturnLens",
    "lane": "E-commerce operations",
    "motif": "ledger",
    "fields": [
      "Return reference",
      "Cause cluster",
      "Returns owner",
      "Action evidence"
    ],
    "status": "Private local build",
    "pitch": "Clusters returns evidence into product, supplier, and fulfillment causes with owner workflows.",
    "buyer": "Head of e-commerce operations",
    "outcome": "Earlier return-cost reduction",
    "recordLabel": "return-cause review",
    "sourceLabel": "return or fulfillment fixture",
    "resolveLabel": "confirm return action",
    "resolutionFields": [
      "Return reference"
    ],
    "stateFlow": [
      {
        "value": "open",
        "label": "Open",
        "meaning": "return-cause review registered"
      },
      {
        "value": "in_review",
        "label": "In review",
        "meaning": "return or fulfillment fixture"
      },
      {
        "value": "resolved",
        "label": "Resolved",
        "meaning": "confirm return action"
      },
      {
        "value": "blocked",
        "label": "Blocked",
        "meaning": "Decision held for follow-up"
      }
    ],
    "transitions": [
      {
        "from": "open",
        "to": "in_review"
      },
      {
        "from": "in_review",
        "to": "resolved",
        "gate": "Return reference"
      },
      {
        "from": "open",
        "to": "blocked"
      }
    ]
  },
  {
    "id": "p41",
    "slug": "route-exception",
    "name": "RouteException",
    "lane": "Logistics operations",
    "motif": "field",
    "fields": [
      "Shipment reference",
      "Exception category",
      "Exception owner",
      "Customer update evidence"
    ],
    "status": "Private local build",
    "pitch": "Centralizes shipment exceptions, evidence requests, owner actions, and customer updates for small logistics teams.",
    "buyer": "Logistics operations manager",
    "outcome": "Shorter exception-resolution cycle",
    "recordLabel": "shipment exception",
    "sourceLabel": "shipment or carrier fixture",
    "resolveLabel": "resolve shipment exception",
    "resolutionFields": [
      "Shipment reference"
    ],
    "stateFlow": [
      {
        "value": "open",
        "label": "Open",
        "meaning": "shipment exception registered"
      },
      {
        "value": "in_review",
        "label": "In review",
        "meaning": "shipment or carrier fixture"
      },
      {
        "value": "resolved",
        "label": "Resolved",
        "meaning": "resolve shipment exception"
      },
      {
        "value": "blocked",
        "label": "Blocked",
        "meaning": "Decision held for follow-up"
      }
    ],
    "transitions": [
      {
        "from": "open",
        "to": "in_review"
      },
      {
        "from": "in_review",
        "to": "resolved",
        "gate": "Shipment reference"
      },
      {
        "from": "open",
        "to": "blocked"
      }
    ]
  },
  {
    "id": "p42",
    "slug": "runbook-relay",
    "name": "RunbookRelay",
    "lane": "IT operations",
    "motif": "queue",
    "fields": [
      "Runbook reference",
      "Execution state",
      "Runbook owner",
      "Test evidence"
    ],
    "status": "Private local build",
    "pitch": "Converts recurring operational incidents into tested, owned runbooks with review and execution records.",
    "buyer": "IT operations lead",
    "outcome": "Fewer repeated manual escalations",
    "recordLabel": "runbook execution record",
    "sourceLabel": "incident or runbook fixture",
    "resolveLabel": "confirm runbook outcome",
    "resolutionFields": [
      "Runbook reference"
    ],
    "stateFlow": [
      {
        "value": "open",
        "label": "Open",
        "meaning": "runbook execution record registered"
      },
      {
        "value": "in_review",
        "label": "In review",
        "meaning": "incident or runbook fixture"
      },
      {
        "value": "resolved",
        "label": "Resolved",
        "meaning": "confirm runbook outcome"
      },
      {
        "value": "blocked",
        "label": "Blocked",
        "meaning": "Decision held for follow-up"
      }
    ],
    "transitions": [
      {
        "from": "open",
        "to": "in_review"
      },
      {
        "from": "in_review",
        "to": "resolved",
        "gate": "Runbook reference"
      },
      {
        "from": "open",
        "to": "blocked"
      }
    ]
  },
  {
    "id": "p43",
    "slug": "safety-brief",
    "name": "SafetyBrief",
    "lane": "Field operations",
    "motif": "assurance",
    "fields": [
      "Site incident reference",
      "Corrective action",
      "Safety owner",
      "Completion evidence"
    ],
    "status": "Private local build",
    "pitch": "Turns site incident reports, photos, corrective actions, and approvals into a traceable safety workflow.",
    "buyer": "Safety manager",
    "outcome": "Faster corrective action tracking",
    "recordLabel": "safety corrective-action record",
    "sourceLabel": "site report or photo fixture",
    "resolveLabel": "close corrective action",
    "resolutionFields": [
      "Site incident reference"
    ],
    "stateFlow": [
      {
        "value": "open",
        "label": "Open",
        "meaning": "safety corrective-action record registered"
      },
      {
        "value": "in_review",
        "label": "In review",
        "meaning": "site report or photo fixture"
      },
      {
        "value": "resolved",
        "label": "Resolved",
        "meaning": "close corrective action"
      },
      {
        "value": "blocked",
        "label": "Blocked",
        "meaning": "Decision held for follow-up"
      }
    ],
    "transitions": [
      {
        "from": "open",
        "to": "in_review"
      },
      {
        "from": "in_review",
        "to": "resolved",
        "gate": "Site incident reference"
      },
      {
        "from": "open",
        "to": "blocked"
      }
    ]
  },
  {
    "id": "p44",
    "slug": "school-ops",
    "name": "SchoolOps",
    "lane": "Education operations",
    "motif": "queue",
    "fields": [
      "Fictional referral reference",
      "Document state",
      "Service owner",
      "Fictional closure evidence"
    ],
    "status": "Private local build",
    "pitch": "Coordinates student-service referrals, parent documents, approvals, and status for independent schools.",
    "buyer": "School operations director",
    "outcome": "Fewer missed service handoffs",
    "recordLabel": "fictional service-referral workflow",
    "sourceLabel": "fictional referral or document fixture",
    "resolveLabel": "close referral step",
    "resolutionFields": [
      "Fictional referral reference"
    ],
    "stateFlow": [
      {
        "value": "open",
        "label": "Open",
        "meaning": "fictional service-referral workflow registered"
      },
      {
        "value": "in_review",
        "label": "In review",
        "meaning": "fictional referral or document fixture"
      },
      {
        "value": "resolved",
        "label": "Resolved",
        "meaning": "close referral step"
      },
      {
        "value": "blocked",
        "label": "Blocked",
        "meaning": "Decision held for follow-up"
      }
    ],
    "transitions": [
      {
        "from": "open",
        "to": "in_review"
      },
      {
        "from": "in_review",
        "to": "resolved",
        "gate": "Fictional referral reference"
      },
      {
        "from": "open",
        "to": "blocked"
      }
    ]
  },
  {
    "id": "p45",
    "slug": "service-scope",
    "name": "ServiceScope",
    "lane": "Professional services",
    "motif": "assurance",
    "fields": [
      "Scope reference",
      "Change-request state",
      "Service owner",
      "Scope evidence"
    ],
    "status": "Private local build",
    "pitch": "Links sales promises, statement-of-work scope, delivery milestones, and change requests for consulting teams.",
    "buyer": "Services operations leader",
    "outcome": "Lower scope leakage",
    "recordLabel": "delivery scope record",
    "sourceLabel": "sales promise or SOW fixture",
    "resolveLabel": "confirm scope",
    "resolutionFields": [
      "Scope reference"
    ],
    "stateFlow": [
      {
        "value": "open",
        "label": "Open",
        "meaning": "delivery scope record registered"
      },
      {
        "value": "in_review",
        "label": "In review",
        "meaning": "sales promise or SOW fixture"
      },
      {
        "value": "resolved",
        "label": "Resolved",
        "meaning": "confirm scope"
      },
      {
        "value": "blocked",
        "label": "Blocked",
        "meaning": "Decision held for follow-up"
      }
    ],
    "transitions": [
      {
        "from": "open",
        "to": "in_review"
      },
      {
        "from": "in_review",
        "to": "resolved",
        "gate": "Scope reference"
      },
      {
        "from": "open",
        "to": "blocked"
      }
    ]
  },
  {
    "id": "p46",
    "slug": "spec-signal",
    "name": "SpecSignal",
    "lane": "Developer operations",
    "motif": "workbench",
    "fields": [
      "Decision scope",
      "Evidence set",
      "Brief owner",
      "Approval evidence"
    ],
    "status": "Private local build",
    "pitch": "Turns tickets, docs, and prior decisions into an evidence-backed implementation brief before AI-assisted work begins.",
    "buyer": "Engineering manager",
    "outcome": "Fewer ambiguous handoffs and rework",
    "recordLabel": "implementation brief",
    "sourceLabel": "ticket, document, or decision fixture",
    "resolveLabel": "approve brief",
    "resolutionFields": [
      "Decision scope"
    ],
    "stateFlow": [
      {
        "value": "open",
        "label": "Open",
        "meaning": "implementation brief registered"
      },
      {
        "value": "in_review",
        "label": "In review",
        "meaning": "ticket, document, or decision fixture"
      },
      {
        "value": "resolved",
        "label": "Resolved",
        "meaning": "approve brief"
      },
      {
        "value": "blocked",
        "label": "Blocked",
        "meaning": "Decision held for follow-up"
      }
    ],
    "transitions": [
      {
        "from": "open",
        "to": "in_review"
      },
      {
        "from": "in_review",
        "to": "resolved",
        "gate": "Decision scope"
      },
      {
        "from": "open",
        "to": "blocked"
      }
    ]
  },
  {
    "id": "p47",
    "slug": "stock-proof",
    "name": "StockProof",
    "lane": "Inventory operations",
    "motif": "workbench",
    "fields": [
      "Item reference",
      "Variance source",
      "Inventory owner",
      "Reconciliation evidence"
    ],
    "status": "Private local build",
    "pitch": "Reconciles inventory mismatches across purchase orders, warehouse counts, and sales systems with owner review.",
    "buyer": "Operations or inventory manager",
    "outcome": "Fewer stock and fulfillment errors",
    "recordLabel": "inventory reconciliation",
    "sourceLabel": "count, order, or sales fixture",
    "resolveLabel": "reconcile inventory",
    "resolutionFields": [
      "Item reference"
    ],
    "stateFlow": [
      {
        "value": "open",
        "label": "Open",
        "meaning": "inventory reconciliation registered"
      },
      {
        "value": "in_review",
        "label": "In review",
        "meaning": "count, order, or sales fixture"
      },
      {
        "value": "resolved",
        "label": "Resolved",
        "meaning": "reconcile inventory"
      },
      {
        "value": "blocked",
        "label": "Blocked",
        "meaning": "Decision held for follow-up"
      }
    ],
    "transitions": [
      {
        "from": "open",
        "to": "in_review"
      },
      {
        "from": "in_review",
        "to": "resolved",
        "gate": "Item reference"
      },
      {
        "from": "open",
        "to": "blocked"
      }
    ]
  },
  {
    "id": "p48",
    "slug": "supplier-match",
    "name": "SupplierMatch",
    "lane": "Manufacturing operations",
    "motif": "workbench",
    "fields": [
      "Supplier reference",
      "Requirement match",
      "Procurement owner",
      "Qualification evidence"
    ],
    "status": "Private local build",
    "pitch": "Qualifies supplier alternatives against approved requirements, documents, capacity, and evidence.",
    "buyer": "Procurement manager",
    "outcome": "Faster supplier qualification",
    "recordLabel": "supplier qualification",
    "sourceLabel": "requirement or capacity fixture",
    "resolveLabel": "approve supplier",
    "resolutionFields": [
      "Supplier reference"
    ],
    "stateFlow": [
      {
        "value": "open",
        "label": "Open",
        "meaning": "supplier qualification registered"
      },
      {
        "value": "in_review",
        "label": "In review",
        "meaning": "requirement or capacity fixture"
      },
      {
        "value": "resolved",
        "label": "Resolved",
        "meaning": "approve supplier"
      },
      {
        "value": "blocked",
        "label": "Blocked",
        "meaning": "Decision held for follow-up"
      }
    ],
    "transitions": [
      {
        "from": "open",
        "to": "in_review"
      },
      {
        "from": "in_review",
        "to": "resolved",
        "gate": "Supplier reference"
      },
      {
        "from": "open",
        "to": "blocked"
      }
    ]
  },
  {
    "id": "p49",
    "slug": "support-lens",
    "name": "SupportLens",
    "lane": "Customer support",
    "motif": "queue",
    "fields": [
      "Escalation channel",
      "Redaction state",
      "Investigation owner",
      "Handoff approval"
    ],
    "status": "Private local build",
    "pitch": "Assembles a reproducible support-to-engineering evidence pack from tickets, logs, and account context.",
    "buyer": "Head of support engineering",
    "outcome": "Faster escalation triage",
    "recordLabel": "implementation brief",
    "sourceLabel": "ticket, document, or decision fixture",
    "resolveLabel": "approve brief",
    "resolutionFields": [
      "Escalation channel"
    ],
    "stateFlow": [
      {
        "value": "open",
        "label": "Open",
        "meaning": "implementation brief registered"
      },
      {
        "value": "in_review",
        "label": "In review",
        "meaning": "ticket, document, or decision fixture"
      },
      {
        "value": "resolved",
        "label": "Resolved",
        "meaning": "approve brief"
      },
      {
        "value": "blocked",
        "label": "Blocked",
        "meaning": "Decision held for follow-up"
      }
    ],
    "transitions": [
      {
        "from": "open",
        "to": "in_review"
      },
      {
        "from": "in_review",
        "to": "resolved",
        "gate": "Escalation channel"
      },
      {
        "from": "open",
        "to": "blocked"
      }
    ]
  },
  {
    "id": "p50",
    "slug": "vendor-proof",
    "name": "VendorProof",
    "lane": "Property and vendor operations",
    "motif": "workbench",
    "fields": [
      "Vendor reference",
      "Requirement type",
      "Verification owner",
      "Verification evidence"
    ],
    "status": "Private local build",
    "pitch": "Collects, verifies, and renews vendor insurance, compliance documents, and service readiness records.",
    "buyer": "Facilities or property operator",
    "outcome": "Lower vendor compliance risk",
    "recordLabel": "vendor-readiness record",
    "sourceLabel": "insurance or compliance fixture",
    "resolveLabel": "verify vendor",
    "resolutionFields": [
      "Vendor reference"
    ],
    "stateFlow": [
      {
        "value": "open",
        "label": "Open",
        "meaning": "vendor-readiness record registered"
      },
      {
        "value": "in_review",
        "label": "In review",
        "meaning": "insurance or compliance fixture"
      },
      {
        "value": "resolved",
        "label": "Resolved",
        "meaning": "verify vendor"
      },
      {
        "value": "blocked",
        "label": "Blocked",
        "meaning": "Decision held for follow-up"
      }
    ],
    "transitions": [
      {
        "from": "open",
        "to": "in_review"
      },
      {
        "from": "in_review",
        "to": "resolved",
        "gate": "Vendor reference"
      },
      {
        "from": "open",
        "to": "blocked"
      }
    ]
  }
];
