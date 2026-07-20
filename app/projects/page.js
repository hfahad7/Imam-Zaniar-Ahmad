import { buildMetadata } from '../../lib/metadata';
import { siteContent } from '../../lib/site-content';

export const metadata = buildMetadata({
  title: 'Projects and Community Initiatives',
  description:
    'Explore Meezan, Zakah.com, and AutoAjr, three community initiatives co-founded by Imam Zaniar Ahmad.',
  path: '/projects',
});

export default function ProjectsPage() {
  return (
    <div className="page-shell">
      <section className="page-hero">
        <span className="eyebrow">Projects</span>
        <h1>Ideas built to serve the Muslim community</h1>
        <p className="section-lead">
          Imam Zaniar Ahmad is a co-founder of Meezan, Zakah.com, and AutoAjr,
          three initiatives shaped around access, education, and generosity.
        </p>
      </section>

      <section className="section">
        <div className="project-grid">
          {siteContent.projects.map((project, index) => (
            <article key={project.name} className="project-card">
              <div className="project-card__topline">
                <span>0{index + 1}</span>
                <p>{project.role}</p>
              </div>
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <a
                href={project.href}
                target="_blank"
                rel="noreferrer noopener"
              >
                Visit {project.name} <span aria-hidden="true">&nearr;</span>
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="section section--muted">
        <div className="section-heading">
          <div>
            <span className="eyebrow">Why these projects matter</span>
            <h2>Practical ideas, built with purpose</h2>
          </div>
          <p className="section-lead">
            Each initiative responds to a real community need while making
            trusted services easier to understand and access.
          </p>
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
            <h3>Shared purpose</h3>
            <p>
              Together, the projects support religious services, financial
              education, and charitable giving across Muslim communities.
            </p>
          </article>
        </div>
      </section>
    </div>
  );
}
