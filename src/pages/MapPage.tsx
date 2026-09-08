import React from 'react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { SEOInternalLinks } from '../components/SEOInternalLinks';
import { SEOHead } from '../seo/SEOHead';
import { StickyPlanButton } from '../components/StickyPlanButton';
import { KainchiMap } from '../components/KainchiMap';
import type { Stay } from '../types';

interface MapPageProps {
  onNavigate: (url: string) => void;
  onSelectStay: (stay: Stay) => void;
}

export const MapPage: React.FC<MapPageProps> = ({ onNavigate, onSelectStay }) => (
  <div className="pt-24 pb-24 px-4 md:px-8 max-w-7xl mx-auto">
    <SEOHead
      title="Kainchi Dham Travel Map: Hotels, Taxi Points, Kathgodam & Lakes"
      description="Interactive Kainchi Dham map with the ashram, hotels, homestays, taxi points, restaurants, Kathgodam station, Pantnagar airport, Nainital, Bhimtal and Mukteshwar."
      canonicalUrl="https://kainchidhambooking.com/map"
      keywords={['Kainchi Dham map', 'hotels near Kainchi Dham map', 'Kathgodam to Kainchi Dham']}
      ogType="place"
      breadcrumbs={[
        { name: 'Home', url: '/' },
        { name: 'Travel Map', url: '/map' },
      ]}
    />
    <Breadcrumbs items={[{ name: 'Home', url: '/' }, { name: 'Travel Map', url: '/map' }]} onNavigate={onNavigate} />
    <header className="mb-8">
      <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold-700 mb-2">Kainchi Dham Travel Map</p>
      <h1 className="text-3xl md:text-5xl font-serif font-bold text-forest-900 mb-3">Hotels, taxis, food and hill stations on one map</h1>
      <p className="text-charcoal-700 max-w-3xl">
        Click a hotel pin for distance from the ashram and starting tariff. Use taxi pins for Kathgodam and Bhowali pickups.
      </p>
    </header>
    <KainchiMap onSelectStay={onSelectStay} onBookTaxi={() => onNavigate('/taxi')} heightClass="h-[560px]" />
    <div className="mt-12">
      <SEOInternalLinks
        title="Use this map with"
        onNavigate={onNavigate}
        links={[
          { label: 'Trip Planner', url: '/trip-planner', description: 'Turn pins into a day-by-day plan' },
          { label: 'Hotels', url: '/hotels', description: 'Full stay list with rooms' },
          { label: 'Kainchi Dham Today', url: '/today', description: 'Live weather before you drive' },
        ]}
      />
    </div>
    <StickyPlanButton onClick={() => onNavigate('/trip-planner')} />
  </div>
);
