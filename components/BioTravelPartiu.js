export default function BioTravelPartiu() {
  return (
    <div className="flex items-start gap-4 p-6 rounded-2xl bg-bg-accent border border-border mt-10">
      <img
        src="https://www.travelpartiu.com/logo.svg"
        alt="TravelPartiu"
        className="w-9 h-9 shrink-0 mt-0.5"
      />
      <div>
        <p className="text-sm font-semibold text-text mb-1">Sobre o TravelPartiu</p>
        <p className="text-sm text-text-secondary leading-relaxed">
          Plataforma gratuita para organizar roteiro, documentos, gastos e
          decisoes da sua viagem em um so lugar.
        </p>
        <a
          href="https://www.travelpartiu.com"
          className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:text-primary-hover mt-2 transition-colors"
        >
          Conhecer
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
          </svg>
        </a>
      </div>
    </div>
  );
}
