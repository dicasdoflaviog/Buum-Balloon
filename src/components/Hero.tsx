import React from 'react';
import { MessageCircle, ArrowDown, MapPin, Tag, CheckCircle2, Sliders } from 'lucide-react';
import { LandingPageConfig } from '../types';
import { BRAND_DATA, generateWhatsAppUrl } from '../config/brand';
import { trackWhatsAppClick, trackEvent } from '../utils/tracking';

interface HeroProps {
  config: LandingPageConfig;
}

export const Hero: React.FC<HeroProps> = ({ config }) => {
  const isCasamento = config.slug === 'casamento';

  // Dynamic WhatsApp pre-filled message for the hero secondary button (100% natural without bracket placeholders)
  const heroWhatsAppMessage = isCasamento
    ? 'Olá! Vim pelo anúncio da Buum Balloonn e gostaria de verificar a disponibilidade de datas para casamento pegue e monte em Teixeira de Freitas.'
    : `Olá! Vim pelo anúncio da Buum Balloonn e gostaria de verificar a disponibilidade de datas para ${config.category.toLowerCase()} pegue e monte em Teixeira de Freitas.`;

  const handleWhatsAppHeroClick = () => {
    trackWhatsAppClick({
      theme: config.slug,
      buttonLocation: 'hero',
      customMessage: heroWhatsAppMessage,
    });
    window.open(generateWhatsAppUrl(heroWhatsAppMessage), '_blank', 'noopener,noreferrer');
  };

  const handleScrollToModels = (e: React.MouseEvent) => {
    e.preventDefault();
    trackEvent('CTAclick', {
      theme: config.slug,
      target: '#modelos',
      location: 'hero',
    });
    const target = document.getElementById('modelos');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative overflow-hidden pt-6 pb-12 sm:pt-10 sm:pb-16 bg-gradient-to-b from-[#FFF9FA] via-[#FFF3F6] to-[#FFF9FA]">
      {/* Subtle organic pastel ambient shapes */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 pointer-events-none opacity-40">
        <div className="absolute top-6 left-10 w-72 h-72 rounded-full bg-[#F7C9D4] blur-3xl" />
        <div className="absolute top-20 right-10 w-80 h-80 rounded-full bg-[#F0DDE2] blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4">
        {/* Local reference indicator */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#F0DDE2] text-xs font-semibold text-[#A94767] shadow-2xs mb-5">
          <MapPin className="w-3.5 h-3.5" />
          <span>Atendemos Teixeira de Freitas, Bahia.</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Copy & Calls to Action */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold tracking-tight text-[#3D2930] leading-[1.15] mb-5">
              {config.title}
            </h1>

            <p className="text-base sm:text-lg text-[#765F66] leading-relaxed mb-6 max-w-2xl font-sans">
              {config.subtitle}
            </p>

            {/* Badges / Selos Oficiais */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-2.5 mb-5">
              {/* Selo 1 */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-[#F0DDE2] text-xs font-semibold text-[#3D2930] shadow-2xs">
                <Tag className="w-3.5 h-3.5 text-[#A94767]" />
                <span>Modelos a partir de R$ 80</span>
              </div>

              {/* Selo 2 */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#F7C9D4]/60 border border-[#F0DDE2] text-xs font-semibold text-[#3D2930]">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#A94767]" />
                <span>Pegue e monte</span>
              </div>

              {/* Selo 3 */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-[#F0DDE2] text-xs font-semibold text-[#765F66] shadow-2xs">
                <Sliders className="w-3.5 h-3.5 text-[#A94767]" />
                <span>Fácil de transportar</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto">
              {/* CTA Principal */}
              <button
                onClick={handleScrollToModels}
                aria-label="Ver modelos de casamento"
                className="min-h-[50px] inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#A94767] hover:bg-[#8F3753] text-white font-bold text-base transition-all shadow-md hover:shadow-lg active:scale-98 cursor-pointer"
              >
                <span>Ver os 3 Modelos de Casamento</span>
                <ArrowDown className="w-4 h-4" />
              </button>

              {/* CTA Secundário */}
              <button
                onClick={handleWhatsAppHeroClick}
                aria-label="Consultar disponibilidade no WhatsApp"
                className="min-h-[50px] inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-base transition-all shadow-2xs hover:shadow active:scale-98 cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 fill-white stroke-none" />
                <span>Consultar no WhatsApp</span>
              </button>
            </div>

            <p className="mt-3 text-xs text-[#765F66] flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block animate-pulse" />
              <span>Atendimento rápido para verificar datas em Teixeira de Freitas, BA.</span>
            </p>
          </div>

          {/* Right Column: Hero Visual Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border-4 border-white bg-white aspect-4/3 sm:aspect-5/4">
              <img
                src={config.heroImage}
                alt={`Decoração de ${config.category} pegue e monte em Teixeira de Freitas - Buum Balloonn`}
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-102"
                fetchPriority="high"
                loading="eager"
              />

              {/* Tag com aviso de imagem demonstrativa */}
              <div className="absolute bottom-3 left-3 right-3 bg-[#3D2930]/80 backdrop-blur-sm text-white px-3 py-2 rounded-lg text-[11px] leading-tight">
                <span className="font-semibold block text-[#F7C9D4]">
                  Referência visual demonstrativa
                </span>
                <span className="text-gray-200">
                  (Substituir por fotos reais dos kits Buum Balloonn antes da publicação)
                </span>
              </div>

              {/* Price badge overlaid on photo */}
              <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-sm border border-[#F0DDE2] px-3 py-1.5 rounded-full shadow-md">
                <span className="text-xs text-[#765F66] block text-center leading-none">A partir de</span>
                <span className="text-sm font-bold text-[#A94767]">R$ {config.startingPrice}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
