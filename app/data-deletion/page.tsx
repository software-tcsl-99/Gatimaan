import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  Archive,
  CheckCircle2,
  Clock3,
  Mail,
  ShieldAlert,
  Trash2,
  UserRoundX,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { DeletionFAQ } from "@/components/deletion/DeletionFAQ";
import { siteConfig } from "@/lib/config";

const deletionUrl = "https://www.gatimaan.io/data-deletion";
const supportEmail = siteConfig.contact.supportEmail;

export const metadata: Metadata = {
  title: "Account & Data Deletion Policy",
  description:
    "Learn how to request deletion of a Gatimaan account and personal data, what information is deleted or retained, and how long processing takes.",
  alternates: {
    canonical: "/data-deletion",
  },
  openGraph: {
    title: `Account & Data Deletion Policy | ${siteConfig.brand.name}`,
    description:
      "Gatimaan's account and data deletion process, including request methods, retained records, and processing timelines.",
    url: deletionUrl,
  },
};

const permanentlyDeletedItems = [
  {
    title: "User Authentication Credentials",
    description: "Password hashes, active JWT sessions, and refresh tokens.",
  },
  {
    title: "Personal Profile Information",
    description:
      "Residential address, date of birth, profile photo, and optional emergency reference contacts (referenceName1/2, referenceNumber1/2).",
  },
  {
    title: "Device & Push Identifiers",
    description:
      "Bound hardware device ID (androidId), FCM/Expo push notification tokens, and live online/heartbeat status.",
  },
  {
    title: "Active GPS Tracking & Local Cache",
    description: "All active background location sessions and cached device data.",
  },
];

const retainedRecordItems = [
  {
    title: "Historical Attendance & Shift Summaries",
    description: "Retained for payroll verification and statutory labor law compliance.",
  },
  {
    title: "Approved Expense Claims & Petty Cash Vouchers",
    description: "Retained for corporate accounting, tax audit, and financial compliance.",
  },
  {
    title: "Material Movement & Gate Pass Audit Logs",
    description: "Retained for warehouse inventory accountability.",
  },
];

export default function DataDeletionPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      <section className="relative overflow-hidden border-b border-white/10 bg-[#060919] pt-32 pb-16 text-white">
        <div className="pointer-events-none absolute -top-24 left-1/2 h-72 w-[720px] -translate-x-1/2 rounded-full bg-gradient-to-r from-indigo-600/25 via-violet-600/20 to-cyan-500/15 blur-[110px]" />

        <Container className="relative z-10">
          <div className="max-w-3xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-indigo-400/25 bg-indigo-500/10 px-3.5 py-1 text-xs font-semibold text-cyan-300">
              <Trash2 className="h-3.5 w-3.5" />
              <span>Gatimaan Account &amp; Data Deletion</span>
            </div>

            <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Account &amp; Data Deletion Policy
            </h1>

            <p className="mt-4 text-base leading-relaxed text-slate-300 sm:text-lg">
              How to request deletion of your Gatimaan account and personal
              data, what information is deleted or retained, and the expected
              processing timeline.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3 text-xs text-slate-300">
              <Link
                href="/privacy-policy"
                className="inline-flex items-center gap-1.5 rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-slate-200 transition-colors hover:bg-white/10"
              >
                <span>Read Privacy Policy</span>
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <Container className="space-y-12 py-12 lg:py-16">
        <section
          id="overview"
          className="scroll-mt-28 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8 lg:p-10"
        >
          <h2 className="mb-4 text-xl font-bold text-slate-900 sm:text-2xl">
            1. Overview (Enterprise Workforce Account Model)
          </h2>
          <div className="space-y-4 text-sm leading-relaxed text-slate-600 sm:text-base">
            <p>
              <strong className="text-slate-900">Gatimaan</strong> is a
              multi-tenant B2B Enterprise Workforce Management and
              Geo-Attendance platform. Employee accounts are created, managed,
              and administered by each employee&rsquo;s respective{" "}
              <strong className="text-slate-900">
                Employer Organization (Company Administrator / HR Department)
              </strong>
              .
            </p>
            <p>
              In accordance with Google Play&rsquo;s User Data and Account
              Deletion requirements, employees can request the deletion of their
              Gatimaan user account and associated personal data using any of
              the methods below—even if they have already uninstalled the mobile
              application.
            </p>
          </div>
        </section>

        <section id="request-methods" className="scroll-mt-28 space-y-6">
          <div>
            <h2 className="text-xl font-bold text-slate-900 sm:text-2xl">
              2. How to Request Account and Data Deletion
            </h2>
            <p className="mt-2 text-sm text-slate-600 sm:text-base">
              You can initiate an account and personal data deletion request
              through any of the following methods.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-indigo-200 bg-indigo-50 text-indigo-600">
                  <UserRoundX className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">
                  Method 1: Through Your Company Administrator (Recommended)
                </h3>
              </div>
              <p className="mb-4 text-sm leading-relaxed text-slate-600">
                Because your account is provisioned under your employer&rsquo;s
                organization workspace:
              </p>
              <ol className="list-decimal space-y-2.5 pl-6 text-sm leading-relaxed text-slate-700">
                <li>
                  Contact your organization&rsquo;s{" "}
                  <strong>Company Administrator</strong> or{" "}
                  <strong>HR Department</strong>.
                </li>
                <li>
                  Provide your <strong>Company Code</strong>,{" "}
                  <strong>Employee ID</strong>, and{" "}
                  <strong>Registered Mobile Number</strong>.
                </li>
                <li>
                  Your Company Administrator can immediately deactivate and
                  delete your employee profile and revoke mobile app access
                  from the Gatimaan Admin Console (
                  <strong>Employees</strong> management panel).
                </li>
              </ol>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-indigo-200 bg-indigo-50 text-indigo-600">
                  <Mail className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">
                  Method 2: Via Email (Without Logging Into the App)
                </h3>
              </div>
              <p className="mb-4 text-sm leading-relaxed text-slate-600">
                If you no longer have the app installed or cannot log in, send
                an email to{" "}
                <a
                  href={`mailto:${supportEmail}`}
                  className="font-semibold text-indigo-600 hover:underline"
                >
                  {supportEmail}
                </a>{" "}
                with the subject line{" "}
                <strong>Account Deletion Request — Gatimaan</strong> and
                include:
              </p>
              <ul className="list-disc space-y-2 pl-6 text-sm text-slate-700">
                <li><strong>Full Name</strong></li>
                <li><strong>Company Code / Organization Name</strong></li>
                <li><strong>Registered Mobile Number or Employee ID</strong></li>
                <li><strong>Reason for Deletion Request (Optional)</strong></li>
              </ul>
              <p className="mt-4 text-sm leading-relaxed text-slate-600">
                Our support team will coordinate with your organization&rsquo;s
                authorized Company Administrator to verify and process your
                request.
              </p>
            </div>
          </div>
        </section>

        <section id="data-handling" className="scroll-mt-28 space-y-6">
          <div>
            <h2 className="text-xl font-bold text-slate-900 sm:text-2xl">
              3. What Data Is Deleted vs. Retained
            </h2>
            <p className="mt-2 text-sm text-slate-600 sm:text-base">
              When an account deletion request is processed, the following data
              handling rules apply.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-indigo-200 bg-indigo-50 text-indigo-600">
                  <CheckCircle2 className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900">
                    A. Data Permanently Deleted
                  </h3>
                  <p className="text-sm font-semibold text-indigo-700">
                    Within 7–30 days
                  </p>
                </div>
              </div>
              <ul className="space-y-4 text-sm text-slate-700">
                {permanentlyDeletedItems.map((item) => (
                  <li key={item.title} className="flex items-start gap-2.5">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-indigo-600" />
                    <span>
                      <strong>{item.title}:</strong> {item.description}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-amber-200 bg-amber-50 text-amber-600">
                  <Archive className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">
                  B. Data Retained for Employer Legal, Payroll &amp; Audit
                  Compliance
                </h3>
              </div>
              <p className="mb-5 text-sm leading-relaxed text-slate-600">
                Because Gatimaan is an enterprise HR, attendance, expense, and
                inventory audit system used by your employer for statutory
                compliance, the following historical business records may be
                retained in anonymized or archived form by your Employer
                Organization:
              </p>
              <ul className="space-y-4 text-sm text-slate-700">
                {retainedRecordItems.map((item) => (
                  <li key={item.title} className="flex items-start gap-2.5">
                    <ShieldAlert className="mt-0.5 h-4 w-4 shrink-0 text-amber-600" />
                    <span>
                      <strong>{item.title}:</strong> {item.description}
                    </span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-4 text-sm leading-relaxed text-amber-950">
                <strong>Retention Period for Statutory Audit Records:</strong>{" "}
                Retained strictly for the duration mandated by your Employer
                Organization&rsquo;s applicable tax and labor regulations
                (typically up to 3–7 years depending on jurisdiction), after
                which they are purged or anonymized.
              </div>
            </div>
          </div>
        </section>

        <section
          id="processing-timeline"
          className="scroll-mt-28 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8 lg:p-10"
        >
          <div className="mb-5 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-indigo-200 bg-indigo-50 text-indigo-600">
              <Clock3 className="h-5 w-5" />
            </div>
            <h2 className="text-xl font-bold text-slate-900 sm:text-2xl">
              4. Processing Timeline
            </h2>
          </div>
          <ul className="space-y-4 text-sm text-slate-700 sm:text-base">
            <li className="flex flex-col gap-1 sm:flex-row sm:gap-2">
              <strong className="shrink-0">
                Account Deactivation &amp; Access Revocation:
              </strong>
              <span>Within 24 to 48 hours of verification by the Company Administrator.</span>
            </li>
            <li className="flex flex-col gap-1 sm:flex-row sm:gap-2">
              <strong className="shrink-0">
                Permanent Deletion of Personal Profile Data:
              </strong>
              <span>Completed within 7 to 30 calendar days.</span>
            </li>
          </ul>
        </section>

        <section
          id="contact-support"
          className="scroll-mt-28 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8 lg:p-10"
        >
          <h2 className="text-xl font-bold text-slate-900 sm:text-2xl">
            5. Contact Support
          </h2>
          <p className="mt-2 text-sm text-slate-600 sm:text-base">
            For any questions or assistance regarding account or data deletion,
            please contact:
          </p>
          <ul className="mt-4 space-y-3 text-sm text-slate-700 sm:text-base">
            <li>
              <strong>Email:</strong>{" "}
              <a
                href={`mailto:${supportEmail}`}
                className="text-indigo-600 hover:underline"
              >
                {supportEmail}
              </a>
            </li>
            <li>
              <strong>Privacy Policy:</strong>{" "}
              <Link
                href="/privacy-policy"
                className="text-indigo-600 hover:underline"
              >
                https://www.gatimaan.io/privacy-policy
              </Link>
            </li>
            <li>
              <strong>Website:</strong>{" "}
              <a
                href={deletionUrl}
                className="text-indigo-600 hover:underline"
              >
                {deletionUrl}
              </a>
            </li>
          </ul>
        </section>

        <DeletionFAQ />
      </Container>
    </div>
  );
}
