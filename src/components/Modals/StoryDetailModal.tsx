import React from 'react';
import type { LegacyStory } from '../../types';
import { X, Quote, Sparkles, BookOpen } from 'lucide-react';

interface StoryDetailModalProps {
  story: LegacyStory;
  onClose: () => void;
}

export const StoryDetailModal: React.FC<StoryDetailModalProps> = ({ story, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-forest-950/80 backdrop-blur-md animate-in fade-in duration-300">
      <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-ivory-100 rounded-3xl shadow-2xl border border-ivory-300 p-6 sm:p-10">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-9 h-9 rounded-full bg-ivory-200 text-charcoal-800 hover:bg-forest-800 hover:text-white flex items-center justify-center transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header Eyebrow */}
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-forest-700 mb-2">
          <BookOpen className="w-3.5 h-3.5" />
          <span>Documented Historical Account • {story.year}</span>
        </div>

        <h2 className="font-serif text-3xl sm:text-4xl font-light text-charcoal-900 leading-tight mb-1">
          {story.name}
        </h2>
        <div className="text-xs text-charcoal-500 font-medium mb-6">{story.role} — {story.title}</div>

        {/* Quote Banner */}
        <div className="p-5 rounded-2xl bg-white border border-ivory-300 relative mb-8">
          <Quote className="w-6 h-6 text-gold-500/30 absolute top-3 left-3" />
          <blockquote className="font-serif text-base sm:text-lg text-forest-900 italic pl-6 leading-relaxed">
            {story.quote}
          </blockquote>
        </div>

        {/* Full Story Paragraphs */}
        <div className="space-y-4 text-xs sm:text-sm text-charcoal-700 leading-relaxed font-light mb-8">
          {story.fullStory.map((p, idx) => (
            <p key={idx}>{p}</p>
          ))}
        </div>

        {/* Key Takeaway Box */}
        <div className="p-4 rounded-2xl bg-forest-800/5 border border-forest-800/20 text-xs text-forest-900 flex items-start gap-3">
          <Sparkles className="w-4 h-4 text-gold-600 flex-shrink-0 mt-0.5" />
          <div>
            <strong className="font-semibold block mb-0.5">Key Historical Perspective:</strong>
            <span className="text-charcoal-700 font-light">{story.keyTakeaway}</span>
          </div>
        </div>

        <div className="mt-8 pt-4 border-t border-ivory-300 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-full bg-forest-800 text-ivory-100 text-xs font-semibold uppercase tracking-wider hover:bg-forest-700 transition-colors"
          >
            Close Story
          </button>
        </div>

      </div>
    </div>
  );
};
