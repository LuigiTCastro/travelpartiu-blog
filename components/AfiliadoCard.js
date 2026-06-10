// AfiliadoCard — card de afiliado/parceiro
// Usar rel="sponsored" é obrigatório por lei (FTC/Conar) em links de afiliado
export default function AfiliadoCard({ titulo, descricao, link, badge, cta, icon }) {
  return (
    <div className="rounded-2xl bg-bg-accent border border-border p-6 my-8">
      <div className="flex items-start gap-4">
        {icon && (
          <div className="w-10 h-10 rounded-xl bg-white border border-border flex items-center justify-center shrink-0 text-xl">
            {icon}
          </div>
        )}
        <div className="flex-1">
          {badge && (
            <span className="inline-block text-[0.6875rem] font-semibold text-primary uppercase tracking-wider mb-2">
              {badge}
            </span>
          )}
          <h4 className="font-semibold text-text text-[0.9375rem] mb-1.5">{titulo}</h4>
          {descricao && (
            <p className="text-sm text-text-secondary leading-relaxed mb-4">{descricao}</p>
          )}
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary-hover transition-colors"
          >
            {cta || "Saiba mais"}
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
