"use client";

import { useState, useEffect } from "react";

export default function NewsletterInline() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (localStorage.getItem("newsletter-dismissed")) {
      setDismissed(true);
      return;
    }

    function handleScroll() {
      const pct = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
      if (pct > 0.6) setVisible(true);
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function handleDismiss() {
    setDismissed(true);
    localStorage.setItem("newsletter-dismissed", "1");
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (email) setSubmitted(true);
  }

  if (dismissed) return null;

  return (
    <div className={`newsletter-inline ${visible ? "visible" : ""}`}>
      <div className="rounded-2xl bg-bg-warm p-6 md:p-8 relative">
        <button
          onClick={handleDismiss}
          className="absolute top-4 right-4 text-text-muted hover:text-text w-8 h-8 flex items-center justify-center transition-colors"
          aria-label="Fechar"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {submitted ? (
          <p className="text-sm text-text font-medium py-2">
            Pronto! Vamos enviar roteiros novos pra voce.
          </p>
        ) : (
          <>
            <p className="font-semibold text-text mb-1">
              Receba um roteiro novo toda semana.
            </p>
            <p className="text-sm text-text-secondary mb-4">
              Sem spam, so conteudo que ajuda a planejar sua proxima viagem.
            </p>
            <form onSubmit={handleSubmit} className="flex gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Seu e-mail"
                className="flex-1 text-sm px-4 py-2.5 rounded-full border border-border-strong bg-bg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary min-h-[44px] transition-all"
                required
              />
              <button
                type="submit"
                className="bg-text text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-primary transition-colors min-h-[44px] shrink-0"
              >
                Assinar
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
