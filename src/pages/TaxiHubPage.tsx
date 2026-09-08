import React, { useState } from 'react';
import { Car, ShieldCheck, MapPin, Sparkles, CheckCircle2, ArrowRight, PhoneCall } from 'lucide-react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { SEOInternalLinks } from '../components/SEOInternalLinks';
import { SEOHead } from '../seo/SEOHead';
import { SEO_ROUTES } from '../seo/seoData';
import { generateFAQSchema } from '../seo/schemas';
import { TRANSPORT_DATA } from '../data/transportation';
import type { TransportService } from '../types';

interface TaxiHubPageProps {
  onNavigate: (url: string) => void;
  onBookTransport: (service: TransportService) => void;
}

export const TaxiHubPage: React.FC<TaxiHubPageProps> = ({ onNavigate, onBookTransport }) => {
  const meta = SEO_ROUTES['/taxi'];
  const [selectedRouteTab, setSelectedRouteTab] = useState<string>('All');

  const routeTabs = ['All', 'Railway Transfers', 'Airport Cabs', 'Sightseeing Circuits'];

  const filteredServices = TRANSPORT_DATA.filter((service: TransportService) => {
    if (selectedRouteTab === 'All') return true;
    if (selectedRouteTab === 'Railway Transfers') return service.category === 'Railway';
    if (selectedRouteTab === 'Airport Cabs') return service.category === 'Airport';
    if (selectedRouteTab === 'Sightseeing Circuits') return service.category === 'Sightseeing';
    return true;
  });

  const fleetOverview = [
    {
      name: 'Sedan',
      models: 'Maruti Suzuki Dzire / Toyota Etios',
      capacity: '3 Passengers',
      luggage: '2 Large Bags',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/2018_Maruti_Suzuki_Dzire_VXi_1.2L_%28India%29_front_view.jpg/800px-2018_Maruti_Suzuki_Dzire_VXi_1.2L_%28India%29_front_view.jpg',
      tag: 'Best Value'
    },
    {
      name: 'Comfort SUV',
      models: 'Maruti Suzuki Ertiga Smart Hybrid',
      capacity: '5 Passengers',
      luggage: '4 Bags',
      image: 'https://upload.wikimedia.org/wikipedia/commons/0/04/2022_Suzuki_Ertiga_Smart_Hybrid_GX.jpg',
      tag: 'Family Favorite'
    },
    {
      name: 'Premium Mountain SUV',
      models: 'Toyota Innova Crysta 2.4 Z',
      capacity: '6 Passengers',
      luggage: '5 Bags',
      image: 'https://upload.wikimedia.org/wikipedia/commons/8/87/Toyota_Innova_Crysta_2.4_Z_front_right.jpg',
      tag: 'Ultimate Comfort'
    },
    {
      name: 'Tempo Traveller',
      models: 'Force 12–16 Luxury Seater',
      capacity: '12–16 Passengers',
      luggage: '10+ Bags',
      image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=1200&auto=format&fit=crop',
      tag: 'Group Pilgrimage'
    }
  ];

  const faqSchema = meta.faqs ? generateFAQSchema(meta.faqs) : undefined;

  return (
    <div className="pt-24 pb-20 px-4 md:px-8 max-w-7xl mx-auto">
      <SEOHead
        title={meta.title}
        description={meta.description}
        canonicalUrl={meta.canonicalUrl}
        keywords={meta.secondaryKeywords}
        ogType="website"
        breadcrumbs={meta.breadcrumbs}
        schema={faqSchema}
      />

      {/* Breadcrumbs */}
      <Breadcrumbs items={meta.breadcrumbs} onNavigate={onNavigate} />

      {/* Header */}
      <header className="mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-forest-900/10 text-forest-800 text-xs font-semibold uppercase tracking-wider mb-4">
          <Sparkles className="w-3.5 h-3.5 text-gold-600" />
          <span>Mountain Chauffeur Fleet • Upfront Fixed Pricing</span>
        </div>
        <h1 className="text-3xl md:text-5xl font-serif font-bold text-forest-900 leading-tight mb-4">
          Kainchi Dham Taxi, Cab Booking & Station Transfers
        </h1>
        <p className="text-lg text-charcoal-700 max-w-4xl leading-relaxed">
          Reserve verified mountain chauffeurs from Kathgodam Railway Station (37 km), Pantnagar Airport (70 km), Delhi NCR (315 km), and local Kumaon lake circuits. 
          All rates include tolls, mountain parking, and sanitized AC vehicles.
        </p>
      </header>

      {/* Trust Highlights */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
        <div className="p-4 rounded-2xl bg-white border border-forest-900/10 shadow-sm flex items-center gap-3">
          <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0" />
          <span className="text-xs font-semibold text-charcoal-800">Licensed Hill Driving Masters</span>
        </div>
        <div className="p-4 rounded-2xl bg-white border border-forest-900/10 shadow-sm flex items-center gap-3">
          <CheckCircle2 className="w-5 h-5 text-gold-600 shrink-0" />
          <span className="text-xs font-semibold text-charcoal-800">Zero Hidden Surcharges</span>
        </div>
        <div className="p-4 rounded-2xl bg-white border border-forest-900/10 shadow-sm flex items-center gap-3">
          <MapPin className="w-5 h-5 text-forest-700 shrink-0" />
          <span className="text-xs font-semibold text-charcoal-800">Doorstep Hotel / Platform Pickup</span>
        </div>
        <div className="p-4 rounded-2xl bg-white border border-forest-900/10 shadow-sm flex items-center gap-3">
          <PhoneCall className="w-5 h-5 text-blue-600 shrink-0" />
          <span className="text-xs font-semibold text-charcoal-800">24x7 Trip Coordination Desk</span>
        </div>
      </div>

      {/* Fleet Showcase */}
      <section className="mb-14 p-8 rounded-3xl bg-forest-900 text-ivory-100 shadow-xl">
        <h2 className="text-2xl font-serif font-bold text-gold-400 mb-6 flex items-center gap-2">
          <Car className="w-6 h-6 text-gold-500" />
          Verified Mountain Fleet & Luggage Capacities
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {fleetOverview.map((vehicle, idx: number) => (
            <div key={idx} className="p-5 rounded-2xl bg-forest-950/60 border border-forest-800 flex flex-col justify-between">
              <div>
                <div className="relative aspect-[16/10] rounded-xl overflow-hidden mb-3 bg-charcoal-900">
                  <img
                    src={vehicle.image}
                    alt={vehicle.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  {vehicle.tag && (
                    <span className="absolute top-2 left-2 bg-gold-500 text-forest-950 text-[10px] font-bold px-2 py-0.5 rounded-full">
                      {vehicle.tag}
                    </span>
                  )}
                </div>
                <h3 className="font-bold text-ivory-100 text-base">{vehicle.name}</h3>
                <p className="text-xs text-gold-400 mt-0.5">{vehicle.models}</p>
                <div className="flex items-center gap-3 text-xs text-ivory-300 mt-3 pt-2 border-t border-forest-800">
                  <span>👥 {vehicle.capacity}</span>
                  <span>🧳 {vehicle.luggage}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Route Filter Tabs */}
      <div className="mb-8 flex flex-wrap gap-2">
        {routeTabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setSelectedRouteTab(tab)}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
              selectedRouteTab === tab
                ? 'bg-forest-900 text-gold-400 shadow-sm'
                : 'bg-white text-charcoal-700 hover:bg-forest-900/10 border border-forest-900/10'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
        {filteredServices.map((service: TransportService) => (
          <div
            key={service.id}
            className="bg-white rounded-3xl p-6 md:p-8 border border-forest-900/10 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between gap-4 mb-2">
                <h3 className="text-xl font-serif font-bold text-forest-900">{service.title}</h3>
                <span className="text-xs font-bold text-emerald-800 bg-emerald-100/60 px-2.5 py-1 rounded-full shrink-0">
                  {service.duration}
                </span>
              </div>

              <p className="text-xs text-charcoal-600 mb-4">{service.description}</p>

              {/* Key Features */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6 text-xs text-charcoal-700">
                {service.features.map((feat: string, idx: number) => (
                  <div key={idx} className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-gold-600 shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              {/* Tiered Price Table */}
              <div className="grid grid-cols-3 gap-2 p-3 bg-ivory-100 rounded-2xl mb-6 text-center">
                {service.vehicles.slice(0, 3).map((v, idx: number) => (
                  <div key={idx} className="p-2 rounded-xl bg-white border border-forest-900/5">
                    <span className="text-[10px] font-bold text-charcoal-500 uppercase block">{v.type}</span>
                    <span className="text-sm font-bold text-forest-900 mt-1 block">₹{v.price.toLocaleString('en-IN')}</span>
                    <span className="text-[9px] text-emerald-700 font-medium">all-inclusive</span>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={() => onBookTransport(service)}
              className="w-full py-3 rounded-xl bg-forest-900 hover:bg-forest-800 text-gold-400 font-bold text-xs transition-all flex items-center justify-center gap-2 shadow-sm"
            >
              <span>Book Chauffeur for {service.title}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        ))}
      </div>

      {/* FAQs */}
      <section className="mb-14 bg-white p-8 rounded-3xl border border-forest-900/10 shadow-sm">
        <h2 className="text-2xl font-serif font-bold text-forest-900 mb-6">Taxi & Travel Logistics FAQs</h2>
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
          title="Explore Connected Travel Options & Stays"
          links={meta.relatedRoutes}
          onNavigate={onNavigate}
        />
      )}
    </div>
  );
};
