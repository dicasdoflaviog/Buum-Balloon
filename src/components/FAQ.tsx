import React, { useState } from 'react';
import { Plus, Minus, HelpCircle } from 'lucide-react';
import { trackFAQOpen } from '../utils/tracking';

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'A decoração já vem montada?',
      answer:
        'Não. Nossa proposta é o pegue e monte. Você retira os itens combinados, embalados e higienizados em Teixeira de Freitas, monta facilmente no local com nosso suporte e devolve após a festa.',
    },
    {
      question: 'A Buum Balloonn monta no local se eu preferir?',
      answer:
        'Sim! A montagem e desmontagem pela nossa equipe pode ser contratada à parte, de acordo com a disponibilidade da data e o bairro do seu evento em Teixeira de Freitas.',
    },
    {
      question: 'Posso personalizar cores e detalhes das flores?',
      answer:
        'Com certeza. Nossos modelos são a base, mas podemos ajustar paletas de cores dos tecidos, estilo dos arranjos florais nobres e quantidade de suportes de doces.',
    },
    {
      question: 'Como funciona o transporte? Cabe no meu carro?',
      answer:
        'Sim! Todos os nossos kits foram desenvolvidos de forma modular (arcos desmontáveis, mesas encaixáveis). Cabem com folga no porta-malas e banco traseiro de carros comuns de passeio.',
    },
    {
      question: 'Com quanta antecedência devo reservar?',
      answer:
        'Recomendamos reservar assim que tiver a data do casamento definida, pois finais de semana costumam ter alta procura em Teixeira de Freitas.',
    },
    {
      question: 'Vocês atendem fora de Teixeira de Freitas?',
      answer:
        'Nossa base principal e retirada é em Teixeira de Freitas, BA. Para cidades e distritos vizinhos, entre em contato no WhatsApp para checarmos a viabilidade.',
    },
  ];

  const handleToggle = (index: number) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
      trackFAQOpen(faqs[index].question);
    }
  };

  return (
    <section id="faq" className="py-12 sm:py-20 px-3 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-xl mx-auto mb-10 sm:mb-14 space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#FFF0F4] border border-[#F0D7DF] text-xs font-bold text-[#9E244D] uppercase tracking-wider">
          <HelpCircle className="w-3.5 h-3.5" />
          <span>Tire Suas Dúvidas</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#1C1217] tracking-tight leading-tight">
          Perguntas Frequentes
        </h2>
        <p className="text-sm sm:text-base text-[#5C4A53] font-medium">
          Tudo que você precisa saber antes de reservar o seu kit de casamento.
        </p>
      </div>

      {/* Pill-shaped Accordion Rows */}
      <div className="space-y-3">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              className="rounded-full transition-all overflow-hidden border border-[#F0D7DF] bg-white hover:border-[#9E244D]/50 shadow-xs"
              style={{
                borderRadius: isOpen ? '24px' : '9999px',
              }}
            >
              <button
                onClick={() => handleToggle(index)}
                className="w-full min-h-[56px] px-6 sm:px-8 py-4 text-left flex items-center justify-between gap-4 cursor-pointer transition-colors"
                aria-expanded={isOpen}
              >
                <span className="text-sm sm:text-base font-bold text-[#1C1217] tracking-tight">
                  {faq.question}
                </span>

                {/* Circular (+) Icon Pill */}
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                    isOpen
                      ? 'bg-[#9E244D] text-white rotate-45 shadow-sm'
                      : 'bg-[#FFF0F4] text-[#9E244D] border border-[#F0D7DF]'
                  }`}
                >
                  <Plus className="w-4 h-4 stroke-[2.5]" />
                </div>
              </button>

              {isOpen && (
                <div className="px-6 sm:px-8 pb-5 pt-1 text-xs sm:text-sm text-[#5C4A53] leading-relaxed border-t border-[#F0D7DF]">
                  {faq.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};
