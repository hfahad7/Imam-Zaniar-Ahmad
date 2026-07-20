import Link from 'next/link';

import { buildBreadcrumbJsonLd, buildMetadata } from '../../lib/metadata';
import { siteContent } from '../../lib/site-content';

const breadcrumbJsonLd = buildBreadcrumbJsonLd([
  { name: 'Home', item: siteContent.siteUrl },
  { name: 'Nikah Guide', item: `${siteContent.siteUrl}/nikah-guide` },
]);

export const metadata = buildMetadata({
  title: siteContent.guide.title,
  description:
    'An Ontario Nikkah and Nikah guide explaining the ceremony, legal marriage process, preparation steps, and downloadable checklist.',
  path: '/nikah-guide',
});

export default function NikahGuidePage() {
  return (
    <div className="page-shell">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <section className="page-hero">
        <span className="eyebrow">Nikah guide</span>
        <h1>{siteContent.guide.title}</h1>
        <p className="section-lead">
          A practical resource for couples who want to understand the ceremony,
          prepare with confidence, and keep the important details in one place.
        </p>
        <div className="content-actions">
          <a className="button button--primary" href={siteContent.guide.downloadPath}>
            Download the PDF
          </a>
          <Link className="button button--ghost" href="/nikah-weddings">
            Back to the Nikah page
          </Link>
        </div>
        <p className="small-copy">Last updated {siteContent.guide.lastUpdated}.</p>
      </section>

      <section className="section">
        <div className="section-heading">
          <div>
            <span className="eyebrow">Who it is for</span>
            <h2>Couples planning a ceremony in Ontario</h2>
          </div>
        </div>

        <p className="prose">
          The guide is written for couples who want to understand the difference
          between the religious Nikkah/Nikah and the legal marriage process in
          Ontario, and for families who want a practical checklist before the
          ceremony day.
        </p>
      </section>

      <section className="section section--muted">
        <div className="section-heading">
          <div>
            <span className="eyebrow">Guide content</span>
            <h2>What the guide covers</h2>
          </div>
        </div>

        <div className="card-grid">
          <article className="card card--soft">
            <h3>Religious preparation</h3>
            <ul className="service-list">
              <li>Consent</li>
              <li>The wali</li>
              <li>Mahr</li>
              <li>Witnesses</li>
              <li>Ceremony preparation and planning</li>
            </ul>
          </article>
          <article className="card card--soft">
            <h3>Ontario legal process</h3>
            <ul className="service-list">
              <li>Marriage licence basics</li>
              <li>Authorized officiants</li>
              <li>Signing and registering the marriage</li>
              <li>Marriage certificate overview</li>
              <li>Official Ontario resources</li>
            </ul>
          </article>
          <article className="card card--soft">
            <h3>Planning support</h3>
            <ul className="service-list">
              <li>Venue and vendor questions</li>
              <li>Trusted Imam and officiant selection</li>
              <li>Booking checklist</li>
              <li>Travel request notes</li>
            </ul>
          </article>
          <article className="card card--soft">
            <h3>Helpful resources</h3>
            <ul className="service-list">
              <li>Ontario marriage information</li>
              <li>A downloadable copy for easy reference</li>
              <li>Wedding service and booking details</li>
              <li>Clear next steps for couples</li>
            </ul>
          </article>
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <div>
            <span className="eyebrow">Official Ontario resources</span>
            <h2>Useful reference links</h2>
          </div>
        </div>

        <div className="guide-grid">
          {siteContent.guide.officialLinks.map((link) => (
            <article key={link.href} className="guide-card">
              <h3>{link.label}</h3>
              <a className="button button--ghost" href={link.href} target="_blank" rel="noreferrer noopener">
                Open official source
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="section section--accent">
        <div className="section-heading">
          <div>
            <span className="eyebrow">Next step</span>
            <h2>Continue to the wedding page or book directly</h2>
          </div>
        </div>

        <div className="content-actions">
          <Link className="button button--primary" href="/nikah-weddings">
            Open the Nikah wedding page
          </Link>
          <Link className="button button--ghost" href="/contact">
            Request availability
          </Link>
        </div>
      </section>
    </div>
  );
}
