// Mid-content: uma recomendação editorial por categoria, aparece após o 1º H2
export const afiliadosMidContent = {
  Planejamento: {
    icon: "🛡️",
    nota: "Dica antes de continuar:",
    texto: "Se você está planejando uma viagem internacional, seguro viagem é essencial. Uma consulta médica nos EUA custa, em média, R$ 5.000. Cote agora enquanto lê — a partir de R$ 10/dia.",
    link: "https://www.segurospromo.com.br/?utm_medium=afiliado&pcrid=14642&utm_source=site-blog",
    cta: "Cotar seguro em segundos",
  },
  Destinos: {
    icon: "🛡️",
    nota: "Importante antes de embarcar:",
    texto: "Viagem internacional requer seguro viagem. Uma ida ao pronto-socorro nos EUA pode custar R$ 30.000 ou mais. Cote agora — rápido e a partir de R$ 10/dia.",
    link: "https://www.segurospromo.com.br/?utm_medium=afiliado&pcrid=14642&utm_source=site-blog",
    cta: "Cotar seguro viagem",
  },
  Roteiros: {
    icon: "🏨",
    nota: "Dica do editor:",
    texto: "Reserve o hotel com antecedência e com cancelamento grátis — preços sobem conforme a data se aproxima e as melhores opções esgotam rápido.",
    link: "#AFILIADO-BOOKING",
    cta: "Buscar hospedagem",
  },
  "Dicas de viagem": {
    icon: "✈️",
    nota: "Antes de comprar sua passagem:",
    texto: "Compare preços em voos nacionais e internacionais antes de fechar. Pequenas diferenças de data podem economizar centenas de reais.",
    link: "#AFILIADO-DECOLAR",
    cta: "Comparar passagens agora",
  },
  "Viagem econômica": {
    icon: "💡",
    nota: "Economize na hospedagem:",
    texto: "Reserve com cancelamento grátis até 24h antes — você garante o melhor preço agora e cancela sem custo se mudar os planos.",
    link: "#AFILIADO-BOOKING",
    cta: "Ver hospedagens com desconto",
  },
};

// Checklist final: 2 afiliados por categoria com descrição curta para a lista
export const afiliadosPorCategoria = {
  Roteiros: [
    {
      id: "booking",
      icon: "🏨",
      titulo: "Booking.com",
      descricao_curta: "Melhor preço garantido, cancelamento grátis na maioria das opções.",
      link: "#AFILIADO-BOOKING",
      cta: "Buscar hotéis",
    },
    {
      id: "decolar",
      icon: "✈️",
      titulo: "Decolar",
      descricao_curta: "Compare voos nacionais e internacionais e encontre a melhor tarifa.",
      link: "#AFILIADO-DECOLAR",
      cta: "Buscar passagens",
    },
  ],

  Planejamento: [
    {
      id: "seguro",
      icon: "🛡️",
      titulo: "Seguros Promo",
      descricao_curta: "Cobertura médica, cancelamento e bagagem. A partir de R$ 10/dia.",
      link: "https://www.segurospromo.com.br/?utm_medium=afiliado&pcrid=14642&utm_source=site-blog",
      cta: "Cotar seguro",
    },
    {
      id: "maxmilhas",
      icon: "🎫",
      titulo: "MaxMilhas",
      descricao_curta: "Compre milhas ou troque por passagens — maior marketplace do Brasil.",
      link: "#AFILIADO-MAXMILHAS",
      cta: "Ver passagens com milhas",
    },
  ],

  "Dicas de viagem": [
    {
      id: "booking",
      icon: "🏨",
      titulo: "Booking.com",
      descricao_curta: "Hotéis, pousadas e apartamentos com cancelamento grátis.",
      link: "#AFILIADO-BOOKING",
      cta: "Comparar hospedagens",
    },
    {
      id: "rentcars",
      icon: "🚗",
      titulo: "Rentcars",
      descricao_curta: "Compare todas as locadoras em um só lugar — reserva em minutos.",
      link: "https://www.rentcars.com/pt-br/?requestorid=10861&utm_source=blogtravelpartiu.com.br&utm_medium=afiliado-link",
      cta: "Comparar locadoras",
    },
  ],

  Destinos: [
    {
      id: "booking",
      icon: "🏨",
      titulo: "Booking.com",
      descricao_curta: "Hotels próximos ao estádio ou no centro — cancelamento grátis.",
      link: "#AFILIADO-BOOKING",
      cta: "Ver hotéis disponíveis",
    },
    {
      id: "seguro",
      icon: "🛡️",
      titulo: "Seguros Promo",
      descricao_curta: "Seguro viagem internacional obrigatório. A partir de R$ 10/dia.",
      link: "https://www.segurospromo.com.br/?utm_medium=afiliado&pcrid=14642&utm_source=site-blog",
      cta: "Cotar seguro viagem",
    },
  ],

  "Viagem econômica": [
    {
      id: "booking",
      icon: "🏨",
      titulo: "Booking.com",
      descricao_curta: "Filtre por preço e avaliação — hostels, pousadas e apartamentos.",
      link: "#AFILIADO-BOOKING",
      cta: "Buscar hospedagem barata",
    },
    {
      id: "rentcars",
      icon: "🚗",
      titulo: "Rentcars",
      descricao_curta: "Compare locadoras e reserve com antecedência — até 40% mais barato.",
      link: "https://www.rentcars.com/pt-br/?requestorid=10861&utm_source=blogtravelpartiu.com.br&utm_medium=afiliado-link",
      cta: "Comparar preços",
    },
  ],
};

export function getAfiliadosPorCategoria(categoria) {
  return afiliadosPorCategoria[categoria] || afiliadosPorCategoria["Roteiros"];
}

export function getAfiliadoMidContent(categoria) {
  return afiliadosMidContent[categoria] || afiliadosMidContent["Roteiros"];
}
