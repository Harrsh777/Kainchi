export const SITE_ORIGIN = 'https://kainchidhambooking.com';
export const LASTMOD = '2026-09-08';

export type SitemapBucket = 'pages' | 'routes' | 'hotels' | 'destinations';

export interface IndexableUrl {
  path: string;
  lastmod: string;
  changefreq: 'daily' | 'weekly' | 'monthly';
  priority: string;
  bucket: SitemapBucket;
}

/** Old or duplicate paths → single canonical (no trailing slash). */
export const REDIRECTS: Record<string, string> = {
  '/from': '/kainchi-dham-how-to-reach',
  '/hotels': '/kainchi-dham-hotels',
  '/hotels-near-kainchi-dham': '/kainchi-dham-hotels',
  '/kainchi-dham-accommodation': '/kainchi-dham-hotels',
  '/taxi': '/kainchi-dham-taxi',
  '/itineraries': '/kainchi-dham-itinerary',
  '/travel-guide': '/kainchi-dham-how-to-reach',
};

export const NOINDEX_PREFIXES = ['/api/', '/admin/', '/dashboard/', '/login/', '/signup/', '/account/', '/checkout/'];

export function normalizePath(path: string): string {
  if (!path || path === '/') return '/';
  const cut = path.split('?')[0].split('#')[0];
  const trimmed = cut.replace(/\/+$/, '');
  return trimmed || '/';
}

export function absoluteUrl(path: string): string {
  const p = normalizePath(path);
  return p === '/' ? `${SITE_ORIGIN}/` : `${SITE_ORIGIN}${p}`;
}

export function routePathForCity(slug: string): string {
  return `/${slug}-to-kainchi-dham`;
}

export function stayPath(id: string): string {
  return `/stays/${id}`;
}
