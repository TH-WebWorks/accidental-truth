"use client";

import { useState } from "react";
import { Container } from "./Container";
import { siteData } from "../../lib/site-data";

const sections = siteData.originalFilm.accordionSections;

export function Accordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="topics" className="py-16 sm:py-24 bg-[#050505] scroll-mt-24">
      <Container>
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-10">
          Legacy Details
        </h2>
        <div className="space-y-2">
          {sections.map((section, i) => (
            <div
              key={section.title}
              className="rounded-lg bg-[#1a1a1a] border border-white/10 overflow-hidden"
            >
              <button
                type="button"
                aria-expanded={openIndex === i}
                aria-controls={`accordion-panel-${i}`}
                id={`accordion-trigger-${i}`}
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 px-6 py-4 sm:py-5 text-left text-white font-semibold hover:bg-white/5 transition-colors"
              >
                {section.title}
                <span
                  className={`shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-white/10 text-sm transition-transform ${openIndex === i ? "rotate-180" : ""}`}
                  aria-hidden
                >
                  ▼
                </span>
              </button>
              <div
                id={`accordion-panel-${i}`}
                role="region"
                aria-labelledby={`accordion-trigger-${i}`}
                hidden={openIndex !== i}
                className="border-t border-white/10"
              >
                <div className="px-6 py-4 text-[#b2b2b2] leading-relaxed">
                  {section.content}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
