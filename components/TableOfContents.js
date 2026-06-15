export default function TableOfContents({ headings }) {
  if (!headings || headings.length < 3) return null;

  const h2s = headings.filter((h) => h.level === 2);

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
                  className={`text-[0.8125rem] text-text-secondary hover:text-primary transition-colors duration-150 block leading-snug ${
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

      {/* Mobile + tablet: inline sempre visível */}
      <div className="lg:hidden rounded-2xl bg-bg-warm border border-border p-5 mb-10">
        <p className="text-xs font-semibold text-text-muted uppercase tracking-widest mb-4">
          Ache rapidamente
        </p>
        <ul className="space-y-2">
          {h2s.map((h) => (
            <li key={h.id} className="flex items-start gap-2">
              <span className="text-primary text-sm font-bold leading-5 shrink-0">→</span>
              <a
                href={`#${h.id}`}
                className="text-sm text-text-secondary hover:text-primary transition-colors leading-snug"
              >
                {h.text}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
