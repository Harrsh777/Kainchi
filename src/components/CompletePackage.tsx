import React from 'react';
import { PACKAGES_DATA } from '../data/packages';
import type { TravelPackage } from '../types';
import { Check, Sparkles, Clock, ArrowRight } from 'lucide-react';

interface CompletePackageProps {
  onSelectPackage: (pkg: TravelPackage) => void;
}

export const CompletePackage: React.FC<CompletePackageProps> = ({ onSelectPackage }) => {
  return (
    <section className="py-20 sm:py-28 bg-ivory-200/50 border-y border-ivory-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-forest-700 block mb-2">
            ALL-INCLUSIVE CONCIERGE PACKAGES
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-light text-charcoal-900 tracking-tight">
            One journey. Everything taken care of.
          </h2>
          <p className="text-charcoal-600 text-sm sm:text-base mt-3 leading-relaxed">
            Thoughtfully packaged itineraries uniting handpicked stays, private mountain chauffeurs, and peaceful Aarti visits.
          </p>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {PACKAGES_DATA.map((pkg) => (
            <div
              key={pkg.id}
              className="glass-card bg-white rounded-3xl overflow-hidden border border-ivory-300 shadow-luxury hover:shadow-luxury-hover transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Visual Header with Badge */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={pkg.image}
                    alt={pkg.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-950/90 via-forest-950/30 to-transparent" />
                  
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full text-[11px] font-bold tracking-wider uppercase bg-gold-500 text-forest-950 shadow-sm">
                      {pkg.badge}
                    </span>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <div className="flex items-center gap-2 text-xs text-gold-300 font-semibold uppercase tracking-wider mb-1">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{pkg.duration}</span>
                    </div>
                    <h3 className="font-serif text-2xl sm:text-3xl font-medium text-white">
                      {pkg.title}
                    </h3>
                  </div>
                </div>

                {/* Content & Inclusions */}
                <div className="p-6 sm:p-8">
                  <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed mb-6 font-light">
                    {pkg.tagline}
                  </p>

                  <div className="mb-6">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-forest-800 mb-3 flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-gold-500" />
                      Curated Package Inclusions:
                    </h4>
                    <div className="space-y-2">
                      {pkg.inclusions.map((inc, i) => (
                        <div key={i} className="flex items-start gap-2.5 text-xs text-charcoal-700">
                          <div className="w-4 h-4 rounded-full bg-forest-800/10 text-forest-800 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <Check className="w-3 h-3" />
                          </div>
                          <span>{inc}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Day-by-Day Itinerary Preview */}
                  <div className="p-4 rounded-2xl bg-ivory-100 border border-ivory-200 mb-6">
                    <h5 className="text-[11px] font-bold uppercase tracking-wider text-charcoal-500 mb-2">
                      Itinerary Snapshot
                    </h5>
                    <div className="space-y-2">
                      {pkg.itinerary.map((item, idx) => (
                        <div key={idx} className="text-xs">
                          <strong className="text-forest-900 font-semibold">{item.day}:</strong> <span className="text-charcoal-700">{item.title}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Card Footer */}
              <div className="px-6 pb-6 sm:px-8 sm:pb-8 pt-0 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-ivory-200 pt-6">
                <div>
                  <span className="text-[11px] text-charcoal-500 uppercase tracking-wider block font-medium">Starting from</span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-2xl font-bold text-forest-900">₹{pkg.pricePerPerson.toLocaleString('en-IN')}</span>
                    <span className="text-xs text-charcoal-500">/ person (double sharing)</span>
                  </div>
                </div>

                <button
                  onClick={() => onSelectPackage(pkg)}
                  className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-forest-800 hover:bg-forest-700 text-ivory-100 text-xs font-semibold uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 shadow-sm"
                >
                  <span>Customize & Book</span>
                  <ArrowRight className="w-3.5 h-3.5 text-gold-400" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
