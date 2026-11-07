export interface ValuePropItem {
  id: string;
  title: string;
  description: string;
  highlight: string;
  iconName: string;
}

export interface PlatformModule {
  id: string;
  number: string;
  shortTitle: string;
  title: string;
  badge: string;
  description: string;
  features: string[];
  technicalHighlights: { label: string; value: string }[];
  previewType:
    | "attendance"
    | "gps"
    | "leave"
    | "expense"
    | "material"
    | "crm"
    | "analytics";
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
  detailTags: string[];
}

export interface MobileFeatureScreen {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  badge: string;
  metrics: { label: string; value: string; status?: string }[];
}

export interface SecurityCapability {
  title: string;
  category: string;
  description: string;
  specDetail: string;
}

export interface TechEcosystemItem {
  name: string;
  category: "Core Platform Stack" | "Connected Services & Integrations";
  role: string;
  description: string;
}

export const NAV_LINKS = [
  { label: "Home", href: "/#home", sectionId: "home" },
  { label: "Features", href: "/#overview", sectionId: "overview" },
  { label: "Solutions", href: "/#modules", sectionId: "modules" },
  { label: "Security", href: "/#security", sectionId: "security" },
  { label: "About", href: "/#how-it-works", sectionId: "how-it-works" },
];

export const OVERVIEW_VALUE_PROPS: ValuePropItem[] = [
  {
    id: "workforce-visibility",
    title: "Workforce Visibility",
    description:
      "Manage employee attendance, shifts, location, and workforce activities.",
    highlight: "Haversine Work-Zone & Selfie Verification",
    iconName: "Users",
  },
  {
    id: "field-to-finance",
    title: "Field-to-Finance Visibility",
    description:
      "Connect employee movement, customer visits, expenses, and business operations.",
    highlight: "Unified Field, CRM & Petty Cash Ledger",
    iconName: "Route",
  },
  {
    id: "inventory-control",
    title: "Intelligent Inventory Control",
    description:
      "Track every serialized material unit from dispatch to return with barcode-based traceability.",
    highlight: "Unit-Level Barcodes & Tally Prime Sync",
    iconName: "QrCode",
  },
  {
    id: "automated-workflows",
    title: "Automated Business Workflows",
    description:
      "Simplify approvals, policies, reporting, and organizational operations.",
    highlight: "Multi-Stage Rule & Hierarchy Engine",
    iconName: "Workflow",
  },
];

export const PLATFORM_MODULES: PlatformModule[] = [
  {
    id: "attendance",
    number: "01",
    shortTitle: "Workforce & Attendance",
    title: "Workforce & Attendance Management",
    badge: "ATTENDANCE & SHIFTS",
    description:
      "Centralize employee onboarding, dynamic organizational hierarchies, flexible shift rules, and tamper-resistant work-zone boundary attendance with front-camera selfie and hardware device verification.",
    features: [
      "Employee management and onboarding (including bulk Excel roster import)",
      "Location-verified punch-in and punch-out with Haversine work-zone radius checks",
      "Mandatory front-camera selfie verification with resolved street addresses",
      "Unlimited shift scheduling with configurable grace periods and cutoffs",
      "Automated attendance calculations, break tracking, and auto punch-out watchdog",
      "Smart daily classification: Present, Late, Half-Day, Leave, Holiday, Weekly Off, and Absent",
    ],
    technicalHighlights: [
      { label: "Boundary Engine", value: "Haversine Meter Accuracy" },
      { label: "Identity Lock", value: "Hardware Device ID + Selfie" },
      { label: "Status Classes", value: "8 Automated States" },
    ],
    previewType: "attendance",
  },
  {
    id: "gps-tracking",
    number: "02",
    shortTitle: "Real-Time GPS Tracking",
    title: "Real-Time GPS Tracking",
    badge: "FIELD TELEMETRY",
    description:
      "Enterprise-grade field telemetry featuring speed-adaptive GPS sampling, offline queue persistence, a 7-stage validation pipeline with 2D Kalman filtering, road snapping, and 30-second self-healing device heartbeats.",
    features: [
      "Live employee location tracking with speed-adaptive sampling (2s / 5s / 10s)",
      "Route visualization with 2D Kalman filtering and physical road snapping",
      "Movement, monotonic Haversine distance, stop count, and speed analytics",
      "Offline GPS data synchronization with local device queue flushing",
      "GPS validation and suspicious-location, velocity, and mock-GPS detection",
      "30-second device heartbeat monitoring with battery, network, and watchdog recovery",
    ],
    technicalHighlights: [
      { label: "Sampling Rate", value: "Adaptive down to 2s" },
      { label: "Validation", value: "7-Stage Pipeline + Kalman" },
      { label: "Heartbeat", value: "30s Watchdog Telemetry" },
    ],
    previewType: "gps",
  },
  {
    id: "leave-management",
    number: "03",
    shortTitle: "Leave Management",
    title: "Leave Management",
    badge: "POLICY & LEDGER",
    description:
      "Policy-driven leave accounting powered by a 6-tier scoped entitlement hierarchy and an immutable double-entry leave ledger that tracks every grant, approval, cancellation, adjustment, and encashment.",
    features: [
      "Monthly, quarterly, and yearly leave policies across custom leave types",
      "Real-time leave balance management with full-day (1.0) and half-day (0.5) quotas",
      "6-tier hierarchical leave entitlements (Employee Override down to Company Default)",
      "Manager-based and multi-stage conditional approval workflows",
      "Automated double-entry leave ledger with carry-forward and new-joiner proration",
    ],
    technicalHighlights: [
      { label: "Policy Priority", value: "6-Tier Resolution Engine" },
      { label: "Accounting", value: "Double-Entry Immutable Ledger" },
      { label: "Cycles", value: "Monthly, Quarterly, Yearly" },
    ],
    previewType: "leave",
  },
  {
    id: "expense-management",
    number: "04",
    shortTitle: "Expense & Petty Cash",
    title: "Expense & Petty Cash Management",
    badge: "FINANCE & WALLET",
    description:
      "End-to-end single and multi-employee group travel claims, multi-dimensional policy entitlement calculations, 3-tier financial verification, and an append-only integer-paise petty cash wallet.",
    features: [
      "Individual and combined group expense claims (up to 20 employees per trip)",
      "Food, travel, local conveyance, multi-night lodging, stock purchase, and other expenses",
      "Policy-based entitlement calculations by Level × Grade × City Class (A+, A, B, C) × Mode",
      "Dedicated employee petty cash wallet with integer-paise precision accounting",
      "Base limit, current balance, top-up request, and excess return tracking",
      "3-tier approval (Manager, Finance Head/CFO, Accounts Admin) and UTR settlement records",
    ],
    technicalHighlights: [
      { label: "Group Claims", value: "Up to 20 Employees / Claim" },
      { label: "Policy Matrix", value: "Level × Grade × City Class" },
      { label: "Wallet Ledger", value: "Append-Only Paise Precision" },
    ],
    previewType: "expense",
  },
  {
    id: "material-management",
    number: "05",
    shortTitle: "Material & Inventory",
    title: "Material & Inventory Management",
    badge: "BARCODE & TALLY PRIME",
    description:
      "Zero-leakage warehouse and field material control tracking every physical unit by unique serialized barcode across requisitions, dispatches, peer transfers, splits, merges, exchanges, and live Tally Prime XML synchronization.",
    features: [
      "Unit-level barcode-based material tracking with recursive custody history",
      "Material requisitions and multi-stage dispatch (RDC, DC, Invoice, Emergency Send)",
      "Employee-to-employee and cross-department material transfers with GPS photo proof",
      "Store and warehouse operations including lot splitting, merging, and bulk returns",
      "Material returns, defective warranty exchanges, and commercial DC/Invoice closures",
      "Bidirectional live Tally Prime XML integration for stock catalogs and automated vouchers",
    ],
    technicalHighlights: [
      { label: "Traceability", value: "Serialized Unit Barcodes" },
      { label: "Operations", value: "Dispatch, Transfer, Split, Merge" },
      { label: "ERP Sync", value: "Live Tally Prime XML over HTTP" },
    ],
    previewType: "material",
  },
  {
    id: "field-crm",
    number: "06",
    shortTitle: "Field CRM & Visits",
    title: "Field CRM & Customer Visits",
    badge: "FIELD EXECUTION",
    description:
      "Connect customer and vendor master registries with disciplined field execution through attendance-gated customer visits, single-visit concurrency locks, dual GPS + selfie verification, and prioritized workforce tasks.",
    features: [
      "Company-scoped customer, vendor, product, and material master management",
      "Admin-scheduled and employee self-assigned customer visits across lifecycle states",
      "GPS-verified visit execution with mandatory active attendance prerequisite",
      "Dual front-camera selfie and street address capture at Visit Start and Visit Completion",
      "Visit objectives, completion outcomes, and single active visit concurrency lock",
      "Employee task management with priority tiers, categories, and overdue transitions",
    ],
    technicalHighlights: [
      { label: "Execution Guard", value: "Attendance + Single-Visit Lock" },
      { label: "Verification", value: "Start & Complete GPS + Selfie" },
      { label: "Task Priority", value: "Low, Medium, High + SLA" },
    ],
    previewType: "crm",
  },
  {
    id: "ai-analytics",
    number: "07",
    shortTitle: "AI Workforce Analytics",
    title: "AI Workforce Analytics",
    badge: "GEMINI AI & REPORTING",
    description:
      "Transform 30-day operational telemetry across 12 workforce KPIs into standardized performance scores, coaching recommendations, risk identification, real-time multi-channel alerts, and audit-ready PDF/Excel exports.",
    features: [
      "30-day multi-metric employee performance evaluation across 12 operational KPIs",
      "Attendance, working hours, break discipline, and shift punctuality metrics",
      "Workforce field distance analytics and daily route summaries",
      "Google Gemini AI-powered performance scoring (weighted 100-point HR model)",
      "Actionable coaching recommendations and identified risk areas per employee",
      "Automated event-driven notifications and one-click PDF & Excel/CSV audit exports",
    ],
    technicalHighlights: [
      { label: "AI Engine", value: "Google Gemini AI + Weighted Model" },
      { label: "Evaluation", value: "12 KPIs over 30-Day Window" },
      { label: "Audit Exports", value: "One-Click PDF & Excel/CSV" },
    ],
    previewType: "analytics",
  },
];

export const HOW_IT_WORKS_STEPS: ProcessStep[] = [
  {
    step: "01",
    title: "Connect Your Workforce",
    description:
      "Register employees, departments, branches, and organizational roles.",
    detailTags: [
      "Multi-Branch Setup",
      "5-Tier Authority Hierarchy",
      "Auto Role Codes",
      "Bulk Excel Onboarding",
    ],
  },
  {
    step: "02",
    title: "Manage Daily Operations",
    description:
      "Handle attendance, shifts, leaves, customer visits, and employee tasks.",
    detailTags: [
      "Selfie + GPS Punch-In",
      "Flexible Shifts",
      "6-Tier Leave Policies",
      "Verified Customer Visits",
    ],
  },
  {
    step: "03",
    title: "Track Assets & Expenses",
    description:
      "Monitor employee routes, material movements, inventory, expenses, and petty cash.",
    detailTags: [
      "2s Adaptive GPS",
      "Serialized Barcodes",
      "Tally Prime Vouchers",
      "Group Expense & Petty Cash",
    ],
  },
  {
    step: "04",
    title: "Analyze & Optimize",
    description:
      "Get operational reports, performance insights, automated notifications, and workforce analytics.",
    detailTags: [
      "Gemini AI Coaching",
      "100-Pt HR Scoring",
      "FCM & Socket.IO Alerts",
      "PDF & Excel Audit Trails",
    ],
  },
];

export const MOBILE_SHOWCASE_SCREENS: MobileFeatureScreen[] = [
  {
    id: "login-security",
    title: "Secure Employee Login",
    subtitle: "Hardware-Bound Authentication",
    description:
      "JWT & OTP authentication locked to the employee's registered mobile hardware device ID with role-governed module visibility.",
    badge: "DEVICE LOCK",
    metrics: [
      { label: "Device Binding", value: "Verified Hardware ID", status: "active" },
      { label: "Session Guard", value: "JWT + 7-Day Refresh", status: "secure" },
      { label: "Module Access", value: "RBAC Scoped", status: "info" },
    ],
  },
  {
    id: "attendance-shift",
    title: "Attendance & Shift Management",
    subtitle: "Haversine Work-Zone Verification",
    description:
      "Live distance check against assigned work-zone coordinates, front-camera selfie capture, resolved street address, and break timer.",
    badge: "INSIDE WORK ZONE",
    metrics: [
      { label: "Zone Distance", value: "18m from HQ Boundary", status: "active" },
      { label: "Shift Status", value: "General (09:30 - 18:30)", status: "info" },
      { label: "Selfie Proof", value: "Captured & Verified", status: "secure" },
    ],
  },
  {
    id: "live-gps",
    title: "Live GPS Tracking",
    subtitle: "Speed-Adaptive Field Telemetry",
    description:
      "Samples every 2s in motion, buffers offline coordinates locally, snaps trajectories to road geometry, and transmits 30s heartbeats.",
    badge: "LIVE TELEMETRY",
    metrics: [
      { label: "Sampling Interval", value: "2.0s (Moving >15 km/h)", status: "active" },
      { label: "Distance Today", value: "42.8 km (Kalman Smoothed)", status: "info" },
      { label: "Offline Queue", value: "0 Pending (Synced)", status: "secure" },
    ],
  },
  {
    id: "leave-app",
    title: "Leave Applications",
    subtitle: "Double-Entry Balance & Approvals",
    description:
      "Apply for full-day or half-day leaves with real-time quota visibility across Sick, Casual, Paid, and Emergency leave ledgers.",
    badge: "LEAVE LEDGER",
    metrics: [
      { label: "Available Quota", value: "14.5 Days Remaining", status: "active" },
      { label: "Policy Tier", value: "Authority Level Rule", status: "info" },
      { label: "Approval Chain", value: "Immediate Manager", status: "secure" },
    ],
  },
  {
    id: "expense-claims",
    title: "Expense Claims & Petty Cash",
    subtitle: "Single, Group & Wallet Accounting",
    description:
      "Submit normal or multi-night lodging claims for 1–20 employees with automatic City Class entitlement checks and petty cash wallet sync.",
    badge: "EXP-2026-000412",
    metrics: [
      { label: "Petty Cash Balance", value: "₹12,450.00 (Base ₹15,000)", status: "active" },
      { label: "Entitlement Check", value: "City Class A+ Compliant", status: "secure" },
      { label: "Claim Mode", value: "Group Lodging + Conveyance", status: "info" },
    ],
  },
  {
    id: "customer-visits",
    title: "Customer Visits (Field CRM)",
    subtitle: "Dual GPS + Selfie Execution",
    description:
      "Execute scheduled or self-assigned visits with attendance prerequisite guards, single-visit concurrency locks, and start/completion proof.",
    badge: "VISIT IN PROGRESS",
    metrics: [
      { label: "Attendance Check", value: "Active Shift Verified", status: "secure" },
      { label: "Concurrency Lock", value: "1 Active Visit Locked", status: "active" },
      { label: "Start Verification", value: "GPS + Selfie Logged", status: "info" },
    ],
  },
  {
    id: "material-movement",
    title: "Material Movement",
    subtitle: "Barcode Scanning & Custody Chain",
    description:
      "Scan serialized unit barcodes for requisitions, handler dispatch, peer-to-peer transfers, returns, warranty exchanges, and Tally sync.",
    badge: "RDC-2026-000189",
    metrics: [
      { label: "Active Custody", value: "6 Barcoded Units", status: "active" },
      { label: "Transfer Proof", value: "GPS + Timestamp Photo", status: "secure" },
      { label: "Tally Voucher", value: "Stock Journal Posted", status: "info" },
    ],
  },
  {
    id: "notifications-profile",
    title: "Notifications & Employee Profile",
    subtitle: "Real-Time Alerts & Org Hierarchy",
    description:
      "Receive instant FCM/Socket.IO alerts for shift reminders, boundary crossings, and approvals alongside standardized corporate role codes.",
    badge: "REAL-TIME ALERTS",
    metrics: [
      { label: "Role Code", value: "ORG-ENG-L2-G1", status: "info" },
      { label: "Push Channels", value: "FCM + Expo + Socket.IO", status: "active" },
      { label: "Data Scope", value: "TEAM & DEPARTMENT", status: "secure" },
    ],
  },
];

export const SECURITY_CAPABILITIES: SecurityCapability[] = [
  {
    title: "JWT-Based Authentication",
    category: "Identity & Tokens",
    description:
      "Short-lived JWT access tokens paired with 7-day refresh tokens and OTP login support for verified workforce sign-in.",
    specDetail: "JWT + 7-Day Refresh & OTP",
  },
  {
    title: "Bcrypt Password Hashing",
    category: "Credential Security",
    description:
      "All employee and administrator passwords are salted and hashed using Bcrypt alongside failed-attempt lockout guards.",
    specDetail: "Bcrypt + Lockout Protection",
  },
  {
    title: "Role-Based Access Control",
    category: "Authorization",
    description:
      "Granular permission matrix governing 7 visibility scopes (SELF to ALL), authority levels, role codes, and mobile modules.",
    specDetail: "7 Data Visibility Scopes",
  },
  {
    title: "Multi-Tenant Company Isolation",
    category: "Tenant Governance",
    description:
      "Every database record, REST API query, background job, and Socket.IO room is strictly isolated by companyId.",
    specDetail: "Strict companyId Partitioning",
  },
  {
    title: "Device Binding",
    category: "Hardware Trust",
    description:
      "Single-active-device hardware binding locks employee sessions to their registered mobile device ID to prevent proxy punching.",
    specDetail: "Single-Device Hardware Lock",
  },
  {
    title: "Session Integrity",
    category: "Lifecycle Control",
    description:
      "Automatic tokenVersion invalidation immediately revokes existing tokens whenever passwords or security credentials change.",
    specDetail: "Automatic tokenVersion Reset",
  },
  {
    title: "API Rate Limiting",
    category: "Traffic Protection",
    description:
      "Configurable request rate limiting protects authentication, telemetry, and operational endpoints against automated abuse.",
    specDetail: "express-rate-limit Policies",
  },
  {
    title: "Input Sanitization",
    category: "Payload Hardening",
    description:
      "Multi-layer request sanitization defending against NoSQL query injection, cross-site scripting (XSS), and parameter pollution.",
    specDetail: "Mongo-Sanitize, XSS & HPP",
  },
  {
    title: "Secure HTTP Headers",
    category: "Transport Hardening",
    description:
      "Strict HTTP security headers enforced via Helmet across all API responses alongside authenticated WebSocket handshakes.",
    specDetail: "Helmet HTTP Security Policy",
  },
  {
    title: "Audit Logs",
    category: "Compliance & Ledgers",
    description:
      "System-wide AuditLog trails paired with immutable, append-only double-entry ledgers for leaves and petty cash transactions.",
    specDetail: "Append-Only Ledgers & AuditLog",
  },
  {
    title: "Real-Time Access Revocation",
    category: "Instant Termination",
    description:
      "WebSocket forceLogout trigger immediately terminates active mobile sessions the moment an account is deactivated or removed.",
    specDetail: "Live Socket.IO forceLogout",
  },
];

export const TECH_ECOSYSTEM: TechEcosystemItem[] = [
  {
    name: "Node.js",
    category: "Core Platform Stack",
    role: "Backend Runtime & REST API",
    description:
      "Node.js (v20+) & Express.js modular domain controllers and background watchdog cron services.",
  },
  {
    name: "React",
    category: "Core Platform Stack",
    role: "Web Administration Portal",
    description:
      "React 18 & Redux Toolkit enterprise command center for multi-tenant governance, GIS mapping, and audit exports.",
  },
  {
    name: "React Native",
    category: "Core Platform Stack",
    role: "Cross-Platform Mobile App",
    description:
      "Expo / React Native mobile experience for Android & iOS with background GPS tasks, SQLite offline queues, and barcode scanning.",
  },
  {
    name: "MongoDB",
    category: "Core Platform Stack",
    role: "Database & Aggregation Engine",
    description:
      "Mongoose ODM with compound tenant indexes, high-speed reporting aggregation pipelines, and write-behind tracking cache.",
  },
  {
    name: "Socket.IO",
    category: "Core Platform Stack",
    role: "Real-Time Event Transport",
    description:
      "JWT-authenticated WebSockets powering isolated company tracking streams, material transaction chats, and instant forceLogout.",
  },
  {
    name: "Tally Prime",
    category: "Connected Services & Integrations",
    role: "Live ERP Accounting Sync",
    description:
      "Bidirectional XML over HTTP integration for querying live StockItems and auto-posting Godown Transfer, Delivery Note, and Batch vouchers.",
  },
  {
    name: "Google Maps",
    category: "Connected Services & Integrations",
    role: "GIS, Roads & Address Resolution",
    description:
      "Powers live workforce route visualization, physical road geometry snapping, and reverse-geocoded street address verification.",
  },
  {
    name: "Google Gemini AI",
    category: "Connected Services & Integrations",
    role: "Workforce Intelligence Engine",
    description:
      "Analyzes 30-day multi-metric KPIs alongside a weighted HR scoring model to generate performance scores and coaching insights.",
  },
  {
    name: "Firebase Cloud Messaging",
    category: "Connected Services & Integrations",
    role: "Multi-Channel Push Delivery",
    description:
      "Works alongside Expo Push Notifications to deliver targeted broadcasts, shift reminders, and emergency offline heartbeat alerts.",
  },
  {
    name: "Cloudinary",
    category: "Connected Services & Integrations",
    role: "Verified Media Storage",
    description:
      "Securely stores compressed attendance selfies, customer visit photos, expense receipts, and location-stamped material custody proofs.",
  },
];

export const PRIVACY_TOC = [
  { id: "introduction", number: "1", title: "Introduction" },
  { id: "scope", number: "2", title: "Scope of This Privacy Policy" },
  { id: "information-we-collect", number: "3", title: "Information We Collect" },
  { id: "camera-permission", number: "4", title: "Camera Permission and Usage" },
  {
    id: "location-permission",
    number: "5",
    title: "Location Permission and Background Location Usage",
  },
  {
    id: "notifications-permissions",
    number: "6",
    title: "Notifications and Device Permissions",
  },
  { id: "how-we-use-information", number: "7", title: "How We Use Information" },
  {
    id: "gps-tracking-verification",
    number: "8",
    title: "GPS Tracking and Location Verification",
  },
  { id: "data-storage-security", number: "9", title: "Data Storage and Security" },
  {
    id: "third-party-services",
    number: "10",
    title: "Third-Party Services and Integrations",
  },
  {
    id: "data-sharing-disclosure",
    number: "11",
    title: "Data Sharing and Disclosure",
  },
  { id: "data-retention", number: "12", title: "Data Retention" },
  {
    id: "responsibilities",
    number: "13",
    title: "Employee and Organization Responsibilities",
  },
  { id: "childrens-privacy", number: "14", title: "Children's Privacy" },
  { id: "user-rights", number: "15", title: "User Rights and Data Access" },
  {
    id: "account-deactivation-deletion",
    number: "16",
    title: "Account Deactivation and Data Deletion",
  },
  { id: "policy-changes", number: "17", title: "Changes to This Privacy Policy" },
  { id: "contact-information", number: "18", title: "Contact Information" },
];

export const DELETION_FAQS = [
  {
    question: "How long does deletion take?",
    answer:
      "Deletion requests are processed after identity verification by your employing organization's authorized administrator and review against applicable statutory and business retention obligations. Exact completion timing follows your organization's configured retention and administrative review schedule.",
  },
  {
    question: "Can I request deletion through my company administrator?",
    answer:
      "Yes. Because Gatimaan operates as an enterprise multi-tenant workforce platform provisioned by your employer or contracting organization, your Company Administrator or HR/IT department can directly initiate account deactivation or eligible data deletion within your company's tenant environment.",
  },
  {
    question: "Will my attendance and financial records also be deleted?",
    answer:
      "Personal profile attributes, active device bindings, and non-mandatory operational data can be deleted or anonymized when eligible. However, records required for financial accounting, expense disbursements, petty cash ledgers, Tally Prime voucher audit trails, tax compliance, or statutory employment laws may be retained in accordance with legal and organizational obligations.",
  },
  {
    question: "Can I recover my account after deletion?",
    answer:
      "Once account deletion and personal data anonymization or removal are completed, the action is permanent and the deleted profile cannot be restored. If you only require temporary suspension of access or background tracking, you or your administrator should request Account Deactivation instead.",
  },
  {
    question: "How will I receive confirmation?",
    answer:
      "Once your request has been verified by the authorized administrator and processed according to applicable retention policies, confirmation will be sent to your registered email address or communicated through your organization's designated HR/administration channel.",
  },
];

