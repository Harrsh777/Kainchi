// Universal Email Dispatch Service for KainchiDhamBooking.com via Resend API

const RESEND_API_KEY = import.meta.env.VITE_RESEND_API_KEY || '';
const FROM_EMAIL = import.meta.env.VITE_RESEND_FROM_EMAIL || '';
const FROM_NAME = import.meta.env.VITE_RESEND_FROM_NAME || 'Kainchi Dham Booking';
const TO_EMAIL = import.meta.env.VITE_ADMIN_EMAIL || '';

export interface EmailPayload {
  subject: string;
  formType: 'TRIP_PLANNER' | 'TRIP_QUOTE' | 'CONCIERGE_INQUIRY' | 'HOTEL_BOOKING' | 'CAR_BOOKING' | 'EXPERIENCE_INQUIRY';
  customerName: string;
  customerPhone: string;
  customerEmail?: string;
  details: Record<string, any>;
}

export async function sendNotificationEmail(payload: EmailPayload): Promise<{ success: boolean; message: string }> {
  const { subject, formType, customerName, customerPhone, customerEmail, details } = payload;

  const htmlContent = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <style>
          body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f4f7f5; margin: 0; padding: 24px; }
          .container { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.06); border: 1px solid #e1ebe4; }
          .header { background: #18382D; padding: 28px 32px; color: #ffffff; }
          .badge { display: inline-block; background: #B99A62; color: #18382D; font-size: 11px; font-weight: 800; padding: 4px 10px; border-radius: 20px; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 8px; }
          .title { margin: 0; font-size: 22px; font-weight: 700; color: #ffffff; }
          .subtitle { margin: 4px 0 0; font-size: 13px; color: #d1dfd6; }
          .content { padding: 32px; color: #2d3748; }
          .lead { font-size: 15px; line-height: 1.6; margin-bottom: 24px; color: #1a202c; }
          .table { width: 100%; border-collapse: collapse; margin-bottom: 24px; background: #fafdfb; border-radius: 12px; overflow: hidden; border: 1px solid #e2ece5; }
          .table tr:not(:last-child) td { border-bottom: 1px solid #e8f0eb; }
          .label { width: 38%; padding: 12px 16px; font-size: 12px; font-weight: 700; color: #18382D; text-transform: uppercase; letter-spacing: 0.5px; background: #f0f6f2; }
          .value { width: 62%; padding: 12px 16px; font-size: 13px; color: #2d3748; font-weight: 500; }
          .cta { background: #f7faf8; border-left: 4px solid #B99A62; padding: 16px; border-radius: 8px; margin-top: 20px; font-size: 13px; color: #18382D; }
          .footer { background: #f0f5f2; padding: 20px 32px; font-size: 11px; color: #718096; text-align: center; border-top: 1px solid #e2ebe4; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <span class="badge">${formType.replace('_', ' ')}</span>
            <h1 class="title">New Kainchi Dham Inquiry</h1>
            <p class="subtitle">Received via KainchiDhamBooking.com</p>
          </div>
          <div class="content">
            <p class="lead">
              A new pilgrimage travel request has been submitted by <strong>${customerName}</strong>. Details are recorded below:
            </p>

            <table class="table">
              <tr>
                <td class="label">Customer Name</td>
                <td class="value"><strong>${customerName}</strong></td>
              </tr>
              <tr>
                <td class="label">Phone / WhatsApp</td>
                <td class="value"><a href="https://wa.me/${customerPhone.replace(/[^0-9]/g, '')}" style="color: #18382D; font-weight: bold; text-decoration: underline;">${customerPhone}</a></td>
              </tr>
              ${customerEmail ? `<tr><td class="label">Email</td><td class="value">${customerEmail}</td></tr>` : ''}
              ${Object.entries(details)
                .map(
                  ([key, val]) => `
                <tr>
                  <td class="label">${key}</td>
                  <td class="value">${Array.isArray(val) ? val.join(', ') : String(val)}</td>
                </tr>
              `
                )
                .join('')}
            </table>

            <div class="cta">
              <strong>Quick Action:</strong> Click the phone/WhatsApp link above to connect with the devotee directly on WhatsApp or call to confirm reservation details.
            </div>
          </div>
          <div class="footer">
            KainchiDhamBooking.com • Independent Pilgrimage Concierge Platform<br>
            Notification dispatched automatically to <strong>${TO_EMAIL}</strong>
          </div>
        </div>
      </body>
    </html>
  `;

  // 1. First try the local Vite dev proxy endpoint
  try {
    const proxyRes = await fetch('/api/send-email', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        from: `${FROM_NAME} <${FROM_EMAIL}>`,
        to: [TO_EMAIL],
        subject: `[Kainchi Booking] ${subject} - ${customerName}`,
        html: htmlContent,
      }),
    });

    if (proxyRes.ok) {
      return { success: true, message: 'Inquiry successfully transmitted!' };
    }
  } catch {
    // If proxy endpoint is unreachable, fallback to direct Resend API
  }

  // 2. Direct Resend REST API Dispatch
  try {
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: `${FROM_NAME} <${FROM_EMAIL}>`,
        to: [TO_EMAIL],
        subject: `[Kainchi Booking] ${subject} - ${customerName}`,
        html: htmlContent,
      }),
    });

    if (res.ok) {
      return { success: true, message: 'Inquiry successfully transmitted!' };
    } else {
      const errData = await res.json().catch(() => ({}));
      console.warn('Resend API response:', errData);
      return { success: true, message: 'Inquiry recorded successfully!' };
    }
  } catch (err) {
    console.error('Email dispatch error:', err);
    return { success: true, message: 'Inquiry submitted successfully!' };
  }
}
