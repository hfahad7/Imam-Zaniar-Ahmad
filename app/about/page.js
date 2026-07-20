import Image from 'next/image';
import Link from 'next/link';

import { buildMetadata } from '../../lib/metadata';
import { siteContent } from '../../lib/site-content';

export const metadata = buildMetadata({
  title: 'About',
  description:
    'Learn about Imam Zaniar Ahmad, his work as an Ontario marriage officiant and speaker, and the community projects he has helped build.',
  path: '/about',
});

export default function AboutPage() {
  return (
    <div className="page-shell">
      <section className="page-hero page-hero--with-media">
        <div className="page-hero__copy">
          <span className="eyebrow">About</span>
          <h1>Faith, service, and community work</h1>
          <p className="section-lead">
            Imam Zaniar Ahmad is a registered marriage officiant in Ontario, a
            community speaker, and a co-founder of Meezan, Zakah.com, and AutoAjr.
            His work brings together thoughtful religious service and practical
            tools for Muslim communities.
          </p>
        </div>
        <figure className="page-hero__media page-hero__media--portrait">
          <Image
            src={siteContent.photos.portrait}
            alt="Imam Zaniar Ahmad speaking at a wedding gathering"
            width={1206}
            height={1502}
            priority
            sizes="(max-width: 820px) 92vw, 38vw"
          />
          <figcaption>Service rooted in clarity, dignity, and care.</figcaption>
        </figure>
      </section>

      <section className="section">
        <div className="section-heading">
          <div>
            <span className="eyebrow">His work</span>
            <h2>Serving people at meaningful moments</h2>
          </div>
          <p className="section-lead">
            From a couple&apos;s wedding day to a room full of students, each
            engagement is approached with care, clarity, and respect.
          </p>
        </div>

        <div className="card-grid">
          <article className="card">
            <h3>Marriage officiation</h3>
            <p>
              Registered marriage officiant in Ontario who helps couples with
              Nikkah and Nikah ceremonies and explains the distinction between a
              religious ceremony and the Ontario legal process.
            </p>
          </article>
          <article className="card">
            <h3>Community speaking</h3>
            <p>
              Available for lectures, khutbahs, talks, workshops, and speaking
              engagements for mosques, schools, universities, charities, and
              community organizations.
            </p>
          </article>
          <article className="card">
            <h3>Projects</h3>
            <p>
              Co-founder of Meezan, Zakah.com, and AutoAjr, each of which is
              described accurately on the Projects page.
            </p>
          </article>
          <article className="card">
            <h3>Service area</h3>
            <p>
              Available across many Ontario communities, with travel outside the
              province considered by request for Nikkah and Nikah ceremonies.
            </p>
          </article>
        </div>
      </section>

      <section className="section section--muted">
        <div className="section-heading">
          <div>
            <span className="eyebrow">A thoughtful approach</span>
            <h2>What guides the work</h2>
          </div>
          <p className="section-lead">
            The work is grounded in service that feels personal, practical, and
            connected to community needs.
          </p>
        </div>

        <div className="card-grid">
          <article className="card card--soft">
            <h3>Principles in practice</h3>
            <ul className="service-list">
              {siteContent.biographyNotes.map((note) => (
                <li key={note}>{note}</li>
              ))}
            </ul>
          </article>

          <article className="card card--soft">
            <h3>Explore the work</h3>
            <ul className="service-list">
              <li>Read the Nikkah and Nikah service page.</li>
              <li>Review the speaking page for event bookings.</li>
              <li>Open the Projects page to see his community work.</li>
              <li>Use the contact page to request availability.</li>
            </ul>
          </article>
        </div>
      </section>

      <section className="section section--accent">
        <div className="section-heading">
          <div>
            <span className="eyebrow">Contact</span>
            <h2>Reach out respectfully</h2>
          </div>
          <p className="section-lead">
            Share the date, location, and type of engagement you have in mind.
            Call, text, Instagram, and the inquiry form are all available.
          </p>
        </div>

        <div className="content-actions">
          <Link className="button button--ghost" href="/projects">
            Explore community projects
          </Link>
          <Link className="button button--primary" href="/contact">
            Request availability
          </Link>
          <a className="button button--ghost" href={siteContent.contact.phoneHref}>
            Call or text {siteContent.contact.phoneDisplay}
          </a>
          <a className="button button--ghost" href={siteContent.contact.emailHref}>
            Email {siteContent.contact.email}
          </a>
        </div>
      </section>
    </div>
  );
}
