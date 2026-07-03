export default function AfiliadoChecklist({ afiliados }) {
  if (!afiliados?.length) return null;

  return (
    <div className="mt-12 pt-8 border-t border-border not-prose">
      <p className="text-[0.6875rem] font-bold text-primary uppercase tracking-widest mb-1">
        Antes de partir
      </p>
      <h3 className="text-base font-bold text-text mb-5">
        Planeje melhor, gaste menos
      </h3>

      <ul className="space-y-4">
        {afiliados.map((af) => (
          <li key={af.id}>
            <a
              href={af.link}
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="relative flex flex-col gap-2 p-5 border border-border rounded-2xl overflow-hidden hover:border-primary hover:shadow-lg hover:-translate-y-0.5 transition-all"
            >
              <span className="absolute left-0 inset-y-0 w-[3px] bg-primary rounded-l-2xl" />
              <span className="self-start text-[0.6875rem] font-bold text-primary bg-primary/10 px-2.5 py-0.5 rounded-full uppercase tracking-wide">
                {af.badge}
              </span>
              <strong className="text-[0.9375rem] font-bold text-text leading-snug">
                {af.titulo}
              </strong>
              <p className="text-sm text-text-secondary leading-relaxed">
                {af.descricao}
              </p>
              <span className="mt-1 flex items-center justify-center gap-2 bg-primary hover:bg-primary-hover text-white text-sm font-semibold px-4 py-2.5 rounded-lg transition-colors">
                {af.cta}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </span>
            </a>
          </li>
        ))}
      </ul>

      <p className="text-[0.6875rem] text-text-muted mt-5 leading-relaxed">
        Links de parceiros. Sem custo extra para você. Cada compra através desses links ajuda a manter o blog gratuito.
      </p>
    </div>
  );
}
