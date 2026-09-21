import React from 'react';
import { ArrowLeft, Shield, AlertTriangle } from 'lucide-react';
import { BRAND_DATA } from '../config/brand';

interface PrivacyPolicyProps {
  onBack: () => void;
}

export const PrivacyPolicy: React.FC<PrivacyPolicyProps> = ({ onBack }) => {
  return (
    <div className="min-h-screen bg-[#0A090B] text-white py-12 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto">
        {/* Back Navigation */}
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 text-sm font-bold text-[#D2F837] hover:text-[#bce628] mb-8 cursor-pointer group"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          <span>Voltar para a página de casamento</span>
        </button>

        {/* Legal Disclaimer Box */}
        <div className="mb-8 rounded-2xl bg-[#141217] border border-amber-500/30 p-4 sm:p-5 flex items-start gap-3 text-xs sm:text-sm text-amber-200">
          <AlertTriangle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
          <div>
            <strong className="block font-bold">Aviso importante:</strong>
            Este documento é uma base informativa para conformidade com plataformas de anúncios e deve ser revisado por um profissional jurídico antes da publicação definitiva.
          </div>
        </div>

        {/* Content Card */}
        <article className="bg-[#141217] rounded-3xl p-6 sm:p-10 border border-[#26212B] shadow-2xl space-y-6 text-gray-300 leading-relaxed">
          <header className="border-b border-[#26212B] pb-6">
            <div className="flex items-center gap-2 text-xs font-bold text-[#D2F837] uppercase tracking-wider mb-2">
              <Shield className="w-4 h-4" />
              <span>Transparência e Privacidade</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              Política de Privacidade
            </h1>
            <p className="text-xs text-gray-500 mt-2">
              Última atualização: {new Date().toLocaleDateString('pt-BR')} • {BRAND_DATA.name}
            </p>
          </header>

          <section className="space-y-3 text-sm sm:text-base">
            <p>
              A <strong>{BRAND_DATA.name}</strong> respeita a privacidade dos visitantes e clientes deste site.
            </p>
            <p>
              Coletamos informações fornecidas voluntariamente pelo visitante, como nome, número de WhatsApp, data do evento, cidade, local da festa, modelo de interesse e faixa de investimento enviadas por meio dos formulários ou canais de atendimento.
            </p>
          </section>

          <section className="space-y-3 text-sm sm:text-base">
            <h2 className="text-xl font-bold text-white tracking-tight">
              Finalidade do uso das informações
            </h2>
            <p>Essas informações podem ser utilizadas para:</p>
            <ul className="list-disc pl-5 space-y-1.5 text-gray-400">
              <li>Responder solicitações de orçamento e atendimento.</li>
              <li>Verificar disponibilidade de datas para casamento.</li>
              <li>Recomendar modelos de decoração adequados ao espaço.</li>
              <li>Realizar atendimento pelo WhatsApp.</li>
              <li>Medir o desempenho das campanhas de tráfego pago.</li>
            </ul>
          </section>

          <section className="space-y-3 text-sm sm:text-base">
            <h2 className="text-xl font-bold text-white tracking-tight">
              Tecnologias de análise e cookies
            </h2>
            <p>
              Também podemos utilizar tecnologias como cookies, parâmetros UTM, Meta Pixel e Google Analytics para compreender a origem dos acessos e medir conversões de anúncios.
            </p>
          </section>

          <section className="space-y-3 text-sm sm:text-base">
            <h2 className="text-xl font-bold text-white tracking-tight">
              Compartilhamento e segurança
            </h2>
            <p>
              <strong>Não vendemos os dados pessoais dos visitantes.</strong>
            </p>
            <p>
              Os dados são utilizados estritamente para a finalidade de atendimento e prestação de serviços de locação e decoração.
            </p>
          </section>

          <section className="space-y-3 text-sm sm:text-base">
            <h2 className="text-xl font-bold text-white tracking-tight">
              Canais de contato
            </h2>
            <div className="bg-[#0A090B] p-4 rounded-2xl border border-[#26212B] text-sm space-y-1">
              <p>
                <strong>WhatsApp:</strong>{' '}
                <a href={BRAND_DATA.whatsappLink} target="_blank" rel="noopener noreferrer" className="text-[#D2F837] underline">
                  {BRAND_DATA.whatsappNumberFormatted}
                </a>
              </p>
              <p>
                <strong>Localidade:</strong> {BRAND_DATA.city}, {BRAND_DATA.state}
              </p>
            </div>
          </section>
        </article>
      </div>
    </div>
  );
};
