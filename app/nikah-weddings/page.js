import Link from 'next/link';

import { buildBreadcrumbJsonLd, buildMetadata } from '../../lib/metadata';
import { siteContent } from '../../lib/site-content';

const breadcrumbJsonLd = buildBreadcrumbJsonLd([
  { name: 'Home', item: siteContent.siteUrl },
  { name: 'Nikah Weddings', item: `${siteContent.siteUrl}/nikah-weddings` },
]);

export const metadata = buildMetadata({
  title: 'Nikkah and Nikah Weddings',
  description:
    'Nikkah and Nikah wedding officiation in Ontario, with clear explanations of religious ceremonies, legal marriage paperwork, service areas, and travel requests.',
  path: '/nikah-weddings',
});

export default function NikahWeddingsPage() {
  return (
    <div className="page-shell">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <section className="page-hero">
        <span className="eyebrow">Nikkah and Nikah weddings</span>
        <h1>Book a Muslim wedding officiant in Ontario</h1>
        <p className="section-lead">
          This page is built for people searching for an Imam, a registered
          Ontario marriage officiant, or a Muslim wedding officiant for a
          Nikkah/Nikah ceremony. It keeps the religious ceremony and the legal
          Ontario process clearly separated.
        </p>
        <div className="content-actions">
          <Link className="button button--primary" href="/contact">
            Request Nikah availability
          </Link>
          <Link className="button button--ghost" href="/nikah-guide">
            Read the Nikah guide
          </Link>
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <div>
            <span className="eyebrow">What is included</span>
            <h2>Practical ceremony support</h2>
          </div>
        </div>

        <div className="card-grid">
          {siteContent.weddingHighlights.map((highlight) => (
            <article key={highlight} className="card">
              <p>{highlight}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section section--muted">
        <div className="section-heading">
          <div>
            <span className="eyebrow">Religious and legal distinction</span>
            <h2>Understand the difference before the ceremony</h2>
          </div>
          <p className="section-lead">
            A religious Nikkah/Nikah is not the same thing as a legal marriage
            registration. Visitors should review the official Ontario resources
            before publishing or relying on legal details.
          </p>
        </div>

        <div className="split">
          <article className="info-card">
            <h3 className="small-heading">Ontario legal marriage</h3>
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

          <article className="info-card">
            <h3 className="small-heading">Religious ceremony</h3>
            <p>
              The site uses both Nikkah and Nikah naturally so visitors can find
              the service regardless of spelling.
            </p>
            <ul className="service-list">
              <li>Religious ceremony details are kept clear and accessible.</li>
              <li>Travel outside Ontario is available for Nikkah ceremonies by request.</li>
              <li>Travel fees are covered by the client for out-of-province requests.</li>
            </ul>
          </article>
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <div>
            <span className="eyebrow">Service areas</span>
            <h2>Confirmed Ontario locations</h2>
          </div>
          <p className="section-lead">
            These cities are listed centrally and shown consistently throughout
            the website.
          </p>
        </div>

        <div className="pill-list">
          {siteContent.serviceAreas.map((area) => (
            <span key={area} className="pill">
              {area}
            </span>
          ))}
        </div>
      </section>

      <section className="section section--accent">
        <div className="section-heading">
          <div>
            <span className="eyebrow">Google Reviews</span>
            <h2>Community trust section</h2>
          </div>
          <p className="section-lead">
            The current public count is owner-reported as {siteContent.reviews.reportedCount}
            reviews. The live review listing should be connected only after the
            verified Google Business Profile URL is supplied.
          </p>
        </div>

        <div className="review-grid">
          <article className="review-card review-panel">
            <p className="review-rating">
              Reported count: {siteContent.reviews.reportedCount} reviews
            </p>
            <p>{siteContent.reviews.note}</p>
            <p className="review-note">
              No review text is fabricated. Once the Place ID and full review URL
              are added, the section can point to the live Google profile.
            </p>
          </article>

          <article className="review-card">
            <h3>Simple next step</h3>
            <p>
              If you are ready to ask about a wedding, use the contact page and
              include the ceremony date, location, and whether the request is a
              religious ceremony, an Ontario legal officiation request, or a
              travel Nikkah.
            </p>
            <div className="content-actions">
              <Link className="button button--primary" href="/contact">
                Request availability
              </Link>
            </div>
          </article>
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <div>
            <span className="eyebrow">Frequently asked questions</span>
            <h2>Common wedding questions</h2>
          </div>
        </div>

        <div className="card-grid">
          {siteContent.weddingFaqs.map((faq) => (
            <article key={faq.question} className="faq-card">
              <h3>{faq.question}</h3>
              <p>{faq.answer}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section section--muted">
        <div className="section-heading">
          <div>
            <span className="eyebrow">Booking flow</span>
            <h2>What happens next</h2>
          </div>
        </div>

        <ol className="guide-list">
          <li>Send the request with the ceremony details.</li>
          <li>Confirm availability, location, and any travel details.</li>
          <li>Finalize the engagement once the details are agreed.</li>
        </ol>
      </section>
    </div>
  );
}
