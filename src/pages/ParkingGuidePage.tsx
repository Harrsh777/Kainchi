import React from 'react';
import {
  Car,
  AlertTriangle,
  MapPin,
  Clock,
  ShieldCheck,
  CheckCircle2,
  Info,
  ArrowRight,
  Bus
} from 'lucide-react';
import { SEOHead } from '../seo/SEOHead';
import { SEO_ROUTES } from '../seo/seoData';
import { generateArticleSchema, generateFAQSchema, generateBreadcrumbSchema } from '../seo/schemas';

interface ParkingGuidePageProps {
  onNavigate: (url: string) => void;
  onOpenPlanner: () => void;
}

const PARKING_FAQS = [
  {
    question: 'Is car parking available at Kainchi Dham Temple gate?',
    answer: 'There is a designated roadside parking area and municipal parking lot located near the temple bridge in Kainchi Valley with capacity for approximately 100–150 vehicles. However, on weekends, holidays, and festival periods, this lot fills up before 7:30 AM.'
  },
  {
    question: 'Where do visitors park if the valley parking is full?',
    answer: 'When valley parking reaches capacity, traffic police direct private vehicles to designated satellite parking zones in Bhowali (8 km away) or Niglat. Frequent shuttle taxis and local jeeps (fare approx. ₹30–₹50 per seat) transport devotees directly between Bhowali parking and the temple gate.'
  },
  {
    question: 'Is roadside parking allowed along NH-109 near the temple?',
    answer: 'No. Strictly avoid unauthorized parking on the narrow shoulders of NH-109. Uttarakhand Traffic Police actively tow vehicles and levy fines to prevent severe bottlenecks in the scissors bend corridor.'
  },
  {
    question: 'What is the parking plan during the June 15 Bhandara?',
    answer: 'During the June 15 Pratishtha Diwas, private non-local vehicles are restricted from entering the Kainchi Valley. Large mandatory parking grounds operate at Haldwani International Stadium and Bhowali with continuous Uttarakhand Roadways shuttle bus fleets.'
  }
];

export const ParkingGuidePage: React.FC<ParkingGuidePageProps> = ({ onNavigate }) => {
  const meta = SEO_ROUTES['/kainchi-dham-parking'];

  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Parking & Traffic Guide', url: '/kainchi-dham-parking' }
  ];

  const articleSchema = generateArticleSchema({
    headline: 'Kainchi Dham Parking Guide 2026: Valley Lots, Bhowali Shuttles & Traffic Advisory',
    description: 'Complete guide to vehicle parking at Kainchi Dham: designated lots, weekend traffic rules, Bhowali satellite parking, and shuttle cabs.',
    url: 'https://kainchidhambooking.com/kainchi-dham-parking',
    datePublished: '2024-03-01',
    dateModified: '2026-10-01',
    authorName: 'Transit Operations Desk'
  });

  const faqSchema = generateFAQSchema(PARKING_FAQS);
  const breadcrumbSchema = generateBreadcrumbSchema(breadcrumbs);

  return (
    <>
      <SEOHead
        title={meta?.title || 'Kainchi Dham Parking Guide 2026: Valley Lots, Shuttles & Traffic Rules'}
        description={meta?.description || 'Learn where to park at Kainchi Dham: Valley municipal parking, Bhowali satellite overflow lots, shuttle taxis, and traffic police rules on NH-109.'}
        canonicalUrl="https://kainchidhambooking.com/kainchi-dham-parking"
        keywords={meta?.secondaryKeywords || ['Kainchi Dham parking', 'Kainchi Dham car parking', 'Kainchi Dham traffic update', 'Bhowali parking']}
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
                <li className="text-gold-300 font-semibold" aria-current="page">Parking Guide</li>
              </ol>
            </nav>

            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-400/20 text-gold-300 border border-gold-400/30 text-xs font-bold uppercase tracking-widest mb-3">
              <Car className="w-3.5 h-3.5" />
              <span>Vehicle Logistics & Traffic Advisory</span>
            </span>

            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-light text-white tracking-tight mb-4">
              Kainchi Dham Parking Guide 2026
            </h1>

            <p className="text-sm sm:text-lg text-ivory-200 max-w-3xl leading-relaxed font-light mb-4">
              Everything you need to know about vehicle parking near the ashram, weekend overflow lots at Bhowali, shuttle jeeps, and police traffic guidelines.
            </p>

            <div className="flex flex-wrap items-center gap-4 text-xs text-ivory-300 pt-3 border-t border-white/10">
              <span>Valley Parking: <strong>~150 slots</strong></span>
              <span>•</span>
              <span>Satellite Overflow: <strong>Bhowali (8 km)</strong></span>
              <span>•</span>
              <span>Shuttle Fare: <strong>₹30–₹50 / seat</strong></span>
            </div>
          </div>
        </header>

        {/* Independence Disclaimer */}
        <section className="bg-amber-50 border-b border-amber-200 py-3.5 px-4">
          <div className="max-w-5xl mx-auto flex items-start gap-3 text-xs sm:text-sm text-amber-900 leading-relaxed">
            <Info className="w-5 h-5 text-amber-700 flex-shrink-0 mt-0.5" />
            <div>
              <strong>INDEPENDENT TRAVEL ADVISORY:</strong> KainchiDhamBooking.com is an independent travel resource. Traffic regulations and parking lots are managed by the Nainital District Police and Municipal Authorities.
            </div>
          </div>
        </section>

        {/* Content Container */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 space-y-12">
          
          {/* Pro-Tips 3 Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-3xl bg-white border border-ivory-300 shadow-xs">
              <div className="w-10 h-10 rounded-2xl bg-forest-800/10 text-forest-800 flex items-center justify-center mb-3">
                <Clock className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg font-medium text-charcoal-900 mb-1">Arrive Before 7:30 AM</h3>
              <p className="text-xs text-charcoal-600 leading-relaxed font-light">
                To secure a parking spot in the primary valley lot near the gate, reach early for the 7:00 AM morning Aarti.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-ivory-300 shadow-xs">
              <div className="w-10 h-10 rounded-2xl bg-amber-100 text-amber-800 flex items-center justify-center mb-3">
                <Bus className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg font-medium text-charcoal-900 mb-1">Use Bhowali Shuttles</h3>
              <p className="text-xs text-charcoal-600 leading-relaxed font-light">
                On busy weekends, park at Bhowali market lots and take a 12-minute shared taxi directly to the bridge.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-ivory-300 shadow-xs">
              <div className="w-10 h-10 rounded-2xl bg-rose-100 text-rose-800 flex items-center justify-center mb-3">
                <AlertTriangle className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg font-medium text-charcoal-900 mb-1">No Shoulder Parking</h3>
              <p className="text-xs text-charcoal-600 leading-relaxed font-light">
                Police strictly prohibit parking on road shoulders along NH 109. Towed vehicles incur steep challans.
              </p>
            </div>
          </div>

          {/* Section: Parking Grounds Breakdown */}
          <section className="bg-white rounded-3xl p-6 sm:p-8 border border-ivory-300 shadow-sm">
            <h2 className="font-serif text-2xl sm:text-3xl font-normal text-charcoal-900 mb-4">
              Designated Parking Grounds Overview
            </h2>

            <div className="space-y-4 text-xs sm:text-sm text-charcoal-700 leading-relaxed font-light">
              <div className="p-4 rounded-2xl bg-ivory-100 border border-ivory-200">
                <div className="flex justify-between items-center mb-1">
                  <h4 className="font-semibold text-charcoal-900">1. Kainchi Valley Main Municipal Ground</h4>
                  <span className="text-xs text-forest-800 font-bold">200m from Bridge</span>
                </div>
                <p className="text-xs text-charcoal-600">Capacity: ~120 cars. Best for early morning arrivals. Nominal municipal parking fee applies (approx. ₹50–₹100).</p>
              </div>

              <div className="p-4 rounded-2xl bg-ivory-100 border border-ivory-200">
                <div className="flex justify-between items-center mb-1">
                  <h4 className="font-semibold text-charcoal-900">2. Niglat Village Designated Parking</h4>
                  <span className="text-xs text-forest-800 font-bold">1.2 km from Temple</span>
                </div>
                <p className="text-xs text-charcoal-600">Capacity: ~80 cars. A pleasant 15-minute downhill walk along the scenic river path to the main gate.</p>
              </div>

              <div className="p-4 rounded-2xl bg-ivory-100 border border-ivory-200">
                <div className="flex justify-between items-center mb-1">
                  <h4 className="font-semibold text-charcoal-900">3. Bhowali Bypass Satellite Parking</h4>
                  <span className="text-xs text-forest-800 font-bold">8 km (Shuttle Available)</span>
                </div>
                <p className="text-xs text-charcoal-600">Capacity: 500+ cars. Primary overflow hub during festivals and summer weekends. Frequent shared jeeps connect to temple.</p>
              </div>
            </div>
          </section>

          {/* Parking FAQs */}
          <section>
            <h2 className="font-serif text-2xl sm:text-3xl font-normal text-charcoal-900 mb-6">
              Parking & Transit FAQs
            </h2>
            <div className="space-y-3">
              {PARKING_FAQS.map((faq, idx) => (
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
              <h3 className="font-serif text-2xl font-normal text-white mb-1">Avoid Parking Hassles with Private Cabs</h3>
              <p className="text-xs text-ivory-200 font-light">Our experienced chauffeurs handle all parking and drop you right at the bridge.</p>
            </div>
            <button
              onClick={() => onNavigate('/kainchi-dham-taxi')}
              className="px-6 py-3 rounded-full bg-gold-400 text-forest-950 font-bold text-xs uppercase tracking-wider hover:bg-gold-300 transition-all flex-shrink-0"
            >
              Book Station Cab
            </button>
          </section>

        </div>
      </article>
    </>
  );
};
