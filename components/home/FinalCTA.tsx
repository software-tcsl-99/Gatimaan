"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function FinalCTA() {
  return (
    <section className="relative py-24 lg:py-32 bg-[#060919] text-white overflow-hidden">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="relative rounded-3xl border border-indigo-400/30 bg-gradient-to-br from-indigo-950/90 via-[#0E153A] to-slate-950 p-8 sm:p-14 lg:p-20 text-center overflow-hidden shadow-2xl shadow-indigo-950/60"
        >
          {/* Floating Glows & Subtle Particles */}
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <motion.div
              animate={{
                scale: [1, 1.12, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-24 left-1/2 -translate-x-1/2 h-80 w-[640px] rounded-full bg-gradient-to-r from-indigo-500/35 via-violet-500/30 to-cyan-400/25 blur-[100px]"
            />
            <div
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 2px 2px, rgba(255,255,255,0.22) 1px, transparent 0)",
                backgroundSize: "28px 28px",
              }}
            />
          </div>

          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/15 px-4 py-1.5 text-xs font-semibold text-cyan-300 backdrop-blur-md">
              <Sparkles className="h-3.5 w-3.5" />
              <span>Ready for Multi-Tenant Enterprise Deployment</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Take control of your business operations.
            </h2>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Bring your workforce, assets, and operations together with
              Gatimaan.
            </p>

            <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
              <Button variant="primary" size="lg" href="/contact">
                <span>Contact Us</span>
                <ArrowUpRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}

