import React from 'react';
import { ArrowRight, Building, Home, MountainSnow } from 'lucide-react';
import { SITE_IMAGES } from '../data/siteImages';

interface StayCategoriesProps {
  onSelectCategory: (category: 'Hotels' | 'Homestays' | 'Retreats') => void;
}

export const StayCategories: React.FC<StayCategoriesProps> = ({ onSelectCategory }) => {
  const categories = [
    {
      name: 'Hotels',
      catKey: 'Hotels' as const,
      tagline: 'Comfortable, accessible stays near Kainchi Dham',
      description: 'Modern amenities, private parking, and swift walking or driving access to the temple gates.',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1200&auto=format&fit=crop',
      icon: Building,
      cta: 'Explore Hotels'
    },
    {
      name: 'Homestays',
      catKey: 'Homestays' as const,
      tagline: 'Experience the warmth of authentic Kumaon',
      description: 'Stay with welcoming local Pahadi families in stone heritage homes, enjoying organic home-cooked food.',
      image: 'https://images.unsplash.com/photo-1587061949409-02df41d5e562?q=80&w=1200&auto=format&fit=crop',
      icon: Home,
      cta: 'Explore Homestays'
    },
    {
      name: 'Retreats',
      catKey: 'Retreats' as const,
      tagline: 'Slow down and reconnect with yourself',
      description: 'Silent pine sanctuaries with meditation decks, Ayurvedic wellness, and quiet spaces for reflection.',
      image: SITE_IMAGES.earlyMorning,
      icon: MountainSnow,
      cta: 'Explore Retreats'
    }
  ];

  return (
    <section className="py-16 sm:py-24 bg-ivory-200/50 border-y border-ivory-300/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-forest-700 block mb-2">
            TAILORED HOSPITALITY
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-light text-charcoal-900">
            Choose your ideal way to stay
          </h2>
          <p className="text-charcoal-600 text-sm mt-2">
            Whether seeking quiet contemplation, family comfort, or warm mountain host hospitality.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((cat, index) => {
            const Icon = cat.icon;
            return (
              <div
                key={index}
                className="group relative h-[420px] rounded-3xl overflow-hidden shadow-luxury hover:shadow-2xl transition-all duration-500 cursor-pointer flex flex-col justify-end p-8"
                onClick={() => onSelectCategory(cat.catKey)}
              >
                {/* Background Image */}
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                />
                
                {/* Gradient Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-forest-950/95 via-forest-900/50 to-transparent transition-opacity duration-300 group-hover:opacity-90" />

                {/* Top Icon Tag */}
                <div className="absolute top-6 left-6 w-11 h-11 rounded-2xl bg-white/15 backdrop-blur-md border border-white/20 text-ivory-100 flex items-center justify-center group-hover:bg-gold-500 group-hover:text-forest-900 transition-colors duration-300">
                  <Icon className="w-5 h-5" />
                </div>

                {/* Content */}
                <div className="relative z-10 text-white">
                  <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-gold-300 block mb-1">
                    {cat.tagline}
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl font-normal text-white mb-2">
                    {cat.name}
                  </h3>
                  <p className="text-xs text-ivory-200/90 leading-relaxed mb-6 font-light">
                    {cat.description}
                  </p>

                  <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-ivory-100 group-hover:text-gold-300 transition-colors">
                    <span>{cat.cta}</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
