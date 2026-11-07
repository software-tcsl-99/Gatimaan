import React from "react";
import Link from "next/link";
import { ArrowUpRight, ShieldAlert, Trash2, Mail, Phone } from "lucide-react";
import { siteConfig } from "@/lib/config";

export function PrivacyContent() {
  return (
    <article className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-10 lg:p-12 shadow-sm space-y-10 text-slate-700 leading-relaxed">
      {/* Play Store Reviewer & Employee Notice Banner */}
      <div className="rounded-2xl bg-indigo-50/70 border border-indigo-200/80 p-5 text-sm text-slate-700 space-y-2">
        <div className="flex items-center gap-2 font-bold text-indigo-950">
          <ShieldAlert className="h-4 w-4 text-indigo-600 shrink-0" />
          <span>Enterprise Workforce Platform Disclosure</span>
        </div>
        <p>
          <strong>{siteConfig.brand.name}</strong> is a multi-tenant Enterprise
          Resource Planning (ERP) and Workforce Operations platform deployed by
          participating organizations (&ldquo;Tenant Companies&rdquo; /
          &ldquo;Employers&rdquo;) across Web Administration and Mobile (Android
          &amp; iOS) applications. Need to request account or personal data
          deletion? Visit our public{" "}
          <Link
            href="/data-deletion"
            className="font-semibold text-indigo-700 underline hover:text-indigo-900"
          >
            Account &amp; Data Deletion Request Page
          </Link>
          .
        </p>
      </div>

      {/* 1. Introduction */}
      <section id="introduction" className="scroll-mt-28 space-y-3">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
          1. Introduction
        </h2>
        <p>
          Welcome to <strong>{siteConfig.brand.name}</strong> (&ldquo;Platform&rdquo;,
          &ldquo;Application&rdquo;, &ldquo;we&rdquo;, &ldquo;our&rdquo;, or
          &ldquo;us&rdquo;). {siteConfig.brand.name} provides a unified
          enterprise workforce operations ecosystem connecting location-verified
          attendance and shift management, real-time GPS field route tracking,
          policy-driven leave accounting, multi-employee expense and petty cash
          management, barcode-serialized material and warehouse movements,
          location-verified customer visits (Field CRM), dynamic organizational
          hierarchy workflows, and AI-powered workforce analytics.
        </p>
        <p>
          This Privacy Policy explains what information is collected when you
          access or use the {siteConfig.brand.name} mobile application (Android
          and iOS) and web administration portal, why specific device
          permissions (including Camera and Foreground/Background Location) are
          required, how data is processed and safeguarded, which external
          third-party services are utilized, and how users can exercise their
          data access, deactivation, and deletion rights.
        </p>
      </section>

      {/* 2. Scope of This Privacy Policy */}
      <section id="scope" className="scroll-mt-28 space-y-3">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
          2. Scope of This Privacy Policy
        </h2>
        <p>
          This Privacy Policy applies to all employees, field engineers, store
          handlers, managers, company administrators, and authorized personnel
          whose accounts are provisioned by a participating Tenant Company on
          the {siteConfig.brand.name} platform, as well as visitors to our
          public website pages (including this Privacy Policy, the Data Deletion
          portal, and Contact pages).
        </p>
        <p>
          Because {siteConfig.brand.name} operates under a multi-tenant
          enterprise architecture isolated by organization (
          <code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs text-slate-800">
            companyId
          </code>
          ), your employing or contracting organization acts as the primary
          administrator of your workforce account, organizational hierarchy
          placement, shift assignments, and module provisioning.
        </p>
      </section>

      {/* 3. Information We Collect */}
      <section id="information-we-collect" className="scroll-mt-28 space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
          3. Information We Collect
        </h2>
        <p>
          Depending on the ERP modules enabled for your organization and role (
          <code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs text-slate-800">
            ATTENDANCE
          </code>
          ,{" "}
          <code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs text-slate-800">
            LEAVE
          </code>
          ,{" "}
          <code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs text-slate-800">
            EXPENSE
          </code>
          ,{" "}
          <code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs text-slate-800">
            MATERIAL_MOVEMENT
          </code>
          ,{" "}
          <code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs text-slate-800">
            CRM
          </code>
          ,{" "}
          <code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs text-slate-800">
            TRACKING
          </code>
          ), {siteConfig.brand.name} collects and processes the following
          categories of information:
        </p>
        <ul className="list-disc pl-6 space-y-2.5 text-sm sm:text-base">
          <li>
            <strong>Employee Profile Information:</strong> Full name, personal
            profile details, blood group, emergency contact references, joining
            date, assigned shift, and designated working place coordinates.
          </li>
          <li>
            <strong>Employee ID and Organization Information:</strong>{" "}
            Company-scoped Employee ID, tenant{" "}
            <code className="rounded bg-slate-100 px-1 py-0.5 text-xs">
              companyId
            </code>
            , branch assignment, department, grade, authority level (Director,
            Management, Leadership, Staff, Trainee), standardized corporate role
            code, and reporting manager hierarchy.
          </li>
          <li>
            <strong>Contact Information:</strong> Official or registered email
            address, mobile phone number, and emergency contact details.
          </li>
          <li>
            <strong>Device Identification Information:</strong> Unique mobile
            hardware device identifier used for single-active-device hardware
            binding, device model/platform metadata, and push notification
            registration tokens.
          </li>
          <li>
            <strong>Location Coordinates and Resolved Addresses:</strong> Exact
            latitude and longitude coordinates, Haversine distance in meters
            from assigned work-zone boundaries, and reverse-geocoded street
            addresses captured during attendance punches, customer visits, and
            material transfers.
          </li>
          <li>
            <strong>GPS Tracking and Movement Information:</strong>{" "}
            High-frequency telemetry points sampled while punched in, movement
            velocity, heading transitions, road-snapped trajectories, stop
            counts, travel duration, daily total distance (
            <code className="rounded bg-slate-100 px-1 py-0.5 text-xs">
              DailyRouteSummary
            </code>
            ), and offline-buffered GPS coordinates synced upon reconnection.
          </li>
          <li>
            <strong>Attendance Timestamps:</strong> Punch-in and punch-out
            timestamps, break start/end intervals, net working hours, and
            automated daily status classifications (Present, Late, Half Day,
            Leave, Holiday, Weekly Off, Absent).
          </li>
          <li>
            <strong>
              Front-Camera Selfie Images Used for Attendance and Customer Visit
              Verification:
            </strong>{" "}
            Mandatory front-camera photographs captured at Punch-In, Punch-Out,
            Customer Visit Start, and Customer Visit Completion to verify live
            employee presence and prevent proxy attendance.
          </li>
          <li>
            <strong>Customer Visit Information:</strong> Scheduled and
            self-assigned customer visit records, customer/vendor association,
            visit lifecycle states (Upcoming, To Do, In Progress, Completed,
            Over Due), visit objectives, and completion outcomes.
          </li>
          <li>
            <strong>Expense Claims and Supporting Documents:</strong> Single and
            multi-employee group expense claims, expense categories (Food,
            Travel, Local Conveyance, Lodging, Stock Purchase, Other), travel
            modes, vehicle classes, city classifications, uploaded invoices/bills,
            full-payment exception justifications, petty cash wallet balances,
            and UTR/payment settlement references.
          </li>
          <li>
            <strong>Material Movement and Barcode Records:</strong> Material
            requisitions (RDC, DC, Invoice, Emergency Send), serialized unit
            barcode custody history, peer-to-peer and cross-department
            transfers, lot splits, barcode merges, warranty exchanges, store
            checklists, transaction chat messages, and synchronized Tally Prime
            voucher numbers.
          </li>
          <li>
            <strong>Uploaded Photographs and Documents:</strong> Onboarding
            verification documents, expense bills, payment proofs, and
            location-stamped material condition/job-card/warranty photographs.
          </li>
          <li>
            <strong>Device Battery and Network Status:</strong> Live battery
            percentage, network connectivity state, and last GPS timestamp
            transmitted via 30-second device heartbeats during active tracking.
          </li>
        </ul>
      </section>

      {/* 4. Camera Permission and Usage */}
      <section id="camera-permission" className="scroll-mt-28 space-y-3">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
          4. Camera Permission and Usage
        </h2>
        <p>
          The {siteConfig.brand.name} mobile application requests access to your
          device&rsquo;s camera strictly for operational verification and enterprise
          asset traceability:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-sm sm:text-base">
          <li>
            <strong>Attendance Verification Selfies:</strong> Capturing a
            mandatory front-camera selfie during Punch-In and Punch-Out to
            confirm identity alongside work-zone GPS boundary validation.
          </li>
          <li>
            <strong>Customer Visit Verification Selfies:</strong> Capturing a
            mandatory front-camera selfie at both Customer Visit Start and
            Customer Visit Completion.
          </li>
          <li>
            <strong>Barcode Scanning &amp; Material Proof:</strong> Scanning
            serialized 1D/2D unit barcodes and capturing timestamped,
            location-stamped photographs of material condition, job cards,
            warranty replacements, and external deliveries.
          </li>
          <li>
            <strong>Expense Receipts &amp; Documents:</strong> Photographing
            supporting bills, lodging invoices, and verification documents.
          </li>
        </ul>
        <p>
          Camera capture is triggered only by explicit user actions (such as
          punching attendance, starting/completing a visit, scanning a barcode,
          or attaching a receipt) and is never activated covertly in the
          background.
        </p>
      </section>

      {/* 5. Location Permission and Background Location Usage */}
      <section id="location-permission" className="scroll-mt-28 space-y-3">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
          5. Location Permission and Background Location Usage
        </h2>
        <p>
          Location verification and field route telemetry are core operational
          functions of {siteConfig.brand.name}. The mobile application requests
          foreground location access and, where enabled for your role by your
          organization, <strong>background location access</strong>:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-sm sm:text-base">
          <li>
            <strong>Active Attendance Work-Zone Validation:</strong> When you
            punch in or punch out, the platform calculates the Haversine
            distance in meters between your live GPS coordinates and your
            assigned office or work-zone radius to record{" "}
            <code className="rounded bg-slate-100 px-1 py-0.5 text-xs">
              Inside
            </code>{" "}
            or{" "}
            <code className="rounded bg-slate-100 px-1 py-0.5 text-xs">
              Outside
            </code>{" "}
            boundary compliance.
          </li>
          <li>
            <strong>Background Location During Active Shifts:</strong> When an
            employee is actively punched in and the{" "}
            <code className="rounded bg-slate-100 px-1 py-0.5 text-xs">
              TRACKING
            </code>{" "}
            module is enabled for their profile, {siteConfig.brand.name}{" "}
            collects GPS coordinates in the foreground and background (even when
            the app is minimized or the screen is locked) to record accurate
            field service routes, verify customer visits, calculate distance-based
            conveyance analytics, and monitor work-zone boundary exits/re-entries.
          </li>
          <li>
            <strong>Offline Buffering:</strong> If network connectivity drops
            while in the field, GPS points are buffered locally in an on-device
            SQLite/AsyncStorage queue and automatically transmitted once
            connectivity is restored.
          </li>
        </ul>
        <p>
          Background GPS tracking operates only when permitted by device OS
          settings and governed by active shift/attendance state and company
          administrator configuration.
        </p>
      </section>

      {/* 6. Notifications and Device Permissions */}
      <section
        id="notifications-permissions"
        className="scroll-mt-28 space-y-3"
      >
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
          6. Notifications and Device Permissions
        </h2>
        <p>
          {siteConfig.brand.name} requests push notification permissions and
          device state access to deliver timely operational alerts across five
          standardized channels (general notifications, emergency notifications,
          HR announcements, attendance notifications, and tracking
          notifications):
        </p>
        <ul className="list-disc pl-6 space-y-2 text-sm sm:text-base">
          <li>Late punch-in alerts and shift punch-out reminders.</li>
          <li>
            Leave approval/rejection updates, expense workflow updates, and
            material movement action alerts.
          </li>
          <li>
            Work-zone boundary exit and re-entry notifications during active
            shifts.
          </li>
          <li>
            Device heartbeat monitoring (battery level and network connectivity
            every 30 seconds during active tracking) and self-healing watchdog
            prompts if location services stall or permissions are revoked.
          </li>
        </ul>
      </section>

      {/* 7. How We Use Information */}
      <section id="how-we-use-information" className="scroll-mt-28 space-y-3">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
          7. How We Use Information
        </h2>
        <p>
          Collected information is used strictly to deliver, verify, and audit
          enterprise workforce operations for your employing organization:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-sm sm:text-base">
          <li>
            <strong>Authentication &amp; Access Governance:</strong> Verifying
            user credentials, enforcing single-device hardware binding, and
            scoping data visibility according to organizational hierarchy and
            Role-Based Access Control (RBAC).
          </li>
          <li>
            <strong>Attendance &amp; Shift Accounting:</strong> Validating
            work-zone compliance, recording selfies and street addresses,
            tracking breaks, and classifying daily attendance status.
          </li>
          <li>
            <strong>Leave &amp; Expense Administration:</strong> Computing
            6-tier leave entitlements, maintaining double-entry leave ledgers,
            calculating multi-dimensional travel/lodging expense caps, routing
            multi-step approvals, and maintaining append-only petty cash wallets.
          </li>
          <li>
            <strong>Inventory &amp; Material Traceability:</strong> Tracking
            serialized unit barcodes across warehouse dispatches, peer
            transfers, splits, merges, warranty exchanges, and synchronizing
            stock vouchers with Tally Prime.
          </li>
          <li>
            <strong>Workforce Analytics &amp; Coaching:</strong> Aggregating
            30-day operational KPIs (working days, hours, break discipline,
            field distance, punctuality) to generate standardized performance
            scores, coaching recommendations, and audit-ready PDF/Excel reports.
          </li>
        </ul>
      </section>

      {/* 8. GPS Tracking and Location Verification */}
      <section
        id="gps-tracking-verification"
        className="scroll-mt-28 space-y-3"
      >
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
          8. GPS Tracking and Location Verification
        </h2>
        <p>
          To ensure accurate field reimbursement and tamper-resistant audit
          trails, incoming GPS telemetry passes through a non-destructive
          7-stage validation pipeline:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-sm sm:text-base">
          <li>
            <strong>Point Classification &amp; Integrity Checks:</strong>{" "}
            Coordinates are evaluated for horizontal accuracy, velocity limits,
            5-kilometer teleportation anomalies, and mock-GPS / spoofed location
            indicators.
          </li>
          <li>
            <strong>Kalman Filtering &amp; Road Snapping:</strong> Raw GPS
            trajectories are smoothed using a 2D Kalman filter and snapped to
            physical road networks to compute accurate monotonic Haversine
            travel distances.
          </li>
          <li>
            <strong>Data Lifecycle Aggregation:</strong> High-frequency raw
            telemetry points are aggregated into 1-minute tracking logs and
            compact daily route summaries (
            <code className="rounded bg-slate-100 px-1 py-0.5 text-xs">
              DailyRouteSummary
            </code>
            ), while expired raw telemetry is periodically cleaned up.
          </li>
        </ul>
      </section>

      {/* 9. Data Storage and Security */}
      <section id="data-storage-security" className="scroll-mt-28 space-y-3">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
          9. Data Storage and Security
        </h2>
        <p>
          {siteConfig.brand.name} implements technical and organizational
          safeguards across its application, database, and transport layers:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-sm sm:text-base">
          <li>
            <strong>Tenant Data Isolation:</strong> Every database record, API
            request, background task, and WebSocket room is partitioned by{" "}
            <code className="rounded bg-slate-100 px-1 py-0.5 text-xs">
              companyId
            </code>
            .
          </li>
          <li>
            <strong>Credential &amp; Session Protection:</strong> Passwords are
            hashed using Bcrypt; sessions use JWT access tokens, 7-day refresh
            tokens with automatic{" "}
            <code className="rounded bg-slate-100 px-1 py-0.5 text-xs">
              tokenVersion
            </code>{" "}
            invalidation on password change, failed-login lockouts, and single
            hardware device binding.
          </li>
          <li>
            <strong>Real-Time Revocation:</strong> Deactivated or deleted
            employee accounts trigger an immediate WebSocket{" "}
            <code className="rounded bg-slate-100 px-1 py-0.5 text-xs">
              forceLogout
            </code>{" "}
            event that terminates active mobile sessions.
          </li>
          <li>
            <strong>API Hardening:</strong> Endpoints are protected with Helmet
            HTTP security headers, configurable API rate limiting, NoSQL
            injection sanitization, XSS filtering, and HTTP parameter pollution
            guards.
          </li>
        </ul>
      </section>

      {/* 10. Third-Party Services and Integrations */}
      <section id="third-party-services" className="scroll-mt-28 space-y-3">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
          10. Third-Party Services and Integrations
        </h2>
        <p>
          To provide core platform functionality, {siteConfig.brand.name}{" "}
          integrates with and transmits relevant operational data to the
          following third-party services and enterprise software systems:
        </p>
        <ul className="list-disc pl-6 space-y-2.5 text-sm sm:text-base">
          <li>
            <strong>Cloudinary:</strong> Used for secure cloud storage and
            delivery of compressed attendance selfies, customer visit
            verification selfies, expense receipts, payment proofs, and
            material movement photographs.
          </li>
          <li>
            <strong>Google Maps &amp; Related Location Services:</strong>{" "}
            Google Maps, Google Roads API, Nominatim, and OSRM routing services
            are used to display workforce maps, snap GPS coordinates to physical
            road geometry, and resolve latitude/longitude coordinates into
            human-readable street addresses.
          </li>
          <li>
            <strong>Google Gemini AI:</strong> Used by the AI Workforce
            Analytics module to process aggregated 30-day operational KPIs and
            generate standardized employee performance scores, actionable
            coaching recommendations, and risk insights.
          </li>
          <li>
            <strong>Firebase Cloud Messaging (FCM):</strong> Used to deliver
            real-time push notifications and operational alerts to Android and
            iOS devices.
          </li>
          <li>
            <strong>Expo Push Notifications:</strong> Used alongside FCM to
            manage cross-platform mobile push notification delivery for React
            Native (Expo) application builds.
          </li>
          <li>
            <strong>Tally Prime (Organizational ERP Integration):</strong> Where
            configured by a Tenant Company, {siteConfig.brand.name} connects
            bidirectionally with the organization&rsquo;s Tally Prime environment
            over XML/HTTP to synchronize stock catalogs, godown transfers,
            delivery notes, and material movement vouchers.
          </li>
        </ul>
      </section>

      {/* 11. Data Sharing and Disclosure */}
      <section id="data-sharing-disclosure" className="scroll-mt-28 space-y-3">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
          11. Data Sharing and Disclosure
        </h2>
        <p>
          We do not sell personal employee data to third-party advertisers or
          data brokers. Data collected within {siteConfig.brand.name} is shared
          only in the following circumstances:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-sm sm:text-base">
          <li>
            <strong>With Your Employing Organization (Tenant Company):</strong>{" "}
            Authorized managers, HR administrators, store administrators,
            finance heads,accounts administrators, and company administrators
            within your organization can view and export workforce records
            according to their configured RBAC data visibility scope (
            <code className="rounded bg-slate-100 px-1 py-0.5 text-xs">
              SELF
            </code>
            ,{" "}
            <code className="rounded bg-slate-100 px-1 py-0.5 text-xs">
              TEAM
            </code>
            ,{" "}
            <code className="rounded bg-slate-100 px-1 py-0.5 text-xs">
              SUB_DEPARTMENT
            </code>
            ,{" "}
            <code className="rounded bg-slate-100 px-1 py-0.5 text-xs">
              DEPARTMENT
            </code>
            ,{" "}
            <code className="rounded bg-slate-100 px-1 py-0.5 text-xs">
              BRANCH
            </code>
            ,{" "}
            <code className="rounded bg-slate-100 px-1 py-0.5 text-xs">
              COMPANY
            </code>
            , or{" "}
            <code className="rounded bg-slate-100 px-1 py-0.5 text-xs">
              ALL
            </code>
            ).
          </li>
          <li>
            <strong>With Integrated Service Providers:</strong> With the
            external infrastructure and integration providers listed in Section
            10 (Cloudinary, Google Maps/Roads/Nominatim/OSRM, Google Gemini AI,
            Firebase Cloud Messaging, Expo Push Services, and your company&rsquo;s
            Tally Prime instance) strictly as required to execute platform
            features.
          </li>
          <li>
            <strong>Legal &amp; Statutory Compliance:</strong> When required by
            applicable law, regulation, court order, tax/audit authority, or
            statutory employment inspection.
          </li>
        </ul>
      </section>

      {/* 12. Data Retention */}
      <section id="data-retention" className="scroll-mt-28 space-y-3">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
          12. Data Retention
        </h2>
        <p>
          Workforce, attendance, leave, expense, material custody, and audit
          records are retained{" "}
          <strong>{siteConfig.legal.retentionDurationPlaceholder}</strong>.
        </p>
        <ul className="list-disc pl-6 space-y-2 text-sm sm:text-base">
          <li>
            <strong>Telemetry Aggregation:</strong> High-frequency raw GPS
            points are automatically consolidated into 1-minute tracking logs
            and compact daily route summaries (
            <code className="rounded bg-slate-100 px-1 py-0.5 text-xs">
              DailyRouteSummary
            </code>
            ), while expired raw coordinate telemetry is cleaned up.
          </li>
          <li>
            <strong>Notification Delivery Logs:</strong> Push notification
            delivery and read audit logs are subject to an automated 15-day log
            retention cleanup cycle.
          </li>
          <li>
            <strong>Financial &amp; Audit Ledgers:</strong> Double-entry leave
            ledgers, append-only petty cash wallet ledgers, settled expense
            claims, Tally Prime voucher histories, and system audit logs (
            <code className="rounded bg-slate-100 px-1 py-0.5 text-xs">
              AuditLog
            </code>
            ) may be retained by the employing organization to satisfy tax,
            accounting, and statutory compliance obligations.
          </li>
        </ul>
      </section>

      {/* 13. Employee and Organization Responsibilities */}
      <section id="responsibilities" className="scroll-mt-28 space-y-3">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
          13. Employee and Organization Responsibilities
        </h2>
        <p>
          <strong>Organization Responsibilities:</strong> Each Tenant Company is
          responsible for obtaining any required employment consents under local
          labor and privacy laws before provisioning employee accounts,
          configuring appropriate shift hours and work-zone boundaries, and
          managing role-based access permissions responsibly.
        </p>
        <p>
          <strong>Employee Responsibilities:</strong> Employees are responsible
          for safeguarding their login credentials, using their registered
          personal or company-issued mobile device in compliance with hardware
          binding policies, and submitting authentic selfies, GPS check-ins,
          material proofs, and expense documents.
        </p>
      </section>

      {/* 14. Children's Privacy */}
      <section id="childrens-privacy" className="scroll-mt-28 space-y-3">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
          14. Children&rsquo;s Privacy
        </h2>
        <p>
          {siteConfig.brand.name} is an enterprise workforce and B2B operations
          platform intended exclusively for adult employees and authorized
          business personnel. We do not knowingly collect or solicit personal
          information from children under the age of 18. If an organization or
          administrator becomes aware that an unauthorized minor profile has
          been created, it should be immediately deactivated and removed.
        </p>
      </section>

      {/* 15. User Rights and Data Access */}
      <section id="user-rights" className="scroll-mt-28 space-y-3">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
          15. User Rights and Data Access
        </h2>
        <p>
          Depending on your jurisdiction and organizational policies, you may
          have the right to:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-sm sm:text-base">
          <li>
            Access your employee profile, attendance timing sheets, leave
            ledger balances, expense claim statements, petty cash wallet
            history, and assigned material custody records directly within the
            application.
          </li>
          <li>
            Request correction of inaccurate personal profile or contact details
            through your Company Administrator or HR department.
          </li>
          <li>
            Revoke device permissions (such as Camera or Location) at any time
            through your mobile operating system settings, noting that revoking
            mandatory permissions will prevent use of location-verified
            attendance, field tracking, or selfie-verified workflows.
          </li>
          <li>
            Request information about stored personal data, account
            deactivation, or deletion of eligible personal data.
          </li>
        </ul>
      </section>

      {/* 16. Account Deactivation and Data Deletion */}
      <section
        id="account-deactivation-deletion"
        className="scroll-mt-28 space-y-4"
      >
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
          16. Account Deactivation and Data Deletion
        </h2>
        <p>
          We provide a dedicated, publicly accessible process for requesting
          account deactivation or the deletion of your {siteConfig.brand.name}{" "}
          account and associated eligible personal information. When an account
          is deactivated or deleted, active mobile sessions are immediately
          terminated via real-time{" "}
          <code className="rounded bg-slate-100 px-1 py-0.5 text-xs">
            forceLogout
          </code>{" "}
          controls, and eligible personal information is deleted or anonymized
          in accordance with applicable organizational and statutory retention
          requirements.
        </p>

        <div className="rounded-2xl border border-indigo-200 bg-indigo-50/60 p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="font-bold text-slate-900 flex items-center gap-2">
              <Trash2 className="h-4 w-4 text-indigo-600" />
              <span>Submit an Account or Data Deletion Request</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-600">
              Review what data is deleted or retained and submit a formal
              request online without logging into the app.
            </p>
          </div>
          <Link
            href="/data-deletion"
            className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2.5 text-xs sm:text-sm font-semibold shadow-sm transition-colors shrink-0"
          >
            <span>Open Data Deletion Page</span>
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* 17. Changes to This Privacy Policy */}
      <section id="policy-changes" className="scroll-mt-28 space-y-3">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
          17. Changes to This Privacy Policy
        </h2>
        <p>
          We may update this Privacy Policy from time to time to reflect new
          platform modules, security enhancements, or regulatory requirements.
          When changes are made, we will update the &ldquo;Last Updated&rdquo;
          date at the top of this page and, where appropriate, notify tenant
          administrators or users via in-app announcements.
        </p>
      </section>

      {/* 18. Contact Information */}
      <section id="contact-information" className="scroll-mt-28 space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
          18. Contact Information
        </h2>
        <p>
          If you have questions or concerns regarding this Privacy Policy,
          device permissions, or data handling practices, please contact your
          employing organization&rsquo;s Company Administrator or reach out
          through our official channels below:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 flex items-start gap-3">
            <Mail className="h-5 w-5 text-indigo-600 mt-0.5 shrink-0" />
            <div className="text-sm">
              <div className="font-semibold text-slate-900">
                Privacy &amp; Support Email
              </div>
              {siteConfig.contact.isConfigured.email ? (
                <a
                  href={`mailto:${siteConfig.contact.privacyEmail}`}
                  className="text-indigo-600 hover:underline break-all"
                >
                  {siteConfig.contact.privacyEmail}
                </a>
              ) : (
                <Link
                  href="/contact"
                  className="text-indigo-600 hover:underline inline-flex items-center gap-1 mt-0.5"
                >
                  <span>Submit via Official Contact Portal</span>
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
              )}
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 flex items-start gap-3">
            <Phone className="h-5 w-5 text-indigo-600 mt-0.5 shrink-0" />
            <div className="text-sm">
              <div className="font-semibold text-slate-900">
                Official Telephone
              </div>
              {siteConfig.contact.isConfigured.phone ? (
                <a
                  href={`tel:${siteConfig.contact.phone}`}
                  className="text-indigo-600 hover:underline"
                >
                  {siteConfig.contact.phone}
                </a>
              ) : (
                <span className="text-slate-600 text-xs">
                  Configurable via Organization Settings / Contact Desk
                </span>
              )}
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}

