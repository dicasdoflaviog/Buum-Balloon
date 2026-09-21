import React from 'react';
import { ArrowDown, Sparkles, CheckCircle2 } from 'lucide-react';
import { trackCTAclick } from '../utils/tracking';

interface SolutionSectionProps {
  onScrollToModels: () => void;
}

export const SolutionSection: React.FC<SolutionSectionProps> = ({ onScrollToModels }) => {
  const handleCtaClick = () => {
    trackCTAclick('Ver opções de decoração', 'solution_turn');
    onScrollToModels();
  };

  return (
    <section className="py-12 sm:py-16 px-4 bg-[#FFF9FA]">
      <div className="max-w-md sm:max-w-2xl mx-auto space-y-6">
        {/* Título do Bloco 3 */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFF3F6] border border-[#F0DDE2] text-xs font-bold text-[#A94767] uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5" />
          <span>A Alternativa Buum Balloonn</span>
        </div>

        <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#3D2930] leading-snug">
          Foi por isso que criamos uma opção mais simples
        </h2>

        {/* Textos exatos */}
        <div className="space-y-3 text-sm sm:text-base text-[#765F66] leading-relaxed">
          <p className="flex items-start gap-2.5">
            <CheckCircle2 className="w-5 h-5 text-[#A94767] shrink-0 mt-0.5" />
            <span>Você não precisa comprar toda a decoração.</span>
          </p>
          <p className="flex items-start gap-2.5">
            <CheckCircle2 className="w-5 h-5 text-[#A94767] shrink-0 mt-0.5" />
            <span>Também não precisa escolher cada item sem saber se tudo vai combinar.</span>
          </p>
          <p className="flex items-start gap-2.5">
            <CheckCircle2 className="w-5 h-5 text-[#A94767] shrink-0 mt-0.5" />
            <span>Você pode escolher um modelo que já serve como ponto de partida, retirar os itens e montar no seu espaço.</span>
          </p>
        </div>

        {/* Destaque visual: Bonito. Acessível. Mais simples. */}
        <div className="p-5 sm:p-6 rounded-2xl bg-white border-2 border-[#D9829A] text-center shadow-xs space-y-3">
          <p className="font-serif text-xl sm:text-2xl font-bold text-[#A94767] tracking-tight">
            Bonito. Acessível. Mais simples.
          </p>
          <p className="text-xs sm:text-sm text-[#765F66]">
            Kits harmonizados para você retirar em Teixeira de Freitas e montar com praticidade.
          </p>
          <button
            onClick={handleCtaClick}
            className="w-full min-h-[48px] px-6 py-3 rounded-xl bg-[#A94767] hover:bg-[#8F3753] text-white font-bold text-sm sm:text-base flex items-center justify-center gap-2 shadow-xs active:scale-98 transition-all cursor-pointer"
          >
            <span>Ver opções de decoração</span>
            <ArrowDown className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
