"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Briefcase,
  Headphones,
  ShieldCheck,
  Mail,
  Phone,
  Send,
  Loader2,
  CheckCircle2,
  AlertCircle,
  ArrowUpRight,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/lib/config";
import {
  validateContactForm,
  type ContactFormPayload,
  type ContactEnquiryType,
  type ValidationErrors,
} from "@/lib/validations";
import { cn } from "@/lib/utils";

const ENQUIRY_CHANNELS = [
  {
    id: "general_business" as ContactEnquiryType,
    title: "General Business Enquiry",
    description:
      "Multi-tenant enterprise licensing, module provisioning (Attendance, GPS, Leave, Expense, Material, CRM, AI Analytics), and Tally Prime integration.",
    icon: Briefcase,
  },
  {
    id: "technical_support" as ContactEnquiryType,
    title: "Technical Support Enquiry",
    description:
      "Assistance with mobile device binding, shift schedules, Haversine work-zone configurations, barcode workflows, and web administration.",
    icon: Headphones,
  },
  {
    id: "privacy_data_deletion" as ContactEnquiryType,
    title: "Privacy and Data Deletion Enquiries",
    description:
      "Questions regarding employee data handling, permissions disclosure, account deactivation, or personal data deletion requests.",
    icon: ShieldCheck,
  },
];

export function ContactSection() {
  const [formData, setFormData] = useState<ContactFormPayload>({
    fullName: "",
    email: "",
    companyName: "",
    enquiryType: "general_business",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<ValidationErrors<ContactFormPayload>>(
    {}
  );
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "backend_unconfigured" | "error"
  >("idle");
  const [serverMessage, setServerMessage] = useState("");

  const handleChange = (field: keyof ContactFormPayload, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const validation = validateContactForm(formData);
    if (!validation.valid) {
      setErrors(validation.errors);
      return;
    }

    setErrors({});
    setStatus("submitting");
    setServerMessage("");

    try {
      const res = await fetch(siteConfig.api.contactRoute, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok && data.ok) {
        setStatus("success");
        setServerMessage(data.message);
      } else if (data.code === "BACKEND_NOT_CONFIGURED") {
        setStatus("backend_unconfigured");
        setServerMessage(data.message);
      } else {
        setStatus("error");
        setServerMessage(
          data.message || "Unable to send your enquiry right now."
        );
      }
    } catch {
      setStatus("error");
      setServerMessage(
        "A network error occurred. Please use the configured email contact option."
      );
    }
  };

  const buildMailtoHref = () => {
    const email = siteConfig.contact.email || "";
    const subject = encodeURIComponent(
      `[Gatimaan Enquiry - ${formData.enquiryType}] ${formData.subject}`
    );
    const body = encodeURIComponent(
      `Name: ${formData.fullName}\n` +
        `Email: ${formData.email}\n` +
        `Company: ${formData.companyName}\n` +
        `Category: ${formData.enquiryType}\n\n` +
        `Message:\n${formData.message}`
    );
    return `mailto:${email}?subject=${subject}&body=${body}`;
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      {/* Dark Enterprise Header */}
      <section className="relative pt-32 pb-16 bg-[#060919] text-white border-b border-white/10 overflow-hidden">
        <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 h-72 w-[720px] rounded-full bg-gradient-to-r from-indigo-600/25 via-violet-600/20 to-cyan-500/15 blur-[110px]" />

        <Container className="relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-indigo-500/10 border border-indigo-400/25 px-3.5 py-1 text-xs font-semibold text-cyan-300 mb-4">
              <span>Enterprise Support &amp; Operations Desk</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
              Connect with Gatimaan
            </h1>

            <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
              Reach out for enterprise platform deployment, technical support,
              or privacy and data deletion enquiries.
            </p>
          </div>
        </Container>
      </section>

      {/* Two-Column Layout */}
      <Container className="py-14 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column: Enquiry Categories & Official Contact Panel */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.45 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="space-y-4">
              <h2 className="text-xl font-bold text-slate-900">
                Dedicated Enquiry Channels
              </h2>

              {ENQUIRY_CHANNELS.map((ch) => {
                const Icon = ch.icon;
                const isSelected = formData.enquiryType === ch.id;
                return (
                  <button
                    key={ch.id}
                    type="button"
                    onClick={() => handleChange("enquiryType", ch.id)}
                    className={cn(
                      "w-full text-left rounded-2xl border p-5 transition-all cursor-pointer flex items-start gap-4",
                      isSelected
                        ? "bg-indigo-50/70 border-indigo-400 shadow-sm"
                        : "bg-white border-slate-200 hover:border-indigo-200"
                    )}
                  >
                    <div
                      className={cn(
                        "h-10 w-10 rounded-xl flex items-center justify-center shrink-0 mt-0.5",
                        isSelected
                          ? "bg-indigo-600 text-white"
                          : "bg-slate-100 text-slate-700"
                      )}
                    >
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-sm sm:text-base font-bold text-slate-900">
                        {ch.title}
                      </h3>
                      <p className="mt-1 text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {ch.description}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Configurable Official Company Contact Details */}
            <div className="rounded-3xl bg-[#070B1E] text-white p-6 sm:p-7 border border-slate-800 space-y-5 shadow-xl">
              <div>
                <div className="text-xs font-semibold uppercase tracking-wider text-cyan-300">
                  Official Contact Details
                </div>
                <h3 className="text-lg font-bold text-white mt-1">
                  Direct Communication Channels
                </h3>
              </div>

              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-3">
                  <Mail className="h-5 w-5 text-cyan-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs text-slate-400">
                      Official Company Email
                    </div>
                    {siteConfig.contact.isConfigured.email ? (
                      <a
                        href={`mailto:${siteConfig.contact.email}`}
                        className="font-semibold text-white hover:text-cyan-300 break-all"
                      >
                        {siteConfig.contact.email}
                      </a>
                    ) : (
                      <span className="text-xs text-slate-300">
                        Configured via{" "}
                        <code className="text-cyan-300">
                          NEXT_PUBLIC_COMPANY_EMAIL
                        </code>
                      </span>
                    )}
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="h-5 w-5 text-cyan-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs text-slate-400">
                      Official Company Phone
                    </div>
                    {siteConfig.contact.isConfigured.phone ? (
                      <a
                        href={`tel:${siteConfig.contact.phone}`}
                        className="font-semibold text-white hover:text-cyan-300"
                      >
                        {siteConfig.contact.phone}
                      </a>
                    ) : (
                      <span className="text-xs text-slate-300">
                        Configured via{" "}
                        <code className="text-cyan-300">
                          NEXT_PUBLIC_COMPANY_PHONE
                        </code>
                      </span>
                    )}
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs">
                <span className="text-slate-400">
                  Need account or personal data deletion?
                </span>
                <Link
                  href="/data-deletion"
                  className="text-cyan-300 hover:underline font-semibold inline-flex items-center gap-1"
                >
                  <span>Deletion Portal</span>
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Animated Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.45, delay: 0.1 }}
            className="lg:col-span-7"
          >
            <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 lg:p-10 shadow-sm">
              <h2 className="text-2xl font-bold text-slate-900">
                Send Us a Message
              </h2>
              <p className="mt-1.5 text-sm text-slate-600 mb-6">
                Select an enquiry category and provide your organization details
                below.
              </p>

              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="contact-fullName"
                      className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5"
                    >
                      Full Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      id="contact-fullName"
                      type="text"
                      value={formData.fullName}
                      onChange={(e) => handleChange("fullName", e.target.value)}
                      placeholder="Your full name"
                      className={cn(
                        "w-full rounded-xl border px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2",
                        errors.fullName
                          ? "border-rose-400 focus:ring-rose-500/30"
                          : "border-slate-300 focus:border-indigo-600 focus:ring-indigo-500/20"
                      )}
                    />
                    {errors.fullName && (
                      <p className="mt-1 text-xs text-rose-600">
                        {errors.fullName}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5"
                    >
                      Email Address <span className="text-rose-500">*</span>
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleChange("email", e.target.value)}
                      placeholder="you@company.com"
                      className={cn(
                        "w-full rounded-xl border px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2",
                        errors.email
                          ? "border-rose-400 focus:ring-rose-500/30"
                          : "border-slate-300 focus:border-indigo-600 focus:ring-indigo-500/20"
                      )}
                    />
                    {errors.email && (
                      <p className="mt-1 text-xs text-rose-600">
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="contact-companyName"
                      className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5"
                    >
                      Company / Organization{" "}
                      <span className="text-rose-500">*</span>
                    </label>
                    <input
                      id="contact-companyName"
                      type="text"
                      value={formData.companyName}
                      onChange={(e) =>
                        handleChange("companyName", e.target.value)
                      }
                      placeholder="Organization name"
                      className={cn(
                        "w-full rounded-xl border px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2",
                        errors.companyName
                          ? "border-rose-400 focus:ring-rose-500/30"
                          : "border-slate-300 focus:border-indigo-600 focus:ring-indigo-500/20"
                      )}
                    />
                    {errors.companyName && (
                      <p className="mt-1 text-xs text-rose-600">
                        {errors.companyName}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="contact-enquiryType"
                      className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5"
                    >
                      Enquiry Type <span className="text-rose-500">*</span>
                    </label>
                    <select
                      id="contact-enquiryType"
                      value={formData.enquiryType}
                      onChange={(e) =>
                        handleChange(
                          "enquiryType",
                          e.target.value as ContactEnquiryType
                        )
                      }
                      className="w-full rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm text-slate-900 focus:border-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
                    >
                      <option value="general_business">
                        General Business Enquiry
                      </option>
                      <option value="technical_support">
                        Technical Support Enquiry
                      </option>
                      <option value="privacy_data_deletion">
                        Privacy &amp; Data Deletion Enquiry
                      </option>
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="contact-subject"
                    className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5"
                  >
                    Subject <span className="text-rose-500">*</span>
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    value={formData.subject}
                    onChange={(e) => handleChange("subject", e.target.value)}
                    placeholder="How can our team help?"
                    className={cn(
                      "w-full rounded-xl border px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2",
                      errors.subject
                        ? "border-rose-400 focus:ring-rose-500/30"
                        : "border-slate-300 focus:border-indigo-600 focus:ring-indigo-500/20"
                    )}
                  />
                  {errors.subject && (
                    <p className="mt-1 text-xs text-rose-600">
                      {errors.subject}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5"
                  >
                    Message <span className="text-rose-500">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => handleChange("message", e.target.value)}
                    placeholder="Share your requirements, workforce size, or support question..."
                    className={cn(
                      "w-full rounded-xl border px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2",
                      errors.message
                        ? "border-rose-400 focus:ring-rose-500/30"
                        : "border-slate-300 focus:border-indigo-600 focus:ring-indigo-500/20"
                    )}
                  />
                  {errors.message && (
                    <p className="mt-1 text-xs text-rose-600">
                      {errors.message}
                    </p>
                  )}
                </div>

                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  disabled={status === "submitting"}
                  className="w-full sm:w-auto"
                >
                  {status === "submitting" ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      <span>Sending Enquiry...</span>
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4" />
                      <span>Submit Enquiry</span>
                    </>
                  )}
                </Button>

                {status === "success" && (
                  <div
                    role="status"
                    className="rounded-2xl bg-emerald-50 border border-emerald-200 p-4 text-sm text-emerald-900 flex items-start gap-3"
                  >
                    <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <div className="font-bold">Enquiry Submitted</div>
                      <p>{serverMessage}</p>
                    </div>
                  </div>
                )}

                {status === "backend_unconfigured" && (
                  <div
                    role="alert"
                    className="rounded-2xl bg-amber-50 border border-amber-200 p-4 text-sm text-amber-950 space-y-2"
                  >
                    <div className="font-bold flex items-center gap-2">
                      <AlertCircle className="h-4 w-4 text-amber-600" />
                      <span>Direct Email Forwarding Option</span>
                    </div>
                    <p className="text-xs sm:text-sm text-amber-900">
                      {serverMessage}
                    </p>
                    {siteConfig.contact.isConfigured.email && (
                      <a
                        href={buildMailtoHref()}
                        className="inline-flex items-center gap-2 rounded-xl bg-amber-900 text-white px-4 py-2 text-xs font-semibold hover:bg-amber-800"
                      >
                        <Mail className="h-4 w-4" />
                        <span>
                          Compose Email to {siteConfig.contact.email}
                        </span>
                      </a>
                    )}
                  </div>
                )}

                {status === "error" && (
                  <div
                    role="alert"
                    className="rounded-2xl bg-rose-50 border border-rose-200 p-4 text-sm text-rose-900 flex items-start gap-3"
                  >
                    <AlertCircle className="h-5 w-5 text-rose-600 shrink-0 mt-0.5" />
                    <div>
                      <div className="font-bold">Could Not Submit Enquiry</div>
                      <p>{serverMessage}</p>
                    </div>
                  </div>
                )}
              </form>
            </div>
          </motion.div>
        </div>
      </Container>
    </div>
  );
}

