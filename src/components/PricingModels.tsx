import React from 'react';
import { Check, MessageCircle, Star, Info, Sparkles, Heart } from 'lucide-react';
import { LandingPageConfig, ModelOffer } from '../types';
import { generateWhatsAppUrl } from '../config/brand';
import { trackWhatsAppClick, trackModelInterest } from '../utils/tracking';

interface PricingModelsProps {
  config: LandingPageConfig;
}

export const PricingModels: React.FC<PricingModelsProps> = ({ config }) => {
  const isCasamento = config.slug === 'casamento';
  const sectionTitle = isCasamento
    ? 'Escolha um ponto de partida para o seu casamento'
    : `Escolha um ponto de partida para o seu ${config.category.toLowerCase()}`;

  const getWhatsAppMessageForModel = (model: ModelOffer) => {
    if (isCasamento) {
      if (model.name.includes('Essencial')) {
        return 'Olá! Vim pelo anúncio da Buum Balloonn e tenho interesse no Modelo Essencial (R$ 80) para meu casamento civil/intimista. Gostaria de verificar a disponibilidade para minha data em Teixeira de Freitas.';
      }
      if (model.name.includes('Encanto')) {
        return 'Olá! Vim pelo anúncio da Buum Balloonn e tenho interesse no Modelo Encanto (R$ 250) para meu casamento. Gostaria de verificar a disponibilidade para minha data em Teixeira de Freitas.';
      }
      if (model.name.includes('Celebração')) {
        return 'Olá! Vim pelo anúncio da Buum Balloonn e tenho interesse no Modelo Celebração (R$ 600) para meu casamento. Gostaria de verificar a disponibilidade para minha data em Teixeira de Freitas.';
      }
    }
    return `Olá! Vim pelo anúncio da Buum Balloonn e tenho interesse no Modelo ${model.name} (R$ ${model.price}) para ${config.category.toLowerCase()}. Gostaria de verificar a disponibilidade para minha data em Teixeira de Freitas.`;
  };

  const handleModelWhatsAppClick = (model: ModelOffer) => {
    // Fire Meta InitiateCheckout with value and Contact
    trackModelInterest(config.slug, `Modelo ${model.name}`, model.price);
    const msg = getWhatsAppMessageForModel(model);
    trackWhatsAppClick({
      theme: config.slug,
      model: model.name,
      buttonLocation: 'pricing',
      customMessage: msg,
    });
    window.open(generateWhatsAppUrl(msg), '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="modelos" className="py-14 sm:py-20 bg-[#FFF9FA]">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-[#A94767] block mb-2">
            3 Modelos de Decoração
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#3D2930] mb-3 leading-tight">
            Escolha o modelo ideal para o seu momento
          </h2>
          <p className="text-sm sm:text-base text-[#765F66] leading-relaxed max-w-2xl mx-auto">
            Seja um casamento civil, um almoço íntimo ou uma celebração com amigos e família, temos uma opção pronta para você retirar, montar e celebrar.
          </p>
        </div>

        {/* 3 Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-stretch mb-10">
          {config.models.map((model, idx) => {
            const isFeatured = model.featured;

            return (
              <div
                key={idx}
                className={`relative rounded-2xl flex flex-col justify-between transition-all duration-300 ${
                  isFeatured
                    ? 'bg-white border-2 border-[#A94767] shadow-xl md:-translate-y-2'
                    : 'bg-white border border-[#F0DDE2] shadow-sm hover:shadow-md'
                } p-6 sm:p-7`}
              >
                {/* Featured Badge */}
                {isFeatured ? (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#A94767] text-white text-xs font-bold px-4 py-1 rounded-full shadow-sm flex items-center gap-1.5 uppercase tracking-wide">
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <span>Mais escolhido</span>
                  </div>
                ) : model.price === 80 ? (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-white border border-[#D9829A] text-[#A94767] text-[11px] font-bold px-3 py-0.5 rounded-full shadow-2xs flex items-center gap-1 uppercase tracking-wide">
                    <Heart className="w-3 h-3" />
                    <span>Econômico & Íntimo</span>
                  </div>
                ) : (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-white border border-[#D9829A] text-[#A94767] text-[11px] font-bold px-3 py-0.5 rounded-full shadow-2xs flex items-center gap-1 uppercase tracking-wide">
                    <Sparkles className="w-3 h-3" />
                    <span>Impacto Visual Completo</span>
                  </div>
                )}

                <div>
                  {/* Model Header */}
                  <div className="border-b border-[#F0DDE2] pb-5 mb-5 pt-2">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="font-serif text-2xl font-bold text-[#3D2930]">
                        Modelo {model.name}
                      </h3>
                    </div>
                    <p className="text-xs sm:text-sm text-[#765F66] min-h-[38px]">
                      {model.description}
                    </p>
                    <div className="mt-4 flex items-baseline gap-1.5">
                      <span className="text-xs sm:text-sm text-[#765F66]">A partir de</span>
                      <span className="text-3xl sm:text-4xl font-extrabold text-[#3D2930] font-sans">
                        R$ {model.price}
                      </span>
                    </div>

                    {model.idealFor && (
                      <div className="mt-3 text-[11px] font-medium text-[#A94767] bg-[#FFF3F6] px-2.5 py-1.5 rounded-lg border border-[#F0DDE2]">
                        <strong>Indicação:</strong> {model.idealFor}
                      </div>
                    )}
                  </div>

                  {/* Highlights / Benefits List */}
                  <div className="mb-6">
                    <span className="text-xs font-bold text-[#3D2930] uppercase tracking-wider block mb-3">
                      O que está incluso:
                    </span>
                    <ul className="space-y-2.5 text-sm text-[#3D2930]">
                      {model.highlights.map((item, hIdx) => (
                        <li key={hIdx} className="flex items-start gap-2.5">
                          <div className="w-5 h-5 rounded-full bg-[#F7C9D4]/60 text-[#A94767] flex items-center justify-center shrink-0 mt-0.5">
                            <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                          </div>
                          <span className="leading-snug">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card Action */}
                <div className="pt-4 border-t border-[#F0DDE2]/60 mt-auto">
                  <button
                    onClick={() => handleModelWhatsAppClick(model)}
                    aria-label={`Consultar disponibilidade do Modelo ${model.name}`}
                    className={`w-full min-h-[48px] py-3.5 px-4 rounded-xl font-bold text-sm transition-all flex items-center justify-center gap-2 shadow-xs active:scale-98 cursor-pointer ${
                      isFeatured
                        ? 'bg-[#A94767] hover:bg-[#8F3753] text-white shadow-md hover:shadow-lg'
                        : 'bg-white hover:bg-[#FFF3F6] text-[#A94767] border-2 border-[#D9829A]'
                    }`}
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Consultar Modelo {model.name}</span>
                  </button>
                  <p className="text-[11px] text-[#765F66] text-center mt-2 font-medium">
                    Consulte disponibilidade para sua data
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mandatory Note */}
        <div className="max-w-3xl mx-auto rounded-xl bg-white border border-[#F0DDE2] p-4 text-xs sm:text-sm text-[#765F66] flex items-start gap-3 shadow-2xs">
          <Info className="w-5 h-5 text-[#A94767] shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <strong className="text-[#3D2930] font-semibold">Observação sobre os valores:</strong> Os valores são
            iniciais e podem variar conforme a data, cidade, disponibilidade, quantidade de itens,
            transporte e personalização.
          </p>
        </div>
      </div>
    </section>
  );
};
