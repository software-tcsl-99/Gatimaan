import React from "react";
import type { Metadata } from "next";
import { ContactSection } from "@/components/contact/ContactSection";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact Gatimaan for enterprise workforce operations, ERP licensing, technical support, or privacy and data deletion enquiries.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: `Contact Us | ${siteConfig.brand.name}`,
    description:
      "Reach out to the Gatimaan team for business enquiries, technical support, or privacy and data deletion assistance.",
    url: `${siteConfig.siteUrl}/contact`,
  },
};

export default function ContactPage() {
  return <ContactSection />;
}

