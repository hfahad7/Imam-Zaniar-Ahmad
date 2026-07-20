import { buildMetadata } from '../../lib/metadata';
import { siteContent } from '../../lib/site-content';

export const metadata = buildMetadata({
  title: 'Projects and Community Initiatives',
  description:
    'Explore Meezan, Zakah.com, and AutoAjr, and see how Imam Zaniar Ahmad is accurately described as a co-founder of each project.',
  path: '/projects',
});

export default function ProjectsPage() {
  return (
    <div className="page-shell">
      <section className="page-hero">
        <span className="eyebrow">Projects</span>
        <h1>Community initiatives connected to the same public identity</h1>
        <p className="section-lead">
          The site presents Imam Zaniar Ahmad’s project roles consistently: he is
          a co-founder of Meezan, Zakah.com, and AutoAjr.
        </p>
      </section>

      <section className="section">
        <div className="project-grid">
          {siteContent.projects.map((project) => (
            <article key={project.name} className="project-card">
              <p className="card-meta">{project.role}</p>
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <p className="review-note">
                {project.name} is linked here as a descriptive destination, not
                as a standalone advertisement.
              </p>
              <a
                className="button button--primary"
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

      <section className="section section--muted">
        <div className="section-heading">
          <div>
            <span className="eyebrow">Why these projects matter</span>
            <h2>They reinforce the public story</h2>
          </div>
        </div>

        <div className="card-grid">
          <article className="card card--soft">
            <h3>Meezan</h3>
            <p>
              Helps people find and book qualified Imams and Islamic service
              providers for Nikah officiation, khutbahs, lectures, fundraising
              events, and related community services.
            </p>
          </article>
          <article className="card card--soft">
            <h3>Zakah.com</h3>
            <p>
              Supports Muslims with scholar-reviewed Zakah calculation and
              educational guidance across common wealth categories.
            </p>
          </article>
          <article className="card card--soft">
            <h3>AutoAjr</h3>
            <p>
              Helps Muslim charities and nonprofits with automated giving,
              recurring donations, and digital fundraising campaigns.
            </p>
          </article>
          <article className="card card--soft">
            <h3>What stays accurate</h3>
            <p>
              The site avoids inflated titles and uses co-founder wording
              consistently across the pages and structured data.
            </p>
          </article>
        </div>
      </section>
    </div>
  );
}
