import React from 'react';
import { ShieldCheck, Layers, MapPin, Headphones } from 'lucide-react';

export const WhyUs: React.FC = () => {
  const pillars = [
    {
      icon: ShieldCheck,
      title: 'Curated Quality',
      description: 'Every property is personally inspected for cleanliness, hot water, peaceful acoustics, and hygienic pure-vegetarian dining.',
    },
    {
      icon: Layers,
      title: 'Simple & Seamless',
      description: 'Plan your stay, private Kathgodam transfers, and sightseeing in one calm, transparent booking experience.',
    },
    {
      icon: MapPin,
      title: 'Deeply Local',
      description: 'Logistics designed around the real mountain topography, ashram prayer timings, and seasonal rush patterns.',
    },
    {
      icon: Headphones,
      title: 'Dedicated Concierge',
      description: 'Direct WhatsApp and phone assistance from our Kumaon team from the moment you book until your safe return.',
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-ivory-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-forest-700 block mb-2">
            THE KAINCHI DHAM DIFFERENCE
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-light text-charcoal-900 tracking-tight">
            Why devotees plan with us
          </h2>
          <p className="text-charcoal-600 text-sm sm:text-base mt-3 leading-relaxed">
            Quiet luxury hospitality built with deep respect for sacred mountain traditions.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((p, idx) => {
            const Icon = p.icon;
            return (
              <div
                key={idx}
                className="glass-card bg-white p-8 rounded-3xl border border-ivory-300 shadow-luxury hover:shadow-luxury-hover transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-2xl bg-forest-800/10 text-forest-800 flex items-center justify-center mb-6 group-hover:bg-forest-800 group-hover:text-ivory-100 transition-colors duration-300">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-xl font-medium text-charcoal-900 mb-2">
                  {p.title}
                </h3>
                <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed font-light">
                  {p.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
