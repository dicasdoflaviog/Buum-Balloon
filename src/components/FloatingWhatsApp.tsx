import React, { useState, useEffect } from 'react';
import { MessageCircle } from 'lucide-react';
import { generateWhatsAppUrl } from '../config/brand';
import { trackWhatsAppClick } from '../utils/tracking';

export const FloatingWhatsApp: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 800);
    const onScroll = () => {
      if (window.scrollY > 80) setIsVisible(true);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  if (!isVisible) return null;

  const message =
    'Olá! Vim pela página da Buum Balloonn e quero tirar uma dúvida sobre a decoração de casamento pegue e monte em Teixeira de Freitas.';

  const handleFloatingClick = () => {
    trackWhatsAppClick({
      theme: 'casamento',
      buttonLocation: 'floating',
      customMessage: message,
      city: 'Teixeira de Freitas',
    });
    window.open(generateWhatsAppUrl(message), '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed bottom-4 right-4 z-40 flex items-center">
      <button
        onClick={handleFloatingClick}
        className="group relative flex items-center gap-2.5 bg-[#25D366] hover:bg-[#20bd5a] text-white px-4 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 active:scale-95 cursor-pointer"
        aria-label="Falar no WhatsApp"
      >
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-200 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-400 border border-white"></span>
        </span>
        <MessageCircle className="w-5 h-5 fill-white stroke-none shrink-0" />
        <span className="font-bold text-sm tracking-tight whitespace-nowrap">
          Falar no WhatsApp
        </span>
      </button>
    </div>
  );
};
