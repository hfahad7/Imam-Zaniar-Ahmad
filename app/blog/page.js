import Link from 'next/link';

import { buildMetadata } from '../../lib/metadata';
import { siteContent } from '../../lib/site-content';

export const metadata = buildMetadata({
  title: 'Blog and Resources',
  description:
    'Read approved blog posts and practical resources related to Nikkah preparation, speaking invitations, and community service.',
  path: '/blog',
});

export default function BlogIndexPage() {
  return (
    <div className="page-shell">
      <section className="page-hero">
        <span className="eyebrow">Blog</span>
        <h1>Approved articles and practical resources</h1>
        <p className="section-lead">
          Only approved posts are listed here. The guide remains the main public
          resource for Ontario Nikkah and Nikah preparation.
        </p>
      </section>

      <section className="section">
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

      <section className="section section--muted">
        <div className="section-heading">
          <div>
            <span className="eyebrow">Featured resource</span>
            <h2>The Nikah guide remains the centerpiece</h2>
          </div>
        </div>

        <div className="content-actions">
          <Link className="button button--primary" href="/nikah-guide">
            Open the guide
          </Link>
          <a className="button button--ghost" href={siteContent.guide.downloadPath}>
            Download the PDF
          </a>
        </div>
      </section>
    </div>
  );
}
