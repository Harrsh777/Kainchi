import React from 'react';
import { KainchiMap } from './KainchiMap';
import type { Stay } from '../types';
import { MapPin, Navigation, Compass, ExternalLink, ArrowRight } from 'lucide-react';

interface LandingMapSectionProps {
  onSelectStay?: (stay: Stay) => void;
  onBookTaxi?: () => void;
}

export const LandingMapSection: React.FC<LandingMapSectionProps> = ({ onSelectStay, onBookTaxi }) => {
  return (
    <section id="kainchi-map" className="py-20 sm:py-28 bg-ivory-200/60 border-y border-ivory-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div className="max-w-2xl">
            <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-forest-700 block mb-2">
              INTERACTIVE GEOGRAPHY & ROUTE MAP
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-light text-charcoal-900 tracking-tight">
              Kainchi Dham Map & Location Guide
            </h2>
            <p className="text-charcoal-600 text-sm sm:text-base mt-3 leading-relaxed">
              Explore the sacred valley, Kathgodam railhead (37 km), Pantnagar airport (70 km), nearby hill stations, and verified walkable stays on our interactive map.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=29.4219,79.5167"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-forest-800 hover:bg-forest-700 text-ivory-100 text-xs font-semibold uppercase tracking-wider transition-colors shadow-sm"
            >
              <Navigation className="w-3.5 h-3.5 text-gold-400" />
              <span>Open in Google Maps</span>
              <ExternalLink className="w-3 h-3 text-ivory-300" />
            </a>
          </div>
        </div>

        {/* Quick Distance Badges Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-3 mb-8">
          <div className="bg-white p-3 rounded-2xl border border-ivory-300 text-center shadow-xs">
            <span className="text-[10px] text-charcoal-500 uppercase font-semibold block">From Kathgodam</span>
            <strong className="text-sm text-forest-900 font-bold block">37 km</strong>
            <span className="text-[10px] text-charcoal-600">~1 hr 15 min</span>
          </div>

          <div className="bg-white p-3 rounded-2xl border border-ivory-300 text-center shadow-xs">
            <span className="text-[10px] text-charcoal-500 uppercase font-semibold block">From Pantnagar</span>
            <strong className="text-sm text-sky-900 font-bold block">70 km</strong>
            <span className="text-[10px] text-charcoal-600">~2 to 2.5 hrs</span>
          </div>

          <div className="bg-white p-3 rounded-2xl border border-ivory-300 text-center shadow-xs">
            <span className="text-[10px] text-charcoal-500 uppercase font-semibold block">From Nainital</span>
            <strong className="text-sm text-forest-900 font-bold block">18 km</strong>
            <span className="text-[10px] text-charcoal-600">~45 min</span>
          </div>

          <div className="bg-white p-3 rounded-2xl border border-ivory-300 text-center shadow-xs">
            <span className="text-[10px] text-charcoal-500 uppercase font-semibold block">From Bhowali</span>
            <strong className="text-sm text-forest-900 font-bold block">8 km</strong>
            <span className="text-[10px] text-charcoal-600">~15 min</span>
          </div>

          <div className="bg-white p-3 rounded-2xl border border-ivory-300 text-center shadow-xs">
            <span className="text-[10px] text-charcoal-500 uppercase font-semibold block">From Mukteshwar</span>
            <strong className="text-sm text-forest-900 font-bold block">38 km</strong>
            <span className="text-[10px] text-charcoal-600">~1.5 hrs</span>
          </div>

          <div className="bg-white p-3 rounded-2xl border border-ivory-300 text-center shadow-xs">
            <span className="text-[10px] text-charcoal-500 uppercase font-semibold block">From Delhi NCR</span>
            <strong className="text-sm text-forest-900 font-bold block">320 km</strong>
            <span className="text-[10px] text-charcoal-600">~6.5 to 7.5 hrs</span>
          </div>
        </div>

        {/* Interactive Leaflet Map Component */}
        <div className="bg-white p-4 sm:p-6 rounded-3xl border border-ivory-300 shadow-luxury">
          <KainchiMap
            onSelectStay={onSelectStay}
            onBookTaxi={onBookTaxi}
            heightClass="h-[480px] sm:h-[560px]"
          />
        </div>

        {/* Key Route Insights Beneath Map */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-5 rounded-2xl bg-white border border-ivory-300">
            <div className="flex items-center gap-2 text-forest-800 font-bold text-xs uppercase tracking-wider mb-2">
              <MapPin className="w-4 h-4 text-forest-700" />
              <span>Exact Coordinates & Address</span>
            </div>
            <p className="text-xs text-charcoal-700 leading-relaxed font-light">
              Kainchi Dham, NH 109 (Bhowali-Almora Highway), Nainital District, Uttarakhand 263132.<br />
              <strong className="font-semibold text-charcoal-900">GPS: 29.4219° N, 79.5167° E</strong> (Elevation: 1,400 m / 4,600 ft).
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-ivory-300">
            <div className="flex items-center gap-2 text-forest-800 font-bold text-xs uppercase tracking-wider mb-2">
              <Compass className="w-4 h-4 text-gold-600" />
              <span>Scissors Bend Landscape</span>
            </div>
            <p className="text-xs text-charcoal-700 leading-relaxed font-light">
              "Kainchi" translates to scissors in Hindi, named after the two sharp hairpin bends flanking the Kshipra river valley where Maharaj-ji established the ashram in 1964.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-ivory-300">
            <div className="flex items-center gap-2 text-forest-800 font-bold text-xs uppercase tracking-wider mb-2">
              <Navigation className="w-4 h-4 text-sky-700" />
              <span>Smooth Hill Highway (NH 109)</span>
            </div>
            <p className="text-xs text-charcoal-700 leading-relaxed font-light">
              The highway is well-paved 2-lane mountain tarmac. Wide passing points and safety barriers make it accessible year-round for all cars, SUVs, and tempos.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
