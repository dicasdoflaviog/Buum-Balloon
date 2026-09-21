import React from 'react';
import { MapPin, MessageCircle } from 'lucide-react';
import { BRAND_DATA, generateWhatsAppUrl } from '../config/brand';
import { trackWhatsAppClick } from '../utils/tracking';

interface MinimalCampaignHeaderProps {
  currentThemeSlug: string;
}

export const MinimalCampaignHeader: React.FC<MinimalCampaignHeaderProps> = ({ currentThemeSlug }) => {
  const handleDirectWhatsApp = () => {
    const msg = 'Olá! Vim pelo anúncio da Buum Balloonn e gostaria de informações sobre casamento pegue e monte em Teixeira de Freitas.';
    trackWhatsAppClick({
      theme: currentThemeSlug,
      buttonLocation: 'header',
      customMessage: msg,
    });
    window.open(generateWhatsAppUrl(msg), '_blank', 'noopener,noreferrer');
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-[#F0DDE2] shadow-2xs">
      <div className="max-w-md md:max-w-3xl mx-auto px-4 py-2.5 flex items-center justify-between gap-3">
        {/* Brand identity - Minimal & Direct */}
        <div className="flex items-center gap-2">
          <span className="w-8 h-8 rounded-full bg-[#F7C9D4] text-[#A94767] flex items-center justify-center font-serif text-lg font-bold">
            B
          </span>
          <div className="flex flex-col">
            <span className="font-serif text-lg sm:text-xl font-bold tracking-tight text-[#3D2930] leading-none">
              {BRAND_DATA.name}
            </span>
            <span className="text-[11px] text-[#765F66] flex items-center gap-1 font-medium mt-0.5">
              <MapPin className="w-3 h-3 text-[#A94767]" />
              {BRAND_DATA.city}, BA
            </span>
          </div>
        </div>

        {/* High-converting single action button */}
        <button
          onClick={handleDirectWhatsApp}
          className="min-h-[40px] px-3.5 py-1.5 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-bold flex items-center gap-1.5 shadow-2xs active:scale-98 transition-transform cursor-pointer"
        >
          <MessageCircle className="w-3.5 h-3.5 fill-white stroke-none" />
          <span>WhatsApp</span>
        </button>
      </div>
    </header>
  );
};
