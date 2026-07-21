import Image from 'next/image';
import Link from 'next/link';

import ContactForm from './contact-form';
import Icon from '../components/ui-icon';
import { buildMetadata } from '../../lib/metadata';
import { siteContent } from '../../lib/site-content';

export const metadata = buildMetadata({
  title: 'Contact and Booking',
  description:
    'Contact Imam Zaniar Ahmad to book a Nikah ceremony, Ontario legal marriage officiation, or speaking engagement.',
  path: '/contact',
});

export default function ContactPage() {
  return (
    <div className="page-shell">
      <section className="page-hero page-hero--with-media contact-hero">
        <div className="page-hero__copy">
          <span className="eyebrow">Contact and Booking</span>
          <h1>Book a Nikah or Speaking Engagement</h1>
          <p className="section-lead">
            Share the service, date, location, and details you already know. Call,
            text, email, Instagram, or the booking form are all available.
          </p>
        </div>
        <figure className="page-hero__media page-hero__media--landscape">
          <Image
            src={siteContent.photos.weddingOfficiant}
            alt="Imam Zaniar Ahmad ready to officiate an outdoor wedding"
            width={1206}
            height={1478}
            priority
            sizes="(max-width: 820px) 92vw, 40vw"
          />
          <figcaption>Tell us what you are planning and where it will take place.</figcaption>
        </figure>
      </section>

      <section className="section section--compact contact-grid">
        <div className="contact-methods">
          <article className="contact-method">
            <span className="card-icon"><Icon name="phone" /></span>
            <p className="card-meta">Fastest Option</p>
            <h3>Call or Text</h3>
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
            <span className="card-icon"><Icon name="message" /></span>
            <p className="card-meta">Social Message</p>
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
            <span className="card-icon"><Icon name="document" /></span>
            <p className="card-meta">Detailed Booking</p>
            <h3>Booking Form</h3>
            <p>
              Use the form when you would like to share the full details of your
              ceremony, event, or speaking request in one message.
            </p>
            <p className="small-copy">Your information is used only to respond to your inquiry.</p>
          </article>
        </div>

        <div className="card card--soft visual-card contact-checklist">
          <span className="card-icon"><Icon name="check" /></span>
          <h3>What to Include</h3>
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

      <section className="section section--muted section--compact">
        <div className="section-heading">
          <div>
            <span className="eyebrow">Booking Form</span>
            <h2>Send Your Booking Details</h2>
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
