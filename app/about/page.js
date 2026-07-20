import Link from 'next/link';

import { buildMetadata } from '../../lib/metadata';
import { siteContent } from '../../lib/site-content';

export const metadata = buildMetadata({
  title: 'About Imam Zaniar Ahmad',
  description:
    'Learn about Imam Zaniar Ahmad, his verified public roles, his community projects, and the kinds of people and organizations he serves.',
  path: '/about',
});

export default function AboutPage() {
  return (
    <div className="page-shell">
      <section className="page-hero">
        <span className="eyebrow">About</span>
        <h1>Biography, community work, and public identity</h1>
        <p className="section-lead">
          The public biography focuses on the information that is already
          confirmed for the website: Imam Zaniar Ahmad is a registered marriage
          officiant in Ontario, a community speaker, and a co-founder of Meezan,
          Zakah.com, and AutoAjr.
        </p>
      </section>

      <section className="section">
        <div className="section-heading">
          <div>
            <span className="eyebrow">Verified public identity</span>
            <h2>What the site states clearly</h2>
          </div>
          <p className="section-lead">
            The page avoids unsupported claims and keeps the public identity
            centered on the roles that have been confirmed.
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
              The site lists the confirmed Ontario service areas and explains
              that travel outside Ontario is available by request for Nikkah and
              Nikah ceremonies only.
            </p>
          </article>
        </div>
      </section>

      <section className="section section--muted">
        <div className="section-heading">
          <div>
            <span className="eyebrow">Biography notes</span>
            <h2>What can expand later</h2>
          </div>
          <p className="section-lead">
            Additional biography material can be added once verified copy and
            approved images are supplied.
          </p>
        </div>

        <div className="card-grid">
          <article className="card card--soft">
            <h3>Education and background</h3>
            <ul className="service-list">
              {siteContent.biographyNotes.map((note) => (
                <li key={note}>{note}</li>
              ))}
            </ul>
          </article>

          <article className="card card--soft">
            <h3>What visitors can do next</h3>
            <ul className="service-list">
              <li>Read the Nikkah and Nikah service page.</li>
              <li>Review the speaking page for event bookings.</li>
              <li>Open the Projects page to see his community work.</li>
              <li>Use the contact page to request availability.</li>
            </ul>
          </article>
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <div>
            <span className="eyebrow">Projects and initiatives</span>
            <h2>Community-facing work</h2>
          </div>
          <Link className="section-link" href="/projects">
            View the Projects page
          </Link>
        </div>

        <div className="project-grid">
          {siteContent.projects.map((project) => (
            <article key={project.name} className="project-card">
              <p className="card-meta">{project.role}</p>
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <a
                className="button button--ghost"
                href={project.href}
                target="_blank"
                rel="noreferrer noopener"
              >
                {project.linkText}
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="section section--accent">
        <div className="section-heading">
          <div>
            <span className="eyebrow">Contact</span>
            <h2>Reach out respectfully</h2>
          </div>
          <p className="section-lead">
            The contact page keeps call and text at the top, then Instagram, then
            the protected website form.
          </p>
        </div>

        <div className="content-actions">
          <Link className="button button--primary" href="/contact">
            Request availability
          </Link>
          <a className="button button--ghost" href={siteContent.contact.phoneHref}>
            Call or text {siteContent.contact.phoneDisplay}
          </a>
        </div>
      </section>
    </div>
  );
}
