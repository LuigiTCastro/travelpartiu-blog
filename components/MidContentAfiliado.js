import { getAfiliadoMidContent } from "@/lib/afiliados";

export default function MidContentAfiliado({ categoria }) {
  const af = getAfiliadoMidContent(categoria);
  if (!af) return null;

  return (
    <div className="my-8 flex gap-3.5 p-4 bg-bg-accent border-l-[3px] border-primary rounded-r-xl not-prose">
      <span className="text-xl shrink-0 mt-0.5">{af.icon}</span>
      <div>
        <span className="text-[0.6875rem] font-bold text-primary uppercase tracking-widest">
          {af.nota}
        </span>
        <p className="text-sm text-text-secondary mt-1 mb-3 leading-relaxed">
          {af.texto}
        </p>
        <a
          href={af.link}
          target="_blank"
          rel="noopener noreferrer sponsored"
          className="inline-flex items-center gap-1.5 text-[0.8125rem] font-semibold text-primary hover:text-primary-hover transition-colors"
        >
          {af.cta}
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
          </svg>
        </a>
      </div>
    </div>
  );
}
