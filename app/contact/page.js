import Link from 'next/link';

import ContactForm from './contact-form';
import { buildMetadata } from '../../lib/metadata';
import { siteContent } from '../../lib/site-content';

export const metadata = buildMetadata({
  title: 'Contact and Booking',
  description:
    'Call, text, message on Instagram, or send a protected website inquiry to Imam Zaniar Ahmad for Nikah and speaking bookings.',
  path: '/contact',
});

export default function ContactPage() {
  return (
    <div className="page-shell">
      <section className="page-hero">
        <span className="eyebrow">Contact and booking</span>
        <h1>Choose the contact method that fits best</h1>
        <p className="section-lead">
          Call or text first, message on Instagram second, or use the protected
          website inquiry form. The form is designed for Nikkah, Nikah, lectures,
          khutbahs, talks, workshops, and speaking engagements.
        </p>
      </section>

      <section className="section contact-grid">
        <div className="contact-methods">
          <article className="contact-method">
            <p className="card-meta">1. Primary contact</p>
            <h3>Call or text</h3>
            <p>
              People may call or text {siteContent.contact.phoneDisplay} for direct
              booking questions.
            </p>
            <div className="content-actions">
              <a className="button button--primary" href={siteContent.contact.phoneHref}>
                Call Imam Zaniar Ahmad
              </a>
              <a className="button button--ghost" href={siteContent.contact.smsHref}>
                Text Imam Zaniar Ahmad
              </a>
              <a className="button button--ghost" href={siteContent.contact.emailHref}>
                Email Imam Zaniar Ahmad
              </a>
            </div>
          </article>

          <article className="contact-method">
            <p className="card-meta">2. Secondary contact</p>
            <h3>Instagram</h3>
            <p>Message Imam Zaniar Ahmad on Instagram for a quick follow-up.</p>
            <a
              className="button button--ghost"
              href={siteContent.contact.instagram}
              target="_blank"
              rel="noreferrer noopener"
            >
              Message Imam Zaniar Ahmad on Instagram
            </a>
          </article>

          <article className="contact-method">
            <p className="card-meta">3. Protected website inquiry</p>
            <h3>Inquiry form</h3>
            <p>
              Use the form when you would like to share the full details of your
              ceremony, event, or speaking request in one message.
            </p>
            <p className="small-copy">Your information is used only to respond to your inquiry.</p>
          </article>
        </div>

        <div className="card card--soft">
          <h3>What to include</h3>
          <ul className="service-list">
            <li>Your name and best contact method.</li>
            <li>The date, location, and service you need.</li>
            <li>Any travel, virtual, or in-person details.</li>
            <li>Any notes about languages, guests, or event format.</li>
          </ul>
          <div className="content-actions">
            <Link className="button button--primary" href="/nikah-weddings">
              Nikah booking details
            </Link>
            <Link className="button button--ghost" href="/lectures-speaking">
              Speaking booking details
            </Link>
          </div>
        </div>
      </section>

      <section className="section section--muted">
        <div className="section-heading">
          <div>
            <span className="eyebrow">Secure inquiry form</span>
            <h2>Send a structured request</h2>
          </div>
          <p className="section-lead">
            The form only asks for information needed to review availability and
            understand the booking request.
          </p>
        </div>

        <ContactForm turnstileSiteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || ''} />
      </section>
    </div>
  );
}
