import React from 'react';
import { PiggyBank, Boxes, Camera, Sparkles } from 'lucide-react';
import { LandingPageConfig } from '../types';

interface BenefitsProps {
  config: LandingPageConfig;
}

export const Benefits: React.FC<BenefitsProps> = ({ config }) => {
  const isCasamento = config.slug === 'casamento';
  const sectionTitle = isCasamento
    ? 'Tudo para deixar seu casamento especial sem complicação'
    : `Tudo para deixar seu ${config.category.toLowerCase()} especial sem complicação`;

  const benefitsList = [
    {
      title: 'Mais acessível',
      text: 'Escolha uma opção compatível com o seu orçamento.',
      icon: PiggyBank,
    },
    {
      title: 'Pronto para montar',
      text: 'Receba os itens organizados para montar no seu espaço.',
      icon: Boxes,
    },
    {
      title: 'Visual encantador',
      text: 'Crie um ambiente bonito para celebrar e tirar fotos.',
      icon: Camera,
    },
    {
      title: 'Mais liberdade',
      text: 'Escolha o local, o horário e a forma de montar sua decoração.',
      icon: Sparkles,
    },
  ];

  return (
    <section id="beneficios" className="py-12 sm:py-16 bg-white border-y border-[#F0DDE2]/60">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#A94767] block mb-2">
            Vantagens do Pegue e Monte
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#3D2930] leading-tight">
            {sectionTitle}
          </h2>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefitsList.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-[#FFF9FA] rounded-2xl p-6 border border-[#F0DDE2] transition-all duration-300 hover:shadow-md hover:border-[#D9829A] flex flex-col items-start"
              >
                <div className="w-12 h-12 rounded-xl bg-[#F7C9D4]/60 text-[#A94767] flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-xl font-bold text-[#3D2930] mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-[#765F66] leading-relaxed">
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
