import React from 'react';
import { DollarSign, Scale, HelpCircle } from 'lucide-react';

export const ProblemSection: React.FC = () => {
  return (
    <section className="py-12 sm:py-16 px-4 bg-white border-y border-[#F0DDE2]/70">
      <div className="max-w-md sm:max-w-2xl mx-auto space-y-6">
        {/* Título do Bloco 2 */}
        <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#3D2930] leading-snug">
          Organizar um casamento pequeno também pode virar uma dor de cabeça
        </h2>

        {/* Textos exatos */}
        <div className="space-y-3 text-sm sm:text-base text-[#765F66] leading-relaxed">
          <p>
            Você começa procurando algumas peças e, quando percebe, precisa comprar painel, mesa, suportes, vasos, arranjos, tecidos e vários detalhes que talvez nunca mais use.
          </p>
          <p>
            Quando procura uma decoração completa, o valor pode sair do orçamento.
          </p>
          <p>
            E quando tenta fazer tudo sozinho, surge outra dúvida: por onde começar?
          </p>
        </div>

        {/* Três pequenos destaques */}
        <div className="grid grid-cols-1 gap-3 pt-2">
          {/* Destaque 1 */}
          <div className="p-4 rounded-2xl bg-[#FFF9FA] border border-[#F0DDE2] flex items-start gap-3.5">
            <div className="w-9 h-9 rounded-xl bg-[#FFF3F6] text-[#A94767] border border-[#F0DDE2] flex items-center justify-center shrink-0 mt-0.5">
              <DollarSign className="w-4 h-4" />
            </div>
            <div>
              <p className="text-xs sm:text-sm font-bold text-[#3D2930]">
                Comprar tudo fica caro.
              </p>
              <p className="text-xs text-[#765F66] mt-0.5">
                Peças compradas avulsas acumulam gastos e ficam guardadas sem utilidade depois.
              </p>
            </div>
          </div>

          {/* Destaque 2 */}
          <div className="p-4 rounded-2xl bg-[#FFF9FA] border border-[#F0DDE2] flex items-start gap-3.5">
            <div className="w-9 h-9 rounded-xl bg-[#FFF3F6] text-[#A94767] border border-[#F0DDE2] flex items-center justify-center shrink-0 mt-0.5">
              <Scale className="w-4 h-4" />
            </div>
            <div>
              <p className="text-xs sm:text-sm font-bold text-[#3D2930]">
                Contratar uma decoração completa pode pesar.
              </p>
              <p className="text-xs text-[#765F66] mt-0.5">
                Valores altos e contratos engessados que fogem do planejado para eventos intimistas.
              </p>
            </div>
          </div>

          {/* Destaque 3 */}
          <div className="p-4 rounded-2xl bg-[#FFF9FA] border border-[#F0DDE2] flex items-start gap-3.5">
            <div className="w-9 h-9 rounded-xl bg-[#FFF3F6] text-[#A94767] border border-[#F0DDE2] flex items-center justify-center shrink-0 mt-0.5">
              <HelpCircle className="w-4 h-4" />
            </div>
            <div>
              <p className="text-xs sm:text-sm font-bold text-[#3D2930]">
                Fazer tudo sozinho toma tempo e gera insegurança.
              </p>
              <p className="text-xs text-[#765F66] mt-0.5">
                A incerteza se os itens vão combinar entre si e se o resultado final ficará bonito nas fotos.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
