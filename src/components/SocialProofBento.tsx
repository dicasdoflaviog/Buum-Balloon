import React from 'react';
import { Star, Heart, Award, Calendar, Sparkles } from 'lucide-react';

export const SocialProofBento: React.FC = () => {
  return (
    <section className="py-12 sm:py-20 px-3 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14 space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#FFF0F4] border border-[#F0D7DF] text-xs font-bold text-[#9E244D] uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Credibilidade Comprovada</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#1C1217] tracking-tight leading-tight">
          Feito para o momento mais especial da sua vida
        </h2>
        <p className="text-sm sm:text-base text-[#5C4A53] font-medium">
          A Buum Balloonn é referência em Teixeira de Freitas em mini festas e casamentos intimistas.
        </p>
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
        {/* Left 2 Metric Cards */}
        <div className="lg:col-span-3 space-y-6">
          <div className="bg-white border border-[#F0D7DF] rounded-3xl p-6 shadow-sm hover:shadow-md transition-all">
            <div className="w-10 h-10 rounded-2xl bg-[#FFF0F4] border border-[#F0D7DF] flex items-center justify-center text-[#9E244D] mb-4">
              <Heart className="w-5 h-5 fill-[#9E244D]" />
            </div>
            <div className="text-3xl sm:text-4xl font-black text-[#1C1217] tracking-tight">280+</div>
            <div className="text-sm font-bold text-[#1C1217] mt-1">Casais Atendidos</div>
            <p className="text-xs text-[#5C4A53] mt-2 leading-relaxed">
              Casamentos civis, mini weddings e celebrações íntimas em toda Teixeira de Freitas.
            </p>
          </div>

          <div className="bg-white border border-[#F0D7DF] rounded-3xl p-6 shadow-sm hover:shadow-md transition-all">
            <div className="w-10 h-10 rounded-2xl bg-[#FFF0F4] border border-[#F0D7DF] flex items-center justify-center text-[#9E244D] mb-4">
              <Award className="w-5 h-5" />
            </div>
            <div className="text-3xl sm:text-4xl font-black text-[#1C1217] tracking-tight">R$ 80+</div>
            <div className="text-sm font-bold text-[#1C1217] mt-1">Preço Inicial Mais Acessível</div>
            <p className="text-xs text-[#5C4A53] mt-2 leading-relaxed">
              Para você ter uma mesa linda sem estourar o limite do cartão.
            </p>
          </div>
        </div>

        {/* Center Card with Featured Photo and Realistic Recent Reservations overlay */}
        <div className="lg:col-span-6 rounded-3xl p-4 sm:p-6 shadow-xl relative overflow-hidden flex flex-col justify-end min-h-[460px] bg-[#1C1217] border border-[#F0D7DF]">
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1000&q=85"
              alt="Casal feliz com decoração Buum Balloonn"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1C1217] via-[#1C1217]/50 to-transparent" />
          </div>

          {/* Floating Recent Bookings Mockup Card */}
          <div className="relative z-10 bg-white/95 backdrop-blur-xl border border-[#F0D7DF] rounded-2xl p-4 sm:p-5 text-[#1C1217] shadow-xl space-y-3">
            <div className="flex items-center justify-between text-xs pb-2 border-b border-[#F0D7DF]">
              <span className="font-bold text-[#9E244D] uppercase tracking-wider flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#22C55E] animate-ping" />
                Datas Recentes Reservadas
              </span>
              <span className="text-[#5C4A53] font-medium">Teixeira de Freitas</span>
            </div>

            <div className="space-y-2 text-xs">
              <div className="flex items-center justify-between py-1.5 px-2.5 rounded-lg bg-[#FAF5F7] border border-[#F0D7DF]">
                <div className="flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-[#FFF0F4] text-[#9E244D] flex items-center justify-center font-bold text-[10px]">
                    MR
                  </span>
                  <div>
                    <div className="font-bold text-[#1C1217]">Mariana & Rafael</div>
                    <div className="text-[10px] text-[#5C4A53]">Casamento Civil • Modelo Encanto</div>
                  </div>
                </div>
                <span className="text-[#22C55E] font-extrabold">Confirmado</span>
              </div>

              <div className="flex items-center justify-between py-1.5 px-2.5 rounded-lg bg-[#FAF5F7] border border-[#F0D7DF]">
                <div className="flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-[#FFF0F4] text-[#9E244D] flex items-center justify-center font-bold text-[10px]">
                    BL
                  </span>
                  <div>
                    <div className="font-bold text-[#1C1217]">Beatriz & Lucas</div>
                    <div className="text-[10px] text-[#5C4A53]">Mini Wedding • Modelo Celebração</div>
                  </div>
                </div>
                <span className="text-[#22C55E] font-extrabold">Confirmado</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right 2 Metric Cards */}
        <div className="lg:col-span-3 space-y-6">
          <div className="bg-white border border-[#F0D7DF] rounded-3xl p-6 shadow-sm hover:shadow-md transition-all">
            <div className="w-10 h-10 rounded-2xl bg-[#FFF0F4] border border-[#F0D7DF] flex items-center justify-center text-amber-500 mb-4">
              <Star className="w-5 h-5 fill-amber-500" />
            </div>
            <div className="text-3xl sm:text-4xl font-black text-[#1C1217] tracking-tight">4.9/5</div>
            <div className="text-sm font-bold text-[#1C1217] mt-1">Nota Média dos Clientes</div>
            <p className="text-xs text-[#5C4A53] mt-2 leading-relaxed">
              Avaliação de casais que destacam o cuidado, beleza e facilidade de montagem.
            </p>
          </div>

          <div className="bg-white border border-[#F0D7DF] rounded-3xl p-6 shadow-sm hover:shadow-md transition-all">
            <div className="w-10 h-10 rounded-2xl bg-[#FFF0F4] border border-[#F0D7DF] flex items-center justify-center text-[#22C55E] mb-4">
              <Calendar className="w-5 h-5" />
            </div>
            <div className="text-3xl sm:text-4xl font-black text-[#1C1217] tracking-tight">100%</div>
            <div className="text-sm font-bold text-[#1C1217] mt-1">Garantia de Higienização</div>
            <p className="text-xs text-[#5C4A53] mt-2 leading-relaxed">
              Sem peças avariadas ou arranhadas. Tudo pronto para fotos de alta qualidade.
            </p>
          </div>
        </div>
      </div>

      {/* Local Partner / Venues Mockup Bar */}
      <div className="mt-12 pt-8 border-t border-[#F0D7DF] flex flex-wrap items-center justify-around gap-6 opacity-75">
        {['Sítio Primavera', 'Espaço Villa Real', 'Salão Cristal', 'Chácara Recanto Verde', 'Espaço Imperial'].map(
          (place, i) => (
            <div key={i} className="flex items-center gap-2 text-xs font-bold text-[#5C4A53] uppercase tracking-widest">
              <span className="w-2 h-2 rounded-full bg-[#9E244D]" />
              <span>{place}</span>
            </div>
          )
        )}
      </div>
    </section>
  );
};

