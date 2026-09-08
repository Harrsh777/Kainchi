import React, { useState } from 'react';
import { Building2, MapPin, Star, Sparkles, Filter, CheckCircle2, ArrowRight } from 'lucide-react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { SEOInternalLinks } from '../components/SEOInternalLinks';
import { SEOHead } from '../seo/SEOHead';
import { SEO_ROUTES } from '../seo/seoData';
import { generateHotelSchema, generateFAQSchema } from '../seo/schemas';
import { STAYS_DATA } from '../data/stays';
import type { Stay } from '../types';

interface HotelsHubPageProps {
  onNavigate: (url: string) => void;
  onSelectStay: (stay: Stay) => void;
}

export const HotelsHubPage: React.FC<HotelsHubPageProps> = ({ onNavigate, onSelectStay }) => {
  const meta = SEO_ROUTES['/hotels'];
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedLocation, setSelectedLocation] = useState<string>('All');

  const categories = ['All', 'Retreats', 'Hotels', 'Homestays', 'Resorts'];
  const locations = ['All', 'Kainchi', 'Niglat', 'Bhowali', 'Bhimtal'];

  const filteredStays = STAYS_DATA.filter((stay) => {
    const matchCat = selectedCategory === 'All' || stay.category.toLowerCase().includes(selectedCategory.toLowerCase());
    const matchLoc = selectedLocation === 'All' || stay.location.toLowerCase().includes(selectedLocation.toLowerCase());
    return matchCat && matchLoc;
  });

  const hotelSchemas = STAYS_DATA.slice(0, 3).map((s) =>
    generateHotelSchema({
      name: s.name,
      description: s.description,
      address: s.location,
      priceRange: `₹${s.pricePerNight} - ₹8,000`,
      image: s.images[0],
      rating: s.rating,
      reviewCount: s.reviewsCount,
      url: `/hotels/${s.id}`,
    })
  );

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
        schema={faqSchema ? [...hotelSchemas, faqSchema] : hotelSchemas}
      />

      {/* Breadcrumbs */}
      <Breadcrumbs items={meta.breadcrumbs} onNavigate={onNavigate} />

      {/* Header */}
      <header className="mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-forest-900/10 text-forest-800 text-xs font-semibold uppercase tracking-wider mb-4">
          <Sparkles className="w-3.5 h-3.5 text-gold-600" />
          <span>Verified Local Accommodations • Zero Markups</span>
        </div>
        <h1 className="text-3xl md:text-5xl font-serif font-bold text-forest-900 leading-tight mb-4">
          Hotels, Homestays & Forest Retreats Near Kainchi Dham
        </h1>
        <p className="text-lg text-charcoal-700 max-w-4xl leading-relaxed">
          Carefully inspected pilgrimage accommodations located within 800 meters to 10 kilometers of the temple gates. 
          Featuring pure-vegetarian dining, warm Himalayan hospitality, and quiet forest ambiances.
        </p>
      </header>

      {/* Filter Toolbar */}
      <div className="mb-10 p-5 rounded-2xl bg-white border border-forest-900/10 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        {/* Category Pills */}
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs font-bold text-charcoal-500 uppercase tracking-wider mr-1 flex items-center gap-1">
            <Filter className="w-3.5 h-3.5" /> Type:
          </span>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
                selectedCategory === cat
                  ? 'bg-forest-900 text-gold-400 shadow-sm'
                  : 'bg-ivory-100 text-charcoal-700 hover:bg-forest-900/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Location Selector */}
        <div className="flex items-center gap-2 self-stretch md:self-auto">
          <span className="text-xs font-bold text-charcoal-500 uppercase tracking-wider">Area:</span>
          <select
            value={selectedLocation}
            onChange={(e) => setSelectedLocation(e.target.value)}
            className="px-3 py-1.5 rounded-xl bg-ivory-100 border border-forest-900/10 text-xs font-semibold text-forest-900 focus:outline-none focus:ring-2 focus:ring-gold-500"
          >
            {locations.map((loc) => (
              <option key={loc} value={loc}>
                {loc === 'All' ? 'All Nearby Areas' : `${loc} Region`}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Hotels Listing Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {filteredStays.map((stay) => (
          <div
            key={stay.id}
            className="group bg-white rounded-3xl overflow-hidden border border-forest-900/10 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              {/* Image & Badges */}
              <div className="relative aspect-[16/10] overflow-hidden bg-forest-950">
                <img
                  src={stay.images[0]}
                  alt={stay.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute top-3 left-3 bg-forest-900/80 backdrop-blur-md text-gold-400 text-[11px] font-bold px-3 py-1 rounded-full border border-gold-500/30">
                  {stay.tag || stay.category}
                </div>
                <div className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-md text-forest-950 text-xs font-bold px-2.5 py-1 rounded-lg flex items-center gap-1 shadow-sm">
                  <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                  <span>{stay.rating}</span>
                  <span className="text-charcoal-500 font-normal">({stay.reviewsCount})</span>
                </div>
              </div>

              {/* Body */}
              <div className="p-6">
                <div className="flex items-center gap-1.5 text-xs text-charcoal-600 mb-1">
                  <MapPin className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
                  <span className="truncate">{stay.distanceFromAshram}</span>
                </div>

                <h3 className="text-xl font-serif font-bold text-forest-900 group-hover:text-gold-700 transition-colors">
                  {stay.name}
                </h3>

                <p className="text-xs text-charcoal-600 mt-2 line-clamp-2 leading-relaxed">
                  {stay.description}
                </p>

                {/* Key Amenities */}
                <div className="flex flex-wrap gap-1.5 mt-4">
                  {stay.amenities.slice(0, 3).map((amenity, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center gap-1 text-[10px] font-medium bg-ivory-100 text-charcoal-700 px-2 py-0.5 rounded-md"
                    >
                      <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                      {amenity}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Price & Action */}
            <div className="p-6 pt-0 border-t border-forest-900/5 mt-4 flex items-center justify-between">
              <div>
                <span className="text-[10px] uppercase font-bold text-charcoal-500">From</span>
                <p className="text-lg font-bold text-forest-900">
                  ₹{stay.pricePerNight.toLocaleString('en-IN')}{' '}
                  <span className="text-xs font-normal text-charcoal-600">/ night</span>
                </p>
              </div>

              <button
                onClick={() => onSelectStay(stay)}
                className="px-4 py-2.5 rounded-xl bg-forest-900 hover:bg-forest-800 text-gold-400 font-bold text-xs transition-all shadow-sm flex items-center gap-1.5 group-hover:bg-gold-500 group-hover:text-forest-950"
              >
                <span>View Rooms</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Hotel Area Comparison Section */}
      <section className="mb-16 p-8 rounded-3xl bg-white border border-forest-900/10 shadow-sm">
        <h2 className="text-2xl font-serif font-bold text-forest-900 mb-6 flex items-center gap-2">
          <Building2 className="w-6 h-6 text-gold-600" />
          Where to Stay: Area Breakdown & Proximity Guide
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-charcoal-700">
          <div className="p-5 rounded-2xl bg-ivory-100 border border-forest-900/5">
            <h3 className="font-bold text-forest-900 text-base mb-1">1. Kainchi & Niglat (0.5 – 2 km)</h3>
            <p className="text-xs text-charcoal-600 leading-relaxed mb-3">
              Best for pilgrims attending early 6:30 AM morning aarti. Walkable or 3-minute drive. Mostly authentic homestays and riverside guest rooms.
            </p>
            <span className="text-[11px] font-semibold text-emerald-800 bg-emerald-100/60 px-2 py-0.5 rounded">Walkable / Closest</span>
          </div>

          <div className="p-5 rounded-2xl bg-ivory-100 border border-forest-900/5">
            <h3 className="font-bold text-forest-900 text-base mb-1">2. Bhowali (8 – 9 km)</h3>
            <p className="text-xs text-charcoal-600 leading-relaxed mb-3">
              Kumaon's famous apple and fruit market town. Features broader dining selections, pharmacies, ATM facilities, and pine-view family resorts.
            </p>
            <span className="text-[11px] font-semibold text-blue-800 bg-blue-100/60 px-2 py-0.5 rounded">15 Min Drive / Family Hub</span>
          </div>

          <div className="p-5 rounded-2xl bg-ivory-100 border border-forest-900/5">
            <h3 className="font-bold text-forest-900 text-base mb-1">3. Bhimtal & Sattal (18 – 22 km)</h3>
            <p className="text-xs text-charcoal-600 leading-relaxed mb-3">
              Scenic lake district with luxury forest villas, boating, and lake-view boutique suites. Excellent base for combined spiritual and leisure tours.
            </p>
            <span className="text-[11px] font-semibold text-purple-800 bg-purple-100/60 px-2 py-0.5 rounded">35 Min Drive / Lake Luxury</span>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="mb-14 bg-white p-8 rounded-3xl border border-forest-900/10 shadow-sm">
        <h2 className="text-2xl font-serif font-bold text-forest-900 mb-6">Hotel & Accommodation FAQs</h2>
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
          title="Explore Connected Transportation & Guides"
          links={meta.relatedRoutes}
          onNavigate={onNavigate}
        />
      )}
    </div>
  );
};
