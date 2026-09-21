import React, { useState, useEffect } from 'react';
import { MessageCircle, Sparkles } from 'lucide-react';
import { LandingPageConfig } from '../types';
import { generateWhatsAppUrl } from '../config/brand';
import { trackWhatsAppClick } from '../utils/tracking';

interface StickyMobileCTAProps {
  config: LandingPageConfig;
}

export const StickyMobileCTA: React.FC<StickyMobileCTAProps> = ({ config }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky bar after scrolling past the initial hero view (180px)
      if (window.scrollY > 180) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  const defaultMessage =
    config.slug === 'casamento'
      ? 'Olá! Vim pelo anúncio da Buum Balloonn e gostaria de verificar a disponibilidade de datas para casamento pegue e monte em Teixeira de Freitas.'
      : `Olá! Vim pelo anúncio da Buum Balloonn e gostaria de verificar a disponibilidade de datas para ${config.category.toLowerCase()} pegue e monte em Teixeira de Freitas.`;

  const handleClick = () => {
    trackWhatsAppClick({
      theme: config.slug,
      buttonLocation: 'sticky_mobile',
      customMessage: defaultMessage,
    });
    window.open(generateWhatsAppUrl(defaultMessage), '_blank', 'noopener,noreferrer');
  };

  return (
    <aside
      aria-label="Barra de contato rápido"
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-[#F0DDE2] px-4 py-2.5 shadow-[0_-4px_16px_rgba(0,0,0,0.08)] animate-in fade-in slide-in-from-bottom-2 duration-300"
    >
      <div className="flex items-center justify-between gap-3 max-w-md mx-auto">
        <div className="flex flex-col">
          <div className="flex items-center gap-1 text-[11px] font-semibold text-[#A94767]">
            <Sparkles className="w-3 h-3" />
            <span>Pegue e monte</span>
          </div>
          <div className="text-xs text-[#3D2930] font-medium leading-tight">
            A partir de <span className="font-bold text-[#A94767] text-sm">R$ {config.startingPrice}</span>
          </div>
        </div>

        <button
          onClick={handleClick}
          className="flex-1 min-h-[44px] inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm shadow-md active:scale-98 transition-all cursor-pointer"
        >
          <MessageCircle className="w-4 h-4 fill-white stroke-none" />
          <span>Consultar no WhatsApp</span>
        </button>
      </div>
    </aside>
  );
};
