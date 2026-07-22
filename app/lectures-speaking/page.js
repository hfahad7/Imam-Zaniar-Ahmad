import Image from 'next/image';
import Link from 'next/link';

import Icon from '../components/ui-icon';
import { buildBreadcrumbJsonLd, buildMetadata } from '../../lib/metadata';
import { siteContent } from '../../lib/site-content';

const breadcrumbJsonLd = buildBreadcrumbJsonLd([
  { name: 'Home', item: siteContent.siteUrl },
  { name: 'Lectures & Speaking', item: `${siteContent.siteUrl}/lectures-speaking` },
]);

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Lectures, khutbahs, talks, and speaking engagements',
  serviceType: 'Islamic lectures and community speaking',
  url: `${siteContent.siteUrl}/lectures-speaking`,
  provider: { '@id': `${siteContent.siteUrl}/#person` },
  areaServed: 'Ontario, Canada',
};

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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />

      <section className="page-hero page-hero--with-media">
        <div className="page-hero__copy">
          <span className="eyebrow">Lectures and Speaking</span>
          <h1>Thoughtful Talks for Communities of Every Size</h1>
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
        </div>
        <figure className="page-hero__media page-hero__media--landscape">
          <Image
            src={siteContent.photos.communityEvent}
            alt="Imam Zaniar Ahmad at a community gathering in Ontario"
            width={1448}
            height={1086}
            priority
            sizes="(max-width: 820px) 92vw, 42vw"
          />
          <figcaption>Available for in-person, virtual, and hybrid events.</figcaption>
        </figure>
      </section>

      <section className="section section--compact booking-process booking-process--first">
        <div className="section-heading">
          <div>
            <span className="eyebrow">Booking Process</span>
            <h2>Three Simple Steps</h2>
          </div>
          <p className="section-lead">
            A clear path from the first request to a prepared, confirmed event.
          </p>
        </div>

        <div className="booking-step-grid">
          <article className="card visual-card">
            <span className="card-icon"><Icon name="message" /></span>
            <h3>1. Send the Request</h3>
            <p>
              Include the event date, audience, location, topic, and whether the
              event is in-person, virtual, or hybrid.
            </p>
          </article>
          <article className="card visual-card">
            <span className="card-icon"><Icon name="calendar" /></span>
            <h3>2. Confirm Details and Availability</h3>
            <p>
              The booking is reviewed to confirm the fit, timing, and any travel
              or technology requirements.
            </p>
          </article>
          <article className="card visual-card">
            <span className="card-icon"><Icon name="check" /></span>
            <h3>3. Finalize the Engagement</h3>
            <p>
              Once the details are agreed, the event can be finalized and
              prepared with the organizer.
            </p>
          </article>
        </div>

        <div className="booking-format-strip">
          <span className="card-icon"><Icon name="video" /></span>
          <div>
            <strong>Flexible Event Formats</strong>
            <p>In-person, virtual, and hybrid requests are welcome.</p>
          </div>
        </div>
      </section>

      <section className="section section--compact">
        <div className="section-heading">
          <div>
            <span className="eyebrow">Who This Serves</span>
            <h2>Audiences Who Book Imam Zaniar</h2>
          </div>
          <p className="section-lead">
            Speaking engagements can be tailored for students, families,
            professionals, and community organizations.
          </p>
        </div>

        <div className="pill-list">
          {siteContent.speakingAudiences.map((audience) => (
            <span key={audience} className="pill">
              <Icon name="community" />{audience}
            </span>
          ))}
        </div>
      </section>

      <section className="section section--muted section--compact">
        <div className="section-heading">
          <div>
            <span className="eyebrow">Topics</span>
            <h2>Speaking Themes</h2>
          </div>
        </div>

        <div className="card-grid card-grid--three">
          {siteContent.speakingTopics.map((topic, index) => (
            <article key={topic} className="card card--soft visual-card">
              <span className="card-icon"><Icon name={['heart', 'ring', 'school', 'community', 'microphone', 'book'][index]} /></span>
              <p>{topic}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="speaking-cta">
        <div className="speaking-cta__copy">
          <div className="section-heading">
            <div>
            <span className="eyebrow">Contact</span>
            <h2>Book Imam Zaniar for Your Event</h2>
            </div>
          </div>
          <p>
              Share the audience, topic, venue, and preferred format so the
              request can be reviewed efficiently.
            </p>

          <div className="content-actions">
            <Link className="button button--cream" href="/contact">
              Book a Speaking Engagement
            </Link>
            <a className="button button--outline-light" href={siteContent.contact.phoneHref}>
              Call or Text {siteContent.contact.phoneDisplay}
            </a>
          </div>
        </div>
        <figure className="speaking-cta__media">
          <Image
            src={siteContent.photos.portrait}
            alt="Imam Zaniar Ahmad speaking to a community audience"
            width={1206}
            height={1502}
            sizes="(max-width: 820px) 92vw, 34vw"
          />
        </figure>
      </section>
    </div>
  );
}
