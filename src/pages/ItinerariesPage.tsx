import React from 'react';
import { Clock, Calendar, CheckCircle2, MapPin, ArrowRight, Sparkles } from 'lucide-react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { SEOInternalLinks } from '../components/SEOInternalLinks';
import { SEOHead } from '../seo/SEOHead';
import { SEO_ROUTES } from '../seo/seoData';
import { generateArticleSchema, generateFAQSchema } from '../seo/schemas';
import { PACKAGES_DATA } from '../data/packages';

interface ItinerariesPageProps {
  onNavigate: (url: string) => void;
  onOpenPlanner: () => void;
}

export const ItinerariesPage: React.FC<ItinerariesPageProps> = ({ onNavigate, onOpenPlanner }) => {
  const meta = SEO_ROUTES['/itineraries'];

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
          <span>Curated Travel Logic • 1-Day, 2-Day & 3-Day Circuits</span>
        </div>
        <h1 className="text-3xl md:text-5xl font-serif font-bold text-forest-900 leading-tight mb-4">
          Kainchi Dham Pilgrimage Itineraries & Day Schedules
        </h1>
        <p className="text-lg text-charcoal-700 max-w-4xl leading-relaxed">
          Paced, realistic pilgrimage schedules designed around morning aarti timings, Kathgodam railway connections, and scenic Himalayan pitstops.
        </p>
      </header>

      {/* Detailed Itinerary Cards */}
      <div className="space-y-12 mb-16">
        
        {/* 1-Day Plan */}
        <section className="bg-white rounded-3xl p-8 md:p-10 border border-forest-900/10 shadow-sm">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-forest-900/10 mb-6">
            <div>
              <span className="text-xs font-bold text-gold-700 uppercase tracking-wider">Option A • Fast Rail Pilgrimage</span>
              <h2 className="text-2xl font-serif font-bold text-forest-900 mt-1">1-Day Express Darshan from Kathgodam / Delhi</h2>
            </div>
            <span className="px-3.5 py-1.5 rounded-full bg-forest-50 text-forest-800 text-xs font-semibold">
              Duration: 1 Day (Same Day Return)
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-xs">
            <div className="p-4 rounded-xl bg-ivory-100 border border-forest-900/5">
              <span className="font-bold text-forest-900 block mb-1">06:00 AM – 07:30 AM</span>
              <p className="text-charcoal-700">Arrive Kathgodam via overnight Ranikhet Express or early Shatabdi. Board private cab up the hills.</p>
            </div>
            <div className="p-4 rounded-xl bg-ivory-100 border border-forest-900/5">
              <span className="font-bold text-forest-900 block mb-1">08:00 AM – 11:30 AM</span>
              <p className="text-charcoal-700">Arrive Kainchi Dham. Cross suspension bridge, attend darshan, sit for silent contemplation & receive prasad.</p>
            </div>
            <div className="p-4 rounded-xl bg-ivory-100 border border-forest-900/5">
              <span className="font-bold text-forest-900 block mb-1">12:30 PM – 03:00 PM</span>
              <p className="text-charcoal-700">Drive to Bhowali for traditional Kumaoni lunch (Bhatt ki Churkani) and visit Golu Devta Temple Ghorakhal.</p>
            </div>
            <div className="p-4 rounded-xl bg-ivory-100 border border-forest-900/5">
              <span className="font-bold text-forest-900 block mb-1">04:30 PM – 07:00 PM</span>
              <p className="text-charcoal-700">Smooth downhill drive back to Kathgodam Station for return evening Shatabdi or train to Delhi.</p>
            </div>
          </div>
        </section>

        {/* 2-Day Plan */}
        <section className="bg-white rounded-3xl p-8 md:p-10 border border-forest-900/10 shadow-sm">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-forest-900/10 mb-6">
            <div>
              <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider">Option B • Most Recommended</span>
              <h2 className="text-2xl font-serif font-bold text-forest-900 mt-1">2-Day Spiritual Immersion & Evening Aarti</h2>
            </div>
            <span className="px-3.5 py-1.5 rounded-full bg-emerald-50 text-emerald-800 text-xs font-semibold">
              Duration: 2 Days / 1 Night
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs leading-relaxed">
            <div className="p-5 rounded-2xl bg-ivory-100 border border-forest-900/5">
              <h3 className="font-bold text-forest-900 text-sm mb-2">Day 1: Arrival & Evening Temple Atmosphere</h3>
              <p className="text-charcoal-700 mb-2">
                • 12:00 PM: Check-in at your chosen Kainchi Valley retreat or Bhowali homestay.<br/>
                • 03:30 PM: Walk along Shipra riverbed, browse spiritual literature at local bookstalls.<br/>
                • 06:30 PM: Attend the enchanting Evening Aarti and participate in collective Hanuman Chalisa recitations.<br/>
                • 08:30 PM: Pure satvik dinner at your resort overlooking the valley.
              </p>
            </div>
            <div className="p-5 rounded-2xl bg-ivory-100 border border-forest-900/5">
              <h3 className="font-bold text-forest-900 text-sm mb-2">Day 2: Morning Darshan & Bhimtal Lake Circuit</h3>
              <p className="text-charcoal-700 mb-2">
                • 06:30 AM: Witness peaceful Morning Aarti in the sanctum before daytime crowds gather.<br/>
                • 09:30 AM: Wholesome mountain breakfast; visit Golu Devta Temple Ghorakhal (11 km).<br/>
                • 01:00 PM: Scenic drive to Bhimtal Lake for peaceful boating and lunch by the water.<br/>
                • 05:00 PM: Station drop at Kathgodam.
              </p>
            </div>
          </div>
        </section>

        {/* 3-Day Plan */}
        <section className="bg-white rounded-3xl p-8 md:p-10 border border-forest-900/10 shadow-sm">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-forest-900/10 mb-6">
            <div>
              <span className="text-xs font-bold text-purple-700 uppercase tracking-wider">Option C • Complete Kumaon Journey</span>
              <h2 className="text-2xl font-serif font-bold text-forest-900 mt-1">3-Day Kainchi, Nainital & Mukteshwar Circuit</h2>
            </div>
            <span className="px-3.5 py-1.5 rounded-full bg-purple-50 text-purple-800 text-xs font-semibold">
              Duration: 3 Days / 2 Nights
            </span>
          </div>
          <p className="text-xs text-charcoal-700 mb-4">
            Combines deep spiritual focus at Kainchi Dham on Day 1 with the colonial heritage and lake sights of Nainital on Day 2, and the 180° Himalayan snow peaks and apple orchards of Mukteshwar on Day 3.
          </p>
          <div className="flex justify-end">
            <button
              onClick={onOpenPlanner}
              className="px-5 py-2.5 rounded-xl bg-forest-900 hover:bg-gold-500 text-gold-400 hover:text-forest-950 font-bold text-xs transition-all flex items-center gap-2"
            >
              <span>Customize This 3-Day Plan</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </section>
      </div>

      {/* FAQs */}
      <section className="mb-14 bg-white p-8 rounded-3xl border border-forest-900/10 shadow-sm">
        <h2 className="text-2xl font-serif font-bold text-forest-900 mb-6">Itinerary Planning FAQs</h2>
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
          title="Related Booking Options & Free Travel Tools"
          links={meta.relatedRoutes}
          onNavigate={onNavigate}
        />
      )}
    </div>
  );
};
