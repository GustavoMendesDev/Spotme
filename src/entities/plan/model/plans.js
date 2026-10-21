export const plans = [
  {
    id: 'starter',
    name: 'Starter',
    price: 'Grátis',
    period: '',
    highlighted: false,
    description: 'Para começar a encontrar seu spotter',
    features: [
      'Até 5 matches por mês',
      'Match por horário e academia',
      'Chat básico',
      'Perfil simples'
    ]
  },
  {
    id: 'pro',
    name: 'Pro',
    price: 'R$ 29',
    period: '/mês',
    highlighted: true,
    description: 'O favorito da galera',
    features: [
      'Matches ilimitados',
      'Match inteligente avançado',
      'Chat com todos os matches',
      'Ver quem curtiu você',
      'Filtro por objetivo e nível',
      'Prioridade no match'
    ]
  },
  {
    id: 'elite',
    name: 'Elite',
    price: 'R$ 49',
    period: '/mês',
    highlighted: false,
    description: 'Para quem leva a sério',
    features: [
      'Tudo do plano Pro',
      'Acesso a eventos na academia',
      'Ver online dos matches',
      'Perfil destacado',
      'Suporte prioritário',
      'Badge Elite'
    ]
  }
]
