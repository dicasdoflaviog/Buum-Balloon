import React from 'react';
import { Star, Sparkles, Quote, CheckCircle } from 'lucide-react';

export const MockupTestimonials: React.FC = () => {
  const testimonials = [
    {
      id: 1,
      isContrastCard: true, // Contrast highlight card
      stars: 5,
      quote:
        'A Buum Balloonn salvou nosso casamento! Estavam cobrando mais de R$ 3.000 só para decorar o salão. Pegamos o Modelo Encanto por R$ 250, montamos em 30 minutos e as fotos ficaram dignas de revista.',
      name: 'Mariana & Rafael Santos',
      role: 'Casamento Civil • Bairro Bela Vista',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&h=120&q=80',
    },
    {
      id: 2,
      isContrastCard: false,
      stars: 5,
      quote:
        'Experiência impecável do início ao fim. O atendimento no WhatsApp foi super atencioso e o kit veio todo higienizado e embalado. Coube no porta-malas do nosso HB20 sem aperto.',
      name: 'Camila & Thiago Oliveira',
      role: 'Mini Wedding • Centro',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&h=120&q=80',
    },
    {
      id: 3,
      isContrastCard: false,
      stars: 5,
      quote:
        'Eu estava morrendo de medo de não conseguir montar, mas os encaixes são muito fáceis. Meus convidados acharam que contratamos decoradora cara. Recomendo de olhos fechados!',
      name: 'Beatriz Costa & Lucas',
      role: 'Cerimônia Íntima • Bairro Monte Castelo',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&h=120&q=80',
    },
    {
      id: 4,
      isContrastCard: false,
      stars: 5,
      quote:
        'Rápido, confiável e sem estresse. O valor é justo de verdade para quem quer uma celebração bonita sem se endividar no início da vida a dois. Nota 10 em tudo.',
      name: 'Letícia & Rodrigo Mendes',
      role: 'Jantar de Noivado • Bairro Jardim Caraípe',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&h=120&q=80',
    },
    {
      id: 5,
      isContrastCard: true, // Second contrast card
      stars: 5,
      quote:
        'As flores permanentes parecem de verdade, o bolo cenográfico é maravilhoso e as louças douradas dão um charme incrível. Todo mundo elogiou a mesa dos doces!',
      name: 'Juliana & Felipe Prado',
      role: 'Casamento no Sítio • Teixeira de Freitas',
      avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=120&h=120&q=80',
    },
    {
      id: 6,
      isContrastCard: false,
      stars: 5,
      quote:
        'Pegamos o modelo essencial para comemorar no cartório e um almoço com a família. Ficou perfeito! Não sobra nada acumulado em casa depois e o bolso agradece.',
      name: 'Patrícia & Daniel Gomes',
      role: 'Casamento Civil • Bairro Recanto do Lago',
      avatar: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=120&h=120&q=80',
    },
  ];

  return (
    <section id="depoimentos" className="py-12 sm:py-20 px-3 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14 space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#FFF0F4] border border-[#F0D7DF] text-xs font-bold text-[#9E244D] uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Depoimentos Reais</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#1C1217] tracking-tight leading-tight">
          O que dizem os noivos de Teixeira de Freitas
        </h2>
        <p className="text-sm sm:text-base text-[#5C4A53] font-medium">
          Veja como casais reais criaram uma celebração memorável sem estourar o orçamento.
        </p>
      </div>

      {/* 6-Card Grid with Pastel & Contrast Elements */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
        {testimonials.map((t) => (
          <div
            key={t.id}
            className={`rounded-3xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:scale-[1.01] ${
              t.isContrastCard
                ? 'bg-[#1C1217] text-white shadow-xl shadow-[#1C1217]/20 border border-[#3D2532]'
                : 'bg-white text-[#1C1217] border border-[#F0D7DF] shadow-sm hover:shadow-md'
            }`}
          >
            {/* Top Stars & Quote icon */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1">
                  {[...Array(t.stars)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>
                <Quote
                  className={`w-6 h-6 opacity-30 ${t.isContrastCard ? 'text-white' : 'text-[#9E244D]'}`}
                />
              </div>

              {/* Quote text */}
              <p
                className={`text-sm sm:text-[15px] font-medium leading-relaxed ${
                  t.isContrastCard ? 'text-rose-50/90' : 'text-[#5C4A53]'
                }`}
              >
                "{t.quote}"
              </p>
            </div>

            {/* Author Profile Footer */}
            <div
              className={`mt-6 pt-5 flex items-center gap-3 border-t ${
                t.isContrastCard ? 'border-white/15' : 'border-[#F0D7DF]'
              }`}
            >
              <img
                src={t.avatar}
                alt={t.name}
                className={`w-11 h-11 rounded-full object-cover border-2 shrink-0 ${
                  t.isContrastCard ? 'border-[#9E244D]' : 'border-[#9E244D]'
                }`}
              />
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-1.5">
                  <h4
                    className={`font-black text-sm tracking-tight truncate ${
                      t.isContrastCard ? 'text-white' : 'text-[#1C1217]'
                    }`}
                  >
                    {t.name}
                  </h4>
                  <CheckCircle
                    className="w-3.5 h-3.5 shrink-0 text-[#22C55E] fill-[#22C55E]"
                  />
                </div>
                <p
                  className={`text-[11px] truncate ${
                    t.isContrastCard ? 'text-rose-200/80 font-medium' : 'text-[#5C4A53]'
                  }`}
                >
                  {t.role}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

