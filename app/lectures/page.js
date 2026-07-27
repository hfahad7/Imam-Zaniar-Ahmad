import Image from 'next/image';
import Link from 'next/link';

import Icon from '../components/ui-icon';
import { buildBreadcrumbJsonLd, buildMetadata } from '../../lib/metadata';
import { siteContent } from '../../lib/site-content';

const breadcrumbJsonLd = buildBreadcrumbJsonLd([
  { name: 'Home', item: siteContent.siteUrl },
  { name: 'Lectures', item: `${siteContent.siteUrl}/lectures` },
]);

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': `${siteContent.siteUrl}/lectures#lecture-service`,
      name: 'Islamic lectures, khutbahs, workshops, and community talks',
      serviceType: 'Islamic lectures and community speaking',
      url: `${siteContent.siteUrl}/lectures`,
      provider: { '@id': `${siteContent.siteUrl}/#person` },
      areaServed: 'Ontario, Canada',
      audience: 'Mosques, schools, universities, charities, and Muslim communities',
    },
    {
      '@type': 'Service',
      '@id': `${siteContent.siteUrl}/lectures#fundraising-service`,
      name: 'Islamic fundraising support for mosques and charities',
      serviceType: 'Mosque, charity, and community fundraising appeals',
      url: `${siteContent.siteUrl}/lectures#fundraising`,
      provider: { '@id': `${siteContent.siteUrl}/#person` },
      areaServed: 'Ontario, Canada',
      audience: 'Mosques, Islamic schools, charities, and nonprofit organizations',
    },
  ],
};

const fundraisingServices = [
  {
    icon: 'mosque',
    title: 'Mosque Fundraising',
    description:
      'Fundraising support for mosque expansion, renovations, programming, operations, and community projects.',
  },
  {
    icon: 'heart',
    title: 'Charity Appeals',
    description:
      'Clear, values-led appeals for Islamic charities, humanitarian campaigns, and nonprofit initiatives.',
  },
  {
    icon: 'school',
    title: 'Schools and Youth Programs',
    description:
      'Community fundraising for Islamic schools, student programs, education, and youth development.',
  },
  {
    icon: 'gift',
    title: 'Ramadan and Special Campaigns',
    description:
      'Fundraising talks and donor appeals for Ramadan, community dinners, galas, and focused campaigns.',
  },
];

export const metadata = buildMetadata({
  title: 'Islamic Lectures and Fundraising for Mosques and Charities',
  description:
    'Invite Imam Zaniar Ahmad for Islamic lectures, khutbahs, workshops, mosque fundraising, charity appeals, and Muslim community events in Ontario.',
  path: '/lectures',
});

export default function LecturesPage() {
  return (
    <div className="page-shell lectures-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />

      <section className="page-hero page-hero--with-media lectures-page__hero">
        <div className="page-hero__copy">
          <span className="eyebrow">Lectures and Fundraising</span>
          <h1>Islamic Lectures and Fundraising for Communities</h1>
          <p className="section-lead">
            Invite Imam Zaniar Ahmad for a khutbah, lecture, workshop, community
            talk, or fundraising appeal for a mosque, school, charity, or Muslim
            organization.
          </p>
          <div className="content-actions">
            <a className="button button--primary" href={siteContent.contact.phoneHref}>
              Call for Availability
            </a>
            <a className="button button--ghost" href={siteContent.contact.smsHref}>
              Send an SMS Text
            </a>
          </div>
          <p className="phone-channel-note">
            <Icon name="phone" />
            {siteContent.contact.phoneOnlyNote}
          </p>
        </div>
        <figure className="page-hero__media page-hero__media--landscape">
          <Image
            src={siteContent.photos.communityEvent}
            alt="Imam Zaniar Ahmad at a Muslim community gathering in Ontario"
            width={1448}
            height={1086}
            priority
            sizes="(max-width: 820px) 92vw, 42vw"
          />
          <figcaption>Available for in-person, virtual, and hybrid events.</figcaption>
        </figure>
      </section>

      <nav
        className="service-choice-switcher"
        aria-label="Choose lectures or fundraising services"
      >
        <a href="#lectures">
          <span className="service-choice-switcher__icon"><Icon name="microphone" /></span>
          <span>
            <small>Teach and Inspire</small>
            <strong>Lectures and Khutbahs</strong>
            <em>Talks, workshops, panels, and youth sessions</em>
          </span>
          <Icon name="arrow" />
        </a>
        <a href="#fundraising">
          <span className="service-choice-switcher__icon"><Icon name="gift" /></span>
          <span>
            <small>Support the Mission</small>
            <strong>Fundraising Services</strong>
            <em>Mosque, charity, school, and community appeals</em>
          </span>
          <Icon name="arrow" />
        </a>
      </nav>

      <section className="section section--compact booking-process booking-process--first">
        <div className="section-heading">
          <div>
            <span className="eyebrow">Booking Process</span>
            <h2>Three Simple Steps</h2>
          </div>
          <p className="section-lead">
            Lecture and fundraising requests are arranged directly by phone or
            SMS text.
          </p>
        </div>

        <div className="booking-step-grid">
          <article className="card visual-card">
            <span className="card-icon"><Icon name="phone" /></span>
            <h3>1. Call or Send an SMS</h3>
            <p>
              Share the event date, organization, city, and whether you need a
              lecture, khutbah, workshop, or fundraising appeal.
            </p>
          </article>
          <article className="card visual-card">
            <span className="card-icon"><Icon name="calendar" /></span>
            <h3>2. Confirm the Event Details</h3>
            <p>
              Review the audience, topic, format, timing, fundraising goal, and
              any travel or technology requirements.
            </p>
          </article>
          <article className="card visual-card">
            <span className="card-icon"><Icon name="check" /></span>
            <h3>3. Finalize the Engagement</h3>
            <p>
              Once availability and expectations are clear, the engagement can
              be confirmed and prepared with the organizer.
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

      <section className="section section--compact" id="lectures">
        <div className="section-heading">
          <div>
            <span className="eyebrow">Lectures and Khutbahs</span>
            <h2>Thoughtful Talks for Communities of Every Size</h2>
          </div>
          <p className="section-lead">
            Topics and formats can be tailored for students, families,
            professionals, congregations, and community organizations.
          </p>
        </div>

        <div className="pill-list">
          {siteContent.speakingAudiences.map((audience) => (
            <span key={audience} className="pill">
              <Icon name="community" />{audience}
            </span>
          ))}
        </div>

        <div className="lecture-topic-grid">
          {siteContent.speakingTopics.map((topic, index) => (
            <article key={topic} className="card card--soft visual-card">
              <span className="card-icon">
                <Icon name={['heart', 'ring', 'school', 'community', 'microphone', 'book'][index]} />
              </span>
              <p>{topic}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="fundraising-section" id="fundraising">
        <div className="fundraising-section__intro">
          <span className="eyebrow eyebrow--light">Fundraising Services</span>
          <h2>Help Your Community Give with Purpose</h2>
          <p>
            Imam Zaniar is available to support Islamic fundraising campaigns
            with a clear appeal grounded in faith, responsibility, and the
            purpose behind the project.
          </p>
          <div className="fundraising-section__formats">
            <span><Icon name="check" />Live fundraising appeals</span>
            <span><Icon name="check" />Campaign talks and donor engagement</span>
            <span><Icon name="check" />In-person, virtual, and hybrid events</span>
          </div>
        </div>

        <div className="fundraising-service-grid">
          {fundraisingServices.map((service) => (
            <article key={service.title}>
              <span className="card-icon"><Icon name={service.icon} /></span>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="speaking-cta">
        <div className="speaking-cta__copy">
          <span className="eyebrow eyebrow--light">Direct Booking</span>
          <h2>Book a Lecture or Fundraising Engagement</h2>
          <p>
            Call or send an SMS with the date, location, audience, event type,
            and the goal of your program or campaign.
          </p>
          <div className="content-actions">
            <a className="button button--cream" href={siteContent.contact.phoneHref}>
              Call {siteContent.contact.phoneDisplay}
            </a>
            <a className="button button--outline-light" href={siteContent.contact.smsHref}>
              Send an SMS Text
            </a>
          </div>
          <p className="phone-channel-note phone-channel-note--light">
            <Icon name="phone" />
            {siteContent.contact.phoneOnlyNote}
          </p>
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

      <section className="closing-cta closing-cta--compact">
        <span className="closing-cta__seal" aria-hidden="true"><Icon name="community" /></span>
        <span className="eyebrow">Community Initiatives</span>
        <h2>Explore More of Imam Zaniar&apos;s Work</h2>
        <p>
          Learn about projects supporting Islamic services, Zakah education,
          and charitable giving.
        </p>
        <Link className="button button--primary" href="/projects">
          View Community Projects
        </Link>
      </section>
    </div>
  );
}
