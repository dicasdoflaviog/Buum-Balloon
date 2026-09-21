import React from 'react';
import { Check, Sparkles, TrendingDown, Clock, ShieldCheck, Car, ArrowRight } from 'lucide-react';

interface CoreFeaturesBentoProps {
  onScrollToModels?: () => void;
}

export const CoreFeaturesBento: React.FC<CoreFeaturesBentoProps> = ({ onScrollToModels }) => {
  return (
    <section className="py-10 sm:py-18 px-3 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14 space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#FFF0F4] border border-[#F0D7DF] text-xs font-bold text-[#9E244D] uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Vantagens do Pegue e Monte</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#1C1217] tracking-tight leading-tight">
          Decoração linda, inteligente e sem o custo absurdo
        </h2>
        <p className="text-sm sm:text-base text-[#5C4A53] font-medium">
          Esqueça orçamentos de milhares de reais para poucas horas de festa. Tudo que você precisa, pensado para montar fácil e caber no porta-malas.
        </p>
      </div>

      {/* Bento Grid with Pastel Cards & High-Contrast Accents */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-6">
        {/* Card 1: Left Card with decor kit preview */}
        <div className="md:col-span-5 bg-white border border-[#F0D7DF] rounded-3xl p-6 sm:p-8 flex flex-col justify-between overflow-hidden shadow-sm hover:shadow-md transition-all">
          <div className="space-y-3 relative z-10">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#9E244D] bg-[#FFF0F4] border border-[#F0D7DF] px-3 py-1 rounded-full">
              <Clock className="w-3.5 h-3.5" />
              Rápido & Prático
            </span>
            <h3 className="text-2xl font-black text-[#1C1217] tracking-tight">
              Retirada Imediata em Teixeira de Freitas
            </h3>
            <p className="text-sm text-[#5C4A53] leading-relaxed">
              Você busca o kit completo embalado e protegido, monta no seu espaço em minutos com nosso guia passo a passo e devolve após a celebração.
            </p>
          </div>

          {/* Kit Mockup Visual */}
          <div className="mt-8 relative pt-2 flex justify-center">
            <div className="w-full max-w-[260px] bg-[#FAF5F7] rounded-2xl p-3 border border-[#F0D7DF] shadow-md">
              <div className="rounded-xl overflow-hidden aspect-4/3 relative mb-2.5">
                <img
                  src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=600&q=80"
                  alt="Kit de Casamento Pegue e Monte"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-2 right-2 bg-[#9E244D] text-white text-[10px] font-black px-2 py-0.5 rounded-full">
                  Pronto p/ Levar
                </div>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="font-bold text-[#1C1217]">Kit Casamento Completo</span>
                <span className="text-[#9E244D] font-black">A partir de R$ 80</span>
              </div>
              <div className="mt-2.5 w-full bg-[#22C55E] text-white text-[11px] font-bold py-1.5 rounded-lg text-center flex items-center justify-center gap-1">
                <span>Disponível para reserva</span>
              </div>
            </div>
          </div>
        </div>

        {/* Card 2: Right Wide Card */}
        <div className="md:col-span-7 bg-white border border-[#F0D7DF] rounded-3xl p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden shadow-sm hover:shadow-md transition-all">
          <div className="space-y-4 max-w-md relative z-10">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#9E244D] bg-[#FFF0F4] border border-[#F0D7DF] px-3 py-1 rounded-full">
              <Sparkles className="w-3.5 h-3.5" />
              Acabamento Premium
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-[#1C1217] tracking-tight">
              Tudo Planejado para Fotos Deslumbrantes
            </h3>
            <p className="text-sm text-[#5C4A53] leading-relaxed">
              Arco romano, cilindros coordenados, flores permanentes nobres com toque real, suportes finos para doces e bolo cenográfico de alto padrão.
            </p>

            {/* Glowing Accent Pills in Pastel Theme */}
            <div className="flex flex-wrap gap-2 pt-2">
              {[
                'Arco Romano',
                'Cilindros de Luxo',
                'Flores Realistas',
                'Bolo Fake Incluso',
                'Louças Finas',
                'Painel Ripado',
              ].map((pill, i) => (
                <span
                  key={i}
                  className="px-3 py-1.5 rounded-full text-xs font-bold bg-[#FFF0F4] text-[#9E244D] border border-[#F0D7DF]"
                >
                  {pill}
                </span>
              ))}
            </div>
          </div>

          {/* Side photo frame */}
          <div className="mt-6 md:mt-0 md:absolute md:right-5 md:bottom-5 w-full md:w-64 aspect-4/3 rounded-2xl overflow-hidden border border-[#F0D7DF] shadow-md">
            <img
              src="https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=600&q=80"
              alt="Mesa de Casamento Elegante"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Card 3: Lower Left (Car trunk ready) */}
        <div className="md:col-span-4 bg-white border border-[#F0D7DF] rounded-3xl p-6 flex flex-col justify-between shadow-sm hover:shadow-md transition-all">
          <div className="space-y-2">
            <div className="w-10 h-10 rounded-2xl bg-[#FFF0F4] border border-[#F0D7DF] flex items-center justify-center text-[#9E244D] mb-3">
              <Car className="w-5 h-5" />
            </div>
            <h4 className="text-xl font-bold text-[#1C1217] tracking-tight">Cabe no seu Carro</h4>
            <p className="text-xs sm:text-sm text-[#5C4A53] leading-relaxed">
              As estruturas são compactas, desmontáveis e encaixáveis. Você transporta no porta-malas de qualquer carro sem precisar de frete caro.
            </p>
          </div>
          <div className="mt-4 pt-4 border-t border-[#F0D7DF] flex items-center justify-between text-xs text-[#5C4A53]">
            <span className="font-semibold">Transporte Próprio</span>
            <span className="text-[#9E244D] font-bold">100% Compatível</span>
          </div>
        </div>

        {/* Card 4: Lower Center (HIGH CONTRAST CARD - Deep Wine / Espresso Contrast Element) */}
        <div className="md:col-span-4 bg-[#1C1217] text-white rounded-3xl p-6 flex flex-col justify-between shadow-xl relative overflow-hidden group">
          {/* Subtle warm glow inside contrast card */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#9E244D]/25 rounded-full blur-2xl pointer-events-none" />

          <div className="space-y-2 relative z-10">
            <div className="inline-flex items-center gap-1.5 text-[11px] font-black uppercase tracking-wider bg-white/15 px-2.5 py-1 rounded-full text-[#F7C9D4]">
              <TrendingDown className="w-3.5 h-3.5 text-[#F7C9D4]" />
              Economia Real Comprovada
            </div>
            <h4 className="text-2xl font-black text-white tracking-tight leading-tight">
              Economize até 85% do custo convencional
            </h4>
            <p className="text-xs text-rose-100/80 font-medium leading-relaxed">
              Decorações completas montadas custam de R$ 2.000 a R$ 5.000. Com a Buum Balloonn, você tem o mesmo visual luxuoso a partir de <strong>R$ 80</strong>.
            </p>
          </div>

          <div className="mt-5 pt-3 border-t border-white/15 flex items-center justify-between relative z-10">
            <span className="text-xs font-bold text-rose-200">A partir de</span>
            <span className="text-3xl font-black text-white tracking-tight">R$ 80</span>
          </div>
        </div>

        {/* Card 5: Lower Right (Peças higienizadas) */}
        <div className="md:col-span-4 bg-white border border-[#F0D7DF] rounded-3xl p-6 flex flex-col justify-between shadow-sm hover:shadow-md transition-all">
          <div className="space-y-2">
            <div className="w-10 h-10 rounded-2xl bg-[#FFF0F4] border border-[#F0D7DF] flex items-center justify-center text-[#9E244D] mb-3">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h4 className="text-xl font-bold text-[#1C1217] tracking-tight">Peças 100% Higienizadas</h4>
            <p className="text-xs sm:text-sm text-[#5C4A53] leading-relaxed">
              Todos os itens passam por revisão rigorosa e higienização antes de cada retirada. Você recebe peças brilhantes e impecáveis.
            </p>
          </div>
          <div className="mt-4 pt-4 border-t border-[#F0D7DF] flex items-center justify-between text-xs text-[#5C4A53]">
            <span className="font-semibold">Sem Surpresas</span>
            <span className="text-[#22C55E] font-bold flex items-center gap-1">
              <Check className="w-3.5 h-3.5" /> Pronto p/ Festa
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

