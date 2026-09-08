import React, { useEffect, useState } from 'react';
import { CloudRain, Navigation, Sun, Thermometer, AlertTriangle, Hotel, Car } from 'lucide-react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { SEOHead } from '../seo/SEOHead';
import { StickyPlanButton } from '../components/StickyPlanButton';
import { STAYS_DATA } from '../data/stays';
import { fetchKainchiWeather, roadAdvisory, type KainchiWeather } from '../services/weatherService';
import type { Stay } from '../types';

interface TodayPageProps {
  onNavigate: (url: string) => void;
  onSelectStay: (stay: Stay) => void;
}

export const TodayPage: React.FC<TodayPageProps> = ({ onNavigate, onSelectStay }) => {
  const [weather, setWeather] = useState<KainchiWeather | null>(null);
  const [error, setError] = useState<string | null>(null);
  const now = new Date();
  const dateLabel = now.toLocaleDateString('en-IN', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'Asia/Kolkata',
  });

  useEffect(() => {
    fetchKainchiWeather()
      .then(setWeather)
      .catch(() => setError('Live weather is temporarily unavailable. Temple hours below still apply.'));
  }, []);

  const month = now.getMonth() + 1;
  const advisory = weather ? roadAdvisory(weather, month) : null;
  const mapsUrl = 'https://www.google.com/maps/dir/?api=1&destination=29.4219,79.5167';
  const nearby = [...STAYS_DATA].sort((a, b) => a.distanceKm - b.distanceKm).slice(0, 3);

  const announcements: string[] = [];
  if (month === 6 && now.getDate() >= 10 && now.getDate() <= 16) {
    announcements.push('Annual Pratishtha / Bhandara period (around 15 June): expect heavy crowds, full parking, and booked-out rooms.');
  }
  if (advisory?.level === 'avoid') {
    announcements.push('Weather desk: delay ghat driving until the storm cell passes. Confirm with your chauffeur.');
  }
  if (!announcements.length) {
    announcements.push('No special ashram notice on this site today. Darshan remains free. Photography is not allowed inside the sanctum.');
  }

  return (
    <div className="pt-24 pb-24 px-4 md:px-8 max-w-6xl mx-auto">
      <SEOHead
        title={`Kainchi Dham Today (${dateLabel}): Weather, Roads & Visit Info`}
        description="Live Kainchi Dham weather, rain forecast, hill-road advisory, visitor hours, and nearby stays. Updated from Open-Meteo, not a static SEO page."
        canonicalUrl="https://kainchidhambooking.com/today"
        keywords={['Kainchi Dham weather today', 'Kainchi Dham temperature', 'Kainchi Dham road condition']}
        ogType="website"
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Kainchi Dham Today', url: '/today' },
        ]}
      />
      <Breadcrumbs
        items={[
          { name: 'Home', url: '/' },
          { name: 'Today', url: '/today' },
        ]}
        onNavigate={onNavigate}
      />

      <header className="mb-10">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold-700 mb-2">Kainchi Dham Today</p>
        <h1 className="text-3xl md:text-5xl font-serif font-bold text-forest-900 mb-2">{dateLabel}</h1>
        <p className="text-charcoal-600 text-sm">
          Weather from Open-Meteo for the ashram valley (29.42°N, 79.52°E)
          {weather ? ` · last pulled ${new Date(weather.fetchedAt).toLocaleTimeString('en-IN')}` : ''}
        </p>
      </header>

      {error && (
        <div className="mb-6 p-4 rounded-2xl bg-amber-50 border border-amber-200 text-sm text-amber-950">{error}</div>
      )}

      <div className="grid md:grid-cols-3 gap-4 mb-8">
        <div className="p-6 rounded-3xl bg-white border border-forest-900/10 shadow-sm">
          <Thermometer className="w-5 h-5 text-gold-600 mb-2" />
          <p className="text-xs uppercase font-bold text-charcoal-500">Temperature</p>
          <p className="text-4xl font-serif text-forest-900 mt-1">{weather ? `${weather.temperature}°C` : '—'}</p>
          {weather && (
            <p className="text-sm text-charcoal-600 mt-1">
              Feels {weather.feelsLike}°C · High {weather.todayHigh}° / Low {weather.todayLow}°
            </p>
          )}
        </div>
        <div className="p-6 rounded-3xl bg-white border border-forest-900/10 shadow-sm">
          <Sun className="w-5 h-5 text-gold-600 mb-2" />
          <p className="text-xs uppercase font-bold text-charcoal-500">Weather</p>
          <p className="text-2xl font-serif text-forest-900 mt-1">{weather?.weatherLabel ?? 'Loading…'}</p>
          {weather && (
            <p className="text-sm text-charcoal-600 mt-1">
              Humidity {weather.humidity}% · Wind {weather.windKmh} km/h
            </p>
          )}
        </div>
        <div className="p-6 rounded-3xl bg-white border border-forest-900/10 shadow-sm">
          <CloudRain className="w-5 h-5 text-blue-600 mb-2" />
          <p className="text-xs uppercase font-bold text-charcoal-500">Rain forecast</p>
          <p className="text-4xl font-serif text-forest-900 mt-1">{weather ? `${weather.rainChanceMax}%` : '—'}</p>
          {weather && (
            <p className="text-sm text-charcoal-600 mt-1">
              Now {weather.precipitation} mm · Sunrise {weather.sunrise} · Sunset {weather.sunset}
            </p>
          )}
        </div>
      </div>

      {weather && (
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-8">
          {weather.daily.map((d) => (
            <div key={d.date} className="p-4 rounded-2xl bg-ivory-100 border border-forest-900/5 text-center">
              <p className="text-[11px] font-bold uppercase text-charcoal-500">
                {new Date(d.date).toLocaleDateString('en-IN', { weekday: 'short', day: 'numeric' })}
              </p>
              <p className="text-sm font-semibold text-forest-900 mt-1">
                {d.max}° / {d.min}°
              </p>
              <p className="text-[11px] text-charcoal-600 mt-1">{d.label}</p>
              <p className="text-[11px] text-blue-800 mt-1">{d.rainChance}% rain</p>
            </div>
          ))}
        </div>
      )}

      <div className="grid lg:grid-cols-2 gap-6 mb-8">
        <section className="p-6 rounded-3xl bg-white border border-forest-900/10">
          <h2 className="font-serif text-2xl text-forest-900 mb-3 flex items-center gap-2">
            <Navigation className="w-5 h-5 text-gold-600" /> Road / travel information
          </h2>
          {advisory ? (
            <div
              className={`p-4 rounded-2xl mb-3 ${
                advisory.level === 'avoid'
                  ? 'bg-red-50 border border-red-200'
                  : advisory.level === 'caution'
                    ? 'bg-amber-50 border border-amber-200'
                    : 'bg-emerald-50 border border-emerald-200'
              }`}
            >
              <p className="font-semibold text-forest-900">{advisory.title}</p>
              <p className="text-sm text-charcoal-700 mt-1">{advisory.detail}</p>
            </div>
          ) : (
            <p className="text-sm text-charcoal-600">Road note appears once weather loads.</p>
          )}
          <p className="text-xs text-charcoal-500">
            This is a weather-derived hill-road note, not a live NHAI camera. For blockages, ask a local chauffeur the same morning.
          </p>
        </section>

        <section className="p-6 rounded-3xl bg-white border border-forest-900/10">
          <h2 className="font-serif text-2xl text-forest-900 mb-3">Visitor information</h2>
          <ul className="text-sm text-charcoal-700 space-y-2">
            <li>Gates typically 6:30 AM – 7:30 PM</li>
            <li>Morning aarti ~7:00 AM · Evening aarti ~sunset / 6:30–7:00 PM</li>
            <li>Modest dress; no photography in the sanctum</li>
            <li>Prasad / langar when the kitchen is serving — no ticket</li>
          </ul>
        </section>
      </div>

      <section className="p-6 rounded-3xl bg-forest-900 text-ivory-100 mb-8">
        <h2 className="font-serif text-2xl text-gold-300 mb-3 flex items-center gap-2">
          <AlertTriangle className="w-5 h-5" /> Important announcements
        </h2>
        <ul className="space-y-2 text-sm text-ivory-200">
          {announcements.map((a) => (
            <li key={a}>• {a}</li>
          ))}
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="font-serif text-2xl text-forest-900 mb-4 flex items-center gap-2">
          <Hotel className="w-5 h-5 text-gold-600" /> Nearby accommodation
        </h2>
        <div className="grid md:grid-cols-3 gap-4">
          {nearby.map((stay) => (
            <button
              key={stay.id}
              type="button"
              onClick={() => onSelectStay(stay)}
              className="text-left p-5 rounded-2xl bg-white border border-forest-900/10 hover:border-gold-400"
            >
              <p className="font-semibold text-forest-900">{stay.name}</p>
              <p className="text-xs text-charcoal-600 mt-1">{stay.distanceKm} km · from ₹{stay.pricePerNight.toLocaleString('en-IN')}</p>
            </button>
          ))}
        </div>
      </section>

      <section className="p-8 rounded-3xl bg-white border border-forest-900/10">
        <h2 className="font-serif text-2xl text-forest-900 mb-2">Planning to visit today?</h2>
        <p className="text-sm text-charcoal-600 mb-5">Get directions, a taxi, or a stay within a few kilometres of the gate.</p>
        <div className="flex flex-wrap gap-3">
          <a
            href={mapsUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-forest-900 text-white text-xs font-bold uppercase tracking-wider"
          >
            <Navigation className="w-4 h-4" /> Get directions
          </a>
          <button
            type="button"
            onClick={() => onNavigate('/taxi')}
            className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-gold-500 text-forest-950 text-xs font-bold uppercase tracking-wider"
          >
            <Car className="w-4 h-4" /> Get a taxi
          </button>
          <button
            type="button"
            onClick={() => onNavigate('/hotels')}
            className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-forest-900/20 text-forest-900 text-xs font-bold uppercase tracking-wider"
          >
            Find a stay
          </button>
        </div>
      </section>
      <StickyPlanButton onClick={() => onNavigate('/trip-planner')} />
    </div>
  );
};
