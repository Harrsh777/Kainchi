import React from 'react';
import { Sparkles, ArrowRight, ShieldCheck, Sun, Mountain, Compass } from 'lucide-react';
import { motion } from 'framer-motion';

interface HeroProps {
  onExploreStays: () => void;
  onPlanTrip: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreStays, onPlanTrip }) => {
  return (
    <section className="relative min-h-[92vh] sm:min-h-screen flex items-center justify-center overflow-hidden bg-forest-900 text-ivory-100">
      {/* Background Image with Cinematic Gradient Overlays */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=2000&auto=format&fit=crop"
          alt="Himalayan valley and mountains near Kainchi Dham"
          className="w-full h-full object-cover object-center scale-105 animate-pulse duration-[10000ms]"
        />
        {/* Editorial Gradients for high contrast and calm mood */}
        <div className="absolute inset-0 bg-gradient-to-r from-forest-900/90 via-forest-900/60 to-forest-900/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-900 via-transparent to-black/40" />
        <div className="absolute inset-0 bg-subtle-radial opacity-60 pointer-events-none" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 sm:py-36 w-full">
        <div className="max-w-3xl">
          {/* Eyebrow & Badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap items-center gap-2 sm:gap-3 mb-5 sm:mb-6"
          >
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold uppercase tracking-[0.2em] bg-white/10 text-gold-300 backdrop-blur-md border border-white/15">
              <Mountain className="w-3.5 h-3.5 text-gold-400" />
              KAINCHI DHAM • UTTARAKHAND
            </span>
            <span className="hidden sm:inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-medium tracking-wide bg-forest-800/60 text-ivory-300 backdrop-blur-md border border-forest-600/30">
              <Sun className="w-3 h-3 text-gold-300" />
              1,400m Elevation • Kumaon Hills
            </span>
          </motion.div>

          {/* Main Editorial Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-serif text-4xl sm:text-6xl lg:text-7xl font-light text-white tracking-tight leading-[1.1] mb-6 sm:mb-8"
          >
            A journey worth taking.
            <span className="block text-ivory-300 font-normal italic text-2xl sm:text-4xl lg:text-5xl mt-2 font-serif">
              Thoughtfully planned.
            </span>
          </motion.h1>

          {/* Supporting Text */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-base sm:text-lg lg:text-xl text-ivory-200/90 font-light leading-relaxed max-w-2xl mb-8 sm:mb-10 font-sans"
          >
            Discover serene stays, trusted mountain chauffeurs, meaningful local experiences, and essential travel assistance for your sacred pilgrimage to Kainchi Dham.
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10 sm:mb-12"
          >
            <button
              onClick={onExploreStays}
              className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-ivory-100 text-forest-900 font-semibold text-sm uppercase tracking-wider hover:bg-gold-300 transition-all duration-300 shadow-elevated hover:shadow-2xl transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>Explore Stays</span>
              <ArrowRight className="w-4 h-4 text-forest-800" />
            </button>

            <button
              onClick={onPlanTrip}
              className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-forest-800/80 hover:bg-forest-700/90 text-ivory-100 font-medium text-sm uppercase tracking-wider backdrop-blur-md border border-white/20 transition-all duration-300 hover:border-gold-400"
            >
              <Sparkles className="w-4 h-4 text-gold-400" />
              <span>Plan My Journey</span>
            </button>
          </motion.div>

          {/* Trust Line */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-ivory-300/80 pt-6 border-t border-white/10 font-medium"
          >
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-gold-400" />
              <span>Curated Stays</span>
            </div>
            <span className="hidden sm:inline text-white/20">•</span>
            <div className="flex items-center gap-2">
              <Compass className="w-4 h-4 text-gold-400" />
              <span>Reliable Transfers</span>
            </div>
            <span className="hidden sm:inline text-white/20">•</span>
            <div className="flex items-center gap-2">
              <span>Local Travel Assistance</span>
            </div>
            <span className="hidden sm:inline text-white/20">•</span>
            <div className="flex items-center gap-2">
              <span>Kumaon Experiences</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
