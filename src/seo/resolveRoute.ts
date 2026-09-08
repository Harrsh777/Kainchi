import { FROM_CITIES } from '../data/fromCities';
import { STAYS_DATA } from '../data/stays';
import { getCluster } from '../data/clusterArticles';
import { getDestination } from '../data/destinations';
import { LEGAL_PATHS } from '../pages/LegalPage';
import { PARTNER_PATHS } from '../pages/PartnersPage';
import { REDIRECTS, normalizePath } from './site';

export type ResolvedRoute =
  | { kind: 'redirect'; to: string }
  | { kind: 'home' }
  | { kind: 'named'; name: string }
  | { kind: 'cluster'; path: string }
  | { kind: 'route-city'; slug: string }
  | { kind: 'stay'; id: string }
  | { kind: 'destination'; slug: string }
  | { kind: 'legal'; path: string }
  | { kind: 'partners'; path: string }
  | { kind: 'notfound' };

const NAMED = new Set([
  '/kainchi-dham',
  '/neem-karoli-baba',
  '/kainchi-dham-hotels',
  '/kainchi-dham-taxi',
  '/kainchi-dham-how-to-reach',
  '/kainchi-dham-itinerary',
  '/stories',
  '/nearby',
  '/tools',
  '/about',
  '/acquire',
  '/trip-planner',
  '/today',
  '/map',
]);

export function resolveRoute(raw: string): ResolvedRoute {
  const path = normalizePath(raw);

  if (REDIRECTS[path]) return { kind: 'redirect', to: REDIRECTS[path] };

  const fromCity = path.match(/^\/from\/([a-z0-9-]+)$/);
  if (fromCity) {
    const city = FROM_CITIES.find((c) => c.slug === fromCity[1]);
    if (city) return { kind: 'redirect', to: `/${city.slug}-to-kainchi-dham` };
    return { kind: 'notfound' };
  }

  if (path === '/') return { kind: 'home' };
  if (NAMED.has(path)) return { kind: 'named', name: path };

  if (getCluster(path)) return { kind: 'cluster', path };

  const toKainchi = path.match(/^\/([a-z0-9-]+)-to-kainchi-dham$/);
  if (toKainchi) {
    const city = FROM_CITIES.find((c) => c.slug === toKainchi[1]);
    if (city) return { kind: 'route-city', slug: city.slug };
    return { kind: 'notfound' };
  }

  const stay = path.match(/^\/stays\/([a-z0-9-]+)$/);
  if (stay) {
    if (STAYS_DATA.some((s) => s.id === stay[1])) return { kind: 'stay', id: stay[1] };
    return { kind: 'notfound' };
  }

  const dest = path.match(/^\/(nainital|bhimtal|mukteshwar|almora|ranikhet|bhowali)$/);
  if (dest && getDestination(dest[1])) return { kind: 'destination', slug: dest[1] };

  if (LEGAL_PATHS.includes(path)) return { kind: 'legal', path };
  if (PARTNER_PATHS.includes(path)) return { kind: 'partners', path };

  return { kind: 'notfound' };
}
