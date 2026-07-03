// Mid-content: uma recomendação editorial por categoria, aparece após o 1º H2
export const afiliadosMidContent = {
  Planejamento: {
    icon: "🛡️",
    nota: "Dica antes de continuar:",
    texto: "Se você está planejando uma viagem internacional, seguro viagem é essencial. Uma consulta médica nos EUA custa, em média, R$ 5.000. Cote agora enquanto lê, a partir de R$ 10/dia.",
    link: "https://www.segurospromo.com.br/?utm_medium=afiliado&pcrid=14642&utm_source=site-blog",
    cta: "Cotar seguro em segundos",
  },
  Destinos: {
    icon: "🛡️",
    nota: "Importante antes de embarcar:",
    texto: "Viagem internacional requer seguro viagem. Uma ida ao pronto-socorro nos EUA pode custar R$ 30.000 ou mais. Cote em menos de 2 minutos, a partir de R$ 10/dia.",
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

// Cards finais: 2 por categoria — badge + manchete + descrição + botão
export const afiliadosPorCategoria = {
  Roteiros: [
    {
      id: "booking",
      badge: "Melhor preço garantido",
      titulo: "Reserve com cancelamento grátis — preços sobem conforme a data",
      descricao: "Hotéis, pousadas e apartamentos com as melhores avaliações na sua rota.",
      link: "#AFILIADO-BOOKING",
      cta: "Buscar hospedagem",
    },
    {
      id: "decolar",
      badge: "Compare e economize",
      titulo: "Voos nacionais e internacionais com a melhor tarifa do momento",
      descricao: "Compare centenas de opções em segundos e reserve com segurança.",
      link: "#AFILIADO-DECOLAR",
      cta: "Buscar passagens",
    },
  ],

  Planejamento: [
    {
      id: "seguro",
      badge: "Não viaje sem",
      titulo: "1 emergência médica nos EUA pode custar R$ 100 mil",
      descricao: "Seguro viagem cobre internação, cancelamento de voo e bagagem perdida. Cote em segundos, a partir de R$ 10/dia.",
      link: "https://www.segurospromo.com.br/?utm_medium=afiliado&pcrid=14642&utm_source=site-blog",
      cta: "Cotar seguro agora",
    },
    {
      id: "maxmilhas",
      badge: "Economize até 60%",
      titulo: "Passagem para os EUA muito mais barata com milhas",
      descricao: "Compre pontos avulsos ou troque por passagens no maior marketplace de milhas do Brasil.",
      link: "#AFILIADO-MAXMILHAS",
      cta: "Ver passagens com milhas",
    },
  ],

  "Dicas de viagem": [
    {
      id: "booking",
      badge: "Melhor preço garantido",
      titulo: "Hotéis, pousadas e apartamentos com cancelamento grátis",
      descricao: "Maior seleção do mundo com avaliações reais de viajantes. Reserve sem compromisso.",
      link: "#AFILIADO-BOOKING",
      cta: "Comparar hospedagens",
    },
    {
      id: "rentcars",
      badge: "Compare em segundos",
      titulo: "Aluguel de carro: compare todas as locadoras no mesmo lugar",
      descricao: "Reserve com antecedência e pague menos. Reserva em minutos, sem taxa de cancelamento.",
      link: "https://www.rentcars.com/pt-br/?requestorid=10861&utm_source=blogtravelpartiu.com.br&utm_medium=afiliado-link",
      cta: "Comparar locadoras",
    },
  ],

  Destinos: [
    {
      id: "booking",
      badge: "Reserve com antecedência",
      titulo: "Hotel próximo ao estádio com cancelamento grátis",
      descricao: "Maior seleção de acomodações perto das sedes. Preço garantido, cancele sem custo.",
      link: "#AFILIADO-BOOKING",
      cta: "Buscar hospedagem",
    },
    {
      id: "seguro",
      badge: "Indispensável no exterior",
      titulo: "Emergência médica nos EUA pode ultrapassar R$ 50.000",
      descricao: "Viagem internacional requer proteção. Cote em minutos, a partir de R$ 10/dia.",
      link: "https://www.segurospromo.com.br/?utm_medium=afiliado&pcrid=14642&utm_source=site-blog",
      cta: "Cotar seguro viagem",
    },
  ],

  "Viagem econômica": [
    {
      id: "booking",
      badge: "Filtre por preço",
      titulo: "Hostels, pousadas e apartamentos com cancelamento grátis",
      descricao: "Encontre o melhor custo-benefício com avaliações reais de viajantes.",
      link: "#AFILIADO-BOOKING",
      cta: "Buscar hospedagem barata",
    },
    {
      id: "rentcars",
      badge: "Até 40% mais barato",
      titulo: "Reserve o carro com antecedência e economize na locadora",
      descricao: "Compare todas as locadoras em um só lugar e garanta o melhor preço.",
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
