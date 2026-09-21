import React from 'react';
import { BRAND_DATA, generateWhatsAppUrl } from '../config/brand';
import { MapPin, MessageCircle, Sparkles } from 'lucide-react';
import { trackWhatsAppClick } from '../utils/tracking';

export const CampaignHeader: React.FC = () => {
  const handleWhatsApp = () => {
    trackWhatsAppClick({
      theme: 'casamento',
      buttonLocation: 'header_nav',
      customMessage: 'Olá! Vim pela página da Buum Balloonn e quero informações sobre a decoração de casamento pegue e monte.',
      city: 'Teixeira de Freitas',
    });
    window.open(
      generateWhatsAppUrl('Olá! Vim pela página da Buum Balloonn e quero informações sobre a decoração de casamento pegue e monte.'),
      '_blank',
      'noopener,noreferrer'
    );
  };

  return (
    <header className="sticky top-0 z-50 w-full px-3 sm:px-6 py-2.5 sm:py-3 backdrop-blur-xl bg-[#FAF5F7]/90 border-b border-[#F0D7DF] transition-all">
      <div className="max-w-6xl mx-auto flex items-center justify-between gap-3">
        {/* Brand identity (Logo + City) */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-2xl bg-gradient-to-br from-[#9E244D] to-[#6A1230] text-white flex items-center justify-center font-black text-lg tracking-tight shadow-md shadow-[#9E244D]/25 shrink-0">
            B
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold text-base sm:text-lg tracking-tight text-[#1C1217] leading-none">
              {BRAND_DATA.name}
            </span>
            <span className="text-[11px] sm:text-xs text-[#5C4A53] flex items-center gap-1 font-medium mt-1">
              <MapPin className="w-3 h-3 text-[#9E244D] shrink-0" />
              <span>{BRAND_DATA.city}, BA</span>
            </span>
          </div>
        </div>

        {/* Right CTA Area (NO MENU, exactly as requested) */}
        <div className="flex items-center gap-2 sm:gap-3">
          <span className="hidden sm:inline-flex items-center gap-1.5 text-xs font-bold text-[#9E244D] bg-[#FFF0F4] border border-[#F0D7DF] px-3.5 py-1.5 rounded-full uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-[#9E244D]" />
            Pegue & Monte
          </span>

          <button
            onClick={handleWhatsApp}
            className="inline-flex items-center justify-center gap-2 bg-[#22C55E] hover:bg-[#1ea850] text-white font-extrabold text-xs sm:text-sm px-3.5 sm:px-5 py-2.5 rounded-full shadow-md shadow-[#22C55E]/20 active:scale-95 transition-all cursor-pointer min-h-[44px]"
            aria-label="Consultar data no WhatsApp"
          >
            <MessageCircle className="w-4 h-4 fill-white stroke-none shrink-0" />
            <span className="whitespace-nowrap">Consultar Data</span>
          </button>
        </div>
      </div>
    </header>
  );
};

