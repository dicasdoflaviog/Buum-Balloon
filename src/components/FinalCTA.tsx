import React from 'react';
import { MessageCircle, CheckCircle2, Sparkles } from 'lucide-react';
import { generateWhatsAppUrl } from '../config/brand';
import { trackWhatsAppClick } from '../utils/tracking';

export const FinalCTA: React.FC = () => {
  const whatsappMessage =
    'Olá! Vim pela página da Buum Balloonn e quero consultar a disponibilidade de uma decoração pegue e monte para meu casamento em Teixeira de Freitas.';

  const handleWhatsAppClick = () => {
    trackWhatsAppClick({
      theme: 'casamento',
      buttonLocation: 'final_cta_bento',
      customMessage: whatsappMessage,
      city: 'Teixeira de Freitas',
    });
    window.open(generateWhatsAppUrl(whatsappMessage), '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="py-12 sm:py-20 px-3 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Bento Card with rich contrast */}
      <div className="bg-[#1C1217] border border-[#3D2532] rounded-3xl sm:rounded-[36px] overflow-hidden p-6 sm:p-10 md:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center shadow-2xl relative">
        {/* Subtle background glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#9E244D]/15 rounded-full blur-3xl pointer-events-none" />

        {/* Left: Featured Portrait in rounded frame */}
        <div className="lg:col-span-5 flex justify-center">
          <div className="relative w-full max-w-sm rounded-3xl overflow-hidden aspect-4/5 bg-gradient-to-br from-[#9E244D] to-[#3D2532] p-2 sm:p-2.5 shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=85"
              alt="Noiva celebrando casamento com Buum Balloonn"
              className="w-full h-full object-cover rounded-2xl"
            />
            <div className="absolute bottom-5 left-5 right-5 bg-[#1C1217]/90 backdrop-blur-md rounded-xl p-3 border border-white/10 text-white text-xs">
              <div className="font-bold text-rose-200">Buum Balloonn Decorações</div>
              <div className="text-[11px] text-rose-100/70">Teixeira de Freitas, Bahia</div>
            </div>
          </div>
        </div>

        {/* Right: Bold Title & Action */}
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#3D2532] border border-[#5C3A4D] text-xs font-bold text-rose-200 uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-[#22C55E]" />
            <span>Seu Momento Começa Aqui</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight">
            A solução perfeita para o seu casamento em Teixeira de Freitas
          </h2>

          <p className="text-sm sm:text-base text-rose-100/80 leading-relaxed font-medium">
            Seu casamento não precisa começar com uma dívida pesada de decoração. Comece escolhendo uma opção elegante, prática e que cabe perfeitamente no seu bolso.
          </p>

          {/* Bullet points */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs sm:text-sm text-rose-50 font-medium">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#22C55E] shrink-0" />
              <span>Casamento Civil e Religioso</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#22C55E] shrink-0" />
              <span>Mini Weddings e Noivados</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#22C55E] shrink-0" />
              <span>Recepções em Sítios e Salões</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#22C55E] shrink-0" />
              <span>Almoços e Jantares em Família</span>
            </div>
          </div>

          {/* WhatsApp CTA */}
          <div className="pt-4 space-y-3">
            <button
              onClick={handleWhatsAppClick}
              className="w-full sm:w-auto min-h-[54px] px-8 py-4 rounded-2xl bg-[#22C55E] hover:bg-[#1ea850] text-white font-black text-base sm:text-lg flex items-center justify-center gap-3 shadow-xl shadow-[#22C55E]/30 active:scale-98 transition-all cursor-pointer"
            >
              <MessageCircle className="w-5 h-5 fill-white stroke-none shrink-0" />
              <span>Quero Conversar no WhatsApp</span>
            </button>
            <p className="text-xs text-rose-200/70 font-medium">
              Atendimento ágil pelo WhatsApp. Consulte a disponibilidade para sua data.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

