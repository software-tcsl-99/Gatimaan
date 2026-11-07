"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Smartphone,
  ShieldCheck,
  MapPin,
  Clock,
  Calendar,
  Wallet,
  QrCode,
  Bell,
  UserCheck,
  BatteryCharging,
  Wifi,
  CheckCircle2,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { siteConfig } from "@/lib/config";
import { MOBILE_SHOWCASE_SCREENS } from "@/lib/constants";
import { cn } from "@/lib/utils";

const screenIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  "login-security": ShieldCheck,
  "attendance-shift": Clock,
  "live-gps": MapPin,
  "leave-app": Calendar,
  "expense-claims": Wallet,
  "customer-visits": UserCheck,
  "material-movement": QrCode,
  "notifications-profile": Bell,
};

export function MobileShowcase() {
  const [activeScreenId, setActiveScreenId] = useState<string>(
    MOBILE_SHOWCASE_SCREENS[1].id
  );

  const activeScreen =
    MOBILE_SHOWCASE_SCREENS.find((s) => s.id === activeScreenId) ||
    MOBILE_SHOWCASE_SCREENS[1];

  return (
    <section
      id="mobile-app"
      className="relative py-24 lg:py-32 bg-[#060919] text-white overflow-hidden"
    >
      {/* Ambient Glow */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[520px] w-[900px] rounded-full bg-gradient-to-tr from-indigo-600/20 via-violet-600/15 to-cyan-500/15 blur-[140px]" />

      <Container className="relative z-10">
        <SectionHeading
          badge="Connected Mobile Experience"
          title="Your entire workforce. One mobile experience."
          description="Give employees access to essential business operations through a connected mobile application."
          theme="dark"
        />

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left: Interactive Capability Selector */}
          <div className="lg:col-span-5 space-y-2.5">
            <div className="text-xs font-semibold uppercase tracking-wider text-cyan-300 mb-3">
              Select Mobile Capability to Inspect
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2.5">
              {MOBILE_SHOWCASE_SCREENS.map((screen) => {
                const Icon = screenIcons[screen.id] || Smartphone;
                const isSelected = screen.id === activeScreenId;
                return (
                  <button
                    key={screen.id}
                    type="button"
                    onClick={() => setActiveScreenId(screen.id)}
                    className={cn(
                      "w-full text-left rounded-2xl p-3.5 transition-all duration-200 border flex items-start gap-3.5 cursor-pointer",
                      isSelected
                        ? "bg-gradient-to-r from-indigo-600/30 to-violet-600/20 border-cyan-400/50 shadow-lg shadow-indigo-950/50"
                        : "bg-slate-900/60 border-white/10 hover:border-white/25 hover:bg-slate-900/90"
                    )}
                  >
                    <div
                      className={cn(
                        "h-9 w-9 rounded-xl flex items-center justify-center shrink-0 mt-0.5",
                        isSelected
                          ? "bg-cyan-400 text-slate-950"
                          : "bg-white/5 text-slate-300"
                      )}
                    >
                      <Icon className="h-4 w-4" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-sm font-semibold text-white truncate">
                        {screen.title}
                      </div>
                      <div className="text-xs text-slate-400 truncate mt-0.5">
                        {screen.subtitle}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right: Multi-Phone Mockup Stage & Store Availability Card */}
          <div className="lg:col-span-7 flex flex-col items-center">
            <div className="relative w-full flex flex-col md:flex-row items-center justify-center gap-6 lg:gap-8">
              {/* Primary Interactive Smartphone Mockup */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="relative w-[300px] sm:w-[320px] rounded-[2.6rem] border-[6px] border-slate-800 bg-[#090E23] p-3.5 shadow-2xl shadow-indigo-950/80 ring-1 ring-white/15"
              >
                {/* Dynamic Notch / Status Bar */}
                <div className="flex items-center justify-between px-3 pt-1 pb-3 text-[10px] text-slate-400">
                  <span className="font-mono font-semibold text-white">
                    09:41
                  </span>
                  <div className="h-3.5 w-20 rounded-full bg-slate-950 border border-white/10" />
                  <div className="flex items-center gap-1.5">
                    <Wifi className="h-3 w-3 text-cyan-400" />
                    <BatteryCharging className="h-3.5 w-3.5 text-emerald-400" />
                  </div>
                </div>

                {/* App Header Bar */}
                <div className="flex items-center justify-between rounded-2xl bg-slate-900/90 border border-white/10 px-3.5 py-2.5 mb-3">
                  <div className="flex items-center gap-2">
                    <div className="relative h-7 w-7 overflow-hidden rounded-lg bg-white">
                      <Image
                        src={siteConfig.brand.logoPath}
                        alt="Gatimaan"
                        fill
                        sizes="28px"
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white leading-tight">
                        Gatimaan
                      </div>
                      <div className="text-[9px] text-cyan-300 font-mono">
                        ORG-ENG-L2-G1
                      </div>
                    </div>
                  </div>
                  <span className="rounded-full bg-emerald-500/20 border border-emerald-400/30 px-2 py-0.5 text-[9px] font-semibold text-emerald-300">
                    ONLINE
                  </span>
                </div>

                {/* Dynamic Screen Body */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeScreen.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.25 }}
                    className="space-y-3 min-h-[300px] flex flex-col justify-between"
                  >
                    <div className="rounded-2xl bg-gradient-to-br from-indigo-600/30 via-violet-600/20 to-slate-900 border border-indigo-400/30 p-4">
                      <span className="inline-block rounded-md bg-cyan-400/15 border border-cyan-400/30 px-2 py-0.5 text-[9px] font-bold text-cyan-300 uppercase tracking-wider">
                        {activeScreen.badge}
                      </span>
                      <h4 className="mt-2 text-sm font-bold text-white">
                        {activeScreen.title}
                      </h4>
                      <p className="mt-1 text-[11px] text-slate-300 leading-relaxed">
                        {activeScreen.description}
                      </p>
                    </div>

                    <div className="space-y-2">
                      {activeScreen.metrics.map((m) => (
                        <div
                          key={m.label}
                          className="rounded-xl bg-white/[0.04] border border-white/10 px-3 py-2.5 flex items-center justify-between"
                        >
                          <span className="text-[11px] text-slate-400">
                            {m.label}
                          </span>
                          <span className="text-[11px] font-semibold text-white flex items-center gap-1">
                            <CheckCircle2 className="h-3 w-3 text-cyan-400" />
                            {m.value}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Simulated Bottom Tab Bar */}
                    <div className="pt-2 border-t border-white/10 grid grid-cols-4 gap-1 text-center text-[9px] text-slate-400">
                      <div className="py-1 text-cyan-300 font-semibold">
                        Home
                      </div>
                      <div className="py-1">Attendance</div>
                      <div className="py-1">Material</div>
                      <div className="py-1">Profile</div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </motion.div>

              {/* Secondary Companion Mockup Card (Field Telemetry & Employee Profile) */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: 0.15 }}
                className="w-full max-w-[300px] space-y-4"
              >
                <div className="rounded-2xl border border-white/15 bg-slate-900/75 p-5 backdrop-blur-xl shadow-xl">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-semibold text-white">
                      Employee Profile &amp; Governance
                    </span>
                    <span className="rounded bg-indigo-500/20 px-2 py-0.5 text-[10px] font-mono text-indigo-300">
                      RBAC Scoped
                    </span>
                  </div>
                  <div className="space-y-2 text-xs text-slate-300">
                    <div className="flex justify-between py-1 border-b border-white/5">
                      <span className="text-slate-400">Authority Tier</span>
                      <span className="font-medium text-white">
                        Leadership (LD)
                      </span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-white/5">
                      <span className="text-slate-400">Offline Sync</span>
                      <span className="font-medium text-emerald-400">
                        Active
                      </span>
                    </div>
                    <div className="flex justify-between py-1">
                      <span className="text-slate-400">Heartbeat Interval</span>
                      <span className="font-medium text-cyan-300">
                        Every 30 Seconds
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

