export const runtime = 'nodejs';

const recentSubmissions = globalThis.__imamContactSubmissions || new Map();
globalThis.__imamContactSubmissions = recentSubmissions;

function json(body, init = {}) {
  return Response.json(body, init);
}

function getIp(request) {
  const forwarded = request.headers.get('x-forwarded-for');
  if (forwarded) {
    return forwarded.split(',')[0].trim();
  }

  return request.headers.get('x-real-ip') || 'unknown';
}

function basicTrim(value) {
  return typeof value === 'string' ? value.trim() : '';
}

function escapeHtml(value) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

async function verifyTurnstile(token, request) {
  const secret = process.env.TURNSTILE_SECRET_KEY;

  if (!secret) {
    return { ok: process.env.NODE_ENV !== 'production', skipped: true };
  }

  if (!token) {
    return { ok: false, skipped: false, message: 'Please complete the verification check.' };
  }

  const formData = new FormData();
  formData.set('secret', secret);
  formData.set('response', token);
  formData.set('remoteip', getIp(request));

  const response = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
    method: 'POST',
    body: formData,
  });

  const result = await response.json();

  if (!result.success) {
    return { ok: false, skipped: false, message: 'Verification expired. Please try again.' };
  }

  return { ok: true, skipped: false };
}

async function sendEmail({ subject, text, html }) {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.EMAIL_FROM_ADDRESS;
  const to = process.env.CONTACT_TO_EMAIL || 'zan@hcoinnovation.com';

  if (!apiKey || !from) {
    if (process.env.NODE_ENV !== 'production') {
      return { simulated: true };
    }

    throw new Error('Email delivery is not configured yet.');
  }

  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from,
      to,
      subject,
      text,
      html,
    }),
  });

  if (!response.ok) {
    const payload = await response.text();
    throw new Error(`Email provider error: ${payload}`);
  }

  return response.json();
}

export async function POST(request) {
  try {
    const body = await request.json();
    const ip = getIp(request);
    const bucket = recentSubmissions.get(ip) || [];
    const now = Date.now();
    const recent = bucket.filter((entry) => now - entry < 15 * 60 * 1000);

    if (recent.length >= 8) {
      return json(
        { error: 'Too many submissions from this connection. Please try again later.' },
        { status: 429 },
      );
    }

    const fullName = basicTrim(body.fullName);
    const email = basicTrim(body.email);
    const phone = basicTrim(body.phone);
    const serviceRequested = body.serviceRequested === 'speaking' ? 'speaking' : 'nikah';
    const preferredDate = basicTrim(body.preferredDate);
    const location = basicTrim(body.location);
    const format = basicTrim(body.format) || 'in-person';
    const message = basicTrim(body.message);
    const consent = body.consent === true;
    const website = basicTrim(body.website);
    const startedAt = Number(body.startedAt);
    const turnstileToken = basicTrim(body.turnstileToken);

    if (website) {
      return json({ message: 'Thanks. Your inquiry has been received.' });
    }

    if (!fullName || !email || !message || !consent) {
      return json({ error: 'Please complete the required fields.' }, { status: 400 });
    }

    if (!/^\S+@\S+\.\S+$/.test(email)) {
      return json({ error: 'Please enter a valid email address.' }, { status: 400 });
    }

    if (fullName.length > 120 || email.length > 254 || message.length > 5000) {
      return json({ error: 'One or more fields are too long.' }, { status: 400 });
    }

    if (!Number.isFinite(startedAt) || now - startedAt < 3000) {
      return json(
        { error: 'Please take a moment to review the form before sending it.' },
        { status: 400 },
      );
    }

    const verification = await verifyTurnstile(turnstileToken, request);
    if (!verification.ok) {
      return json(
        { error: verification.message || 'Verification failed. Please try again.' },
        { status: 400 },
      );
    }

    const travelDetails = basicTrim(body.travelDetails);
    const legalOfficiation = basicTrim(body.legalOfficiation);
    const guests = basicTrim(body.guests);
    const languages = basicTrim(body.languages);
    const ceremonyDate = basicTrim(body.ceremonyDate);
    const ceremonyTime = basicTrim(body.ceremonyTime);
    const ceremonyLocation = basicTrim(body.ceremonyLocation);
    const organization = basicTrim(body.organization);
    const eventType = basicTrim(body.eventType);
    const requestedTopic = basicTrim(body.requestedTopic);
    const audience = basicTrim(body.audience);
    const ageRange = basicTrim(body.ageRange);
    const eventDuration = basicTrim(body.eventDuration);
    const additionalDetails = basicTrim(body.additionalDetails);

    const subject =
      serviceRequested === 'speaking'
        ? `Speaking inquiry from ${fullName}`
        : `Nikah inquiry from ${fullName}`;

    const text = [
      `Name: ${fullName}`,
      `Email: ${email}`,
      phone ? `Phone: ${phone}` : null,
      `Service: ${serviceRequested}`,
      preferredDate ? `Preferred date: ${preferredDate}` : null,
      location ? `Location: ${location}` : null,
      `Format: ${format}`,
      '',
      `Message: ${message}`,
      '',
      serviceRequested === 'speaking'
        ? [
            `Organization: ${organization || 'Not provided'}`,
            `Event type: ${eventType || 'Not provided'}`,
            `Requested topic: ${requestedTopic || 'Not provided'}`,
            `Audience: ${audience || 'Not provided'}`,
            `Age range: ${ageRange || 'Not provided'}`,
            `Event duration: ${eventDuration || 'Not provided'}`,
            `Additional details: ${additionalDetails || 'Not provided'}`,
          ].join('\n')
        : [
            `Ceremony date: ${ceremonyDate || 'Not provided'}`,
            `Ceremony time: ${ceremonyTime || 'Not provided'}`,
            `Ceremony location: ${ceremonyLocation || 'Not provided'}`,
            `Guests: ${guests || 'Not provided'}`,
            `Languages: ${languages || 'Not provided'}`,
            `Ontario / travel detail: ${legalOfficiation || 'Not provided'}`,
            `Travel details: ${travelDetails || 'Not provided'}`,
            `Additional details: ${additionalDetails || 'Not provided'}`,
          ].join('\n'),
    ]
      .filter(Boolean)
      .join('\n');

    const html = `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #1f2933">
        <h1>Website inquiry</h1>
        <p><strong>Name:</strong> ${escapeHtml(fullName)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        ${phone ? `<p><strong>Phone:</strong> ${escapeHtml(phone)}</p>` : ''}
        <p><strong>Service:</strong> ${escapeHtml(serviceRequested)}</p>
        ${preferredDate ? `<p><strong>Preferred date:</strong> ${escapeHtml(preferredDate)}</p>` : ''}
        ${location ? `<p><strong>Location:</strong> ${escapeHtml(location)}</p>` : ''}
        <p><strong>Format:</strong> ${escapeHtml(format)}</p>
        <p><strong>Message:</strong><br />${escapeHtml(message).replace(/\n/g, '<br />')}</p>
        ${
          serviceRequested === 'speaking'
            ? `
              <h2>Speaking details</h2>
              <p><strong>Organization:</strong> ${escapeHtml(organization || 'Not provided')}</p>
              <p><strong>Event type:</strong> ${escapeHtml(eventType || 'Not provided')}</p>
              <p><strong>Requested topic:</strong> ${escapeHtml(requestedTopic || 'Not provided')}</p>
              <p><strong>Audience:</strong> ${escapeHtml(audience || 'Not provided')}</p>
              <p><strong>Age range:</strong> ${escapeHtml(ageRange || 'Not provided')}</p>
              <p><strong>Event duration:</strong> ${escapeHtml(eventDuration || 'Not provided')}</p>
              <p><strong>Additional details:</strong> ${escapeHtml(additionalDetails || 'Not provided')}</p>
            `
            : `
              <h2>Nikah details</h2>
              <p><strong>Ceremony date:</strong> ${escapeHtml(ceremonyDate || 'Not provided')}</p>
              <p><strong>Ceremony time:</strong> ${escapeHtml(ceremonyTime || 'Not provided')}</p>
              <p><strong>Ceremony location:</strong> ${escapeHtml(ceremonyLocation || 'Not provided')}</p>
              <p><strong>Guests:</strong> ${escapeHtml(guests || 'Not provided')}</p>
              <p><strong>Languages:</strong> ${escapeHtml(languages || 'Not provided')}</p>
              <p><strong>Ontario / travel detail:</strong> ${escapeHtml(legalOfficiation || 'Not provided')}</p>
              <p><strong>Travel details:</strong> ${escapeHtml(travelDetails || 'Not provided')}</p>
              <p><strong>Additional details:</strong> ${escapeHtml(additionalDetails || 'Not provided')}</p>
            `
        }
      </div>
    `;

    await sendEmail({ subject, text, html });

    recent.push(now);
    recentSubmissions.set(ip, recent);

    return json({
      message:
        process.env.RESEND_API_KEY && process.env.EMAIL_FROM_ADDRESS
          ? 'Thanks. Your inquiry has been sent.'
          : 'Thanks. Your inquiry was captured in development mode.',
    });
  } catch (error) {
    return json(
      {
        error:
          error instanceof Error
            ? error.message
            : 'Unable to process the inquiry right now.',
      },
      { status: 500 },
    );
  }
}
