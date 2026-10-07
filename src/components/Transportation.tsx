import React, { useState } from 'react';
import { TRANSPORT_DATA } from '../data/transportation';
import type { TransportService } from '../types';
import {
  Car,
  Clock,
  Users,
  Briefcase,
  CheckCircle2,
  ArrowRight,
  Train,
  Plane,
  MapPin,
  Compass,
  Bus,
  ShieldCheck
} from 'lucide-react';

interface TransportationProps {
  onBookTransport: (service: TransportService, vehicleType?: string) => void;
}

export const Transportation: React.FC<TransportationProps> = ({ onBookTransport }) => {
  const [selectedCategory, setSelectedCategory] = useState<'All' | 'Railway' | 'Airport' | 'Sightseeing'>('All');
  const [activeTab, setActiveTab] = useState<'train' | 'airport' | 'distance' | 'shared'>('train');

  const filteredServices = selectedCategory === 'All'
    ? TRANSPORT_DATA
    : TRANSPORT_DATA.filter((s) => s.category === selectedCategory);

  return (
    <section id="transportation" className="py-20 sm:py-28 bg-ivory-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-12 gap-6">
          <div className="max-w-2xl">
            <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-forest-700 block mb-2">
              HOW TO REACH & PRIVATE TRANSIT
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-light text-charcoal-900 tracking-tight">
              The journey matters too.
            </h2>
            <p className="text-charcoal-600 text-sm sm:text-base mt-3 leading-relaxed">
              From Kathgodam station and Pantnagar airport to scenic Nainital circuits, discover accurate distance calculations, train schedules, and fixed-rate mountain chauffeur bookings.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-1.5 p-1.5 bg-ivory-200/80 rounded-full border border-ivory-300 w-fit">
            {(['All', 'Railway', 'Airport', 'Sightseeing'] as const).map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wider transition-all duration-300 ${
                  selectedCategory === cat
                    ? 'bg-forest-800 text-ivory-100 shadow-sm'
                    : 'text-charcoal-700 hover:text-charcoal-900 hover:bg-ivory-300/50'
                }`}
              >
                {cat === 'Railway' ? 'Kathgodam Train' : cat === 'Airport' ? 'Airport Cab' : cat}
              </button>
            ))}
          </div>
        </div>

        {/* Verified Transit Intelligence Banner & Tabbed Quick Guide */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-ivory-300 shadow-sm mb-12">
          <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 mb-6 border-b border-ivory-200 gap-4">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-forest-700">VERIFIED LOGISTICS DIRECTORY</span>
              <h3 className="font-serif text-2xl font-medium text-charcoal-900 mt-0.5">
                How to Reach Kainchi Dham — Transit Quick Reference
              </h3>
            </div>

            {/* Quick Switch Tabs */}
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setActiveTab('train')}
                className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold transition-all ${
                  activeTab === 'train'
                    ? 'bg-forest-800 text-white shadow-sm'
                    : 'bg-ivory-100 text-charcoal-700 hover:bg-ivory-200 border border-ivory-300'
                }`}
              >
                <Train className="w-3.5 h-3.5" />
                <span>By Train (KGM)</span>
              </button>

              <button
                onClick={() => setActiveTab('airport')}
                className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold transition-all ${
                  activeTab === 'airport'
                    ? 'bg-forest-800 text-white shadow-sm'
                    : 'bg-ivory-100 text-charcoal-700 hover:bg-ivory-200 border border-ivory-300'
                }`}
              >
                <Plane className="w-3.5 h-3.5" />
                <span>By Air (PGH & DEL)</span>
              </button>

              <button
                onClick={() => setActiveTab('distance')}
                className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold transition-all ${
                  activeTab === 'distance'
                    ? 'bg-forest-800 text-white shadow-sm'
                    : 'bg-ivory-100 text-charcoal-700 hover:bg-ivory-200 border border-ivory-300'
                }`}
              >
                <MapPin className="w-3.5 h-3.5" />
                <span>Kathgodam Distance (37 km)</span>
              </button>

              <button
                onClick={() => setActiveTab('shared')}
                className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold transition-all ${
                  activeTab === 'shared'
                    ? 'bg-forest-800 text-white shadow-sm'
                    : 'bg-ivory-100 text-charcoal-700 hover:bg-ivory-200 border border-ivory-300'
                }`}
              >
                <Bus className="w-3.5 h-3.5" />
                <span>Buses & Shared Taxis</span>
              </button>
            </div>
          </div>

          {/* Tab Content 1: Train Guide */}
          {activeTab === 'train' && (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 animate-in fade-in duration-200">
              <div className="lg:col-span-2 space-y-4">
                <div className="flex items-center gap-2 text-forest-900 font-serif text-lg font-medium">
                  <Train className="w-5 h-5 text-forest-700" />
                  <h4>Nearest Railway Station: Kathgodam (KGM) — 37 km from Temple</h4>
                </div>
                <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed">
                  Kathgodam is the terminal railway station of Kumaon. From Kathgodam, private hill taxis take approx. <strong>1 hour 15 minutes</strong> to reach Kainchi Dham via Jeolikot and Bhowali on NH 109.
                </p>

                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs border border-ivory-200 rounded-xl overflow-hidden">
                    <thead className="bg-ivory-200/80 text-charcoal-800 uppercase tracking-wider text-[10px] font-bold">
                      <tr>
                        <th className="p-2.5">Train Name & Number</th>
                        <th className="p-2.5">From</th>
                        <th className="p-2.5">Dep. Time</th>
                        <th className="p-2.5">Arr. KGM</th>
                        <th className="p-2.5">Frequency</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-ivory-200 text-charcoal-700">
                      <tr className="hover:bg-ivory-100/50">
                        <td className="p-2.5 font-semibold text-forest-900">NDLS Kathgodam Shatabdi (12040)</td>
                        <td className="p-2.5">New Delhi (NDLS)</td>
                        <td className="p-2.5">06:20 AM</td>
                        <td className="p-2.5 font-semibold text-forest-800">11:40 AM</td>
                        <td className="p-2.5">Daily</td>
                      </tr>
                      <tr className="hover:bg-ivory-100/50">
                        <td className="p-2.5 font-semibold text-forest-900">Ranikhet Express (15013)</td>
                        <td className="p-2.5">Old Delhi (DLI)</td>
                        <td className="p-2.5">10:00 PM (Overnight)</td>
                        <td className="p-2.5 font-semibold text-forest-800">05:05 AM</td>
                        <td className="p-2.5">Daily</td>
                      </tr>
                      <tr className="hover:bg-ivory-100/50">
                        <td className="p-2.5 font-semibold text-forest-900">Uttar Sampark Kranti (15035)</td>
                        <td className="p-2.5">Old Delhi (DLI)</td>
                        <td className="p-2.5">04:00 PM</td>
                        <td className="p-2.5 font-semibold text-forest-800">10:45 PM</td>
                        <td className="p-2.5">Daily</td>
                      </tr>
                      <tr className="hover:bg-ivory-100/50">
                        <td className="p-2.5 font-semibold text-forest-900">Bagh Express (13019)</td>
                        <td className="p-2.5">Howrah / Lucknow</td>
                        <td className="p-2.5">Multiple</td>
                        <td className="p-2.5 font-semibold text-forest-800">09:30 AM</td>
                        <td className="p-2.5">Daily</td>
                      </tr>
                      <tr className="hover:bg-ivory-100/50">
                        <td className="p-2.5 font-semibold text-forest-900">DDN KGM Jan Shatabdi (12091)</td>
                        <td className="p-2.5">Dehradun (DDN)</td>
                        <td className="p-2.5">03:45 PM</td>
                        <td className="p-2.5 font-semibold text-forest-800">11:35 PM</td>
                        <td className="p-2.5">Tue, Thu, Sat</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="bg-ivory-100 p-5 rounded-2xl border border-ivory-300 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-forest-800 block mb-1">STATION PICKUP RATES</span>
                  <div className="text-xl font-serif font-medium text-charcoal-900 mb-2">Kathgodam to Temple Gate</div>
                  <div className="space-y-2 text-xs text-charcoal-700">
                    <div className="flex justify-between py-1 border-b border-ivory-300">
                      <span>Sedan (Dzire / Etios):</span>
                      <strong className="text-forest-900">₹1,499</strong>
                    </div>
                    <div className="flex justify-between py-1 border-b border-ivory-300">
                      <span>Ertiga 6-Seater SUV:</span>
                      <strong className="text-forest-900">₹2,199</strong>
                    </div>
                    <div className="flex justify-between py-1 border-b border-ivory-300">
                      <span>Innova Crysta Luxury:</span>
                      <strong className="text-forest-900">₹2,999</strong>
                    </div>
                  </div>
                </div>
                <div className="mt-4 pt-3 border-t border-ivory-300 text-[11px] text-charcoal-600 flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-forest-700" />
                  <span>Fixed upfront pricing with station meet & greet</span>
                </div>
              </div>
            </div>
          )}

          {/* Tab Content 2: Airport Guide */}
          {activeTab === 'airport' && (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 animate-in fade-in duration-200">
              <div className="lg:col-span-2 space-y-4">
                <div className="flex items-center gap-2 text-forest-900 font-serif text-lg font-medium">
                  <Plane className="w-5 h-5 text-sky-700" />
                  <h4>Nearest Domestic Airport: Pantnagar (PGH) — 70 km away</h4>
                </div>
                <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed">
                  <strong>Pantnagar Airport (PGH)</strong> is the closest airport to Kainchi Dham, situated approximately <strong>70 km</strong> (~2 to 2.5 hours hill drive). It connects with daily scheduled flights from New Delhi (DEL) and Dehradun (DED) operated by Alliance Air and IndiGo.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <div className="p-3.5 rounded-2xl bg-ivory-100 border border-ivory-200">
                    <div className="text-xs font-bold text-charcoal-900 mb-1">1. Pantnagar Airport (PGH)</div>
                    <p className="text-xs text-charcoal-600 leading-relaxed">
                      Distance: <strong>70 km</strong> (~2 hrs)<br />
                      Best for: Fast domestic flight from Delhi/Dehradun.<br />
                      Cab fare: Sedan ₹2,499 | Innova ₹3,699
                    </p>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-ivory-100 border border-ivory-200">
                    <div className="text-xs font-bold text-charcoal-900 mb-1">2. Delhi IGI Airport (DEL)</div>
                    <p className="text-xs text-charcoal-600 leading-relaxed">
                      Distance: <strong>320 km</strong> (~6.5 to 7.5 hrs)<br />
                      Best for: All international & pan-India flights.<br />
                      Cab fare: Sedan ₹4,999 | Innova ₹7,499
                    </p>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-ivory-100 border border-ivory-200">
                    <div className="text-xs font-bold text-charcoal-900 mb-1">3. Bareilly Airport (BEP)</div>
                    <p className="text-xs text-charcoal-600 leading-relaxed">
                      Distance: <strong>140 km</strong> (~3.5 hrs drive)<br />
                      Flights from: Mumbai, Bangalore, Jaipur.
                    </p>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-ivory-100 border border-ivory-200">
                    <div className="text-xs font-bold text-charcoal-900 mb-1">4. Dehradun Airport (DED)</div>
                    <p className="text-xs text-charcoal-600 leading-relaxed">
                      Distance: <strong>290 km</strong> (~7 hrs drive)<br />
                      Flights from: Pan-India domestic hubs.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-sky-50/70 p-5 rounded-2xl border border-sky-100 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-sky-800 block mb-1">AIRPORT CONCIERGE</span>
                  <div className="text-xl font-serif font-medium text-charcoal-900 mb-2">Flight Pickup Service</div>
                  <p className="text-xs text-charcoal-600 leading-relaxed mb-4">
                    Our verified chauffeurs track your flight live. Even if your flight is delayed, your driver awaits at the arrival terminal with a personalized name card.
                  </p>
                </div>
                <div className="text-xs font-semibold text-sky-900 bg-white p-3 rounded-xl border border-sky-200 text-center">
                  Door-to-door hill ascent in comfortable AC vehicles
                </div>
              </div>
            </div>
          )}

          {/* Tab Content 3: Kathgodam Distance Guide */}
          {activeTab === 'distance' && (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 animate-in fade-in duration-200">
              <div className="lg:col-span-2 space-y-4">
                <div className="flex items-center gap-2 text-forest-900 font-serif text-lg font-medium">
                  <MapPin className="w-5 h-5 text-amber-700" />
                  <h4>Kathgodam to Kainchi Dham Distance: 37 Kilometers (NH 109)</h4>
                </div>
                <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed">
                  The road from Kathgodam to Kainchi Dham is well-maintained double-lane mountain tarmac (NH 109). Total distance is exactly <strong>37 km</strong>, with an ascent from 554 meters (Kathgodam) to 1,400 meters (Kainchi Dham).
                </p>

                <div className="space-y-2 text-xs">
                  <div className="p-3 bg-ivory-100 rounded-xl flex items-center justify-between border border-ivory-200">
                    <span className="font-semibold text-charcoal-900">1. Kathgodam Station ➔ Ranibagh</span>
                    <span className="text-charcoal-600 font-medium">5 km · 10 min</span>
                  </div>
                  <div className="p-3 bg-ivory-100 rounded-xl flex items-center justify-between border border-ivory-200">
                    <span className="font-semibold text-charcoal-900">2. Ranibagh ➔ Jeolikot (NH 109 Hill Climb)</span>
                    <span className="text-charcoal-600 font-medium">18 km · 35 min</span>
                  </div>
                  <div className="p-3 bg-ivory-100 rounded-xl flex items-center justify-between border border-ivory-200">
                    <span className="font-semibold text-charcoal-900">3. Jeolikot ➔ Bhowali Main Junction</span>
                    <span className="text-charcoal-600 font-medium">6 km · 15 min</span>
                  </div>
                  <div className="p-3 bg-ivory-100 rounded-xl flex items-center justify-between border border-ivory-200">
                    <span className="font-semibold text-charcoal-900">4. Bhowali ➔ Kainchi Dham Temple Gate</span>
                    <span className="text-charcoal-600 font-medium">8 km · 15 min</span>
                  </div>
                </div>
              </div>

              <div className="bg-amber-50/60 p-5 rounded-2xl border border-amber-200/70 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-amber-800 block mb-1">TRAVEL ADVISORY</span>
                  <div className="text-xl font-serif font-medium text-charcoal-900 mb-2">Hill Driving Tips</div>
                  <ul className="space-y-2 text-xs text-charcoal-700 list-disc list-inside leading-relaxed">
                    <li>Allow extra 20–30 mins on weekends during peak tourist season.</li>
                    <li>Restroom and fresh fruit stalls available at Bhowali market.</li>
                    <li>Motion sickness tablets recommended for sensitive travelers.</li>
                  </ul>
                </div>
                <div className="mt-4 pt-3 border-t border-amber-200 text-xs font-semibold text-amber-900">
                  Total Travel Time: ~1 hr 15 mins to 1 hr 30 mins
                </div>
              </div>
            </div>
          )}

          {/* Tab Content 4: Shared & Bus Guide */}
          {activeTab === 'shared' && (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 animate-in fade-in duration-200">
              <div className="lg:col-span-2 space-y-4">
                <div className="flex items-center gap-2 text-forest-900 font-serif text-lg font-medium">
                  <Bus className="w-5 h-5 text-emerald-700" />
                  <h4>Budget Transit: Shared Cabs & Uttarakhand Roadways Buses</h4>
                </div>
                <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed">
                  For solo travelers and budget pilgrims, frequent shared public transportation operates daily from Kathgodam and Haldwani.
                </p>

                <div className="space-y-3 pt-2">
                  <div className="p-3.5 rounded-2xl bg-ivory-100 border border-ivory-200 text-xs">
                    <strong className="text-charcoal-900 block mb-1">Option A: Shared Jeep / Sumo from Kathgodam</strong>
                    <p className="text-charcoal-600 leading-relaxed">
                      Shared jeeps are available outside Kathgodam railway station heading to <strong>Bhowali</strong> (₹100 to ₹150 per seat). From Bhowali taxi stand, take a shared local taxi/cab directly to Kainchi Dham gate (₹30 to ₹50 per seat, 15 min drive).
                    </p>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-ivory-100 border border-ivory-200 text-xs">
                    <strong className="text-charcoal-900 block mb-1">Option B: State Roadways Bus (UTC)</strong>
                    <p className="text-charcoal-600 leading-relaxed">
                      Regular Uttarakhand State Transport buses heading towards <strong>Almora, Ranikhet, or Kausani</strong> depart from Haldwani/Kathgodam bus station every 30 minutes. Request the conductor to drop you at the <strong>Kainchi Dham Temple Stop</strong> (Fare: approx. ₹70 to ₹90).
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-emerald-50/70 p-5 rounded-2xl border border-emerald-100 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-800 block mb-1">PRO-TIP</span>
                  <div className="text-xl font-serif font-medium text-charcoal-900 mb-2">Morning Aarti Arrival</div>
                  <p className="text-xs text-charcoal-600 leading-relaxed">
                    If attending the 7:00 AM Morning Aarti, private pre-booked chauffeur transfer from Kathgodam is recommended as shared options usually begin around 6:30–7:00 AM.
                  </p>
                </div>
                <div className="text-xs font-semibold text-emerald-900 bg-white p-3 rounded-xl border border-emerald-200 text-center">
                  Private Cabs offer 24/7 punctual station pickups
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Transportation Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="glass-card bg-white rounded-3xl overflow-hidden border border-ivory-300 shadow-luxury hover:shadow-luxury-hover transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Visual Header */}
                <div className="relative h-60 overflow-hidden bg-forest-950">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-950/90 via-forest-950/30 to-transparent" />
                  
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full text-[11px] font-semibold tracking-wider uppercase bg-forest-900/90 text-gold-300 backdrop-blur-md border border-white/10">
                      {service.category} Transfer
                    </span>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="font-serif text-xl sm:text-2xl font-medium text-white mb-1">
                      {service.title}
                    </h3>
                    <div className="flex items-center gap-4 text-xs text-ivory-200">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-gold-400" />
                        {service.duration}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Details & Inclusions */}
                <div className="p-6">
                  <p className="text-xs text-charcoal-600 leading-relaxed mb-4">
                    {service.description}
                  </p>

                  <div className="grid grid-cols-2 gap-2 mb-6">
                    {service.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-1.5 text-xs text-charcoal-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-forest-700 flex-shrink-0" />
                        <span className="truncate">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Vehicle Fleet Selector Options */}
                  <div className="border-t border-ivory-200 pt-4">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-charcoal-500 block mb-3">
                      Available Vehicle Fleet & Fixed Upfront Pricing
                    </span>
                    <div className="space-y-3">
                      {service.vehicles.map((v, i) => (
                        <div
                          key={i}
                          className="flex items-center justify-between p-3 rounded-2xl bg-ivory-100/90 hover:bg-ivory-200 transition-all border border-ivory-300 group/car"
                        >
                          <div className="flex items-center gap-3.5">
                            <div className="w-14 h-12 rounded-xl overflow-hidden bg-white border border-ivory-300 flex-shrink-0 shadow-sm">
                              {v.image ? (
                                <img
                                  src={v.image}
                                  alt={v.model}
                                  className="w-full h-full object-cover group-hover/car:scale-108 transition-transform duration-300"
                                />
                              ) : (
                                <div className="w-full h-full flex items-center justify-center bg-forest-800/10 text-forest-800">
                                  <Car className="w-5 h-5" />
                                </div>
                              )}
                            </div>

                            <div>
                              <div className="flex items-center gap-2">
                                <span className="text-xs font-bold text-charcoal-900">{v.type}</span>
                                <span className="text-[11px] text-forest-800 font-semibold">({v.model})</span>
                                {v.popular && (
                                  <span className="text-[9px] font-bold uppercase tracking-wider bg-gold-400/25 text-gold-800 px-1.5 py-0.5 rounded-full border border-gold-400/40">
                                    Popular
                                  </span>
                                )}
                              </div>
                              <div className="flex items-center gap-3 text-[10px] text-charcoal-600 mt-1">
                                <span className="flex items-center gap-1 font-medium"><Users className="w-3 h-3 text-forest-800" /> {v.capacity}</span>
                                <span className="flex items-center gap-1 font-medium"><Briefcase className="w-3 h-3 text-forest-800" /> {v.luggage}</span>
                              </div>
                            </div>
                          </div>

                          <div className="text-right">
                            <span className="text-sm sm:text-base font-bold text-forest-900">₹{v.price.toLocaleString('en-IN')}</span>
                            <span className="text-[10px] text-charcoal-500 block">all-inclusive</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Card Footer CTA */}
              <div className="p-6 pt-0">
                <button
                  onClick={() => onBookTransport(service)}
                  className="w-full py-3.5 px-6 rounded-2xl bg-forest-800 hover:bg-forest-700 text-ivory-100 text-xs font-semibold uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 shadow-sm"
                >
                  <span>Book This Route</span>
                  <ArrowRight className="w-3.5 h-3.5 text-gold-400" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
