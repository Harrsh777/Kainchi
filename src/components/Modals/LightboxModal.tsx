import React from 'react';
import type { GalleryItem } from '../../types';
import { X, ChevronLeft, ChevronRight, MapPin } from 'lucide-react';

interface LightboxModalProps {
  items: GalleryItem[];
  currentIndex: number;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  items,
  currentIndex,
  onClose,
  onNext,
  onPrev,
}) => {
  const current = items[currentIndex];

  if (!current) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-forest-950/95 backdrop-blur-xl animate-in fade-in duration-300">
      
      {/* Top Bar */}
      <div className="absolute top-6 left-6 right-6 flex items-center justify-between z-20 text-white">
        <div className="flex items-center gap-2">
          <span className="text-xs font-bold uppercase tracking-wider text-gold-300">
            {current.category}
          </span>
          <span className="text-white/40">•</span>
          <span className="text-xs text-ivory-200">
            {currentIndex + 1} of {items.length}
          </span>
        </div>

        <button
          onClick={onClose}
          className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Main Image View */}
      <div className="relative max-w-5xl max-h-[80vh] flex flex-col items-center justify-center">
        <img
          src={current.imageUrl}
          alt={current.title}
          className="max-h-[72vh] w-auto max-w-full object-contain rounded-2xl shadow-2xl"
        />

        {/* Caption */}
        <div className="mt-4 text-center text-white">
          <h3 className="font-serif text-xl sm:text-2xl font-light text-white mb-1">
            {current.title}
          </h3>
          <div className="flex items-center justify-center gap-1.5 text-xs text-ivory-300">
            <MapPin className="w-3.5 h-3.5 text-gold-400" />
            <span>{current.location}</span>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={onPrev}
        className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-gold-500 hover:text-forest-950 text-white flex items-center justify-center transition-colors"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={onNext}
        className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-gold-500 hover:text-forest-950 text-white flex items-center justify-center transition-colors"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

    </div>
  );
};
