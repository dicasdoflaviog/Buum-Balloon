import React from 'react';
import { MessageCircle, Instagram, MapPin, Heart } from 'lucide-react';
import { BRAND_DATA } from '../config/brand';

interface FooterProps {
  onNavigateTo: (path: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigateTo }) => {
  return (
    <footer className="bg-white border-t border-[#F0DDE2] pt-12 pb-16 text-sm text-[#765F66]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
          {/* Brand Info */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-8 h-8 rounded-full bg-[#F7C9D4] text-[#A94767] flex items-center justify-center font-serif text-lg font-bold">
                B
              </span>
              <span className="font-serif text-2xl font-bold text-[#3D2930]">
                {BRAND_DATA.name}
              </span>
            </div>
            <p className="text-sm text-[#765F66] mb-4 max-w-sm leading-relaxed">
              Mini festas e decorações para momentos especiais. Kits decorativos pegue e monte com
              beleza, praticidade e afeto.
            </p>
            <div className="flex items-center gap-2 text-xs text-[#3D2930] font-medium">
              <MapPin className="w-4 h-4 text-[#A94767]" />
              <span>{BRAND_DATA.city}, {BRAND_DATA.state} • Região atendida: {BRAND_DATA.city}</span>
            </div>
          </div>

          {/* Direct Contacts */}
          <div className="md:col-span-4">
            <h4 className="font-serif text-base font-bold text-[#3D2930] mb-3">
              Canais de Atendimento
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href={BRAND_DATA.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-[#765F66] hover:text-[#A94767] transition-colors"
                >
                  <MessageCircle className="w-4 h-4 text-[#A94767]" />
                  <span>WhatsApp: {BRAND_DATA.whatsappNumberFormatted}</span>
                </a>
              </li>
              <li>
                <a
                  href={BRAND_DATA.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-[#765F66] hover:text-[#A94767] transition-colors"
                >
                  <Instagram className="w-4 h-4 text-[#A94767]" />
                  <span>Instagram: {BRAND_DATA.instagramHandle}</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Legal and Institutional */}
          <div className="md:col-span-3">
            <h4 className="font-serif text-base font-bold text-[#3D2930] mb-3">
              Informações Legais
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => {
                    onNavigateTo('/politica-de-privacidade');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-[#A94767] transition-colors text-left"
                >
                  Política de Privacidade
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigateTo('/termos-de-uso');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-[#A94767] transition-colors text-left"
                >
                  Termos de Uso
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Legal Disclaimer Box required by briefing */}
        <div className="border-t border-[#F0DDE2] pt-6 mb-6 text-xs text-[#765F66] space-y-2 leading-relaxed">
          <p>
            * <strong>Valores e Condições:</strong> Os preços apresentados são iniciais e podem sofrer alterações conforme data,
            disponibilidade dos itens no acervo, personalizações e composição escolhida. Confirme todas as informações
            diretamente no atendimento.
          </p>
          <p>
            * <strong>Formato Pegue e Monte:</strong> Os kits decorativos são retirados e devolvidos pelo cliente. A montagem,
            desmontagem e frete/transporte são serviços opcionais sujeitos à disponibilidade e cobrança adicional em Teixeira de Freitas, Bahia.
          </p>
        </div>

        <div className="border-t border-[#F0DDE2]/60 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#765F66]">
          <p>© {new Date().getFullYear()} {BRAND_DATA.name}. Todos os direitos reservados.</p>
          <p className="flex items-center gap-1">
            Feito com carinho para celebrar momentos inesquecíveis <Heart className="w-3 h-3 text-[#A94767] fill-current" />
          </p>
        </div>
      </div>
    </footer>
  );
};
