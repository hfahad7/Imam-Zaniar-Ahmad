import Link from 'next/link';

import ProjectShowcase from '../components/project-showcase';
import Icon from '../components/ui-icon';
import { buildMetadata } from '../../lib/metadata';

export const metadata = buildMetadata({
  title: 'Projects and Community Initiatives',
  description:
    'Explore Meezan, Zakah.com, and AutoAjr, community initiatives co-founded by Imam Zaniar Ahmad for Islamic services, Zakah, and charitable giving.',
  path: '/projects',
});

export default function ProjectsPage() {
  return (
    <div className="page-shell">
      <section className="page-hero">
        <span className="eyebrow">Projects</span>
        <h1>Ideas Built to Serve the Muslim Community</h1>
        <p className="section-lead">
          Imam Zaniar Ahmad is a co-founder of Meezan, Zakah.com, and AutoAjr,
          three initiatives shaped around access, education, and generosity.
        </p>
      </section>

      <section className="section section--compact">
        <ProjectShowcase />
      </section>

      <section className="section section--compact project-purpose">
        <div className="section-heading">
          <div>
            <span className="eyebrow">A Shared Purpose</span>
            <h2>Practical Ideas Built Around Service</h2>
          </div>
          <p className="section-lead">
            Each initiative addresses a different part of community life while
            making useful support easier to understand and access.
          </p>
        </div>

        <div className="purpose-lines">
          <p><span><Icon name="community" />Access</span> Connecting people with trusted religious services.</p>
          <p><span><Icon name="book" />Clarity</span> Making important Islamic knowledge easier to use.</p>
          <p><span><Icon name="heart" />Generosity</span> Helping charitable giving happen with intention.</p>
        </div>
      </section>

      <section className="closing-cta closing-cta--compact">
        <span className="closing-cta__seal" aria-hidden="true"><Icon name="message" /></span>
        <span className="eyebrow">Connect with Imam Zaniar</span>
        <h2>Have a Service or Community Question?</h2>
        <p>
          Use the Contact page to book a Nikah, request a lecture or
          fundraising engagement, or ask a general question.
        </p>
        <div className="content-actions content-actions--center">
          <Link className="button button--primary" href="/contact">
            Contact Imam Zaniar
          </Link>
        </div>
      </section>
    </div>
  );
}
