import React from 'react';
import { STORIES_DATA } from '../data/stories';
import type { LegacyStory } from '../types';
import { BookOpen, ArrowRight, Quote } from 'lucide-react';

interface LegacyStoriesProps {
  onSelectStory: (story: LegacyStory) => void;
}

export const LegacyStories: React.FC<LegacyStoriesProps> = ({ onSelectStory }) => {
  return (
    <section id="legacy-stories" className="py-20 sm:py-28 bg-ivory-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-forest-700 block mb-2">
            DOCUMENTED ACCOUNTS
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-light text-charcoal-900 tracking-tight">
            Stories of Service & Reflection
          </h2>
          <p className="text-charcoal-600 text-sm sm:text-base mt-3 leading-relaxed">
            Documented historical journeys of thinkers, leaders, and humanitarians whose time in the Kumaon valley shaped their life missions.
          </p>
        </div>

        {/* Stories Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {STORIES_DATA.map((story) => (
            <div
              key={story.id}
              className="glass-card bg-white rounded-3xl overflow-hidden border border-ivory-300 shadow-luxury hover:shadow-luxury-hover transition-all duration-300 flex flex-col justify-between group cursor-pointer"
              onClick={() => onSelectStory(story)}
            >
              <div>
                {/* Image & Year Badge */}
                <div className="relative h-48 overflow-hidden bg-forest-900">
                  <img
                    src={story.image}
                    alt={story.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase bg-white/20 text-white backdrop-blur-md border border-white/20">
                      {story.year}
                    </span>
                  </div>

                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <h3 className="font-serif text-xl font-medium text-white">{story.name}</h3>
                    <p className="text-[11px] text-ivory-300 font-light truncate">{story.role}</p>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <div className="text-xs font-semibold text-forest-800 uppercase tracking-wider mb-2">
                    {story.title}
                  </div>
                  
                  <p className="text-xs text-charcoal-600 leading-relaxed line-clamp-3 mb-4 font-light">
                    {story.summary}
                  </p>

                  <div className="p-3 rounded-xl bg-ivory-100 border border-ivory-200 text-charcoal-700 italic text-[11px] relative mb-4">
                    <Quote className="w-3.5 h-3.5 text-gold-500 absolute -top-1.5 -left-1 opacity-70" />
                    <span className="line-clamp-2">“{story.quote.replace(/[“”]/g, '')}”</span>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="px-5 pb-5 pt-0">
                <button
                  type="button"
                  className="w-full py-2.5 rounded-xl bg-forest-800/10 group-hover:bg-forest-800 text-forest-800 group-hover:text-ivory-100 text-xs font-semibold uppercase tracking-wider transition-colors flex items-center justify-center gap-1.5"
                >
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>Read Article</span>
                  <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
