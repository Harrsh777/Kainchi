import React, { useEffect, useMemo, useRef, useState } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { MAP_FILTERS, MAP_PLACES, KAINCHI_CENTER, type MapPlace, type MapPlaceCategory } from '../data/mapPlaces';
import { STAYS_DATA } from '../data/stays';
import type { Stay } from '../types';

interface KainchiMapProps {
  onSelectStay?: (stay: Stay) => void;
  onBookTaxi?: () => void;
  heightClass?: string;
}

const PIN_COLOR: Record<MapPlaceCategory, string> = {
  temple: '#dc2626',
  hotel: '#18382D',
  homestay: '#B99A62',
  taxi: '#ca8a04',
  food: '#c2410c',
  rail: '#1d4ed8',
  airport: '#0369a1',
  destination: '#166534',
};

function divIcon(category: MapPlaceCategory) {
  const color = PIN_COLOR[category];
  return L.divIcon({
    className: 'kainchi-pin',
    html: `<span style="display:block;width:16px;height:16px;border-radius:999px;background:${color};border:2px solid white;box-shadow:0 2px 8px rgba(0,0,0,.35)"></span>`,
    iconSize: [16, 16],
    iconAnchor: [8, 8],
  });
}

export const KainchiMap: React.FC<KainchiMapProps> = ({ onSelectStay, onBookTaxi, heightClass = 'h-[520px]' }) => {
  const elRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<L.Map | null>(null);
  const layerRef = useRef<L.LayerGroup | null>(null);
  const [filter, setFilter] = useState<MapPlaceCategory | 'all'>('all');
  const [active, setActive] = useState<MapPlace | null>(MAP_PLACES[0]);

  const visible = useMemo(
    () => (filter === 'all' ? MAP_PLACES : MAP_PLACES.filter((p) => p.category === filter)),
    [filter]
  );

  useEffect(() => {
    if (!elRef.current || mapRef.current) return;
    const map = L.map(elRef.current, { scrollWheelZoom: false }).setView([KAINCHI_CENTER.lat, KAINCHI_CENTER.lng], 11);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap',
    }).addTo(map);
    mapRef.current = map;
    layerRef.current = L.layerGroup().addTo(map);
    return () => {
      map.remove();
      mapRef.current = null;
    };
  }, []);

  useEffect(() => {
    const layer = layerRef.current;
    const map = mapRef.current;
    if (!layer || !map) return;
    layer.clearLayers();
    visible.forEach((place) => {
      const marker = L.marker([place.lat, place.lng], { icon: divIcon(place.category) });
      marker.on('click', () => setActive(place));
      marker.addTo(layer);
    });
  }, [visible]);

  const stay = active?.stayId ? STAYS_DATA.find((s) => s.id === active.stayId) : undefined;
  const mapsUrl = active
    ? `https://www.google.com/maps/dir/?api=1&destination=${active.lat},${active.lng}`
    : '#';

  return (
    <div className="grid lg:grid-cols-3 gap-4">
      <div className="lg:col-span-2 space-y-3">
        <div className="flex flex-wrap gap-2">
          {MAP_FILTERS.map((f) => (
            <button
              key={f.id}
              type="button"
              onClick={() => setFilter(f.id)}
              className={`px-3 py-1.5 rounded-full text-xs font-semibold border ${
                filter === f.id
                  ? 'bg-forest-900 text-white border-forest-900'
                  : 'bg-white text-charcoal-700 border-forest-900/10'
              }`}
            >
              {f.pin} {f.label}
            </button>
          ))}
        </div>
        <div className={`${heightClass} rounded-3xl overflow-hidden border border-forest-900/10 shadow-sm z-0`}>
          <div ref={elRef} className="w-full h-full" />
        </div>
      </div>
      <aside className="p-5 rounded-3xl bg-white border border-forest-900/10 shadow-sm h-fit">
        {active ? (
          <>
            <p className="text-[10px] uppercase tracking-widest text-gold-700 font-bold mb-1">{active.category}</p>
            <h3 className="font-serif text-2xl text-forest-900 mb-1">{active.name}</h3>
            <p className="text-sm text-charcoal-600 mb-3">{active.subtitle}</p>
            {active.distanceLabel && (
              <p className="text-sm font-semibold text-forest-900 mb-1">{active.distanceLabel}</p>
            )}
            {active.priceFrom != null && (
              <p className="text-sm text-charcoal-700 mb-4">From ₹{active.priceFrom.toLocaleString('en-IN')}</p>
            )}
            <div className="flex flex-col gap-2">
              {stay && onSelectStay && (
                <button
                  type="button"
                  onClick={() => onSelectStay(stay)}
                  className="w-full py-2.5 rounded-xl bg-gold-500 text-forest-950 text-xs font-bold uppercase tracking-wider"
                >
                  View stay
                </button>
              )}
              {active.action === 'taxi' && onBookTaxi && (
                <button
                  type="button"
                  onClick={onBookTaxi}
                  className="w-full py-2.5 rounded-xl bg-forest-900 text-ivory-100 text-xs font-bold uppercase tracking-wider"
                >
                  Get a taxi
                </button>
              )}
              <a
                href={mapsUrl}
                target="_blank"
                rel="noreferrer"
                className="w-full py-2.5 rounded-xl border border-forest-900/15 text-center text-xs font-bold uppercase tracking-wider text-forest-900"
              >
                Get directions
              </a>
            </div>
          </>
        ) : (
          <p className="text-sm text-charcoal-600">Tap a pin on the map.</p>
        )}
      </aside>
    </div>
  );
};
