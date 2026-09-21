import React, { useState } from 'react';
import { MessageCircle, Instagram, MapPin, Sparkles, ChevronDown } from 'lucide-react';
import { BRAND_DATA, generateWhatsAppUrl } from '../config/brand';
import { trackWhatsAppClick } from '../utils/tracking';
import { LandingPageConfig } from '../types';
import { THEMES_MAP } from '../config/themes';

interface HeaderProps {
  currentTheme: LandingPageConfig;
  onSelectTheme: (slug: string) => void;
  onNavigateHome?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ currentTheme, onSelectTheme, onNavigateHome }) => {
  const [themeMenuOpen, setThemeMenuOpen] = useState(false);

  const handleWhatsAppHeaderClick = () => {
    trackWhatsAppClick({
      theme: currentTheme.slug,
      buttonLocation: 'header',
      customMessage: currentTheme.whatsappMessage,
    });
    window.open(generateWhatsAppUrl(currentTheme.whatsappMessage), '_blank', 'noopener,noreferrer');
  };

  return (
    <header className="sticky top-0 z-40 bg-[#FFF9FA]/90 backdrop-blur-md border-b border-[#F0DDE2]">
      {/* Top micro-bar: Location and proposition */}
      <div className="bg-[#F7C9D4]/40 border-b border-[#F0DDE2]/60 px-4 py-1.5 text-xs text-[#765F66]">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-1">
          <div className="flex items-center gap-1.5 font-medium">
            <MapPin className="w-3.5 h-3.5 text-[#A94767]" />
            <span>Atendimento em {BRAND_DATA.regionServed}</span>
            <span className="hidden sm:inline text-[#D9829A]">•</span>
            <span className="hidden sm:inline">Kits Pegue e Monte para Mini Festas</span>
          </div>
          <div className="flex items-center gap-3 text-xs">
            <a
              href={BRAND_DATA.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#A94767] transition-colors flex items-center gap-1"
              title="Acesse nosso Instagram"
            >
              <Instagram className="w-3 h-3 text-[#A94767]" />
              <span>{BRAND_DATA.instagramHandle}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation header */}
      <div className="max-w-6xl mx-auto px-4 py-3 sm:py-4 flex items-center justify-between gap-4">
        {/* Logo / Brand Name */}
        <button
          onClick={() => {
            if (onNavigateHome) onNavigateHome();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="text-left group cursor-pointer focus:outline-none"
        >
          <div className="flex items-center gap-2">
            <span className="w-8 h-8 rounded-full bg-[#F7C9D4] text-[#A94767] flex items-center justify-center font-serif text-lg font-bold shadow-xs">
              B
            </span>
            <div>
              <span className="block font-serif text-xl sm:text-2xl font-bold tracking-tight text-[#3D2930] group-hover:text-[#A94767] transition-colors">
                Buum Balloonn
              </span>
              <span className="block text-[11px] text-[#765F66] tracking-wide uppercase font-medium">
                Pegue e Monte • {currentTheme.category}
              </span>
            </div>
          </div>
        </button>

        {/* Center navigation shortcuts for fast scanning */}
        <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-[#765F66]">
          <a href="#modelos" className="hover:text-[#A94767] transition-colors">
            Modelos
          </a>
          <a href="#como-funciona" className="hover:text-[#A94767] transition-colors">
            Como Funciona
          </a>
          <a href="#galeria" className="hover:text-[#A94767] transition-colors">
            Galeria
          </a>
          <a href="#personalizacao" className="hover:text-[#A94767] transition-colors">
            Personalização
          </a>
          <a href="#faq" className="hover:text-[#A94767] transition-colors">
            Dúvidas
          </a>
        </nav>

        {/* Actions & Theme selector */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Modular Theme Switcher dropdown */}
          <div className="relative">
            <button
              onClick={() => setThemeMenuOpen(!themeMenuOpen)}
              className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-full text-xs font-medium border border-[#F0DDE2] bg-white text-[#765F66] hover:text-[#3D2930] hover:border-[#D9829A] transition-all shadow-2xs"
              title="Trocar tema da página (Casamento, Aniversário, Chá de Bebê...)"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#A94767]" />
              <span className="hidden sm:inline">Tema:</span>
              <span className="font-semibold text-[#A94767]">{currentTheme.category}</span>
              <ChevronDown className="w-3 h-3 text-[#765F66]" />
            </button>

            {themeMenuOpen && (
              <div
                className="absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-lg border border-[#F0DDE2] py-2 z-50 text-xs"
                onMouseLeave={() => setThemeMenuOpen(false)}
              >
                <div className="px-3 py-1 font-semibold text-[#765F66] border-b border-[#F0DDE2] mb-1">
                  Mudar Tema da Página
                </div>
                {Object.values(THEMES_MAP).map((theme) => (
                  <button
                    key={theme.slug}
                    onClick={() => {
                      onSelectTheme(theme.slug);
                      setThemeMenuOpen(false);
                    }}
                    className={`w-full text-left px-3 py-2 flex items-center justify-between hover:bg-[#FFF9FA] transition-colors ${
                      currentTheme.slug === theme.slug ? 'text-[#A94767] font-bold bg-[#FFF9FA]' : 'text-[#3D2930]'
                    }`}
                  >
                    <span>{theme.category}</span>
                    {theme.slug === 'casamento' && (
                      <span className="text-[10px] bg-[#F7C9D4] text-[#A94767] px-1.5 py-0.5 rounded">
                        Principal
                      </span>
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Quick WhatsApp Action */}
          <button
            onClick={handleWhatsAppHeaderClick}
            className="flex items-center gap-2 bg-[#A94767] hover:bg-[#8F3753] text-white text-xs sm:text-sm font-semibold px-3 sm:px-4 py-2 rounded-full transition-all shadow-sm hover:shadow active:scale-98"
          >
            <MessageCircle className="w-4 h-4" />
            <span className="hidden sm:inline">WhatsApp</span>
            <span className="sm:hidden">Conversar</span>
          </button>
        </div>
      </div>
    </header>
  );
};
