"use client";

import React from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { HOW_IT_WORKS_STEPS } from "@/lib/constants";

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="relative py-24 lg:py-28 bg-slate-50 text-slate-900 border-b border-slate-200/80 overflow-hidden"
    >
      <Container>
        <SectionHeading
          badge="Operational Workflow"
          title="From everyday operations to intelligent business control."
          description="Deploy a structured four-stage operational lifecycle that connects organizational hierarchy with live field execution and AI analytics."
          theme="light"
        />

        {/* Connected Horizontal Process */}
        <div className="mt-16 relative">
          {/* Desktop Connecting Timeline Bar */}
          <div className="hidden lg:block absolute top-9 left-12 right-12 h-0.5 bg-slate-200 overflow-hidden">
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
              className="h-full w-full origin-left bg-gradient-to-r from-indigo-600 via-violet-600 to-cyan-500"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {HOW_IT_WORKS_STEPS.map((item, idx) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.45, delay: idx * 0.1 }}
                className="flex flex-col"
              >
                {/* Step Number Badge */}
                <div className="flex items-center gap-4 mb-5">
                  <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-indigo-600 to-violet-600 text-white font-mono text-xl font-bold flex items-center justify-center shadow-lg shadow-indigo-600/25 ring-4 ring-slate-50">
                    {item.step}
                  </div>
                  <div className="lg:hidden h-px flex-1 bg-gradient-to-r from-indigo-500/40 to-transparent" />
                </div>

                {/* Card Body */}
                <div className="flex-1 rounded-2xl bg-white border border-slate-200/90 p-6 shadow-md shadow-slate-900/5 hover:border-indigo-300 transition-colors flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-5 pt-4 border-t border-slate-100 flex flex-wrap gap-1.5">
                    {item.detailTags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md bg-slate-100 px-2.5 py-1 text-[11px] font-medium text-slate-700"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

