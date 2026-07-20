import { notFound } from 'next/navigation';

import { buildMetadata } from '../../../lib/metadata';
import { siteContent } from '../../../lib/site-content';

export function generateStaticParams() {
  return siteContent.blogPosts.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }) {
  const post = siteContent.blogPosts.find((entry) => entry.slug === params.slug);

  if (!post) {
    return buildMetadata({
      title: 'Article not found',
      description: 'The requested article could not be found.',
      path: `/blog/${params.slug}`,
      noIndex: true,
    });
  }

  return buildMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/blog/${post.slug}`,
  });
}

export default function BlogArticlePage({ params }) {
  const post = siteContent.blogPosts.find((entry) => entry.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="page-shell">
      <section className="page-hero">
        <span className="eyebrow">Blog post</span>
        <h1>{post.title}</h1>
        <p className="section-lead">{post.excerpt}</p>
        <p className="small-copy">Published {post.date}.</p>
      </section>

      <section className="section prose">
        {post.sections.map((section) => (
          <div key={section.heading}>
            <h2>{section.heading}</h2>
            <p>{section.body}</p>
          </div>
        ))}
      </section>
    </div>
  );
}
