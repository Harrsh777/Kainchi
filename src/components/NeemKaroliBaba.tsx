import React, { useState } from 'react';
import { Heart, Sparkles, BookOpen, ChevronRight } from 'lucide-react';
import { MAHARAJJI_PHOTOS } from '../data/maharajjiQuotes';

interface NeemKaroliBabaProps {
  onReadStories: () => void;
}

export const NeemKaroliBaba: React.FC<NeemKaroliBabaProps> = ({ onReadStories }) => {
  const [activePhotoIdx, setActivePhotoIdx] = useState(0);
  const currentPhoto = MAHARAJJI_PHOTOS[activePhotoIdx];

  return (
    <section id="neem-karoli-baba" className="py-20 sm:py-28 bg-ivory-200/60 border-y border-ivory-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid: Story & Iconic Portrait */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Text Content */}
          <div className="lg:col-span-7 order-2 lg:order-1">
            <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-forest-700 block mb-3">
              THE REVERED GURU
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-light text-charcoal-900 leading-tight mb-6">
              Neem Karoli Baba
              <span className="block text-forest-800 text-xl sm:text-2xl font-serif italic mt-1 font-normal">
                (Maharaj-ji • c. 1900 – 1973)
              </span>
            </h2>

            <div className="space-y-4 text-charcoal-700 text-sm sm:text-base leading-relaxed font-light">
              <p>
                Neem Karoli Baba (known affectionately as <em>Maharaj-ji</em>) was a revered spiritual master whose presence radiated unconditional love, deep humility, and profound peace. Wrapped in his signature plaid blanket, he welcomed devotees from across India and around the world.
              </p>
              <p>
                Rejecting ritual dogma, Maharaj-ji taught that God is served directly through selfless love and service to humanity.
              </p>
            </div>

            {/* Core Teachings Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 my-6">
              <div className="p-4 rounded-2xl bg-white border border-ivory-300 shadow-sm">
                <div className="w-8 h-8 rounded-lg bg-forest-800/10 text-forest-800 flex items-center justify-center mb-2">
                  <Heart className="w-4 h-4 text-forest-700" />
                </div>
                <div className="font-serif text-base font-medium text-charcoal-900">“Love Everyone”</div>
                <div className="text-[10px] text-forest-700 font-semibold mb-0.5">सबको प्रेम करो</div>
                <p className="text-[11px] text-charcoal-600 mt-1">See the divine spark within all beings without judgment.</p>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-ivory-300 shadow-sm">
                <div className="w-8 h-8 rounded-lg bg-gold-500/15 text-gold-700 flex items-center justify-center mb-2">
                  <Sparkles className="w-4 h-4 text-gold-600" />
                </div>
                <div className="font-serif text-base font-medium text-charcoal-900">“Serve Everyone”</div>
                <div className="text-[10px] text-gold-700 font-semibold mb-0.5">सबकी सेवा करो</div>
                <p className="text-[11px] text-charcoal-600 mt-1">Feed the hungry, heal the ailing, and practice selfless seva.</p>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-ivory-300 shadow-sm">
                <div className="w-8 h-8 rounded-lg bg-sage-500/20 text-forest-800 flex items-center justify-center mb-2">
                  <BookOpen className="w-4 h-4 text-forest-700" />
                </div>
                <div className="font-serif text-base font-medium text-charcoal-900">“Remember God”</div>
                <div className="text-[10px] text-forest-700 font-semibold mb-0.5">ईश्वर को याद रखो</div>
                <p className="text-[11px] text-charcoal-600 mt-1">Keep the mind anchored in truth and tell the truth always.</p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed font-light mb-8">
              In 1964, Maharaj-ji established the Kainchi Dham ashram on the peaceful banks of the Kshipra river. His teachings continue to inspire millions across the globe—from Steve Jobs and Mark Zuckerberg to Ram Dass and Dr. Larry Brilliant.
            </p>

            <button
              onClick={onReadStories}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-forest-800 hover:bg-forest-700 text-ivory-100 text-xs font-semibold uppercase tracking-wider transition-all duration-300 shadow-sm"
            >
              <span>Discover Documented Stories</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Authentic Portrait Side */}
          <div className="lg:col-span-5 order-1 lg:order-2">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-forest-900 group">
              <img
                src={currentPhoto.imageUrl}
                alt={currentPhoto.title}
                className="w-full h-[500px] object-cover object-top transition-all duration-500 group-hover:scale-103"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-950/90 via-forest-950/20 to-transparent" />
              
              {/* Bottom Caption Overlay */}
              <div className="absolute bottom-6 left-6 right-6 text-white text-center">
                <div className="inline-block px-3 py-1 rounded-full bg-gold-500/20 border border-gold-400/40 text-gold-300 text-[11px] font-bold uppercase tracking-wider mb-2">
                  Param Pujya Maharaj-ji
                </div>
                <div className="font-serif text-2xl sm:text-3xl italic text-white font-normal mb-1">
                  “Sub Ek • All is One”
                </div>
                <div className="text-xs text-ivory-200/90 font-light">
                  {currentPhoto.caption}
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Photo Gallery of Maharaj-ji & Ashram */}
        <div className="mt-16 pt-12 border-t border-ivory-300">
          <div className="flex items-center justify-between mb-6">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-forest-700 block">
                SACRED ARCHIVES
              </span>
              <h3 className="font-serif text-2xl font-light text-charcoal-900">
                Photographs of Neem Karoli Baba
              </h3>
            </div>
            <span className="text-xs text-charcoal-500">Click any photograph to view as main portrait</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {MAHARAJJI_PHOTOS.map((photo, idx) => (
              <div
                key={photo.id}
                onClick={() => setActivePhotoIdx(idx)}
                className={`p-4 rounded-3xl bg-white border transition-all duration-300 cursor-pointer shadow-sm hover:shadow-lg ${
                  activePhotoIdx === idx ? 'border-forest-800 ring-2 ring-forest-800/30 scale-102' : 'border-ivory-300 hover:border-gold-400'
                }`}
              >
                <div className="relative h-60 rounded-2xl overflow-hidden mb-3 bg-forest-950">
                  <img
                    src={photo.imageUrl}
                    alt={photo.title}
                    className="w-full h-full object-cover object-top"
                  />
                  <div className="absolute top-2.5 right-2.5">
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-forest-900/80 text-gold-300 backdrop-blur-md">
                      {photo.yearLocation}
                    </span>
                  </div>
                </div>
                <h4 className="font-serif text-lg font-medium text-charcoal-900 mb-1">
                  {photo.title}
                </h4>
                <p className="text-xs text-charcoal-600 leading-relaxed font-light">
                  {photo.caption}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
