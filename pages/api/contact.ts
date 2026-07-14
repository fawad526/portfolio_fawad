import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

/**
 * Contact form endpoint — delivers messages straight to your Gmail inbox.
 *
 * Setup (one time):
 *   1. Enable 2-Step Verification on the Gmail account.
 *   2. Create an "App password" at https://myaccount.google.com/apppasswords
 *   3. Add to .env (and Vercel env vars):
 *        GMAIL_USER=youraddress@gmail.com
 *        GMAIL_APP_PASSWORD=xxxxxxxxxxxxxxxx      (16 chars, no spaces)
 *        CONTACT_TO=fawadiqbal274@gmail.com       (optional — defaults to GMAIL_USER)
 *
 * If the env vars are missing, the endpoint returns 501 and the frontend
 * falls back to opening a pre-filled Gmail compose window.
 */
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ ok: false, error: 'Method not allowed' });
  }

  const { message, email } = (req.body ?? {}) as { message?: string; email?: string };

  if (!message || !message.trim()) {
    return res.status(400).json({ ok: false, error: 'Message is required.' });
  }
  if (message.length > 1000) {
    return res.status(400).json({ ok: false, error: 'Message is too long.' });
  }
  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ ok: false, error: 'Please enter a valid email.' });
  }

  const user = process.env.GMAIL_USER;
  const pass = process.env.GMAIL_APP_PASSWORD;
  const to = process.env.CONTACT_TO || user;

  if (!user || !pass) {
    // Not configured yet — signal the client to fall back to mailto.
    return res.status(501).json({ ok: false, error: 'Email delivery is not configured yet.' });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: { user, pass },
    });

    await transporter.sendMail({
      from: `"Portfolio Contact" <${user}>`,
      to,
      replyTo: email || undefined,
      subject: `New message from your portfolio${email ? ` — ${email}` : ''}`,
      text: `${message}\n\n— from ${email || 'anonymous visitor'}`,
      html: `
        <div style="font-family:system-ui,sans-serif;line-height:1.6;color:#111">
          <h2 style="margin:0 0 12px">New portfolio message</h2>
          <p style="white-space:pre-wrap;font-size:15px">${escapeHtml(message)}</p>
          <hr style="border:none;border-top:1px solid #eee;margin:16px 0" />
          <p style="font-size:13px;color:#666">
            Reply-to: ${email ? escapeHtml(email) : 'not provided'}
          </p>
        </div>`,
    });

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error('contact send failed', err);
    return res.status(500).json({ ok: false, error: 'Failed to send. Please try again.' });
  }
}

function escapeHtml(s: string) {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}
