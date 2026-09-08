import React from 'react';
import { EXPERIENCES_DATA } from '../data/experiences';
import type { Experience } from '../types';
import { Clock, MapPin, Sparkles, ArrowRight } from 'lucide-react';

interface ExperiencesProps {
  onPlanExperience: (exp: Experience) => void;
}

export const Experiences: React.FC<ExperiencesProps> = ({ onPlanExperience }) => {
  return (
    <section id="experiences" className="py-20 sm:py-28 bg-ivory-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-forest-700 block mb-2">
            REGIONAL EXCURSIONS
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-light text-charcoal-900 tracking-tight">
            Make the most of your time here.
          </h2>
          <p className="text-charcoal-600 text-sm sm:text-base mt-3 leading-relaxed">
            From the sanctum Aarti at Kainchi Dham to ancient Deodar temple groves and pristine Himalayan lakes.
          </p>
        </div>

        {/* Experience Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {EXPERIENCES_DATA.map((exp) => (
            <div
              key={exp.id}
              className="glass-card bg-white rounded-3xl overflow-hidden border border-ivory-300 shadow-luxury hover:shadow-luxury-hover transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="relative aspect-[16/10] overflow-hidden bg-ivory-200">
                  <img
                    src={exp.image}
                    alt={exp.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-70" />
                  
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full text-[11px] font-semibold tracking-wide bg-forest-900/80 text-gold-300 backdrop-blur-md border border-white/10">
                      {exp.subtitle}
                    </span>
                  </div>

                  <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs text-white/90">
                    <span className="flex items-center gap-1 font-medium">
                      <Clock className="w-3.5 h-3.5 text-gold-400" />
                      {exp.duration}
                    </span>
                    <span className="flex items-center gap-1 text-[11px]">
                      <MapPin className="w-3.5 h-3.5 text-gold-400" />
                      {exp.distanceFromKainchi}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="font-serif text-xl sm:text-2xl font-medium text-charcoal-900 mb-2 group-hover:text-forest-800 transition-colors">
                    {exp.title}
                  </h3>
                  <p className="text-xs text-charcoal-600 leading-relaxed mb-4 line-clamp-3">
                    {exp.description}
                  </p>

                  {/* Highlights */}
                  <div className="space-y-1.5 mb-2">
                    {exp.highlights.slice(0, 2).map((h, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-charcoal-700">
                        <Sparkles className="w-3.5 h-3.5 text-gold-500 flex-shrink-0 mt-0.5" />
                        <span className="leading-snug">{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0">
                <button
                  onClick={() => onPlanExperience(exp)}
                  className="w-full py-3 rounded-xl bg-forest-800/10 group-hover:bg-forest-800 text-forest-800 group-hover:text-ivory-100 text-xs font-semibold uppercase tracking-wider transition-colors flex items-center justify-center gap-1.5"
                >
                  <span>Explore & Plan</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
