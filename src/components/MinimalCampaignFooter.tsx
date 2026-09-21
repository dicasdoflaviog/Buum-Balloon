import React from 'react';
import { MessageCircle, MapPin, ShieldCheck, Clock, Sparkles } from 'lucide-react';
import { BRAND_DATA, generateWhatsAppUrl } from '../config/brand';
import { trackWhatsAppClick } from '../utils/tracking';

interface MinimalCampaignFooterProps {
  onNavigateTo: (path: string) => void;
}

export const MinimalCampaignFooter: React.FC<MinimalCampaignFooterProps> = ({ onNavigateTo }) => {
  const handleFooterWhatsApp = () => {
    trackWhatsAppClick({
      theme: 'casamento',
      buttonLocation: 'footer_whatsapp',
      customMessage: 'Olá! Vim pela página da Buum Balloonn e gostaria de tirar uma dúvida sobre a decoração de casamento.',
      city: 'Teixeira de Freitas',
    });
    window.open(
      generateWhatsAppUrl('Olá! Vim pela página da Buum Balloonn e gostaria de tirar uma dúvida sobre a decoração de casamento.'),
      '_blank',
      'noopener,noreferrer'
    );
  };

  return (
    <footer className="bg-[#1C1217] text-white border-t border-[#3D2532] pt-14 pb-28 md:pb-16 mt-12 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Organized Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 pb-12 border-b border-[#3D2532]">
          {/* Column 1: Brand & Purpose (5 cols) */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-[#9E244D] to-[#7A1838] flex items-center justify-center text-white font-black text-sm shadow-md">
                BB
              </div>
              <div>
                <span className="text-lg font-black tracking-tight text-white block">
                  {BRAND_DATA.name}
                </span>
                <span className="text-xs text-rose-200/80 font-medium block">
                  Mini Festas & Decorações • Pegue e Monte
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#A8929C] leading-relaxed font-normal max-w-md">
              Tornamos o seu casamento memorável e elegante sem custos abusivos. Kits inteligentes, higienizados e fáceis de montar para casamentos civis, mini weddings e celebrações íntimas em Teixeira de Freitas.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#2A1922] border border-[#472737] text-[11px] font-bold text-rose-200">
              <Sparkles className="w-3.5 h-3.5 text-[#22C55E]" />
              <span>Kits a partir de R$ 80 • 100% no seu controle</span>
            </div>
          </div>

          {/* Column 2: Atendimento Direto WhatsApp (4 cols) */}
          <div className="md:col-span-4 space-y-3.5">
            <h4 className="text-xs font-bold uppercase tracking-widest text-rose-200/90">
              Atendimento Direto
            </h4>

            <div className="space-y-2.5 text-xs text-[#C4B2BA]">
              <div className="flex items-start gap-2.5">
                <MessageCircle className="w-4 h-4 text-[#22C55E] shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-white block">WhatsApp Oficial:</span>
                  <button
                    onClick={handleFooterWhatsApp}
                    className="text-[#22C55E] hover:underline font-bold text-sm transition-all cursor-pointer"
                  >
                    {BRAND_DATA.whatsappNumberFormatted}
                  </button>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-rose-300 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-white block">Horário de Atendimento:</span>
                  <span>Segunda a Sábado, das 08h às 18h</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-rose-300 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-white block">Ponto de Retirada:</span>
                  <span>Teixeira de Freitas, Bahia (Centro)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Column 3: Garantias e Segurança (3 cols) */}
          <div className="md:col-span-3 space-y-3.5">
            <h4 className="text-xs font-bold uppercase tracking-widest text-rose-200/90">
              Garantias Buum Balloonn
            </h4>

            <div className="space-y-2 text-xs text-[#A8929C]">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#22C55E] shrink-0" />
                <span className="text-white font-medium">Kits 100% Higienizados</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#22C55E] shrink-0" />
                <span className="text-white font-medium">Modular (Cabe no Porta-Malas)</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#22C55E] shrink-0" />
                <span className="text-white font-medium">Suporte na Montagem</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#22C55E] shrink-0" />
                <span className="text-white font-medium">Reserva com Sinal Seguro</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Sub-footer: Compliance & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8E7582]">
          <div className="flex items-center gap-3 text-[11px]">
            <button
              onClick={() => onNavigateTo('/politica-de-privacidade')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Política de Privacidade
            </button>
            <span>•</span>
            <button
              onClick={() => onNavigateTo('/termos-de-uso')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Termos de Uso
            </button>
          </div>

          <p className="text-[11px] text-center sm:text-right">
            © {new Date().getFullYear()} Buum Balloonn • Teixeira de Freitas, BA. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

