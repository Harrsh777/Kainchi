import React from 'react';
import { MapPin, Compass, ArrowRight, Sparkles } from 'lucide-react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { SEOInternalLinks } from '../components/SEOInternalLinks';
import { SEOHead } from '../seo/SEOHead';
import { SEO_ROUTES } from '../seo/seoData';
import { generateArticleSchema, generateFAQSchema } from '../seo/schemas';
import { EXPERIENCES_DATA } from '../data/experiences';
import { SITE_IMAGES } from '../data/siteImages';
import type { Experience } from '../types';

interface NearbyDestinationsPageProps {
  onNavigate: (url: string) => void;
  onSelectExperience: (exp: Experience) => void;
}

export const NearbyDestinationsPage: React.FC<NearbyDestinationsPageProps> = ({ onNavigate, onSelectExperience }) => {
  const meta = SEO_ROUTES['/nearby'];

  const articleSchema = generateArticleSchema({
    headline: meta.title,
    description: meta.description,
    url: meta.canonicalUrl,
    datePublished: meta.publishedTime,
    dateModified: meta.modifiedTime,
    authorName: meta.author,
  });

  const faqSchema = meta.faqs ? generateFAQSchema(meta.faqs) : undefined;

  const destinations = [
    {
      name: 'Nainital',
      distance: '18 km (45 mins)',
      description: 'The famed City of Lakes featuring Naini Lake boating, the ancient Naina Devi Temple, and panoramic viewpoints like Snow View and Tiffin Top.',
      image: 'https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?q=80&w=1200&auto=format&fit=crop',
      highlights: ['Naini Lake Boating', 'Naina Devi Shaktipeeth', 'Colonial Mall Road', 'Cable Car Ropeway']
    },
    {
      name: 'Bhimtal',
      distance: '20 km (45 mins)',
      description: 'A tranquil lake town centered around a majestic island aquarium. Quieter than Nainital, ideal for water sports and lakeside dining.',
      image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=1200&auto=format&fit=crop',
      highlights: ['Island Aquarium Cafe', 'Kayaking & Boating', 'Victorian Dam', 'Hydraulic Dam Walk']
    },
    {
      name: 'Golu Devta Temple (Ghorakhal)',
      distance: '11 km (25 mins)',
      description: 'The legendary temple dedicated to the Lord of Justice, filled with thousands of brass bells and written petitions by devotees seeking truth.',
      image: SITE_IMAGES.templeComplex,
      highlights: ['Thousands of Sacred Bells', 'Unique Written Petitions', 'Pine Valley Atmosphere', 'Spiritual Alignment']
    },
    {
      name: 'Mukteshwar',
      distance: '38 km (1.5 hrs)',
      description: 'Perched at 2,286 meters amidst fruit orchards and oak forests, offering spectacular 180° views of the Nanda Devi and Trishul Himalayan ranges.',
      image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop',
      highlights: ['Chauli ki Jali Cliffs', 'Mukteshwar Dham Shiva Temple', 'Apple & Peach Orchards', 'Snow Peak Sunrises']
    }
  ];

  return (
    <div className="pt-24 pb-20 px-4 md:px-8 max-w-7xl mx-auto">
      <SEOHead
        title={meta.title}
        description={meta.description}
        canonicalUrl={meta.canonicalUrl}
        keywords={meta.secondaryKeywords}
        ogType="article"
        breadcrumbs={meta.breadcrumbs}
        schema={faqSchema ? [articleSchema, faqSchema] : articleSchema}
      />

      {/* Breadcrumbs */}
      <Breadcrumbs items={meta.breadcrumbs} onNavigate={onNavigate} />

      {/* Header */}
      <header className="mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-forest-900/10 text-forest-800 text-xs font-semibold uppercase tracking-wider mb-4">
          <Sparkles className="w-3.5 h-3.5 text-gold-600" />
          <span>Regional Kumaon Pilgrimage & Tourism Circuit</span>
        </div>
        <h1 className="text-3xl md:text-5xl font-serif font-bold text-forest-900 leading-tight mb-4">
          Places to Visit Near Kainchi Dham: Lakes, Temples & Himalayan Vistas
        </h1>
        <p className="text-lg text-charcoal-700 max-w-4xl leading-relaxed">
          Complement your spiritual visit to Kainchi Dham by exploring the surrounding natural lakes of Nainital & Bhimtal, 
          the sacred bell shrine of Golu Devta, and the Himalayan heights of Mukteshwar.
        </p>
      </header>

      {/* Destinations Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {destinations.map((dest, idx) => (
          <div
            key={idx}
            className="group bg-white rounded-3xl overflow-hidden border border-forest-900/10 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="relative aspect-[16/10] overflow-hidden bg-forest-950">
                <img
                  src={dest.image}
                  alt={dest.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute top-3 left-3 bg-forest-900/80 backdrop-blur-md text-gold-400 text-[11px] font-bold px-3 py-1 rounded-full border border-gold-500/30 flex items-center gap-1.5">
                  <MapPin className="w-3 h-3 text-emerald-400" />
                  <span>{dest.distance} from Kainchi</span>
                </div>
              </div>

              <div className="p-6 md:p-8">
                <h3 className="text-2xl font-serif font-bold text-forest-900 group-hover:text-gold-700 transition-colors">
                  {dest.name}
                </h3>
                <p className="text-xs text-charcoal-600 mt-2 line-clamp-2 leading-relaxed">
                  {dest.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mt-4">
                  {dest.highlights.map((h, i) => (
                    <span key={i} className="text-[10px] font-medium bg-ivory-100 text-charcoal-700 px-2 py-0.5 rounded">
                      • {h}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="p-6 md:p-8 pt-0 border-t border-forest-900/5 mt-4 flex items-center justify-between">
              <span className="text-xs text-emerald-800 font-semibold">Accessible via Chauffeur Tour</span>
              <button
                onClick={() => onNavigate('/taxi')}
                className="px-4 py-2 rounded-xl bg-forest-900 hover:bg-gold-500 text-gold-400 hover:text-forest-950 font-bold text-xs transition-all flex items-center gap-1.5"
              >
                <span>Book Day Cab</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* FAQs */}
      <section className="mb-14 bg-white p-8 rounded-3xl border border-forest-900/10 shadow-sm">
        <h2 className="text-2xl font-serif font-bold text-forest-900 mb-6">Nearby Travel & Circuit FAQs</h2>
        <div className="space-y-4">
          {meta.faqs?.map((faq, idx) => (
            <div key={idx} className="p-4 rounded-xl bg-ivory-100 border border-forest-900/5">
              <h3 className="font-semibold text-forest-900 text-base mb-1">{faq.question}</h3>
              <p className="text-sm text-charcoal-700">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Internal Links */}
      {meta.relatedRoutes && (
        <SEOInternalLinks
          title="Related Kainchi Dham Itineraries & Transit Guides"
          links={meta.relatedRoutes}
          onNavigate={onNavigate}
        />
      )}
    </div>
  );
};
