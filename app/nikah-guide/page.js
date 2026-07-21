import Image from 'next/image';
import Link from 'next/link';

import Icon from '../components/ui-icon';
import { buildBreadcrumbJsonLd, buildMetadata } from '../../lib/metadata';
import { siteContent } from '../../lib/site-content';

const breadcrumbJsonLd = buildBreadcrumbJsonLd([
  { name: 'Home', item: siteContent.siteUrl },
  { name: 'Nikah Guide', item: `${siteContent.siteUrl}/nikah-guide` },
]);

export const metadata = buildMetadata({
  title: siteContent.guide.title,
  description:
    'A free Nikkah guide explaining the religious ceremony, Ontario legal marriage process, preparation steps, and downloadable checklist.',
  path: '/nikah-guide',
});

export default function NikahGuidePage() {
  return (
    <div className="page-shell">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <section className="page-hero page-hero--with-media page-hero--guide">
        <div className="page-hero__copy">
          <span className="eyebrow">Free Wedding Resource</span>
          <h1>{siteContent.guide.title}</h1>
          <p className="section-lead">
            A free, practical resource for couples who want to understand the Nikah,
            prepare with confidence, and keep important details in one place.
          </p>
          <div className="content-actions">
            <a className="button button--primary" href={siteContent.guide.downloadPath}>
              Download the Free PDF
            </a>
            <Link className="button button--ghost" href="/nikah-weddings">
              View Nikah Services
            </Link>
          </div>
          <p className="small-copy">Last updated {siteContent.guide.lastUpdated}.</p>
        </div>
        <figure className="guide-cover">
          <div className="guide-cover__paper">
            <span className="guide-cover__mark"><Icon name="ring" /></span>
            <small>Complimentary Ontario Edition</small>
            <strong>The Nikkah Guide</strong>
            <p>A clear path from preparation to ceremony day.</p>
            <span className="guide-cover__author">Imam Zaniar Ahmad</span>
          </div>
        </figure>
      </section>

      <section className="section section--compact">
        <div className="section-heading">
          <div>
            <span className="eyebrow">Who It Is For</span>
            <h2>Couples Planning a Ceremony in Ontario</h2>
          </div>
        </div>

        <p className="prose">
          The guide is written for couples who want to understand the difference
          between a religious Nikah and the legal marriage process in Ontario. It
          also gives families a practical checklist for the ceremony day.
        </p>
      </section>

      <section className="section section--muted section--compact">
        <div className="section-heading">
          <div>
            <span className="eyebrow">Guide Content</span>
            <h2>What the Guide Covers</h2>
          </div>
        </div>

        <div className="card-grid">
          <article className="card card--soft visual-card">
            <span className="card-icon"><Icon name="ring" /></span>
            <h3>Religious Preparation</h3>
            <ul className="service-list">
              <li>Consent</li>
              <li>The wali</li>
              <li>Mahr</li>
              <li>Witnesses</li>
              <li>Ceremony preparation and planning</li>
            </ul>
          </article>
          <article className="card card--soft visual-card">
            <span className="card-icon"><Icon name="document" /></span>
            <h3>Ontario Legal Process</h3>
            <ul className="service-list">
              <li>Marriage licence basics</li>
              <li>Authorized officiants</li>
              <li>Signing and registering the marriage</li>
              <li>Marriage certificate overview</li>
              <li>Official Ontario resources</li>
            </ul>
          </article>
          <article className="card card--soft visual-card">
            <span className="card-icon"><Icon name="calendar" /></span>
            <h3>Planning Support</h3>
            <ul className="service-list">
              <li>Venue and vendor questions</li>
              <li>Trusted Imam and officiant selection</li>
              <li>Booking checklist</li>
              <li>Travel request notes</li>
            </ul>
          </article>
          <article className="card card--soft visual-card">
            <span className="card-icon"><Icon name="book" /></span>
            <h3>Helpful Resources</h3>
            <ul className="service-list">
              <li>Ontario marriage information</li>
              <li>A downloadable copy for easy reference</li>
              <li>Wedding service and booking details</li>
              <li>Clear next steps for couples</li>
            </ul>
          </article>
        </div>
      </section>

      <section className="guide-photo-callout">
        <Image
          src={siteContent.photos.withGroom}
          alt="Imam Zaniar Ahmad greeting a groom during a Nikah ceremony"
          width={1206}
          height={1494}
          sizes="(max-width: 820px) 92vw, 44vw"
        />
        <blockquote>
          <Icon name="heart" />
          <p>Preparation should make the ceremony feel calmer, clearer, and more meaningful.</p>
          <cite>Imam Zaniar Ahmad</cite>
        </blockquote>
      </section>

      <section className="section section--compact">
        <div className="section-heading">
          <div>
            <span className="eyebrow">Official Ontario Resources</span>
            <h2>Useful Reference Links</h2>
          </div>
        </div>

        <div className="guide-grid">
          {siteContent.guide.officialLinks.map((link) => (
            <article key={link.href} className="guide-card">
              <span className="card-icon"><Icon name="globe" /></span>
              <h3>{link.label}</h3>
              <a className="button button--ghost" href={link.href} target="_blank" rel="noreferrer noopener">
                Open official source
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="section section--accent section--compact">
        <div className="section-heading">
          <div>
            <span className="eyebrow">Next Step</span>
            <h2>Review Nikah Services or Book Directly</h2>
          </div>
        </div>

        <div className="content-actions">
          <Link className="button button--primary" href="/nikah-weddings">
            Open the Nikah wedding page
          </Link>
          <Link className="button button--ghost" href="/contact">
            Book a Nikah Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}
