import React, { useState } from 'react';
import { casamentoGalleryItems } from '../config/themes';
import { GalleryItem } from '../types';
import { Info, Sparkles, MessageCircle } from 'lucide-react';
import { BRAND_DATA, generateWhatsAppUrl } from '../config/brand';
import { trackWhatsAppClick } from '../utils/tracking';

export const CampaignInspirationFeed: React.FC = () => {
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null);

  // Take top 6 most representative items to keep the mobile feed ultra-focused
  const displayItems = casamentoGalleryItems.slice(0, 6);

  const handleAskAboutPhoto = (item: GalleryItem) => {
    const msg = `Olá! Vi a foto "${item.title}" na página da Buum Balloonn e gostaria de saber se é possível fazer uma decoração nesse estilo para meu casamento em Teixeira de Freitas.`;
    trackWhatsAppClick({
      theme: 'casamento',
      buttonLocation: 'gallery_item',
      customMessage: msg,
    });
    window.open(generateWhatsAppUrl(msg), '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="py-10 sm:py-14 bg-white border-y border-[#F0DDE2]/60 px-4">
      <div className="max-w-md sm:max-w-3xl mx-auto">
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFF3F6] border border-[#F0DDE2] text-xs font-bold text-[#A94767] mb-2 uppercase tracking-wide">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Inspirações Reais</span>
          </div>
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#3D2930] leading-tight">
            Veja como uma decoração simples transforma o ambiente
          </h3>
          <p className="text-xs sm:text-sm text-[#765F66] mt-1.5">
            Cenários delicados pensados para valorizar suas fotos, a mesa do bolo e os momentos com quem você ama.
          </p>
        </div>

        {/* 2-Column Clean Mobile Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 sm:gap-3.5 mb-6">
          {displayItems.map((item, idx) => (
            <div
              key={idx}
              onClick={() => setActiveItem(item)}
              className="group relative rounded-xl overflow-hidden border border-[#F0DDE2] bg-[#FFF9FA] cursor-pointer aspect-4/3 shadow-2xs hover:shadow-sm transition-all"
            >
              <img
                src={item.imageUrl}
                alt={item.title}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent flex items-end p-2 sm:p-2.5">
                <span className="text-[11px] sm:text-xs font-medium text-white line-clamp-1 leading-tight">
                  {item.title}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Informative notice & quick WhatsApp question */}
        <div className="rounded-xl bg-[#FFF9FA] border border-[#F0DDE2] p-3 text-xs text-[#765F66] flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <div className="flex items-center gap-2">
            <Info className="w-4 h-4 text-[#A94767] shrink-0" />
            <span>Gostou de algum arranjo ou paleta? Podemos adaptar para o seu gosto.</span>
          </div>
          <a
            href={generateWhatsAppUrl('Olá! Vi as fotos de inspiração da Buum Balloonn e gostaria de saber se é possível montar um kit similar para meu casamento.')}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => {
              trackWhatsAppClick({
                theme: 'casamento',
                buttonLocation: 'gallery_cta',
                customMessage: 'Dúvida sobre fotos de inspiração',
              });
            }}
            className="shrink-0 text-xs font-bold text-[#A94767] hover:underline flex items-center gap-1"
          >
            <span>Perguntar sobre as fotos</span>
          </a>
        </div>

        {/* Light Modal for clicked photo */}
        {activeItem && (
          <div
            className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-center justify-center p-4"
            onClick={() => setActiveItem(null)}
          >
            <div
              className="bg-white rounded-2xl max-w-sm w-full overflow-hidden shadow-2xl border border-[#F0DDE2] p-4 animate-in fade-in zoom-in-95"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative rounded-xl overflow-hidden aspect-4/3 mb-3">
                <img
                  src={activeItem.imageUrl}
                  alt={activeItem.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <h4 className="font-serif text-lg font-bold text-[#3D2930] mb-1">
                {activeItem.title}
              </h4>
              <p className="text-xs text-[#765F66] mb-4 leading-relaxed">
                Decoração de casamento pegue e monte com peças harmonizadas para seu espaço.
              </p>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => handleAskAboutPhoto(activeItem)}
                  className="flex-1 min-h-[44px] rounded-xl bg-[#A94767] hover:bg-[#8F3753] text-white text-xs font-bold flex items-center justify-center gap-1.5 cursor-pointer shadow-xs active:scale-98"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Quero um assim</span>
                </button>
                <button
                  onClick={() => setActiveItem(null)}
                  className="min-h-[44px] px-4 rounded-xl border border-[#F0DDE2] text-xs font-semibold text-[#765F66] hover:bg-[#FFF9FA] cursor-pointer"
                >
                  Fechar
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
