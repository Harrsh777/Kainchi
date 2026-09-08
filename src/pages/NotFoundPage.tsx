import React from 'react';
import { SEOHead } from '../seo/SEOHead';

interface NotFoundPageProps {
  onNavigate: (url: string) => void;
}

export const NotFoundPage: React.FC<NotFoundPageProps> = ({ onNavigate }) => (
  <div className="pt-32 pb-24 px-4 max-w-xl mx-auto text-center">
    <SEOHead
      title="Page not found | Kainchi Dham Booking"
      description="This URL is not a published guide. Return to the Kainchi Dham hub or trip planner."
      canonicalUrl="https://kainchidhambooking.com/404"
      noindex
      ogType="website"
    />
    <p className="text-xs uppercase tracking-widest text-gold-700 font-bold mb-2">404</p>
    <h1 className="font-serif text-4xl text-forest-900 mb-4">This page is not in our guides</h1>
    <p className="text-charcoal-700 mb-8">
      We do not auto-generate thin city or hotel URLs. Try the hub, hotels, or a route we actually documented.
    </p>
    <div className="flex flex-wrap justify-center gap-3">
      <button type="button" onClick={() => onNavigate('/kainchi-dham')} className="px-5 py-3 rounded-full bg-forest-900 text-white text-xs font-bold uppercase">
        Kainchi Dham hub
      </button>
      <button type="button" onClick={() => onNavigate('/')} className="px-5 py-3 rounded-full border border-forest-900/20 text-xs font-bold uppercase">
        Home
      </button>
    </div>
  </div>
);
