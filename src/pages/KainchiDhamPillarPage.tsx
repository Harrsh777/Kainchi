import React, { useEffect, useState } from 'react';
import {
  Sun,
  CloudRain,
  Snowflake,
} from 'lucide-react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { SEOInternalLinks } from '../components/SEOInternalLinks';
import { SEOHead } from '../seo/SEOHead';
import { SEO_ROUTES } from '../seo/seoData';
import { generateArticleSchema, generateFAQSchema } from '../seo/schemas';
import { StickyPlanButton } from '../components/StickyPlanButton';
import { KainchiMap } from '../components/KainchiMap';
import { STAYS_DATA } from '../data/stays';
import { TRANSPORT_DATA } from '../data/transportation';
import { FAQS_DATA } from '../data/faqs';
import { GALLERY_DATA } from '../data/testimonials';
import { FROM_CITIES } from '../data/fromCities';
import { SITE_IMAGES, DEFAULT_OG_IMAGE } from '../data/siteImages';
import { fetchKainchiWeather, type KainchiWeather } from '../services/weatherService';
import type { Stay } from '../types';

interface KainchiDhamPillarPageProps {
  onNavigate: (url: string) => void;
  onOpenPlanner: () => void;
  onSelectStay?: (stay: Stay) => void;
  onOpenLightbox?: (index: number) => void;
}

const TOC = [
  { id: 'location', label: '📍 Location' },
  { id: 'map', label: '🗺️ Map' },
  { id: 'reach', label: '🚗 How to reach' },
  { id: 'train', label: '🚆 Train' },
  { id: 'airport', label: '✈️ Airport' },
  { id: 'hotels', label: '🏨 Hotels' },
  { id: 'food', label: '🍽️ Food' },
  { id: 'taxi', label: '🚕 Taxi' },
  { id: 'visit', label: '🙏 Visit' },
  { id: 'weather', label: '🌤️ Weather' },
  { id: 'packing', label: '🎒 Packing' },
  { id: 'budget', label: '💰 Budget' },
  { id: 'best-time', label: '📅 Best time' },
  { id: 'itineraries', label: '🗓️ Itineraries' },
  { id: 'gallery', label: '📸 Gallery' },
  { id: 'faq', label: '❓ FAQ' },
];

export const KainchiDhamPillarPage: React.FC<KainchiDhamPillarPageProps> = ({
  onNavigate,
  onOpenPlanner,
  onSelectStay,
  onOpenLightbox,
}) => {
  const meta = SEO_ROUTES['/kainchi-dham'];
  const [weather, setWeather] = useState<KainchiWeather | null>(null);
  const [people, setPeople] = useState(2);
  const [nights, setNights] = useState(2);

  useEffect(() => {
    fetchKainchiWeather().then(setWeather).catch(() => undefined);
  }, []);

  const articleSchema = generateArticleSchema({
    headline: 'The Complete Kainchi Dham Guide',
    description: meta.description,
    url: meta.canonicalUrl,
    image: DEFAULT_OG_IMAGE,
    datePublished: meta.publishedTime,
    dateModified: meta.modifiedTime,
    authorName: meta.author,
  });
  const faqSchema = generateFAQSchema(FAQS_DATA.map((f) => ({ question: f.question, answer: f.answer })));

  const stayCost = Math.ceil(people / 2) * 2899 * nights;
  const taxiCost = 1499 * 2 + 4200;
  const foodCost = people * 650 * (nights + 1);
  const budgetTotal = stayCost + taxiCost + foodCost;

  const sectionClass = 'scroll-mt-28 bg-white p-6 sm:p-8 rounded-3xl border border-forest-900/10 shadow-sm';

  return (
    <div className="pt-24 pb-24 px-4 md:px-8 max-w-7xl mx-auto">
      <SEOHead
        title="The Complete Kainchi Dham Guide: Map, Trains, Hotels, Weather & Visit Info"
        description="Interactive Kainchi Dham travel guide — location, map, how to reach, trains, airport, hotels, food, taxi, darshan rules, live weather, packing, budget, itineraries, gallery and FAQ."
        canonicalUrl={meta.canonicalUrl}
        keywords={meta.secondaryKeywords}
        ogType="article"
        ogImage={DEFAULT_OG_IMAGE}
        breadcrumbs={meta.breadcrumbs}
        schema={[articleSchema, faqSchema]}
      />
      <Breadcrumbs items={meta.breadcrumbs} onNavigate={onNavigate} />

      <header className="mb-8">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold-700 mb-2">The Complete Kainchi Dham Guide</p>
        <h1 className="text-3xl md:text-5xl font-serif font-bold text-forest-900 leading-tight mb-4">
          Everything you need to visit Kainchi Dham — not a 1,500-word essay
        </h1>
        <p className="text-lg text-charcoal-700 max-w-3xl">
          Neem Karoli Baba’s ashram on NH-109 in Nainital district. Use the jump links, live weather, map pins and planner. Darshan is free; we only arrange travel.
        </p>
        <div className="mt-6 rounded-3xl overflow-hidden border border-forest-900/10 shadow-sm aspect-[21/9] max-h-[320px]">
          <img
            src={SITE_IMAGES.riverTemple}
            alt="Kainchi Dham ashram beside the rocky riverbed, saffron and white shikharas against forested hills"
            className="w-full h-full object-cover object-[center_40%]"
            width={1600}
            height={686}
          />
        </div>
      </header>

      <nav className="sticky top-16 z-20 mb-10 -mx-4 px-4 py-3 bg-ivory-100/95 backdrop-blur-md border-y border-forest-900/10 overflow-x-auto">
        <div className="flex gap-2 min-w-max">
          {TOC.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="px-3 py-1.5 rounded-full bg-white border border-forest-900/10 text-xs font-semibold text-forest-900 whitespace-nowrap hover:border-gold-500"
            >
              {item.label}
            </a>
          ))}
        </div>
      </nav>

      <div className="space-y-8">
        <section id="location" className={sectionClass}>
          <h2 className="font-serif text-2xl text-forest-900 mb-4">📍 Location</h2>
          <p className="text-charcoal-700 mb-4">
            Kainchi Dham sits on the Bhowali–Almora highway (NH-109) at the scissors-bend of the Kshipra river, about 1,400 m above sea level, Nainital district, Uttarakhand. PIN 263132.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 text-sm">
            {[
              ['Coordinates', '29.4219° N, 79.5167° E'],
              ['Bhowali', '8 km · 15 min'],
              ['Nainital', '18 km · 45 min'],
              ['Kathgodam', '37 km · 1 hr 15 min'],
            ].map(([k, v]) => (
              <div key={k} className="p-4 rounded-2xl bg-ivory-100">
                <p className="text-[11px] uppercase font-bold text-charcoal-500">{k}</p>
                <p className="font-semibold text-forest-900 mt-1">{v}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="map" className={sectionClass}>
          <h2 className="font-serif text-2xl text-forest-900 mb-2">🗺️ Map</h2>
          <p className="text-sm text-charcoal-600 mb-4">
            Full-screen version with every hotel and taxi pin:{' '}
            <button type="button" className="text-forest-800 font-semibold underline" onClick={() => onNavigate('/map')}>
              Open travel map
            </button>
          </p>
          <KainchiMap
            onSelectStay={onSelectStay}
            onBookTaxi={() => onNavigate('/taxi')}
            heightClass="h-[420px]"
          />
        </section>

        <section id="reach" className={sectionClass}>
          <h2 className="font-serif text-2xl text-forest-900 mb-4">🚗 How to reach</h2>
          <p className="text-charcoal-700 mb-4">
            Almost every itinerary ends the same way: plains → Kathgodam or Pantnagar → 1–2.5 hr hill taxi via Jeolikote and Bhowali. Pick your city for a proper route, not a generic paragraph.
          </p>
          <div className="flex flex-wrap gap-2">
            {FROM_CITIES.map((c) => (
              <button
                key={c.slug}
                type="button"
                onClick={() => onNavigate(`/from/${c.slug}`)}
                className="px-3 py-2 rounded-full bg-forest-900/5 text-xs font-semibold text-forest-900 hover:bg-forest-900 hover:text-white"
              >
                From {c.name}
              </button>
            ))}
          </div>
        </section>

        <section id="train" className={sectionClass}>
          <h2 className="font-serif text-2xl text-forest-900 mb-4">🚆 Train information</h2>
          <p className="text-sm text-charcoal-700 mb-4">
            Nearest station: <strong>Kathgodam (KGM)</strong>, 37 km. There is no railway at the ashram. Confirm times on IRCTC before you travel.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm min-w-[560px]">
              <thead>
                <tr className="text-left text-[11px] uppercase text-charcoal-500 border-b">
                  <th className="py-2">Train</th>
                  <th>No.</th>
                  <th>From</th>
                  <th>Dep</th>
                  <th>Arr KGM</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-forest-900/5">
                  <td className="py-3 font-semibold">Kathgodam Shatabdi</td>
                  <td>12040</td>
                  <td>New Delhi</td>
                  <td>06:20</td>
                  <td>11:40</td>
                </tr>
                <tr className="border-b border-forest-900/5">
                  <td className="py-3 font-semibold">Uttaranchal Sampark Kranti</td>
                  <td>15035</td>
                  <td>Old Delhi</td>
                  <td>16:00</td>
                  <td>21:40</td>
                </tr>
                <tr>
                  <td className="py-3 font-semibold">Lucknow–Kathgodam Exp</td>
                  <td>15043</td>
                  <td>Lucknow Jn</td>
                  <td>Selected days</td>
                  <td>~7.5 hrs</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section id="airport" className={sectionClass}>
          <h2 className="font-serif text-2xl text-forest-900 mb-4">✈️ Airport information</h2>
          <div className="grid sm:grid-cols-3 gap-4 text-sm">
            <div className="p-4 rounded-2xl bg-ivory-100">
              <p className="font-bold text-forest-900">Pantnagar (PGH)</p>
              <p className="text-charcoal-600 mt-1">~70 km · 2–2.5 hrs. Limited Delhi connections. Taxi from ₹2,499.</p>
            </div>
            <div className="p-4 rounded-2xl bg-ivory-100">
              <p className="font-bold text-forest-900">Delhi IGI (DEL)</p>
              <p className="text-charcoal-600 mt-1">Best network. Then Shatabdi to Kathgodam or a 6.5–7.5 hr cab.</p>
            </div>
            <div className="p-4 rounded-2xl bg-ivory-100">
              <p className="font-bold text-forest-900">Dehradun (DED)</p>
              <p className="text-charcoal-600 mt-1">Useful from Mumbai/Bangalore flights. Then a long hill cab into Kumaon — not the shortest path.</p>
            </div>
          </div>
        </section>

        <section id="hotels" className={sectionClass}>
          <h2 className="font-serif text-2xl text-forest-900 mb-4">🏨 Hotels</h2>
          <p className="text-sm text-charcoal-700 mb-4">
            Ashram rooms need trust permission and are not sold here. These are inspected valley stays.
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            {STAYS_DATA.map((stay) => (
              <button
                key={stay.id}
                type="button"
                onClick={() => onSelectStay?.(stay)}
                className="text-left p-4 rounded-2xl border border-forest-900/10 hover:border-gold-500"
              >
                <p className="font-semibold text-forest-900">{stay.name}</p>
                <p className="text-xs text-charcoal-600 mt-1">{stay.distanceKm} km · from ₹{stay.pricePerNight.toLocaleString('en-IN')}</p>
                <p className="text-xs text-gold-800 mt-1">{stay.tag}</p>
              </button>
            ))}
          </div>
        </section>

        <section id="food" className={sectionClass}>
          <h2 className="font-serif text-2xl text-forest-900 mb-3">🍽️ Food</h2>
          <ul className="text-sm text-charcoal-700 space-y-2">
            <li>Ashram kitchen: khichdi and malpua prasad when serving — free, no “VIP thali”.</li>
            <li>Walkable stays and Niglat cafés: chai, maggi, simple veg plates.</li>
            <li>Bhowali market (8 km): proper thalis if you want a town meal.</li>
            <li>Ask stays for sattvic / Jain / no-onion if it matters — most Kumaoni kitchens can do it with notice.</li>
          </ul>
        </section>

        <section id="taxi" className={sectionClass}>
          <h2 className="font-serif text-2xl text-forest-900 mb-4">🚕 Taxi</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {TRANSPORT_DATA.slice(0, 4).map((svc) => (
              <button
                key={svc.id}
                type="button"
                onClick={() => onNavigate('/taxi')}
                className="text-left p-4 rounded-2xl bg-ivory-100"
              >
                <p className="font-semibold text-forest-900">{svc.title}</p>
                <p className="text-xs text-charcoal-600 mt-1">{svc.duration}</p>
                <p className="text-xs font-bold text-gold-800 mt-2">From ₹{svc.vehicles[0].price.toLocaleString('en-IN')}</p>
              </button>
            ))}
          </div>
        </section>

        <section id="visit" className={sectionClass}>
          <h2 className="font-serif text-2xl text-forest-900 mb-4">🙏 Visit information</h2>
          <div className="grid sm:grid-cols-2 gap-4 text-sm text-charcoal-700">
            <ul className="space-y-2">
              <li>Hours: about 6:30 AM – 7:30 PM</li>
              <li>Morning aarti ~7:00 AM · evening aarti ~6:30–7:00 PM</li>
              <li>15 June: Pratishtha / Bhandara — extreme crowds</li>
            </ul>
            <ul className="space-y-2">
              <li>Cover shoulders and knees</li>
              <li>No photography or drones in the sanctum</li>
              <li>Shoes at the counters before the bridge</li>
            </ul>
          </div>
          <button
            type="button"
            onClick={() => onNavigate('/today')}
            className="mt-4 text-sm font-semibold text-forest-800 underline"
          >
            See Kainchi Dham Today for live weather before you go →
          </button>
        </section>

        <section id="weather" className={sectionClass}>
          <h2 className="font-serif text-2xl text-forest-900 mb-4">🌤️ Weather</h2>
          {weather ? (
            <div className="flex flex-wrap gap-6 items-end">
              <div>
                <p className="text-4xl font-serif text-forest-900">{weather.temperature}°C</p>
                <p className="text-sm text-charcoal-600">{weather.weatherLabel} · rain chance {weather.rainChanceMax}%</p>
              </div>
              <p className="text-sm text-charcoal-600">
                Updated from Open-Meteo. Full 5-day view on the{' '}
                <button type="button" className="font-semibold underline" onClick={() => onNavigate('/today')}>
                  Today page
                </button>
                .
              </p>
            </div>
          ) : (
            <p className="text-sm text-charcoal-600">Loading live valley temperature…</p>
          )}
        </section>

        <section id="packing" className={sectionClass}>
          <h2 className="font-serif text-2xl text-forest-900 mb-4">🎒 Packing list</h2>
          <div className="grid sm:grid-cols-3 gap-4 text-sm">
            <div>
              <p className="font-bold flex items-center gap-2 mb-2"><Sun className="w-4 h-4" /> Mar–Jun</p>
              <p className="text-charcoal-700">Cotton, light shawl for aarti, slip-on shoes, sunscreen, water bottle.</p>
            </div>
            <div>
              <p className="font-bold flex items-center gap-2 mb-2"><CloudRain className="w-4 h-4" /> Jul–Sep</p>
              <p className="text-charcoal-700">Rain jacket, grip shoes, spare socks, plastic bag for wet clothes.</p>
            </div>
            <div>
              <p className="font-bold flex items-center gap-2 mb-2"><Snowflake className="w-4 h-4" /> Oct–Feb</p>
              <p className="text-charcoal-700">Thermals, wool, gloves for 7 AM aarti, lip balm, any personal medicines.</p>
            </div>
          </div>
        </section>

        <section id="budget" className={sectionClass}>
          <h2 className="font-serif text-2xl text-forest-900 mb-4">💰 Budget</h2>
          <div className="flex flex-wrap gap-4 mb-4">
            <label className="text-sm">
              People{' '}
              <input
                type="number"
                min={1}
                className="ml-2 w-16 border rounded-lg px-2 py-1"
                value={people}
                onChange={(e) => setPeople(Number(e.target.value) || 1)}
              />
            </label>
            <label className="text-sm">
              Nights{' '}
              <input
                type="number"
                min={1}
                className="ml-2 w-16 border rounded-lg px-2 py-1"
                value={nights}
                onChange={(e) => setNights(Number(e.target.value) || 1)}
              />
            </label>
          </div>
          <p className="text-2xl font-serif text-forest-900">≈ ₹{budgetTotal.toLocaleString('en-IN')}</p>
          <p className="text-xs text-charcoal-600 mt-1">
            Mid-range stay ₹2,899, Kathgodam taxi round-trip, one day-hire, food at ₹650/person/day. Not a hotel invoice.
          </p>
        </section>

        <section id="best-time" className={sectionClass}>
          <h2 className="font-serif text-2xl text-forest-900 mb-4">📅 Best time</h2>
          <p className="text-sm text-charcoal-700">
            March–June and October–November are the comfortable windows. July–August is lush but wet on NH-109. Winter is quiet and cold at dawn. Avoid 15 June unless you specifically want the bhandara.
          </p>
        </section>

        <section id="itineraries" className={sectionClass}>
          <h2 className="font-serif text-2xl text-forest-900 mb-4">🗓️ Itineraries</h2>
          <ol className="space-y-3 text-sm text-charcoal-700">
            <li>
              <strong>2 days:</strong> Day 1 Kathgodam → Kainchi evening aarti. Day 2 morning darshan → train.
            </li>
            <li>
              <strong>3 days:</strong> Day 1 arrival. Day 2 Kainchi → Nainital. Day 3 Bhimtal → departure.
            </li>
            <li>
              <strong>4–5 days:</strong> Add Mukteshwar or a slow extra ashram day.
            </li>
          </ol>
          <button
            type="button"
            onClick={onOpenPlanner}
            className="mt-4 px-5 py-2.5 rounded-full bg-gold-500 text-forest-950 text-xs font-bold uppercase tracking-wider"
          >
            Generate my dates
          </button>
        </section>

        <section id="gallery" className={sectionClass}>
          <h2 className="font-serif text-2xl text-forest-900 mb-4">📸 Photo gallery</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {GALLERY_DATA.slice(0, 8).map((item, idx) => (
              <button
                key={item.id}
                type="button"
                onClick={() => onOpenLightbox?.(idx)}
                className="aspect-[4/3] rounded-2xl overflow-hidden"
              >
                <img src={item.imageUrl} alt={item.title} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </section>

        <section id="faq" className={sectionClass}>
          <h2 className="font-serif text-2xl text-forest-900 mb-4">❓ FAQ</h2>
          <div className="space-y-3">
            {FAQS_DATA.map((faq) => (
              <details key={faq.question} className="p-4 rounded-2xl bg-ivory-100">
                <summary className="font-semibold text-forest-900 cursor-pointer">{faq.question}</summary>
                <p className="text-sm text-charcoal-700 mt-2">{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>
      </div>

      {meta.relatedRoutes && (
        <SEOInternalLinks title="Keep going" links={meta.relatedRoutes} onNavigate={onNavigate} />
      )}
      <StickyPlanButton onClick={onOpenPlanner} />
    </div>
  );
};
