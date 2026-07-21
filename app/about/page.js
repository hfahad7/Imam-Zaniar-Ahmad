import Image from 'next/image';
import Link from 'next/link';

import Icon from '../components/ui-icon';
import { buildMetadata } from '../../lib/metadata';
import { siteContent } from '../../lib/site-content';

export const metadata = buildMetadata({
  title: 'About Imam Zaniar Ahmad',
  description:
    'Learn about Imam Zaniar Ahmad, his mission, his work as an Ontario marriage officiant and speaker, and the community projects he has helped build.',
  path: '/about',
});

export default function AboutPage() {
  return (
    <div className="page-shell">
      <section className="page-hero page-hero--with-media">
        <div className="page-hero__copy">
          <span className="eyebrow">About</span>
          <h1>About Imam Zaniar Ahmad</h1>
          <p className="section-lead">
            An Ontario marriage officiant, community speaker, and technology
            entrepreneur focused on serving Muslim families with clarity, care,
            and practical support.
          </p>
        </div>
        <figure className="page-hero__media page-hero__media--portrait">
          <Image
            src={siteContent.photos.portrait}
            alt="Imam Zaniar Ahmad speaking at a wedding gathering"
            width={1206}
            height={1502}
            priority
            sizes="(max-width: 820px) 92vw, 36vw"
          />
          <figcaption>Faith expressed through useful, personal service.</figcaption>
        </figure>
      </section>

      <section className="section section--compact about-story">
        <figure className="about-story__media">
          <Image
            src={siteContent.photos.signingNikah}
            alt="Imam Zaniar Ahmad preparing ceremony documents outdoors"
            width={1365}
            height={2048}
            sizes="(max-width: 820px) 92vw, 40vw"
          />
        </figure>
        <div className="about-story__copy">
          <span className="eyebrow">His Mission</span>
          <h2>Making Faith-Centred Service Easier to Access</h2>
          <p>
            Imam Zaniar&apos;s work begins with a simple idea: important religious
            moments should feel clear, dignified, and personal. As a registered
            marriage officiant in Ontario, he helps couples understand what they
            are booking and prepare for their Nikah with confidence.
          </p>
          <p>
            His community work extends beyond weddings. He speaks with students,
            families, mosques, and organizations about faith, family life,
            responsible ambition, financial well-being, and serving the Muslim
            community with intention.
          </p>
          <p>
            His background in software and technology also informs the projects
            he has co-founded: Meezan, Zakah.com, and AutoAjr. Each project turns
            a community need into a practical tool people can use.
          </p>
          <Link className="button button--primary" href="/contact">
            Contact Imam Zaniar
          </Link>
        </div>
      </section>

      <section className="section section--compact">
        <div className="section-heading">
          <div>
            <span className="eyebrow">His Work</span>
            <h2>Serving Families and Communities</h2>
          </div>
          <p className="section-lead">
            Religious leadership, public speaking, and community technology are
            different expressions of the same commitment to useful service.
          </p>
        </div>

        <div className="card-grid card-grid--three">
          <article className="card visual-card">
            <span className="card-icon"><Icon name="ring" /></span>
            <h3>Nikah and Marriage Officiation</h3>
            <p>
              Religious Nikah ceremonies, Ontario legal marriage officiation,
              and clear preparation for couples and families.
            </p>
            <Link className="text-link" href="/nikah-weddings">
              View Nikah Services <span aria-hidden="true">&rarr;</span>
            </Link>
          </article>
          <article className="card visual-card">
            <span className="card-icon"><Icon name="microphone" /></span>
            <h3>Community Speaking</h3>
            <p>
              Lectures, khutbahs, workshops, panels, and youth sessions for
              Muslim and inter-community audiences.
            </p>
            <Link className="text-link" href="/lectures-speaking">
              Book a Speaking Engagement <span aria-hidden="true">&rarr;</span>
            </Link>
          </article>
          <article className="card visual-card">
            <span className="card-icon"><Icon name="sparkle" /></span>
            <h3>Purpose-Led Projects</h3>
            <p>
              Digital tools that improve access to Islamic services, Zakah
              guidance, and charitable giving.
            </p>
            <Link className="text-link" href="/projects">
              Explore His Projects <span aria-hidden="true">&rarr;</span>
            </Link>
          </article>
        </div>
      </section>

      <section className="editorial-photo-ribbon" aria-label="Imam Zaniar Ahmad serving couples and communities">
        <figure>
          <Image
            src={siteContent.photos.withGroom}
            alt="Imam Zaniar Ahmad welcoming a groom at an outdoor Nikah"
            width={1206}
            height={1494}
            sizes="(max-width: 820px) 82vw, 32vw"
          />
          <figcaption><Icon name="heart" /> Present for meaningful milestones</figcaption>
        </figure>
        <figure>
          <Image
            src={siteContent.photos.communityEvent}
            alt="Imam Zaniar Ahmad attending a Muslim community gathering"
            width={1448}
            height={1086}
            sizes="(max-width: 820px) 82vw, 36vw"
          />
          <figcaption><Icon name="community" /> Connected to the community</figcaption>
        </figure>
        <figure>
          <Image
            src={siteContent.photos.weddingOfficiant}
            alt="Imam Zaniar Ahmad holding ceremony documents after a wedding"
            width={1206}
            height={1478}
            sizes="(max-width: 820px) 82vw, 32vw"
          />
          <figcaption><Icon name="document" /> Care in every detail</figcaption>
        </figure>
      </section>

      <section className="section section--muted section--compact">
        <div className="section-heading">
          <div>
            <span className="eyebrow">Guiding Principles</span>
            <h2>What Guides His Work</h2>
          </div>
        </div>

        <div className="principle-grid">
          {siteContent.biographyNotes.map((note, index) => (
            <article className="principle" key={note}>
              <span className="principle__icon"><Icon name={['book', 'heart', 'community'][index]} /></span>
              <p>{note}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="closing-cta closing-cta--compact">
        <span className="eyebrow">Work with Imam Zaniar</span>
        <h2>Book a Nikah or Speaking Engagement</h2>
        <p>
          Share the service, date, location, and details of your ceremony or event.
        </p>
        <div className="content-actions content-actions--center">
          <Link className="button button--primary" href="/contact">
            Contact Imam Zaniar
          </Link>
          <a className="button button--quiet" href={siteContent.contact.phoneHref}>
            Call {siteContent.contact.phoneDisplay}
          </a>
        </div>
      </section>
    </div>
  );
}
