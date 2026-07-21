import Link from 'next/link';

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
      <section className="page-hero">
        <span className="eyebrow">Blog</span>
        <h1>Practical Guidance for Couples and Communities</h1>
        <p className="section-lead">
          Clear, useful articles about preparing for a Nikah, inviting a speaker,
          and serving Muslim communities with intention.
        </p>
      </section>

      <section className="section section--compact">
        <div className="card-grid">
          {siteContent.blogPosts.map((post) => (
            <article key={post.slug} className="card card--soft">
              <p className="card-meta">{post.date}</p>
              <h3>{post.title}</h3>
              <p>{post.excerpt}</p>
              <div className="content-actions">
                <Link className="button button--primary" href={`/blog/${post.slug}`}>
                  Read article
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
            <h2>Download the Free Nikkah Guide</h2>
          </div>
        </div>

        <div className="content-actions">
          <Link className="button button--primary" href="/nikah-guide">
            Read the Free Guide
          </Link>
          <a className="button button--ghost" href={siteContent.guide.downloadPath}>
            Download the Free PDF
          </a>
        </div>
      </section>
    </div>
  );
}
