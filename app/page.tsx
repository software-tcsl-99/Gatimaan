import React from "react";
import { Hero } from "@/components/home/Hero";
import { Overview } from "@/components/home/Overview";
import { Modules } from "@/components/home/Modules";
import { HowItWorks } from "@/components/home/HowItWorks";
import { MobileShowcase } from "@/components/home/MobileShowcase";
import { Security } from "@/components/home/Security";
import { FinalCTA } from "@/components/home/FinalCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Overview />
      <Modules />
      <HowItWorks />
      <MobileShowcase />
      <Security />
      <FinalCTA />
    </>
  );
}

