import { BrandData } from '../types';

export const BRAND_DATA: BrandData = {
  name: 'Buum Balloonn',
  segment: 'Mini festas, decorações e locação de itens decorativos no formato pegue e monte.',
  whatsappNumberFormatted: '+55 73 99934-7555',
  whatsappNumberRaw: '5573999347555',
  whatsappLink: 'https://wa.me/5573999347555',
  instagramHandle: '@buumballoonn',
  instagramUrl: 'https://www.instagram.com/buumballoonn',
  city: 'Teixeira de Freitas',
  state: 'Bahia',
  regionServed: 'Teixeira de Freitas, Bahia',
};

/**
 * Gets configured WhatsApp number from environment variable or official fallback
 */
export function getWhatsAppNumber(): string {
  const envNumber =
    (typeof import.meta !== 'undefined' && import.meta.env?.VITE_WHATSAPP_NUMBER) ||
    (typeof process !== 'undefined' && process.env?.NEXT_PUBLIC_WHATSAPP_NUMBER);
  
  if (envNumber && typeof envNumber === 'string' && envNumber.trim() !== '') {
    return envNumber.replace(/\D/g, '');
  }
  return BRAND_DATA.whatsappNumberRaw;
}

/**
 * Generates an official WhatsApp click-to-chat URL with pre-filled message
 */
export function generateWhatsAppUrl(message: string): string {
  const phone = getWhatsAppNumber();
  const encodedText = encodeURIComponent(message.trim());
  return `https://wa.me/${phone}?text=${encodedText}`;
}
