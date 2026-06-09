"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const navLinks = [
  { href: "/", label: "Inicio" },
  { href: "/blog", label: "Roteiros" },
  { href: "/categoria/Dicas de viagem", label: "Dicas" },
  { href: "/categoria/Planejamento", label: "Planejamento" },
  { href: "/templates", label: "Templates" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 20);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 header-wrap ${
        scrolled ? "header-scrolled border-b border-border" : "border-b border-transparent"
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-5 h-full flex items-center justify-between">
        <Link href="https://www.travelpartiu.com" className="shrink-0 flex items-center gap-2">
          <img
            src="https://www.travelpartiu.com/logo.svg"
            alt="TravelPartiu"
            className="h-7"
          />
        </Link>

        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[0.8125rem] font-medium text-text-secondary hover:text-primary transition-colors duration-150"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <a
          href="https://www.travelpartiu.com/signup"
          className="hidden md:inline-flex items-center gap-2 text-[0.8125rem] font-semibold text-white bg-primary px-5 py-2.5 rounded-[10px] hover:bg-primary-hover hover:shadow-lg hover:shadow-primary/20 transition-all duration-200"
        >
          Criar conta gratis
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
          </svg>
        </a>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2 -mr-2 text-text-secondary min-h-[44px] min-w-[44px] flex items-center justify-center"
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
            )}
          </svg>
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-bg border-t border-border">
          <nav className="flex flex-col px-5 py-4 gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-sm text-text-secondary hover:text-primary py-3 min-h-[44px] flex items-center transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://www.travelpartiu.com/signup"
              className="text-sm font-semibold text-white bg-primary px-4 py-3 rounded-[10px] text-center mt-3 hover:bg-primary-hover transition-colors min-h-[44px]"
            >
              Criar conta gratis
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
