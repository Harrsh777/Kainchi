import react from '@vitejs/plugin-react';
import { defineConfig, loadEnv } from 'vite';
import https from 'https';
import { mkdirSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';

const SITE_ORIGIN = 'https://kainchidhambooking.com';
const LASTMOD = '2026-09-08';

type Bucket = 'pages' | 'routes' | 'hotels' | 'destinations';
type Entry = { path: string; bucket: Bucket; changefreq: string; priority: string };

function sitemapEntries(): Entry[] {
  const pages = [
    '/',
    '/kainchi-dham',
    '/kainchi-dham-guide',
    '/kainchi-dham-history',
    '/kainchi-dham-how-to-reach',
    '/kainchi-dham-timings',
    '/kainchi-dham-best-time-to-visit',
    '/kainchi-dham-hotels',
    '/kainchi-dham-taxi',
    '/kainchi-dham-itinerary',
    '/kainchi-dham-cost',
    '/kainchi-dham-packing-list',
    '/kainchi-dham-faq',
    '/neem-karoli-baba',
    '/neem-karoli-baba-biography',
    '/neem-karoli-baba-history',
    '/neem-karoli-baba-teachings',
    '/neem-karoli-baba-stories',
    '/neem-karoli-baba-books',
    '/neem-karoli-baba-kainchi-dham',
    '/trip-planner',
    '/today',
    '/map',
    '/tools',
    '/stories',
    '/nearby',
    '/about',
    '/editorial-policy',
    '/sources',
    '/contact',
    '/corrections',
    '/privacy-policy',
    '/terms',
    '/partners',
    '/list-your-hotel',
    '/list-your-taxi',
    '/local-businesses',
    '/acquire',
  ].map((path) => ({ path, bucket: 'pages' as const, changefreq: 'weekly', priority: path === '/' ? '1.0' : '0.8' }));

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
