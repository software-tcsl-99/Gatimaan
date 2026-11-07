"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  MapPin,
  ShieldCheck,
  QrCode,
  Activity,
  CheckCircle2,
  Sparkles,
  ChevronDown,
  Wallet,
  Clock,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-between pt-28 pb-14 lg:pt-36 lg:pb-20 overflow-hidden bg-[#060919]"
    >
      {/* Animated Background Glows & Grid */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.16]"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(99, 102, 241, 0.18) 1px, transparent 1px), linear-gradient(to bottom, rgba(99, 102, 241, 0.18) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
        <motion.div
          animate={{
            scale: [1, 1.08, 1],
            opacity: [0.35, 0.5, 0.35],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-40 left-1/2 -translate-x-1/2 h-[540px] w-[920px] rounded-full bg-gradient-to-tr from-indigo-600/35 via-violet-600/25 to-cyan-500/20 blur-[130px]"
        />
        <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-[#060919] to-transparent" />
      </div>

      <Container className="relative z-10 my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          {/* Left Column: Brand Messaging & CTAs */}
          <div className="lg:col-span-6 text-left space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className="inline-flex items-center gap-2.5 rounded-full bg-indigo-500/10 border border-indigo-400/25 px-4 py-1.5 text-xs sm:text-sm font-medium text-cyan-300 backdrop-blur-md"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400" />
              </span>
              <span>Enterprise Workforce &amp; ERP Operations Platform</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.08 }}
              className="text-4xl sm:text-5xl xl:text-6xl font-extrabold tracking-tight text-white leading-[1.08]"
            >
              Driven by code,{" "}
              <span className="bg-gradient-to-r from-indigo-400 via-violet-300 to-cyan-300 bg-clip-text text-transparent">
                managed with precision
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.16 }}
              className="text-base sm:text-lg xl:text-xl text-slate-300 leading-relaxed max-w-xl"
            >
              Gatimaan brings your workforce, field operations, attendance,
              inventory, expenses, and business workflows together in one
              intelligent enterprise platform.
            </motion.p>

            {/* Primary CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.24 }}
              className="pt-2 flex flex-wrap items-center gap-4"
            >
              <Button variant="primary" size="lg" href="#modules">
                <span>Explore Platform</span>
                <ArrowRight className="h-4 w-4" />
              </Button>
            </motion.div>

            {/* Quick Capability Pills */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="pt-4 grid grid-cols-2 sm:grid-cols-3 gap-3 border-t border-white/10 text-xs text-slate-300"
            >
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-cyan-400 shrink-0" />
                <span>Multi-Tenant Isolation</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-cyan-400 shrink-0" />
                <span>2s Adaptive GPS &amp; Kalman</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-cyan-400 shrink-0" />
                <span>Live Tally Prime XML Sync</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Enterprise Command Dashboard + Mobile Mockup Showcase */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.18 }}
            className="lg:col-span-6 relative"
          >
            {/* Main Enterprise Desktop Dashboard Window */}
            <div className="relative rounded-2xl border border-white/15 bg-slate-900/80 backdrop-blur-2xl shadow-2xl shadow-indigo-950/60 overflow-hidden">
              {/* Top Window Header */}
              <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 bg-slate-950/70">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-rose-500/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
                  <span className="ml-2 text-xs font-medium text-slate-400">
                    Gatimaan Enterprise Command Center — Multi-Tenant Console
                  </span>
                </div>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/15 border border-emerald-400/30 px-2.5 py-0.5 text-[10px] font-semibold text-emerald-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Socket.IO Live
                </span>
              </div>

              {/* Dashboard Body */}
              <div className="p-4 sm:p-5 space-y-4">
                {/* Top KPI Strip */}
                <div className="grid grid-cols-3 gap-3">
                  <div className="rounded-xl bg-white/[0.04] border border-white/10 p-3">
                    <div className="flex items-center justify-between text-[11px] text-slate-400">
                      <span>Workforce Active</span>
                      <Clock className="h-3.5 w-3.5 text-cyan-400" />
                    </div>
                    <div className="mt-1 text-lg sm:text-xl font-bold text-white">
                      96.4%
                    </div>
                    <div className="text-[10px] text-emerald-400">
                      Haversine Zone Verified
                    </div>
                  </div>

                  <div className="rounded-xl bg-white/[0.04] border border-white/10 p-3">
                    <div className="flex items-center justify-between text-[11px] text-slate-400">
                      <span>Barcoded Units</span>
                      <QrCode className="h-3.5 w-3.5 text-violet-400" />
                    </div>
                    <div className="mt-1 text-lg sm:text-xl font-bold text-white">
                      14,820
                    </div>
                    <div className="text-[10px] text-cyan-300">
                      Tally Prime XML Synced
                    </div>
                  </div>

                  <div className="rounded-xl bg-white/[0.04] border border-white/10 p-3">
                    <div className="flex items-center justify-between text-[11px] text-slate-400">
                      <span>Gemini AI Score</span>
                      <Sparkles className="h-3.5 w-3.5 text-amber-300" />
                    </div>
                    <div className="mt-1 text-lg sm:text-xl font-bold text-white">
                      91 / 100
                    </div>
                    <div className="text-[10px] text-indigo-300">
                      12-Metric 30d Index
                    </div>
                  </div>
                </div>

                {/* Live Employee Location Tracking Visualization */}
                <div className="relative rounded-xl border border-indigo-500/25 bg-[#090E24] p-4 overflow-hidden">
                  <div
                    className="absolute inset-0 opacity-20"
                    style={{
                      backgroundImage:
                        "radial-gradient(circle at 2px 2px, rgba(56, 189, 248, 0.35) 1px, transparent 0)",
                      backgroundSize: "20px 20px",
                    }}
                  />
                  <div className="relative z-10 flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-cyan-400" />
                      <span className="text-xs font-semibold text-white">
                        Live Field Telemetry &amp; 2D Kalman Road Snapping
                      </span>
                    </div>
                    <span className="text-[10px] font-mono text-cyan-300 bg-cyan-500/10 border border-cyan-400/20 px-2 py-0.5 rounded">
                      2s Speed-Adaptive
                    </span>
                  </div>

                  {/* Simulated SVG Route Map */}
                  <div className="relative h-36 w-full rounded-lg bg-slate-950/80 border border-white/10 overflow-hidden p-3 flex flex-col justify-between">
                    <svg
                      className="absolute inset-0 h-full w-full"
                      viewBox="0 0 400 140"
                      fill="none"
                    >
                      {/* Roads */}
                      <path
                        d="M 10 110 Q 95 95, 160 65 T 310 45 T 390 25"
                        stroke="rgba(99, 102, 241, 0.25)"
                        strokeWidth="6"
                        strokeLinecap="round"
                      />
                      {/* Snapped Active Trajectory */}
                      <motion.path
                        d="M 10 110 Q 95 95, 160 65 T 310 45"
                        stroke="url(#routeGradient)"
                        strokeWidth="3"
                        strokeLinecap="round"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{
                          duration: 2.5,
                          repeat: Infinity,
                          repeatType: "reverse",
                          ease: "easeInOut",
                        }}
                      />
                      <defs>
                        <linearGradient
                          id="routeGradient"
                          x1="0"
                          y1="0"
                          x2="1"
                          y2="0"
                        >
                          <stop offset="0%" stopColor="#6366F1" />
                          <stop offset="100%" stopColor="#22D3EE" />
                        </linearGradient>
                      </defs>
                      {/* Checkpoints */}
                      <circle cx="40" cy="104" r="4" fill="#818CF8" />
                      <circle cx="160" cy="65" r="4.5" fill="#38BDF8" />
                      <circle cx="310" cy="45" r="6" fill="#22D3EE" />
                    </svg>

                    <div className="relative z-10 flex items-center justify-between text-[11px]">
                      <span className="rounded bg-slate-900/90 border border-white/10 px-2 py-0.5 text-slate-300">
                        HQ Work-Zone (Inside • 14m)
                      </span>
                      <span className="rounded bg-cyan-500/15 border border-cyan-400/30 px-2 py-0.5 text-cyan-300 font-mono">
                        Heartbeat: 94% Batt • 4G
                      </span>
                    </div>

                    <div className="relative z-10 flex items-center justify-between text-[11px]">
                      <span className="text-slate-400">
                        Route: <strong className="text-white">38.4 km</strong>{" "}
                        (Monotonic Haversine)
                      </span>
                      <span className="text-emerald-400 font-medium">
                        Customer Visit #2 In Progress
                      </span>
                    </div>
                  </div>
                </div>

                {/* Bottom Row: Expense & Material Live Feed */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="rounded-xl bg-white/[0.03] border border-white/10 p-3 flex items-center gap-3">
                    <div className="h-9 w-9 rounded-lg bg-indigo-500/20 border border-indigo-400/30 flex items-center justify-center text-indigo-300 shrink-0">
                      <Wallet className="h-4 w-4" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-xs font-semibold text-white truncate">
                        Group Claim EXP-2026-000412
                      </div>
                      <div className="text-[11px] text-slate-400 truncate">
                        City Class A+ • Petty Cash Synced
                      </div>
                    </div>
                  </div>

                  <div className="rounded-xl bg-white/[0.03] border border-white/10 p-3 flex items-center gap-3">
                    <div className="h-9 w-9 rounded-lg bg-cyan-500/20 border border-cyan-400/30 flex items-center justify-center text-cyan-300 shrink-0">
                      <ShieldCheck className="h-4 w-4" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-xs font-semibold text-white truncate">
                        Device Hardware Lock Active
                      </div>
                      <div className="text-[11px] text-slate-400 truncate">
                        Selfie + Street Address Verified
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Mobile App Overlay Card (Bottom-Left) */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
              className="hidden sm:block absolute -bottom-7 -left-7 z-20 w-64 rounded-2xl border border-cyan-400/35 bg-slate-950/95 p-3.5 shadow-2xl shadow-black/80 backdrop-blur-xl"
            >
              <div className="flex items-center justify-between border-b border-white/10 pb-2 mb-2.5">
                <span className="text-[11px] font-semibold text-white flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-emerald-400" />
                  Gatimaan Mobile App
                </span>
                <span className="text-[10px] font-mono text-cyan-300">
                  ORG-ENG-L2
                </span>
              </div>
              <div className="space-y-2 text-[11px]">
                <div className="flex items-center justify-between rounded-lg bg-white/5 px-2.5 py-1.5">
                  <span className="text-slate-300">Punch-In Selfie</span>
                  <span className="text-emerald-400 font-semibold">
                    Verified (09:28)
                  </span>
                </div>
                <div className="flex items-center justify-between rounded-lg bg-white/5 px-2.5 py-1.5">
                  <span className="text-slate-300">RDC Custody</span>
                  <span className="text-cyan-300 font-semibold">
                    6 Barcodes Active
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Floating Telemetry Badge (Top-Right) */}
            <motion.div
              animate={{ y: [0, 7, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="hidden sm:flex absolute -top-5 -right-4 z-20 items-center gap-2.5 rounded-xl border border-indigo-400/35 bg-slate-950/90 px-3.5 py-2.5 shadow-xl backdrop-blur-xl"
            >
              <Activity className="h-4 w-4 text-cyan-400" />
              <div className="text-xs">
                <div className="font-semibold text-white">7-Stage GPS Guard</div>
                <div className="text-[10px] text-slate-400">
                  Anti-Mock &amp; Teleportation Filter
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </Container>

      {/* Scroll Indicator */}
      <div className="relative z-10 mt-10 flex justify-center">
        <a
          href="#overview"
          aria-label="Scroll to Platform Overview"
          className="inline-flex flex-col items-center gap-1.5 text-xs text-slate-400 hover:text-cyan-300 transition-colors"
        >
          <span>Discover Complete Operational Visibility</span>
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 1.8, repeat: Infinity }}
          >
            <ChevronDown className="h-4 w-4 text-cyan-400" />
          </motion.div>
        </a>
      </div>
    </section>
  );
}

