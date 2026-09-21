import { TrackingParams } from '../types';
import { getWhatsAppNumber } from '../config/brand';

declare global {
  interface Window {
    fbq?: any;
    _fbq?: any;
    gtag?: any;
    dataLayer?: any[];
  }
}

const UTM_KEYS = [
  'utm_source',
  'utm_medium',
  'utm_campaign',
  'utm_content',
  'utm_term',
  'fbclid',
  'gclid',
];

/**
 * Initializes Meta Pixel and GA4 if IDs are present in environment variables
 */
export function initAnalyticsFromEnv() {
  if (typeof window === 'undefined') return;

  const pixelId =
    (typeof import.meta !== 'undefined' && import.meta.env?.VITE_META_PIXEL_ID) ||
    (typeof process !== 'undefined' && process.env?.NEXT_PUBLIC_META_PIXEL_ID);

  if (pixelId && !window.fbq) {
    try {
      /* eslint-disable */
      (function (f: any, b: any, e: any, v: any, n?: any, t?: any, s?: any) {
        if (f.fbq) return;
        n = f.fbq = function () {
          n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
        };
        if (!f._fbq) f._fbq = n;
        n.push = n;
        n.loaded = !0;
        n.version = '2.0';
        n.queue = [];
        t = b.createElement(e);
        t.async = !0;
        t.src = v;
        s = b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t, s);
      })(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');
      /* eslint-enable */

      if (window.fbq) {
        window.fbq('init', pixelId);
        window.fbq('track', 'PageView');
      }
    } catch (e) {
      console.warn('Could not auto-initialize Meta Pixel:', e);
    }
  }
}

/**
 * Extracts and persists UTM and ad click parameters across session
 */
export function getTrackingParams(): TrackingParams {
  if (typeof window === 'undefined') return {};

  const searchParams = new URLSearchParams(window.location.search);
  const params: TrackingParams = {};

  let foundInUrl = false;
  UTM_KEYS.forEach((key) => {
    const val = searchParams.get(key);
    if (val) {
      params[key] = val;
      foundInUrl = true;
    }
  });

  if (foundInUrl) {
    try {
      sessionStorage.setItem('buum_tracking_params', JSON.stringify(params));
    } catch {
      // storage unavailable
    }
    return params;
  }

  try {
    const cached = sessionStorage.getItem('buum_tracking_params');
    if (cached) {
      return JSON.parse(cached);
    }
  } catch {
    // fallback
  }

  return {};
}

/**
 * Dispatches an analytics event to Meta Pixel, GA4, and Google Tag Manager
 */
export function trackEvent(eventName: string, payload: Record<string, any> = {}) {
  const trackingParams = getTrackingParams();
  const enrichedPayload = {
    ...payload,
    ...trackingParams,
    page_path: typeof window !== 'undefined' ? window.location.pathname : '',
    timestamp: new Date().toISOString(),
  };

  if (import.meta.env?.DEV) {
    console.info(`[Analytics Event] ${eventName}:`, enrichedPayload);
  }

  // Google Tag Manager
  if (typeof window !== 'undefined') {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: eventName,
      ...enrichedPayload,
    });

    // Google Analytics 4 (gtag)
    if (typeof window.gtag === 'function') {
      try {
        window.gtag('event', eventName, enrichedPayload);
      } catch (err) {
        console.warn('GA4 dispatch error:', err);
      }
    }

    // Meta Pixel (fbq)
    if (typeof window.fbq === 'function') {
      try {
        // Standard Meta Events mapping
        const standardMetaEvents = [
          'Lead',
          'PageView',
          'ViewContent',
          'Contact',
          'InitiateCheckout',
          'CompleteRegistration',
        ];

        if (standardMetaEvents.includes(eventName)) {
          window.fbq('track', eventName, enrichedPayload);
        } else {
          window.fbq('trackCustom', eventName, enrichedPayload);
        }
      } catch (err) {
        console.warn('Meta Pixel dispatch error:', err);
      }
    }
  }
}

/**
 * Standard WhatsApp click event (dispatches both WhatsAppClick and Meta 'Contact')
 */
export function trackWhatsAppClick(options: {
  theme: string;
  model?: string;
  modelId?: string;
  modelName?: string;
  buttonLocation: string;
  customMessage?: string;
  city?: string;
}) {
  const modelLabel = options.modelName || options.model || options.modelId;
  const payload = {
    theme: options.theme || 'casamento',
    model: modelLabel,
    content_name: modelLabel || 'Geral',
    content_category: options.theme || 'casamento',
    button_location: options.buttonLocation,
    city: options.city || 'Teixeira de Freitas',
    whatsapp_number: getWhatsAppNumber(),
    message_preview: options.customMessage?.slice(0, 60),
  };

  trackEvent('WhatsAppClick', payload);
  // Also track official Meta Ads Contact event
  trackEvent('Contact', payload);
}

/**
 * Tracks InitiateCheckout when a user selects a specific decor package
 */
export function trackInitiateCheckout(options: {
  theme: string;
  modelId?: string;
  modelName: string;
  value: number;
  currency: string;
}) {
  trackEvent('InitiateCheckout', {
    content_name: options.modelName,
    content_category: options.theme,
    content_ids: options.modelId ? [options.modelId] : undefined,
    value: options.value,
    currency: options.currency,
  });
}

/**
 * CTA click event (e.g. scroll to models or see options)
 */
export function trackCTAclick(ctaName: string, location: string) {
  trackEvent('CTAclick', {
    cta_name: ctaName,
    button_location: location,
    theme: 'casamento',
    city: 'Teixeira de Freitas',
  });
}

/**
 * Form interaction started
 */
export function trackFormStart() {
  trackEvent('FormStart', {
    theme: 'casamento',
    city: 'Teixeira de Freitas',
  });
}

/**
 * FAQ opened accordion item
 */
export function trackFAQOpen(question: string) {
  trackEvent('FAQOpen', {
    question,
    theme: 'casamento',
  });
}

/**
 * Lead generation event (dispatches standard Meta 'Lead')
 */
export function trackLeadSubmission(data: {
  theme: string;
  model: string;
  city: string;
  eventDate: string;
  budgetRange: string;
  estimatedValue?: number;
}) {
  trackEvent('Lead', {
    theme: data.theme || 'casamento',
    content_name: data.model,
    content_category: data.theme || 'casamento',
    city: data.city || 'Teixeira de Freitas',
    event_date: data.eventDate,
    budget_range: data.budgetRange,
    currency: 'BRL',
    value: data.estimatedValue || 80,
  });
}

/**
 * View pricing / InitiateCheckout event for Meta Ads
 */
export function trackModelInterest(theme: string, modelName: string, price: number) {
  trackEvent('InitiateCheckout', {
    theme: theme || 'casamento',
    model: modelName,
    content_name: modelName,
    content_category: theme || 'casamento',
    currency: 'BRL',
    value: price,
  });
}

/**
 * View pricing section
 */
export function trackViewPricing(theme: string = 'casamento') {
  trackEvent('ViewPricing', {
    theme,
    city: 'Teixeira de Freitas',
  });
}

/**
 * View FAQ event
 */
export function trackViewFAQ(theme: string, question: string) {
  trackEvent('ViewFAQ', {
    theme,
    question,
  });
}

