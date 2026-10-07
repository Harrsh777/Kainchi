import React from 'react';
import { MapPin, Clock, ArrowRight, Compass, Sparkles } from 'lucide-react';
import { SITE_IMAGES } from '../data/siteImages';

interface NearbyPlace {
  id: string;
  name: string;
  distance: string;
  driveTime: string;
  tag: string;
  description: string;
  highlights: string[];
  image: string;
}

const NEARBY_PLACES: NearbyPlace[] = [
  {
    id: 'bhowali',
    name: 'Bhowali Fruit Market & Hills',
    distance: '8 km',
    driveTime: '~15 min',
    tag: 'Fruit Belt & Stays',
    description: 'The central crossroads town known for apple, apricot, and plum orchards. Ideal base with pharmacies, ATMs, and pleasant pine views.',
    highlights: ['Kumaon Fruit Market', 'T.B. Sanatorium Heritage', 'Scenic valley viewpoints'],
    image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 'golu-devta',
    name: 'Golu Devta Temple (Ghorakhal)',
    distance: '14 km',
    driveTime: '~30 min',
    tag: 'Temple of Bells',
    description: 'Dedicated to Golu Devta, revered as the God of Justice. Devotees hang brass bells and written petitions to seek justice and blessings.',
    highlights: ['Thousands of brass bells', 'Sainik School Ghorakhal', 'Deeply sacred Kumaoni heritage'],
    image: SITE_IMAGES.riverTemple,
  },
  {
    id: 'nainital',
    name: 'Nainital & Naini Lake',
    distance: '18 km',
    driveTime: '~45 min',
    tag: 'Lakeside Town',
    description: 'The historic hill station nestled around emerald Naini Lake. Visit the ancient Maa Naina Devi Shaktipeeth and stroll along the lively Mall Road.',
    highlights: ['Naini Lake Boating', 'Maa Naina Devi Temple', 'Mall Road & Tibetan Market'],
    image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 'bhimtal',
    name: 'Bhimtal Lake & Island',
    distance: '20 km',
    driveTime: '~45 min',
    tag: 'Peaceful Water',
    description: 'A quieter, larger lake than Nainital with an island aquarium in its center. Great for peaceful evening walks and lakeside dining.',
    highlights: ['Island Aquarium Cafe', 'Victorian Dam & Temple', 'Water zorbing & kayaking'],
    image: SITE_IMAGES.earlyMorning,
  },
  {
    id: 'mukteshwar',
    name: 'Mukteshwar & Chauli Ki Jali',
    distance: '38 km',
    driveTime: '~1.5 hrs',
    tag: 'Himalayan Ridge',
    description: 'Perched at 7,500 ft with 180° panoramic views of snow-capped peaks (Nanda Devi, Trishul) and the 350-year-old Mukteshwar Mahadev Dham.',
    highlights: ['350-yr-old Shiva Temple', 'Chauli Ki Jali cliff', '180° Himalayan snow panorama'],
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 'sattal',
    name: 'Sattal (Seven Lakes)',
    distance: '24 km',
    driveTime: '~55 min',
    tag: 'Untouched Nature',
    description: 'An interconnected group of seven freshwater lakes nestled among dense oak and pine forests. A paradise for birdwatchers and quiet reflection.',
    highlights: ['7 Interconnected Lakes', 'Over 500 bird species', 'Kayaking & forest trails'],
    image: SITE_IMAGES.courtyardAerial,
  },
];

interface NearbyPlacesSectionProps {
  onPlanTrip?: () => void;
  onNavigateToNearby?: () => void;
}

export const NearbyPlacesSection: React.FC<NearbyPlacesSectionProps> = ({ onPlanTrip, onNavigateToNearby }) => {
  return (
    <section id="nearby-places" className="py-20 sm:py-28 bg-ivory-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-forest-700 block mb-2">
              KUMAON PILGRIMAGE & SIGHTSEEING CIRCUIT
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-light text-charcoal-900 tracking-tight">
              Places to Visit Near Kainchi Dham
            </h2>
            <p className="text-charcoal-600 text-sm sm:text-base mt-3 leading-relaxed">
              Combine your temple darshan with the serene lakes of Nainital & Bhimtal, the sacred bells of Golu Devta, and the majestic Himalayan peaks of Mukteshwar.
            </p>
          </div>

          {onNavigateToNearby && (
            <button
              onClick={onNavigateToNearby}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-forest-800 hover:bg-forest-700 text-ivory-100 text-xs font-semibold uppercase tracking-wider transition-all shadow-sm"
            >
              <span>Explore All 9 Nearby Places</span>
              <ArrowRight className="w-3.5 h-3.5 text-gold-400" />
            </button>
          )}
        </div>

        {/* 6 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {NEARBY_PLACES.map((place) => (
            <div
              key={place.id}
              className="glass-card bg-white rounded-3xl overflow-hidden border border-ivory-300 shadow-luxury hover:shadow-luxury-hover transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Visual Image Header */}
                <div className="relative h-48 overflow-hidden bg-forest-950">
                  <img
                    src={place.image}
                    alt={place.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-950/80 via-transparent to-transparent" />

                  <div className="absolute top-3 left-3">
                    <span className="px-3 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase bg-forest-900/80 text-gold-300 backdrop-blur-md border border-white/10">
                      {place.tag}
                    </span>
                  </div>

                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-white">
                    <span className="flex items-center gap-1 font-semibold">
                      <MapPin className="w-3.5 h-3.5 text-gold-400" />
                      {place.distance} from Ashram
                    </span>
                    <span className="flex items-center gap-1 text-ivory-200">
                      <Clock className="w-3.5 h-3.5 text-gold-400" />
                      {place.driveTime}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-serif text-xl font-medium text-charcoal-900 mb-2 group-hover:text-forest-800 transition-colors">
                    {place.name}
                  </h3>
                  <p className="text-xs text-charcoal-600 leading-relaxed font-light mb-4">
                    {place.description}
                  </p>

                  <div className="space-y-1.5 border-t border-ivory-200 pt-3">
                    {place.highlights.map((h, i) => (
                      <div key={i} className="flex items-center gap-1.5 text-[11px] text-charcoal-700">
                        <Sparkles className="w-3 h-3 text-gold-600 flex-shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer */}
              <div className="p-6 pt-0">
                <button
                  onClick={onPlanTrip}
                  className="w-full py-2.5 rounded-xl bg-ivory-100 group-hover:bg-forest-800 text-charcoal-800 group-hover:text-ivory-100 text-xs font-semibold uppercase tracking-wider transition-all flex items-center justify-center gap-1.5 border border-ivory-300 group-hover:border-forest-800"
                >
                  <span>Add to Trip Itinerary</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Suggested Circuit Banner */}
        <div className="mt-12 bg-white rounded-3xl p-6 sm:p-8 border border-ivory-300 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-forest-700 text-xs font-bold uppercase tracking-wider mb-1">
              <Compass className="w-4 h-4 text-forest-800" />
              <span>Recommended 2–3 Day Pilgrimage Circuit</span>
            </div>
            <h4 className="font-serif text-xl sm:text-2xl font-medium text-charcoal-900 mb-2">
              Kainchi Dham ➔ Bhowali ➔ Golu Devta ➔ Nainital / Mukteshwar
            </h4>
            <p className="text-xs text-charcoal-600 leading-relaxed font-light">
              Day 1: Arrival from Kathgodam (37 km) ➔ Evening Aarti at Kainchi Dham. Day 2: Morning Darshan & Prasad ➔ Golu Devta Temple ➔ Nainital Lake or Mukteshwar snow peaks.
            </p>
          </div>

          <button
            onClick={onPlanTrip}
            className="flex-shrink-0 px-6 py-3 rounded-full bg-forest-800 hover:bg-forest-700 text-ivory-100 text-xs font-semibold uppercase tracking-wider transition-colors shadow-sm"
          >
            Customize Circuit Plan
          </button>
        </div>

      </div>
    </section>
  );
};
