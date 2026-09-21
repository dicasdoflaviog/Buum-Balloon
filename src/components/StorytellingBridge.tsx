import React from 'react';
import { DollarSign, AlertCircle, Sparkles, CheckCircle2, ArrowDown } from 'lucide-react';

interface StorytellingBridgeProps {
  onScrollToModels: () => void;
}

export const StorytellingBridge: React.FC<StorytellingBridgeProps> = ({ onScrollToModels }) => {
  return (
    <section className="py-10 sm:py-14 px-4 bg-white border-y border-[#F0DDE2]/70">
      <div className="max-w-md sm:max-w-2xl mx-auto">
        {/* Step 1 & 2: The Desire & The Reality/Obstacle */}
        <div className="space-y-4 text-left">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFF3F6] border border-[#F0DDE2] text-xs font-bold text-[#A94767] uppercase tracking-wider">
            <span>Planejando seu casamento?</span>
          </div>

          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#3D2930] leading-snug">
            Você quer um casamento lindo e inesquecível. Mas percebeu que decorar pode ficar caro e complicado?
          </h2>

          <p className="text-sm sm:text-base text-[#765F66] leading-relaxed">
            Orçamentos tradicionais de decoração muitas vezes ultrapassam o limite do planejado, exigem contratos
            complexos e trazem preocupações desnecessárias para quem sonha com uma celebração intimista, civil ou acolhedora.
          </p>

          {/* Pain points comparison */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            <div className="p-4 rounded-2xl bg-[#FFF9FA] border border-[#F0DDE2] flex items-start gap-3">
              <div className="w-8 h-8 rounded-xl bg-red-50 text-red-500 flex items-center justify-center shrink-0 mt-0.5">
                <DollarSign className="w-4 h-4" />
              </div>
              <div className="text-xs sm:text-sm text-[#765F66]">
                <strong className="block font-bold text-[#3D2930] mb-0.5">Decorações tradicionais:</strong>
                Valores altos, fretes caros e contratos engessados que pesam no orçamento.
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-[#FFF9FA] border border-[#F0DDE2] flex items-start gap-3">
              <div className="w-8 h-8 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0 mt-0.5">
                <AlertCircle className="w-4 h-4" />
              </div>
              <div className="text-xs sm:text-sm text-[#765F66]">
                <strong className="block font-bold text-[#3D2930] mb-0.5">Complicações de logística:</strong>
                Exigência de horários rígidos e cobranças adicionais por qualquer detalhe.
              </div>
            </div>
          </div>
        </div>

        {/* Step 3: The Buum Balloonn Solution */}
        <div className="mt-8 pt-8 border-t border-[#F0DDE2]/80">
          <div className="p-5 sm:p-6 rounded-3xl bg-gradient-to-br from-[#FFF3F6] to-white border-2 border-[#D9829A] shadow-xs">
            <div className="flex items-center gap-2 text-xs font-bold text-[#A94767] uppercase tracking-wider mb-2">
              <Sparkles className="w-4 h-4" />
              <span>A Solução Buum Balloonn</span>
            </div>

            <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#3D2930] mb-2">
              Decoração charmosa, acessível e sem complicação em Teixeira de Freitas
            </h3>

            <p className="text-xs sm:text-sm text-[#765F66] leading-relaxed mb-4">
              Com o formato <strong>pegue e monte</strong>, você tem liberdade total para celebrar. Nós separamos
              todos os itens harmonizados e você mesma(o) retira e monta no seu espaço.
            </p>

            <ul className="space-y-2 text-xs sm:text-sm text-[#3D2930] font-medium mb-5">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#A94767] shrink-0" />
                <span>Modelos completos a partir de <strong>R$ 80</strong></span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#A94767] shrink-0" />
                <span>Kits pensados para caber no porta-malas de carro comum</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#A94767] shrink-0" />
                <span>Visual encantador para suas fotos e memórias</span>
              </li>
            </ul>

            <button
              onClick={onScrollToModels}
              className="w-full min-h-[46px] py-3 px-4 rounded-xl bg-[#A94767] hover:bg-[#8F3753] text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all active:scale-98 cursor-pointer shadow-xs"
            >
              <span>Conhecer os 3 modelos de casamento</span>
              <ArrowDown className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
