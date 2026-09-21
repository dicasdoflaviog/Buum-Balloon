import React from 'react';
import { Palette, HeartHandshake, Layers, Maximize2, PlusCircle, Wrench, MessageCircle } from 'lucide-react';
import { generateWhatsAppUrl } from '../config/brand';
import { trackWhatsAppClick } from '../utils/tracking';

export const Customization: React.FC = () => {
  const customizationPoints = [
    {
      title: 'Cores do casamento',
      description: 'Harmonização com a paleta escolhida para seu vestido, flores ou espaço.',
      icon: Palette,
    },
    {
      title: 'Estilo romântico, moderno, rústico ou minimalista',
      description: 'Adaptação dos elementos de acordo com a atmosfera desejada para a cerimônia.',
      icon: HeartHandshake,
    },
    {
      title: 'Quantidade de itens',
      description: 'Ajuste no número de suportes, vasos, bandejas e peças de apoio para doces.',
      icon: Layers,
    },
    {
      title: 'Tamanho do espaço',
      description: 'Modelos dimensionados para salas, varandas, jardins ou salões em Teixeira de Freitas.',
      icon: Maximize2,
    },
    {
      title: 'Itens adicionais',
      description: 'Inclusão de peças extras conforme disponibilidade do acervo decorativo.',
      icon: PlusCircle,
    },
    {
      title: 'Serviço de montagem e desmontagem',
      description: 'Opção de contratação com nossa equipe (sujeito à data e local).',
      icon: Wrench,
    },
  ];

  const handleCustomizationWhatsAppClick = () => {
    const message =
      'Olá! Vim pela página de personalização da Buum Balloonn e gostaria de avaliar alterações e itens adicionais para meu casamento em Teixeira de Freitas.';
    trackWhatsAppClick({
      theme: 'casamento',
      buttonLocation: 'customization',
      customMessage: message,
    });
    window.open(generateWhatsAppUrl(message), '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="personalizacao" className="py-14 sm:py-20 bg-white border-y border-[#F0DDE2]/60">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#A94767] block mb-2">
            Flexibilidade & Ajustes
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#3D2930] mb-4 leading-tight">
            Quer algo diferente? Personalizamos conforme sua necessidade
          </h2>
          <p className="text-base sm:text-lg text-[#765F66] leading-relaxed">
            Os modelos servem como ponto de partida. A Buum Balloonn pode avaliar alterações de cores,
            peças, composição e tema de acordo com a disponibilidade, orçamento e estrutura do evento.
          </p>
        </div>

        {/* Customization Options Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {customizationPoints.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-[#FFF9FA] rounded-2xl p-6 border border-[#F0DDE2] transition-all hover:border-[#D9829A] flex items-start gap-4"
              >
                <div className="w-11 h-11 rounded-xl bg-[#F7C9D4]/60 text-[#A94767] flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-bold text-[#3D2930] mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#765F66] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Banner */}
        <div className="text-center max-w-xl mx-auto bg-[#FFF3F6] border border-[#F0DDE2] rounded-2xl p-6 sm:p-8">
          <p className="text-sm sm:text-base text-[#3D2930] mb-5 font-medium">
            Tem uma ideia específica de cores ou peças em mente? Vamos conversar sobre o seu espaço.
          </p>
          <button
            onClick={handleCustomizationWhatsAppClick}
            className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-[#A94767] hover:bg-[#8F3753] text-white font-semibold text-sm sm:text-base transition-all shadow-md hover:shadow-lg active:scale-98 cursor-pointer"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Falar sobre meu casamento</span>
          </button>
        </div>
      </div>
    </section>
  );
};
