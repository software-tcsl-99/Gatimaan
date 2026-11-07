import React from "react";
import type { Metadata } from "next";
import { LegalLayout } from "@/components/legal/LegalLayout";
import { TableOfContents } from "@/components/legal/TableOfContents";
import { PrivacyContent } from "@/components/legal/PrivacyContent";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Comprehensive Privacy Policy for the Gatimaan Enterprise Workforce Operations & ERP Platform, detailing location, camera, attendance, material movement, and third-party service disclosures.",
  alternates: {
    canonical: "/privacy-policy",
  },
  openGraph: {
    title: `Privacy Policy | ${siteConfig.brand.name}`,
    description:
      "Learn how Gatimaan collects, verifies, protects, and processes workforce, attendance, GPS telemetry, expense, and inventory data.",
    url: `${siteConfig.siteUrl}/privacy-policy`,
  },
};

export default function PrivacyPolicyPage() {
  return (
    <LegalLayout
      title="Privacy Policy"
      subtitle="Transparent disclosure of how Gatimaan collects, verifies, processes, and protects workforce, attendance, GPS tracking, expense, and inventory information."
      effectiveDate={siteConfig.legal.privacyEffectiveDate}
      lastUpdated={siteConfig.legal.privacyLastUpdated}
      sidebar={<TableOfContents />}
    >
      <PrivacyContent />
    </LegalLayout>
  );
}

