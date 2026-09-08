import React from 'react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { SEOInternalLinks } from '../components/SEOInternalLinks';
import { SEOHead } from '../seo/SEOHead';
import { generateArticleSchema, generateFAQSchema } from '../seo/schemas';
import { StickyPlanButton } from '../components/StickyPlanButton';
import { absoluteUrl } from '../seo/site';
import type { DestinationGuide } from '../data/destinations';

interface DestinationPageProps {
  destination: DestinationGuide;
  onNavigate: (url: string) => void;
}

export const DestinationPage: React.FC<DestinationPageProps> = ({ destination, onNavigate }) => {
  const canonical = absoluteUrl(destination.path);
  return (
    <div className="pt-24 pb-24 px-4 md:px-8 max-w-3xl mx-auto">
      <SEOHead
        title={destination.title}
        description={destination.description}
        canonicalUrl={canonical}
        keywords={[`${destination.name} Kainchi Dham`, `${destination.name} distance`]}
        ogType="article"
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Nearby', url: '/nearby' },
          { name: destination.name, url: destination.path },
        ]}
        schema={[
          generateArticleSchema({
            headline: destination.title,
            description: destination.description,
            url: canonical,
            datePublished: '2024-03-20',
            dateModified: '2026-09-08',
            authorName: 'Kumaon Regional Travel Desk',
          }),
          generateFAQSchema(destination.faqs),
        ]}
      />
      <Breadcrumbs
        items={[
          { name: 'Home', url: '/' },
          { name: 'Nearby', url: '/nearby' },
          { name: destination.name, url: destination.path },
        ]}
        onNavigate={onNavigate}
      />
      <h1 className="font-serif text-3xl md:text-4xl font-bold text-forest-900 mb-4">
        {destination.name} and Kainchi Dham
      </h1>
      <p className="text-charcoal-700 mb-6">{destination.description}</p>
      <table className="w-full text-sm mb-8 bg-white rounded-2xl overflow-hidden border border-forest-900/10">
        <tbody>
          <tr className="border-b border-forest-900/10">
            <td className="p-3 font-semibold">Distance from Kainchi Dham</td>
            <td className="p-3">{destination.distanceFromKainchi}</td>
          </tr>
          <tr className="border-b border-forest-900/10">
            <td className="p-3 font-semibold">Drive time</td>
            <td className="p-3">{destination.driveTime}</td>
          </tr>
          <tr>
            <td className="p-3 font-semibold">Why people add it</td>
            <td className="p-3">{destination.why}</td>
          </tr>
        </tbody>
      </table>
      <h2 className="font-serif text-2xl text-forest-900 mb-2">With a Kainchi itinerary</h2>
      <p className="text-sm text-charcoal-700 mb-6">{destination.withKainchi}</p>
      <h2 className="font-serif text-2xl text-forest-900 mb-3">FAQ</h2>
      {destination.faqs.map((f) => (
        <div key={f.question} className="p-4 rounded-xl bg-white border border-forest-900/10 mb-2">
          <h3 className="font-semibold">{f.question}</h3>
          <p className="text-sm text-charcoal-700 mt-1">{f.answer}</p>
        </div>
      ))}
      <div className="mt-10">
        <SEOInternalLinks
          title="Plan the rest"
          onNavigate={onNavigate}
          links={[
            { label: 'Kainchi Dham itinerary', url: '/kainchi-dham-itinerary', description: '1–3 day templates' },
            { label: 'Get a taxi quote', url: '/kainchi-dham-taxi', description: 'Hill chauffeur for lake days' },
            { label: 'Hotels near Kainchi Dham', url: '/kainchi-dham-hotels', description: 'Sleep in the valley' },
            { label: 'Travel map', url: '/map', description: 'Pins for lakes and the ashram' },
          ]}
        />
      </div>
      <StickyPlanButton onClick={() => onNavigate('/trip-planner')} />
    </div>
  );
};
