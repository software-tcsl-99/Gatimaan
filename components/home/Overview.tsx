"use client";

import React from "react";
import { Users, Route, QrCode, Workflow } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedCard } from "@/components/ui/AnimatedCard";
import { OVERVIEW_VALUE_PROPS } from "@/lib/constants";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Users,
  Route,
  QrCode,
  Workflow,
};

export function Overview() {
  return (
    <section
      id="overview"
      className="relative py-24 lg:py-28 bg-slate-50 text-slate-900 border-y border-slate-200/80 overflow-hidden"
    >
      {/* Subtle Top Accent */}
      <div className="pointer-events-none absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-indigo-500/40 to-transparent" />

      <Container>
        <SectionHeading
          badge="Unified Enterprise Ecosystem"
          title="One platform. Complete operational visibility."
          description="Bring your people, processes, assets, and field operations into one connected ecosystem."
          theme="light"
        />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {OVERVIEW_VALUE_PROPS.map((item, index) => {
            const IconComponent = iconMap[item.iconName] || Users;
            return (
              <AnimatedCard
                key={item.id}
                theme="light"
                delay={index * 0.08}
                className="p-6 sm:p-7 flex flex-col justify-between group relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 h-28 w-28 bg-gradient-to-bl from-indigo-500/[0.07] to-transparent rounded-bl-full pointer-events-none transition-transform duration-300 group-hover:scale-110" />

                <div>
                  <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-indigo-600 to-violet-600 text-white flex items-center justify-center shadow-md shadow-indigo-500/20 mb-6 group-hover:scale-105 transition-transform">
                    <IconComponent className="h-6 w-6" />
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 tracking-tight">
                    {item.title}
                  </h3>

                  <p className="mt-2.5 text-sm text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-medium text-indigo-700">
                  <span>{item.highlight}</span>
                  <span className="h-1.5 w-1.5 rounded-full bg-indigo-600" />
                </div>
              </AnimatedCard>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

