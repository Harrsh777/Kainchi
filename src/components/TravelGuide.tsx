import React, { useState } from 'react';
import { TRAVEL_GUIDE_DATA } from '../data/travelGuide';
import type { GuideArticle } from '../types';
import { Clock, ChevronRight, X } from 'lucide-react';

export const TravelGuide: React.FC = () => {
  const [selectedArticle, setSelectedArticle] = useState<GuideArticle | null>(null);

  return (
    <section id="travel-guide" className="py-20 sm:py-28 bg-ivory-200/50 border-y border-ivory-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-forest-700 block mb-2">
              KNOWLEDGE & TIPS
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-light text-charcoal-900 tracking-tight">
              Before you go.
            </h2>
            <p className="text-charcoal-600 text-sm sm:text-base mt-3 leading-relaxed">
              Curated logistical insights, weather advisory, and respectful temple practices to help you prepare for a seamless pilgrimage.
            </p>
          </div>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TRAVEL_GUIDE_DATA.map((article) => (
            <div
              key={article.id}
              className="glass-card bg-white rounded-3xl overflow-hidden border border-ivory-300 shadow-luxury hover:shadow-luxury-hover transition-all duration-300 flex flex-col justify-between group cursor-pointer"
              onClick={() => setSelectedArticle(article)}
            >
              <div>
                <div className="relative h-44 overflow-hidden bg-ivory-200">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase bg-forest-900/80 text-gold-300 backdrop-blur-md border border-white/10">
                      {article.category}
                    </span>
                  </div>

                  <div className="absolute bottom-3 left-3 right-3 text-xs text-white/90 flex items-center gap-1 font-medium">
                    <Clock className="w-3.5 h-3.5 text-gold-400" />
                    <span>{article.readTime}</span>
                  </div>
                </div>

                <div className="p-5">
                  <h3 className="font-serif text-lg font-medium text-charcoal-900 group-hover:text-forest-800 transition-colors mb-2 leading-snug">
                    {article.title}
                  </h3>
                  <p className="text-xs text-charcoal-600 line-clamp-3 leading-relaxed font-light">
                    {article.summary}
                  </p>
                </div>
              </div>

              <div className="p-5 pt-0">
                <div className="flex items-center justify-between text-xs font-semibold text-forest-800 uppercase tracking-wider group-hover:text-gold-600 transition-colors">
                  <span>Read Guide</span>
                  <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Article Detail Reader Modal */}
      {selectedArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-forest-950/80 backdrop-blur-md animate-in fade-in duration-300">
          <div className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto bg-ivory-100 rounded-3xl shadow-2xl border border-ivory-300 p-6 sm:p-8">
            <button
              onClick={() => setSelectedArticle(null)}
              className="absolute top-5 right-5 w-9 h-9 rounded-full bg-ivory-200 text-charcoal-800 hover:bg-forest-800 hover:text-white flex items-center justify-center transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-forest-700 mb-2">
              <span>{selectedArticle.category}</span>
              <span>•</span>
              <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {selectedArticle.readTime}</span>
            </div>

            <h2 className="font-serif text-2xl sm:text-3xl font-normal text-charcoal-900 mb-4">
              {selectedArticle.title}
            </h2>

            <p className="text-sm text-charcoal-700 leading-relaxed font-medium pb-6 border-b border-ivory-300">
              {selectedArticle.summary}
            </p>

            <div className="space-y-6 my-6">
              {selectedArticle.sections.map((sec, idx) => (
                <div key={idx} className="p-4 rounded-2xl bg-white border border-ivory-300">
                  <h3 className="font-serif text-lg font-medium text-forest-900 mb-1.5">
                    {sec.heading}
                  </h3>
                  <p className="text-xs sm:text-sm text-charcoal-700 leading-relaxed font-light">
                    {sec.content}
                  </p>
                </div>
              ))}
            </div>

            <div className="pt-4 border-t border-ivory-300 flex justify-end">
              <button
                onClick={() => setSelectedArticle(null)}
                className="px-6 py-2.5 rounded-full bg-forest-800 text-ivory-100 text-xs font-semibold uppercase tracking-wider"
              >
                Close Article
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
