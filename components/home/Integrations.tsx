"use client";

import React from "react";
import {
  Server,
  Monitor,
  Smartphone,
  Database,
  Radio,
  MapPin,
  FileSpreadsheet,
  Sparkles,
  BellRing,
  CloudUpload,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedCard } from "@/components/ui/AnimatedCard";
import { TECH_ECOSYSTEM } from "@/lib/constants";

const techIconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  "Node.js": Server,
  React: Monitor,
  "React Native": Smartphone,
  MongoDB: Database,
  "Socket.IO": Radio,
  "Tally Prime": FileSpreadsheet,
  "Google Maps": MapPin,
  "Google Gemini AI": Sparkles,
  "Firebase Cloud Messaging": BellRing,
  Cloudinary: CloudUpload,
};

export function Integrations() {
  const connectedServices = TECH_ECOSYSTEM.filter(
    (item) => item.category === "Connected Services & Integrations"
  );

  return (
    <section className="relative py-24 lg:py-28 bg-slate-50 text-slate-900 border-t border-slate-200/80 overflow-hidden">
      <Container>
        <SectionHeading
          badge="Ecosystem"
          title="Built to connect with your business ecosystem."
          description="Integrated with enterprise accounting, GIS mapping, AI intelligence, and cloud delivery services."
          theme="light"
        />

        {/* Connected Services & Enterprise Integrations */}
        <div className="mt-14">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {connectedServices.map((item, idx) => {
              const Icon = techIconMap[item.name] || Server;
              return (
                <AnimatedCard
                  key={item.name}
                  theme="light"
                  delay={idx * 0.05}
                  className="p-5 flex flex-col justify-between"
                >
                  <div>
                    <div className="h-10 w-10 rounded-xl bg-indigo-50 border border-indigo-200/80 text-indigo-700 flex items-center justify-center mb-4">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h4 className="text-base font-bold text-slate-900">
                      {item.name}
                    </h4>
                    <div className="text-xs font-medium text-indigo-600 mt-0.5">
                      {item.role}
                    </div>
                    <p className="mt-2.5 text-xs text-slate-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </AnimatedCard>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}

