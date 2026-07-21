import Image from 'next/image';
import Link from 'next/link';

import ProjectShowcase from './components/project-showcase';
import { buildMetadata } from '../lib/metadata';
import { siteContent } from '../lib/site-content';

export const metadata = buildMetadata({
  title: 'Nikkah, Nikah, and Islamic Speaking Services in Ontario',
  description:
    'Discover Imam Zaniar Ahmad for Nikkah and Nikah ceremonies in Ontario, lectures and speaking engagements, trusted community projects, and clear ways to request availability.',
  path: '/',
});

export default function Home() {
  throw new Error('Test error');

  return (
    <div className="page-shell home-page">
      <section className="hero hero--home">
        <div className="hero__copy">
          <span className="eyebrow eyebrow--light">Imam Zaniar Ahmad</span>
          <h1>A meaningful beginning, held with care.</h1>
          <p className="hero__lead">
            Nikah ceremonies and thoughtful speaking engagements for Muslim
            couples, families, and communities across Ontario.
          </p>

          <div className="hero-actions">
            <Link className="button button--cream" href="/contact">
              Request availability
            </Link>
            <Link className="button button--outline-light" href="/nikah-weddings">
              Plan your Nikah
            </Link>
          </div>

          <a className="hero__phone" href={siteContent.contact.phoneHref}>
            Prefer to speak directly? {siteContent.contact.phoneDisplay}
          </a>
        </div>

        <div className="hero__portrait" aria-label="Portrait of Imam Zaniar Ahmad">
          <div className="hero__arch" aria-hidden="true" />
          <Image
            src={siteContent.heroImage}
            alt="Imam Zaniar Ahmad speaking during a Nikah ceremony"
            width={1066}
            height={1600}
            priority
            sizes="(max-width: 820px) 88vw, 34vw"
            className="hero-photo"
          />
          <div className="hero__caption">
            <span>Ontario</span>
            <strong>Registered marriage officiant</strong>
          </div>
        </div>

        <div className="hero__credentials" aria-label="At a glance">
          <div>
            <span>01</span>
            <p>Religious Nikah ceremonies</p>
          </div>
          <div>
            <span>02</span>
            <p>Ontario legal officiation</p>
          </div>
          <div>
            <span>03</span>
            <p>Lectures and community talks</p>
          </div>
        </div>
      </section>

      <section className="section section--services">
        <div className="section-heading section-heading--editorial">
          <div>
            <span className="eyebrow">How Imam Zaniar can help</span>
            <h2>Two services, one thoughtful approach.</h2>
          </div>
          <p className="section-lead">
            Every engagement begins with listening, clear expectations, and
            respect for the people in the room.
          </p>
        </div>

        <div className="service-editorial">
          {siteContent.services.map((service, index) => (
            <article key={service.slug} className="service-feature">
              <span className="service-feature__number">0{index + 1}</span>
              <div>
                <h3>{service.name}</h3>
                <p>{service.summary}</p>
              </div>
              <Link className="circle-link" href={`/${service.slug}`} aria-label={`Learn more about ${service.name}`}>
                <span aria-hidden="true">&rarr;</span>
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="section section--projects section--projects-featured">
        <div className="section-heading section-heading--editorial">
          <div>
            <span className="eyebrow">Community initiatives</span>
            <h2>Service that continues beyond the room.</h2>
          </div>
          <div className="section-heading__aside">
            <p className="section-lead">
              Three projects co-founded by Imam Zaniar Ahmad connect people with
              Islamic services, Zakah education, and thoughtful giving.
            </p>
            <Link className="section-link" href="/projects">
              Explore the full story <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </div>

        <ProjectShowcase compact />
      </section>

      <section className="proof-band">
        <div className="proof-band__metric">
          <strong>{siteContent.reviews.reportedCount}</strong>
          <span>Google reviews</span>
        </div>
        <div className="proof-band__copy">
          <span className="eyebrow eyebrow--light">Community trust</span>
          <h2>Presence matters on life&apos;s important days.</h2>
          <p>
            Couples and organizers value a calm process, thoughtful guidance,
            and communication that feels personal from the first conversation.
          </p>
        </div>
        <Link className="button button--outline-light" href="/contact">
          Start a conversation
        </Link>
      </section>

      <section className="section section--locations">
        <div className="section-heading section-heading--editorial">
          <div>
            <span className="eyebrow">Across Ontario</span>
            <h2>Serving couples and communities close to home.</h2>
          </div>
          <p className="section-lead">
            Available throughout the Greater Toronto Area, Hamilton, Niagara,
            Waterloo Region, and beyond. Travel ceremonies are welcomed by request.
          </p>
        </div>

        <div className="location-list" aria-label="Ontario service areas">
          {siteContent.serviceAreas.map((area) => (
            <span key={area}>{area}</span>
          ))}
        </div>
      </section>

      <section className="guide-feature">
        <div className="guide-feature__ornament" aria-hidden="true">
          <span>&#10022;</span>
        </div>
        <div className="guide-feature__copy">
          <span className="eyebrow">A calmer way to prepare</span>
          <h2>{siteContent.guide.title}</h2>
          <p>
            Understand the religious ceremony, Ontario marriage requirements,
            and the details worth arranging before your wedding day.
          </p>
          <div className="content-actions">
            <Link className="button button--primary" href="/nikah-guide">
              Read the guide
            </Link>
            <a className="text-link" href={siteContent.guide.downloadPath}>
              Download the PDF <span aria-hidden="true">&darr;</span>
            </a>
          </div>
        </div>
      </section>

      <section className="closing-cta">
        <span className="eyebrow">When you are ready</span>
        <h2>Let&apos;s make the next step feel simple.</h2>
        <p>
          Share your date, location, and the kind of support you need. Imam Zaniar
          will follow up to discuss availability and details.
        </p>
        <div className="content-actions content-actions--center">
          <Link className="button button--primary" href="/contact">
            Request availability
          </Link>
          <a className="button button--quiet" href={siteContent.contact.smsHref}>
            Send a text
          </a>
        </div>
      </section>
    </div>
  );
}
