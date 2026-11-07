import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { siteConfig } from "@/lib/config";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-jakarta",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: `${siteConfig.brand.name} — Enterprise Workforce Operations & ERP Platform`,
    template: `%s | ${siteConfig.brand.name}`,
  },
  description: siteConfig.brand.positioning,
  keywords: [
    "Gatimaan",
    "Enterprise Workforce Management",
    "ERP Platform",
    "Location-Verified Attendance",
    "Real-Time GPS Field Tracking",
    "Barcode Material Management",
    "Tally Prime Integration",
    "Expense & Petty Cash Management",
    "Field CRM Customer Visits",
    "AI Workforce Analytics",
  ],
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: siteConfig.brand.logoPath,
    apple: siteConfig.brand.logoPath,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.siteUrl,
    siteName: siteConfig.brand.name,
    title: `${siteConfig.brand.name} — ${siteConfig.brand.tagline}`,
    description: siteConfig.brand.positioning,
    images: [
      {
        url: siteConfig.brand.logoPath,
        width: 512,
        height: 512,
        alt: `${siteConfig.brand.name} Enterprise Platform`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.brand.name} — ${siteConfig.brand.tagline}`,
    description: siteConfig.brand.positioning,
    images: [siteConfig.brand.logoPath],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={jakarta.variable}>
      <body className="font-sans antialiased min-h-screen flex flex-col bg-[#060919] text-white">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

