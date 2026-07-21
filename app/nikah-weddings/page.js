import Image from 'next/image';
import Link from 'next/link';

import Icon from '../components/ui-icon';
import OntarioServiceMap from '../components/ontario-service-map';
import { buildBreadcrumbJsonLd, buildMetadata } from '../../lib/metadata';
import { siteContent } from '../../lib/site-content';

const breadcrumbJsonLd = buildBreadcrumbJsonLd([
  { name: 'Home', item: siteContent.siteUrl },
  { name: 'Nikah Weddings', item: `${siteContent.siteUrl}/nikah-weddings` },
]);

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Nikah ceremonies and Ontario marriage officiation',
  serviceType: 'Islamic marriage ceremony and Ontario marriage officiation',
  url: `${siteContent.siteUrl}/nikah-weddings`,
  provider: { '@id': `${siteContent.siteUrl}/#person` },
  areaServed: siteContent.serviceAreas,
};

export const metadata = buildMetadata({
  title: 'Nikah Weddings and Marriage Officiation',
  description:
    'Book a religious Nikah ceremony, Ontario legal marriage officiation, or both, with clear preparation and service-area information.',
  path: '/nikah-weddings',
});

const serviceOptions = [
  {
    icon: 'ring',
    label: 'Religious Service',
    title: 'Religious Nikah',
    description:
      'The Islamic marriage ceremony, including the essential religious elements and guidance for the couple and family.',
  },
  {
    icon: 'document',
    label: 'Legal Service',
    title: 'Ontario Legal Officiation',
    description:
      'Legal marriage officiation for couples with a valid Ontario marriage licence and the required documents.',
  },
  {
    icon: 'layers',
    label: 'Combined Service',
    title: 'Nikah and Legal Officiation',
    description:
      'Both services coordinated for the same occasion, so the religious and legal steps are clear from the start.',
  },
];

export default function NikahWeddingsPage() {
  return (
    <div className="page-shell">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />

      <section className="page-hero">
        <span className="eyebrow">Nikah Services in Ontario</span>
        <h1>Book a Muslim Wedding Officiant in Ontario</h1>
        <p className="section-lead">
          Book a religious Nikah ceremony, Ontario legal marriage officiation,
          or both with an Imam who is also a registered Ontario marriage officiant.
        </p>
        <div className="content-actions">
          <Link className="button button--primary" href="/contact">
            Book a Nikah Consultation
          </Link>
          <Link className="button button--ghost" href="/nikah-guide">
            Get the Free Nikkah Guide
          </Link>
        </div>
      </section>

      <section className="ceremony-gallery" aria-label="Nikah ceremony moments">
        <figure className="ceremony-gallery__feature">
          <Image
            src={siteContent.photos.withGroom}
            alt="Imam Zaniar Ahmad greeting a groom during an outdoor Nikah ceremony"
            width={1206}
            height={1494}
            priority
            sizes="(max-width: 820px) 94vw, 58vw"
          />
          <figcaption>A warm, personal presence on an important day.</figcaption>
        </figure>
        <figure>
          <Image
            src={siteContent.photos.signingNikah}
            alt="Imam Zaniar Ahmad reviewing Nikah ceremony documents outdoors"
            width={1365}
            height={2048}
            sizes="(max-width: 820px) 94vw, 28vw"
          />
          <figcaption>Clear preparation before the ceremony begins.</figcaption>
        </figure>
        <figure>
          <Image
            src={siteContent.photos.weddingOfficiant}
            alt="Imam Zaniar Ahmad holding ceremony documents at a wedding"
            width={1206}
            height={1478}
            sizes="(max-width: 820px) 94vw, 28vw"
          />
          <figcaption>Religious guidance handled with dignity and care.</figcaption>
        </figure>
      </section>

      <section className="section section--compact">
        <div className="section-heading">
          <div>
            <span className="eyebrow">Choose Your Service</span>
            <h2>Religious, Legal, or Both</h2>
          </div>
          <p className="section-lead">
            These services are related, but they are not the same. Choose the
            option that matches what you need for your wedding.
          </p>
        </div>

        <div className="service-path-grid">
          {serviceOptions.map((option) => (
            <article className="service-path" key={option.title}>
              <div className="card-icon-row">
                <span className="card-icon"><Icon name={option.icon} /></span>
                <span className="card-meta">{option.label}</span>
              </div>
              <h3>{option.title}</h3>
              <p>{option.description}</p>
              <Link className="text-link" href="/contact">
                Book This Service <span aria-hidden="true">&rarr;</span>
              </Link>
            </article>
          ))}
        </div>

        <ul className="inclusion-list" aria-label="Additional Nikah service details">
          {siteContent.weddingHighlights.map((highlight) => (
            <li key={highlight}>{highlight}</li>
          ))}
        </ul>
      </section>

      <section className="section section--muted section--compact">
        <div className="section-heading">
          <div>
            <span className="eyebrow">Religious and Legal</span>
            <h2>Understand the Difference Before the Ceremony</h2>
          </div>
          <p className="section-lead">
            A religious Nikah is distinct from legal marriage registration in
            Ontario. Review both paths before finalizing your plans.
          </p>
        </div>

        <div className="split">
          <article className="info-card visual-card">
            <span className="card-icon"><Icon name="document" /></span>
            <h3 className="small-heading">Ontario Legal Marriage</h3>
            <p>
              Ontario.ca explains that you need a valid marriage licence and an
              authorized officiant for a legal ceremony.
            </p>
            <ul className="service-list">
              {siteContent.guide.officialLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} target="_blank" rel="noreferrer noopener">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </article>

          <article className="info-card visual-card">
            <span className="card-icon"><Icon name="ring" /></span>
            <h3 className="small-heading">Religious Nikah Ceremony</h3>
            <p>
              The Nikah is the Islamic marriage ceremony. It can be booked on its
              own or coordinated with Ontario legal officiation.
            </p>
            <ul className="service-list">
              <li>Religious ceremony details are kept clear and accessible.</li>
              <li>Travel outside Ontario is available for Nikah ceremonies by request.</li>
              <li>Travel fees are covered by the client for out-of-province requests.</li>
            </ul>
          </article>
        </div>
      </section>

      <section className="section section--compact">
        <div className="section-heading">
          <div>
            <span className="eyebrow">Service Areas</span>
            <h2>Where Imam Zaniar Serves</h2>
          </div>
          <p className="section-lead">
            Based in Ontario and available across the following cities and
            surrounding communities.
          </p>
        </div>

        <OntarioServiceMap />
      </section>

      <section className="section section--accent section--compact">
        <div className="section-heading">
          <div>
            <span className="eyebrow">Google Reviews</span>
            <h2>Trusted by Couples and Families</h2>
          </div>
          <p className="section-lead">
            {siteContent.reviews.reportedCount} Google reviews reflect a growing
            record of trust across ceremonies and community engagements.
          </p>
        </div>

        <div className="review-grid">
          <article className="review-card review-panel">
            <span className="card-icon"><Icon name="star" /></span>
            <p className="review-rating">
              {siteContent.reviews.reportedCount} Google reviews
            </p>
            <p>{siteContent.reviews.note}</p>
          </article>

          <article className="review-card">
            <h3>Book the Service You Need</h3>
            <p>
              If you are ready to ask about a wedding, use the contact page and
              include the ceremony date, location, and whether you need a
              religious ceremony, Ontario legal officiation, or both.
            </p>
            <div className="content-actions">
              <Link className="button button--primary" href="/contact">
                Book a Nikah Consultation
              </Link>
            </div>
          </article>
        </div>
      </section>

      <section className="section section--compact">
        <div className="section-heading">
          <div>
            <span className="eyebrow">Frequently Asked Questions</span>
            <h2>Common Wedding Questions</h2>
          </div>
        </div>

        <div className="card-grid">
          {siteContent.weddingFaqs.map((faq) => (
            <article key={faq.question} className="faq-card visual-card">
              <span className="card-icon"><Icon name="message" /></span>
              <h3>{faq.question}</h3>
              <p>{faq.answer}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section section--muted section--compact">
        <div className="section-heading">
          <div>
            <span className="eyebrow">Booking Process</span>
            <h2>What Happens Next</h2>
          </div>
        </div>

        <ol className="visual-steps">
          <li><span><Icon name="message" /></span><div><strong>Send the Request</strong><p>Share the date, city, and ceremony details.</p></div></li>
          <li><span><Icon name="calendar" /></span><div><strong>Confirm Availability</strong><p>Review the location, timing, and travel details.</p></div></li>
          <li><span><Icon name="check" /></span><div><strong>Finalize the Booking</strong><p>Agree on the details and prepare for the ceremony.</p></div></li>
        </ol>
        <div className="content-actions">
          <Link className="button button--primary" href="/contact">
            Book a Nikah Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}
