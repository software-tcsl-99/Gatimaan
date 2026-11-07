import React from "react";
import Link from "next/link";
import { ShieldCheck, Calendar, Clock, Trash2, ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/lib/config";

interface LegalLayoutProps {
  title: string;
  subtitle: string;
  effectiveDate: string;
  lastUpdated: string;
  sidebar?: React.ReactNode;
  children: React.ReactNode;
}

export function LegalLayout({
  title,
  subtitle,
  effectiveDate,
  lastUpdated,
  sidebar,
  children,
}: LegalLayoutProps) {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      {/* Dark Enterprise Header Banner */}
      <section className="relative pt-32 pb-16 bg-[#060919] text-white border-b border-white/10 overflow-hidden">
        <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 h-72 w-[720px] rounded-full bg-gradient-to-r from-indigo-600/25 via-violet-600/20 to-cyan-500/15 blur-[110px]" />

        <Container className="relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-indigo-500/10 border border-indigo-400/25 px-3.5 py-1 text-xs font-semibold text-cyan-300 mb-4">
              <ShieldCheck className="h-3.5 w-3.5" />
              <span>{siteConfig.brand.name} Legal &amp; Google Play Compliance</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
              {title}
            </h1>

            <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
              {subtitle}
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-4 text-xs text-slate-300">
              <div className="inline-flex items-center gap-1.5 rounded-lg bg-white/5 border border-white/10 px-3 py-1.5">
                <Calendar className="h-3.5 w-3.5 text-cyan-400" />
                <span>Effective Date: {effectiveDate}</span>
              </div>
              <div className="inline-flex items-center gap-1.5 rounded-lg bg-white/5 border border-white/10 px-3 py-1.5">
                <Clock className="h-3.5 w-3.5 text-cyan-400" />
                <span>Last Updated: {lastUpdated}</span>
              </div>
              <Link
                href="/data-deletion"
                className="inline-flex items-center gap-1.5 rounded-lg bg-indigo-600/30 hover:bg-indigo-600/50 border border-indigo-400/40 px-3 py-1.5 text-cyan-200 font-medium transition-colors"
              >
                <Trash2 className="h-3.5 w-3.5" />
                <span>Account &amp; Data Deletion Portal</span>
                <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* Main Content Area */}
      <Container className="py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {sidebar && <div className="lg:col-span-4 xl:col-span-3">{sidebar}</div>}
          <div
            className={
              sidebar
                ? "lg:col-span-8 xl:col-span-9"
                : "lg:col-span-12 max-w-4xl mx-auto w-full"
            }
          >
            {children}
          </div>
        </div>
      </Container>
    </div>
  );
}

