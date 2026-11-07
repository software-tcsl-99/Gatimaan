"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost" | "light";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  external?: boolean;
  children: React.ReactNode;
  className?: string;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-gradient-to-r from-indigo-600 via-violet-600 to-blue-600 text-white shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:brightness-110 border border-indigo-400/30",
  secondary:
    "bg-slate-900/90 text-white border border-slate-700/80 hover:border-cyan-400/50 hover:bg-slate-800/90 shadow-md",
  outline:
    "bg-white/5 text-white border border-white/15 backdrop-blur-md hover:bg-white/10 hover:border-cyan-400/40",
  ghost:
    "bg-transparent text-slate-300 hover:text-white hover:bg-white/5",
  light:
    "bg-white text-slate-950 hover:bg-slate-100 border border-slate-200 shadow-lg shadow-slate-950/10 font-semibold",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-xs sm:text-sm rounded-lg gap-1.5",
  md: "px-5 py-2.5 text-sm rounded-xl gap-2",
  lg: "px-7 py-3.5 text-sm sm:text-base rounded-xl gap-2.5",
};

export function Button({
  variant = "primary",
  size = "md",
  href,
  external,
  children,
  className,
  ...props
}: ButtonProps) {
  const combinedClassName = cn(
    "inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 cursor-pointer select-none",
    variantClasses[variant],
    sizeClasses[size],
    props.disabled && "opacity-50 pointer-events-none",
    className
  );

  if (href) {
    if (external) {
      return (
        <motion.a
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={combinedClassName}
        >
          {children}
        </motion.a>
      );
    }

    return (
      <motion.div
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="inline-block"
      >
        <Link href={href} className={combinedClassName}>
          {children}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={combinedClassName}
      {...(props as React.ComponentProps<typeof motion.button>)}
    >
      {children}
    </motion.button>
  );
}

