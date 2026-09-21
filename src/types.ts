export interface ModelOffer {
  name: string;
  price: number;
  description: string;
  highlights: string[];
  featured?: boolean;
  idealFor?: string;
  sampleImage?: string;
}

export interface BenefitItem {
  title: string;
  description: string;
  icon: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'cenario' | 'mesa' | 'detalhes' | 'modelo';
  modelName?: string;
  imageUrl: string;
  altText: string;
}

export interface LandingPageConfig {
  slug: string;
  category: string;
  title: string;
  subtitle: string;
  location: string;
  startingPrice: number;
  heroImage: string;
  gallery: string[];
  models: ModelOffer[];
  benefits: BenefitItem[];
  faq: FAQItem[];
  whatsappMessage: string;
}

export interface BrandData {
  name: string;
  segment: string;
  whatsappNumberFormatted: string;
  whatsappNumberRaw: string;
  whatsappLink: string;
  instagramHandle: string;
  instagramUrl: string;
  city: string;
  state: string;
  regionServed: string;
}

export interface TrackingParams {
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_content?: string;
  utm_term?: string;
  fbclid?: string;
  gclid?: string;
  [key: string]: string | undefined;
}

export interface LeadFormData {
  name: string;
  whatsapp: string;
  eventDate: string;
  city: string;
  location: string;
  guestCount: string;
  modelInterest: string;
  budgetRange: string;
  observations: string;
}
