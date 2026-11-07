"use client";

import React, { useState, useEffect } from "react";
import { List } from "lucide-react";
import { PRIVACY_TOC } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function TableOfContents() {
  const [activeId, setActiveId] = useState<string>(PRIVACY_TOC[0].id);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 180;
      for (let i = PRIVACY_TOC.length - 1; i >= 0; i--) {
        const el = document.getElementById(PRIVACY_TOC[i].id);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveId(PRIVACY_TOC[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <aside
      aria-label="Table of Contents"
      className="lg:sticky lg:top-28 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
    >
      <div className="flex items-center gap-2 border-b border-slate-100 pb-3 mb-3">
        <List className="h-4 w-4 text-indigo-600" />
        <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900">
          Table of Contents
        </h2>
      </div>

      <nav className="max-h-[70vh] overflow-y-auto pr-1 space-y-1">
        {PRIVACY_TOC.map((item) => {
          const isActive = item.id === activeId;
          return (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={() => setActiveId(item.id)}
              className={cn(
                "flex items-start gap-2 rounded-lg px-2.5 py-1.5 text-xs transition-colors",
                isActive
                  ? "bg-indigo-50 text-indigo-700 font-semibold"
                  : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
              )}
            >
              <span className="font-mono text-[11px] text-slate-400 shrink-0 mt-0.5">
                {item.number}.
              </span>
              <span className="leading-snug">{item.title}</span>
            </a>
          );
        })}
      </nav>
    </aside>
  );
}

