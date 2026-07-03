// AfiliadoCard — rel="sponsored" obrigatório por lei (FTC/Conar) em links de afiliado
export default function AfiliadoCard({ titulo, descricao, link, badge, cta, icon }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer sponsored"
      className="group flex gap-4 rounded-2xl bg-white border border-border hover:border-primary hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-0.5 transition-all duration-200 p-5 no-underline relative overflow-hidden"
    >
      {/* Acento lateral */}
      <div className="absolute left-0 inset-y-0 w-[3px] bg-primary rounded-l-2xl" />

      {icon && (
        <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 text-2xl mt-0.5 ml-1">
          {icon}
        </div>
      )}

      <div className="flex-1 min-w-0">
        {badge && (
          <span className="inline-block text-[0.625rem] font-bold text-primary bg-primary/10 px-2.5 py-0.5 rounded-full uppercase tracking-wider mb-2">
            {badge}
          </span>
        )}

        <h4 className="font-bold text-text text-[0.9375rem] leading-snug mb-1.5">
          {titulo}
        </h4>

        {descricao && (
          <p className="text-sm text-text-secondary leading-relaxed mb-3">
            {descricao}
          </p>
        )}

        <span className="inline-flex items-center gap-1.5 text-[0.8125rem] font-semibold text-white bg-primary px-4 py-2 rounded-lg group-hover:bg-primary-hover transition-colors">
          {cta || "Saiba mais"}
          <svg
            className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform"
            fill="none"
            stroke="currentColor"
            strokeWidth={2.5}
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
          </svg>
        </span>
      </div>
    </a>
  );
}
