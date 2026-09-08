import React from 'react';
import { BookOpen, Heart, Globe, Quote, Sparkles, CheckCircle2 } from 'lucide-react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { SEOInternalLinks } from '../components/SEOInternalLinks';
import { SEOHead } from '../seo/SEOHead';
import { SEO_ROUTES } from '../seo/seoData';
import { generateArticleSchema, generateFAQSchema } from '../seo/schemas';
import { MAHARAJJI_QUOTES, MAHARAJJI_PHOTOS } from '../data/maharajjiQuotes';

interface NeemKaroliBabaPillarPageProps {
  onNavigate: (url: string) => void;
}

export const NeemKaroliBabaPillarPage: React.FC<NeemKaroliBabaPillarPageProps> = ({ onNavigate }) => {
  const meta = SEO_ROUTES['/neem-karoli-baba'];

  const articleSchema = generateArticleSchema({
    headline: meta.title,
    description: meta.description,
    url: meta.canonicalUrl,
    image: MAHARAJJI_PHOTOS[0].imageUrl,
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

      {/* Hero Section */}
      <header className="mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-forest-900/10 text-forest-800 text-xs font-semibold uppercase tracking-wider mb-4">
          <Sparkles className="w-3.5 h-3.5 text-gold-600" />
          <span>Documented Biography & Spiritual Philosophy</span>
        </div>
        <h1 className="text-3xl md:text-5xl font-serif font-bold text-forest-900 leading-tight mb-4">
          Neem Karoli Baba (Maharaj-ji): Life, Universal Teachings & Kainchi Heritage
        </h1>
        <p className="text-lg md:text-xl text-charcoal-700 max-w-4xl leading-relaxed">
          Revered simply as <em>Maharaj-ji</em>, Neem Karoli Baba (c. 1900 – September 11, 1973) was a master of Bhakti Yoga 
          who guided seekers toward universal compassion, selfless service, and unbroken remembrance of God.
        </p>
      </header>

      {/* Portrait & Core Dictum */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-14">
        <div className="lg:col-span-5 rounded-3xl overflow-hidden border border-forest-900/10 shadow-lg relative aspect-[4/5] bg-forest-950">
          <img
            src={MAHARAJJI_PHOTOS[0].imageUrl}
            alt="Neem Karoli Baba Maharaj-ji in sacred blanket"
            className="w-full h-full object-cover object-top"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-forest-950/90 via-transparent to-transparent flex flex-col justify-end p-6 text-ivory-100">
            <span className="text-gold-400 text-xs font-semibold tracking-wider uppercase">Maharaj-ji</span>
            <p className="text-xl font-serif font-bold">"Love Everyone. Serve Everyone. Remember God."</p>
            <p className="text-xs text-ivory-300 mt-1">सबको प्रेम करो • सबकी सेवा करो • ईश्वर का स्मरण करो</p>
          </div>
        </div>

        <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
          <div className="p-8 rounded-3xl bg-white border border-forest-900/10 shadow-sm space-y-4">
            <h2 className="text-2xl font-serif font-bold text-forest-900">The Essence of His Teachings</h2>
            <p className="text-charcoal-700 leading-relaxed">
              Unlike many formal ascetics of his era, Neem Karoli Baba did not deliver structured lectures, initiate disciples into esoteric rituals, or establish dogmatic creeds. 
              Instead, his teaching was experiential, transmitted through simple everyday acts of hospitality, continuous feeding (<em>bhandara</em>), and unconditional acceptance.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <div className="p-4 rounded-xl bg-forest-50 border border-forest-900/10 text-center">
                <Heart className="w-5 h-5 text-gold-600 mx-auto mb-1.5" />
                <h3 className="font-bold text-forest-900 text-sm">Love Everyone</h3>
                <p className="text-[11px] text-charcoal-600 mt-0.5">Transcend all divisions of caste, creed, and nationality.</p>
              </div>
              <div className="p-4 rounded-xl bg-forest-50 border border-forest-900/10 text-center">
                <Globe className="w-5 h-5 text-emerald-600 mx-auto mb-1.5" />
                <h3 className="font-bold text-forest-900 text-sm">Feed People</h3>
                <p className="text-[11px] text-charcoal-600 mt-0.5">"Feed everyone hungry; in feeding them you feed God."</p>
              </div>
              <div className="p-4 rounded-xl bg-forest-50 border border-forest-900/10 text-center">
                <Sparkles className="w-5 h-5 text-amber-600 mx-auto mb-1.5" />
                <h3 className="font-bold text-forest-900 text-sm">Remember God</h3>
                <p className="text-[11px] text-charcoal-600 mt-0.5">Continuous devotion through chanting Sri Ram and Hanuman Chalisa.</p>
              </div>
            </div>
          </div>

          <div className="p-6 rounded-3xl bg-forest-900 text-ivory-100 shadow-sm">
            <h3 className="text-lg font-serif font-bold text-gold-400 mb-2">Editorial Note on Miracles vs. Historical Record</h3>
            <p className="text-xs text-ivory-300 leading-relaxed">
              While devotees have reported numerous personal experiences and traditional oral anecdotes, this publication documents historical facts, published autobiographical memoirs by known researchers (Ram Dass, Dada Mukerjee, Dr. Larry Brilliant), and verifiable cultural impacts without sensationalizing supernatural claims.
            </p>
          </div>
        </div>
      </div>

      {/* Published Works & Bibliography */}
      <section className="mb-14">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-forest-900 mb-6 flex items-center gap-2">
          <BookOpen className="w-6 h-6 text-gold-600" />
          Authoritative Books & Historical Accounts
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-5 rounded-2xl bg-white border border-forest-900/10 shadow-sm flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-bold text-gold-700 uppercase tracking-wider">Ram Dass (1979)</span>
              <h3 className="font-bold text-forest-900 text-base mt-1">Miracle of Love</h3>
              <p className="text-xs text-charcoal-600 mt-2 leading-relaxed">
                A landmark compilation of direct testimonies, anecdotes, and memories collected from over a hundred Indian and Western devotees.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-forest-900/5 text-[11px] text-charcoal-500 font-medium">
              Primary Reference Text
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-forest-900/10 shadow-sm flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-bold text-emerald-700 uppercase tracking-wider">Sudhir Dada Mukerjee</span>
              <h3 className="font-bold text-forest-900 text-base mt-1">By His Grace</h3>
              <p className="text-xs text-charcoal-600 mt-2 leading-relaxed">
                Intimate devotional memoirs written by the Allahabad University professor who hosted Maharaj-ji in his home for decades.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-forest-900/5 text-[11px] text-charcoal-500 font-medium">
              Documented Family Chronicles
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-forest-900/10 shadow-sm flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-bold text-blue-700 uppercase tracking-wider">Parvati Markus (2015)</span>
              <h3 className="font-bold text-forest-900 text-base mt-1">Love Everyone</h3>
              <p className="text-xs text-charcoal-600 mt-2 leading-relaxed">
                Transcripts of interviews with Western seekers detailing how their encounters in India transformed their lives in public health, technology, and arts.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-forest-900/5 text-[11px] text-charcoal-500 font-medium">
              Oral History Archive
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-forest-900/10 shadow-sm flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-bold text-purple-700 uppercase tracking-wider">Dr. Larry Brilliant (2016)</span>
              <h3 className="font-bold text-forest-900 text-base mt-1">Sometimes Brilliant</h3>
              <p className="text-xs text-charcoal-600 mt-2 leading-relaxed">
                Autobiography by the WHO epidemiologist detailing how Maharaj-ji directed him to work on the successful WHO Smallpox Eradication Campaign.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-forest-900/5 text-[11px] text-charcoal-500 font-medium">
              Global Health History
            </div>
          </div>
        </div>
      </section>

      {/* Selected Verified Quotes */}
      <section className="mb-14 p-8 rounded-3xl bg-forest-900 text-ivory-100 shadow-lg">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-gold-400 mb-6 flex items-center gap-2">
          <Quote className="w-6 h-6 text-gold-500" />
          Documented Quotes & Aphorisms
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {MAHARAJJI_QUOTES.slice(0, 3).map((q, idx) => (
            <div key={idx} className="p-5 rounded-2xl bg-forest-950/60 border border-forest-800 flex flex-col justify-between">
              <div>
                <p className="text-base font-serif italic text-ivory-100 mb-2">"{q.quote}"</p>
                <p className="text-xs text-gold-400 mb-3">{q.hindi}</p>
              </div>
              <div className="text-[11px] text-ivory-400 border-t border-forest-800 pt-2 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>Source: {q.context}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQs */}
      <section className="mb-14 bg-white p-8 rounded-3xl border border-forest-900/10 shadow-sm">
        <h2 className="text-2xl font-serif font-bold text-forest-900 mb-6">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {meta.faqs?.map((faq, idx) => (
            <div key={idx} className="p-4 rounded-xl bg-ivory-100 border border-forest-900/5">
              <h3 className="font-semibold text-forest-900 text-base mb-1">{faq.question}</h3>
              <p className="text-sm text-charcoal-700">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Internal Link Mesh */}
      {meta.relatedRoutes && (
        <SEOInternalLinks
          title="Related Neem Karoli Baba & Kainchi Heritage Hubs"
          links={meta.relatedRoutes}
          onNavigate={onNavigate}
        />
      )}
    </div>
  );
};
