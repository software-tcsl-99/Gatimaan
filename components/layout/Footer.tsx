import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, ShieldCheck, ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/lib/config";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#050814] border-t border-white/10 text-slate-400">
      <Container className="py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Column 1: Brand & Positioning */}
          <div className="lg:col-span-4 space-y-4">
            <Link href="/" className="inline-flex items-center gap-3 group">
              <div className="relative h-10 w-10 overflow-hidden rounded-xl border border-indigo-400/30 bg-white shadow-md">
                <Image
                  src={siteConfig.brand.logoPath}
                  alt={`${siteConfig.brand.name} Logo`}
                  fill
                  sizes="40px"
                  className="object-cover"
                />
              </div>
              <span className="text-xl font-bold tracking-tight text-white">
                {siteConfig.brand.name}
              </span>
            </Link>

            <p className="text-sm font-medium text-cyan-400">
              &ldquo;{siteConfig.brand.tagline}&rdquo;
            </p>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              {siteConfig.brand.positioning}
            </p>

            <div className="pt-2 inline-flex items-center gap-2 rounded-lg bg-white/[0.03] border border-white/10 px-3 py-1.5 text-xs text-slate-300">
              <ShieldCheck className="h-4 w-4 text-cyan-400 shrink-0" />
              <span>Multi-Tenant Enterprise ERP &amp; Field Operations</span>
            </div>
          </div>

          {/* Column 2: Platform */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-white">
              Platform
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  href="/#overview"
                  className="hover:text-cyan-300 transition-colors"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  href="/#modules"
                  className="hover:text-cyan-300 transition-colors"
                >
                  Workforce Management
                </Link>
              </li>
              <li>
                <Link
                  href="/#modules"
                  className="hover:text-cyan-300 transition-colors"
                >
                  GPS Tracking
                </Link>
              </li>
              <li>
                <Link
                  href="/#modules"
                  className="hover:text-cyan-300 transition-colors"
                >
                  Expense Management
                </Link>
              </li>
              <li>
                <Link
                  href="/#modules"
                  className="hover:text-cyan-300 transition-colors"
                >
                  Material Management
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Company & Legal */}
          <div className="lg:col-span-2 space-y-6">
            <div className="space-y-3">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-white">
                Company
              </h3>
              <ul className="space-y-2.5 text-sm">
                <li>
                  <Link
                    href="/#how-it-works"
                    className="hover:text-cyan-300 transition-colors"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="hover:text-cyan-300 transition-colors"
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-3">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-white">
                Legal
              </h3>
              <ul className="space-y-2.5 text-sm">
                <li>
                  <Link
                    href="/privacy-policy"
                    className="hover:text-cyan-300 transition-colors"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/data-deletion"
                    className="hover:text-cyan-300 transition-colors"
                  >
                    Data Deletion
                  </Link>
                </li>
                {siteConfig.legal.approvedTermsUrl && (
                  <li>
                    <Link
                      href={siteConfig.legal.approvedTermsUrl}
                      className="hover:text-cyan-300 transition-colors"
                    >
                      Terms &amp; Conditions
                    </Link>
                  </li>
                )}
              </ul>
            </div>
          </div>

          {/* Column 4: Contact */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-white">
              Contact
            </h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2.5">
                <Mail className="h-4 w-4 text-cyan-400 mt-1 shrink-0" />
                <div>
                  <div className="text-xs text-slate-500">Official Email</div>
                  {siteConfig.contact.isConfigured.email ? (
                    <a
                      href={`mailto:${siteConfig.contact.email}`}
                      className="text-slate-200 hover:text-cyan-300 break-all transition-colors"
                    >
                      {siteConfig.contact.email}
                    </a>
                  ) : (
                    <Link
                      href="/contact"
                      className="text-slate-300 hover:text-cyan-300 inline-flex items-center gap-1 transition-colors"
                    >
                      <span>Submit via Contact Desk</span>
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </Link>
                  )}
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Phone className="h-4 w-4 text-cyan-400 mt-1 shrink-0" />
                <div>
                  <div className="text-xs text-slate-500">Official Phone</div>
                  {siteConfig.contact.isConfigured.phone ? (
                    <a
                      href={`tel:${siteConfig.contact.phone}`}
                      className="text-slate-200 hover:text-cyan-300 transition-colors"
                    >
                      {siteConfig.contact.phone}
                    </a>
                  ) : (
                    <span className="text-slate-400 text-xs">
                      Configurable via Organization Settings
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            Copyright &copy; {currentYear} {siteConfig.brand.name}. All rights
            reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="/privacy-policy"
              className="hover:text-slate-300 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/data-deletion"
              className="hover:text-slate-300 transition-colors"
            >
              Account &amp; Data Deletion
            </Link>
            <Link
              href="/contact"
              className="hover:text-slate-300 transition-colors"
            >
              Support &amp; Enquiries
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}

