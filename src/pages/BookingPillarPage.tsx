import React, { useState } from 'react';
import {
  Hotel,
  Car,
  Compass,
  CheckCircle2,
  Clock,
  ShieldCheck,
  Star,
  MapPin,
  ArrowRight,
  Info,
  Calendar,
  Sparkles,
  Search
} from 'lucide-react';
import { SEOHead } from '../seo/SEOHead';
import { SEO_ROUTES } from '../seo/seoData';
import { STAYS_DATA } from '../data/stays';
import { TRANSPORT_DATA } from '../data/transportation';
import type { Stay, TransportService } from '../types';
import { generateOrganizationSchema, generateFAQSchema, generateBreadcrumbSchema } from '../seo/schemas';

interface BookingPillarPageProps {
  onNavigate: (url: string) => void;
  onSelectStay: (stay: Stay) => void;
  onBookTransport: (service: TransportService) => void;
  onOpenPlanner: () => void;
}

const BOOKING_FAQS = [
  {
    question: 'What services can I book on KainchiDhamBooking.com?',
    answer: 'You can book verified boutique hotels and homestays near Kainchi Dham gate, fixed-rate taxi transfers from Kathgodam Railway Station (37 km), Pantnagar Airport (70 km), and Delhi NCR (320 km), as well as customized multi-day Kumaon pilgrimage tour packages.'
  },
  {
    question: 'Is there any fee to book temple darshan or enter Kainchi Dham?',
    answer: 'No. Temple darshan, entry, and sacred Bhandara prasad are 100% FREE for all devotees. We do not sell temple entry tickets or VIP passes. All booking costs on this site are solely for private accommodation, licensed chauffeur transport, and travel coordination.'
  },
  {
    question: 'How far in advance should I book hotels near Kainchi Dham?',
    answer: 'During peak pilgrimage seasons (March to June, autumn weekends, and around the June 15 annual Bhandara), hotels and homestays within 1–3 km of the temple sell out weeks in advance. We recommend booking at least 2–4 weeks early.'
  },
  {
    question: 'How do taxi pickups work at Kathgodam Railway Station?',
    answer: 'Your assigned chauffeur tracks your train arrival (e.g., Kathgodam Shatabdi or Ranikhet Express). Upon arrival at Kathgodam Station, the driver meets you at the station exit gate with a personalized name-board for a direct, stress-free hill ascent to your hotel or the temple.'
  }
];

export const BookingPillarPage: React.FC<BookingPillarPageProps> = ({
  onNavigate,
  onSelectStay,
  onBookTransport,
  onOpenPlanner,
}) => {
  const [activeTab, setActiveTab] = useState<'hotels' | 'taxis' | 'packages'>('hotels');
  const meta = SEO_ROUTES['/kainchi-dham-booking'];

  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Kainchi Dham Booking 2026', url: '/kainchi-dham-booking' }
  ];

  const orgSchema = generateOrganizationSchema();
  const faqSchema = generateFAQSchema(BOOKING_FAQS);
  const breadcrumbSchema = generateBreadcrumbSchema(breadcrumbs);

  return (
    <>
      <SEOHead
        title={meta?.title || 'Kainchi Dham Booking 2026: Hotels, Taxis & Pilgrimage Packages'}
        description={meta?.description || 'Book verified hotels near Kainchi Dham Temple, Kathgodam station taxi pickups, and custom Kumaon pilgrimage itineraries with upfront pricing.'}
        canonicalUrl="https://kainchidhambooking.com/kainchi-dham-booking"
        keywords={meta?.secondaryKeywords || ['Kainchi Dham booking', 'Kainchi Dham hotel booking', 'Kainchi Dham taxi booking', 'Kainchi Dham booking 2026']}
        ogType="website"
        breadcrumbs={breadcrumbs}
        schema={[orgSchema, faqSchema, breadcrumbSchema]}
      />

      <div className="min-h-screen bg-ivory-100 text-charcoal-900 pb-24">
        {/* Hero Section */}
        <header className="bg-forest-950 text-white pt-32 pb-16 sm:pb-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(185,154,98,0.18),transparent_60%)] pointer-events-none" />
          
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <nav aria-label="Breadcrumb" className="mb-6">
              <ol className="flex items-center gap-2 text-xs text-ivory-300">
                <li><button onClick={() => onNavigate('/')} className="hover:text-gold-300 transition-colors">Home</button></li>
                <li>/</li>
                <li className="text-gold-300 font-semibold" aria-current="page">Booking 2026</li>
              </ol>
            </nav>

            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold-400/20 text-gold-300 border border-gold-400/30 text-xs font-bold uppercase tracking-widest mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Independent Travel & Accommodation Directory</span>
            </span>

            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-light text-white tracking-tight leading-tight mb-4">
              Kainchi Dham Booking 2026
            </h1>

            <p className="text-sm sm:text-lg text-ivory-200 max-w-3xl leading-relaxed font-light mb-8">
              Verified boutique hotels near the temple gate, punctual Kathgodam station transfers, and transparent Kumaon travel coordination.
            </p>

            {/* Quick Switch Buttons */}
            <div className="flex flex-wrap gap-2.5">
              <button
                onClick={() => setActiveTab('hotels')}
                className={`flex items-center gap-2 px-5 py-3 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
                  activeTab === 'hotels'
                    ? 'bg-gold-400 text-forest-950 shadow-lg scale-102'
                    : 'bg-white/10 text-white hover:bg-white/20 border border-white/20'
                }`}
              >
                <Hotel className="w-4 h-4" />
                <span>Hotels & Homestays</span>
              </button>

              <button
                onClick={() => setActiveTab('taxis')}
                className={`flex items-center gap-2 px-5 py-3 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
                  activeTab === 'taxis'
                    ? 'bg-gold-400 text-forest-950 shadow-lg scale-102'
                    : 'bg-white/10 text-white hover:bg-white/20 border border-white/20'
                }`}
              >
                <Car className="w-4 h-4" />
                <span>Kathgodam & Airport Cabs</span>
              </button>

              <button
                onClick={() => setActiveTab('packages')}
                className={`flex items-center gap-2 px-5 py-3 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
                  activeTab === 'packages'
                    ? 'bg-gold-400 text-forest-950 shadow-lg scale-102'
                    : 'bg-white/10 text-white hover:bg-white/20 border border-white/20'
                }`}
              >
                <Compass className="w-4 h-4" />
                <span>Tour Packages</span>
              </button>
            </div>
          </div>
        </header>

        {/* Clear Independent Platform Disclosure */}
        <section className="bg-amber-50 border-b border-amber-200 py-3.5 px-4">
          <div className="max-w-6xl mx-auto flex items-start gap-3 text-xs sm:text-sm text-amber-900 leading-relaxed">
            <Info className="w-5 h-5 text-amber-700 flex-shrink-0 mt-0.5" />
            <div>
              <strong>TRANSPARENCY NOTICE:</strong> KainchiDhamBooking.com is an independent travel booking platform. Temple Darshan is <strong>100% FREE</strong> for all visitors. We do not sell temple entry tickets or VIP darshan passes. We arrange verified lodging and private transportation.
            </div>
          </div>
        </section>

        {/* Dynamic Booking Content */}
        <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
          
          {/* Hotels Tab */}
          {activeTab === 'hotels' && (
            <div className="space-y-8 animate-in fade-in duration-300">
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-forest-700">VERIFIED PROPERTIES</span>
                  <h2 className="font-serif text-2xl sm:text-3xl font-medium text-charcoal-900 mt-1">
                    Handpicked Stays Near Kainchi Dham Gate
                  </h2>
                </div>
                <button
                  onClick={() => onNavigate('/kainchi-dham-hotels')}
                  className="text-xs font-bold text-forest-800 hover:text-forest-900 flex items-center gap-1 uppercase tracking-wider"
                >
                  <span>View All {STAYS_DATA.length} Properties</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {STAYS_DATA.slice(0, 6).map((stay) => (
                  <div
                    key={stay.id}
                    className="bg-white rounded-3xl overflow-hidden border border-ivory-300 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group"
                  >
                    <div>
                      <div className="relative h-48 overflow-hidden bg-forest-950">
                        <img
                          src={stay.images[0] || '/images/kainchi-dham-vaishno-devi-shikhara.webp'}
                          alt={stay.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute top-3 left-3">
                          <span className="px-2.5 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase bg-forest-900/90 text-gold-300 backdrop-blur-md">
                            {stay.tag}
                          </span>
                        </div>
                        <div className="absolute bottom-3 right-3 bg-forest-950/80 backdrop-blur-md px-2.5 py-1 rounded-full text-xs font-bold text-gold-300 flex items-center gap-1">
                          <Star className="w-3 h-3 fill-gold-400 text-gold-400" />
                          <span>{stay.rating}</span>
                        </div>
                      </div>

                      <div className="p-5">
                        <div className="flex items-center gap-1 text-[11px] text-forest-800 font-semibold mb-1">
                          <MapPin className="w-3.5 h-3.5" />
                          <span>{stay.distanceKm} km from Temple Gate</span>
                        </div>
                        <h3 className="font-serif text-lg font-medium text-charcoal-900 mb-2">
                          {stay.name}
                        </h3>
                        <p className="text-xs text-charcoal-600 line-clamp-2 leading-relaxed mb-4">
                          {stay.description}
                        </p>

                        <div className="flex items-baseline justify-between pt-3 border-t border-ivory-200">
                          <div>
                            <span className="text-xs text-charcoal-500">From </span>
                            <strong className="text-base font-bold text-forest-900">₹{stay.pricePerNight.toLocaleString('en-IN')}</strong>
                            <span className="text-[10px] text-charcoal-500"> / night</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="p-5 pt-0">
                      <button
                        onClick={() => onSelectStay(stay)}
                        className="w-full py-2.5 rounded-xl bg-forest-800 hover:bg-forest-700 text-ivory-100 text-xs font-semibold uppercase tracking-wider transition-colors"
                      >
                        Reserve Room
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Taxis Tab */}
          {activeTab === 'taxis' && (
            <div className="space-y-8 animate-in fade-in duration-300">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-forest-700">PRIVATE MOUNTAIN CHAUFFEURS</span>
                <h2 className="font-serif text-2xl sm:text-3xl font-medium text-charcoal-900 mt-1">
                  Fixed-Price Station & Airport Transfers
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {TRANSPORT_DATA.map((service) => (
                  <div
                    key={service.id}
                    className="bg-white rounded-3xl p-6 border border-ivory-300 shadow-sm flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <span className="text-[10px] font-bold uppercase tracking-wider text-gold-700 bg-gold-400/20 px-2.5 py-0.5 rounded-full">
                            {service.category} Transfer
                          </span>
                          <h3 className="font-serif text-xl font-medium text-charcoal-900 mt-2">
                            {service.title}
                          </h3>
                        </div>
                        <div className="text-right">
                          <span className="text-xs text-charcoal-500">Starting from</span>
                          <div className="text-xl font-bold text-forest-900">
                            ₹{service.vehicles[0]?.price.toLocaleString('en-IN')}
                          </div>
                        </div>
                      </div>

                      <p className="text-xs text-charcoal-600 leading-relaxed mb-4">
                        {service.description}
                      </p>

                      <div className="space-y-2 border-t border-ivory-200 pt-3">
                        {service.vehicles.map((v, idx) => (
                          <div key={idx} className="flex justify-between items-center text-xs p-2 bg-ivory-100 rounded-xl">
                            <span className="font-semibold text-charcoal-800">{v.type} ({v.model})</span>
                            <strong className="text-forest-900">₹{v.price.toLocaleString('en-IN')}</strong>
                          </div>
                        ))}
                      </div>
                    </div>

                    <button
                      onClick={() => onBookTransport(service)}
                      className="mt-6 w-full py-3 rounded-xl bg-forest-800 hover:bg-forest-700 text-ivory-100 text-xs font-semibold uppercase tracking-wider transition-colors"
                    >
                      Book This Vehicle
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tour Packages Tab */}
          {activeTab === 'packages' && (
            <div className="space-y-8 animate-in fade-in duration-300">
              <div className="bg-white rounded-3xl p-8 border border-ivory-300 text-center max-w-3xl mx-auto shadow-sm">
                <span className="text-[10px] font-bold uppercase tracking-wider text-forest-700 block mb-2">
                  CUSTOM PILGRIMAGE ITINERARIES
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl font-medium text-charcoal-900 mb-3">
                  Tailored 1 to 4-Day Kumaon Packages
                </h2>
                <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed font-light mb-6">
                  Combine morning and evening Aarti at Kainchi Dham with scenic visits to Naini Lake, Golu Devta Temple at Ghorakhal, Bhimtal Island, and Mukteshwar snow peaks.
                </p>

                <button
                  onClick={onOpenPlanner}
                  className="px-8 py-4 rounded-full bg-forest-800 hover:bg-forest-700 text-ivory-100 text-xs font-bold uppercase tracking-wider transition-all shadow-md inline-flex items-center gap-2"
                >
                  <Compass className="w-4 h-4 text-gold-400" />
                  <span>Launch Free Trip Planner</span>
                </button>
              </div>
            </div>
          )}

          {/* Booking FAQs */}
          <section className="mt-16 pt-12 border-t border-ivory-300">
            <h2 className="font-serif text-2xl sm:text-3xl font-normal text-charcoal-900 mb-6">
              Frequently Asked Questions About Booking
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {BOOKING_FAQS.map((faq, i) => (
                <div key={i} className="p-5 rounded-2xl bg-white border border-ivory-300">
                  <h3 className="font-serif text-base font-medium text-charcoal-900 mb-2">
                    {faq.question}
                  </h3>
                  <p className="text-xs text-charcoal-600 leading-relaxed font-light">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </section>

        </main>
      </div>
    </>
  );
};
