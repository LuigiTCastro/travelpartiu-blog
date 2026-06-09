import Link from "next/link";

export default function TemplatesCTA() {
  return (
    <div className="rounded-2xl bg-bg-accent border border-border p-8 my-10">
      <p className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-3">
        Recurso gratuito
      </p>
      <h3 className="font-bold text-lg text-text mb-2">
        Quer o roteiro pronto pra editar?
      </h3>
      <p className="text-sm text-text-secondary leading-relaxed mb-5">
        Organize sua viagem com nosso template de planejamento. Inclui
        roteiro dia a dia, controle de gastos e checklist.
      </p>
      <Link
        href="/templates"
        className="btn-primary text-sm px-5 py-2.5"
      >
        Ver templates
        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
        </svg>
      </Link>
    </div>
  );
}
