import React from 'react';
import {
  Sun,
  CloudRain,
  Snowflake,
  Wind,
  Calendar,
  CheckCircle2,
  Clock,
  Info,
  ArrowRight
} from 'lucide-react';
import { SEOHead } from '../seo/SEOHead';
import { SEO_ROUTES } from '../seo/seoData';
import { generateArticleSchema, generateFAQSchema, generateBreadcrumbSchema } from '../seo/schemas';

interface WeatherGuidePageProps {
  onNavigate: (url: string) => void;
  onOpenPlanner: () => void;
}

const WEATHER_FAQS = [
  {
    question: 'What is the best month to visit Kainchi Dham for good weather?',
    answer: 'The most pleasant weather occurs in Spring (March to May) with temperatures between 15°C to 28°C and in Autumn (October to November) with crisp blue skies, crystal-clear Himalayan views, and cool mountain breezes.'
  },
  {
    question: 'How cold does Kainchi Dham get in winter?',
    answer: 'During peak winter (December to February), daytime temperatures range from 10°C to 16°C, while nighttime and early morning 7:00 AM Aarti temperatures can drop to 2°C to 6°C. Heavy woolens, thermals, and jackets are essential.'
  },
  {
    question: 'Is it safe to travel to Kainchi Dham during the monsoon (July–August)?',
    answer: 'The valley turns lush green during monsoon, but heavy rains can cause occasional landslides or traffic delays along the Kathgodam–Bhowali ghat road. Always check local weather forecasts and hire experienced mountain chauffeurs.'
  }
];

export const WeatherGuidePage: React.FC<WeatherGuidePageProps> = ({ onNavigate }) => {
  const meta = SEO_ROUTES['/kainchi-dham-weather'];

  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Weather & Best Time', url: '/kainchi-dham-weather' }
  ];

  const articleSchema = generateArticleSchema({
    headline: 'Kainchi Dham Weather Guide 2026: Month-by-Month Temperature, Seasons & Packing Tips',
    description: 'Detailed seasonal weather guide for Kainchi Dham: Summer, Monsoon, Autumn, and Winter temperatures, crowd levels, and packing advice.',
    url: 'https://kainchidhambooking.com/kainchi-dham-weather',
    datePublished: '2024-03-01',
    dateModified: '2026-10-01',
    authorName: 'Kumaon Regional Travel Desk'
  });

  const faqSchema = generateFAQSchema(WEATHER_FAQS);
  const breadcrumbSchema = generateBreadcrumbSchema(breadcrumbs);

  return (
    <>
      <SEOHead
        title={meta?.title || 'Kainchi Dham Weather 2026: Month-by-Month Temperature & Best Time'}
        description={meta?.description || 'Complete Kainchi Dham weather guide: monthly temperature averages, summer vs winter climate, monsoon road advisory, and clothing tips.'}
        canonicalUrl="https://kainchidhambooking.com/kainchi-dham-weather"
        keywords={meta?.secondaryKeywords || ['Kainchi Dham weather', 'Kainchi Dham temperature', 'best time to visit Kainchi Dham', 'Kainchi Dham climate']}
        ogType="article"
        breadcrumbs={breadcrumbs}
        schema={[articleSchema, faqSchema, breadcrumbSchema]}
      />

      <article className="min-h-screen bg-ivory-100 text-charcoal-900 pb-24">
        {/* Header */}
        <header className="bg-forest-950 text-white pt-32 pb-16 relative overflow-hidden">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <nav aria-label="Breadcrumb" className="mb-6">
              <ol className="flex items-center gap-2 text-xs text-ivory-300">
                <li><button onClick={() => onNavigate('/')} className="hover:text-gold-300 transition-colors">Home</button></li>
                <li>/</li>
                <li className="text-gold-300 font-semibold" aria-current="page">Weather Guide</li>
              </ol>
            </nav>

            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-400/20 text-gold-300 border border-gold-400/30 text-xs font-bold uppercase tracking-widest mb-3">
              <Sun className="w-3.5 h-3.5" />
              <span>Climate & Season Advisory</span>
            </span>

            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-light text-white tracking-tight mb-4">
              Kainchi Dham Weather & Climate 2026
            </h1>

            <p className="text-sm sm:text-lg text-ivory-200 max-w-3xl leading-relaxed font-light mb-4">
              Monthly temperature breakdown, seasonal crowd patterns, monsoon road advisories, and essential packing tips for your pilgrimage.
            </p>

            <div className="flex flex-wrap items-center gap-4 text-xs text-ivory-300 pt-3 border-t border-white/10">
              <span>Elevation: <strong>1,400 m (4,600 ft)</strong></span>
              <span>•</span>
              <span>Summer: <strong>15°C to 28°C</strong></span>
              <span>•</span>
              <span>Winter: <strong>2°C to 16°C</strong></span>
            </div>
          </div>
        </header>

        {/* Independence Disclaimer */}
        <section className="bg-amber-50 border-b border-amber-200 py-3.5 px-4">
          <div className="max-w-5xl mx-auto flex items-start gap-3 text-xs sm:text-sm text-amber-900 leading-relaxed">
            <Info className="w-5 h-5 text-amber-700 flex-shrink-0 mt-0.5" />
            <div>
              <strong>TRAVEL WEATHER INTELLIGENCE:</strong> KainchiDhamBooking.com provides seasonal regional climate data to help devotees pack appropriately for morning/evening aarti and mountain road transit.
            </div>
          </div>
        </section>

        {/* Content Container */}
        <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 space-y-12">
          
          {/* 4 Season Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Spring & Summer */}
            <div className="p-6 rounded-3xl bg-white border border-ivory-300 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2 text-amber-600 font-bold text-xs uppercase tracking-wider">
                    <Sun className="w-4 h-4 text-amber-500" />
                    <span>March to June (Summer Peak)</span>
                  </div>
                  <span className="text-xs font-bold text-charcoal-900 bg-amber-50 px-2.5 py-1 rounded-full border border-amber-200">
                    15°C – 28°C
                  </span>
                </div>
                <h3 className="font-serif text-xl font-medium text-charcoal-900 mb-2">Pleasant Days & Annual Bhandara</h3>
                <p className="text-xs text-charcoal-600 leading-relaxed font-light mb-3">
                  Warm sun, blooming pine hills, and ideal weather for families. Peak crowd arrives around June 15 for the annual Pratishtha Divas Bhandara.
                </p>
                <div className="text-xs text-charcoal-700 bg-ivory-100 p-3 rounded-2xl border border-ivory-200 space-y-1">
                  <p><strong>What to wear:</strong> Light cottons, sun protection, light shawl for 7 AM aarti.</p>
                  <p><strong>Crowd level:</strong> High to very high on weekends.</p>
                </div>
              </div>
            </div>

            {/* Autumn */}
            <div className="p-6 rounded-3xl bg-white border border-ivory-300 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2 text-forest-700 font-bold text-xs uppercase tracking-wider">
                    <Wind className="w-4 h-4 text-forest-600" />
                    <span>September to November (Golden Autumn)</span>
                  </div>
                  <span className="text-xs font-bold text-charcoal-900 bg-forest-50 px-2.5 py-1 rounded-full border border-forest-200">
                    10°C – 22°C
                  </span>
                </div>
                <h3 className="font-serif text-xl font-medium text-charcoal-900 mb-2">Crystal Skies & Serene Meditation</h3>
                <p className="text-xs text-charcoal-600 leading-relaxed font-light mb-3">
                  Widely regarded as the best season for spiritual contemplation. Clean post-monsoon mountain air, crisp morning light, and unobstructed Himalayan views.
                </p>
                <div className="text-xs text-charcoal-700 bg-ivory-100 p-3 rounded-2xl border border-ivory-200 space-y-1">
                  <p><strong>What to wear:</strong> Medium layers, light jackets, sweaters for evening.</p>
                  <p><strong>Crowd level:</strong> Moderate and peaceful.</p>
                </div>
              </div>
            </div>

            {/* Winter */}
            <div className="p-6 rounded-3xl bg-white border border-ivory-300 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2 text-sky-700 font-bold text-xs uppercase tracking-wider">
                    <Snowflake className="w-4 h-4 text-sky-600" />
                    <span>December to February (Crisp Winter)</span>
                  </div>
                  <span className="text-xs font-bold text-charcoal-900 bg-sky-50 px-2.5 py-1 rounded-full border border-sky-200">
                    2°C – 16°C
                  </span>
                </div>
                <h3 className="font-serif text-xl font-medium text-charcoal-900 mb-2">Quiet Devotion & Cold Dawns</h3>
                <p className="text-xs text-charcoal-600 leading-relaxed font-light mb-3">
                  Crisp cold mornings and sunny afternoons. Very few tourists, allowing for deep quiet meditation in the sanctum without queues.
                </p>
                <div className="text-xs text-charcoal-700 bg-ivory-100 p-3 rounded-2xl border border-ivory-200 space-y-1">
                  <p><strong>What to wear:</strong> Heavy thermals, woolen caps, warm jackets for Aarti.</p>
                  <p><strong>Crowd level:</strong> Low (unhurried darshan).</p>
                </div>
              </div>
            </div>

            {/* Monsoon */}
            <div className="p-6 rounded-3xl bg-white border border-ivory-300 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2 text-teal-700 font-bold text-xs uppercase tracking-wider">
                    <CloudRain className="w-4 h-4 text-teal-600" />
                    <span>July to August (Monsoon Mist)</span>
                  </div>
                  <span className="text-xs font-bold text-charcoal-900 bg-teal-50 px-2.5 py-1 rounded-full border border-teal-200">
                    16°C – 24°C
                  </span>
                </div>
                <h3 className="font-serif text-xl font-medium text-charcoal-900 mb-2">Lush Green Valley & Mist</h3>
                <p className="text-xs text-charcoal-600 leading-relaxed font-light mb-3">
                  The Kshipra river flows full and the entire valley turns emerald green. Hill clouds float through temple courtyards.
                </p>
                <div className="text-xs text-charcoal-700 bg-ivory-100 p-3 rounded-2xl border border-ivory-200 space-y-1">
                  <p><strong>What to wear:</strong> Rainproof jackets, waterproof footwear with strong grip.</p>
                  <p><strong>Travel tip:</strong> Avoid night driving on ghat roads.</p>
                </div>
              </div>
            </div>

          </div>

          {/* FAQs */}
          <section>
            <h2 className="font-serif text-2xl sm:text-3xl font-normal text-charcoal-900 mb-6">
              Weather & Travel Season FAQs
            </h2>
            <div className="space-y-3">
              {WEATHER_FAQS.map((faq, idx) => (
                <div key={idx} className="p-5 rounded-2xl bg-white border border-ivory-300">
                  <h3 className="font-serif text-base font-medium text-charcoal-900 mb-2">{faq.question}</h3>
                  <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed font-light">{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="bg-forest-800 text-white p-8 rounded-3xl border border-forest-700 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="font-serif text-2xl font-normal text-white mb-1">Check Live Updates for Your Travel Dates</h3>
              <p className="text-xs text-ivory-200 font-light">View daily road conditions and weather advisories on our Today dashboard.</p>
            </div>
            <button
              onClick={() => onNavigate('/today')}
              className="px-6 py-3 rounded-full bg-gold-400 text-forest-950 font-bold text-xs uppercase tracking-wider hover:bg-gold-300 transition-all flex-shrink-0"
            >
              Kainchi Today Live
            </button>
          </section>

        </main>
      </article>
    </>
  );
};
