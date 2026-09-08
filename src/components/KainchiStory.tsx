import React from 'react';
import { ArrowRight, Mountain, Sparkles } from 'lucide-react';
import { SITE_IMAGES } from '../data/siteImages';

interface KainchiStoryProps {
  onExploreExperience: () => void;
}

export const KainchiStory: React.FC<KainchiStoryProps> = ({ onExploreExperience }) => {
  return (
    <section className="py-20 sm:py-28 bg-ivory-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Visual Side */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3] group">
              <img
                src={SITE_IMAGES.templeComplex}
                alt="Kainchi Dham ashram: white and saffron shikharas with terracotta roofs in a forested Kumaon valley"
                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-950/70 via-transparent to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-gold-300 mb-1">
                  <Mountain className="w-3.5 h-3.5" />
                  <span>Kshipra River Valley • 1,400m</span>
                </div>
                <div className="font-serif text-lg text-ivory-100 italic">
                  “A quiet valley where time slows and heart finds peace.”
                </div>
              </div>
            </div>

            {/* Floating accent card */}
            <div className="hidden sm:block absolute -bottom-6 -right-6 glass-card bg-white/95 p-5 rounded-2xl shadow-luxury border border-ivory-300 max-w-xs">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-forest-800 text-gold-300 flex items-center justify-center font-serif text-lg font-bold">
                  1964
                </div>
                <div>
                  <div className="text-xs font-bold text-charcoal-900">Established by Maharaj-ji</div>
                  <div className="text-[11px] text-charcoal-600">On June 15 on the Kshipra banks</div>
                </div>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div className="lg:col-span-6">
            <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-forest-700 block mb-3">
              THE SACRED VALLEY
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-light text-charcoal-900 leading-tight mb-6">
              More than a destination.
            </h2>
            
            <div className="space-y-4 text-charcoal-700 text-sm sm:text-base leading-relaxed font-light">
              <p>
                Nestled in the tranquil Kumaon hills of Uttarakhand along the winding Nainital-Almora road, Kainchi Dham has become an enduring sanctuary for travelers seeking reflection, simplicity, and a profound inner quiet.
              </p>
              <p>
                Flanked by two steep mountain ridges that scissor together like a pair of scissors (hence <em>Kainchi</em>), the valley resonates with the gentle murmur of the Kshipra river, the fragrance of Himalayan pines, and the steady cadence of the Hanuman Chalisa.
              </p>
              <p>
                Here, pilgrims from all walks of life—from local villagers to global visionaries—leave behind the noise of the world to sit in quiet prayer, receive blessed bhandara, and experience the timeless presence of Maharaj-ji.
              </p>
            </div>

            <div className="pt-8 mt-8 border-t border-ivory-300 flex items-center gap-6">
              <button
                onClick={onExploreExperience}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-forest-800 hover:bg-forest-700 text-ivory-100 text-xs font-semibold uppercase tracking-wider transition-all duration-300 shadow-sm group"
              >
                <span>Explore the visitor guide</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
              </button>

              <div className="flex items-center gap-2 text-xs font-medium text-forest-800">
                <Sparkles className="w-4 h-4 text-gold-500" />
                <span>Open Daily 6:30 AM – 7:30 PM</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
