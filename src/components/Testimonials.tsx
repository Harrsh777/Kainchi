import React, { useState } from 'react';
import { TESTIMONIALS_DATA } from '../data/testimonials';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? TESTIMONIALS_DATA.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === TESTIMONIALS_DATA.length - 1 ? 0 : prev + 1));
  };

  const current = TESTIMONIALS_DATA[activeIndex];

  return (
    <section className="py-20 sm:py-28 bg-forest-900 text-ivory-100 relative overflow-hidden">
      <div className="absolute inset-0 bg-subtle-radial opacity-50 pointer-events-none" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-gold-300 block mb-2">
            PILGRIM EXPERIENCES
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-light text-white">
            Words from our travelers
          </h2>
        </div>

        {/* Carousel Card */}
        <div className="glass-dark bg-forest-800/80 rounded-3xl p-8 sm:p-12 border border-white/10 shadow-2xl backdrop-blur-xl relative">
          <Quote className="w-12 h-12 text-gold-400/20 absolute top-8 left-8" />
          
          <div className="relative z-10 text-center max-w-2xl mx-auto">
            {/* Stars */}
            <div className="flex items-center justify-center gap-1 mb-6">
              {[...Array(current.rating)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-gold-400 text-gold-400" />
              ))}
            </div>

            {/* Testimonial Quote */}
            <p className="font-serif text-lg sm:text-2xl text-ivory-100 font-light leading-relaxed mb-8 italic">
              “{current.content}”
            </p>

            {/* Author */}
            <div>
              <div className="font-semibold text-white text-base">{current.author}</div>
              <div className="text-xs text-gold-300 mt-0.5">{current.role} • {current.location}</div>
              <div className="text-[11px] text-ivory-300/70 mt-1 uppercase tracking-wider">{current.visitType} • {current.date}</div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <div className="flex items-center justify-between mt-8 pt-6 border-t border-white/10">
            <button
              onClick={handlePrev}
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-gold-500 hover:text-forest-950 text-white flex items-center justify-center transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Dots */}
            <div className="flex items-center gap-2">
              {TESTIMONIALS_DATA.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    activeIndex === idx ? 'w-6 bg-gold-400' : 'w-2 bg-white/20'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-gold-500 hover:text-forest-950 text-white flex items-center justify-center transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
