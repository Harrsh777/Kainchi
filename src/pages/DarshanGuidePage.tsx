import React from 'react';
import {
  Clock,
  Heart,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  MapPin,
  Info,
  Calendar,
  ArrowRight,
  Ticket
} from 'lucide-react';
import { SEOHead } from '../seo/SEOHead';
import { SEO_ROUTES } from '../seo/seoData';
import { generateArticleSchema, generateFAQSchema, generateBreadcrumbSchema } from '../seo/schemas';

interface DarshanGuidePageProps {
  onNavigate: (url: string) => void;
  onOpenPlanner: () => void;
}

const DARSHAN_FAQS = [
  {
    question: 'What are the daily Darshan and Aarti timings at Kainchi Dham?',
    answer: 'The temple gates open every morning at 6:30 AM and close around 7:30 PM. Morning Aarti is performed around 7:00 AM (followed by Hanuman Chalisa chanting), and Evening Aarti takes place around 6:30 PM at sunset.'
  },
  {
    question: 'Is there any VIP entry ticket or paid Darshan pass?',
    answer: 'No. Kainchi Dham strictly follows an egalitarian philosophy of universal love and service. All devotees stand in the same queue regardless of background. Entry is 100% FREE.'
  },
  {
    question: 'How is sacred Bhandara prasad served at Kainchi Dham?',
    answer: 'Freshly prepared vegetarian Bhandara prasad (usually warm khichdi, poori-chana, malpua, or sweet tea) is distributed with great love to all visiting seekers free of charge.'
  },
  {
    question: 'Can visitors meditate in Maharaj-ji’s original Kutir/Cave?',
    answer: 'Yes, devotees can quietly sit and meditate in the cave and prayer hall near Maharaj-ji’s sanctum. Absolute silence and reverent decorum are requested.'
  }
];

export const DarshanGuidePage: React.FC<DarshanGuidePageProps> = ({ onNavigate, onOpenPlanner }) => {
  const meta = SEO_ROUTES['/kainchi-dham-darshan'];

  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Darshan Guide', url: '/kainchi-dham-darshan' }
  ];

  const articleSchema = generateArticleSchema({
    headline: 'Kainchi Dham Darshan Guide 2026: Timings, Aarti, Free Entry & Sanctum Rules',
    description: 'Complete guide to attending morning and evening aarti, Maharaj-ji sanctum darshan, free bhandara prasad, and temple etiquette.',
    url: 'https://kainchidhambooking.com/kainchi-dham-darshan',
    datePublished: '2024-02-15',
    dateModified: '2026-10-01',
    authorName: 'Spiritual Heritage Research Desk'
  });

  const faqSchema = generateFAQSchema(DARSHAN_FAQS);
  const breadcrumbSchema = generateBreadcrumbSchema(breadcrumbs);

  return (
    <>
      <SEOHead
        title={meta?.title || 'Kainchi Dham Darshan 2026: Aarti Timings, Free Entry & Temple Rules'}
        description={meta?.description || 'Complete guide to Kainchi Dham Darshan: Morning & Evening Aarti hours, 100% free entry policy, sacred prasad, and meditation room etiquette.'}
        canonicalUrl="https://kainchidhambooking.com/kainchi-dham-darshan"
        keywords={meta?.secondaryKeywords || ['Kainchi Dham darshan', 'Kainchi Dham aarti timings', 'Kainchi Dham entry fee', 'Neem Karoli Baba darshan']}
        ogType="article"
        breadcrumbs={breadcrumbs}
        schema={[articleSchema, faqSchema, breadcrumbSchema]}
      />

      <article className="min-h-screen bg-ivory-100 text-charcoal-900 pb-24">
        {/* Header */}
        <header className="bg-forest-950 text-white pt-32 pb-16 relative overflow-hidden">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <nav aria-label="Breadcrumb" className="mb-6">
              <ol className="flex items-center gap-2 text-xs text-ivory-300">
                <li><button onClick={() => onNavigate('/')} className="hover:text-gold-300 transition-colors">Home</button></li>
                <li>/</li>
                <li className="text-gold-300 font-semibold" aria-current="page">Darshan Guide</li>
              </ol>
            </nav>

            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-400/20 text-gold-300 border border-gold-400/30 text-xs font-bold uppercase tracking-widest mb-3">
              <Heart className="w-3.5 h-3.5" />
              <span>Sacred Sanctum & Prayer Advisory</span>
            </span>

            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-light text-white tracking-tight mb-4">
              Kainchi Dham Darshan 2026
            </h1>

            <p className="text-sm sm:text-lg text-ivory-200 max-w-3xl leading-relaxed font-light mb-4">
              A comprehensive pilgrim’s guide to attending daily Aarti, receiving blessed Hanuman Prasad, meditating in Maharaj-ji’s kutir, and respectful temple practices.
            </p>

            <div className="flex flex-wrap items-center gap-4 text-xs text-ivory-300 pt-3 border-t border-white/10">
              <span>Gate Entry: <strong>100% Free</strong></span>
              <span>•</span>
              <span>Morning Aarti: <strong>~7:00 AM</strong></span>
              <span>•</span>
              <span>Evening Aarti: <strong>~6:30 PM</strong></span>
            </div>
          </div>
        </header>

        {/* Independence Disclaimer */}
        <section className="bg-amber-50 border-b border-amber-200 py-3.5 px-4">
          <div className="max-w-5xl mx-auto flex items-start gap-3 text-xs sm:text-sm text-amber-900 leading-relaxed">
            <Info className="w-5 h-5 text-amber-700 flex-shrink-0 mt-0.5" />
            <div>
              <strong>INDEPENDENT PILGRIMAGE INFORMATION:</strong> KainchiDhamBooking.com is an independent travel platform. We are not the official temple trust. Darshan is completely free. We do not sell entry tokens or passes.
            </div>
          </div>
        </section>

        {/* Content Container */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 space-y-12">
          
          {/* Quick Facts Strip */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-3xl bg-white border border-ivory-300 shadow-xs">
              <div className="w-10 h-10 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center mb-3">
                <Ticket className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg font-medium text-charcoal-900 mb-1">Entry Fee: ₹0</h3>
              <p className="text-xs text-charcoal-600 leading-relaxed font-light">
                Completely free gate entry. No VIP passes, fast-track lines, or paid darshan tokens exist.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-ivory-300 shadow-xs">
              <div className="w-10 h-10 rounded-2xl bg-forest-800/10 text-forest-800 flex items-center justify-center mb-3">
                <Clock className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg font-medium text-charcoal-900 mb-1">6:30 AM to 7:30 PM</h3>
              <p className="text-xs text-charcoal-600 leading-relaxed font-light">
                Gates open for morning prayers and remain open continuously throughout the afternoon.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-ivory-300 shadow-xs">
              <div className="w-10 h-10 rounded-2xl bg-gold-400/20 text-gold-700 flex items-center justify-center mb-3">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg font-medium text-charcoal-900 mb-1">Free Sacred Prasad</h3>
              <p className="text-xs text-charcoal-600 leading-relaxed font-light">
                Warm khichdi, poori-chana, or sweet prasad is lovingly shared with all visiting seekers.
              </p>
            </div>
          </div>

          {/* Section: The Darshan Sequence */}
          <section className="bg-white rounded-3xl p-6 sm:p-8 border border-ivory-300 shadow-sm">
            <h2 className="font-serif text-2xl sm:text-3xl font-normal text-charcoal-900 mb-4">
              The Sacred Darshan Sequence
            </h2>
            <div className="space-y-4 text-xs sm:text-sm text-charcoal-700 leading-relaxed font-light">
              <p>
                As you approach the ashram along NH 109, you deposit your footwear at the dedicated shoe counters before crossing the peaceful wooden suspension bridge over the Kshipra river.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-2xl bg-ivory-100 border border-ivory-200">
                  <h4 className="font-semibold text-charcoal-900 mb-1">1. Shri Hanuman Ji Mandir</h4>
                  <p className="text-xs text-charcoal-600">The central shrine established by Maharaj-ji on June 15, 1964. Devotees join in reciting the Hanuman Chalisa.</p>
                </div>
                <div className="p-4 rounded-2xl bg-ivory-100 border border-ivory-200">
                  <h4 className="font-semibold text-charcoal-900 mb-1">2. Maharaj-ji’s Samadhi & Kutir</h4>
                  <p className="text-xs text-charcoal-600">The holy meditation kutir preserving the wooden takhat (bed) and blanket of Neem Karoli Baba.</p>
                </div>
                <div className="p-4 rounded-2xl bg-ivory-100 border border-ivory-200">
                  <h4 className="font-semibold text-charcoal-900 mb-1">3. Vaishno Devi & Shiva Shrines</h4>
                  <p className="text-xs text-charcoal-600">Sacred side shrines dedicated to Maa Vaishno Devi and Lord Shiva overlooking the river bank.</p>
                </div>
                <div className="p-4 rounded-2xl bg-ivory-100 border border-ivory-200">
                  <h4 className="font-semibold text-charcoal-900 mb-1">4. Langar & Prasad Hall</h4>
                  <p className="text-xs text-charcoal-600">The community kitchen where pure satvik prasad is served freely to every guest with humility.</p>
                </div>
              </div>
            </div>
          </section>

          {/* FAQs */}
          <section>
            <h2 className="font-serif text-2xl sm:text-3xl font-normal text-charcoal-900 mb-6">
              Darshan & Temple Visit FAQs
            </h2>
            <div className="space-y-3">
              {DARSHAN_FAQS.map((faq, idx) => (
                <div key={idx} className="p-5 rounded-2xl bg-white border border-ivory-300">
                  <h3 className="font-serif text-base font-medium text-charcoal-900 mb-2">{faq.question}</h3>
                  <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed font-light">{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="bg-forest-800 text-white p-8 rounded-3xl border border-forest-700 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="font-serif text-2xl font-normal text-white mb-1">Planning a trip to Kainchi Dham?</h3>
              <p className="text-xs text-ivory-200 font-light">Book verified walkable stays and Kathgodam station taxi pickups.</p>
            </div>
            <div className="flex gap-3">
              <button
                onClick={() => onNavigate('/kainchi-dham-hotels')}
                className="px-6 py-3 rounded-full bg-gold-400 text-forest-950 font-bold text-xs uppercase tracking-wider hover:bg-gold-300 transition-all"
              >
                Hotels Near Temple
              </button>
            </div>
          </section>

        </div>
      </article>
    </>
  );
};
