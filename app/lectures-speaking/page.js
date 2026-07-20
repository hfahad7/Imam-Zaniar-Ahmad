import Link from 'next/link';

import { buildBreadcrumbJsonLd, buildMetadata } from '../../lib/metadata';
import { siteContent } from '../../lib/site-content';

const breadcrumbJsonLd = buildBreadcrumbJsonLd([
  { name: 'Home', item: siteContent.siteUrl },
  { name: 'Lectures & Speaking', item: `${siteContent.siteUrl}/lectures-speaking` },
]);

export const metadata = buildMetadata({
  title: 'Lectures, Khutbahs, Talks, and Speaking Engagements',
  description:
    'Book Imam Zaniar Ahmad for lectures, khutbahs, talks, workshops, and speaking engagements for mosques, schools, universities, and community organizations.',
  path: '/lectures-speaking',
});

export default function LecturesSpeakingPage() {
  return (
    <div className="page-shell">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <section className="page-hero">
        <span className="eyebrow">Lectures and speaking</span>
        <h1>Talks for mosques, schools, charities, and community events</h1>
        <p className="section-lead">
          Imam Zaniar Ahmad can be invited for khutbahs, lectures, workshops,
          panels, youth sessions, and speaking engagements for Muslim and
          inter-community audiences.
        </p>
        <div className="content-actions">
          <Link className="button button--primary" href="/contact">
            Invite Imam Zaniar to speak
          </Link>
          <Link className="button button--ghost" href="/projects">
            See community initiatives
          </Link>
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <div>
            <span className="eyebrow">Who this serves</span>
            <h2>Audiences that commonly book a speaker</h2>
          </div>
          <p className="section-lead">
            The website highlights the people and organizations that most often
            need a speaker for a formal event or community gathering.
          </p>
        </div>

        <div className="pill-list">
          {siteContent.speakingAudiences.map((audience) => (
            <span key={audience} className="pill">
              {audience}
            </span>
          ))}
        </div>
      </section>

      <section className="section section--muted">
        <div className="section-heading">
          <div>
            <span className="eyebrow">Topics</span>
            <h2>Confirmed speaking themes</h2>
          </div>
        </div>

        <div className="card-grid">
          {siteContent.speakingTopics.map((topic) => (
            <article key={topic} className="card card--soft">
              <p>{topic}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <div>
            <span className="eyebrow">Booking process</span>
            <h2>Three simple steps</h2>
          </div>
        </div>

        <div className="card-grid">
          <article className="card">
            <h3>1. Send the request</h3>
            <p>
              Include the event date, audience, location, topic, and whether the
              event is in-person, virtual, or hybrid.
            </p>
          </article>
          <article className="card">
            <h3>2. Confirm details and availability</h3>
            <p>
              The booking is reviewed to confirm the fit, timing, and any travel
              or technology requirements.
            </p>
          </article>
          <article className="card">
            <h3>3. Finalize the engagement</h3>
            <p>
              Once the details are agreed, the event can be finalized and
              prepared with the organizer.
            </p>
          </article>
          <article className="card">
            <h3>Formats</h3>
            <p>
              The site supports in-person, virtual, and hybrid speaking requests
              without creating a separate consultation service.
            </p>
          </article>
        </div>
      </section>

      <section className="section section--accent">
        <div className="section-heading">
          <div>
            <span className="eyebrow">Contact</span>
            <h2>Best next step for organizers</h2>
          </div>
          <p className="section-lead">
            Use the contact page to provide the audience, topic, venue, and
            preferred format so the request can be reviewed efficiently.
          </p>
        </div>

        <div className="content-actions">
          <Link className="button button--primary" href="/contact">
            Start a speaking request
          </Link>
          <a className="button button--ghost" href={siteContent.contact.phoneHref}>
            Call or text {siteContent.contact.phoneDisplay}
          </a>
        </div>
      </section>
    </div>
  );
}
