import React from 'react';
import { BookOpen, Clock, MapPin, CloudSun } from 'lucide-react';

export const TrustStrip: React.FC = () => {
  const trustItems = [
    {
      icon: BookOpen,
      title: 'Independent visitor guide',
      subtitle: 'Timings, etiquette, trains and routes — not ashram booking',
    },
    {
      icon: Clock,
      title: 'Darshan hours',
      subtitle: 'Gates typically 6:30 AM–7:30 PM; aarti around morning & dusk',
    },
    {
      icon: MapPin,
      title: 'How to reach',
      subtitle: 'Kathgodam 37 km via Bhowali · Pantnagar ~72 km',
    },
    {
      icon: CloudSun,
      title: 'Conditions today',
      subtitle: 'Live valley weather and a simple road note on /today',
    },
  ];

  return (
    <section className="pt-16 sm:pt-20 pb-12 bg-ivory-100 border-b border-ivory-300/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-forest-700">
            START WITH THE PLACE
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl text-charcoal-900 mt-1 font-normal">
            What first-time visitors actually look up
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {trustItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="glass-card bg-white/70 p-6 rounded-2xl border border-ivory-300/80 hover:border-gold-400/60 transition-all duration-300 hover:shadow-luxury group"
              >
                <div className="w-12 h-12 rounded-xl bg-forest-800/5 text-forest-800 flex items-center justify-center mb-4 group-hover:bg-forest-800 group-hover:text-ivory-100 transition-colors duration-300">
                  <Icon className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
                </div>
                <h3 className="font-semibold text-charcoal-900 text-base mb-1">
                  {item.title}
                </h3>
                <p className="text-xs text-charcoal-600 leading-relaxed">
                  {item.subtitle}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
