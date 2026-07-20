import Image from 'next/image';
import Link from 'next/link';

import { buildMetadata } from '../lib/metadata';
import { siteContent } from '../lib/site-content';

export const metadata = buildMetadata({
  title: 'Imam Zaniar Ahmad | Nikkah, Nikah, and Islamic Speaking Services in Ontario',
  description:
    'Discover Imam Zaniar Ahmad for Nikkah and Nikah ceremonies in Ontario, lectures and speaking engagements, trusted community projects, and clear ways to request availability.',
  path: '/',
});

export default function Home() {
  return (
    <div className="page-shell">
      <section className="hero">
        <div>
          <span className="eyebrow">Ontario marriage officiant and speaker</span>
          <h1>Imam Zaniar Ahmad</h1>
          <p className="section-lead">
            {siteContent.tagline} The website is built to help couples, families,
            mosques, and organizations find the right service quickly and contact
            him by call, text, Instagram, or the protected inquiry form.
          </p>

          <div className="hero-actions">
            <Link className="button button--primary" href="/contact">
              Request availability
            </Link>
            <Link className="button button--ghost" href="/lectures-speaking">
              Invite Imam Zaniar to speak
            </Link>
            <a className="button button--ghost" href={siteContent.contact.phoneHref}>
              Call or text {siteContent.contact.phoneDisplay}
            </a>
          </div>
        </div>

        <aside className="hero-panel">
          <Image
            src={siteContent.heroImage}
            alt="Imam Zaniar Ahmad smiling and wearing a black thobe"
            width={1080}
            height={1080}
            priority
            className="hero-photo"
          />
          <div className="hero-kicker">
            <p className="small-copy">
              Registered marriage officiant in Ontario. Co-founder of Meezan,
              Zakah.com, and AutoAjr.
            </p>
          </div>
        </aside>
      </section>

      <section className="section section--muted">
        <div className="section-heading">
          <div>
            <span className="eyebrow">Two clear public services</span>
            <h2>Built around the two ways people most often need him</h2>
          </div>
          <p className="section-lead">
            The site keeps the public structure focused on Nikkah and wedding
            services, and lectures and speaking engagements. No separate
            consultation service is presented as a main category.
          </p>
        </div>

        <div className="service-grid">
          {siteContent.services.map((service) => (
            <article key={service.slug} className="service-card">
              <p className="card-meta">Primary service</p>
              <h3>{service.name}</h3>
              <p>{service.summary}</p>
              <div className="content-actions">
                <Link className="button button--primary" href={`/${service.slug}`}>
                  Learn more
                </Link>
                <Link className="button button--ghost" href="/contact">
                  {service.cta}
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <div>
            <span className="eyebrow">Service area</span>
            <h2>Confirmed Ontario locations</h2>
          </div>
          <p className="section-lead">
            These are the confirmed Ontario service areas currently shown on the
            website.
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
            <h2>Trusted by the community</h2>
          </div>
          <p className="section-lead">
            {siteContent.reviews.reportedCount} Google reviews are currently
            reported by the owner. The verified Google Business Profile link can
            be connected once the Place ID and full review URL are confirmed.
          </p>
        </div>

        <div className="review-grid">
          <article className="review-card review-panel">
            <p className="review-rating">
              Owner-reported count: {siteContent.reviews.reportedCount} reviews
            </p>
            <p>{siteContent.reviews.note}</p>
            <p className="review-note">
              Live review text is intentionally not fabricated or scraped. Add the
              verified Google Business Profile details in the content checklist
              before publishing any review feed.
            </p>
            <div className="review-actions">
              <Link className="button button--primary" href="/contact">
                Ask about availability
              </Link>
              <Link className="button button--ghost" href="/nikah-weddings">
                View Nikah service details
              </Link>
            </div>
          </article>

          <article className="review-card">
            <p className="card-meta">Trust signals</p>
            <h3>Clear contact paths</h3>
            <ul className="service-list">
              <li>Call or text Imam Zaniar Ahmad at {siteContent.contact.phoneDisplay}.</li>
              <li>Message him on Instagram at @zanahmad.</li>
              <li>Use the protected inquiry form for structured requests.</li>
            </ul>
          </article>
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <div>
            <span className="eyebrow">Community initiatives</span>
            <h2>Projects connected to his public work</h2>
          </div>
          <Link className="section-link" href="/projects">
            View all projects
          </Link>
        </div>

        <div className="project-grid">
          {siteContent.projects.map((project) => (
            <article key={project.name} className="project-card">
              <p className="card-meta">{project.role}</p>
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <div className="content-actions">
                <a
                  className="button button--primary"
                  href={project.href}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  {project.linkText}
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section section--muted">
        <div className="section-heading">
          <div>
            <span className="eyebrow">Nikah guide</span>
            <h2>Crawlable Ontario wedding preparation resource</h2>
          </div>
          <p className="section-lead">
            The guide page explains the difference between a religious Nikkah and
            the Ontario legal marriage process, with a clear HTML layout and a
            downloadable PDF.
          </p>
        </div>

        <div className="guide-grid">
          <article className="guide-card">
            <h3>{siteContent.guide.title}</h3>
            <p>Last updated {siteContent.guide.lastUpdated}.</p>
            <div className="content-actions">
              <Link className="button button--primary" href="/nikah-guide">
                Open the guide
              </Link>
              <a className="button button--ghost" href={siteContent.guide.downloadPath}>
                Download the PDF
              </a>
            </div>
          </article>

          <article className="guide-card">
            <h3>Booking flow</h3>
            <ol className="guide-list">
              <li>Send the request.</li>
              <li>Confirm the details and availability.</li>
              <li>Finalize the engagement.</li>
            </ol>
          </article>
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <div>
            <span className="eyebrow">About and contact</span>
            <h2>Learn more or get in touch</h2>
          </div>
          <p className="section-lead">
            The website makes it easy to call, text, message on Instagram, or
            submit a secure inquiry from a dedicated contact page.
          </p>
        </div>

        <div className="card-grid">
          <article className="card card--soft">
            <h3>About Imam Zaniar Ahmad</h3>
            <p>
              See the biography page for a clearer overview of his confirmed
              public work, project roles, and community-facing identity.
            </p>
            <Link className="button button--ghost" href="/about">
              Read the biography
            </Link>
          </article>

          <article className="card card--soft">
            <h3>Need a booking?</h3>
            <p>
              Use the contact page for Nikkah, Nikah, lectures, khutbahs, talks,
              workshops, and speaking engagements.
            </p>
            <Link className="button button--primary" href="/contact">
              Open the contact page
            </Link>
          </article>
        </div>
      </section>
    </div>
  );
}
