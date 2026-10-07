import React from 'react';
import {
  ShieldAlert,
  CheckCircle2,
  XCircle,
  Camera,
  Smartphone,
  Sparkles,
  Info,
  Clock,
  Shirt
} from 'lucide-react';
import { SEOHead } from '../seo/SEOHead';
import { SEO_ROUTES } from '../seo/seoData';
import { generateArticleSchema, generateFAQSchema, generateBreadcrumbSchema } from '../seo/schemas';

interface TempleRulesPageProps {
  onNavigate: (url: string) => void;
  onOpenPlanner: () => void;
}

const RULES_FAQS = [
  {
    question: 'Is photography allowed inside Kainchi Dham Ashram?',
    answer: 'Photography, videography, selfie sticks, and mobile camera recording are strictly prohibited inside the inner temple sanctum, Maharaj-ji’s original kutir, and the prayer courtyards to maintain sacred decorum.'
  },
  {
    question: 'What is the dress code for visiting Kainchi Dham?',
    answer: 'Devotees are requested to wear modest, respectful Indian or western attire that covers both shoulders and knees. Revealing clothing, beachwear, and sleeveless tops are discouraged.'
  },
  {
    question: 'Are mobile phones permitted inside the ashram?',
    answer: 'Mobile phones are allowed on your person but must be switched to silent or vibration-free mode before entering the temple bridge. Phone calls inside the sanctum are not permitted.'
  },
  {
    question: 'Are drones permitted over the ashram valley?',
    answer: 'No. Flying drones over Kainchi Dham and the surrounding valley is strictly illegal under Uttarakhand Police regulations without explicit written district magistrate clearance.'
  }
];

export const TempleRulesPage: React.FC<TempleRulesPageProps> = ({ onNavigate }) => {
  const meta = SEO_ROUTES['/kainchi-dham-rules'];

  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Temple Rules & Etiquette', url: '/kainchi-dham-rules' }
  ];

  const articleSchema = generateArticleSchema({
    headline: 'Kainchi Dham Temple Rules & Visitor Guidelines 2026: Dress Code, Photography & Sanctum Etiquette',
    description: 'Official visitor guidelines and sacred decorum rules for visiting Kainchi Dham Ashram: dress code, photography bans, footwear protocols, and prasad.',
    url: 'https://kainchidhambooking.com/kainchi-dham-rules',
    datePublished: '2024-02-15',
    dateModified: '2026-10-01',
    authorName: 'Spiritual Heritage Research Desk'
  });

  const faqSchema = generateFAQSchema(RULES_FAQS);
  const breadcrumbSchema = generateBreadcrumbSchema(breadcrumbs);

  return (
    <>
      <SEOHead
        title={meta?.title || 'Kainchi Dham Temple Rules 2026: Dress Code, Photography & Etiquette'}
        description={meta?.description || 'Essential rules and etiquette for visiting Kainchi Dham: Modest dress code, strict photography prohibition in sanctum, footwear counters, and silence.'}
        canonicalUrl="https://kainchidhambooking.com/kainchi-dham-rules"
        keywords={meta?.secondaryKeywords || ['Kainchi Dham rules', 'Kainchi Dham dress code', 'Kainchi Dham photography rules', 'Kainchi Dham temple guidelines']}
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
                <li className="text-gold-300 font-semibold" aria-current="page">Temple Rules</li>
              </ol>
            </nav>

            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-400/20 text-gold-300 border border-gold-400/30 text-xs font-bold uppercase tracking-widest mb-3">
              <ShieldAlert className="w-3.5 h-3.5" />
              <span>Sacred Decorum & Ashram Code</span>
            </span>

            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-light text-white tracking-tight mb-4">
              Kainchi Dham Temple Rules 2026
            </h1>

            <p className="text-sm sm:text-lg text-ivory-200 max-w-3xl leading-relaxed font-light mb-4">
              Respectful pilgrim etiquette, dress code requirements, photography bans, and silence guidelines to ensure a serene spiritual experience.
            </p>

            <div className="flex flex-wrap items-center gap-4 text-xs text-ivory-300 pt-3 border-t border-white/10">
              <span>Modest Attire</span>
              <span>•</span>
              <span>No Sanctum Photography</span>
              <span>•</span>
              <span>Phones on Silent</span>
            </div>
          </div>
        </header>

        {/* Independence Disclaimer */}
        <section className="bg-amber-50 border-b border-amber-200 py-3.5 px-4">
          <div className="max-w-5xl mx-auto flex items-start gap-3 text-xs sm:text-sm text-amber-900 leading-relaxed">
            <Info className="w-5 h-5 text-amber-700 flex-shrink-0 mt-0.5" />
            <div>
              <strong>INDEPENDENT ADVISORY:</strong> KainchiDhamBooking.com compiles verified visitor etiquette based on established ashram traditions to help pilgrims prepare respectfully before arrival.
            </div>
          </div>
        </section>

        {/* Rules Content */}
        <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 space-y-12">
          
          {/* Do's and Don'ts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Do's */}
            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-emerald-200 shadow-sm">
              <div className="flex items-center gap-2 text-emerald-800 font-serif text-xl font-medium mb-4">
                <CheckCircle2 className="w-6 h-6 text-emerald-600" />
                <h2>Respectful Practices (Do's)</h2>
              </div>

              <ul className="space-y-3.5 text-xs sm:text-sm text-charcoal-700 leading-relaxed">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Modest Attire:</strong> Wear clean, respectful clothing covering shoulders, chest, and knees. Traditional Indian attire or loose comfortable travel clothes are ideal.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Footwear Deposit:</strong> Leave shoes, sandals, and leather belts at the designated free shoe counters located outside the suspension bridge.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Quiet Reflection:</strong> Maintain silence in Maharaj-ji's meditation kutir and prayer halls to respect other seekers in prayer.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Receive Prasad Gracefully:</strong> Take the blessed Bhandara prasad with both hands and consume it within the designated courtyard areas.</span>
                </li>
              </ul>
            </div>

            {/* Don'ts */}
            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-rose-200 shadow-sm">
              <div className="flex items-center gap-2 text-rose-800 font-serif text-xl font-medium mb-4">
                <XCircle className="w-6 h-6 text-rose-600" />
                <h2>Prohibited Actions (Don'ts)</h2>
              </div>

              <ul className="space-y-3.5 text-xs sm:text-sm text-charcoal-700 leading-relaxed">
                <li className="flex items-start gap-2.5">
                  <XCircle className="w-4 h-4 text-rose-600 flex-shrink-0 mt-0.5" />
                  <span><strong>NO Sanctum Photography:</strong> Taking pictures, vlogging, reels, or recording videos inside the temple sanctum and cave is strictly forbidden.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <XCircle className="w-4 h-4 text-rose-600 flex-shrink-0 mt-0.5" />
                  <span><strong>No Loud Phone Calls:</strong> Ringing phones and loud conversations are prohibited inside the ashram gates.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <XCircle className="w-4 h-4 text-rose-600 flex-shrink-0 mt-0.5" />
                  <span><strong>No Tobacco, Alcohol or Non-Veg:</strong> The entire Kainchi valley is a sacred vegetarian sanctuary. Consuming or carrying meat, alcohol, or smoking is strictly banned.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <XCircle className="w-4 h-4 text-rose-600 flex-shrink-0 mt-0.5" />
                  <span><strong>No Drones:</strong> Operating unauthorized drones over the temple complex is illegal and punishable under local administrative laws.</span>
                </li>
              </ul>
            </div>

          </div>

          {/* FAQs */}
          <section>
            <h2 className="font-serif text-2xl sm:text-3xl font-normal text-charcoal-900 mb-6">
              Rules & Etiquette FAQs
            </h2>
            <div className="space-y-3">
              {RULES_FAQS.map((faq, idx) => (
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
              <h3 className="font-serif text-2xl font-normal text-white mb-1">Plan your peaceful Kainchi visit</h3>
              <p className="text-xs text-ivory-200 font-light">Explore verified stays within walking distance of the gate.</p>
            </div>
            <button
              onClick={() => onNavigate('/kainchi-dham-hotels')}
              className="px-6 py-3 rounded-full bg-gold-400 text-forest-950 font-bold text-xs uppercase tracking-wider hover:bg-gold-300 transition-all flex-shrink-0"
            >
              Browse Stays
            </button>
          </section>

        </main>
      </article>
    </>
  );
};
