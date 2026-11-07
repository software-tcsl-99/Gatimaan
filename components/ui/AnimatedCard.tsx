"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface AnimatedCardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  theme?: "dark" | "light";
  hoverLift?: boolean;
}

export function AnimatedCard({
  children,
  className,
  delay = 0,
  theme = "dark",
  hoverLift = true,
}: AnimatedCardProps) {
  const isDark = theme === "dark";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.45, delay }}
      whileHover={hoverLift ? { y: -5, transition: { duration: 0.2 } } : undefined}
      className={cn(
        "rounded-2xl transition-colors duration-300",
        isDark
          ? "bg-slate-900/65 border border-white/10 hover:border-cyan-400/35 backdrop-blur-xl shadow-xl shadow-black/20"
          : "bg-white border border-slate-200/90 hover:border-indigo-300 shadow-lg shadow-slate-900/5",
        className
      )}
    >
      {children}
    </motion.div>
  );
}

