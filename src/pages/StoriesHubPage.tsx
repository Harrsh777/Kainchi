import React from 'react';
import { BookOpen, Quote, Sparkles, ArrowRight } from 'lucide-react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { SEOInternalLinks } from '../components/SEOInternalLinks';
import { SEOHead } from '../seo/SEOHead';
import { SEO_ROUTES } from '../seo/seoData';
import { generateArticleSchema, generateFAQSchema } from '../seo/schemas';
import { STORIES_DATA } from '../data/stories';
import type { LegacyStory } from '../types';

interface StoriesHubPageProps {
  onNavigate: (url: string) => void;
  onSelectStory: (story: LegacyStory) => void;
}

export const StoriesHubPage: React.FC<StoriesHubPageProps> = ({ onNavigate, onSelectStory }) => {
  const meta = SEO_ROUTES['/stories'];

  const articleSchema = generateArticleSchema({
    headline: meta.title,
    description: meta.description,
    url: meta.canonicalUrl,
    datePublished: meta.publishedTime,
    dateModified: meta.modifiedTime,
    authorName: meta.author,
  });

  const faqSchema = meta.faqs ? generateFAQSchema(meta.faqs) : undefined;

  return (
    <div className="pt-24 pb-20 px-4 md:px-8 max-w-7xl mx-auto">
      <SEOHead
        title={meta.title}
        description={meta.description}
        canonicalUrl={meta.canonicalUrl}
        keywords={meta.secondaryKeywords}
        ogType="article"
        breadcrumbs={meta.breadcrumbs}
        schema={faqSchema ? [articleSchema, faqSchema] : articleSchema}
      />

      {/* Breadcrumbs */}
      <Breadcrumbs items={meta.breadcrumbs} onNavigate={onNavigate} />

      {/* Header */}
      <header className="mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-forest-900/10 text-forest-800 text-xs font-semibold uppercase tracking-wider mb-4">
          <Sparkles className="w-3.5 h-3.5 text-gold-600" />
          <span>Factual Historical Research & Biographical Memoirs</span>
        </div>
        <h1 className="text-3xl md:text-5xl font-serif font-bold text-forest-900 leading-tight mb-4">
          Documented Stories: Global Seekers at Kainchi Dham
        </h1>
        <p className="text-lg text-charcoal-700 max-w-4xl leading-relaxed">
          Carefully researched historical connections between Neem Karoli Baba, Kainchi Dham, and international pioneers in technology, science, and literature including 
          <strong> Steve Jobs</strong>, <strong>Ram Dass</strong>, <strong>Mark Zuckerberg</strong>, and <strong>Dr. Larry Brilliant</strong>.
        </p>
      </header>

      {/* Editorial Standard Banner */}
      <div className="mb-12 p-6 rounded-2xl bg-forest-900 text-ivory-100 flex items-start gap-4">
        <Quote className="w-6 h-6 text-gold-400 shrink-0 mt-1" />
        <div>
          <h3 className="font-serif font-bold text-gold-400 text-base mb-1">Our Editorial Policy on Historical Narratives</h3>
          <p className="text-xs text-ivory-300 leading-relaxed">
            We avoid hyperbolic claims such as "Maharaj-ji caused the creation of Apple or Facebook." Instead, we objectively document what autobiographies, personal interviews, and published biographies confirm regarding the philosophical inspiration, clarity of intuition, and cultural renewal these figures experienced after visiting Kainchi Dham.
          </p>
        </div>
      </div>

      {/* Stories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {STORIES_DATA.map((story: LegacyStory) => (
          <div
            key={story.id}
            className="group bg-white rounded-3xl overflow-hidden border border-forest-900/10 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="relative aspect-[16/10] overflow-hidden bg-forest-950">
                <img
                  src={story.image}
                  alt={story.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute top-3 left-3 bg-forest-900/80 backdrop-blur-md text-gold-400 text-[11px] font-bold px-3 py-1 rounded-full border border-gold-500/30">
                  {story.year} • {story.name}
                </div>
              </div>

              <div className="p-6 md:p-8">
                <span className="text-[10px] uppercase font-bold text-gold-700 tracking-wider">Historical Account</span>
                <h3 className="text-2xl font-serif font-bold text-forest-900 mt-1 group-hover:text-gold-700 transition-colors">
                  {story.title}
                </h3>
                <p className="text-xs text-charcoal-600 mt-3 line-clamp-3 leading-relaxed">
                  {story.summary}
                </p>

                {story.quote && (
                  <div className="mt-4 p-4 rounded-xl bg-ivory-100 border-l-4 border-gold-500 text-xs italic text-charcoal-800">
                    "{story.quote}"
                  </div>
                )}
              </div>
            </div>

            <div className="p-6 md:p-8 pt-0 border-t border-forest-900/5 mt-4 flex items-center justify-between">
              <span className="text-xs text-charcoal-500 font-medium">Read Complete Research</span>
              <button
                onClick={() => onSelectStory(story)}
                className="px-4 py-2 rounded-xl bg-forest-900 group-hover:bg-gold-500 text-gold-400 group-hover:text-forest-950 font-bold text-xs transition-all flex items-center gap-1.5 shadow-sm"
              >
                <span>Full Story</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* FAQs */}
      <section className="mb-14 bg-white p-8 rounded-3xl border border-forest-900/10 shadow-sm">
        <h2 className="text-2xl font-serif font-bold text-forest-900 mb-6">Frequently Asked Historical Questions</h2>
        <div className="space-y-4">
          {meta.faqs?.map((faq, idx) => (
            <div key={idx} className="p-4 rounded-xl bg-ivory-100 border border-forest-900/5">
              <h3 className="font-semibold text-forest-900 text-base mb-1">{faq.question}</h3>
              <p className="text-sm text-charcoal-700">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Internal Links */}
      {meta.relatedRoutes && (
        <SEOInternalLinks
          title="Explore Connected Philosophical & Pilgrimage Hubs"
          links={meta.relatedRoutes}
          onNavigate={onNavigate}
        />
      )}
    </div>
  );
};
