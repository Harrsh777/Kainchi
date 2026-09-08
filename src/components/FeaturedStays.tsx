import React, { useState } from 'react';
import { STAYS_DATA } from '../data/stays';
import type { Stay } from '../types';
import { Star, MapPin, Sparkles, Check, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface FeaturedStaysProps {
  onSelectStay: (stay: Stay) => void;
  onPlanTrip: () => void;
}

export const FeaturedStays: React.FC<FeaturedStaysProps> = ({ onSelectStay, onPlanTrip }) => {
  const [activeCategory, setActiveCategory] = useState<'All' | 'Hotels' | 'Homestays' | 'Retreats'>('All');

  const filteredStays = activeCategory === 'All'
    ? STAYS_DATA
    : STAYS_DATA.filter((s) => s.category === activeCategory);

  return (
    <section id="stays" className="py-20 sm:py-28 bg-ivory-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-forest-700 block mb-2">
              CURATED ACCOMMODATIONS
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-light text-charcoal-900 tracking-tight">
              Stay close to what matters.
            </h2>
            <p className="text-charcoal-600 text-sm sm:text-base mt-3 leading-relaxed">
              Carefully selected stays for a peaceful, comfortable, and contemplative visit to Kainchi Dham and surrounding Kumaon ridges.
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 p-1.5 bg-ivory-200/80 rounded-full border border-ivory-300 w-fit">
            {(['All', 'Hotels', 'Homestays', 'Retreats'] as const).map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wider transition-all duration-300 ${
                  activeCategory === cat
                    ? 'bg-forest-800 text-ivory-100 shadow-sm'
                    : 'text-charcoal-700 hover:text-charcoal-900 hover:bg-ivory-300/50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Stays Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredStays.map((stay) => (
              <motion.div
                key={stay.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="glass-card bg-white rounded-3xl overflow-hidden border border-ivory-300 shadow-luxury hover:shadow-luxury-hover transition-all duration-500 group flex flex-col justify-between"
              >
                {/* Image Container with Tag & Rating */}
                <div>
                  <div className="relative aspect-[16/10] overflow-hidden bg-ivory-200">
                    <img
                      src={stay.images[0]}
                      alt={stay.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />
                    
                    {/* Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 rounded-full text-[11px] font-semibold tracking-wide bg-forest-900/80 text-gold-300 backdrop-blur-md border border-white/10">
                        {stay.tag}
                      </span>
                    </div>

                    {/* Rating */}
                    <div className="absolute top-4 right-4">
                      <div className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-white/90 text-charcoal-900 backdrop-blur-md text-xs font-bold shadow-sm">
                        <Star className="w-3.5 h-3.5 fill-gold-500 text-gold-500" />
                        <span>{stay.rating}</span>
                        <span className="text-[10px] text-charcoal-500 font-normal">({stay.reviewsCount})</span>
                      </div>
                    </div>

                    {/* Distance pill bottom */}
                    <div className="absolute bottom-3 left-4 right-4 flex items-center gap-1.5 text-xs text-white/95 drop-shadow-sm font-medium">
                      <MapPin className="w-3.5 h-3.5 text-gold-400 flex-shrink-0" />
                      <span className="truncate">{stay.distanceFromAshram}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <h3 className="font-serif text-xl sm:text-2xl font-medium text-charcoal-900 group-hover:text-forest-800 transition-colors">
                        {stay.name}
                      </h3>
                    </div>

                    <p className="text-xs text-charcoal-600 line-clamp-2 leading-relaxed mb-4">
                      {stay.description}
                    </p>

                    {/* Amenities Badges */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {stay.amenities.slice(0, 3).map((amenity, i) => (
                        <span
                          key={i}
                          className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-[11px] font-medium bg-ivory-100 text-forest-800 border border-ivory-300"
                        >
                          <Check className="w-3 h-3 text-gold-500" />
                          {amenity}
                        </span>
                      ))}
                      {stay.amenities.length > 3 && (
                        <span className="px-2 py-1 rounded-lg text-[10px] font-medium bg-ivory-100 text-charcoal-500">
                          +{stay.amenities.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Card Footer: Price & CTA */}
                <div className="px-6 pb-6 pt-3 border-t border-ivory-200 flex items-center justify-between">
                  <div>
                    <span className="text-[11px] text-charcoal-500 uppercase tracking-wider block font-medium">Starting from</span>
                    <div className="flex items-baseline gap-1">
                      <span className="text-lg sm:text-xl font-bold text-forest-900">₹{stay.pricePerNight.toLocaleString('en-IN')}</span>
                      <span className="text-xs text-charcoal-500">/ night</span>
                    </div>
                  </div>

                  <button
                    onClick={() => onSelectStay(stay)}
                    className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full bg-forest-800 hover:bg-forest-700 text-ivory-100 text-xs font-semibold uppercase tracking-wider transition-all duration-300 group-hover:bg-gold-500 group-hover:text-forest-900 shadow-sm"
                  >
                    <span>View Stay</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Tail banner */}
        <div className="mt-14 glass-card bg-white p-6 sm:p-8 rounded-3xl border border-ivory-300 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-gold-400/20 text-gold-600 flex items-center justify-center flex-shrink-0">
              <Sparkles className="w-6 h-6 text-gold-600" />
            </div>
            <div>
              <h4 className="font-serif text-lg sm:text-xl font-medium text-charcoal-900">Need accommodation for larger family groups or ashram seva?</h4>
              <p className="text-xs sm:text-sm text-charcoal-600 mt-0.5">Our dedicated local concierge coordinates connected rooms, dietary preferences, and wheelchair-accessible stays.</p>
            </div>
          </div>
          <button
            onClick={onPlanTrip}
            className="flex-shrink-0 px-6 py-3 rounded-full bg-forest-800 hover:bg-forest-700 text-ivory-100 text-xs font-semibold uppercase tracking-wider transition-colors shadow-sm"
          >
            Custom Group Stay
          </button>
        </div>
      </div>
    </section>
  );
};
