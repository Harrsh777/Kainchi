import react from '@vitejs/plugin-react';
import { defineConfig, loadEnv } from 'vite';
import https from 'https';

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
  };
});
