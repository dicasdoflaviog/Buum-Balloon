import React from 'react';
import { Check, Sparkles, MessageCircle, Star, ArrowRight } from 'lucide-react';
import { generateWhatsAppUrl } from '../config/brand';
import { trackInitiateCheckout, trackWhatsAppClick } from '../utils/tracking';

export const PricingCards: React.FC = () => {
  const models = [
    {
      id: 'essencial',
      name: 'Modelo Essencial',
      price: '80',
      tag: 'Casamento Civil & Noivado',
      isPopular: false,
      image: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=700&q=80',
      description: 'Ideal para casamento no civil, recepção intimista em casa ou cantinho nobre para o bolo e brinde.',
      features: [
        'Painel redondo ou arco discreto',
        'Cilindro ou mesinha de apoio para o bolo',
        'Arranjo floral delicado em tons nobres',
        'Suporte fino para bolo e porta-doces',
        'Embalado para qualquer porta-malas',
      ],
      ctaText: 'Consultar Modelo Essencial • R$ 80',
      whatsappMsg:
        'Olá! Gostaria de consultar a disponibilidade do Modelo Essencial (a partir de R$ 80) para meu casamento em Teixeira de Freitas.',
    },
    {
      id: 'encanto',
      name: 'Modelo Encanto',
      price: '250',
      tag: 'O Mais Escolhido Pelas Noivas',
      isPopular: true,
      image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=700&q=80',
      description: 'A combinação mais equilibrada entre beleza, presença fotográfica marcante e excelente custo-benefício.',
      features: [
        'Arco romano ou painel ripado moderno',
        'Trio de mesas cilindro coordenadas',
        'Arranjo floral permanente nobre toque real',
        'Bolo cenográfico de casamento incluso',
        'Kit completo de louças finas para doces',
        'Guia rápido de montagem fácil (30 min)',
      ],
      ctaText: 'Reservar Modelo Encanto • R$ 250',
      whatsappMsg:
        'Olá! Gostaria de consultar a disponibilidade do Modelo Encanto (a partir de R$ 250) para meu casamento em Teixeira de Freitas.',
    },
    {
      id: 'celebracao',
      name: 'Modelo Celebração',
      price: '600',
      tag: 'Mini Wedding & Recepção Completa',
      isPopular: false,
      image: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=700&q=80',
      description: 'Para noivos que desejam um cenário fotográfico amplo, imponente e completo para receber convidados.',
      features: [
        'Composição ampla de painéis duplos',
        'Trio de cilindros + aparador floral',
        'Dois arranjos florais volumosos de destaque',
        'Bolo cenográfico + jogo premium de louças',
        'Tapete delimitador de cenário incluso',
        'Opção de montagem no local disponível',
      ],
      ctaText: 'Consultar Modelo Celebração • R$ 600',
      whatsappMsg:
        'Olá! Gostaria de consultar a disponibilidade do Modelo Celebração (a partir de R$ 600) para meu casamento em Teixeira de Freitas.',
    },
  ];

  const handleSelectModel = (model: (typeof models)[0]) => {
    trackInitiateCheckout({
      theme: 'casamento',
      modelId: model.id,
      modelName: model.name,
      value: Number(model.price),
      currency: 'BRL',
    });

    trackWhatsAppClick({
      theme: 'casamento',
      modelId: model.id,
      modelName: model.name,
      buttonLocation: 'pricing_card',
      customMessage: model.whatsappMsg,
      city: 'Teixeira de Freitas',
    });

    window.open(generateWhatsAppUrl(model.whatsappMsg), '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="modelos" className="py-12 sm:py-20 px-3 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14 space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#FFF0F4] border border-[#F0D7DF] text-xs font-bold text-[#9E244D] uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Modelos Prontos de Casamento</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#1C1217] tracking-tight leading-tight">
          Escolha o modelo que cabe no seu casamento
        </h2>
        <p className="text-sm sm:text-base text-[#5C4A53] font-medium">
          Valores transparentes e sem letras miúdas. Você retira pronto no centro de Teixeira de Freitas e monta com total facilidade.
        </p>
      </div>

      {/* 3 Pricing Cards Grid with Pastel surfaces & High-Contrast CTA Hierarchy */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
        {models.map((model) => (
          <div
            key={model.id}
            className={`rounded-3xl flex flex-col justify-between overflow-hidden transition-all duration-300 relative ${
              model.isPopular
                ? 'bg-[#FFF2F6] border-2 border-[#9E244D] shadow-xl shadow-[#9E244D]/15 lg:-translate-y-2'
                : 'bg-white border border-[#F0D7DF] hover:border-[#9E244D]/40 shadow-sm hover:shadow-md'
            }`}
          >
            {/* Top Popular Ribbon */}
            {model.isPopular && (
              <div className="bg-[#9E244D] text-white text-xs font-black py-2 px-4 text-center flex items-center justify-center gap-1.5 tracking-wider uppercase">
                <Star className="w-3.5 h-3.5 fill-white" />
                <span>O Mais Escolhido Pelas Noivas</span>
              </div>
            )}

            {/* Photo & Badge */}
            <div className="relative aspect-16/10 overflow-hidden bg-[#FAF5F7]">
              <img
                src={model.image}
                alt={model.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-bold text-[#1C1217] border border-[#F0D7DF] shadow-sm">
                {model.tag}
              </div>
            </div>

            {/* Card Body */}
            <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div>
                  <h3 className="text-2xl font-black text-[#1C1217] tracking-tight">{model.name}</h3>
                  <p className="text-xs sm:text-sm text-[#5C4A53] mt-1 leading-relaxed">{model.description}</p>
                </div>

                {/* Price Display */}
                <div className="pt-2 pb-2 border-y border-[#F0D7DF] flex items-baseline gap-2">
                  <span className="text-xs font-bold text-[#5C4A53] uppercase">A partir de</span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-base font-bold text-[#1C1217]">R$</span>
                    <span className="text-4xl sm:text-5xl font-black text-[#1C1217] tracking-tight">
                      {model.price}
                    </span>
                  </div>
                  <span className="text-xs text-[#5C4A53] ml-auto font-medium">pegue & monte</span>
                </div>

                {/* Inclusions List */}
                <div className="space-y-2.5 pt-1">
                  <span className="text-xs font-bold text-[#1C1217] uppercase tracking-wider block">
                    O que está incluído no kit:
                  </span>
                  {model.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#5C4A53]">
                      <Check className="w-4 h-4 text-[#9E244D] shrink-0 mt-0.5" />
                      <span className="leading-snug">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Reorganized Action Button */}
              <div className="pt-4 space-y-2">
                <button
                  onClick={() => handleSelectModel(model)}
                  className={`w-full min-h-[48px] py-3.5 px-4 rounded-2xl font-extrabold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all cursor-pointer shadow-md active:scale-95 ${
                    model.isPopular
                      ? 'bg-[#9E244D] hover:bg-[#83183B] text-white shadow-[#9E244D]/25'
                      : 'bg-[#22C55E] hover:bg-[#1ea850] text-white shadow-[#22C55E]/20'
                  }`}
                >
                  <MessageCircle className="w-4 h-4 fill-white stroke-none shrink-0" />
                  <span>{model.ctaText}</span>
                </button>
                <p className="text-[11px] text-[#5C4A53] text-center font-medium">
                  Clique para verificar disponibilidade no WhatsApp
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Transparent Note */}
      <div className="mt-8 text-center text-xs text-[#5C4A53] max-w-xl mx-auto">
        * Os valores exibidos são iniciais para retirada no formato pegue e monte em Teixeira de Freitas. Personalização de cores e montagem no local sob consulta.
      </div>
    </section>
  );
};

