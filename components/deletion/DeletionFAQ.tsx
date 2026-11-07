"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { DELETION_FAQS } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function DeletionFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 lg:p-10 shadow-sm">
      <div className="flex items-center gap-2.5 mb-6">
        <HelpCircle className="h-5 w-5 text-indigo-600" />
        <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
          Frequently Asked Questions
        </h3>
      </div>

      <div className="divide-y divide-slate-200">
        {DELETION_FAQS.map((faq, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div key={faq.question} className="py-4 first:pt-0 last:pb-0">
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? null : idx)}
                className="w-full flex items-center justify-between text-left gap-4 py-1 cursor-pointer group"
                aria-expanded={isOpen}
              >
                <span className="text-sm sm:text-base font-semibold text-slate-900 group-hover:text-indigo-600 transition-colors">
                  {faq.question}
                </span>
                <ChevronDown
                  className={cn(
                    "h-4 w-4 text-slate-500 shrink-0 transition-transform duration-200",
                    isOpen && "rotate-180 text-indigo-600"
                  )}
                />
              </button>
              {isOpen && (
                <p className="mt-2.5 text-sm text-slate-600 leading-relaxed pr-6">
                  {faq.answer}
                </p>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

