export const metadata = {
  title: "Templates de Viagem",
  description:
    "Templates prontos para planejar sua viagem: roteiros, checklists, controle de gastos e mais.",
};

const templates = [
  {
    title: "Template de Roteiro",
    description:
      "Organize seu roteiro dia a dia com horarios, locais e atividades. Perfeito para nao perder nada.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
      </svg>
    ),
  },
  {
    title: "Planilha de Gastos",
    description:
      "Controle seus gastos de viagem por categoria: hospedagem, alimentacao, transporte e passeios.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
      </svg>
    ),
  },
  {
    title: "Checklist Pre-Viagem",
    description:
      "Tudo o que voce precisa conferir antes de sair: documentos, reservas, bagagem e mais.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Organizador de Documentos",
    description:
      "Centralize passagens, vouchers, reservas e seguros em um so lugar.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    ),
  },
];

export default function TemplatesPage() {
  return (
    <>
      <div className="bg-bg-accent">
        <div className="max-w-[900px] mx-auto px-5">
          <section className="pt-16 pb-14 md:pt-24 md:pb-18">
            <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-4">
              Recursos gratuitos
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-text tracking-tight mb-4">
              Templates de Viagem
            </h1>
            <p className="text-lg text-text-secondary leading-relaxed max-w-xl">
              Baixe templates prontos para organizar sua viagem do comeco ao fim.
              Ou use o TravelPartiu para fazer tudo online.
            </p>
          </section>
        </div>
      </div>

      <div className="max-w-[900px] mx-auto px-5">
        <div className="grid md:grid-cols-2 gap-5 py-12">
          {templates.map((tpl) => (
            <div
              key={tpl.title}
              className="post-card p-7 flex flex-col"
            >
              <div className="w-12 h-12 rounded-xl bg-primary-light text-primary flex items-center justify-center mb-5">
                {tpl.icon}
              </div>
              <h2 className="font-semibold text-text text-lg mb-2">{tpl.title}</h2>
              <p className="text-sm text-text-secondary leading-relaxed mb-5 flex-1">
                {tpl.description}
              </p>
              <span className="inline-block text-xs font-medium text-text-muted bg-bg-warm px-3 py-1.5 rounded-full self-start">
                Em breve
              </span>
            </div>
          ))}
        </div>

        <div className="rounded-2xl bg-bg-accent p-8 md:p-12 text-center mb-20">
          <h2 className="font-bold text-xl text-text mb-3">
            Ou organize tudo no TravelPartiu
          </h2>
          <p className="text-text-secondary mb-7 max-w-md mx-auto leading-relaxed">
            Roteiro, documentos, gastos e decisoes da viagem em um so lugar, de graca.
          </p>
          <a
            href="https://www.travelpartiu.com/signup"
            className="btn-primary"
          >
            Criar conta gratis
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </a>
        </div>
      </div>
    </>
  );
}
