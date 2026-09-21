import { LandingPageConfig, GalleryItem } from '../types';

export const casamentoConfig: LandingPageConfig = {
  slug: 'casamento',
  category: 'Casamento',
  title: 'Seu casamento bonito, acessível e sem complicação',
  subtitle:
    'Escolha uma decoração pegue e monte, retire tudo pronto e transforme seu espaço para celebrar um dos dias mais importantes da sua vida.',
  location: 'Teixeira de Freitas, Bahia',
  startingPrice: 80,
  heroImage:
    'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80',
  gallery: [
    'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=800&q=80',
  ],
  models: [
    {
      name: 'Essencial',
      price: 80,
      description: 'Para celebrações intimistas e orçamentos mais enxutos.',
      highlights: [
        'Composição básica',
        'Itens selecionados',
        'Ideal para pequenos espaços',
        'Formato pegue e monte',
        'Opção simples para começar',
      ],
      featured: false,
      idealFor: 'Casamento civil, almoço íntimo ou recepção para até 15 pessoas.',
      sampleImage:
        'https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&w=600&q=80',
    },
    {
      name: 'Encanto',
      price: 250,
      description: 'Para quem deseja uma decoração mais completa e visualmente marcante.',
      highlights: [
        'Cenário principal',
        'Mesa decorada',
        'Mais elementos visuais',
        'Ideal para fotos',
        'Formato pegue e monte',
      ],
      featured: true,
      idealFor: 'Mini wedding em casa, varanda gourmet ou pequenos salões.',
      sampleImage:
        'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=600&q=80',
    },
    {
      name: 'Celebração',
      price: 600,
      description: 'Para quem deseja uma composição mais completa e com maior impacto visual.',
      highlights: [
        'Composição ampliada',
        'Mais peças decorativas',
        'Cenário para fotos',
        'Possibilidade de personalização',
        'Formato pegue e monte',
      ],
      featured: false,
      idealFor: 'Cerimônias especiais, recepções ampliadas e cenários fotográficos.',
      sampleImage:
        'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=600&q=80',
    },
  ],
  benefits: [
    {
      title: 'Mais acessível',
      description: 'Escolha uma opção compatível com o seu orçamento.',
      icon: 'PiggyBank',
    },
    {
      title: 'Pronto para montar',
      description: 'Receba os itens organizados para montar no seu espaço.',
      icon: 'Boxes',
    },
    {
      title: 'Visual encantador',
      description: 'Crie um ambiente bonito para celebrar e tirar fotos.',
      icon: 'Camera',
    },
    {
      title: 'Mais liberdade',
      description: 'Escolha o local, o horário e a forma de montar sua decoração.',
      icon: 'Sparkles',
    },
  ],
  faq: [
    {
      question: 'A decoração já vem montada?',
      answer:
        'Não. As decorações da Buum Balloonn são no formato pegue e monte. Você retira os itens, monta no local do evento e devolve conforme o combinado.',
    },
    {
      question: 'Vocês fazem a montagem?',
      answer:
        'A montagem e a desmontagem podem ser contratadas como serviço adicional, conforme disponibilidade e localização em Teixeira de Freitas.',
    },
    {
      question: 'Posso personalizar um modelo?',
      answer:
        'Sim. Os três modelos são pontos de partida. A Buum Balloonn pode avaliar alterações de cores, peças, quantidade de itens e composição.',
    },
    {
      question: 'O valor inclui transporte?',
      answer:
        'O transporte deve ser consultado de acordo com o local do evento e a disponibilidade da Buum Balloonn.',
    },
    {
      question: 'Com quanto tempo devo reservar?',
      answer:
        'A disponibilidade depende da data e da quantidade de itens. Quanto antes você solicitar, maiores são as chances de encontrar o modelo desejado.',
    },
    {
      question: 'O que acontece se eu precisar de mais itens?',
      answer:
        'Podemos avaliar itens adicionais conforme disponibilidade e orçamento.',
    },
    {
      question: 'Como funciona a devolução?',
      answer:
        'A devolução é combinada no momento da contratação, considerando a data, o horário e as condições de uso dos itens.',
    },
  ],
  whatsappMessage:
    'Olá! Vim pela página de casamento e quero conhecer os modelos de decoração pegue e monte. Minha data é [DATA] e a cidade é Teixeira de Freitas.',
};

export const casamentoGalleryItems: GalleryItem[] = [
  {
    id: 'casamento-geral',
    title: 'Cenário Geral de Cerimônia Intimista',
    category: 'cenario',
    imageUrl:
      'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80',
    altText:
      'Referência visual de cenário geral para casamento intimista em tons pastéis e flores delicadas.',
  },
  {
    id: 'casamento-mesa-bolo',
    title: 'Mesa do Bolo e Doces',
    category: 'mesa',
    imageUrl:
      'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=800&q=80',
    altText:
      'Referência visual de mesa do bolo decorada com louças e suportes para doces de casamento.',
  },
  {
    id: 'casamento-cenario-fotos',
    title: 'Cenário Decorativo para Fotos dos Noivos',
    category: 'cenario',
    imageUrl:
      'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=800&q=80',
    altText:
      'Referência visual de painel romântico para registro de fotos de casamento com os convidados.',
  },
  {
    id: 'casamento-detalhes',
    title: 'Detalhes Decorativos e Peças Finas',
    category: 'detalhes',
    imageUrl:
      'https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=800&q=80',
    altText:
      'Referência visual de arranjos delicados, bandejas e peças de apoio para mesa de casamento.',
  },
  {
    id: 'casamento-modelo-essencial',
    title: 'Exemplo de Composição: Modelo Essencial',
    category: 'modelo',
    modelName: 'Modelo Essencial',
    imageUrl:
      'https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&w=800&q=80',
    altText:
      'Referência de montagem compacta e delicada para casamento civil e espaços pequenos.',
  },
  {
    id: 'casamento-modelo-encanto',
    title: 'Exemplo de Composição: Modelo Encanto',
    category: 'modelo',
    modelName: 'Modelo Encanto',
    imageUrl:
      'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=800&q=80',
    altText:
      'Referência de decoração com painel, arco decorativo e suportes para bolo e doces.',
  },
  {
    id: 'casamento-modelo-celebracao',
    title: 'Exemplo de Composição: Modelo Celebração',
    category: 'modelo',
    modelName: 'Modelo Celebração',
    imageUrl:
      'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80',
    altText:
      'Referência de cenário completo com visual marcante e estrutura ampliada.',
  },
];

/**
 * Other themes ready for modular expansion (Demonstrating architectural flexibility)
 */
export const aniversarioConfig: LandingPageConfig = {
  slug: 'aniversario',
  category: 'Aniversário',
  title: 'Seu aniversário lindo, prático e dentro do orçamento',
  subtitle:
    'Kit pegue e monte completo com painel, suportes e peças decorativas para transformar a sua festa em Teixeira de Freitas.',
  location: 'Teixeira de Freitas, Bahia',
  startingPrice: 70,
  heroImage:
    'https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=1200&q=80',
  gallery: [
    'https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=800&q=80',
  ],
  models: [
    {
      name: 'Essencial Aniversário',
      price: 70,
      description: 'Ideal para um bolinho em casa ou mesa temática compacta.',
      highlights: ['Painel compacto', 'Bandejas selecionadas', 'Pegue e monte'],
      featured: false,
    },
    {
      name: 'Encanto Aniversário',
      price: 180,
      description: 'Mesa decorada com cilindros, peças e suporte para fotos.',
      highlights: ['Mesa de bolo', 'Cilindros e bandejas', 'Cenário alegre', 'Pegue e monte'],
      featured: true,
    },
    {
      name: 'Celebração Aniversário',
      price: 450,
      description: 'Cenário amplo para festejar com família e amigos.',
      highlights: ['Painéis duplos', 'Peças especiais', 'Arco de balões sob consulta', 'Pegue e monte'],
      featured: false,
    },
  ],
  benefits: casamentoConfig.benefits,
  faq: casamentoConfig.faq,
  whatsappMessage:
    'Olá! Vim pela página de aniversário e quero conhecer os modelos pegue e monte em Teixeira de Freitas.',
};

export const chaDeBebeConfig: LandingPageConfig = {
  slug: 'cha-de-bebe',
  category: 'Chá de Bebê e Revelação',
  title: 'Chá de Bebê especial, delicado e sem complicação',
  subtitle:
    'Kits pegue e monte em tons pastéis e temas afetivos para receber quem você mais ama com carinho.',
  location: 'Teixeira de Freitas, Bahia',
  startingPrice: 75,
  heroImage:
    'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=1200&q=80',
  gallery: [
    'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&q=80',
  ],
  models: casamentoConfig.models,
  benefits: casamentoConfig.benefits,
  faq: casamentoConfig.faq,
  whatsappMessage:
    'Olá! Vim pela página de Chá de Bebê e quero verificar os modelos pegue e monte para minha data.',
};

export const batizadoConfig: LandingPageConfig = {
  slug: 'batizado',
  category: 'Batizado',
  title: 'Decoração suave e acolhedora para o batizado',
  subtitle:
    'Kits delicados em tons brancos, off-white e pastéis para um momento sagrado em família.',
  location: 'Teixeira de Freitas, Bahia',
  startingPrice: 80,
  heroImage:
    'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80',
  gallery: [],
  models: casamentoConfig.models,
  benefits: casamentoConfig.benefits,
  faq: casamentoConfig.faq,
  whatsappMessage:
    'Olá! Vim pela página de Batizado da Buum Balloonn e quero conhecer as opções disponíveis.',
};

export const THEMES_MAP: Record<string, LandingPageConfig> = {
  casamento: casamentoConfig,
  aniversario: aniversarioConfig,
  'cha-de-bebe': chaDeBebeConfig,
  batizado: batizadoConfig,
  formatura: {
    ...casamentoConfig,
    slug: 'formatura',
    category: 'Formatura',
    title: 'Celebre sua conquista com estilo e economia',
    subtitle: 'Decoração pegue e monte para recepções de formatura intimistas em Teixeira de Freitas.',
    whatsappMessage: 'Olá! Vim pela página de formatura e quero saber sobre os kits pegue e monte.',
  },
  mesversario: {
    ...casamentoConfig,
    slug: 'mesversario',
    category: 'Mesversário',
    title: 'Mesversários práticos e cheios de charme',
    subtitle: 'Composições práticas para registrar o crescimento do seu bebê mês a mês.',
    startingPrice: 60,
    whatsappMessage: 'Olá! Vim pela página de mesversário e quero consultar os modelos disponíveis.',
  },
  confraternizacao: {
    ...casamentoConfig,
    slug: 'confraternizacao',
    category: 'Confraternização',
    title: 'Confraternizações leves, bonitas e sem dor de cabeça',
    whatsappMessage: 'Olá! Vim pela página de confraternização e quero conhecer os modelos pegue e monte.',
  },
  'dia-das-maes': {
    ...casamentoConfig,
    slug: 'dia-das-maes',
    category: 'Dia das Mães',
    title: 'Um cantinho especial para homenagear as mães',
    whatsappMessage: 'Olá! Vim pela página do Dia das Mães e quero conhecer os kits decorativos.',
  },
  'dia-dos-namorados': {
    ...casamentoConfig,
    slug: 'dia-dos-namorados',
    category: 'Dia dos Namorados',
    title: 'Decoração romântica e intimista para dois',
    whatsappMessage: 'Olá! Vim pela página de Dia dos Namorados e quero saber sobre os kits pegue e monte.',
  },
  natal: {
    ...casamentoConfig,
    slug: 'natal',
    category: 'Natal e Fim de Ano',
    title: 'Decoração aconchegante para a ceia em família',
    whatsappMessage: 'Olá! Vim pela página de Natal e quero ver as opções de pegue e monte.',
  },
};
