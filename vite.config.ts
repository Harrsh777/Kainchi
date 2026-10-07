import react from '@vitejs/plugin-react';
import { defineConfig, loadEnv } from 'vite';
import https from 'https';
import { mkdirSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';

const SITE_ORIGIN = 'https://kainchidhambooking.com';
const LASTMOD = '2026-10-08';

type Bucket = 'pages' | 'routes' | 'hotels' | 'destinations';
type Entry = { path: string; bucket: Bucket; changefreq: string; priority: string };

function sitemapEntries(): Entry[] {
  const pages: Entry[] = [
    { path: '/', priority: '1.0', changefreq: 'daily' },
    { path: '/kainchi-dham-registration', priority: '0.95', changefreq: 'daily' },
    { path: '/kainchi-dham-booking', priority: '0.95', changefreq: 'daily' },
    { path: '/kainchi-dham-darshan', priority: '0.9', changefreq: 'weekly' },
    { path: '/kainchi-dham', priority: '0.9', changefreq: 'weekly' },
    { path: '/kainchi-dham-hotels', priority: '0.9', changefreq: 'weekly' },
    { path: '/kainchi-dham-taxi', priority: '0.9', changefreq: 'weekly' },
    { path: '/kainchi-dham-how-to-reach', priority: '0.9', changefreq: 'weekly' },
    { path: '/kainchi-dham-tour-packages', priority: '0.85', changefreq: 'weekly' },
    { path: '/kainchi-dham-parking', priority: '0.85', changefreq: 'weekly' },
    { path: '/kainchi-dham-rules', priority: '0.85', changefreq: 'weekly' },
    { path: '/kainchi-dham-weather', priority: '0.85', changefreq: 'weekly' },
    { path: '/kainchi-dham-entry-pass', priority: '0.85', changefreq: 'weekly' },
    { path: '/neem-karoli-baba', priority: '0.9', changefreq: 'weekly' },
    { path: '/trip-planner', priority: '0.85', changefreq: 'weekly' },
    { path: '/today', priority: '0.85', changefreq: 'daily' },
    { path: '/kainchi-dham-guide', priority: '0.8', changefreq: 'weekly' },
    { path: '/kainchi-dham-history', priority: '0.8', changefreq: 'monthly' },
    { path: '/kainchi-dham-timings', priority: '0.8', changefreq: 'weekly' },
    { path: '/kainchi-dham-best-time-to-visit', priority: '0.8', changefreq: 'weekly' },
    { path: '/kainchi-dham-itinerary', priority: '0.8', changefreq: 'weekly' },
    { path: '/kainchi-dham-cost', priority: '0.8', changefreq: 'weekly' },
    { path: '/kainchi-dham-packing-list', priority: '0.8', changefreq: 'monthly' },
    { path: '/kainchi-dham-faq', priority: '0.8', changefreq: 'weekly' },
    { path: '/neem-karoli-baba-biography', priority: '0.8', changefreq: 'monthly' },
    { path: '/neem-karoli-baba-history', priority: '0.8', changefreq: 'monthly' },
    { path: '/neem-karoli-baba-teachings', priority: '0.8', changefreq: 'monthly' },
    { path: '/neem-karoli-baba-stories', priority: '0.8', changefreq: 'weekly' },
    { path: '/neem-karoli-baba-books', priority: '0.8', changefreq: 'monthly' },
    { path: '/neem-karoli-baba-kainchi-dham', priority: '0.8', changefreq: 'weekly' },
    { path: '/map', priority: '0.8', changefreq: 'monthly' },
    { path: '/tools', priority: '0.75', changefreq: 'monthly' },
    { path: '/stories', priority: '0.8', changefreq: 'weekly' },
    { path: '/nearby', priority: '0.8', changefreq: 'weekly' },
    { path: '/about', priority: '0.7', changefreq: 'monthly' },
    { path: '/editorial-policy', priority: '0.6', changefreq: 'monthly' },
    { path: '/sources', priority: '0.6', changefreq: 'monthly' },
    { path: '/contact', priority: '0.7', changefreq: 'monthly' },
    { path: '/corrections', priority: '0.6', changefreq: 'monthly' },
    { path: '/privacy-policy', priority: '0.5', changefreq: 'yearly' },
    { path: '/terms', priority: '0.5', changefreq: 'yearly' },
    { path: '/partners', priority: '0.7', changefreq: 'monthly' },
    { path: '/list-your-hotel', priority: '0.7', changefreq: 'monthly' },
    { path: '/list-your-taxi', priority: '0.7', changefreq: 'monthly' },
    { path: '/local-businesses', priority: '0.7', changefreq: 'monthly' },
    { path: '/acquire', priority: '0.65', changefreq: 'monthly' },
  ].map((p) => ({ ...p, bucket: 'pages' as const }));

  const routes = [
    'delhi',
    'noida',
    'gurgaon',
    'lucknow',
    'kanpur',
    'mumbai',
    'bangalore',
    'jaipur',
    'chandigarh',
    'ahmedabad',
    'dehradun',
    'agra',
    'varanasi',
  ].map((slug) => ({
    path: `/${slug}-to-kainchi-dham`,
    bucket: 'routes' as const,
    changefreq: 'monthly',
    priority: '0.8',
  }));

  const hotels = [
    'kainchi-valley-retreat',
    'neem-valley-residency',
    'himalayan-view-homestay',
    'bhowali-pine-haven',
    'kshipra-riverside-cottages',
    'ananda-kumaon-spiritual-retreat',
  ].map((id) => ({
    path: `/stays/${id}`,
    bucket: 'hotels' as const,
    changefreq: 'weekly',
    priority: '0.7',
  }));

  const destinations = ['nainital', 'bhimtal', 'mukteshwar', 'almora', 'ranikhet', 'bhowali'].map((slug) => ({
    path: `/${slug}`,
    bucket: 'destinations' as const,
    changefreq: 'monthly',
    priority: '0.75',
  }));

  return [...pages, ...routes, ...hotels, ...destinations];
}

function xmlEscape(value: string): string {
  return value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function writeSitemapsTo(outDir: string): void {
  const urls = sitemapEntries();
  const buckets: Bucket[] = ['pages', 'routes', 'hotels', 'destinations'];
  const dir = resolve(outDir, 'sitemaps');
  mkdirSync(dir, { recursive: true });
  for (const bucket of buckets) {
    const entries = urls.filter((u) => u.bucket === bucket);
    const body = entries
      .map(
        (e) => `  <url>
    <loc>${xmlEscape(e.path === '/' ? `${SITE_ORIGIN}/` : `${SITE_ORIGIN}${e.path}`)}</loc>
    <lastmod>${LASTMOD}</lastmod>
    <changefreq>${e.changefreq}</changefreq>
    <priority>${e.priority}</priority>
  </url>`
      )
      .join('\n');
    writeFileSync(
      resolve(dir, `${bucket}.xml`),
      `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${body}\n</urlset>\n`
    );
  }
  const indexBody = buckets
    .map(
      (name) => `  <sitemap>
    <loc>${SITE_ORIGIN}/sitemaps/${name}.xml</loc>
    <lastmod>${LASTMOD}</lastmod>
  </sitemap>`
    )
    .join('\n');
  writeFileSync(
    resolve(outDir, 'sitemap.xml'),
    `<?xml version="1.0" encoding="UTF-8"?>\n<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${indexBody}\n</sitemapindex>\n`
  );
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  const apiKey = env.RESEND_API_KEY || '';
  const fromEmail = env.RESEND_FROM_EMAIL || '';
  const fromName = env.RESEND_FROM_NAME || 'Kainchi Dham Booking';
  const adminEmail = env.ADMIN_EMAIL || '';

  return {
    plugins: [
      react(),
      {
        name: 'kainchi-sitemaps',
        buildStart() {
          writeSitemapsTo('public');
        },
        closeBundle() {
          writeSitemapsTo('dist');
        },
      },
      {
        name: 'resend-email-middleware',
        configureServer(server) {
          server.middlewares.use('/api/send-email', (req, res) => {
            if (req.method !== 'POST') {
              res.statusCode = 405;
              res.end(JSON.stringify({ error: 'Method Not Allowed' }));
              return;
            }

            let body = '';
            req.on('data', (chunk) => {
              body += chunk;
            });

            req.on('end', () => {
              try {
                const parsed = JSON.parse(body);

                const postData = JSON.stringify({
                  from: parsed.from || `${fromName} <${fromEmail}>`,
                  to: parsed.to || [adminEmail],
                  subject: parsed.subject || 'New Inquiry from Kainchi Dham Booking',
                  html: parsed.html,
                });

                const options = {
                  hostname: 'api.resend.com',
                  port: 443,
                  path: '/emails',
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${apiKey}`,
                    'Content-Length': Buffer.byteLength(postData),
                  },
                };

                const request = https.request(options, (apiRes) => {
                  let responseBody = '';
                  apiRes.on('data', (d) => {
                    responseBody += d;
                  });
                  apiRes.on('end', () => {
                    res.setHeader('Content-Type', 'application/json');
                    res.statusCode = apiRes.statusCode || 200;
                    res.end(responseBody);
                  });
                });

                request.on('error', (e) => {
                  console.error('Resend Node API Error:', e);
                  res.statusCode = 500;
                  res.end(JSON.stringify({ error: e.message }));
                });

                request.write(postData);
                request.end();
              } catch (err: any) {
                res.statusCode = 400;
                res.end(JSON.stringify({ error: err.message }));
              }
            });
          });
        },
      },
    ],
    appType: 'spa',
  };
});
