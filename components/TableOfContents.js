"use client";

import { useState } from "react";

export default function TableOfContents({ headings }) {
  const [open, setOpen] = useState(false);

  if (!headings || headings.length < 3) return null;

  return (
    <>
      {/* Desktop: sticky sidebar */}
      <div className="hidden lg:block">
        <div className="sticky top-24">
          <p className="text-[0.6875rem] font-semibold text-text-muted uppercase tracking-widest mb-4">
            Neste artigo
          </p>
          <ul className="space-y-2.5">
            {headings.map((h) => (
              <li key={h.id}>
                <a
                  href={`#${h.id}`}
                  className={`text-[0.8125rem] text-text-secondary hover:text-text transition-colors duration-150 block leading-snug ${
                    h.level === 3 ? "pl-4 text-text-muted" : ""
                  }`}
                >
                  {h.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Mobile: collapsible */}
      <div className="lg:hidden rounded-2xl bg-bg-warm p-5 mb-10">
        <button
          onClick={() => setOpen(!open)}
          className="flex items-center justify-between w-full text-sm font-semibold text-text min-h-[44px]"
          aria-expanded={open}
        >
          <span>Neste artigo</span>
          <svg
            className={`w-4 h-4 text-text-muted transition-transform duration-200 ${open ? "rotate-180" : ""}`}
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        {open && (
          <ul className="mt-4 space-y-2.5">
            {headings.map((h) => (
              <li key={h.id}>
                <a
                  href={`#${h.id}`}
                  onClick={() => setOpen(false)}
                  className={`text-sm text-text-secondary hover:text-text block py-0.5 transition-colors ${
                    h.level === 3 ? "pl-4 text-text-muted" : ""
                  }`}
                >
                  {h.text}
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}
