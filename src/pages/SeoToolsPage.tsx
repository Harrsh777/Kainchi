import React, { useState } from 'react';
import { Calculator, Navigation, CheckSquare, Sparkles, Check, ArrowRight, ShieldCheck } from 'lucide-react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { SEOInternalLinks } from '../components/SEOInternalLinks';
import { SEOHead } from '../seo/SEOHead';
import { SEO_ROUTES } from '../seo/seoData';
import { generateFAQSchema } from '../seo/schemas';

interface SeoToolsPageProps {
  onNavigate: (url: string) => void;
  onOpenPlanner: () => void;
}

export const SeoToolsPage: React.FC<SeoToolsPageProps> = ({ onNavigate, onOpenPlanner }) => {
  const meta = SEO_ROUTES['/tools'];
  const [activeToolTab, setActiveToolTab] = useState<'budget' | 'distance' | 'packing' | 'itinerary'>('budget');

  // --- Tool 1: Budget Calculator State ---
  const [peopleCount, setPeopleCount] = useState<number>(2);
  const [tripDays, setTripDays] = useState<number>(2);
  const [hotelTier, setHotelTier] = useState<number>(3499); // Budget 2200, Boutique 3499, Luxury 6500
  const [transportType, setTransportType] = useState<number>(2999); // Sedan roundtrip ~2999, Ertiga ~4399, Innova ~5999
  const [diningTier, setDiningTier] = useState<number>(600); // per person/day

  const roomsNeeded = Math.ceil(peopleCount / 2);
  const totalHotelCost = roomsNeeded * hotelTier * (tripDays - 1 || 1);
  const totalTransportCost = transportType;
  const totalFoodCost = peopleCount * diningTier * tripDays;
  const grandTotal = totalHotelCost + totalTransportCost + totalFoodCost;
  const perPersonCost = Math.round(grandTotal / peopleCount);

  // --- Tool 2: Distance Matrix State ---
  const [selectedOrigin, setSelectedOrigin] = useState<string>('kathgodam');
  const [selectedDestination, setSelectedDestination] = useState<string>('kainchi');

  const distanceMatrix: Record<string, Record<string, { km: number; time: string; note: string }>> = {
    kathgodam: {
      kainchi: { km: 37, time: '1 hr 15 mins', note: 'Scenic ghat drive via Jeolikote & Bhowali NH-109.' },
      nainital: { km: 34, time: '1 hr 10 mins', note: 'Direct uphill climb via Jeolikote 2-lane highway.' },
      bhimtal: { km: 21, time: '45 mins', note: 'Gentle ascent via Ranibagh & HMT road.' },
      mukteshwar: { km: 62, time: '2 hrs 15 mins', note: 'Higher altitude ascent through oak & deodar forests.' },
    },
    delhi: {
      kainchi: { km: 315, time: '6 hrs 30 mins', note: 'Via NH-9 Hapur, Moradabad Bypass, Rampur, Rudrapur & Kathgodam.' },
      nainital: { km: 310, time: '6 hrs 30 mins', note: 'Smooth 4-lane expressway till Haldwani foothill.' },
      bhimtal: { km: 305, time: '6 hrs 15 mins', note: 'Fast highway route with well-equipped family food courts.' },
      mukteshwar: { km: 345, time: '7 hrs 45 mins', note: 'Scenic mountain bypass via Bhowali & Ramgarh.' },
    },
    pantnagar: {
      kainchi: { km: 70, time: '2 hrs 15 mins', note: 'Via Pantnagar Highway, Haldwani bypass & Kathgodam.' },
      nainital: { km: 68, time: '2 hrs 10 mins', note: 'Direct airport cab route through Kumaon foothills.' },
      bhimtal: { km: 55, time: '1 hr 45 mins', note: 'Shortest scenic route avoiding main Nainital town traffic.' },
      mukteshwar: { km: 95, time: '3 hrs 15 mins', note: 'Picturesque pine valley journey.' },
    },
    nainital: {
      kainchi: { km: 18, time: '45 mins', note: 'Via Bhowali Sanatorium junction. Beautiful ridge drive.' },
      bhimtal: { km: 22, time: '50 mins', note: 'Winding valley road connecting twin mountain lakes.' },
      mukteshwar: { km: 46, time: '1 hr 45 mins', note: 'Quiet Himalayan scenic drive through Ramgarh fruit bowl.' },
      kathgodam: { km: 34, time: '1 hr 10 mins', note: 'Downhill descent with panoramic valley viewpoints.' }
    }
  };

  const currentDistanceResult =
    distanceMatrix[selectedOrigin]?.[selectedDestination] || {
      km: 18,
      time: '45 mins',
      note: 'Standard Kumaon mountain driving time.'
    };

  // --- Tool 3: Packing Checklist State ---
  const [packingSeason, setPackingSeason] = useState<'summer' | 'monsoon' | 'winter'>('summer');
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});

  const packingItems = {
    summer: [
      'Light breathable cotton clothes for daytime temple visits',
      'Light jacket or shawl for cool mountain mornings & evenings',
      'Slip-on comfortable shoes / sandals (easy removal at temple gate)',
      'Sunscreen, UV sunglasses & broad-brim sunhat',
      'Personal water bottle & daily medicines',
      'Small cotton tote bag for carrying prasad & spiritual books'
    ],
    monsoon: [
      'Waterproof hooded rain jacket or sturdy windproof umbrella',
      'Shoes with deep rubber grips (prevent slipping on wet stone paths)',
      'Quick-dry clothing and extra pairs of cotton socks',
      'Waterproof pouch for mobile phones & vehicle documents',
      'Mosquito repellant and antiseptic wipes',
      'Flashlight or power bank for unexpected hill power fluctuations'
    ],
    winter: [
      'Thermal innerwear sets (top & bottom)',
      'Heavy woolen sweater or down feather fleece jacket',
      'Woolen cap (beanie), scarf, and warm gloves for 7:00 PM Aarti',
      'Thick woolen socks and sturdy walking boots',
      'Moisturizing cold cream and lip balm',
      'Thermos flask for hot water or herbal mountain tea'
    ]
  };

  const toggleCheckItem = (item: string) => {
    setCheckedItems((prev) => ({ ...prev, [item]: !prev[item] }));
  };

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
        schema={faqSchema}
      />

      {/* Breadcrumbs */}
      <Breadcrumbs items={meta.breadcrumbs} onNavigate={onNavigate} />

      {/* Header */}
      <header className="mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-forest-900/10 text-forest-800 text-xs font-semibold uppercase tracking-wider mb-4">
          <Sparkles className="w-3.5 h-3.5 text-gold-600" />
          <span>Interactive Pilgrimage Toolkit • Free Forever</span>
        </div>
        <h1 className="text-3xl md:text-5xl font-serif font-bold text-forest-900 leading-tight mb-4">
          Free Kainchi Dham Travel Calculators & Tools
        </h1>
        <p className="text-lg text-charcoal-700 max-w-4xl leading-relaxed">
          Interactive planning utilities designed with authentic local rates to estimate your complete trip budget, 
          calculate mountain driving times, and prepare your seasonal packing list.
        </p>
      </header>

      {/* Tool Selector Tabs */}
      <div className="mb-10 flex flex-wrap gap-3">
        <button
          onClick={() => setActiveToolTab('budget')}
          className={`flex items-center gap-2 px-5 py-3 rounded-2xl text-xs font-bold transition-all ${
            activeToolTab === 'budget'
              ? 'bg-forest-900 text-gold-400 shadow-md'
              : 'bg-white text-charcoal-800 hover:bg-forest-900/5 border border-forest-900/10'
          }`}
        >
          <Calculator className="w-4 h-4" />
          <span>1. Trip Budget Calculator</span>
        </button>

        <button
          onClick={() => setActiveToolTab('distance')}
          className={`flex items-center gap-2 px-5 py-3 rounded-2xl text-xs font-bold transition-all ${
            activeToolTab === 'distance'
              ? 'bg-forest-900 text-gold-400 shadow-md'
              : 'bg-white text-charcoal-800 hover:bg-forest-900/5 border border-forest-900/10'
          }`}
        >
          <Navigation className="w-4 h-4" />
          <span>2. Distance & Travel Time Matrix</span>
        </button>

        <button
          onClick={() => setActiveToolTab('packing')}
          className={`flex items-center gap-2 px-5 py-3 rounded-2xl text-xs font-bold transition-all ${
            activeToolTab === 'packing'
              ? 'bg-forest-900 text-gold-400 shadow-md'
              : 'bg-white text-charcoal-800 hover:bg-forest-900/5 border border-forest-900/10'
          }`}
        >
          <CheckSquare className="w-4 h-4" />
          <span>3. Seasonal Packing Checklist</span>
        </button>
      </div>

      {/* --- TOOL 1: TRIP BUDGET CALCULATOR --- */}
      {activeToolTab === 'budget' && (
        <div className="mb-16 bg-white rounded-3xl p-8 md:p-10 border border-forest-900/10 shadow-sm">
          <div className="mb-8 pb-4 border-b border-forest-900/10 flex flex-col md:flex-row md:items-center justify-between gap-2">
            <div>
              <h2 className="text-2xl font-serif font-bold text-forest-900">Kainchi Dham Trip Budget Calculator</h2>
              <p className="text-xs text-charcoal-600 mt-1">Estimates verified stay, cab transport, and satvik dining expenses.</p>
            </div>
            <div className="flex items-center gap-1.5 text-xs text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full font-medium">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Real Verified Local Rates</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Input Controls */}
            <div className="lg:col-span-7 space-y-6">
              {/* Number of Travelers */}
              <div>
                <label className="block text-xs font-bold text-forest-900 uppercase tracking-wider mb-2">
                  Number of Pilgrims / Guests: <span className="text-gold-600 text-sm font-extrabold">{peopleCount}</span>
                </label>
                <input
                  type="range"
                  min={1}
                  max={12}
                  value={peopleCount}
                  onChange={(e) => setPeopleCount(Number(e.target.value))}
                  className="w-full accent-forest-900 cursor-pointer"
                />
                <div className="flex justify-between text-[11px] text-charcoal-500 mt-1">
                  <span>1 Solo</span>
                  <span>4 Family</span>
                  <span>8 Group</span>
                  <span>12 Max</span>
                </div>
              </div>

              {/* Trip Duration */}
              <div>
                <label className="block text-xs font-bold text-forest-900 uppercase tracking-wider mb-2">
                  Trip Duration (Days): <span className="text-gold-600 text-sm font-extrabold">{tripDays} Days</span>
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[1, 2, 3].map((d) => (
                    <button
                      key={d}
                      onClick={() => setTripDays(d)}
                      className={`py-2 rounded-xl text-xs font-bold transition-all ${
                        tripDays === d
                          ? 'bg-forest-900 text-gold-400'
                          : 'bg-ivory-100 text-charcoal-800 hover:bg-forest-900/10'
                      }`}
                    >
                      {d === 1 ? '1 Day (Express)' : `${d} Days / ${d - 1} Night`}
                    </button>
                  ))}
                </div>
              </div>

              {/* Stay Tier */}
              <div>
                <label className="block text-xs font-bold text-forest-900 uppercase tracking-wider mb-2">
                  Stay Preference (Per Room / Night):
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { label: 'Homestay', price: 2200 },
                    { label: 'Boutique Retreat', price: 3499 },
                    { label: 'Luxury Villa', price: 6500 }
                  ].map((tier) => (
                    <button
                      key={tier.price}
                      onClick={() => setHotelTier(tier.price)}
                      className={`p-3 rounded-xl text-left transition-all ${
                        hotelTier === tier.price
                          ? 'bg-forest-900 text-ivory-100'
                          : 'bg-ivory-100 text-charcoal-800 hover:bg-forest-900/10'
                      }`}
                    >
                      <span className="block text-xs font-bold">{tier.label}</span>
                      <span className="text-[11px] text-gold-400 font-semibold block mt-0.5">₹{tier.price}/nt</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Transport Vehicle */}
              <div>
                <label className="block text-xs font-bold text-forest-900 uppercase tracking-wider mb-2">
                  Chauffeur Cab (Roundtrip Station / Circuit):
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { label: 'Sedan (Dzire)', price: 2999 },
                    { label: 'SUV (Ertiga)', price: 4399 },
                    { label: 'Innova Crysta', price: 5999 }
                  ].map((cab) => (
                    <button
                      key={cab.price}
                      onClick={() => setTransportType(cab.price)}
                      className={`p-3 rounded-xl text-left transition-all ${
                        transportType === cab.price
                          ? 'bg-forest-900 text-ivory-100'
                          : 'bg-ivory-100 text-charcoal-800 hover:bg-forest-900/10'
                      }`}
                    >
                      <span className="block text-xs font-bold">{cab.label}</span>
                      <span className="text-[11px] text-gold-400 font-semibold block mt-0.5">₹{cab.price}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Live Budget Breakdown Output */}
            <div className="lg:col-span-5 p-6 rounded-3xl bg-forest-900 text-ivory-100 flex flex-col justify-between shadow-xl">
              <div>
                <span className="text-xs font-bold text-gold-400 uppercase tracking-wider">Estimated Total Budget</span>
                <div className="text-3xl md:text-4xl font-serif font-bold text-gold-400 mt-2">
                  ₹{grandTotal.toLocaleString('en-IN')}
                </div>
                <span className="text-xs text-ivory-300">
                  Approx. ₹{perPersonCost.toLocaleString('en-IN')} per person for {peopleCount} pilgrims
                </span>

                {/* Line Items */}
                <div className="mt-6 space-y-3 text-xs border-t border-forest-800 pt-4">
                  <div className="flex justify-between">
                    <span className="text-ivory-300">Stay ({roomsNeeded} room × {tripDays - 1 || 1} nt)</span>
                    <span className="font-bold text-ivory-100">₹{totalHotelCost.toLocaleString('en-IN')}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-ivory-300">Chauffeur Transportation</span>
                    <span className="font-bold text-ivory-100">₹{totalTransportCost.toLocaleString('en-IN')}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-ivory-300">Satvik Meals & Prasad</span>
                    <span className="font-bold text-ivory-100">₹{totalFoodCost.toLocaleString('en-IN')}</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 space-y-3">
                <button
                  onClick={() => onNavigate('/hotels')}
                  className="w-full py-3 rounded-xl bg-gold-500 hover:bg-gold-400 text-forest-950 font-bold text-xs transition-all flex items-center justify-center gap-2 shadow-md"
                >
                  <span>Book Stays in this Budget</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={onOpenPlanner}
                  className="w-full py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-ivory-100 font-semibold text-xs border border-white/10 transition-all text-center"
                >
                  Customize in Trip Planner
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* --- TOOL 2: DISTANCE MATRIX --- */}
      {activeToolTab === 'distance' && (
        <div className="mb-16 bg-white rounded-3xl p-8 md:p-10 border border-forest-900/10 shadow-sm">
          <div className="mb-8 pb-4 border-b border-forest-900/10">
            <h2 className="text-2xl font-serif font-bold text-forest-900">Kumaon Distance & Driving Time Matrix</h2>
            <p className="text-xs text-charcoal-600 mt-1">Instant calculations between regional transit hubs and shrines.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div>
              <label className="block text-xs font-bold text-forest-900 uppercase tracking-wider mb-2">Starting From (Origin):</label>
              <select
                value={selectedOrigin}
                onChange={(e) => setSelectedOrigin(e.target.value)}
                className="w-full p-3 rounded-xl bg-ivory-100 border border-forest-900/10 text-xs font-semibold text-forest-900"
              >
                <option value="kathgodam">Kathgodam Railway Station</option>
                <option value="delhi">New Delhi NCR</option>
                <option value="pantnagar">Pantnagar Airport</option>
                <option value="nainital">Nainital Mall Road</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-forest-900 uppercase tracking-wider mb-2">Destination Point:</label>
              <select
                value={selectedDestination}
                onChange={(e) => setSelectedDestination(e.target.value)}
                className="w-full p-3 rounded-xl bg-ivory-100 border border-forest-900/10 text-xs font-semibold text-forest-900"
              >
                <option value="kainchi">Kainchi Dham Temple</option>
                <option value="nainital">Nainital Lake</option>
                <option value="bhimtal">Bhimtal Lake</option>
                <option value="mukteshwar">Mukteshwar Himalayan Ridge</option>
              </select>
            </div>
          </div>

          {/* Result Card */}
          <div className="p-6 rounded-2xl bg-forest-900 text-ivory-100 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <span className="text-xs font-bold text-gold-400 uppercase tracking-wider">Driving Calculation</span>
              <div className="flex items-baseline gap-4 mt-2">
                <span className="text-3xl font-serif font-bold text-gold-400">{currentDistanceResult.km} km</span>
                <span className="text-lg text-ivory-200">~{currentDistanceResult.time}</span>
              </div>
              <p className="text-xs text-ivory-300 mt-2 max-w-xl">{currentDistanceResult.note}</p>
            </div>
            <button
              onClick={() => onNavigate('/taxi')}
              className="px-6 py-3 rounded-xl bg-gold-500 hover:bg-gold-400 text-forest-950 font-bold text-xs transition-all shrink-0 flex items-center gap-2"
            >
              <span>Book Chauffeur for this Route</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}

      {/* --- TOOL 3: PACKING CHECKLIST --- */}
      {activeToolTab === 'packing' && (
        <div className="mb-16 bg-white rounded-3xl p-8 md:p-10 border border-forest-900/10 shadow-sm">
          <div className="mb-8 pb-4 border-b border-forest-900/10 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h2 className="text-2xl font-serif font-bold text-forest-900">Seasonal Pilgrimage Packing Checklist</h2>
              <p className="text-xs text-charcoal-600 mt-1">Check off essential items tailored to the Himalayan climate.</p>
            </div>
            <div className="flex items-center gap-2">
              {(['summer', 'monsoon', 'winter'] as const).map((season) => (
                <button
                  key={season}
                  onClick={() => setPackingSeason(season)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-bold capitalize transition-all ${
                    packingSeason === season
                      ? 'bg-forest-900 text-gold-400'
                      : 'bg-ivory-100 text-charcoal-700 hover:bg-forest-900/10'
                  }`}
                >
                  {season}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-3 mb-8">
            {packingItems[packingSeason].map((item, idx) => {
              const isChecked = !!checkedItems[item];
              return (
                <div
                  key={idx}
                  onClick={() => toggleCheckItem(item)}
                  className={`p-4 rounded-xl border transition-all cursor-pointer flex items-center gap-3 ${
                    isChecked
                      ? 'bg-emerald-50/70 border-emerald-300 text-emerald-950 line-through opacity-75'
                      : 'bg-ivory-100 border-forest-900/5 hover:border-gold-500/40 text-charcoal-800'
                  }`}
                >
                  <div
                    className={`w-5 h-5 rounded-md flex items-center justify-center shrink-0 transition-colors ${
                      isChecked ? 'bg-emerald-600 text-white' : 'border border-charcoal-400 bg-white'
                    }`}
                  >
                    {isChecked && <Check className="w-3.5 h-3.5" />}
                  </div>
                  <span className="text-xs md:text-sm font-medium">{item}</span>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* FAQs */}
      <section className="mb-14 bg-white p-8 rounded-3xl border border-forest-900/10 shadow-sm">
        <h2 className="text-2xl font-serif font-bold text-forest-900 mb-6">Frequently Asked Tool Questions</h2>
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
          title="Explore Connected Stays & Route Guides"
          links={meta.relatedRoutes}
          onNavigate={onNavigate}
        />
      )}
    </div>
  );
};
