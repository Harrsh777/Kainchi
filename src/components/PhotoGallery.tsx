import React, { useState } from 'react';
import { GALLERY_DATA } from '../data/testimonials';
import type { GalleryItem } from '../types';
import { Maximize2, MapPin } from 'lucide-react';

interface PhotoGalleryProps {
  onOpenLightbox: (item: GalleryItem, index: number) => void;
}

export const PhotoGallery: React.FC<PhotoGalleryProps> = ({ onOpenLightbox }) => {
  const [activeFilter, setActiveFilter] = useState<'All' | 'Temple' | 'Mountains'>('All');

  const filteredItems = activeFilter === 'All'
    ? GALLERY_DATA
    : GALLERY_DATA.filter((g) => g.category === activeFilter);

  return (
    <section id="gallery" className="py-20 sm:py-28 bg-ivory-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-forest-700 block mb-2">
              THE ASHRAM IN PLACE
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-light text-charcoal-900 tracking-tight">
              Kainchi Dham as it actually looks
            </h2>
            <p className="text-charcoal-600 text-sm sm:text-base mt-3 leading-relaxed">
              Riverbed, red shikharas, and the forested scissors-bend of the Kumaon hills — the views visitors search for before they travel.
            </p>
          </div>

          {/* Filter Chips */}
          <div className="flex items-center gap-1.5 p-1.5 bg-ivory-200/80 rounded-full border border-ivory-300 w-fit">
            {(['All', 'Temple', 'Mountains'] as const).map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wider transition-all duration-300 ${
                  activeFilter === cat
                    ? 'bg-forest-800 text-ivory-100 shadow-sm'
                    : 'text-charcoal-700 hover:text-charcoal-900 hover:bg-ivory-300/50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Masonry / Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => onOpenLightbox(item, idx)}
              className="group relative h-64 sm:h-72 rounded-3xl overflow-hidden shadow-luxury hover:shadow-2xl transition-all duration-500 cursor-pointer bg-ivory-300"
            >
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5" />

              {/* Overlay Details */}
              <div className="absolute inset-0 p-5 flex flex-col justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 text-white">
                <div className="flex justify-end">
                  <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                </div>

                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-gold-300 block mb-1">
                    {item.category}
                  </span>
                  <h4 className="font-serif text-lg font-medium text-white mb-0.5">
                    {item.title}
                  </h4>
                  <div className="flex items-center gap-1 text-[11px] text-ivory-200">
                    <MapPin className="w-3 h-3 text-gold-400" />
                    <span>{item.location}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
