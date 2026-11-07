"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  UserCheck,
  Navigation,
  CalendarCheck2,
  ReceiptIndianRupee,
  Boxes,
  MapPinned,
  BrainCircuit,
  CheckCircle2,
  Sparkles,
  Shield,
  ArrowUpRight,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PLATFORM_MODULES, type PlatformModule } from "@/lib/constants";
import { cn } from "@/lib/utils";

const moduleIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  attendance: UserCheck,
  "gps-tracking": Navigation,
  "leave-management": CalendarCheck2,
  "expense-management": ReceiptIndianRupee,
  "material-management": Boxes,
  "field-crm": MapPinned,
  "ai-analytics": BrainCircuit,
};

function ModuleDashboardPreview({ module }: { module: PlatformModule }) {
  switch (module.previewType) {
    case "attendance":
      return (
        <div className="space-y-4">
          <div className="flex items-center justify-between rounded-xl bg-emerald-500/10 border border-emerald-400/25 p-3.5">
            <div>
              <div className="text-xs font-semibold text-emerald-300">
                Haversine Work-Zone Verification
              </div>
              <div className="text-[11px] text-slate-300 mt-0.5">
                Distance: 12.4m from Assigned HQ Coordinates • Inside Boundary
              </div>
            </div>
            <span className="rounded-lg bg-emerald-500/20 px-2.5 py-1 text-xs font-bold text-emerald-300">
              PRESENT
            </span>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="rounded-xl bg-white/[0.04] border border-white/10 p-3.5">
              <div className="text-[11px] text-slate-400">
                Front-Camera Selfie Proof
              </div>
              <div className="mt-1.5 text-sm font-semibold text-white">
                Cloudinary Verified
              </div>
              <div className="mt-1 text-[11px] text-cyan-300">
                Punch-In: 09:26 AM (Grace: 15m)
              </div>
            </div>
            <div className="rounded-xl bg-white/[0.04] border border-white/10 p-3.5">
              <div className="text-[11px] text-slate-400">
                Hardware Device Lock
              </div>
              <div className="mt-1.5 text-sm font-semibold text-white">
                Bound to Registered ID
              </div>
              <div className="mt-1 text-[11px] text-indigo-300">
                Anti-Proxy Guard Active
              </div>
            </div>
          </div>

          <div className="rounded-xl bg-slate-950/70 border border-white/10 p-3.5">
            <div className="text-xs font-semibold text-slate-300 mb-2.5">
              Automated Daily Classification Engine
            </div>
            <div className="flex flex-wrap gap-1.5 text-[11px]">
              {[
                { label: "Present", color: "bg-emerald-500/20 text-emerald-300" },
                { label: "Late", color: "bg-amber-500/20 text-amber-300" },
                { label: "Half Day", color: "bg-orange-500/20 text-orange-300" },
                { label: "Leave / Leave(Half)", color: "bg-cyan-500/20 text-cyan-300" },
                { label: "Holiday / Weekly Off", color: "bg-indigo-500/20 text-indigo-300" },
                { label: "Absent", color: "bg-rose-500/20 text-rose-300" },
              ].map((s) => (
                <span
                  key={s.label}
                  className={cn("px-2.5 py-1 rounded-md font-medium", s.color)}
                >
                  {s.label}
                </span>
              ))}
            </div>
          </div>
        </div>
      );

    case "gps":
      return (
        <div className="space-y-4">
          <div className="rounded-xl bg-slate-950/80 border border-cyan-500/25 p-4 relative overflow-hidden">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-semibold text-cyan-300">
                7-Stage Validation Pipeline &amp; Road Snapping
              </span>
              <span className="text-[11px] font-mono text-emerald-300">
                Kalman 2D Active
              </span>
            </div>
            <div className="grid grid-cols-3 gap-2 text-center">
              <div className="rounded-lg bg-white/[0.04] p-2.5 border border-white/10">
                <div className="text-xs font-bold text-white">2s / 5s / 10s</div>
                <div className="text-[10px] text-slate-400">
                  Velocity Sampling
                </div>
              </div>
              <div className="rounded-lg bg-white/[0.04] p-2.5 border border-white/10">
                <div className="text-xs font-bold text-cyan-300">&le; 50m</div>
                <div className="text-[10px] text-slate-400">
                  Valid Point Filter
                </div>
              </div>
              <div className="rounded-lg bg-white/[0.04] p-2.5 border border-white/10">
                <div className="text-xs font-bold text-emerald-300">30s</div>
                <div className="text-[10px] text-slate-400">
                  Device Heartbeat
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="rounded-xl bg-white/[0.04] border border-white/10 p-3.5">
              <div className="text-[11px] text-slate-400">
                Offline Resilience Queue
              </div>
              <div className="mt-1 text-sm font-semibold text-white">
                SQLite / Local Buffer
              </div>
              <div className="mt-1 text-[11px] text-cyan-300">
                Auto Batch Sync on Reconnect
              </div>
            </div>
            <div className="rounded-xl bg-white/[0.04] border border-white/10 p-3.5">
              <div className="text-[11px] text-slate-400">
                Self-Healing Watchdog
              </div>
              <div className="mt-1 text-sm font-semibold text-white">
                Remote restart_tracking
              </div>
              <div className="mt-1 text-[11px] text-amber-300">
                120s Offline Admin Alert
              </div>
            </div>
          </div>
        </div>
      );

    case "leave":
      return (
        <div className="space-y-4">
          <div className="rounded-xl bg-slate-950/75 border border-white/10 p-4">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-semibold text-white">
                6-Tier Scoped Entitlement Priority Hierarchy
              </span>
              <span className="text-[10px] text-cyan-300 font-mono">
                Double-Entry Ledger
              </span>
            </div>
            <div className="space-y-1.5">
              {[
                "1. Individual Employee Override (Highest Priority)",
                "2. Role Code Rule (ORG-DEPT-LVL-GRD)",
                "3. Authority Level Rule (Director to Trainee)",
                "4. Grade Rule & 5. Department Rule",
                "6. Company Default Policy Rule",
              ].map((tier, idx) => (
                <div
                  key={tier}
                  className={cn(
                    "flex items-center justify-between rounded-lg px-3 py-1.5 text-xs border",
                    idx === 0
                      ? "bg-indigo-600/20 border-indigo-400/40 text-cyan-200 font-medium"
                      : "bg-white/[0.03] border-white/5 text-slate-300"
                  )}
                >
                  <span>{tier}</span>
                  <span className="text-[10px] text-slate-400">Resolved</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-between rounded-xl bg-white/[0.04] border border-white/10 p-3.5 text-xs">
            <span className="text-slate-300">Immutable Ledger Entries:</span>
            <div className="flex flex-wrap gap-1.5 font-mono text-[10px]">
              {["GRANT", "APPROVE", "CANCEL", "ADJUST", "ENCASH"].map((op) => (
                <span
                  key={op}
                  className="rounded bg-indigo-500/20 border border-indigo-400/30 px-2 py-0.5 text-indigo-200"
                >
                  {op}
                </span>
              ))}
            </div>
          </div>
        </div>
      );

    case "expense":
      return (
        <div className="space-y-4">
          <div className="rounded-xl bg-indigo-950/40 border border-indigo-400/30 p-4">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-[11px] text-indigo-300 font-medium">
                  Append-Only Petty Cash Wallet (Integer-Paise Precision)
                </div>
                <div className="text-lg font-bold text-white mt-0.5">
                  Balance: ₹14,250.00{" "}
                  <span className="text-xs font-normal text-slate-400">
                    / Base Limit ₹15,000.00
                  </span>
                </div>
              </div>
              <span className="rounded-lg bg-cyan-500/20 border border-cyan-400/30 px-2.5 py-1 text-[11px] font-semibold text-cyan-300">
                Auto-Synced
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 text-xs">
            <div className="rounded-xl bg-white/[0.04] border border-white/10 p-3.5">
              <div className="text-slate-400 text-[11px]">
                Multi-Dimensional Matrix
              </div>
              <div className="mt-1 font-semibold text-white">
                Level × Grade × City (A+, A, B, C)
              </div>
              <div className="mt-1 text-[11px] text-cyan-300">
                Single &amp; Group Lodging Sharing Rules
              </div>
            </div>
            <div className="rounded-xl bg-white/[0.04] border border-white/10 p-3.5">
              <div className="text-slate-400 text-[11px]">
                3-Tier Verification &amp; UTR
              </div>
              <div className="mt-1 font-semibold text-white">
                Manager → CFO → Accounts
              </div>
              <div className="mt-1 text-[11px] text-emerald-300">
                Full-Payment Exception Support
              </div>
            </div>
          </div>
        </div>
      );

    case "material":
      return (
        <div className="space-y-4">
          <div className="rounded-xl bg-slate-950/80 border border-cyan-400/30 p-4">
            <div className="flex items-center justify-between mb-2.5">
              <span className="text-xs font-semibold text-white">
                Unit-Level Serialized Barcode Custody Lifecycle
              </span>
              <span className="rounded bg-emerald-500/20 px-2 py-0.5 text-[10px] font-semibold text-emerald-300">
                Tally Prime XML Live
              </span>
            </div>
            <div className="grid grid-cols-4 gap-2 text-center text-[11px]">
              {[
                { step: "Store Dispatch", sub: "RDC / DC" },
                { step: "Peer Transfer", sub: "GPS Photo" },
                { step: "Split / Merge", sub: "Batch Sync" },
                { step: "Return / Close", sub: "Tally Voucher" },
              ].map((item) => (
                <div
                  key={item.step}
                  className="rounded-lg bg-white/[0.04] border border-white/10 p-2"
                >
                  <div className="font-semibold text-cyan-300">{item.step}</div>
                  <div className="text-[10px] text-slate-400 mt-0.5">
                    {item.sub}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-xl bg-white/[0.04] border border-white/10 p-3.5 flex items-center justify-between text-xs">
            <div>
              <div className="font-semibold text-white">
                Bidirectional Tally Prime XML over HTTP
              </div>
              <div className="text-[11px] text-slate-400 mt-0.5">
                Auto-posts Godown Transfer, Stock Journal, Delivery Note &amp;
                Batch Vouchers
              </div>
            </div>
            <span className="font-mono text-[11px] text-indigo-300 shrink-0 ml-2">
              XML Sync
            </span>
          </div>
        </div>
      );

    case "crm":
      return (
        <div className="space-y-4">
          <div className="rounded-xl bg-slate-950/80 border border-white/10 p-4 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-white">
                Strict Field Visit Execution Guards
              </span>
              <span className="rounded-full bg-cyan-500/20 border border-cyan-400/30 px-2.5 py-0.5 text-[10px] font-semibold text-cyan-300">
                In Progress
              </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-xs">
              <div className="rounded-lg bg-white/[0.04] border border-white/10 p-2.5">
                <div className="text-[10px] text-slate-400">Guard 01</div>
                <div className="font-semibold text-white mt-0.5">
                  Active Attendance
                </div>
                <div className="text-[10px] text-emerald-400">
                  Must be Punched In
                </div>
              </div>
              <div className="rounded-lg bg-white/[0.04] border border-white/10 p-2.5">
                <div className="text-[10px] text-slate-400">Guard 02</div>
                <div className="font-semibold text-white mt-0.5">
                  Concurrency Lock
                </div>
                <div className="text-[10px] text-cyan-300">
                  1 Active Visit Max
                </div>
              </div>
              <div className="rounded-lg bg-white/[0.04] border border-white/10 p-2.5">
                <div className="text-[10px] text-slate-400">Guard 03</div>
                <div className="font-semibold text-white mt-0.5">
                  Dual Verification
                </div>
                <div className="text-[10px] text-indigo-300">
                  Start &amp; End GPS+Selfie
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-xl bg-white/[0.04] border border-white/10 p-3.5 flex items-center justify-between text-xs">
            <span className="text-slate-300">
              Workforce Task Priority Engine:
            </span>
            <div className="flex gap-2">
              <span className="rounded bg-emerald-500/20 px-2 py-0.5 text-emerald-300">
                Low
              </span>
              <span className="rounded bg-amber-500/20 px-2 py-0.5 text-amber-300">
                Medium
              </span>
              <span className="rounded bg-rose-500/20 px-2 py-0.5 text-rose-300">
                High + Overdue SLA
              </span>
            </div>
          </div>
        </div>
      );

    case "analytics":
      return (
        <div className="space-y-4">
          <div className="rounded-xl bg-gradient-to-r from-indigo-950/70 via-violet-950/60 to-slate-950 border border-indigo-400/30 p-4">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-cyan-400" />
                <span className="text-xs font-semibold text-white">
                  Google Gemini AI + Deterministic Weighted HR Model
                </span>
              </div>
              <span className="text-sm font-bold text-cyan-300">92 / 100</span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center text-[11px]">
              <div className="rounded-lg bg-white/[0.05] p-2">
                <div className="font-bold text-white">35%</div>
                <div className="text-[10px] text-slate-300">Attendance</div>
              </div>
              <div className="rounded-lg bg-white/[0.05] p-2">
                <div className="font-bold text-white">30%</div>
                <div className="text-[10px] text-slate-300">Productivity</div>
              </div>
              <div className="rounded-lg bg-white/[0.05] p-2">
                <div className="font-bold text-white">25%</div>
                <div className="text-[10px] text-slate-300">Punctuality</div>
              </div>
              <div className="rounded-lg bg-white/[0.05] p-2">
                <div className="font-bold text-white">10%</div>
                <div className="text-[10px] text-slate-300">Break Discipline</div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 text-xs">
            <div className="rounded-xl bg-white/[0.04] border border-white/10 p-3.5">
              <div className="text-[11px] text-slate-400">AI Output</div>
              <div className="mt-1 font-semibold text-white">
                3 Coaching Actions + 2 Risk Areas
              </div>
              <div className="mt-1 text-[11px] text-cyan-300">
                12 KPIs over 30-Day Window
              </div>
            </div>
            <div className="rounded-xl bg-white/[0.04] border border-white/10 p-3.5">
              <div className="text-[11px] text-slate-400">
                Audit-Ready Exports
              </div>
              <div className="mt-1 font-semibold text-white">
                One-Click PDF &amp; Excel/CSV
              </div>
              <div className="mt-1 text-[11px] text-emerald-300">
                FCM + Expo + Socket.IO Alerts
              </div>
            </div>
          </div>
        </div>
      );
  }
}

export function Modules() {
  const [selectedId, setSelectedId] = useState<string>(PLATFORM_MODULES[0].id);
  const activeModule =
    PLATFORM_MODULES.find((m) => m.id === selectedId) || PLATFORM_MODULES[0];

  return (
    <section
      id="modules"
      className="relative py-24 lg:py-32 bg-[#070B1E] text-white overflow-hidden"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute top-1/3 left-1/2 -translate-x-1/2 h-[500px] w-[850px] rounded-full bg-indigo-600/15 blur-[140px]" />

      <Container className="relative z-10">
        <SectionHeading
          badge="7 Core Platform Modules"
          title="Everything your business needs. Connected in one platform."
          description="Explore Gatimaan's seven integrated enterprise modules engineered for complete field-to-finance control."
          theme="dark"
        />

        {/* Module Navigation Tabs */}
        <div
          className="mt-12 flex items-center gap-2 overflow-x-auto pb-3 no-scrollbar lg:justify-center"
          role="tablist"
          aria-label="Core Platform Modules"
        >
          {PLATFORM_MODULES.map((mod) => {
            const Icon = moduleIcons[mod.id] || Shield;
            const isSelected = mod.id === selectedId;
            return (
              <button
                key={mod.id}
                type="button"
                role="tab"
                aria-selected={isSelected}
                onClick={() => setSelectedId(mod.id)}
                className={cn(
                  "relative flex items-center gap-2.5 whitespace-nowrap rounded-xl px-4 py-3 text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer shrink-0 border",
                  isSelected
                    ? "bg-gradient-to-r from-indigo-600 to-violet-600 text-white border-indigo-400/50 shadow-lg shadow-indigo-600/25"
                    : "bg-slate-900/70 text-slate-300 border-white/10 hover:border-white/25 hover:text-white"
                )}
              >
                <Icon
                  className={cn(
                    "h-4 w-4",
                    isSelected ? "text-cyan-300" : "text-slate-400"
                  )}
                />
                <span className="font-mono text-[11px] opacity-75">
                  {mod.number}
                </span>
                <span>{mod.shortTitle}</span>
              </button>
            );
          })}
        </div>

        {/* Dynamic Module Showcase Panel */}
        <div className="mt-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeModule.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35 }}
              className="rounded-3xl border border-white/15 bg-slate-900/65 backdrop-blur-2xl p-6 sm:p-8 lg:p-10 shadow-2xl"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
                {/* Left: Module Details & Features */}
                <div className="lg:col-span-6 space-y-6">
                  <div className="inline-flex items-center gap-2 rounded-full bg-indigo-500/15 border border-indigo-400/30 px-3.5 py-1 text-xs font-semibold text-cyan-300">
                    <span>MODULE {activeModule.number}</span>
                    <span>•</span>
                    <span>{activeModule.badge}</span>
                  </div>

                  <div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                      {activeModule.title}
                    </h3>
                    <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed">
                      {activeModule.description}
                    </p>
                  </div>

                  <ul className="space-y-3">
                    {activeModule.features.map((feat) => (
                      <li
                        key={feat}
                        className="flex items-start gap-3 text-sm text-slate-200"
                      >
                        <CheckCircle2 className="h-4 w-4 text-cyan-400 mt-1 shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Right: Interactive Visual & Spec Metrics */}
                <div className="lg:col-span-6 space-y-5">
                  <div className="rounded-2xl border border-white/10 bg-[#080D21] p-5 shadow-inner">
                    <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4">
                      <div className="flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-cyan-400" />
                        <span className="text-xs font-semibold uppercase tracking-wider text-slate-300">
                          Live Architecture Preview — {activeModule.shortTitle}
                        </span>
                      </div>
                      <ArrowUpRight className="h-4 w-4 text-slate-500" />
                    </div>

                    <ModuleDashboardPreview module={activeModule} />
                  </div>

                  {/* Technical Spec Highlights */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {activeModule.technicalHighlights.map((hl) => (
                      <div
                        key={hl.label}
                        className="rounded-xl bg-white/[0.03] border border-white/10 px-4 py-3"
                      >
                        <div className="text-[11px] text-slate-400">
                          {hl.label}
                        </div>
                        <div className="mt-0.5 text-xs sm:text-sm font-semibold text-cyan-300">
                          {hl.value}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </Container>
    </section>
  );
}

