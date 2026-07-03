export default function AfiliadoChecklist({ afiliados }) {
  if (!afiliados?.length) return null;

  return (
    <div className="mt-12 pt-8 border-t border-border not-prose">
      <p className="text-[0.6875rem] font-bold text-primary uppercase tracking-widest mb-1">
        Planeje sua viagem
      </p>
      <h3 className="text-base font-bold text-text mb-5">
        Recursos que uso e recomendo
      </h3>

      <ul className="space-y-3">
        {afiliados.map((af) => (
          <li key={af.id}>
            <a
              href={af.link}
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="flex items-center justify-between gap-4 p-4 border border-border rounded-xl hover:border-primary hover:shadow-sm transition-all"
            >
              <div className="min-w-0">
                <p className="font-semibold text-sm text-text">{af.titulo}</p>
                <p className="text-sm text-text-secondary mt-0.5">{af.descricao_curta}</p>
              </div>
              <span className="inline-flex items-center gap-1 text-xs font-semibold text-primary shrink-0">
                {af.cta}
                <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
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
