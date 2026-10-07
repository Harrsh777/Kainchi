import React from 'react';
import {
  Compass,
  Clock,
  CheckCircle2,
  Calendar,
  Sparkles,
  MapPin,
  ArrowRight,
  Info,
  Car,
  Hotel
} from 'lucide-react';
import { SEOHead } from '../seo/SEOHead';
import { SEO_ROUTES } from '../seo/seoData';
import { PACKAGES_DATA } from '../data/packages';
import type { TravelPackage } from '../types';
import { generateArticleSchema, generateFAQSchema, generateBreadcrumbSchema } from '../seo/schemas';

interface TourPackagesPageProps {
  onNavigate: (url: string) => void;
  onSelectPackage: (pkg: TravelPackage) => void;
  onOpenPlanner: () => void;
}

const PACKAGE_FAQS = [
  {
    question: 'What is included in a Kainchi Dham tour package?',
    answer: 'Our independent packages include: 1) Dedicated private AC taxi transfers from Kathgodam Railway Station or Delhi NCR, 2) Verified boutique hotel or resort accommodations with satvik breakfast, 3) Guided darshan visit timings coordination, and 4) Sightseeing excursions across Nainital, Bhimtal, Golu Devta Temple, and Mukteshwar.'
  },
  {
    question: 'Can tour packages be customized for senior citizens and families?',
    answer: 'Yes! All itineraries are fully customizable. We specialize in slow-paced, elder-friendly pilgrimages with comfortable ground-floor rooms near the temple gate and dedicated hill chauffeurs who accommodate flexible rest stops.'
  },
  {
    question: 'How many days are ideal for a Kainchi Dham pilgrimage trip?',
    answer: 'A 2-Day / 1-Night trip is ideal for dedicated temple darshan (attending both morning and evening Aarti). A 3-Day / 2-Night package is best if you wish to combine Kainchi Dham with Nainital Lake and Golu Devta Temple at Ghorakhal.'
  }
];

export const TourPackagesPage: React.FC<TourPackagesPageProps> = ({
  onNavigate,
  onSelectPackage,
  onOpenPlanner,
}) => {
  const meta = SEO_ROUTES['/kainchi-dham-tour-packages'];

  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Tour Packages 2026', url: '/kainchi-dham-tour-packages' }
  ];

  const articleSchema = generateArticleSchema({
    headline: 'Kainchi Dham Tour Packages 2026: 1-Day, 2-Day & 3-Day Pilgrimage Itineraries',
    description: 'Explore curated Kainchi Dham pilgrimage packages with Kathgodam station taxi transfers, verified boutique hotel stays, and Nainital-Mukteshwar circuits.',
    url: 'https://kainchidhambooking.com/kainchi-dham-tour-packages',
    datePublished: '2024-03-01',
    dateModified: '2026-10-01',
    authorName: 'Itinerary Planning Specialist'
  });

  const faqSchema = generateFAQSchema(PACKAGE_FAQS);
  const breadcrumbSchema = generateBreadcrumbSchema(breadcrumbs);

  return (
    <>
      <SEOHead
        title={meta?.title || 'Kainchi Dham Tour Packages 2026: 1-Day, 2-Day & 3-Day Itineraries'}
        description={meta?.description || 'Curated Kainchi Dham tour packages with verified hotel stays, Kathgodam station cab pickups, and scenic Nainital-Bhimtal-Mukteshwar circuits.'}
        canonicalUrl="https://kainchidhambooking.com/kainchi-dham-tour-packages"
        keywords={meta?.secondaryKeywords || ['Kainchi Dham tour package', 'Kainchi Dham 2 day itinerary', 'Kainchi Dham tour from Delhi', 'Kainchi Dham packages']}
        ogType="article"
        breadcrumbs={breadcrumbs}
        schema={[articleSchema, faqSchema, breadcrumbSchema]}
      />

      <article className="min-h-screen bg-ivory-100 text-charcoal-900 pb-24">
        {/* Header */}
        <header className="bg-forest-950 text-white pt-32 pb-16 relative overflow-hidden">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <nav aria-label="Breadcrumb" className="mb-6">
              <ol className="flex items-center gap-2 text-xs text-ivory-300">
                <li><button onClick={() => onNavigate('/')} className="hover:text-gold-300 transition-colors">Home</button></li>
                <li>/</li>
                <li className="text-gold-300 font-semibold" aria-current="page">Tour Packages 2026</li>
              </ol>
            </nav>

            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-400/20 text-gold-300 border border-gold-400/30 text-xs font-bold uppercase tracking-widest mb-3">
              <Compass className="w-3.5 h-3.5" />
              <span>Curated Pilgrimage & Travel Circuits</span>
            </span>

            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-light text-white tracking-tight mb-4">
              Kainchi Dham Tour Packages 2026
            </h1>

            <p className="text-sm sm:text-lg text-ivory-200 max-w-3xl leading-relaxed font-light mb-4">
              Carefully designed 1, 2, and 3-day pilgrimage packages combining Kainchi Dham darshan with scenic Kumaon lake retreats, hill chauffeurs, and verified stays.
            </p>

            <div className="flex flex-wrap items-center gap-4 text-xs text-ivory-300 pt-3 border-t border-white/10">
              <span>Private Hill Chauffeurs</span>
              <span>•</span>
              <span>Pure Satvik Dining</span>
              <span>•</span>
              <span>Station Meet & Greet</span>
            </div>
          </div>
        </header>

        {/* Independence Disclaimer */}
        <section className="bg-amber-50 border-b border-amber-200 py-3.5 px-4">
          <div className="max-w-6xl mx-auto flex items-start gap-3 text-xs sm:text-sm text-amber-900 leading-relaxed">
            <Info className="w-5 h-5 text-amber-700 flex-shrink-0 mt-0.5" />
            <div>
              <strong>INDEPENDENT TOUR CONCIERGE:</strong> KainchiDhamBooking.com is an independent travel platform. Temple Darshan is 100% FREE. Package prices cover hotel lodging, private licensed transport, and regional sightseeing coordination.
            </div>
          </div>
        </section>

        {/* Packages Grid */}
        <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 space-y-12">
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PACKAGES_DATA.map((pkg) => (
              <div
                key={pkg.id}
                className="bg-white rounded-3xl overflow-hidden border border-ivory-300 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="relative h-52 overflow-hidden bg-forest-950">
                    <img
                      src={pkg.image}
                      alt={pkg.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="px-3 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase bg-forest-900/90 text-gold-300 backdrop-blur-md">
                        {pkg.duration}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="text-xs font-semibold text-forest-800 mb-1">{pkg.badge}</div>
                    <h2 className="font-serif text-xl font-medium text-charcoal-900 mb-2">
                      {pkg.title}
                    </h2>
                    <p className="text-xs text-charcoal-600 leading-relaxed font-light mb-4">
                      {pkg.tagline}
                    </p>

                    <div className="space-y-2 border-t border-ivory-200 pt-3">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-charcoal-500 block mb-1">
                        Package Inclusions:
                      </span>
                      {pkg.inclusions.map((item: string, i: number) => (
                        <div key={i} className="flex items-center gap-2 text-xs text-charcoal-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-forest-700 flex-shrink-0" />
                          <span className="truncate">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <div className="flex items-baseline justify-between mb-4 pt-3 border-t border-ivory-200">
                    <div>
                      <span className="text-[10px] text-charcoal-500 uppercase block">Starting from</span>
                      <strong className="text-xl font-bold text-forest-900">₹{pkg.pricePerPerson.toLocaleString('en-IN')}</strong>
                      <span className="text-[10px] text-charcoal-500"> / person</span>
                    </div>
                  </div>

                  <button
                    onClick={() => onSelectPackage(pkg)}
                    className="w-full py-3 rounded-xl bg-forest-800 hover:bg-forest-700 text-ivory-100 text-xs font-semibold uppercase tracking-wider transition-colors flex items-center justify-center gap-1.5"
                  >
                    <span>Request Custom Quote</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Custom Package Generator Banner */}
          <section className="bg-forest-800 text-white p-8 sm:p-10 rounded-3xl border border-forest-700 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="max-w-2xl">
              <span className="text-gold-300 text-xs font-bold uppercase tracking-wider block mb-1">
                TAILORED FAMILY ITINERARIES
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-normal text-white mb-2">
                Have specific dates or travel requirements?
              </h3>
              <p className="text-xs sm:text-sm text-ivory-200 leading-relaxed font-light">
                Use our 4-Step Trip Planner to customize pickup cities, room configurations, and sightseeing add-ons. Receive an instant WhatsApp quotation.
              </p>
            </div>

            <button
              onClick={onOpenPlanner}
              className="px-8 py-4 rounded-full bg-gold-400 hover:bg-gold-300 text-forest-950 font-bold text-xs uppercase tracking-wider transition-all shadow-md flex-shrink-0"
            >
              Open Trip Planner
            </button>
          </section>

          {/* FAQs */}
          <section className="pt-6">
            <h2 className="font-serif text-2xl sm:text-3xl font-normal text-charcoal-900 mb-6">
              Tour Packages & Itinerary FAQs
            </h2>
            <div className="space-y-3">
              {PACKAGE_FAQS.map((faq, idx) => (
                <div key={idx} className="p-5 rounded-2xl bg-white border border-ivory-300">
                  <h3 className="font-serif text-base font-medium text-charcoal-900 mb-2">{faq.question}</h3>
                  <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed font-light">{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>

        </main>
      </article>
    </>
  );
};
