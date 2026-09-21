import React from 'react';
import { ArrowLeft, FileText, AlertTriangle } from 'lucide-react';
import { BRAND_DATA } from '../config/brand';

interface TermsOfUseProps {
  onBack: () => void;
}

export const TermsOfUse: React.FC<TermsOfUseProps> = ({ onBack }) => {
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
            Este documento é uma base informativa e deve ser revisado por um profissional jurídico antes da publicação definitiva.
          </div>
        </div>

        {/* Content Card */}
        <article className="bg-[#141217] rounded-3xl p-6 sm:p-10 border border-[#26212B] shadow-2xl space-y-6 text-gray-300 leading-relaxed">
          <header className="border-b border-[#26212B] pb-6">
            <div className="flex items-center gap-2 text-xs font-bold text-[#D2F837] uppercase tracking-wider mb-2">
              <FileText className="w-4 h-4" />
              <span>Termos e Condições</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              Termos de Uso
            </h1>
            <p className="text-xs text-gray-500 mt-2">
              Última atualização: {new Date().toLocaleDateString('pt-BR')} • {BRAND_DATA.name}
            </p>
          </header>

          <section className="space-y-3 text-sm sm:text-base">
            <p>
              Ao navegar nesta página e solicitar atendimento para os serviços da <strong>{BRAND_DATA.name}</strong>, o usuário declara estar ciente e de acordo com as seguintes condições gerais de uso e atendimento.
            </p>
          </section>

          <section className="space-y-3 text-sm sm:text-base">
            <h2 className="text-xl font-bold text-white tracking-tight">
              1. Natureza do Serviço e Orçamentos
            </h2>
            <p>
              As informações, fotos e valores exibidos nesta página referem-se a modelos de decoração no formato <strong>pegue e monte</strong> com valores a partir de R$ 80.
            </p>
            <p>
              Todos os valores apresentados são valores iniciais de referência e podem sofrer alterações conforme a data, disponibilidade de peças, inclusão de itens personalizados, serviços adicionais de montagem ou frete de transporte. O orçamento final é sempre confirmado pelo canal de atendimento oficial no WhatsApp.
            </p>
          </section>

          <section className="space-y-3 text-sm sm:text-base">
            <h2 className="text-xl font-bold text-white tracking-tight">
              2. Formato Pegue e Monte e Cuidados com as Peças
            </h2>
            <p>
              Na modalidade pegue e monte, o cliente é responsável pelo transporte e pela montagem e desmontagem dos itens no local do evento, salvo quando contratado expressamente o serviço opcional de montagem pela equipe.
            </p>
            <p>
              As peças locadas devem ser devolvidas no prazo combinado e nas mesmas condições de integridade em que foram entregues. Danos, perdas ou avarias em itens decorativos serão tratados conforme as condições pactuadas na contratação.
            </p>
          </section>

          <section className="space-y-3 text-sm sm:text-base">
            <h2 className="text-xl font-bold text-white tracking-tight">
              3. Atendimento e Contato
            </h2>
            <p>
              Dúvidas, confirmações de disponibilidade de data e formalizações de reserva são realizadas diretamente com a equipe da Buum Balloonn pelo WhatsApp oficial <strong>{BRAND_DATA.whatsappNumberFormatted}</strong>.
            </p>
          </section>
        </article>
      </div>
    </div>
  );
};
