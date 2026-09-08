import { STAYS_DATA } from './stays';

export type MapPlaceCategory =
  | 'temple'
  | 'hotel'
  | 'homestay'
  | 'taxi'
  | 'food'
  | 'rail'
  | 'airport'
  | 'destination';

export interface MapPlace {
  id: string;
  name: string;
  category: MapPlaceCategory;
  lat: number;
  lng: number;
  subtitle: string;
  distanceLabel?: string;
  priceFrom?: number;
  stayId?: string;
  action?: 'stay' | 'taxi' | 'directions';
}

export const KAINCHI_CENTER = { lat: 29.4219, lng: 79.5167 };

export const MAP_PLACES: MapPlace[] = [
  {
    id: 'kainchi-dham',
    name: 'Kainchi Dham',
    category: 'temple',
    lat: 29.4219,
    lng: 79.5167,
    subtitle: 'Neem Karoli Baba ashram · NH-109 scissors bend',
    action: 'directions',
  },
  ...STAYS_DATA.map((stay) => ({
    id: stay.id,
    name: stay.name,
    category: (stay.category === 'Homestays' ? 'homestay' : 'hotel') as MapPlaceCategory,
    lat: stay.lat,
    lng: stay.lng,
    subtitle: stay.tag,
    distanceLabel: `${stay.distanceKm} km from Kainchi Dham`,
    priceFrom: stay.pricePerNight,
    stayId: stay.id,
    action: 'stay' as const,
  })),
  {
    id: 'taxi-kathgodam',
    name: 'Kathgodam taxi stand',
    category: 'taxi',
    lat: 29.2669,
    lng: 79.5436,
    subtitle: 'Station gate pickups · sedan from ₹1,499',
    distanceLabel: '37 km to temple',
    action: 'taxi',
  },
  {
    id: 'taxi-bhowali',
    name: 'Bhowali taxi point',
    category: 'taxi',
    lat: 29.3795,
    lng: 79.519,
    subtitle: 'Local jeeps & day-hire for Nainital circuit',
    distanceLabel: '8 km',
    action: 'taxi',
  },
  {
    id: 'food-prasad',
    name: 'Ashram prasad / langar',
    category: 'food',
    lat: 29.4223,
    lng: 79.5172,
    subtitle: 'Free khichdi & malpua when the kitchen is serving',
    distanceLabel: 'Inside ashram',
  },
  {
    id: 'food-bhowali',
    name: 'Bhowali market eateries',
    category: 'food',
    lat: 29.3808,
    lng: 79.5144,
    subtitle: 'Simple veg thalis, tea, packed snacks for the ghat road',
    distanceLabel: '8 km',
  },
  {
    id: 'food-niglat',
    name: 'Niglat roadside cafés',
    category: 'food',
    lat: 29.4172,
    lng: 79.5108,
    subtitle: 'Maggi, chai, and light meals near the walkable stays',
    distanceLabel: '1 km',
  },
  {
    id: 'kathgodam-station',
    name: 'Kathgodam (KGM)',
    category: 'rail',
    lat: 29.2667,
    lng: 79.5431,
    subtitle: 'Nearest railhead · Shatabdi & overnight expresses',
    distanceLabel: '37 km · ~1 hr 15 min',
    action: 'taxi',
  },
  {
    id: 'pantnagar-airport',
    name: 'Pantnagar (PGH)',
    category: 'airport',
    lat: 29.0336,
    lng: 79.4739,
    subtitle: 'Nearest airport · then 2–2.5 hr hill taxi',
    distanceLabel: '70 km',
    action: 'taxi',
  },
  {
    id: 'nainital',
    name: 'Nainital',
    category: 'destination',
    lat: 29.3919,
    lng: 79.4542,
    subtitle: 'Naini Lake, Naina Devi, Mall Road',
    distanceLabel: '18 km · ~45 min',
  },
  {
    id: 'bhimtal',
    name: 'Bhimtal',
    category: 'destination',
    lat: 29.3444,
    lng: 79.5631,
    subtitle: 'Island lake, quieter than Nainital',
    distanceLabel: '20 km · ~45 min',
  },
  {
    id: 'mukteshwar',
    name: 'Mukteshwar',
    category: 'destination',
    lat: 29.4722,
    lng: 79.6478,
    subtitle: 'Himalayan views, Mukteshwar Mahadev, Chauli Ki Jali',
    distanceLabel: '38 km · ~1.5 hr',
  },
];

export const MAP_FILTERS: { id: MapPlaceCategory | 'all'; label: string; pin: string }[] = [
  { id: 'all', label: 'All pins', pin: '•' },
  { id: 'temple', label: 'Kainchi Dham', pin: '🔴' },
  { id: 'hotel', label: 'Hotels', pin: '🏨' },
  { id: 'homestay', label: 'Homestays', pin: '🏠' },
  { id: 'taxi', label: 'Taxi points', pin: '🚕' },
  { id: 'food', label: 'Food', pin: '🍽️' },
  { id: 'rail', label: 'Kathgodam', pin: '🚆' },
  { id: 'airport', label: 'Pantnagar', pin: '✈️' },
  { id: 'destination', label: 'Hill stations', pin: '🏔️' },
];
