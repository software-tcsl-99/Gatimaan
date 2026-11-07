"use client";

import React, { useState } from "react";
import {
  AlertCircle,
  CheckCircle2,
  Loader2,
  Mail,
  Send,
  ShieldAlert,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/lib/config";
import {
  validateDeletionRequest,
  type DeletionRequestPayload,
  type DeletionRequestType,
  type ValidationErrors,
} from "@/lib/validations";
import { cn } from "@/lib/utils";

const REQUEST_TYPE_LABELS: Record<DeletionRequestType, string> = {
  delete_account_and_data: "Delete Account and Associated Personal Data",
  deactivate_account: "Deactivate Account",
  request_stored_data_info: "Request Information About My Stored Data",
};

export function DeletionRequestForm() {
  const [formData, setFormData] = useState<DeletionRequestPayload>({
    fullName: "",
    email: "",
    employeeId: "",
    companyName: "",
    reason: "",
    requestType: "delete_account_and_data",
    confirmed: false,
  });

  const [errors, setErrors] = useState<
    ValidationErrors<DeletionRequestPayload>
  >({});
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "backend_unconfigured" | "error"
  >("idle");
  const [serverMessage, setServerMessage] = useState<string>("");
  const [referenceId, setReferenceId] = useState<string | null>(null);

  const handleChange = (
    field: keyof DeletionRequestPayload,
    value: string | boolean
  ) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const validation = validateDeletionRequest(formData);
    if (!validation.valid) {
      setErrors(validation.errors);
      return;
    }

    setErrors({});
    setStatus("submitting");
    setServerMessage("");

    try {
      const res = await fetch(siteConfig.api.deletionRequestRoute, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok && data.ok) {
        setStatus("success");
        setServerMessage(
          data.message ||
            "Your deletion request has been submitted for administrative verification."
        );
        setReferenceId(data.referenceId || null);
      } else if (data.code === "BACKEND_NOT_CONFIGURED") {
        setStatus("backend_unconfigured");
        setServerMessage(data.message);
      } else {
        setStatus("error");
        setServerMessage(
          data.message ||
            "Unable to submit the deletion request at this time. Please use the alternative support channel."
        );
        if (data.errors) {
          setErrors(data.errors);
        }
      }
    } catch {
      setStatus("error");
      setServerMessage(
        "A network error occurred while communicating with the server. Please use the official support email channel below."
      );
    }
  };

  const buildMailtoHref = () => {
    const targetEmail = siteConfig.contact.privacyEmail || "";
    const subject = encodeURIComponent(
      `[Gatimaan Data Request] ${REQUEST_TYPE_LABELS[formData.requestType]} — Emp ID: ${formData.employeeId}`
    );
    const body = encodeURIComponent(
      `Full Name: ${formData.fullName}\n` +
        `Registered Email: ${formData.email}\n` +
        `Employee ID: ${formData.employeeId}\n` +
        `Company Name: ${formData.companyName}\n` +
        `Request Type: ${REQUEST_TYPE_LABELS[formData.requestType]}\n` +
        `Reason: ${formData.reason || "Not specified"}\n` +
        `Confirmation: I acknowledge and confirm this request.`
    );
    return `mailto:${targetEmail}?subject=${subject}&body=${body}`;
  };

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 lg:p-10 shadow-sm">
      <div className="mb-6">
        <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
          Data Deletion Request Form
        </h3>
        <p className="mt-1.5 text-sm text-slate-600">
          Complete the details below using your registered employee credentials
          so your organization&rsquo;s administrator can verify and process your
          request.
        </p>
      </div>

      <form onSubmit={handleSubmit} noValidate className="space-y-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {/* Full Name */}
          <div>
            <label
              htmlFor="del-fullName"
              className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5"
            >
              Full Name <span className="text-rose-500">*</span>
            </label>
            <input
              id="del-fullName"
              type="text"
              value={formData.fullName}
              onChange={(e) => handleChange("fullName", e.target.value)}
              placeholder="Enter your full name"
              className={cn(
                "w-full rounded-xl border px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2",
                errors.fullName
                  ? "border-rose-400 focus:ring-rose-500/30"
                  : "border-slate-300 focus:border-indigo-600 focus:ring-indigo-500/20"
              )}
            />
            {errors.fullName && (
              <p className="mt-1 text-xs text-rose-600">{errors.fullName}</p>
            )}
          </div>

          {/* Registered Email Address */}
          <div>
            <label
              htmlFor="del-email"
              className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5"
            >
              Registered Email Address <span className="text-rose-500">*</span>
            </label>
            <input
              id="del-email"
              type="email"
              value={formData.email}
              onChange={(e) => handleChange("email", e.target.value)}
              placeholder="name@company.com"
              className={cn(
                "w-full rounded-xl border px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2",
                errors.email
                  ? "border-rose-400 focus:ring-rose-500/30"
                  : "border-slate-300 focus:border-indigo-600 focus:ring-indigo-500/20"
              )}
            />
            {errors.email && (
              <p className="mt-1 text-xs text-rose-600">{errors.email}</p>
            )}
          </div>

          {/* Employee ID */}
          <div>
            <label
              htmlFor="del-employeeId"
              className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5"
            >
              Employee ID <span className="text-rose-500">*</span>
            </label>
            <input
              id="del-employeeId"
              type="text"
              value={formData.employeeId}
              onChange={(e) => handleChange("employeeId", e.target.value)}
              placeholder="e.g., EMP-1042"
              className={cn(
                "w-full rounded-xl border px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2",
                errors.employeeId
                  ? "border-rose-400 focus:ring-rose-500/30"
                  : "border-slate-300 focus:border-indigo-600 focus:ring-indigo-500/20"
              )}
            />
            {errors.employeeId && (
              <p className="mt-1 text-xs text-rose-600">{errors.employeeId}</p>
            )}
          </div>

          {/* Company Name */}
          <div>
            <label
              htmlFor="del-companyName"
              className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5"
            >
              Company Name <span className="text-rose-500">*</span>
            </label>
            <input
              id="del-companyName"
              type="text"
              value={formData.companyName}
              onChange={(e) => handleChange("companyName", e.target.value)}
              placeholder="Your Employing Organization"
              className={cn(
                "w-full rounded-xl border px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2",
                errors.companyName
                  ? "border-rose-400 focus:ring-rose-500/30"
                  : "border-slate-300 focus:border-indigo-600 focus:ring-indigo-500/20"
              )}
            />
            {errors.companyName && (
              <p className="mt-1 text-xs text-rose-600">{errors.companyName}</p>
            )}
          </div>
        </div>

        {/* Request Type */}
        <div>
          <label
            htmlFor="del-requestType"
            className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5"
          >
            Request Type <span className="text-rose-500">*</span>
          </label>
          <select
            id="del-requestType"
            value={formData.requestType}
            onChange={(e) =>
              handleChange("requestType", e.target.value as DeletionRequestType)
            }
            className="w-full rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm text-slate-900 focus:border-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
          >
            <option value="delete_account_and_data">
              Delete Account and Associated Personal Data
            </option>
            <option value="deactivate_account">Deactivate Account</option>
            <option value="request_stored_data_info">
              Request Information About My Stored Data
            </option>
          </select>
          {errors.requestType && (
            <p className="mt-1 text-xs text-rose-600">{errors.requestType}</p>
          )}
        </div>

        {/* Reason for Deletion (Optional) */}
        <div>
          <label
            htmlFor="del-reason"
            className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5"
          >
            Reason for Deletion{" "}
            <span className="text-slate-400 font-normal">(Optional)</span>
          </label>
          <textarea
            id="del-reason"
            rows={3}
            value={formData.reason}
            onChange={(e) => handleChange("reason", e.target.value)}
            placeholder="Provide any context for your administrator (e.g., end of employment, role transition, data enquiry)..."
            className="w-full rounded-xl border border-slate-300 px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
          />
        </div>

        {/* Confirmation Checkbox */}
        <div className="rounded-2xl bg-slate-50 border border-slate-200 p-4">
          <label className="flex items-start gap-3 cursor-pointer">
            <input
              type="checkbox"
              checked={formData.confirmed}
              onChange={(e) => handleChange("confirmed", e.target.checked)}
              className="mt-1 h-4 w-4 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500"
            />
            <span className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              I confirm that I am the registered holder of this Employee ID and
              email address, and I understand that account deletion is subject
              to identity verification by my organization&rsquo;s administrator
              and applicable statutory, financial, and audit retention
              requirements.
            </span>
          </label>
          {errors.confirmed && (
            <p className="mt-2 text-xs text-rose-600 font-medium">
              {errors.confirmed}
            </p>
          )}
        </div>

        {/* Submit Button */}
        <div>
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
                <span>Verifying &amp; Submitting...</span>
              </>
            ) : (
              <>
                <Send className="h-4 w-4" />
                <span>Submit Deletion Request</span>
              </>
            )}
          </Button>
        </div>

        {/* Status Feedback Panels */}
        {status === "success" && (
          <div
            role="status"
            className="rounded-2xl bg-emerald-50 border border-emerald-200 p-5 text-sm text-emerald-900 flex items-start gap-3"
          >
            <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
            <div className="space-y-1">
              <div className="font-bold">Request Submitted for Verification</div>
              <p>{serverMessage}</p>
              {referenceId && (
                <p className="text-xs font-mono text-emerald-700">
                  Reference ID: {referenceId}
                </p>
              )}
            </div>
          </div>
        )}

        {status === "backend_unconfigured" && (
          <div
            role="alert"
            className="rounded-2xl bg-amber-50 border border-amber-200 p-5 text-sm text-amber-950 space-y-3"
          >
            <div className="flex items-start gap-3">
              <ShieldAlert className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
              <div className="space-y-1">
                <div className="font-bold">
                  Alternative Official Request Channel Required
                </div>
                <p className="text-xs sm:text-sm text-amber-900 leading-relaxed">
                  {serverMessage}
                </p>
              </div>
            </div>

            <div className="pl-8 space-y-2">
              {siteConfig.contact.isConfigured.email ? (
                <div className="flex flex-wrap items-center gap-3">
                  <a
                    href={buildMailtoHref()}
                    className="inline-flex items-center gap-2 rounded-xl bg-amber-900 text-white px-4 py-2 text-xs font-semibold hover:bg-amber-800 transition-colors"
                  >
                    <Mail className="h-4 w-4" />
                    <span>
                      Send Pre-Filled Request to{" "}
                      {siteConfig.contact.privacyEmail}
                    </span>
                  </a>
                </div>
              ) : (
                <p className="text-xs text-amber-800">
                  Please submit the verified details above to your employing
                  organization&rsquo;s designated{" "}
                  <strong>Company Administrator / HR Department</strong>, or
                  configure{" "}
                  <code className="rounded bg-amber-100 px-1 py-0.5">
                    DELETION_BACKEND_API_URL
                  </code>{" "}
                  and{" "}
                  <code className="rounded bg-amber-100 px-1 py-0.5">
                    NEXT_PUBLIC_PRIVACY_EMAIL
                  </code>{" "}
                  in your deployment environment.
                </p>
              )}
            </div>
          </div>
        )}

        {status === "error" && (
          <div
            role="alert"
            className="rounded-2xl bg-rose-50 border border-rose-200 p-5 text-sm text-rose-900 flex items-start gap-3"
          >
            <AlertCircle className="h-5 w-5 text-rose-600 shrink-0 mt-0.5" />
            <div className="space-y-1">
              <div className="font-bold">Submission Could Not Be Completed</div>
              <p>{serverMessage}</p>
            </div>
          </div>
        )}
      </form>
    </div>
  );
}

