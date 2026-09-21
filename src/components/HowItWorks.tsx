import React from 'react';
import { Sparkles, MessageCircle, ArrowRight, CheckCircle2 } from 'lucide-react';
import { generateWhatsAppUrl } from '../config/brand';
import { trackWhatsAppClick } from '../utils/tracking';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      number: '01',
      title: 'Escolha o Modelo Ideal',
      description:
        'Conheça nossos 3 modelos prontos (a partir de R$ 80). Todos desenhados com harmonia para fotos inesquecíveis.',
      highlight: 'A partir de R$ 80',
    },
    {
      number: '02',
      title: 'Reserve Sua Data no WhatsApp',
      description:
        'Envie uma mensagem, informe o dia do seu casamento e verifique a disponibilidade imediatamente com nossa equipe.',
      highlight: 'Atendimento Rápido',
    },
    {
      number: '03',
      title: 'Retire Tudo Pronto em Teixeira de Freitas',
      description:
        'O kit é embalado e higienizado com cuidado. Cabe no porta-malas de qualquer carro de passeio comum.',
      highlight: 'Cabe no Porta-Malas',
    },
    {
      number: '04',
      title: 'Monte no seu Espaço e Devolva Depois',
      description:
        'Encaixes simples e intuitivos para montar em 30 a 45 minutos. Se preferir, também oferecemos serviço de montagem à parte.',
      highlight: 'Sem Estresse',
    },
  ];

  const handleWhatsAppStepClick = () => {
    trackWhatsAppClick({
      theme: 'casamento',
      buttonLocation: 'how_it_works_mockup',
      customMessage: 'Olá! Gostaria de entender melhor como funciona a retirada do kit de casamento pegue e monte em Teixeira de Freitas.',
      city: 'Teixeira de Freitas',
    });
    window.open(
      generateWhatsAppUrl('Olá! Gostaria de entender melhor como funciona a retirada do kit de casamento pegue e monte em Teixeira de Freitas.'),
      '_blank',
      'noopener,noreferrer'
    );
  };

  return (
    <section id="como-funciona" className="py-12 sm:py-20 px-3 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-16 space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#FFF0F4] border border-[#F0D7DF] text-xs font-bold text-[#9E244D] uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Passo a Passo Simples</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#1C1217] tracking-tight leading-tight">
          Como Funciona na Prática
        </h2>
        <p className="text-sm sm:text-base text-[#5C4A53] font-medium">
          Um processo descomplicado e seguro, pensado para você celebrar sem dor de cabeça.
        </p>
      </div>

      {/* 2-Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
        {/* Left Column: Realistic Mockup Visual */}
        <div className="lg:col-span-6 flex justify-center order-2 lg:order-1">
          <div className="relative w-full max-w-md bg-white border border-[#F0D7DF] rounded-3xl p-6 sm:p-8 shadow-sm flex flex-col items-center">
            {/* Soft backdrop glow */}
            <div className="absolute -top-10 -left-10 w-48 h-48 bg-[#FFF0F4] rounded-full blur-3xl pointer-events-none" />

            {/* Smartphone Mockup */}
            <div className="relative w-72 sm:w-80 bg-[#1C1217] rounded-[36px] p-3 border-4 border-[#3D2532] shadow-2xl">
              {/* Phone Speaker Notch */}
              <div className="w-20 h-4 bg-[#2A1922] rounded-full mx-auto mb-3" />

              {/* Screen Content */}
              <div className="bg-white rounded-[26px] overflow-hidden border border-[#F0D7DF] p-4 space-y-4">
                {/* Simulated WhatsApp Header */}
                <div className="flex items-center justify-between pb-3 border-b border-[#F0D7DF]">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#9E244D] to-[#7A1838] flex items-center justify-center text-white font-black text-xs">
                      BB
                    </div>
                    <div>
                      <div className="text-xs font-bold text-[#1C1217] leading-none">Buum Balloonn</div>
                      <div className="text-[10px] text-[#22C55E] font-semibold mt-0.5">Online agora</div>
                    </div>
                  </div>
                  <span className="text-[10px] text-[#5C4A53]">Teixeira de Freitas</span>
                </div>

                {/* Simulated Kit Image */}
                <div className="rounded-xl overflow-hidden aspect-16/10 relative">
                  <img
                    src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=600&q=80"
                    alt="Modelo Casamento Buum Balloonn"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-2 left-2 bg-[#1C1217]/85 backdrop-blur-xs text-[10px] font-bold text-white px-2.5 py-0.5 rounded-md">
                    Modelo Encanto • R$ 250
                  </div>
                </div>

                {/* Simulated Message bubbles */}
                <div className="space-y-2 text-[11px]">
                  <div className="bg-[#FAF5F7] text-[#1C1217] p-2.5 rounded-2xl rounded-tl-xs max-w-[85%] border border-[#F0D7DF]">
                    Olá! Sua data de casamento está disponível no kit pegue e monte! Já reservamos para você?
                  </div>
                  <div className="bg-[#22C55E] text-white font-semibold p-2.5 rounded-2xl rounded-tr-xs ml-auto max-w-[85%] text-right shadow-sm">
                    Sim, perfeito! Queremos o Modelo Encanto para o sábado! 💍
                  </div>
                </div>

                {/* Direct Action Button on screen */}
                <button
                  onClick={handleWhatsAppStepClick}
                  className="w-full min-h-[44px] py-2.5 rounded-xl bg-[#9E244D] hover:bg-[#83183B] text-white font-black text-xs flex items-center justify-center gap-1.5 shadow-md active:scale-95 transition-all cursor-pointer"
                >
                  <MessageCircle className="w-3.5 h-3.5 fill-white stroke-none" />
                  <span>Consultar Disponibilidade</span>
                </button>
              </div>
            </div>

            {/* Bottom Note */}
            <p className="text-xs text-[#5C4A53] mt-4 text-center font-medium">
              Retirada simples e orientada no centro de Teixeira de Freitas, BA.
            </p>
          </div>
        </div>

        {/* Right Column: Numbered Step Badges */}
        <div className="lg:col-span-6 space-y-6 sm:space-y-7 order-1 lg:order-2">
          {steps.map((step, idx) => (
            <div key={idx} className="flex items-start gap-4 sm:gap-5 group">
              {/* Number Badge (01, 02, etc.) */}
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white border-2 border-[#F0D7DF] group-hover:border-[#9E244D] group-hover:bg-[#FFF0F4] flex items-center justify-center text-base sm:text-lg font-black text-[#9E244D] shrink-0 transition-colors shadow-sm">
                {step.number}
              </div>

              {/* Step Info */}
              <div className="space-y-1 pt-1">
                <div className="flex items-center gap-2.5 flex-wrap">
                  <h3 className="text-lg sm:text-xl font-black text-[#1C1217] tracking-tight group-hover:text-[#9E244D] transition-colors">
                    {step.title}
                  </h3>
                  <span className="text-[11px] font-bold text-[#9E244D] bg-[#FFF0F4] px-2.5 py-0.5 rounded-full border border-[#F0D7DF]">
                    {step.highlight}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-[#5C4A53] leading-relaxed font-medium">
                  {step.description}
                </p>
              </div>
            </div>
          ))}

          {/* Transparent Assembly Warning Box */}
          <div className="p-4 rounded-2xl bg-white border border-[#F0D7DF] text-xs text-[#5C4A53] flex items-start gap-3 shadow-xs">
            <CheckCircle2 className="w-4 h-4 text-[#9E244D] shrink-0 mt-0.5" />
            <span>
              <strong className="text-[#1C1217]">Precisa de montagem no local?</strong> Se preferir que nossa equipe monte e desmonte no seu espaço, consulte disponibilidade e taxa para o seu bairro.
            </span>
          </div>

          {/* Reorganized CTA Button for this section */}
          <div className="pt-2">
            <button
              onClick={handleWhatsAppStepClick}
              className="w-full sm:w-auto min-h-[48px] px-6 py-3.5 rounded-2xl bg-[#22C55E] hover:bg-[#1ea850] text-white font-black text-sm flex items-center justify-center gap-2.5 shadow-md shadow-[#22C55E]/20 active:scale-95 transition-all cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 fill-white stroke-none shrink-0" />
              <span>Quero Reservar Minha Data no WhatsApp</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

