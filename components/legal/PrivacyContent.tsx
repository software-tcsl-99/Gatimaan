import Link from "next/link";
import { siteConfig } from "@/lib/config";

const publicSiteUrl = "https://www.gatimaan.io";
const sectionHeadingClass =
  "text-xl sm:text-2xl font-bold text-slate-900";
const listClass = "list-decimal pl-6 space-y-2.5 text-sm sm:text-base";
const bulletClass = "list-disc pl-6 space-y-2.5 text-sm sm:text-base";

export function PrivacyContent() {
  return (
    <article className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-10 lg:p-12 shadow-sm space-y-10 text-slate-700 leading-relaxed">
      <section id="introduction" className="scroll-mt-28 space-y-3">
        <h2 className={sectionHeadingClass}>1. Introduction</h2>
        <p>
          <strong>Application Name:</strong> Gatimaan
          <br />
          <strong>Website:</strong>{" "}
          <a
            href={publicSiteUrl}
            className="text-indigo-600 hover:underline"
          >
            {publicSiteUrl}
          </a>
        </p>
        <p>
          Welcome to <strong>Gatimaan</strong> (&ldquo;we,&rdquo;
          &ldquo;our,&rdquo; or &ldquo;us&rdquo;). Gatimaan is an enterprise B2B
          Workforce Management, HR, Material Movement, Expense Management, and
          Geo-Attendance application provided to organizations (&ldquo;Employer
          Organizations&rdquo; or &ldquo;Tenants&rdquo;) and their authorized
          employees (&ldquo;Users&rdquo; or &ldquo;you&rdquo;).
        </p>
        <p>
          This Privacy Policy explains how the <strong>Gatimaan</strong> mobile
          application and web platform collect, use, store, protect, and
          disclose your information when you use our services.
        </p>
      </section>

      <section
        id="information-we-collect"
        className="scroll-mt-28 space-y-4"
      >
        <h2 className={sectionHeadingClass}>
          2. Information We Collect and Why We Collect It
        </h2>
        <p>
          Gatimaan collects only the data necessary to deliver workforce
          attendance, field route tracking, customer visit logging, expense
          reimbursement, and material movement workflows for your Employer
          Organization.
        </p>

        <div className="space-y-3">
          <h3 className="font-bold text-slate-900">
            A. Location Data (Foreground and Background Location)
          </h3>
          <ul className={bulletClass}>
            <li>
              <strong>
                Foreground Location (ACCESS_FINE_LOCATION,
                ACCESS_COARSE_LOCATION):
              </strong>{" "}
              Collected when you punch in, punch out, start or complete a
              customer visit, or capture geo-tagged material photos. This is
              used to verify your presence within your assigned workplace
              geofence and record visit locations.
            </li>
            <li>
              <strong>
                Background Location (ACCESS_BACKGROUND_LOCATION,
                FOREGROUND_SERVICE_LOCATION):
              </strong>{" "}
              When live field route tracking is enabled for your role by your
              Employer Organization and you are actively clocked in on duty,{" "}
              <strong>
                Gatimaan collects precise GPS location data in the background—even
                when the app is closed or not in use
              </strong>{" "}
              to log your work shift travel route, calculate field travel
              distance, and verify geofence compliance during duty hours.
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>
                  Background location tracking starts{" "}
                  <strong>only after</strong> you view the in-app{" "}
                  <strong>Background Location Disclosure</strong> and punch in
                  for your shift.
                </li>
                <li>
                  While background tracking is active, Gatimaan displays a
                  persistent notification in your device status bar (
                  <em>
                    &ldquo;Gatimaan — Live duty tracking active while punched
                    in&rdquo;
                  </em>
                  ).
                </li>
                <li>
                  Background location collection <strong>stops immediately and
                    automatically</strong> when you punch out or log out.
                </li>
              </ul>
            </li>
          </ul>
        </div>

        <div className="space-y-3">
          <h3 className="font-bold text-slate-900">
            B. Camera, Photos, and Documents
          </h3>
          <ul className={bulletClass}>
            <li>
              <strong>Camera (CAMERA):</strong> Used when you capture live
              attendance verification selfies (punch-in/punch-out), customer
              visit verification selfies, barcode scans for material tracking,
              and geo-tagged material or expense receipt photos. Gatimaan does
              not record audio (RECORD_AUDIO is disabled).
            </li>
            <li>
              <strong>Photos and Documents (Android System Photo Picker &amp;
                Document Picker):</strong> Used when you voluntarily select and
              upload a profile picture, expense reimbursement receipt, petty
              cash proof, or material dispatch/receiving document (such as JPEG,
              PNG, PDF, Word, or Excel files). Gatimaan uses the Android System
              Photo Picker and Document Picker and does not request broad access
              to your device&rsquo;s photo gallery or external storage.
            </li>
          </ul>
        </div>

        <div className="space-y-3">
          <h3 className="font-bold text-slate-900">
            C. Personal &amp; Employment Profile Information
          </h3>
          <ul className={bulletClass}>
            <li>
              <strong>Account &amp; Profile Details:</strong> Full name,
              Employee ID / Employee Code, Company Code, mobile phone number,
              email address, department, designation, assigned shift, gender,
              date of birth (dob), and residential address.
            </li>
            <li>
              <strong>Emergency Reference Contacts (Optional):</strong>{" "}
              Optional emergency contact names and phone numbers
              (referenceName1, referenceNumber1, referenceName2,
              referenceNumber2) provided by you in your profile for workplace
              safety and HR emergency contact purposes.
            </li>
          </ul>
        </div>

        <div className="space-y-3">
          <h3 className="font-bold text-slate-900">
            D. Financial &amp; Expense Reimbursement Data
          </h3>
          <p>
            <strong>Corporate Expense &amp; Petty Cash Records:</strong> Expense
            claim amounts, travel/conveyance mileage, lodging details, bill
            receipts, and petty cash wallet transaction records submitted by
            you for employer reimbursement and accounting approval. Gatimaan
            does not collect personal credit card numbers or consumer banking
            credentials.
          </p>
        </div>

        <div className="space-y-3">
          <h3 className="font-bold text-slate-900">
            E. Device Identifiers &amp; Diagnostic Telemetry
          </h3>
          <ul className={bulletClass}>
            <li>
              <strong>Device Hardware Identifier (androidId):</strong>{" "}
              Collected via Application.getAndroidId() during login and active
              sessions to enforce
              single-device session security, prevent unauthorized account
              sharing, and bind attendance records to your authorized device.
            </li>
            <li>
              <strong>Device &amp; Tracking Health Telemetry:</strong> App
              version, operating system version, battery level (expo-battery),
              network connectivity status, GPS accuracy, and mock-location
              detection flags (mocked) collected during active duty sessions
              to prevent attendance spoofing and diagnose GPS tracking
              interruptions.
            </li>
            <li>
              <strong>Push Notification Tokens (POST_NOTIFICATIONS):</strong>{" "}
              Firebase Cloud Messaging (FCM) / Expo push tokens used to deliver
              shift reminders, leave/expense approval updates, and
              administrative announcements.
            </li>
          </ul>
        </div>
      </section>

      <section id="how-we-use-information" className="scroll-mt-28 space-y-3">
        <h2 className={sectionHeadingClass}>3. How We Use Your Information</h2>
        <p>
          Your information is used strictly for enterprise workforce operations
          authorized by your Employer Organization:
        </p>
        <ol className={listClass}>
          <li>Recording daily shift attendance, breaks, and geofence compliance.</li>
          <li>Logging on-duty field travel routes and customer visits while clocked in.</li>
          <li>Processing leave applications, expense reimbursement claims, and petty cash ledgers.</li>
          <li>Auditing warehouse and field material movements via barcode scans and geo-tagged proof.</li>
          <li>Authenticating your account, enforcing single-device security, and preventing GPS spoofing or fraud.</li>
          <li>Sending real-time operational notifications and shift alerts.</li>
        </ol>
      </section>

      <section id="data-sharing-disclosure" className="scroll-mt-28 space-y-3">
        <h2 className={sectionHeadingClass}>
          4. Data Sharing and Third-Party Service Providers
        </h2>
        <p>
          <strong>
            We do not sell, rent, or trade your personal data to third parties,
            advertisers, or data brokers. Gatimaan contains no third-party
            advertising and does not use the Android Advertising ID (AD_ID).
          </strong>
        </p>
        <p>Your data is shared only with:</p>
        <ol className={listClass}>
          <li>
            <strong>
              Your Employer Organization (Tenant Administrator / HR / Reporting
              Managers):
            </strong>{" "}
            Since Gatimaan is an enterprise B2B platform, all attendance
            records, live shift route coordinates, visit logs, expense claims,
            and profile details are accessible to authorized administrators
            and managers within your organization.
          </li>
          <li>
            <strong>Contracted Infrastructure &amp; Cloud Sub-Processors:</strong>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>
                <strong>Cloudinary:</strong> Secure cloud storage for attendance
                selfies, profile images, expense receipts, and material proof
                attachments.
              </li>
              <li>
                <strong>Firebase Cloud Messaging (Google) &amp; Expo Push
                  Services:</strong> Delivery of push notifications and
                over-the-air app updates.
              </li>
              <li>
                <strong>Maps &amp; Geocoding Providers (Google Maps /
                  OpenStreetMap Nominatim / OSRM):</strong> Reverse geocoding of
                GPS coordinates into readable street addresses and route
                distance calculation.
              </li>
              <li>
                <strong>Employer ERP Integrations (e.g., Tally Prime):</strong>{" "}
                If configured by your Employer Organization, approved material
                or accounting records may sync with your employer&rsquo;s
                internal ERP system.
              </li>
            </ul>
          </li>
        </ol>
      </section>

      <section id="data-storage-security" className="scroll-mt-28 space-y-3">
        <h2 className={sectionHeadingClass}>5. Data Storage and Security</h2>
        <p>
          We implement industry-standard technical and organizational
          safeguards to protect your data:
        </p>
        <ul className={bulletClass}>
          <li>
            <strong>Encryption in Transit:</strong> All communication between
            the Gatimaan mobile app and our servers is encrypted using HTTPS /
            TLS (usesCleartextTraffic=&quot;false&quot;).
          </li>
          <li>
            <strong>Secure Local Storage:</strong>             Authentication tokens (JWT) are stored in hardware-backed
            encrypted storage (expo-secure-store / Android Keystore). Android
            ADB device backups are disabled (android:allowBackup=&quot;false&quot;).
          </li>
          <li>
            <strong>Access Controls:</strong> Multi-tenant role-based access
            control (RBAC) ensures that data is isolated per company and
            accessible only to authorized personnel.
          </li>
        </ul>
      </section>

      <section id="data-retention" className="scroll-mt-28 space-y-3">
        <h2 className={sectionHeadingClass}>
          6. Data Retention and Account Deletion
        </h2>
        <ul className={bulletClass}>
          <li>
            <strong>Enterprise Account Management:</strong> Employee accounts in
            Gatimaan are provisioned and managed by your Employer Organization
            (Company Administrator / HR Department).
          </li>
          <li>
            <strong>How to Request Account &amp; Data Deletion:</strong> You may
            request the deletion of your account and associated personal data
            at any time through:
            <ol className="list-decimal pl-6 mt-2 space-y-2">
              <li>
                <strong>On the Web:</strong> Visit our dedicated Account &amp;
                Data Deletion page at{" "}
                <Link
                  href="/data-deletion"
                  className="text-indigo-600 hover:underline"
                >
                  {publicSiteUrl}/data-deletion
                </Link>
                .
              </li>
              <li>
                <strong>Via Your Company Administrator or Support Email:</strong>{" "}
                Contact your organization&rsquo;s HR/Company Administrator or
                email us directly at{" "}
                <a
                  href={`mailto:${siteConfig.contact.supportEmail}`}
                  className="text-indigo-600 hover:underline"
                >
                  {siteConfig.contact.supportEmail}
                </a>
                .
              </li>
            </ol>
          </li>
        </ul>
        <p>
          Upon verification with your Employer Organization, personal profile
          data, login credentials, push tokens, and active session bindings are
          deleted or anonymized within <strong>7 to 30 business days</strong>,
          except where retention of attendance, payroll, tax, or expense audit
          records is required by applicable labor or tax laws.
        </p>
      </section>

      <section id="user-rights" className="scroll-mt-28 space-y-3">
        <h2 className={sectionHeadingClass}>7. Your Rights and Permissions Control</h2>
        <ul className={bulletClass}>
          <li>
            <strong>Revoking Permissions:</strong> You can revoke Camera,
            Location (&ldquo;Allow all the time&rdquo; or &ldquo;While using
            the app&rdquo;), or Notification permissions at any time in your
            Android device under{" "}
            <strong>Settings → Apps → Gatimaan → Permissions</strong>. Note
            that revoking foreground location or camera permissions may prevent
            you from punching in or capturing required attendance selfies.
          </li>
          <li>
            <strong>Updating Profile Data:</strong> You can view and update
            your personal details, emergency reference contacts, and password
            directly within the <strong>Profile</strong> screen of the app.
          </li>
        </ul>
      </section>

      <section id="childrens-privacy" className="scroll-mt-28 space-y-3">
        <h2 className={sectionHeadingClass}>8. Children&rsquo;s Privacy</h2>
        <p>
          Gatimaan is an enterprise workforce tool intended exclusively for
          adult employees (<strong>ages 18 and over</strong>). We do not
          knowingly collect personal information from anyone under the age of
          18.
        </p>
      </section>

      <section id="policy-changes" className="scroll-mt-28 space-y-3">
        <h2 className={sectionHeadingClass}>
          9. Changes to This Privacy Policy
        </h2>
        <p>
          We may update this Privacy Policy from time to time to reflect
          technical, operational, or regulatory changes. Updated versions will
          be posted at{" "}
          <a
            href={`${publicSiteUrl}/privacy-policy`}
            className="text-indigo-600 hover:underline"
          >
            {publicSiteUrl}/privacy-policy
          </a>{" "}
          with a revised &ldquo;Last Updated&rdquo; date.
        </p>
      </section>

      <section id="contact-information" className="scroll-mt-28 space-y-3">
        <h2 className={sectionHeadingClass}>10. Contact Us</h2>
        <p>
          If you have any questions, concerns, or requests regarding this
          Privacy Policy or your personal data, please contact us at:
        </p>
        <ul className={bulletClass}>
          <li>
            <strong>Application:</strong> Gatimaan
          </li>
          <li>
            <strong>Email:</strong>{" "}
            <a
              href={`mailto:${siteConfig.contact.supportEmail}`}
              className="text-indigo-600 hover:underline"
            >
              {siteConfig.contact.supportEmail}
            </a>
          </li>
          <li>
            <strong>Website:</strong>{" "}
            <a
              href={publicSiteUrl}
              className="text-indigo-600 hover:underline"
            >
              {publicSiteUrl}
            </a>
          </li>
          <li>
            <strong>Data Deletion Information:</strong>{" "}
            <Link
              href="/data-deletion"
              className="text-indigo-600 hover:underline"
            >
              {publicSiteUrl}/data-deletion
            </Link>
          </li>
        </ul>
      </section>
    </article>
  );
}
