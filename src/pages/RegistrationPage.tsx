import React, { useState } from 'react';
import {
  ShieldAlert,
  CheckCircle2,
  AlertCircle,
  ExternalLink,
  Calendar,
  Clock,
  UserCheck,
  MapPin,
  Hotel,
  Car,
  ChevronDown,
  ArrowRight,
  Info,
  QrCode,
  FileText,
  Users
} from 'lucide-react';
import { SEOHead } from '../seo/SEOHead';
import { SEO_ROUTES } from '../seo/seoData';
import { generateArticleSchema, generateFAQSchema, generateBreadcrumbSchema } from '../seo/schemas';

interface RegistrationPageProps {
  onNavigate: (url: string) => void;
  onOpenPlanner: () => void;
}

const REGISTRATION_FAQS = [
  {
    question: 'Is online registration mandatory to visit Kainchi Dham in 2026?',
    answer: 'The Nainital District Administration and Uttarakhand authorities have proposed a Char Dham-style tourist and pilgrim registration system to manage heavy weekend traffic and crowd surges along the NH-109 corridor. However, regular walk-in gate entry remains 100% FREE. Whenever the online registration portal is officially activated by the Uttarakhand Government, direct links and instructions are updated here immediately.'
  },
  {
    question: 'How much does Kainchi Dham registration cost?',
    answer: 'Registration and temple entry are 100% FREE of charge. There are NO fees, NO VIP tokens, and NO paid fast-track darshan passes. Beware of fake third-party websites or agents asking for money for registration or VIP passes.'
  },
  {
    question: 'What documents are required for Kainchi Dham registration?',
    answer: 'When registering through the official government portal, standard requirements typically include: 1) A valid government ID (Aadhaar Card, Voter ID, or Passport), 2) Active mobile number for OTP/SMS confirmation, 3) Date of planned visit, and 4) Number of accompanying family members / vehicle details.'
  },
  {
    question: 'Is this website the official Kainchi Dham registration portal?',
    answer: 'No. KainchiDhamBooking.com is an independent pilgrimage concierge, accommodation directory, and travel information platform. We are NOT the official temple trust (Shri Kainchi Hanuman Mandir Trust) or the Uttarakhand government. We provide verified logistical guidance, hotel bookings, and taxi transfers.'
  },
  {
    question: 'Do I need a separate pass for Kainchi Dham Morning or Evening Aarti?',
    answer: 'No separate ticket or pass is required for Aarti. Both Morning Aarti (~7:00 AM) and Evening Aarti (~6:30 PM) are open to all devotees on a first-come, first-seated basis. Visitors must arrive 20–30 minutes before Aarti time.'
  },
  {
    question: 'What are the rules during the June 15 annual Bhandara?',
    answer: 'On June 15 (Pratishtha Divas), over 100,000 devotees visit Kainchi Dham. During this period, district police enforce mandatory traffic diversions, designated satellite parking at Bhowali/Haldwani with shuttle buses, and strict queue management.'
  }
];

export const RegistrationPage: React.FC<RegistrationPageProps> = ({ onNavigate, onOpenPlanner }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const meta = SEO_ROUTES['/kainchi-dham-registration'];

  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Kainchi Dham Registration 2026', url: '/kainchi-dham-registration' }
  ];

  const articleSchema = generateArticleSchema({
    headline: 'Kainchi Dham Registration 2026: Online Booking, Entry Pass & Visitor Guidelines',
    description: 'Complete factual guide to Kainchi Dham visitor registration, Char Dham style portal updates, entry rules, timings, and planning.',
    url: 'https://kainchidhambooking.com/kainchi-dham-registration',
    datePublished: '2024-03-01',
    dateModified: '2026-10-01',
    authorName: 'Kainchi Dham Editorial & Research Team'
  });

  const faqSchema = generateFAQSchema(REGISTRATION_FAQS);
  const breadcrumbSchema = generateBreadcrumbSchema(breadcrumbs);

  return (
    <>
      <SEOHead
        title={meta?.title || 'Kainchi Dham Registration 2026: Online Booking & Visitor Guide'}
        description={meta?.description || 'Learn about Kainchi Dham registration, visitor rules, booking updates, timings and how to plan your visit in 2026.'}
        canonicalUrl="https://kainchidhambooking.com/kainchi-dham-registration"
        keywords={meta?.secondaryKeywords || ['Kainchi Dham registration', 'Kainchi Dham online registration', 'Kainchi Dham entry pass', 'Kainchi Dham booking 2026']}
        ogType="article"
        breadcrumbs={breadcrumbs}
        schema={[articleSchema, faqSchema, breadcrumbSchema]}
      />

      <article className="min-h-screen bg-ivory-100 text-charcoal-900 pb-24">
        {/* Hero Section */}
        <header className="bg-forest-950 text-white pt-32 pb-16 sm:pb-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(185,154,98,0.15),transparent_60%)] pointer-events-none" />
          
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            {/* Breadcrumb Navigation */}
            <nav aria-label="Breadcrumb" className="mb-6">
              <ol className="flex items-center gap-2 text-xs text-ivory-300">
                <li><button onClick={() => onNavigate('/')} className="hover:text-gold-300 transition-colors">Home</button></li>
                <li>/</li>
                <li className="text-gold-300 font-semibold" aria-current="page">Registration 2026</li>
              </ol>
            </nav>

            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold-400/20 text-gold-300 border border-gold-400/30 text-xs font-bold uppercase tracking-widest mb-4">
              <Calendar className="w-3.5 h-3.5" />
              <span>Official Visitor Advisory & Guidelines 2026</span>
            </div>

            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-light text-white tracking-tight leading-tight mb-4">
              Kainchi Dham Registration 2026
            </h1>

            <p className="text-sm sm:text-lg text-ivory-200 max-w-3xl leading-relaxed font-light mb-6">
              Essential guide to Kainchi Dham visitor registration, administrative crowd management guidelines, free darshan rules, daily Aarti schedules, and travel logistics.
            </p>

            {/* Author & Timestamp Meta */}
            <div className="flex flex-wrap items-center gap-4 text-xs text-ivory-300 pt-4 border-t border-white/10">
              <span className="flex items-center gap-1.5">
                <UserCheck className="w-4 h-4 text-gold-400" />
                <span>Editorial Board & Legal Travel Desk</span>
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-gold-400" />
                <span>Last Verified: October 2026</span>
              </span>
              <span>•</span>
              <span className="text-emerald-300 font-medium">100% Free Entry Policy</span>
            </div>
          </div>
        </header>

        {/* Mandatory Independent Platform Disclosure */}
        <section className="bg-amber-50 border-b border-amber-200 py-3.5 px-4">
          <div className="max-w-5xl mx-auto flex items-start gap-3 text-xs sm:text-sm text-amber-900 leading-relaxed">
            <Info className="w-5 h-5 text-amber-700 flex-shrink-0 mt-0.5" />
            <div>
              <strong>IMPORTANT INDEPENDENT STATUS DISCLOSURE:</strong> KainchiDhamBooking.com is an independent travel concierge, hotel directory, and visitor information platform. We are <strong>NOT</strong> the official temple trust (Shri Kainchi Hanuman Mandir Trust), the Government of Uttarakhand, or the Nainital District Administration. Temple entry and darshan are <strong>100% FREE</strong> for all devotees. We never charge for registration or entry.
            </div>
          </div>
        </section>

        {/* Main Content Area */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
          
          {/* Status Alert Box */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-ivory-300 shadow-sm mb-12">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-6 border-b border-ivory-200 gap-4">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-forest-700 block mb-1">
                  CURRENT OPERATIONAL STATUS
                </span>
                <h2 className="font-serif text-2xl font-medium text-charcoal-900">
                  Registration & Entry Status (2026 Update)
                </h2>
              </div>
              <span className="px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-100 text-emerald-800 border border-emerald-300 self-start sm:self-auto">
                Gates Open Daily (6:30 AM – 7:30 PM)
              </span>
            </div>

            <div className="space-y-4 text-xs sm:text-sm text-charcoal-700 leading-relaxed font-light">
              <p>
                Due to exponential growth in pilgrim footfall (surpassing 25,000+ daily visitors on peak weekends and 100,000+ during the annual June 15 Bhandara), the <strong>Nainital District Administration</strong> has proposed implementing a standardized visitor registration protocol modeled after the Uttarakhand Char Dham Devasthanam Board system.
              </p>
              <div className="p-4 rounded-2xl bg-ivory-100/90 border border-ivory-300 text-charcoal-800 space-y-2">
                <div className="font-semibold text-charcoal-900 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-forest-700" />
                  <span>Key Factual Summary for Visiting Seekers:</span>
                </div>
                <ul className="list-disc list-inside space-y-1.5 pl-2">
                  <li><strong>Darshan is 100% FREE:</strong> No tickets, tokens, or VIP passes are sold by the ashram or the government.</li>
                  <li><strong>Physical Gate Entry:</strong> Direct walk-in entry is currently active with smooth on-ground queue management.</li>
                  <li><strong>Online Portal Implementation:</strong> Once the Uttarakhand Tourism official online registration portal opens for peak season slots, pilgrims can complete free online slot generation.</li>
                  <li><strong>Vehicle Parking:</strong> Dedicated parking is available at Kainchi Valley, with overflow parking routed to Bhowali bypass.</li>
                </ul>
              </div>
            </div>

            {/* Official Portal External Link */}
            <div className="mt-6 pt-6 border-t border-ivory-200 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs text-charcoal-600">
                Official Government Portal: <strong>uttarakhandtourism.gov.in</strong> / <strong>nainital.nic.in</strong>
              </div>
              <a
                href="https://uttarakhandtourism.gov.in/"
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-forest-800 hover:bg-forest-700 text-white text-xs font-semibold uppercase tracking-wider transition-colors shadow-sm"
              >
                <span>Visit Official Govt Portal</span>
                <ExternalLink className="w-3.5 h-3.5 text-gold-400" />
              </a>
            </div>
          </div>

          {/* Section 1: Step-by-Step Registration Guide */}
          <section className="mb-12">
            <div className="flex items-center gap-2 text-forest-800 text-xs font-bold uppercase tracking-wider mb-2">
              <QrCode className="w-4 h-4 text-forest-700" />
              <span>STEP-BY-STEP PROCEDURE</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-normal text-charcoal-900 mb-6">
              How Kainchi Dham Registration Works
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 rounded-3xl bg-white border border-ivory-300 shadow-xs flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-2xl bg-forest-800 text-gold-300 font-serif font-bold text-lg flex items-center justify-center mb-4">
                    1
                  </div>
                  <h3 className="font-serif text-lg font-medium text-charcoal-900 mb-2">Provide Basic Details</h3>
                  <p className="text-xs text-charcoal-600 leading-relaxed font-light">
                    Enter the primary pilgrim’s name, contact mobile number, Aadhaar or photo ID number, and state of residence.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-ivory-200 text-[11px] text-forest-800 font-semibold">
                  Valid Govt ID Required
                </div>
              </div>

              <div className="p-6 rounded-3xl bg-white border border-ivory-300 shadow-xs flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-2xl bg-forest-800 text-gold-300 font-serif font-bold text-lg flex items-center justify-center mb-4">
                    2
                  </div>
                  <h3 className="font-serif text-lg font-medium text-charcoal-900 mb-2">Select Date & Party Size</h3>
                  <p className="text-xs text-charcoal-600 leading-relaxed font-light">
                    Choose your expected date of visit, approximate arrival slot (Morning or Evening Aarti), and number of family members.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-ivory-200 text-[11px] text-forest-800 font-semibold">
                  Group & Family Friendly
                </div>
              </div>

              <div className="p-6 rounded-3xl bg-white border border-ivory-300 shadow-xs flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-2xl bg-forest-800 text-gold-300 font-serif font-bold text-lg flex items-center justify-center mb-4">
                    3
                  </div>
                  <h3 className="font-serif text-lg font-medium text-charcoal-900 mb-2">Save QR / Registration Slip</h3>
                  <p className="text-xs text-charcoal-600 leading-relaxed font-light">
                    Download the digital confirmation pass on your phone or keep an SMS confirmation ready for verification at check-posts.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-ivory-200 text-[11px] text-forest-800 font-semibold">
                  100% Free / Zero Charges
                </div>
              </div>
            </div>
          </section>

          {/* Section 2: Important Advisory on Scams & VIP Passes */}
          <section className="mb-12 bg-rose-50 rounded-3xl p-6 sm:p-8 border border-rose-200">
            <div className="flex items-center gap-2 text-rose-800 text-xs font-bold uppercase tracking-wider mb-2">
              <ShieldAlert className="w-4 h-4 text-rose-700" />
              <span>CRITICAL PILGRIM FRAUD ALERT</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-medium text-rose-950 mb-3">
              Beware of Fake "VIP Darshan Passes" & Paid Registration
            </h2>
            <p className="text-xs sm:text-sm text-rose-900 leading-relaxed font-light mb-4">
              Multiple fraudulent websites, social media channels, and unauthorized touts attempt to sell "Special VIP Darshan Passes", "Fast-Track Entry Tickets", or "Guaranteed Maharaj-ji Kutir Access" for ₹500 to ₹2,500.
            </p>
            <div className="bg-white p-4 rounded-2xl border border-rose-200 space-y-2 text-xs text-charcoal-800">
              <p><strong>Official Temple Position:</strong> The Kainchi Dham Ashram strictly prohibits commercialized or VIP darshan. In the eyes of Maharaj-ji, every human being stands equal in devotion.</p>
              <p><strong>What we offer:</strong> KainchiDhamBooking.com provides ONLY independent travel logistics: hotel reservations at nearby certified properties, private taxi transfers from Kathgodam/Delhi, and customized itinerary planning.</p>
            </div>
          </section>

          {/* Section 3: Essential Temple Visit Information Grid */}
          <section className="mb-12">
            <h2 className="font-serif text-2xl sm:text-3xl font-normal text-charcoal-900 mb-6">
              Essential Visitor Facts: Timings, Rules & Access
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 rounded-3xl bg-white border border-ivory-300 shadow-xs">
                <div className="flex items-center gap-2 text-forest-800 font-serif text-lg font-medium mb-3">
                  <Clock className="w-5 h-5 text-forest-700" />
                  <h3>Daily Temple Hours & Aarti Schedule</h3>
                </div>
                <div className="space-y-2 text-xs text-charcoal-700">
                  <div className="flex justify-between py-1.5 border-b border-ivory-200">
                    <span className="font-semibold">Gates Open:</span>
                    <span>6:30 AM Daily</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-ivory-200">
                    <span className="font-semibold">Morning Aarti & Hanuman Chalisa:</span>
                    <span>~7:00 AM – 7:45 AM</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-ivory-200">
                    <span className="font-semibold">Evening Aarti:</span>
                    <span>~6:30 PM (Sunset)</span>
                  </div>
                  <div className="flex justify-between py-1.5">
                    <span className="font-semibold">Gates Close:</span>
                    <span>~7:30 PM</span>
                  </div>
                </div>
                <p className="text-[11px] text-charcoal-500 italic mt-3 pt-2 border-t border-ivory-200">
                  * Gates remain open throughout the afternoon for quiet darshan and prayer.
                </p>
              </div>

              <div className="p-6 rounded-3xl bg-white border border-ivory-300 shadow-xs">
                <div className="flex items-center gap-2 text-forest-800 font-serif text-lg font-medium mb-3">
                  <MapPin className="w-5 h-5 text-amber-700" />
                  <h3>Location, Distance & Highway Route</h3>
                </div>
                <div className="space-y-2 text-xs text-charcoal-700 leading-relaxed">
                  <p><strong>Address:</strong> NH 109, Bhowali-Almora Highway, Kainchi, Uttarakhand 263132.</p>
                  <p><strong>Nearest Railway Station:</strong> Kathgodam (KGM) — 37 km (~1 hr 15 min drive).</p>
                  <p><strong>Nearest Airport:</strong> Pantnagar Airport (PGH) — 70 km (~2 hrs drive) / Delhi IGI — 320 km (~6.5 hrs).</p>
                  <p><strong>Nearby Hubs:</strong> Bhowali (8 km), Nainital (18 km), Bhimtal (20 km), Mukteshwar (38 km).</p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 4: FAQs Accordion */}
          <section className="mb-12">
            <div className="flex items-center gap-2 text-forest-800 text-xs font-bold uppercase tracking-wider mb-2">
              <FileText className="w-4 h-4 text-forest-700" />
              <span>FREQUENTLY ASKED QUESTIONS</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-normal text-charcoal-900 mb-6">
              Kainchi Dham Registration & Entry FAQs
            </h2>

            <div className="space-y-3">
              {REGISTRATION_FAQS.map((faq, index) => {
                const isOpen = openFaq === index;
                return (
                  <div
                    key={index}
                    className="rounded-2xl bg-white border border-ivory-300 overflow-hidden transition-all"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaq(isOpen ? null : index)}
                      className="w-full p-5 text-left flex items-center justify-between gap-4 font-serif text-base sm:text-lg font-medium text-charcoal-900"
                    >
                      <span>{faq.question}</span>
                      <div className={`w-7 h-7 rounded-full bg-ivory-200 flex items-center justify-center flex-shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180 bg-forest-800 text-white' : 'text-charcoal-700'}`}>
                        <ChevronDown className="w-4 h-4" />
                      </div>
                    </button>

                    {isOpen && (
                      <div className="px-5 pb-5 pt-0 text-xs sm:text-sm text-charcoal-700 leading-relaxed font-light border-t border-ivory-200/60 mt-1">
                        <p className="pt-3">{faq.answer}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </section>

          {/* Section 5: Plan Stays & Travel Next Steps */}
          <section className="bg-forest-800 text-white p-8 sm:p-10 rounded-3xl border border-forest-700 shadow-2xl relative overflow-hidden">
            <div className="max-w-2xl relative z-10">
              <span className="text-gold-300 text-xs font-bold uppercase tracking-wider block mb-2">
                COMPLETE PILGRIMAGE ASSISTANCE
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-normal text-white mb-2 leading-snug">
                Need comfortable stays or on-time Kathgodam pickup?
              </h3>
              <p className="text-xs sm:text-sm text-ivory-200 leading-relaxed font-light mb-6">
                Reserve verified boutique homestays within walking distance of the temple gate, book punctual station taxi transfers from Kathgodam (37 km), and get a customized 2–3 day Kumaon itinerary.
              </p>

              <div className="flex flex-wrap gap-3">
                <button
                  onClick={() => onNavigate('/kainchi-dham-hotels')}
                  className="px-6 py-3 rounded-full bg-gold-400 hover:bg-gold-300 text-forest-950 font-bold text-xs uppercase tracking-wider transition-all shadow-md flex items-center gap-1.5"
                >
                  <Hotel className="w-4 h-4" />
                  <span>Explore Verified Hotels</span>
                </button>

                <button
                  onClick={() => onNavigate('/kainchi-dham-taxi')}
                  className="px-6 py-3 rounded-full bg-forest-900 hover:bg-forest-950 text-ivory-100 border border-white/20 font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-1.5"
                >
                  <Car className="w-4 h-4" />
                  <span>Kathgodam Taxi Booking</span>
                </button>
              </div>
            </div>
          </section>

        </div>
      </article>
    </>
  );
};
