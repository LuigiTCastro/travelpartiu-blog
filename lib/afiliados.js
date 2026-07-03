export const afiliadosPorCategoria = {
  Roteiros: [
    {
      id: "booking",
      badge: "Melhor preço garantido",
      icon: "🏨",
      titulo: "Reserve seu hotel e economize até 35%",
      descricao:
        "Mais de 1 milhão de propriedades com cancelamento gratuito. Compare preços e reserve sem risco — hotéis, pousadas e apartamentos.",
      link: "#AFILIADO-BOOKING",
      cta: "Buscar hotéis agora",
    },
    {
      id: "decolar",
      badge: "Compare e economize",
      icon: "✈️",
      titulo: "Passagens aéreas com até 50% de desconto",
      descricao:
        "Monitore preços e receba alertas de queda. Voos nacionais e internacionais — encontre a melhor tarifa para o seu roteiro.",
      link: "#AFILIADO-DECOLAR",
      cta: "Buscar passagens",
    },
  ],

  Planejamento: [
    {
      id: "seguro",
      badge: "Não viaje sem",
      icon: "🛡️",
      titulo: "1 emergência médica nos EUA pode custar R$ 100 mil",
      descricao:
        "Seguro viagem cobre internação, cancelamento de voo e bagagem perdida. Cote agora em segundos — a partir de R$ 10/dia.",
      link: "https://www.segurospromo.com.br/?utm_medium=afiliado&pcrid=14642&utm_source=site-blog",
      cta: "Cotar seguro agora",
    },
    {
      id: "maxmilhas",
      badge: "Economize até 60%",
      icon: "🎫",
      titulo: "Passagem para os EUA muito mais barata com milhas",
      descricao:
        "Compre pontos avulsos ou troque por passagens no maior marketplace de milhas do Brasil. Voos disponíveis agora.",
      link: "#AFILIADO-MAXMILHAS",
      cta: "Ver passagens com milhas",
    },
  ],

  "Dicas de viagem": [
    {
      id: "booking",
      badge: "Cancelamento grátis",
      icon: "🏨",
      titulo: "Encontre o hotel certo para o seu estilo",
      descricao:
        "De hostels econômicos a resorts completos. Cancelamento gratuito na maioria das opções — reserve sem compromisso.",
      link: "#AFILIADO-BOOKING",
      cta: "Comparar hospedagens",
    },
    {
      id: "rentcars",
      badge: "Seguro incluído",
      icon: "🚗",
      titulo: "Alugue o carro com seguro incluso e economize",
      descricao:
        "Compare preços nas principais locadoras do Brasil e do mundo. Reserva em minutos, sem burocracia e sem taxa de cancelamento.",
      link: "https://www.rentcars.com/pt-br/?requestorid=10861&utm_source=blogtravelpartiu.com.br&utm_medium=afiliado-link",
      cta: "Comparar locadoras",
    },
  ],

  Destinos: [
    {
      id: "booking",
      badge: "Reserve com segurança",
      icon: "🏨",
      titulo: "Hotel perto do estádio com cancelamento gratuito",
      descricao:
        "Compare opções próximas ao local do jogo ou no centro da cidade. Cancele grátis até 24h antes — sem risco.",
      link: "#AFILIADO-BOOKING",
      cta: "Ver hotéis disponíveis",
    },
    {
      id: "seguro",
      badge: "Essencial para internacionais",
      icon: "🛡️",
      titulo: "Viagem internacional? Leve seguro — sem exceção",
      descricao:
        "Uma hospitalização nos EUA pode custar R$ 50.000. Seguro viagem cobre saúde, cancelamento e bagagem. Cote em segundos.",
      link: "https://www.segurospromo.com.br/?utm_medium=afiliado&pcrid=14642&utm_source=site-blog",
      cta: "Cotar seguro viagem",
    },
  ],

  "Viagem econômica": [
    {
      id: "booking",
      badge: "Melhor preço garantido",
      icon: "🏨",
      titulo: "Hospedagem barata sem abrir mão do conforto",
      descricao:
        "Filtre por preço, localização e avaliação. Hostels, pousadas e apartamentos — cancelamento grátis na maioria.",
      link: "#AFILIADO-BOOKING",
      cta: "Buscar hospedagem barata",
    },
    {
      id: "rentcars",
      badge: "Compare e economize",
      icon: "🚗",
      titulo: "Carro por menos: compare todas as locadoras",
      descricao:
        "Preços de Localiza, Movida, Unidas e mais em um só lugar. Reserve com antecedência e economize até 40%.",
      link: "https://www.rentcars.com/pt-br/?requestorid=10861&utm_source=blogtravelpartiu.com.br&utm_medium=afiliado-link",
      cta: "Comparar preços",
    },
  ],
};

export function getAfiliadosPorCategoria(categoria) {
  return afiliadosPorCategoria[categoria] || afiliadosPorCategoria["Roteiros"];
}
