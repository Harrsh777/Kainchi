import React from 'react';
import {
  Clock,
  ShieldAlert,
  Sparkles,
  MapPin,
  Heart,
  Info,
  ArrowRight,
  Plane,
  Train,
  Ticket,
  Compass,
  CheckCircle2,
  Navigation
} from 'lucide-react';

interface VisitInfoProps {
  onOpenPlanner: () => void;
  onNavigateToMap?: () => void;
}

export const VisitInfo: React.FC<VisitInfoProps> = ({ onOpenPlanner, onNavigateToMap }) => {
  return (
    <section id="visit-info" className="py-20 sm:py-28 bg-ivory-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-forest-700 block mb-2">
            ESSENTIAL VISITOR ADVISORY & TRAVEL FACTS
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-light text-charcoal-900 tracking-tight">
            Plan Your Temple Visit
          </h2>
          <p className="text-charcoal-600 text-sm sm:text-base mt-3 leading-relaxed">
            Direct, verified facts on nearest airports, Kathgodam train connectivity, free entry policies, and daily Aarti schedules at Kainchi Dham Ashram.
          </p>
        </div>

        {/* Quick Highlights Strip */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mb-12">
          <div className="p-3.5 rounded-2xl bg-white border border-ivory-300 shadow-sm flex flex-col justify-between">
            <div className="flex items-center gap-2 text-forest-800 mb-1.5">
              <Ticket className="w-4 h-4 text-gold-600" />
              <span className="text-[10px] font-bold uppercase tracking-wider text-charcoal-700">Tickets</span>
            </div>
            <div className="text-xs font-bold text-forest-900">100% Free Entry</div>
            <span className="text-[10px] text-charcoal-500">No VIP passes</span>
          </div>

          <div className="p-3.5 rounded-2xl bg-white border border-ivory-300 shadow-sm flex flex-col justify-between">
            <div className="flex items-center gap-2 text-forest-800 mb-1.5">
              <Train className="w-4 h-4 text-forest-700" />
              <span className="text-[10px] font-bold uppercase tracking-wider text-charcoal-700">Nearest Rail</span>
            </div>
            <div className="text-xs font-bold text-forest-900">Kathgodam (KGM)</div>
            <span className="text-[10px] text-charcoal-500">37 km · 1 hr 15 min</span>
          </div>

          <div className="p-3.5 rounded-2xl bg-white border border-ivory-300 shadow-sm flex flex-col justify-between">
            <div className="flex items-center gap-2 text-forest-800 mb-1.5">
              <Plane className="w-4 h-4 text-sky-700" />
              <span className="text-[10px] font-bold uppercase tracking-wider text-charcoal-700">Nearest Airport</span>
            </div>
            <div className="text-xs font-bold text-forest-900">Pantnagar (PGH)</div>
            <span className="text-[10px] text-charcoal-500">70 km · ~2 hrs drive</span>
          </div>

          <div className="p-3.5 rounded-2xl bg-white border border-ivory-300 shadow-sm flex flex-col justify-between">
            <div className="flex items-center gap-2 text-forest-800 mb-1.5">
              <Navigation className="w-4 h-4 text-amber-700" />
              <span className="text-[10px] font-bold uppercase tracking-wider text-charcoal-700">Highway</span>
            </div>
            <div className="text-xs font-bold text-forest-900">NH 109 Highway</div>
            <span className="text-[10px] text-charcoal-500">Bhowali–Almora Rd</span>
          </div>

          <div className="p-3.5 rounded-2xl bg-white border border-ivory-300 shadow-sm flex flex-col justify-between">
            <div className="flex items-center gap-2 text-forest-800 mb-1.5">
              <Clock className="w-4 h-4 text-forest-800" />
              <span className="text-[10px] font-bold uppercase tracking-wider text-charcoal-700">Daily Hours</span>
            </div>
            <div className="text-xs font-bold text-forest-900">6:30 AM – 7:30 PM</div>
            <span className="text-[10px] text-charcoal-500">Aarti: 7 AM & 6:30 PM</span>
          </div>

          <div className="p-3.5 rounded-2xl bg-white border border-ivory-300 shadow-sm flex flex-col justify-between">
            <div className="flex items-center gap-2 text-forest-800 mb-1.5">
              <Compass className="w-4 h-4 text-emerald-700" />
              <span className="text-[10px] font-bold uppercase tracking-wider text-charcoal-700">Near Places</span>
            </div>
            <div className="text-xs font-bold text-forest-900">Nainital & Bhowali</div>
            <span className="text-[10px] text-charcoal-500">18 km & 8 km</span>
          </div>
        </div>

        {/* 6 Rich Advisory Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          
          {/* Card 1: Tickets & Entry Clarity */}
          <div className="glass-card bg-white p-6 rounded-3xl border border-ivory-300 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
            <div>
              <div className="w-10 h-10 rounded-xl bg-gold-500/15 text-gold-700 flex items-center justify-center mb-4">
                <Ticket className="w-5 h-5" />
              </div>
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-serif text-xl font-medium text-charcoal-900">Kainchi Dham Tickets</h3>
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-emerald-100 text-emerald-800 border border-emerald-200">
                  100% Free Entry
                </span>
              </div>
              <p className="text-xs text-charcoal-600 leading-relaxed mb-3">
                <strong>No entry tickets or VIP passes exist</strong> at Kainchi Dham. Darshan of Maharaj-ji’s sanctum is open and equal for all devotees.
              </p>
              <ul className="space-y-1.5 text-xs text-charcoal-700">
                <li className="flex items-start gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>Entry Fee: <strong>₹0 (Completely Free)</strong></span>
                </li>
                <li className="flex items-start gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>Free sacred Bhandara Prasad (Khichdi & Malpua)</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-rose-600 flex-shrink-0 mt-0.5" />
                  <span>Beware of fraudulent websites selling fake VIP passes</span>
                </li>
              </ul>
            </div>
            <p className="text-[11px] text-charcoal-500 italic mt-4 pt-3 border-t border-ivory-200">
              Devotion and humility are the only requirements.
            </p>
          </div>

          {/* Card 2: Kathgodam Distance & Railhead */}
          <div className="glass-card bg-white p-6 rounded-3xl border border-ivory-300 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
            <div>
              <div className="w-10 h-10 rounded-xl bg-forest-800/10 text-forest-800 flex items-center justify-center mb-4">
                <Train className="w-5 h-5" />
              </div>
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-serif text-xl font-medium text-charcoal-900">Nearest Railway Station</h3>
                <span className="text-xs font-bold text-forest-800">Kathgodam (KGM)</span>
              </div>
              <p className="text-xs text-charcoal-600 leading-relaxed mb-3">
                <strong>Kathgodam Station to Kainchi Dham distance is 37 km</strong> (approx. 1 hour 15 minutes by taxi via Bhowali).
              </p>
              <div className="space-y-2 text-xs text-charcoal-700 bg-ivory-100/80 p-3 rounded-2xl border border-ivory-200">
                <div className="flex justify-between font-medium">
                  <span>New Delhi Shatabdi (12040):</span>
                  <span>06:20 AM → 11:40 AM</span>
                </div>
                <div className="flex justify-between font-medium">
                  <span>Ranikhet Express (15013):</span>
                  <span>10:00 PM → 05:05 AM</span>
                </div>
                <div className="flex justify-between font-medium">
                  <span>Sampark Kranti (15035):</span>
                  <span>04:00 PM → 10:45 PM</span>
                </div>
              </div>
            </div>
            <div className="mt-4 pt-3 border-t border-ivory-200 flex justify-between items-center text-[11px] text-forest-800 font-medium">
              <span>Station Cabs: Sedan ₹1,499 · Ertiga ₹2,199</span>
            </div>
          </div>

          {/* Card 3: Nearest Airport Guide */}
          <div className="glass-card bg-white p-6 rounded-3xl border border-ivory-300 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
            <div>
              <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-700 flex items-center justify-center mb-4">
                <Plane className="w-5 h-5" />
              </div>
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-serif text-xl font-medium text-charcoal-900">Nearest Airport</h3>
                <span className="text-xs font-bold text-sky-800">Pantnagar (PGH)</span>
              </div>
              <p className="text-xs text-charcoal-600 leading-relaxed mb-3">
                <strong>Pantnagar Airport is 70 km away</strong> (~2 to 2.5 hours drive). It connects with daily direct flights from Delhi and Dehradun.
              </p>
              <ul className="space-y-1.5 text-xs text-charcoal-700">
                <li>• <strong>Pantnagar (PGH):</strong> 70 km (Nearest domestic airport)</li>
                <li>• <strong>New Delhi (DEL):</strong> 320 km (Major international gateway)</li>
                <li>• <strong>Bareilly Airport (BEP):</strong> 140 km (~3.5 hrs drive)</li>
                <li>• <strong>Dehradun Airport (DED):</strong> 290 km (~7 hrs drive)</li>
              </ul>
            </div>
            <div className="mt-4 pt-3 border-t border-ivory-200 text-[11px] text-charcoal-600">
              Chauffeur airport transfers available with advance booking.
            </div>
          </div>

          {/* Card 4: Daily Timings & Aarti */}
          <div className="glass-card bg-white p-6 rounded-3xl border border-ivory-300 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
            <div>
              <div className="w-10 h-10 rounded-xl bg-forest-800/10 text-forest-800 flex items-center justify-center mb-4">
                <Clock className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-xl font-medium text-charcoal-900 mb-2">Daily Timings & Aarti</h3>
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
              * Aarti timings shift slightly with winter and summer sunsets.
            </p>
          </div>

          {/* Card 5: Rules & Sanctum Etiquette */}
          <div className="glass-card bg-white p-6 rounded-3xl border border-ivory-300 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
            <div>
              <div className="w-10 h-10 rounded-xl bg-rose-50 text-rose-700 flex items-center justify-center mb-4">
                <ShieldAlert className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-xl font-medium text-charcoal-900 mb-2">Sanctum Rules & Code</h3>
              <ul className="space-y-2 text-xs text-charcoal-600 list-disc list-inside leading-relaxed">
                <li>Modest, respectful attire covering shoulders and knees.</li>
                <li>Leave footwear at the dedicated shoe counters before the bridge.</li>
                <li><strong>Strictly NO photography or videography</strong> inside the inner sanctum.</li>
                <li>Phones on silent mode; no smoking/alcohol in the entire valley.</li>
              </ul>
            </div>
            <div className="mt-4 pt-3 border-t border-ivory-200 flex items-center gap-1.5 text-[11px] text-forest-800 font-medium">
              <Sparkles className="w-3.5 h-3.5 text-gold-500" />
              <span>Preserve the serene spiritual environment</span>
            </div>
          </div>

          {/* Card 6: Location & Road Map */}
          <div className="glass-card bg-white p-6 rounded-3xl border border-ivory-300 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
            <div>
              <div className="w-10 h-10 rounded-xl bg-forest-800/10 text-forest-800 flex items-center justify-center mb-4">
                <MapPin className="w-5 h-5" />
              </div>
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-serif text-xl font-medium text-charcoal-900">Location & Map Coordinates</h3>
                <span className="text-[10px] font-bold text-forest-700 uppercase">NH 109</span>
              </div>
              <p className="text-xs text-charcoal-600 leading-relaxed mb-2">
                Located on Bhowali-Almora Highway, Kainchi, Nainital District, Uttarakhand 263132.
              </p>
              <div className="bg-ivory-100/80 p-2.5 rounded-xl text-xs space-y-1 text-charcoal-700 border border-ivory-200">
                <p><strong>GPS:</strong> 29.4219° N, 79.5167° E</p>
                <p><strong>Bhowali:</strong> 8 km | <strong>Nainital:</strong> 18 km</p>
                <p><strong>Mukteshwar:</strong> 38 km | <strong>Almora:</strong> 65 km</p>
              </div>
            </div>
            <div className="mt-4 pt-3 border-t border-ivory-200 flex justify-between items-center">
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=29.4219,79.5167"
                target="_blank"
                rel="noreferrer"
                className="text-xs text-forest-800 font-bold hover:text-forest-900 flex items-center gap-1"
              >
                <span>Open in Google Maps</span>
                <ArrowRight className="w-3 h-3" />
              </a>
            </div>
          </div>

        </div>

        {/* Visit Assistance Concierge Banner */}
        <div className="bg-forest-800 text-white p-8 sm:p-10 rounded-3xl border border-forest-700 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-2xl relative z-10">
            <div className="flex items-center gap-2 text-gold-300 text-xs font-bold uppercase tracking-wider mb-2">
              <Info className="w-4 h-4 text-gold-400" />
              <span>Independent Pilgrimage Assistance</span>
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl font-normal text-white mb-2 leading-snug">
              Need on-time Kathgodam pickup or verified nearby stay?
            </h3>
            <p className="text-xs sm:text-sm text-ivory-200 leading-relaxed font-light">
              We coordinate verified station transfers from Kathgodam (37 km), comfortable walkable valley stays, and scenic Nainital-Bhimtal-Mukteshwar circuits with licensed hill chauffeurs.
            </p>
          </div>

          <button
            onClick={onOpenPlanner}
            className="flex-shrink-0 inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gold-400 hover:bg-gold-300 text-forest-950 font-bold text-xs uppercase tracking-wider transition-all shadow-lg hover:scale-102 active:scale-98 relative z-10"
          >
            <span>Plan Your Journey</span>
            <ArrowRight className="w-4 h-4 text-forest-950" />
          </button>
        </div>

      </div>
    </section>
  );
};
