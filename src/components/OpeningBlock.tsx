import React from 'react';
import { ArrowDown, CheckCircle2, MessageCircle, Sparkles, Tag, MapPin } from 'lucide-react';
import { trackCTAclick, trackWhatsAppClick } from '../utils/tracking';
import { generateWhatsAppUrl } from '../config/brand';

interface OpeningBlockProps {
  onScrollToModels: () => void;
}

export const OpeningBlock: React.FC<OpeningBlockProps> = ({ onScrollToModels }) => {
  const handleCtaClick = () => {
    trackCTAclick('Quero ver os modelos', 'hero_opening');
    onScrollToModels();
  };

  const handleWhatsAppQuick = () => {
    const msg = 'Olá! Gostaria de consultar a disponibilidade para a data do meu casamento em Teixeira de Freitas.';
    trackWhatsAppClick({
      theme: 'casamento',
      buttonLocation: 'hero_floating_pill',
      customMessage: msg,
      city: 'Teixeira de Freitas',
    });
    window.open(generateWhatsAppUrl(msg), '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="relative px-3 sm:px-6 lg:px-8 pt-2 sm:pt-4 pb-8 sm:pb-14 max-w-7xl mx-auto">
      {/* Hero Container with cinematic wedding photo & high-contrast romantic overlay */}
      <div className="relative w-full rounded-3xl sm:rounded-[36px] overflow-hidden min-h-[540px] sm:min-h-[600px] md:min-h-[660px] flex flex-col justify-between p-5 sm:p-8 md:p-12 border border-[#F0D7DF] shadow-xl bg-[#1C1217]">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=2000&q=85"
            alt="Decoração de Casamento Buum Balloonn em Teixeira de Freitas"
            className="w-full h-full object-cover object-center"
            loading="eager"
            fetchPriority="high"
          />
          {/* High-contrast romantic gradient overlay ensuring perfect legibility */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#1A0E14] via-[#1A0E14]/75 to-[#1A0E14]/40" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1A0E14]/90 via-[#1A0E14]/65 to-transparent" />
        </div>

        {/* Top Badges over the image */}
        <div className="relative z-10 flex flex-wrap items-center justify-between gap-2.5">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-[#F0D7DF] text-xs font-bold text-[#1C1217] shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#9E244D]" />
            <span>Teixeira de Freitas, BA</span>
            <span className="text-gray-300">•</span>
            <span className="text-[#9E244D] font-extrabold">Pegue & Monte</span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#9E244D] text-white text-xs font-black uppercase tracking-wider shadow-md shadow-[#9E244D]/30">
            <Tag className="w-3.5 h-3.5" />
            <span>A partir de R$ 80</span>
          </div>
        </div>

        {/* Center Content DIRECTLY OVER THE IMAGE */}
        <div className="relative z-10 max-w-3xl my-auto py-6 sm:py-10 space-y-4 sm:space-y-6">
          {/* Category Chip */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FFF0F4]/90 backdrop-blur-md text-xs sm:text-sm font-bold text-[#9E244D] border border-[#F0D7DF]">
            <Sparkles className="w-3.5 h-3.5 text-[#9E244D]" />
            <span>Casamento Civil, Noivado e Mini Wedding</span>
          </div>

          {/* Main Display Headline */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-white leading-[1.1] tracking-tight">
            Uma decoração inesquecível para o seu casamento.
          </h1>

          {/* Subtitle */}
          <p className="text-sm sm:text-lg md:text-xl text-rose-50/90 font-medium max-w-2xl leading-relaxed">
            Sem estourar o orçamento e sem acumular itens inúteis depois da festa. Modelos prontos no formato pegue e monte com retirada fácil em Teixeira de Freitas.
          </p>

          {/* Reorganized UX-focused CTAs */}
          <div className="pt-2 sm:pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 max-w-xl">
            {/* Primary CTA Button: Scrolls to Models */}
            <button
              onClick={handleCtaClick}
              className="min-h-[50px] px-6 py-3.5 rounded-2xl sm:rounded-full bg-[#9E244D] hover:bg-[#83183B] text-white font-black text-sm sm:text-base tracking-tight flex items-center justify-center gap-2.5 transition-all cursor-pointer shadow-lg shadow-[#9E244D]/35 active:scale-95 whitespace-nowrap"
            >
              <span>Ver os 3 Modelos & Preços</span>
              <ArrowDown className="w-4 h-4 text-white stroke-[2.5]" />
            </button>

            {/* Secondary CTA Button: WhatsApp Date Check */}
            <button
              onClick={handleWhatsAppQuick}
              className="min-h-[50px] px-6 py-3.5 rounded-2xl sm:rounded-full bg-white hover:bg-rose-50 text-[#1C1217] font-bold text-sm sm:text-base flex items-center justify-center gap-2.5 transition-all cursor-pointer shadow-md active:scale-95 whitespace-nowrap border border-white"
            >
              <MessageCircle className="w-4 h-4 text-[#22C55E] fill-[#22C55E] shrink-0" />
              <span>Consultar Minha Data</span>
            </button>
          </div>

          {/* Micro trust cues */}
          <div className="pt-2 flex flex-wrap items-center gap-3 sm:gap-6 text-xs text-rose-100/90 font-medium">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#F7C9D4]" />
              Cabe em qualquer porta-malas
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#F7C9D4]" />
              Montagem rápida em 30 min
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#F7C9D4]" />
              Opção de montagem no local
            </span>
          </div>
        </div>

        {/* Bottom Social Proof Bar inside Hero */}
        <div className="relative z-10 pt-4 border-t border-white/15 flex flex-wrap items-center justify-between gap-3 text-xs text-rose-100/80">
          <div className="flex items-center gap-2.5">
            <div className="flex -space-x-2">
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=80&h=80&q=80"
                alt="Noiva satisfeita"
                className="w-7 h-7 rounded-full border-2 border-white object-cover"
              />
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=80&h=80&q=80"
                alt="Noivo satisfeito"
                className="w-7 h-7 rounded-full border-2 border-white object-cover"
              />
              <img
                src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=80&h=80&q=80"
                alt="Noiva satisfeita"
                className="w-7 h-7 rounded-full border-2 border-white object-cover"
              />
            </div>
            <span className="font-semibold text-white">
              +280 casais celebraram com a Buum Balloonn
            </span>
          </div>

          <div className="flex items-center gap-1.5 text-amber-300">
            <span className="text-sm">★★★★★</span>
            <span className="font-black text-white ml-0.5">4.9/5</span>
            <span className="text-rose-200/80 font-normal">(Avaliação dos Noivos)</span>
          </div>
        </div>
      </div>
    </section>
  );
};

