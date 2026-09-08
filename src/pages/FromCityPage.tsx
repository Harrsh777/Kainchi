import React from 'react';
import { Train, Plane, Car, ArrowRight } from 'lucide-react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { SEOHead } from '../seo/SEOHead';
import { StickyPlanButton } from '../components/StickyPlanButton';
import { FROM_CITIES, getCityBySlug } from '../data/fromCities';
import { generateFAQSchema } from '../seo/schemas';

interface FromCityPageProps {
  slug?: string;
  onNavigate: (url: string) => void;
}

export const FromCityPage: React.FC<FromCityPageProps> = ({ slug, onNavigate }) => {
  if (!slug) {
    return (
      <div className="pt-24 pb-24 px-4 md:px-8 max-w-6xl mx-auto">
        <SEOHead
          title="Kainchi Dham from Major Cities | Trains, Flights & Road Times"
          description="Practical routes to Kainchi Dham from Delhi, Noida, Gurgaon, Lucknow, Kanpur, Mumbai, Bangalore, Jaipur, Chandigarh and Ahmedabad — only cities we can document properly."
          canonicalUrl="https://kainchidhambooking.com/from"
          keywords={['Kainchi Dham from Delhi', 'Kainchi Dham from Mumbai', 'how to reach Kainchi Dham']}
          ogType="website"
          breadcrumbs={[
            { name: 'Home', url: '/' },
            { name: 'From your city', url: '/from' },
          ]}
        />
        <Breadcrumbs items={[{ name: 'Home', url: '/' }, { name: 'From your city', url: '/from' }]} onNavigate={onNavigate} />
        <h1 className="text-3xl md:text-5xl font-serif font-bold text-forest-900 mb-4">Kainchi Dham from your city</h1>
        <p className="text-charcoal-700 max-w-3xl mb-10">
          These are the origin cities where train numbers, drive times and flight connections actually differ. We do not auto-spin hundreds of thin pages.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {FROM_CITIES.map((city) => (
            <button
              key={city.slug}
              type="button"
              onClick={() => onNavigate(`/from/${city.slug}`)}
              className="text-left p-6 rounded-3xl bg-white border border-forest-900/10 hover:border-gold-500 shadow-sm"
            >
              <p className="text-[11px] uppercase tracking-widest text-gold-700 font-bold">{city.region}</p>
              <h2 className="font-serif text-2xl text-forest-900 mt-1">Kainchi Dham from {city.name}</h2>
              <p className="text-sm text-charcoal-600 mt-2">
                {city.distanceKm} km · {city.driveTime}
              </p>
              <p className="text-xs text-forest-800 mt-3 font-medium">{city.bestMode}</p>
            </button>
          ))}
        </div>
        <StickyPlanButton onClick={() => onNavigate('/trip-planner')} />
      </div>
    );
  }

  const city = getCityBySlug(slug);
  if (!city) {
    return (
      <div className="pt-24 px-4 max-w-3xl mx-auto">
        <h1 className="font-serif text-3xl text-forest-900 mb-3">No dedicated guide for that city yet</h1>
        <p className="text-charcoal-700 mb-6">
          We only publish a from-city page when trains, flights or drive times are genuinely different. Use the trip planner for any other origin.
        </p>
        <button type="button" onClick={() => onNavigate('/from')} className="text-forest-800 font-semibold">
          Browse city guides
        </button>
      </div>
    );
  }

  const faqSchema = generateFAQSchema(city.faqs);
  const canonical = `https://kainchidhambooking.com/from/${city.slug}`;

  return (
    <div className="pt-24 pb-24 px-4 md:px-8 max-w-5xl mx-auto">
      <SEOHead
        title={`Kainchi Dham from ${city.name}: Distance, Trains, Flights & Taxi`}
        description={`How to reach Kainchi Dham from ${city.name} — ${city.distanceKm} km, ${city.driveTime}. ${city.bestMode}.`}
        canonicalUrl={canonical}
        keywords={[`Kainchi Dham from ${city.name}`, `Kainchi Dham ${city.name} train`, `${city.name} to Kathgodam`]}
        ogType="article"
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'From your city', url: '/from' },
          { name: city.name, url: `/from/${city.slug}` },
        ]}
        schema={faqSchema}
      />
      <Breadcrumbs
        items={[
          { name: 'Home', url: '/' },
          { name: 'From your city', url: '/from' },
          { name: city.name, url: `/from/${city.slug}` },
        ]}
        onNavigate={onNavigate}
      />

      <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold-700 mb-2">{city.region}</p>
      <h1 className="text-3xl md:text-5xl font-serif font-bold text-forest-900 mb-4">Kainchi Dham from {city.name}</h1>
      <p className="text-lg text-charcoal-700 mb-8 max-w-3xl">
        {city.distanceKm} km · {city.driveTime}. Best usual plan: {city.bestMode}.
      </p>

      <div className="grid sm:grid-cols-3 gap-4 mb-10">
        <div className="p-5 rounded-2xl bg-white border border-forest-900/10">
          <Train className="w-5 h-5 text-gold-600 mb-2" />
          <p className="text-xs uppercase font-bold text-charcoal-500">Rail hub</p>
          <p className="font-semibold text-forest-900 mt-1">Kathgodam (KGM), 37 km from temple</p>
        </div>
        <div className="p-5 rounded-2xl bg-white border border-forest-900/10">
          <Plane className="w-5 h-5 text-gold-600 mb-2" />
          <p className="text-xs uppercase font-bold text-charcoal-500">Air</p>
          <p className="font-semibold text-forest-900 mt-1 text-sm leading-relaxed">{city.flights}</p>
        </div>
        <div className="p-5 rounded-2xl bg-white border border-forest-900/10">
          <Car className="w-5 h-5 text-gold-600 mb-2" />
          <p className="text-xs uppercase font-bold text-charcoal-500">Taxi</p>
          <p className="font-semibold text-forest-900 mt-1 text-sm">{city.taxiFareHint}</p>
        </div>
      </div>

      <section className="p-6 rounded-3xl bg-white border border-forest-900/10 mb-6">
        <h2 className="font-serif text-2xl text-forest-900 mb-3">Road route</h2>
        <p className="text-sm text-charcoal-700 mb-2">{city.bestRoute}</p>
        <p className="text-sm text-charcoal-600">{city.roadCondition}</p>
        <p className="text-xs text-charcoal-500 mt-3">Pit stops: {city.pitStops.join(' · ')}</p>
      </section>

      <section className="p-6 rounded-3xl bg-white border border-forest-900/10 mb-6 overflow-x-auto">
        <h2 className="font-serif text-2xl text-forest-900 mb-4">Train information</h2>
        <table className="w-full text-sm text-left min-w-[640px]">
          <thead>
            <tr className="text-xs uppercase tracking-wider text-charcoal-500 border-b border-forest-900/10">
              <th className="py-2 pr-3">Train</th>
              <th className="py-2 pr-3">No.</th>
              <th className="py-2 pr-3">From</th>
              <th className="py-2 pr-3">Dep</th>
              <th className="py-2 pr-3">Arr Kathgodam</th>
              <th className="py-2">Note</th>
            </tr>
          </thead>
          <tbody>
            {city.trains.map((t) => (
              <tr key={t.number} className="border-b border-forest-900/5">
                <td className="py-3 pr-3 font-semibold text-forest-900">{t.name}</td>
                <td className="py-3 pr-3">{t.number}</td>
                <td className="py-3 pr-3">{t.from}</td>
                <td className="py-3 pr-3">{t.departs}</td>
                <td className="py-3 pr-3">{t.arrives}</td>
                <td className="py-3 text-charcoal-600">{t.note}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p className="text-xs text-charcoal-500 mt-3">Always reconfirm on IRCTC. Indian Railways changes rakes without notice.</p>
      </section>

      <section className="p-6 rounded-3xl bg-ivory-100 border border-forest-900/5 mb-6">
        <h2 className="font-serif text-2xl text-forest-900 mb-3">How we would actually do this</h2>
        <ul className="space-y-2 text-sm text-charcoal-700">
          {city.uniqueTips.map((tip) => (
            <li key={tip} className="flex gap-2">
              <ArrowRight className="w-4 h-4 shrink-0 text-gold-600 mt-0.5" />
              {tip}
            </li>
          ))}
        </ul>
        <p className="text-sm text-forest-800 mt-4">
          Suggested length: {city.suggestedDays} days. {city.budgetHint}
        </p>
      </section>

      <section className="mb-8">
        <h2 className="font-serif text-2xl text-forest-900 mb-4">FAQ — {city.name}</h2>
        <div className="space-y-3">
          {city.faqs.map((faq) => (
            <div key={faq.question} className="p-4 rounded-2xl bg-white border border-forest-900/10">
              <h3 className="font-semibold text-forest-900">{faq.question}</h3>
              <p className="text-sm text-charcoal-700 mt-1">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="p-6 rounded-3xl bg-forest-900 text-ivory-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <p className="text-gold-300 text-xs uppercase tracking-widest font-bold">Next</p>
          <p className="font-serif text-xl">Generate a {city.suggestedDays}-day plan from {city.name}</p>
        </div>
        <button
          type="button"
          onClick={() => onNavigate('/trip-planner')}
          className="px-6 py-3 rounded-full bg-gold-500 text-forest-950 text-xs font-bold uppercase tracking-wider"
        >
          Plan this trip
        </button>
      </div>
      <StickyPlanButton onClick={() => onNavigate('/trip-planner')} />
    </div>
  );
};
