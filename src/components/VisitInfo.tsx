import React from 'react';
import { Clock, ShieldAlert, Sparkles, MapPin, Heart, Info, ArrowRight } from 'lucide-react';

interface VisitInfoProps {
  onOpenPlanner: () => void;
}

export const VisitInfo: React.FC<VisitInfoProps> = ({ onOpenPlanner }) => {
  return (
    <section id="visit-info" className="py-20 sm:py-28 bg-ivory-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-14">
          <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-forest-700 block mb-2">
            ESSENTIAL VISITOR ADVISORY
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-light text-charcoal-900 tracking-tight">
            Plan Your Temple Visit
          </h2>
          <p className="text-charcoal-600 text-sm sm:text-base mt-3 leading-relaxed">
            Kainchi Dham Ashram is open to all seekers free of charge. We provide logistical assistance, nearby accommodations, and punctual local transfers to ensure your visit is peaceful.
          </p>
        </div>

        {/* 4 Informational Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          
          {/* Card 1: Timings */}
          <div className="glass-card bg-white p-6 rounded-3xl border border-ivory-300 shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-forest-800/10 text-forest-800 flex items-center justify-center mb-4">
                <Clock className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-xl font-medium text-charcoal-900 mb-2">Daily Timings</h3>
              <div className="space-y-2 text-xs text-charcoal-600">
                <div className="flex justify-between py-1 border-b border-ivory-200">
                  <span className="font-semibold text-charcoal-800">Gates Open:</span>
                  <span>6:30 AM</span>
                </div>
                <div className="flex justify-between py-1 border-b border-ivory-200">
                  <span className="font-semibold text-charcoal-800">Morning Aarti:</span>
                  <span>~7:00 AM</span>
                </div>
                <div className="flex justify-between py-1 border-b border-ivory-200">
                  <span className="font-semibold text-charcoal-800">Evening Aarti:</span>
                  <span>~6:30 PM</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="font-semibold text-charcoal-800">Gates Close:</span>
                  <span>~7:30 PM</span>
                </div>
              </div>
            </div>
            <p className="text-[11px] text-charcoal-500 italic mt-4 pt-3 border-t border-ivory-200">
              * Aarti timings shift slightly with winter/summer sunsets.
            </p>
          </div>

          {/* Card 2: Sanctum & Etiquette */}
          <div className="glass-card bg-white p-6 rounded-3xl border border-ivory-300 shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-gold-500/15 text-gold-700 flex items-center justify-center mb-4">
                <Heart className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-xl font-medium text-charcoal-900 mb-2">Sanctum Etiquette</h3>
              <ul className="space-y-2 text-xs text-charcoal-600 list-disc list-inside leading-relaxed">
                <li>Modest, comfortable attire covering shoulders and knees.</li>
                <li>Leave footwear at the dedicated counters before the bridge.</li>
                <li>Maintain quiet reflection inside Maharaj-ji’s meditation room.</li>
                <li>Hanuman Chalisa booklets available for prayer.</li>
              </ul>
            </div>
            <div className="mt-4 pt-3 border-t border-ivory-200 flex items-center gap-1.5 text-[11px] text-forest-800 font-medium">
              <Sparkles className="w-3.5 h-3.5 text-gold-500" />
              <span>Sacred Prasad shared with all</span>
            </div>
          </div>

          {/* Card 3: Photography & Devices */}
          <div className="glass-card bg-white p-6 rounded-3xl border border-ivory-300 shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-rose-50 text-rose-700 flex items-center justify-center mb-4">
                <ShieldAlert className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-xl font-medium text-charcoal-900 mb-2">Rules & Restrictions</h3>
              <ul className="space-y-2 text-xs text-charcoal-600 list-disc list-inside leading-relaxed">
                <li>Strictly NO photography or videography inside inner sanctum.</li>
                <li>Mobile phones must be turned silent inside temple gates.</li>
                <li>Strictly no smoking, alcohol, or non-vegetarian food in valley.</li>
                <li>Drone photography strictly prohibited without police permit.</li>
              </ul>
            </div>
            <p className="text-[11px] text-charcoal-500 italic mt-4 pt-3 border-t border-ivory-200">
              Preserve the sacred atmosphere for all devotees.
            </p>
          </div>

          {/* Card 4: Location & Access */}
          <div className="glass-card bg-white p-6 rounded-3xl border border-ivory-300 shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-forest-800/10 text-forest-800 flex items-center justify-center mb-4">
                <MapPin className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-xl font-medium text-charcoal-900 mb-2">Location & Transit</h3>
              <div className="space-y-2 text-xs text-charcoal-600 leading-relaxed">
                <p>Located on the NH 109 Highway connecting Bhowali (8 km) and Almora (54 km).</p>
                <p className="font-medium text-charcoal-800">Kathgodam Station: 37 km (1.2 hrs)</p>
                <p className="font-medium text-charcoal-800">Pantnagar Airport: 72 km (2.1 hrs)</p>
              </div>
            </div>
            <div className="mt-4 pt-3 border-t border-ivory-200">
              <span className="text-[11px] text-forest-800 font-semibold">Chauffeur pick & drop available</span>
            </div>
          </div>

        </div>

        {/* Visit Assistance Concierge Banner (Green background with crisp high-contrast text) */}
        <div className="bg-forest-800 text-white p-8 sm:p-10 rounded-3xl border border-forest-700 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8 relative overflow-hidden">
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-2xl relative z-10">
            <div className="flex items-center gap-2 text-gold-300 text-xs font-bold uppercase tracking-wider mb-2">
              <Info className="w-4 h-4 text-gold-400" />
              <span>Independent Pilgrimage Support</span>
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl font-normal text-white mb-2 leading-snug">
              Need assistance planning your Kainchi Dham visit?
            </h3>
            <p className="text-xs sm:text-sm text-ivory-200 leading-relaxed font-light">
              We arrange on-time chauffeur transit from Kathgodam Station, comfortable walkable stays, wheelchairs for elderly devotees, and daily Aarti visit coordination.
            </p>
          </div>

          <button
            onClick={onOpenPlanner}
            className="flex-shrink-0 inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gold-400 hover:bg-gold-300 text-forest-950 font-bold text-xs uppercase tracking-wider transition-all shadow-lg hover:scale-102 active:scale-98 relative z-10"
          >
            <span>Get Visit Assistance</span>
            <ArrowRight className="w-4 h-4 text-forest-950" />
          </button>
        </div>

      </div>
    </section>
  );
};
