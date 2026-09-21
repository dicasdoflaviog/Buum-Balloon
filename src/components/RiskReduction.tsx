import React from 'react';
import { MessageCircle, CalendarCheck, MapPin, Sliders } from 'lucide-react';

export const RiskReduction: React.FC = () => {
  const highlights = [
    {
      title: 'Atendimento pelo WhatsApp.',
      desc: 'Tire dúvidas diretamente sem formulários longos ou esperas demoradas.',
      icon: MessageCircle,
    },
    {
      title: 'Consulta de disponibilidade.',
      desc: 'Verificamos se o acervo está livre para o dia exato do seu casamento.',
      icon: CalendarCheck,
    },
    {
      title: 'Avaliação conforme seu espaço.',
      desc: 'Analisamos se o arranjo cabe na sua sala, varanda, sítio ou espaço reservado.',
      icon: MapPin,
    },
    {
      title: 'Personalização sob consulta.',
      desc: 'Ajustamos paleta de cores ou peças para combinar com seu gosto.',
      icon: Sliders,
    },
  ];

  return (
    <section className="py-12 sm:py-16 px-4 bg-white border-t border-[#F0DDE2]/70">
      <div className="max-w-md sm:max-w-2xl mx-auto space-y-6">
        {/* Título do Bloco 6 */}
        <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#3D2930] leading-snug">
          Você não precisa decidir tudo agora
        </h2>

        {/* Textos exatos */}
        <div className="space-y-2.5 text-sm sm:text-base text-[#765F66] leading-relaxed">
          <p>
            Os três modelos servem para você entender as possibilidades e escolher uma faixa de investimento.
          </p>
          <p>
            Depois, pelo WhatsApp, avaliamos sua data, seu espaço e o que pode ser ajustado.
          </p>
        </div>

        {/* Frase de segurança em destaque */}
        <div className="p-4 sm:p-5 rounded-2xl bg-[#FFF3F6] border border-[#F0DDE2] text-center">
          <p className="font-serif text-base sm:text-lg font-bold text-[#A94767] leading-relaxed">
            “Primeiro você conversa. Depois confirma o que faz sentido para o seu casamento.”
          </p>
        </div>

        {/* 4 Destaques */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
          {highlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-4 rounded-2xl bg-[#FFF9FA] border border-[#F0DDE2] flex items-start gap-3"
              >
                <div className="w-8 h-8 rounded-xl bg-[#FFF3F6] text-[#A94767] border border-[#F0DDE2] flex items-center justify-center shrink-0 mt-0.5">
                  <Icon className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs sm:text-sm font-bold text-[#3D2930]">
                    {item.title}
                  </p>
                  <p className="text-xs text-[#765F66] mt-0.5 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
