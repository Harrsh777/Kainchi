import React, { useState } from 'react';
import {
  Calendar,
  Users,
  Sparkles,
  Send,
  CheckCircle,
  ArrowRight,
  Shield,
  MapPin,
  Wallet,
  Car,
  Mountain,
  Hotel,
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { sendNotificationEmail } from '../services/emailService';
import { PLANNER_CITIES } from '../data/fromCities';
import { generateTrip, daysFromDates, type BudgetBand, type HotelPref, type GeneratedTrip } from '../lib/tripGenerator';

interface TripPlannerProps {
  onPlanSubmitted?: () => void;
  compact?: boolean;
}

const inputClass =
  'w-full bg-forest-900/60 border border-white/20 rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-gold-400';

export const TripPlanner: React.FC<TripPlannerProps> = ({ onPlanSubmitted, compact }) => {
  const [startCity, setStartCity] = useState('Delhi');
  const [customCity, setCustomCity] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [days, setDays] = useState(3);
  const [people, setPeople] = useState(2);
  const [budget, setBudget] = useState<BudgetBand>('15-30k');
  const [hotelPref, setHotelPref] = useState<HotelPref>('boutique');
  const [carRequired, setCarRequired] = useState(true);
  const [nainital, setNainital] = useState(true);
  const [bhimtal, setBhimtal] = useState(true);
  const [mukteshwar, setMukteshwar] = useState(false);

  const [trip, setTrip] = useState<GeneratedTrip | null>(null);
  const [contactName, setContactName] = useState('');
  const [contactPhone, setContactPhone] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [isSending, setIsSending] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const city = startCity === 'Other' ? customCity.trim() || 'Your city' : startCity;

  const handleGenerate = (e: React.FormEvent) => {
    e.preventDefault();
    const resolvedDays = daysFromDates(startDate, endDate, days);
    setDays(resolvedDays);
    const generated = generateTrip({
      startCity: city,
      startDate,
      endDate,
      people,
      budget,
      hotelPref,
      carRequired,
      extras: { nainital, bhimtal, mukteshwar },
      days: resolvedDays,
    });
    setTrip(generated);
    setIsSubmitted(false);
  };

  const handleQuote = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactPhone || !contactName || !trip) {
      alert('Please provide your name and WhatsApp number so we can send the quote.');
      return;
    }
    setIsSending(true);
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#18382D', '#B99A62', '#718477', '#F4EFE6'],
      });
    } catch {
      // ignore
    }

    await sendNotificationEmail({
      subject: `Trip quote: ${trip.title} from ${city}`,
      formType: 'TRIP_QUOTE',
      customerName: contactName,
      customerPhone: contactPhone,
      customerEmail: contactEmail,
      details: {
        'Starting city': city,
        'Dates': startDate && endDate ? `${startDate} → ${endDate}` : `${days} days`,
        People: people,
        Budget: budget,
        'Hotel preference': hotelPref,
        Car: carRequired ? trip.vehicleLabel : 'No',
        Extras: [nainital && 'Nainital', bhimtal && 'Bhimtal', mukteshwar && 'Mukteshwar'].filter(Boolean).join(', ') || 'Temple focus',
        Stay: `${trip.stay.name} (₹${trip.stay.pricePerNight}/night)`,
        'Suggested total': `₹${trip.estimate.total.toLocaleString('en-IN')}`,
        Itinerary: trip.days.map((d) => `Day ${d.day}: ${d.route}`).join(' | '),
      },
    });

    setIsSending(false);
    setIsSubmitted(true);
    onPlanSubmitted?.();
  };

  return (
    <section
      id="plan-your-trip"
      className={`${compact ? 'py-8' : 'py-20 sm:py-28'} bg-forest-900 text-ivory-100 relative overflow-hidden`}
    >
      <div className="absolute inset-0 bg-subtle-radial opacity-40 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {!compact && (
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
            <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-gold-300 block mb-2">
              Free Kainchi Dham Trip Planner
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-light text-white tracking-tight">
              Build a real itinerary.{' '}
              <span className="font-normal italic text-ivory-300 font-serif">Then ask us to arrange it.</span>
            </h2>
            <p className="text-ivory-300/80 text-sm mt-3">
              Starting city, dates, budget, stay style, car, and whether you want Nainital, Bhimtal or Mukteshwar.
            </p>
          </div>
        )}

        <div className="glass-dark bg-forest-800/80 rounded-3xl p-6 sm:p-10 border border-white/10 shadow-2xl backdrop-blur-xl">
          {isSubmitted ? (
            <div className="text-center py-8 sm:py-12 space-y-4">
              <div className="w-16 h-16 rounded-full bg-gold-400/20 text-gold-300 flex items-center justify-center mx-auto border border-gold-400/40">
                <CheckCircle className="w-8 h-8 text-gold-400" />
              </div>
              <h3 className="font-serif text-3xl font-light text-white">Quote request received</h3>
              <p className="text-ivory-200 max-w-lg mx-auto text-sm leading-relaxed">
                Thank you, <strong className="text-white">{contactName}</strong>. We will WhatsApp hotel + car + travel help for your {trip?.title.toLowerCase()}.
              </p>
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 max-w-md mx-auto text-xs text-ivory-300">
                <div className="flex items-center justify-center gap-2 text-gold-300 font-semibold mb-1">
                  <Shield className="w-4 h-4" />
                  Expect a message on {contactPhone}
                </div>
              </div>
              <button
                type="button"
                onClick={() => {
                  setIsSubmitted(false);
                  setTrip(null);
                }}
                className="mt-4 px-6 py-2.5 rounded-full border border-white/20 text-xs uppercase tracking-wider text-ivory-300 hover:text-white"
              >
                Plan another trip
              </button>
            </div>
          ) : !trip ? (
            <form onSubmit={handleGenerate} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                  <label className="block text-xs font-semibold uppercase tracking-wider text-gold-300 mb-2 flex items-center gap-1.5">
                    <MapPin className="w-4 h-4" /> Starting city
                  </label>
                  <select value={startCity} onChange={(e) => setStartCity(e.target.value)} className={inputClass}>
                    {PLANNER_CITIES.map((c) => (
                      <option key={c} value={c}>
                        {c}
                      </option>
                    ))}
                  </select>
                  {startCity === 'Other' && (
                    <input
                      className={`${inputClass} mt-2`}
                      placeholder="Your city"
                      value={customCity}
                      onChange={(e) => setCustomCity(e.target.value)}
                    />
                  )}
                </div>
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                  <label className="block text-xs font-semibold uppercase tracking-wider text-gold-300 mb-2 flex items-center gap-1.5">
                    <Calendar className="w-4 h-4" /> Number of days
                  </label>
                  <select
                    value={days}
                    onChange={(e) => setDays(Number(e.target.value))}
                    className={inputClass}
                  >
                    {[2, 3, 4, 5].map((d) => (
                      <option key={d} value={d}>
                        {d} days
                      </option>
                    ))}
                  </select>
                </div>
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                  <label className="block text-xs font-semibold uppercase tracking-wider text-gold-300 mb-2">Travel dates</label>
                  <div className="grid grid-cols-2 gap-2">
                    <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} className={inputClass} />
                    <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} className={inputClass} />
                  </div>
                </div>
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                  <label className="block text-xs font-semibold uppercase tracking-wider text-gold-300 mb-2 flex items-center gap-1.5">
                    <Users className="w-4 h-4" /> Number of people
                  </label>
                  <input
                    type="number"
                    min={1}
                    max={16}
                    value={people}
                    onChange={(e) => setPeople(Number(e.target.value) || 1)}
                    className={inputClass}
                  />
                </div>
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                  <label className="block text-xs font-semibold uppercase tracking-wider text-gold-300 mb-2 flex items-center gap-1.5">
                    <Wallet className="w-4 h-4" /> Budget (stay + car + food)
                  </label>
                  <select value={budget} onChange={(e) => setBudget(e.target.value as BudgetBand)} className={inputClass}>
                    <option value="under-15k">Under ₹15,000</option>
                    <option value="15-30k">₹15,000 – ₹30,000</option>
                    <option value="30-50k">₹30,000 – ₹50,000</option>
                    <option value="50k-plus">₹50,000+</option>
                  </select>
                </div>
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                  <label className="block text-xs font-semibold uppercase tracking-wider text-gold-300 mb-2 flex items-center gap-1.5">
                    <Hotel className="w-4 h-4" /> Hotel preference
                  </label>
                  <select value={hotelPref} onChange={(e) => setHotelPref(e.target.value as HotelPref)} className={inputClass}>
                    <option value="walkable">Walkable to ashram</option>
                    <option value="budget">Budget / homestay</option>
                    <option value="boutique">Boutique valley stay</option>
                    <option value="luxury">Luxury / retreat</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                  <p className="text-xs font-semibold uppercase tracking-wider text-gold-300 mb-3 flex items-center gap-1.5">
                    <Car className="w-4 h-4" /> Car required?
                  </p>
                  <div className="flex gap-2">
                    {[true, false].map((val) => (
                      <button
                        key={String(val)}
                        type="button"
                        onClick={() => setCarRequired(val)}
                        className={`flex-1 py-2.5 rounded-xl text-sm font-semibold border ${
                          carRequired === val
                            ? 'bg-gold-500/20 border-gold-400 text-white'
                            : 'bg-white/5 border-white/10 text-ivory-300'
                        }`}
                      >
                        {val ? 'Yes, hill taxi' : 'No, self drive'}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                  <p className="text-xs font-semibold uppercase tracking-wider text-gold-300 mb-3 flex items-center gap-1.5">
                    <Mountain className="w-4 h-4" /> Nainital / Bhimtal / Mukteshwar?
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {[
                      { label: 'Nainital', on: nainital, set: setNainital },
                      { label: 'Bhimtal', on: bhimtal, set: setBhimtal },
                      { label: 'Mukteshwar', on: mukteshwar, set: setMukteshwar },
                    ].map((item) => (
                      <button
                        key={item.label}
                        type="button"
                        onClick={() => item.set(!item.on)}
                        className={`px-3 py-2 rounded-xl text-xs font-semibold border ${
                          item.on
                            ? 'bg-gold-500/20 border-gold-400 text-white'
                            : 'bg-white/5 border-white/10 text-ivory-300'
                        }`}
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex justify-end pt-2">
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-gold-400 hover:bg-gold-300 text-forest-950 text-xs font-bold uppercase tracking-wider shadow-xl"
                >
                  <Sparkles className="w-4 h-4" />
                  Generate my itinerary
                </button>
              </div>
            </form>
          ) : (
            <div className="space-y-8">
              <div>
                <p className="text-xs uppercase tracking-widest text-gold-300 mb-1">From {city}</p>
                <h3 className="font-serif text-3xl font-light text-white">{trip.title}</h3>
                <p className="text-ivory-300 text-sm mt-2">
                  {trip.nights} nights at {trip.stay.name} · {trip.vehicleLabel}
                </p>
              </div>

              <ol className="space-y-4">
                {trip.days.map((d) => (
                  <li key={d.day} className="p-5 rounded-2xl bg-white/5 border border-white/10">
                    <p className="text-gold-300 text-xs font-bold uppercase tracking-wider mb-1">Day {d.day}</p>
                    <p className="text-white font-semibold">{d.route}</p>
                    <p className="text-ivory-400 text-xs mt-0.5">{d.title}</p>
                    <ul className="mt-3 space-y-1.5">
                      {d.items.map((item) => (
                        <li key={item} className="text-sm text-ivory-200 flex gap-2">
                          <ArrowRight className="w-4 h-4 shrink-0 text-gold-400 mt-0.5" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ol>

              <div className="grid sm:grid-cols-4 gap-3 text-center">
                {[
                  ['Stay', trip.estimate.hotel],
                  ['Car', trip.estimate.car],
                  ['Food', trip.estimate.food],
                  ['Total', trip.estimate.total],
                ].map(([label, val]) => (
                  <div key={String(label)} className="p-3 rounded-xl bg-forest-950/50 border border-white/10">
                    <p className="text-[10px] uppercase tracking-wider text-ivory-400">{label}</p>
                    <p className="text-white font-semibold">₹{Number(val).toLocaleString('en-IN')}</p>
                  </div>
                ))}
              </div>
              <p className={`text-xs ${trip.budgetFit ? 'text-emerald-300' : 'text-amber-200'}`}>
                ~₹{trip.estimate.perPerson.toLocaleString('en-IN')} per person
                {trip.budgetFit ? ' — inside your stated budget band.' : ' — above your budget band; we will tighten the quote.'}
              </p>
              <ul className="text-xs text-ivory-400 space-y-1">
                {trip.notes.map((n) => (
                  <li key={n}>• {n}</li>
                ))}
              </ul>

              <div className="p-6 rounded-2xl bg-gold-500/10 border border-gold-400/30">
                <h4 className="font-serif text-2xl text-white mb-1">Want us to arrange this trip?</h4>
                <p className="text-sm text-ivory-200 mb-5">Get hotel + car + travel assistance.</p>
                <form onSubmit={handleQuote} className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <input
                    required
                    placeholder="Full name"
                    value={contactName}
                    onChange={(e) => setContactName(e.target.value)}
                    className={inputClass}
                  />
                  <input
                    required
                    type="tel"
                    placeholder="WhatsApp number"
                    value={contactPhone}
                    onChange={(e) => setContactPhone(e.target.value)}
                    className={inputClass}
                  />
                  <input
                    type="email"
                    placeholder="Email (optional)"
                    value={contactEmail}
                    onChange={(e) => setContactEmail(e.target.value)}
                    className={inputClass}
                  />
                  <div className="sm:col-span-3 flex flex-wrap gap-3 pt-2">
                    <button
                      type="submit"
                      disabled={isSending}
                      className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-gold-400 hover:bg-gold-300 text-forest-950 text-xs font-bold uppercase tracking-wider"
                    >
                      <Send className="w-4 h-4" />
                      {isSending ? 'Sending…' : 'Get My Trip Quote'}
                    </button>
                    <button
                      type="button"
                      onClick={() => setTrip(null)}
                      className="px-5 py-3 rounded-full border border-white/20 text-xs uppercase tracking-wider text-ivory-300"
                    >
                      Edit details
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
