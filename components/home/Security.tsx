"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  KeyRound,
  Lock,
  Building2,
  Smartphone,
  RefreshCw,
  Gauge,
  Filter,
  FileCode2,
  FileSearch,
  PowerOff,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedCard } from "@/components/ui/AnimatedCard";
import { SECURITY_CAPABILITIES } from "@/lib/constants";

const securityIcons = [
  KeyRound,
  Lock,
  ShieldCheck,
  Building2,
  Smartphone,
  RefreshCw,
  Gauge,
  Filter,
  FileCode2,
  FileSearch,
  PowerOff,
];

export function Security() {
  return (
    <section
      id="security"
      className="relative py-24 lg:py-32 bg-[#050816] text-white border-t border-white/10 overflow-hidden"
    >
      {/* Subtle Radial Security Matrix Background */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0 opacity-[0.12]"
          style={{
            backgroundImage:
              "radial-gradient(circle at center, rgba(56, 189, 248, 0.35) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
        <div className="absolute top-12 right-1/4 h-96 w-96 rounded-full bg-cyan-500/10 blur-[130px]" />
        <div className="absolute bottom-12 left-1/4 h-96 w-96 rounded-full bg-indigo-600/15 blur-[130px]" />
      </div>

      <Container className="relative z-10">
        <div className="flex flex-col items-center text-center mb-14">
          {/* Animated Shield Visual */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-600/30 to-cyan-500/20 border border-cyan-400/40 shadow-lg shadow-cyan-500/15"
          >
            <ShieldCheck className="h-8 w-8 text-cyan-300" />
            <span className="absolute -top-1 -right-1 flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-400" />
            </span>
          </motion.div>

          <SectionHeading
            badge="Enterprise Defense Architecture"
            title="Security and control at every level."
            description="Designed with enterprise-grade controls to protect workforce information and business operations."
            theme="dark"
          />
        </div>

        {/* 11 Security Capabilities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {SECURITY_CAPABILITIES.map((cap, idx) => {
            const Icon = securityIcons[idx % securityIcons.length];
            return (
              <AnimatedCard
                key={cap.title}
                theme="dark"
                delay={idx * 0.04}
                className="p-5 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="h-10 w-10 rounded-xl bg-indigo-500/15 border border-indigo-400/30 flex items-center justify-center text-cyan-300">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-400 bg-white/[0.04] border border-white/10 px-2.5 py-1 rounded-full">
                      {cap.category}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-white">
                    {cap.title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {cap.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-cyan-300">
                  <span>{cap.specDetail}</span>
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                </div>
              </AnimatedCard>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

