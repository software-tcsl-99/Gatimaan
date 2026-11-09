"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/lib/config";
import { NAV_LINKS } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);

      if (pathname === "/") {
        const sections = ["home", "overview", "modules", "how-it-works", "mobile-app", "security"];
        const scrollPosition = window.scrollY + 220;

        for (let i = sections.length - 1; i >= 0; i--) {
          const el = document.getElementById(sections[i]);
          if (el && el.offsetTop <= scrollPosition) {
            const matchedNav = NAV_LINKS.find((n) => n.sectionId === sections[i]);
            if (matchedNav) {
              setActiveSection(matchedNav.sectionId);
            }
            break;
          }
        }
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled || mobileMenuOpen
          ? "bg-slate-950/85 backdrop-blur-xl border-b border-white/10 py-3 shadow-2xl shadow-black/40"
          : "bg-transparent py-5"
      )}
    >
      <Container>
        <nav
          className="flex items-center justify-between"
          aria-label="Main Navigation"
        >
          {/* Left: Brand Logo & Name */}
          <Link
            href="/"
            className="flex items-center gap-3 group focus:outline-none"
          >
            <div className="relative h-10 w-10 transition-transform duration-200 group-hover:scale-105">
              <Image
                src={siteConfig.brand.logoPath}
                alt={`${siteConfig.brand.name} Logo`}
                fill
                sizes="40px"
                className="object-contain"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="text-lg sm:text-xl font-bold tracking-tight text-white flex items-center gap-1.5">
                {siteConfig.brand.name}
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-cyan-400" />
              </span>
              <span className="text-[10px] font-medium uppercase tracking-widest text-slate-400 hidden sm:block">
                Enterprise ERP
              </span>
            </div>
          </Link>

          {/* Center: Navigation Links */}
          <div className="hidden lg:flex items-center gap-1 rounded-full bg-white/[0.04] border border-white/10 p-1.5 backdrop-blur-md">
            {NAV_LINKS.map((link) => {
              const isActive =
                pathname === "/" && activeSection === link.sectionId;
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setActiveSection(link.sectionId)}
                  className={cn(
                    "relative px-4 py-1.5 text-sm font-medium rounded-full transition-colors duration-200",
                    isActive
                      ? "text-white"
                      : "text-slate-300 hover:text-white"
                  )}
                >
                  {isActive && (
                    <motion.span
                      layoutId="activeNavIndicator"
                      className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-600/80 to-violet-600/80 border border-indigo-400/40 -z-10"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* Right: CTA Button */}
          <div className="hidden lg:flex items-center gap-3">
            <Button variant="primary" size="sm" href="/contact">
              <span>Contact Us</span>
              <ArrowUpRight className="h-4 w-4" />
            </Button>
          </div>

          {/* Mobile Hamburger Trigger */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="lg:hidden inline-flex items-center justify-center rounded-xl p-2.5 text-slate-200 hover:text-white hover:bg-white/10 border border-white/10 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </nav>
      </Container>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="lg:hidden overflow-hidden border-t border-white/10 bg-slate-950/95 backdrop-blur-2xl"
          >
            <Container className="py-5 flex flex-col gap-2">
              {NAV_LINKS.map((link) => {
                const isActive =
                  pathname === "/" && activeSection === link.sectionId;
                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={() => {
                      setActiveSection(link.sectionId);
                      setMobileMenuOpen(false);
                    }}
                    className={cn(
                      "px-4 py-2.5 rounded-xl text-sm font-medium transition-colors",
                      isActive
                        ? "bg-indigo-600/25 text-cyan-300 border border-indigo-500/30"
                        : "text-slate-300 hover:bg-white/5 hover:text-white"
                    )}
                  >
                    {link.label}
                  </Link>
                );
              })}

              <div className="my-2 border-t border-white/10 pt-4 flex flex-col sm:flex-row gap-3">
                <Button
                  variant="primary"
                  size="md"
                  href="/contact"
                  className="w-full"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span>Contact Us</span>
                  <ArrowUpRight className="h-4 w-4" />
                </Button>
              </div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
