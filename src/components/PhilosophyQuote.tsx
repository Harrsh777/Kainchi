import React, { useState } from 'react';
import { MAHARAJJI_QUOTES } from '../data/maharajjiQuotes';
import { Quote, Sparkles, ChevronLeft, ChevronRight } from 'lucide-react';

export const PhilosophyQuote: React.FC = () => {
  const [activeQuoteIdx, setActiveQuoteIdx] = useState(0);

  const current = MAHARAJJI_QUOTES[activeQuoteIdx];

  const handleNext = () => {
    setActiveQuoteIdx((prev) => (prev === MAHARAJJI_QUOTES.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setActiveQuoteIdx((prev) => (prev === 0 ? MAHARAJJI_QUOTES.length - 1 : prev - 1));
  };

  return (
    <section className="relative py-24 sm:py-32 bg-forest-900 text-white overflow-hidden border-y border-forest-700/60">
      {/* Background Subtle Gradient & Glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-forest-950 via-forest-900 to-forest-950 opacity-95" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gold-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Top Eyebrow & Avatar */}
        <div className="flex flex-col items-center gap-3 mb-6">
          <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden border-2 border-gold-400 p-1 bg-forest-800 shadow-xl">
            <img
              src="https://media.licdn.com/dms/image/v2/D4D12AQF7u-NP-zFThg/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1677346062854?e=2147483647&v=beta&t=yZ-BsS-TJgaRrUUvFpnsYWDiExl9b6KXDsNRkMRG66I"
              alt="Neem Karoli Baba avatar"
              className="w-full h-full object-cover rounded-full"
            />
          </div>

          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-forest-800 text-gold-300 border border-gold-400/30 text-xs font-bold uppercase tracking-[0.25em] shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-gold-400" />
            <span>Sacred Words of Neem Karoli Baba</span>
          </div>
        </div>

        {/* Central Quote Card */}
        <div className="p-8 sm:p-12 rounded-3xl bg-forest-950/85 border border-gold-400/30 shadow-2xl backdrop-blur-md relative">
          <Quote className="w-10 h-10 text-gold-400/30 mx-auto mb-4" />

          {/* Main English Quote */}
          <blockquote className="font-serif text-3xl sm:text-5xl font-normal text-white leading-tight tracking-tight mb-4 drop-shadow-md">
            “{current.quote}”
          </blockquote>

          {/* Hindi Text if available */}
          {current.hindi && (
            <p className="text-sm sm:text-base text-gold-300 font-medium mb-4 tracking-wide">
              {current.hindi}
            </p>
          )}

          {/* Context Note */}
          <p className="text-xs sm:text-sm text-ivory-200/90 font-light max-w-xl mx-auto mb-6">
            {current.context}
          </p>

          <cite className="not-italic text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-gold-400 block border-t border-white/10 pt-4">
            — Param Pujya Neem Karoli Baba (Maharaj-ji)
          </cite>

          {/* Quote Carousel Navigation */}
          <div className="flex items-center justify-between mt-8 pt-4 border-t border-white/10">
            <button
              onClick={handlePrev}
              className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-forest-800 hover:bg-gold-500 hover:text-forest-950 text-white text-xs font-semibold uppercase tracking-wider transition-colors border border-white/10"
              aria-label="Previous quote"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Previous</span>
            </button>

            {/* Quote Dots */}
            <div className="flex items-center gap-1.5">
              {MAHARAJJI_QUOTES.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveQuoteIdx(idx)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    activeQuoteIdx === idx ? 'w-6 bg-gold-400' : 'w-2 bg-white/30'
                  }`}
                  aria-label={`Go to quote ${idx + 1}`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-forest-800 hover:bg-gold-500 hover:text-forest-950 text-white text-xs font-semibold uppercase tracking-wider transition-colors border border-white/10"
              aria-label="Next quote"
            >
              <span>Next</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
