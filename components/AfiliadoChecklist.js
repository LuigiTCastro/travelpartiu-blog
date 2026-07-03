// Checklist editorial de recursos — substitui os cards grandes no final do post
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

      <ul className="space-y-4">
        {afiliados.map((af) => (
          <li key={af.id}>
            <div className="flex-1 min-w-0">
              <div className="flex flex-wrap items-baseline gap-x-1.5 gap-y-0.5">
                <span className="font-semibold text-sm text-text">{af.titulo}</span>
                <span className="text-sm text-text-secondary">{af.descricao_curta}</span>
              </div>
              <a
                href={af.link}
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="inline-flex items-center gap-1 mt-1.5 text-xs font-semibold text-primary hover:text-primary-hover transition-colors"
              >
                {af.cta}
                <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </a>
            </div>
          </li>
        ))}
      </ul>

      <p className="text-[0.6875rem] text-text-muted mt-5 leading-relaxed">
        Links de parceiros. Sem custo extra para você. Cada compra através desses links ajuda a manter o blog gratuito.
      </p>
    </div>
  );
}
