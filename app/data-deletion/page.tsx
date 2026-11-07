import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  Trash2,
  Archive,
  CheckCircle2,
  ShieldAlert,
  UserX,
  FileCheck2,
  ArrowRight,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { DeletionRequestForm } from "@/components/deletion/DeletionRequestForm";
import { DeletionFAQ } from "@/components/deletion/DeletionFAQ";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: "Request Account and Data Deletion",
  description:
    "Official Account and Personal Data Deletion Request Portal for the Gatimaan Enterprise Workforce Operations Platform.",
  alternates: {
    canonical: "/data-deletion",
  },
  openGraph: {
    title: `Request Account and Data Deletion | ${siteConfig.brand.name}`,
    description:
      "We respect your privacy and provide a clear process for requesting the deletion of your Gatimaan account and associated personal information.",
    url: `${siteConfig.siteUrl}/data-deletion`,
  },
};

const DELETABLE_DATA_ITEMS = [
  "Employee profile information.",
  "Contact information.",
  "Device association information.",
  "Location and tracking records.",
  "Attendance-related personal information.",
  "Customer visit information.",
  "Uploaded selfies and documents.",
  "Expense claim information.",
  "Other personal information associated with the account.",
];

const RETAINABLE_DATA_ITEMS = [
  "Financial accounting.",
  "Tax and statutory obligations.",
  "Company audit requirements.",
  "Employment-related recordkeeping.",
  "Pending financial transactions or legal disputes.",
];

const DELETION_STEPS = [
  {
    step: "01",
    title: "Submit Deletion Request",
    description:
      "Submit an account deletion request through the designated contact channel or the request form below.",
  },
  {
    step: "02",
    title: "Provide Registered Identifiers",
    description:
      "Provide the registered employee ID or registered email address along with your organization name.",
  },
  {
    step: "03",
    title: "Administrative Verification",
    description:
      "The authorized administrator or designated company representative verifies the request.",
  },
  {
    step: "04",
    title: "Retention Policy Review",
    description:
      "The request is reviewed against applicable organizational and retention requirements.",
  },
  {
    step: "05",
    title: "Deletion or Anonymization",
    description:
      "Eligible personal data is deleted or anonymized according to the applicable retention policy.",
  },
  {
    step: "06",
    title: "Completion Confirmation",
    description:
      "The requester receives confirmation when the process is completed.",
  },
];

export default function DataDeletionPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      {/* Dark Enterprise Header */}
      <section className="relative pt-32 pb-16 bg-[#060919] text-white border-b border-white/10 overflow-hidden">
        <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 h-72 w-[720px] rounded-full bg-gradient-to-r from-indigo-600/25 via-violet-600/20 to-cyan-500/15 blur-[110px]" />

        <Container className="relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-indigo-500/10 border border-indigo-400/25 px-3.5 py-1 text-xs font-semibold text-cyan-300 mb-4">
              <Trash2 className="h-3.5 w-3.5" />
              <span>Google Play Data Safety &amp; Account Governance</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
              Request Account and Data Deletion
            </h1>

            <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
              We respect your privacy and provide a clear process for requesting
              the deletion of your Gatimaan account and associated personal
              information.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3 text-xs text-slate-300">
              <Link
                href="#deletion-form"
                className="inline-flex items-center gap-1.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white px-4 py-2 font-semibold transition-colors"
              >
                <span>Jump to Deletion Request Form</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
              <Link
                href="/privacy-policy"
                className="inline-flex items-center gap-1.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/15 px-4 py-2 text-slate-200 transition-colors"
              >
                <span>Read Full Privacy Policy</span>
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <Container className="py-12 lg:py-16 space-y-12">
        {/* Section A: What Data May Be Deleted vs Retained */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* What data may be deleted? */}
          <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-10 w-10 rounded-xl bg-indigo-50 border border-indigo-200 flex items-center justify-center text-indigo-600">
                <Trash2 className="h-5 w-5" />
              </div>
              <h2 className="text-xl font-bold text-slate-900">
                What data may be deleted?
              </h2>
            </div>

            <p className="text-sm text-slate-600 mb-5 leading-relaxed">
              Depending on applicable organizational, legal, and business
              retention requirements, the following categories of personal data
              are eligible for deletion or anonymization:
            </p>

            <ul className="space-y-2.5 text-sm text-slate-700">
              {DELETABLE_DATA_ITEMS.map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-indigo-600 mt-0.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* What data may be retained? */}
          <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-10 w-10 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-600">
                  <Archive className="h-5 w-5" />
                </div>
                <h2 className="text-xl font-bold text-slate-900">
                  What data may be retained?
                </h2>
              </div>

              <p className="text-sm text-slate-600 mb-5 leading-relaxed">
                Certain operational, financial, and audit records may need to be
                retained by your employing organization where required for:
              </p>

              <ul className="space-y-2.5 text-sm text-slate-700">
                {RETAINABLE_DATA_ITEMS.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <ShieldAlert className="h-4 w-4 text-amber-600 mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 rounded-2xl bg-slate-50 border border-slate-200 p-4 text-xs text-slate-600 leading-relaxed">
              <strong>Important Note:</strong> Because Gatimaan powers
              enterprise financial workflows (including Petty Cash Ledgers,
              Expense Disbursements, Barcoded Material Custody Chains, and Tally
              Prime Vouchers), records tied to statutory audits or open
              obligations cannot be purged until the applicable retention window
              expires.
            </div>
          </div>
        </div>

        {/* Section B: Understanding Deactivation vs Deletion vs Retention */}
        <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 lg:p-10 shadow-sm">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-6">
            Understanding Account Deactivation, Deletion, and Legal Retention
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-2xl bg-slate-50 border border-slate-200 p-5 space-y-2">
              <div className="flex items-center gap-2 font-bold text-slate-900">
                <UserX className="h-4 w-4 text-indigo-600" />
                <span>1. Account Deactivation</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Immediately revokes login access, triggers a live WebSocket{" "}
                <code className="rounded bg-slate-200/70 px-1 py-0.5 text-xs">
                  forceLogout
                </code>{" "}
                on bound mobile devices, and stops all background GPS telemetry
                and push notifications while preserving historical organizational
                records.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 border border-slate-200 p-5 space-y-2">
              <div className="flex items-center gap-2 font-bold text-slate-900">
                <Trash2 className="h-4 w-4 text-rose-600" />
                <span>2. Personal Data Deletion</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Permanently removes or anonymizes eligible personal profile
                details, contact information, device hardware bindings, and
                non-mandatory media/location records after administrative
                verification.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 border border-slate-200 p-5 space-y-2">
              <div className="flex items-center gap-2 font-bold text-slate-900">
                <FileCheck2 className="h-4 w-4 text-amber-600" />
                <span>3. Legally Required Retention</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Preserves immutable financial ledgers, tax/accounting vouchers,
                statutory attendance records, and system audit logs strictly for
                regulatory compliance, audit defense, or pending settlements.
              </p>
            </div>
          </div>
        </div>

        {/* Section C: 6-Step Deletion Request Process */}
        <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 lg:p-10 shadow-sm">
          <div className="max-w-2xl mb-8">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              Deletion Request Process
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              Every request follows a structured six-step verification and
              compliance workflow{" "}
              {siteConfig.legal.deletionProcessingWindowPlaceholder}.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {DELETION_STEPS.map((item) => (
              <div
                key={item.step}
                className="rounded-2xl border border-slate-200/90 bg-slate-50/70 p-5 flex flex-col justify-between"
              >
                <div>
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-600 text-white font-mono text-xs font-bold mb-3">
                    {item.step}
                  </span>
                  <h3 className="text-base font-bold text-slate-900">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section D: Interactive Deletion Request Form */}
        <div id="deletion-form" className="scroll-mt-28">
          <DeletionRequestForm />
        </div>

        {/* Section E: Frequently Asked Questions */}
        <DeletionFAQ />
      </Container>
    </div>
  );
}

