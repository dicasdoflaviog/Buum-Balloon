import React, { useState, useEffect } from 'react';
import { CampaignHeader } from './components/CampaignHeader';
import { OpeningBlock } from './components/OpeningBlock';
import { CoreFeaturesBento } from './components/CoreFeaturesBento';
import { PricingCards } from './components/PricingCards';
import { SocialProofBento } from './components/SocialProofBento';
import { HowItWorks } from './components/HowItWorks';
import { MockupTestimonials } from './components/MockupTestimonials';
import { FAQ } from './components/FAQ';
import { QualificationForm } from './components/QualificationForm';
import { FinalCTA } from './components/FinalCTA';
import { MinimalCampaignFooter } from './components/MinimalCampaignFooter';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { TermsOfUse } from './pages/TermsOfUse';
import { trackEvent, getTrackingParams, initAnalyticsFromEnv } from './utils/tracking';

export default function App() {
  const [currentPath, setCurrentPath] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      const p = window.location.pathname.toLowerCase();
      return p === '' ? '/' : p;
    }
    return '/';
  });

  // Track initial page view & listen for browser navigation
  useEffect(() => {
    // Initialize Meta Pixel & GA4 if configured via environment
    initAnalyticsFromEnv();

    // Capture URL params (UTMs, fbclid, gclid) on load
    getTrackingParams();

    const handleLocationChange = () => {
      const p = window.location.pathname.toLowerCase();
      setCurrentPath(p === '' ? '/' : p);
    };

    window.addEventListener('popstate', handleLocationChange);
    return () => window.removeEventListener('popstate', handleLocationChange);
  }, []);

  // Update Page Title and fire Meta Ads PageView / ViewContent tracking
  useEffect(() => {
    if (currentPath === '/politica-de-privacidade') {
      document.title = 'Política de Privacidade | Buum Balloonn';
    } else if (currentPath === '/termos-de-uso') {
      document.title = 'Termos de Uso | Buum Balloonn';
    } else {
      document.title = 'Decoração de Casamento Pegue e Monte em Teixeira de Freitas | Buum Balloonn';
    }

    trackEvent('PageView', {
      theme: 'casamento',
      path: currentPath,
    });
    trackEvent('ViewContent', {
      content_name: 'Decoração de Casamento Pegue e Monte',
      category: 'Casamento',
      theme: 'casamento',
      value: 80,
      currency: 'BRL',
    });
  }, [currentPath]);

  const navigateTo = (path: string) => {
    setCurrentPath(path);
    if (typeof window !== 'undefined' && window.history?.pushState) {
      window.history.pushState({}, '', path);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleScrollToModels = () => {
    const el = document.getElementById('modelos');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Route: Política de Privacidade (Legal compliance for Meta Ads)
  if (currentPath === '/politica-de-privacidade') {
    return (
      <PrivacyPolicy
        onBack={() => {
          navigateTo('/casamento');
        }}
      />
    );
  }

  // Route: Termos de Uso (Legal compliance for Meta Ads)
  if (currentPath === '/termos-de-uso') {
    return (
      <TermsOfUse
        onBack={() => {
          navigateTo('/casamento');
        }}
      />
    );
  }

  // Modern High-Contrast Single-Page UI based on user's image references
  return (
    <div className="min-h-screen flex flex-col bg-[#FFF7F9] text-[#1C1217] antialiased selection:bg-[#9E244D] selection:text-white">
      {/* Top Header: Sleek direct header without distracting navigation menu */}
      <CampaignHeader />

      {/* Main Campaign Flow */}
      <main className="flex-1 w-full space-y-6 sm:space-y-12">
        {/* HERO (Reference 3: Hedvig style - Big cinematic image with bold typography directly on top) */}
        <OpeningBlock onScrollToModels={handleScrollToModels} />

        {/* BENTO CORE FEATURES (Reference 1 Top Left: "App Core Features" bento grid) */}
        <CoreFeaturesBento />

        {/* PRICING MODELS (The 3 wedding models: Essencial R$ 80, Encanto R$ 250, Celebração R$ 600) */}
        <PricingCards />

        {/* BUILT FOR BETTER CELEBRATIONS (Reference 1 Bottom Left: Center photo + 4 metric cards) */}
        <SocialProofBento />

        {/* HOW IT WORKS (Reference 2: Phone mockups on left + 01-04 numbered pills on right) */}
        <HowItWorks />

        {/* MOCKUP TESTIMONIALS / SOCIAL PROOFS (Reference 1 Top Right: "Hear from Our Clients" with 2 electric lime cards) */}
        <MockupTestimonials />

        {/* EVERYTHING YOU NEED / FAQ (Reference 1 Middle Right: Pill-shaped accordions with (+) icon) */}
        <FAQ />

        {/* QUALIFICATION FORM (Fast 1-tap selectors with instant WhatsApp lead generation) */}
        <QualificationForm />

        {/* FINAL CLOSING BENTO (Reference 1 Bottom Right: "The Perfect Solution for Every Business") */}
        <FinalCTA />
      </main>

      {/* Minimal Footer */}
      <MinimalCampaignFooter onNavigateTo={navigateTo} />

      {/* Floating WhatsApp on Mobile/Desktop */}
      <FloatingWhatsApp />
    </div>
  );
}
