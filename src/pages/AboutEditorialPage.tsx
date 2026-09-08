import React, { useState } from 'react';
import { ShieldCheck, BookOpen, CheckCircle2, Sparkles, Mail, FileText, Scale } from 'lucide-react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { SEOInternalLinks } from '../components/SEOInternalLinks';
import { SEOHead } from '../seo/SEOHead';
import { SEO_ROUTES } from '../seo/seoData';
import { generateOrganizationSchema, generateFAQSchema } from '../seo/schemas';

interface AboutEditorialPageProps {
  onNavigate: (url: string) => void;
  onOpenContact: () => void;
}

export const AboutEditorialPage: React.FC<AboutEditorialPageProps> = ({ onNavigate, onOpenContact }) => {
  const meta = SEO_ROUTES['/about'];
  const [activeTab, setActiveTab] = useState<'about' | 'editorial' | 'sources' | 'cancellation'>('about');

  const orgSchema = generateOrganizationSchema();
  const faqSchema = meta.faqs ? generateFAQSchema(meta.faqs) : undefined;

  return (
    <div className="pt-24 pb-20 px-4 md:px-8 max-w-7xl mx-auto">
      <SEOHead
        title={meta.title}
        description={meta.description}
        canonicalUrl={meta.canonicalUrl}
        keywords={meta.secondaryKeywords}
        ogType="website"
        breadcrumbs={meta.breadcrumbs}
        schema={faqSchema ? [orgSchema, faqSchema] : orgSchema}
      />

      {/* Breadcrumbs */}
      <Breadcrumbs items={meta.breadcrumbs} onNavigate={onNavigate} />

      {/* Header */}
      <header className="mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-forest-900/10 text-forest-800 text-xs font-semibold uppercase tracking-wider mb-4">
          <ShieldCheck className="w-3.5 h-3.5 text-gold-600" />
          <span>E-E-A-T & Independent Platform Transparency</span>
        </div>
        <h1 className="text-3xl md:text-5xl font-serif font-bold text-forest-900 leading-tight mb-4">
          About Kainchi Dham Booking: Editorial Integrity & Verification
        </h1>
        <p className="text-lg text-charcoal-700 max-w-4xl leading-relaxed">
          KainchiDhamBooking.com is an independent pilgrimage concierge, hotel directory, and research archive dedicated to serving 
          travelers journeying to Kainchi Dham in Uttarakhand.
        </p>
      </header>

      {/* Tab Navigation */}
      <div className="mb-10 flex flex-wrap gap-2">
        {[
          { id: 'about', label: 'Platform Mission', icon: ShieldCheck },
          { id: 'editorial', label: 'Editorial Policy', icon: FileText },
          { id: 'sources', label: 'Citations & Sources', icon: BookOpen },
          { id: 'cancellation', label: 'Transparent Policies', icon: Scale },
        ].map((tab) => {
          const Icon = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all ${
                activeTab === tab.id
                  ? 'bg-forest-900 text-gold-400 shadow-sm'
                  : 'bg-white text-charcoal-800 hover:bg-forest-900/5 border border-forest-900/10'
              }`}
            >
              <Icon className="w-4 h-4" />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* Tab 1: Mission */}
      {activeTab === 'about' && (
        <div className="space-y-8 mb-16">
          <div className="bg-white rounded-3xl p-8 md:p-10 border border-forest-900/10 shadow-sm space-y-6 text-charcoal-800 leading-relaxed">
            <h2 className="text-2xl font-serif font-bold text-forest-900">Who We Are & What We Provide</h2>
            <p>
              Founded by local Kumaon hospitality veterans and technology researchers, <strong>Kainchi Dham Booking</strong> was created to solve the rampant misinformation, roadside scalping, and hotel price gouging faced by pilgrims visiting the sacred valley.
            </p>
            <p>
              We provide verified stay reservations, fixed-rate mountain chauffeur transfers, and factual travel guides that help elderly pilgrims, families, and international seekers travel with calm confidence.
            </p>

            <div className="p-6 rounded-2xl bg-amber-50 border border-amber-200 text-amber-950 text-xs md:text-sm">
              <strong className="block text-sm font-bold mb-1">Clear Disclaimer of Independence:</strong>
              KainchiDhamBooking.com is an independent private concierge and travel platform. We are <strong>not affiliated with, endorsed by, or representing the Kainchi Dham Ashram Trust</strong>. Ashram darshan, aarti participation, and prasad distribution remain entirely free and open to all devotees without commercial interference.
            </div>
          </div>
        </div>
      )}

      {/* Tab 2: Editorial Policy */}
      {activeTab === 'editorial' && (
        <div className="space-y-8 mb-16">
          <div className="bg-white rounded-3xl p-8 md:p-10 border border-forest-900/10 shadow-sm space-y-6 text-charcoal-800 leading-relaxed">
            <h2 className="text-2xl font-serif font-bold text-forest-900">Our 5 Core Editorial Commitments</h2>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-forest-900 block font-bold">1. Verified Factual Claims Only:</strong>
                  We do not present myths, supernatural claims, or internet rumors as established facts. Historical memoirs and published books are explicitly cited.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-forest-900 block font-bold">2. Zero Fake Reviews or Invented Hotels:</strong>
                  Every hotel, resort, and homestay listed has been physically audited by our regional inspection team for cleanliness, pure-vegetarian cooking, and safety.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-forest-900 block font-bold">3. Transparent Upfront Pricing:</strong>
                  Taxi fares and hotel tariffs reflect actual seasonal rates with all tolls and taxes clearly stated—no hidden surprise costs on arrival.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-forest-900 block font-bold">4. Content Freshness & Regular Verification:</strong>
                  All road statuses, temple timings, and travel regulations are reviewed every season with local authorities and drivers.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-forest-900 block font-bold">5. Reader Corrections & Open Inquiries:</strong>
                  We actively invite local stakeholders and visitors to submit factual updates, corrections, or feedback to maintain editorial accuracy.
                </div>
              </li>
            </ul>
          </div>
        </div>
      )}

      {/* Tab 3: Sources */}
      {activeTab === 'sources' && (
        <div className="space-y-8 mb-16">
          <div className="bg-white rounded-3xl p-8 md:p-10 border border-forest-900/10 shadow-sm space-y-4 text-charcoal-800 leading-relaxed">
            <h2 className="text-2xl font-serif font-bold text-forest-900">Archival Research Sources & Bibliography</h2>
            <div className="space-y-3 text-xs md:text-sm">
              <div className="p-4 rounded-xl bg-ivory-100 border border-forest-900/5">
                <strong>• Miracle of Love: Stories of Neem Karoli Baba</strong> by Ram Dass (E.P. Dutton, 1979)
              </div>
              <div className="p-4 rounded-xl bg-ivory-100 border border-forest-900/5">
                <strong>• By His Grace: A Devotee's Story</strong> by Sudhir Dada Mukerjee (Hanuman Foundation, 1990)
              </div>
              <div className="p-4 rounded-xl bg-ivory-100 border border-forest-900/5">
                <strong>• Steve Jobs</strong> (Authorized Biography) by Walter Isaacson (Simon & Schuster, 2011)
              </div>
              <div className="p-4 rounded-xl bg-ivory-100 border border-forest-900/5">
                <strong>• Love Everyone: The Transcendent Wisdom of Neem Karoli Baba</strong> by Parvati Markus (HarperElixir, 2015)
              </div>
              <div className="p-4 rounded-xl bg-ivory-100 border border-forest-900/5">
                <strong>• Sometimes Brilliant: The Impossible Adventure of a Spiritual Seeker and Visionary Physician</strong> by Dr. Larry Brilliant (HarperOne, 2016)
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tab 4: Policies */}
      {activeTab === 'cancellation' && (
        <div className="space-y-8 mb-16">
          <div className="bg-white rounded-3xl p-8 md:p-10 border border-forest-900/10 shadow-sm space-y-4 text-charcoal-800 leading-relaxed">
            <h2 className="text-2xl font-serif font-bold text-forest-900">Cancellation & Refund Terms</h2>
            <p className="text-sm">
              We uphold fair, devotee-first cancellation terms for all mountain chauffeur and hotel reservations:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200">
                <span className="font-bold text-emerald-900 block mb-1">Chauffeur / Taxi Bookings</span>
                <p className="text-charcoal-700">100% full refund if cancelled up to 12 hours before scheduled pickup time.</p>
              </div>
              <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200">
                <span className="font-bold text-emerald-900 block mb-1">Hotel & Homestay Stays</span>
                <p className="text-charcoal-700">Free cancellation up to 48 hours prior to check-in at all partner boutique retreats.</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Contact Concierge CTA */}
      <div className="p-8 rounded-3xl bg-forest-900 text-ivory-100 flex flex-col md:flex-row md:items-center justify-between gap-6 mb-16">
        <div>
          <h3 className="text-xl font-serif font-bold text-gold-400">Have a Question or Correction?</h3>
          <p className="text-xs text-ivory-300 mt-1 max-w-xl">
            Reach out to our editorial board or pilgrimage assistance desk directly via WhatsApp or phone.
          </p>
        </div>
        <button
          onClick={onOpenContact}
          className="px-6 py-3 rounded-xl bg-gold-500 hover:bg-gold-400 text-forest-950 font-bold text-xs transition-all shrink-0 flex items-center gap-2 shadow-md"
        >
          <Mail className="w-4 h-4" />
          <span>Contact Concierge Desk</span>
        </button>
      </div>

      {/* Internal Links */}
      {meta.relatedRoutes && (
        <SEOInternalLinks
          title="Explore Connected Pilgrimage Guides"
          links={meta.relatedRoutes}
          onNavigate={onNavigate}
        />
      )}
    </div>
  );
};
