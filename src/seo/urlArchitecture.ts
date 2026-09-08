import { FROM_CITIES } from '../data/fromCities';
import { STAYS_DATA } from '../data/stays';
import { LASTMOD, type IndexableUrl, routePathForCity, stayPath } from './site';

export function getIndexableUrls(): IndexableUrl[] {
  const pages: IndexableUrl[] = [
    { path: '/', lastmod: LASTMOD, changefreq: 'weekly', priority: '1.0', bucket: 'pages' },
    { path: '/kainchi-dham', lastmod: LASTMOD, changefreq: 'weekly', priority: '0.95', bucket: 'pages' },
    { path: '/kainchi-dham-guide', lastmod: LASTMOD, changefreq: 'monthly', priority: '0.9', bucket: 'pages' },
    { path: '/kainchi-dham-history', lastmod: LASTMOD, changefreq: 'monthly', priority: '0.8', bucket: 'pages' },
    { path: '/kainchi-dham-how-to-reach', lastmod: LASTMOD, changefreq: 'weekly', priority: '0.9', bucket: 'pages' },
    { path: '/kainchi-dham-timings', lastmod: LASTMOD, changefreq: 'weekly', priority: '0.85', bucket: 'pages' },
    { path: '/kainchi-dham-best-time-to-visit', lastmod: LASTMOD, changefreq: 'monthly', priority: '0.85', bucket: 'pages' },
    { path: '/kainchi-dham-hotels', lastmod: LASTMOD, changefreq: 'weekly', priority: '0.9', bucket: 'hotels' },
    { path: '/kainchi-dham-taxi', lastmod: LASTMOD, changefreq: 'weekly', priority: '0.85', bucket: 'pages' },
    { path: '/kainchi-dham-itinerary', lastmod: LASTMOD, changefreq: 'monthly', priority: '0.85', bucket: 'pages' },
    { path: '/kainchi-dham-cost', lastmod: LASTMOD, changefreq: 'monthly', priority: '0.8', bucket: 'pages' },
    { path: '/kainchi-dham-packing-list', lastmod: LASTMOD, changefreq: 'monthly', priority: '0.7', bucket: 'pages' },
    { path: '/kainchi-dham-faq', lastmod: LASTMOD, changefreq: 'monthly', priority: '0.75', bucket: 'pages' },
    { path: '/neem-karoli-baba', lastmod: LASTMOD, changefreq: 'monthly', priority: '0.9', bucket: 'pages' },
    { path: '/neem-karoli-baba-biography', lastmod: LASTMOD, changefreq: 'monthly', priority: '0.8', bucket: 'pages' },
    { path: '/neem-karoli-baba-history', lastmod: LASTMOD, changefreq: 'monthly', priority: '0.75', bucket: 'pages' },
    { path: '/neem-karoli-baba-teachings', lastmod: LASTMOD, changefreq: 'monthly', priority: '0.75', bucket: 'pages' },
    { path: '/neem-karoli-baba-stories', lastmod: LASTMOD, changefreq: 'monthly', priority: '0.75', bucket: 'pages' },
    { path: '/neem-karoli-baba-books', lastmod: LASTMOD, changefreq: 'monthly', priority: '0.7', bucket: 'pages' },
    { path: '/neem-karoli-baba-kainchi-dham', lastmod: LASTMOD, changefreq: 'monthly', priority: '0.8', bucket: 'pages' },
    { path: '/trip-planner', lastmod: LASTMOD, changefreq: 'monthly', priority: '0.8', bucket: 'pages' },
    { path: '/today', lastmod: LASTMOD, changefreq: 'daily', priority: '0.7', bucket: 'pages' },
    { path: '/map', lastmod: LASTMOD, changefreq: 'monthly', priority: '0.75', bucket: 'pages' },
    { path: '/tools', lastmod: LASTMOD, changefreq: 'monthly', priority: '0.7', bucket: 'pages' },
    { path: '/stories', lastmod: LASTMOD, changefreq: 'monthly', priority: '0.7', bucket: 'pages' },
    { path: '/nearby', lastmod: LASTMOD, changefreq: 'monthly', priority: '0.75', bucket: 'destinations' },
    { path: '/about', lastmod: LASTMOD, changefreq: 'monthly', priority: '0.5', bucket: 'pages' },
    { path: '/editorial-policy', lastmod: LASTMOD, changefreq: 'monthly', priority: '0.4', bucket: 'pages' },
    { path: '/sources', lastmod: LASTMOD, changefreq: 'monthly', priority: '0.4', bucket: 'pages' },
    { path: '/contact', lastmod: LASTMOD, changefreq: 'monthly', priority: '0.5', bucket: 'pages' },
    { path: '/corrections', lastmod: LASTMOD, changefreq: 'monthly', priority: '0.3', bucket: 'pages' },
    { path: '/privacy-policy', lastmod: LASTMOD, changefreq: 'monthly', priority: '0.3', bucket: 'pages' },
    { path: '/terms', lastmod: LASTMOD, changefreq: 'monthly', priority: '0.3', bucket: 'pages' },
    { path: '/partners', lastmod: LASTMOD, changefreq: 'monthly', priority: '0.5', bucket: 'pages' },
    { path: '/list-your-hotel', lastmod: LASTMOD, changefreq: 'monthly', priority: '0.45', bucket: 'pages' },
    { path: '/list-your-taxi', lastmod: LASTMOD, changefreq: 'monthly', priority: '0.45', bucket: 'pages' },
    { path: '/local-businesses', lastmod: LASTMOD, changefreq: 'monthly', priority: '0.45', bucket: 'pages' },
    { path: '/acquire', lastmod: LASTMOD, changefreq: 'monthly', priority: '0.4', bucket: 'pages' },
  ];

  const routes: IndexableUrl[] = FROM_CITIES.map((c) => ({
    path: routePathForCity(c.slug),
    lastmod: LASTMOD,
    changefreq: 'monthly' as const,
    priority: '0.8',
    bucket: 'routes' as const,
  }));

  const hotels: IndexableUrl[] = STAYS_DATA.map((s) => ({
    path: stayPath(s.id),
    lastmod: LASTMOD,
    changefreq: 'weekly' as const,
    priority: '0.7',
    bucket: 'hotels' as const,
  }));

  const destinations: IndexableUrl[] = [
    '/nainital',
    '/bhimtal',
    '/mukteshwar',
    '/almora',
    '/ranikhet',
    '/bhowali',
  ].map((path) => ({
    path,
    lastmod: LASTMOD,
    changefreq: 'monthly' as const,
    priority: '0.75',
    bucket: 'destinations' as const,
  }));

  return [...pages, ...routes, ...hotels, ...destinations];
}
