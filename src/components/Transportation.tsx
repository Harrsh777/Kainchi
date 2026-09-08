import React, { useState } from 'react';
import { TRANSPORT_DATA } from '../data/transportation';
import type { TransportService } from '../types';
import { Car, Clock, Users, Briefcase, CheckCircle2, ArrowRight } from 'lucide-react';

interface TransportationProps {
  onBookTransport: (service: TransportService, vehicleType?: string) => void;
}

export const Transportation: React.FC<TransportationProps> = ({ onBookTransport }) => {
  const [selectedCategory, setSelectedCategory] = useState<'All' | 'Railway' | 'Airport' | 'Sightseeing'>('All');

  const filteredServices = selectedCategory === 'All'
    ? TRANSPORT_DATA
    : TRANSPORT_DATA.filter((s) => s.category === selectedCategory);

  return (
    <section id="transportation" className="py-20 sm:py-28 bg-ivory-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-forest-700 block mb-2">
              SEAMLESS TRANSIT
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-light text-charcoal-900 tracking-tight">
              The journey matters too.
            </h2>
            <p className="text-charcoal-600 text-sm sm:text-base mt-3 leading-relaxed">
              From the moment you arrive at the station or airport, make every kilometer peaceful with seasoned mountain chauffeurs and fixed upfront rates in certified Innova Crysta, Ertiga & Sedans.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-1.5 p-1.5 bg-ivory-200/80 rounded-full border border-ivory-300 w-fit">
            {(['All', 'Railway', 'Airport', 'Sightseeing'] as const).map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wider transition-all duration-300 ${
                  selectedCategory === cat
                    ? 'bg-forest-800 text-ivory-100 shadow-sm'
                    : 'text-charcoal-700 hover:text-charcoal-900 hover:bg-ivory-300/50'
                }`}
              >
                {cat === 'Railway' ? 'Kathgodam Train' : cat === 'Airport' ? 'Airport Cab' : cat}
              </button>
            ))}
          </div>
        </div>

        {/* Transportation Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="glass-card bg-white rounded-3xl overflow-hidden border border-ivory-300 shadow-luxury hover:shadow-luxury-hover transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Visual Header */}
                <div className="relative h-60 overflow-hidden bg-forest-950">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-950/90 via-forest-950/30 to-transparent" />
                  
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full text-[11px] font-semibold tracking-wider uppercase bg-forest-900/90 text-gold-300 backdrop-blur-md border border-white/10">
                      {service.category} Transfer
                    </span>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="font-serif text-xl sm:text-2xl font-medium text-white mb-1">
                      {service.title}
                    </h3>
                    <div className="flex items-center gap-4 text-xs text-ivory-200">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-gold-400" />
                        {service.duration}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Details & Inclusions */}
                <div className="p-6">
                  <p className="text-xs text-charcoal-600 leading-relaxed mb-4">
                    {service.description}
                  </p>

                  <div className="grid grid-cols-2 gap-2 mb-6">
                    {service.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-1.5 text-xs text-charcoal-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-forest-700 flex-shrink-0" />
                        <span className="truncate">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Vehicle Fleet Selector Options with actual car photos */}
                  <div className="border-t border-ivory-200 pt-4">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-charcoal-500 block mb-3">
                      Available Vehicle Options (Actual Fleet)
                    </span>
                    <div className="space-y-3">
                      {service.vehicles.map((v, i) => (
                        <div
                          key={i}
                          className="flex items-center justify-between p-3 rounded-2xl bg-ivory-100/90 hover:bg-ivory-200 transition-all border border-ivory-300 group/car"
                        >
                          <div className="flex items-center gap-3.5">
                            {/* Actual Vehicle Image Thumbnail */}
                            <div className="w-14 h-12 rounded-xl overflow-hidden bg-white border border-ivory-300 flex-shrink-0 shadow-sm">
                              {v.image ? (
                                <img
                                  src={v.image}
                                  alt={v.model}
                                  className="w-full h-full object-cover group-hover/car:scale-108 transition-transform duration-300"
                                />
                              ) : (
                                <div className="w-full h-full flex items-center justify-center bg-forest-800/10 text-forest-800">
                                  <Car className="w-5 h-5" />
                                </div>
                              )}
                            </div>

                            <div>
                              <div className="flex items-center gap-2">
                                <span className="text-xs font-bold text-charcoal-900">{v.type}</span>
                                <span className="text-[11px] text-forest-800 font-semibold">({v.model})</span>
                                {v.popular && (
                                  <span className="text-[9px] font-bold uppercase tracking-wider bg-gold-400/25 text-gold-800 px-1.5 py-0.5 rounded-full border border-gold-400/40">
                                    Popular
                                  </span>
                                )}
                              </div>
                              <div className="flex items-center gap-3 text-[10px] text-charcoal-600 mt-1">
                                <span className="flex items-center gap-1 font-medium"><Users className="w-3 h-3 text-forest-800" /> {v.capacity}</span>
                                <span className="flex items-center gap-1 font-medium"><Briefcase className="w-3 h-3 text-forest-800" /> {v.luggage}</span>
                              </div>
                            </div>
                          </div>

                          <div className="text-right">
                            <span className="text-sm sm:text-base font-bold text-forest-900">₹{v.price.toLocaleString('en-IN')}</span>
                            <span className="text-[10px] text-charcoal-500 block">all-inclusive</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Card Footer CTA */}
              <div className="p-6 pt-0">
                <button
                  onClick={() => onBookTransport(service)}
                  className="w-full py-3.5 px-6 rounded-2xl bg-forest-800 hover:bg-forest-700 text-ivory-100 text-xs font-semibold uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 shadow-sm"
                >
                  <span>Book This Route</span>
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
