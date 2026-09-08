import React from 'react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { SEOHead } from '../seo/SEOHead';
import { ConciergeContact } from '../components/ConciergeContact';
import { absoluteUrl } from '../seo/site';

interface PartnersPageProps {
  path: string;
  onNavigate: (url: string) => void;
}

const copy: Record<string, { h1: string; title: string; description: string; lead: string }> = {
  '/partners': {
    h1: 'Local partners',
    title: 'Partners | List a Real Hotel or Taxi near Kainchi Dham',
    description: 'We only list businesses that exist. Hotels, homestays, and licensed hill taxis near Kainchi Dham can request a listing review.',
    lead: 'Independent platform. We do not sell fake businesses or invented rooms. If you operate a real stay or commercial hill vehicle near Kainchi, Bhowali, or Kathgodam, request a review.',
  },
  '/list-your-hotel': {
    h1: 'List your hotel',
    title: 'List Your Hotel near Kainchi Dham',
    description: 'Request a listing review for a real hotel or homestay near Kainchi Dham. We inspect before publishing.',
    lead: 'Tell us the property name, distance from the ashram gate, and a phone number we can verify. We will not publish amenities we have not been shown.',
  },
  '/list-your-taxi': {
    h1: 'List your taxi',
    title: 'List Your Taxi | Kainchi Dham Transfers',
    description: 'Licensed hill chauffeurs for Kathgodam, Pantnagar, and local circuits can request to join the desk.',
    lead: 'Commercial permit and hill experience required. Quote honest one-way fares; we already publish starting bands on the taxi page.',
  },
  '/local-businesses': {
    h1: 'Local businesses',
    title: 'Local Businesses near Kainchi Dham',
    description: 'Path for real Kumaon stays and transport operators to appear on kainchidhambooking.com.',
    lead: 'We are not a scraped directory. Empty maps and invented cafes will not be added. Use the concierge form below.',
  },
};

export const PartnersPage: React.FC<PartnersPageProps> = ({ path, onNavigate }) => {
  const c = copy[path] ?? copy['/partners'];
  return (
    <div className="pt-24 pb-8">
      <SEOHead
        title={c.title}
        description={c.description}
        canonicalUrl={absoluteUrl(path)}
        ogType="website"
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: c.h1, url: path },
        ]}
      />
      <div className="px-4 md:px-8 max-w-3xl mx-auto mb-8">
        <Breadcrumbs
          items={[
            { name: 'Home', url: '/' },
            { name: c.h1, url: path },
          ]}
          onNavigate={onNavigate}
        />
        <h1 className="font-serif text-3xl md:text-4xl font-bold text-forest-900 mb-3">{c.h1}</h1>
        <p className="text-charcoal-700">{c.lead}</p>
      </div>
      <ConciergeContact />
    </div>
  );
};

export const PARTNER_PATHS = Object.keys(copy);
