import Image from 'next/image';
import Link from 'next/link';

import Icon from '../components/ui-icon';
import { buildMetadata } from '../../lib/metadata';
import { siteContent } from '../../lib/site-content';

export const metadata = buildMetadata({
  title: 'Blog and Resources',
  description:
    'Read practical articles about Nikah preparation, speaking invitations, and community service.',
  path: '/blog',
});

export default function BlogIndexPage() {
  return (
    <div className="page-shell">
      <section className="page-hero page-hero--with-media blog-hero">
        <div className="page-hero__copy">
          <span className="eyebrow">Blog</span>
          <h1>Practical Guidance for Couples and Communities</h1>
          <p className="section-lead">
            Clear, useful articles about preparing for a Nikah, inviting a speaker,
            and serving Muslim communities with intention.
          </p>
        </div>
        <figure className="page-hero__media page-hero__media--landscape">
          <Image
            src={siteContent.photos.signingNikah}
            alt="Imam Zaniar Ahmad writing notes while preparing for a ceremony"
            width={1365}
            height={2048}
            priority
            sizes="(max-width: 820px) 92vw, 38vw"
          />
          <figcaption>Notes on faith, family, preparation, and service.</figcaption>
        </figure>
      </section>

      <section className="section section--compact">
        <div className="card-grid">
          {siteContent.blogPosts.map((post, index) => (
            <article key={post.slug} className="blog-card">
              <Image
                src={[siteContent.photos.withGroom, siteContent.photos.communityEvent][index]}
                alt={index === 0 ? 'Imam Zaniar Ahmad with a groom at a Nikah' : 'Imam Zaniar Ahmad at a community event'}
                width={index === 0 ? 1206 : 1448}
                height={index === 0 ? 1494 : 1086}
                sizes="(max-width: 820px) 92vw, 44vw"
              />
              <div className="blog-card__copy">
                <p className="card-meta"><Icon name="calendar" />{post.date}</p>
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>
                <Link className="text-link" href={`/blog/${post.slug}`}>
                  Read Article <span aria-hidden="true">&rarr;</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section section--muted section--compact">
        <div className="section-heading">
          <div>
            <span className="eyebrow">Featured Resource</span>
            <h2>View the Free Nikkah Guide</h2>
          </div>
        </div>

        <div className="content-actions">
          <Link className="button button--primary" href={siteContent.guide.onlinePath}>
            View Nikah Guide
          </Link>
          <Link className="button button--ghost" href="/nikah-guide">
            Explore Guide Details
          </Link>
        </div>
      </section>
    </div>
  );
}
