// ============================================================
// CONFIGURACAO DE AFILIADOS
// ============================================================
// Substitua os links "#AFILIADO-..." pelos seus links reais
// de cada programa de afiliados antes de publicar.
//
// Programas recomendados para viagem:
//   Hoteis:      Booking.com Partners — partner.booking.com
//   Voos:        Decolar — afiliados.decolar.com
//   Seguros:     Seguros Promo — seguros.promo.com.br/afiliados
//   Aluguel car: Localiza / Rentcars — rentcars.com/afiliados
//   Passagens:   MaxMilhas — maxmilhas.com.br/afiliados
//   Geral:       Amazon Associates — associados.amazon.com.br
// ============================================================

export const afiliadosPorCategoria = {
  Roteiros: [
    {
      id: "booking",
      badge: "Parceiro",
      icon: "🏨",
      titulo: "Reserve seu hotel com desconto",
      descricao:
        "Encontre as melhores opcoes de hospedagem com cancelamento gratuito e os menores precos garantidos.",
      link: "#AFILIADO-BOOKING", // substituir pelo link de afiliado Booking.com
      cta: "Ver hoteis disponíveis",
    },
    {
      id: "decolar",
      badge: "Parceiro",
      icon: "✈️",
      titulo: "Passagens aereas com ate 50% off",
      descricao:
        "Compare precos de voos nacionais e internacionais e encontre a melhor tarifa para o seu roteiro.",
      link: "#AFILIADO-DECOLAR", // substituir pelo link de afiliado Decolar
      cta: "Buscar passagens",
    },
  ],

  Planejamento: [
    {
      id: "seguro",
      badge: "Recomendado",
      icon: "🛡️",
      titulo: "Seguro viagem: nao saia sem ele",
      descricao:
        "Cobertura medica, cancelamento e extravio de bagagem. Cotacao rapida e precos a partir de R$10/dia.",
      link: "#AFILIADO-SEGURO", // substituir pelo link de afiliado de seguro viagem
      cta: "Cotar seguro agora",
    },
    {
      id: "maxmilhas",
      badge: "Dica",
      icon: "🎫",
      titulo: "Compre passagens com milhas",
      descricao:
        "Use suas milhas ou compre passagens mais baratas no maior marketplace de milhas do Brasil.",
      link: "#AFILIADO-MAXMILHAS", // substituir pelo link de afiliado MaxMilhas
      cta: "Ver passagens com milhas",
    },
  ],

  "Dicas de viagem": [
    {
      id: "booking",
      badge: "Parceiro",
      icon: "🏨",
      titulo: "Hospedagem para todos os estilos",
      descricao:
        "Hoteis, pousadas, hostels e apartamentos. Cancele gratis na maioria das opcoes.",
      link: "#AFILIADO-BOOKING",
      cta: "Encontrar hospedagem",
    },
    {
      id: "rentcars",
      badge: "Parceiro",
      icon: "🚗",
      titulo: "Aluguel de carro com seguro incluso",
      descricao:
        "Compare precos nas principais locadoras e garante o melhor custo-beneficio para sua viagem.",
      link: "#AFILIADO-RENTCARS", // substituir pelo link de afiliado Rentcars
      cta: "Comparar precos",
    },
  ],
};

// Retorna os cards de afiliado para uma categoria
export function getAfiliadosPorCategoria(categoria) {
  return afiliadosPorCategoria[categoria] || afiliadosPorCategoria["Roteiros"];
}
