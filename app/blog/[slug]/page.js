import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

import Icon from '../../components/ui-icon';
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

  const isNikahArticle = post.slug === 'prepare-for-a-nikah-in-ontario';
  const articleImage = isNikahArticle
    ? siteContent.photos.signingNikah
    : siteContent.photos.communityEvent;

  return (
    <div className="page-shell">
      <section className="page-hero page-hero--with-media article-hero">
        <div className="page-hero__copy">
          <span className="eyebrow">Blog Post</span>
          <h1>{post.title}</h1>
          <p className="section-lead">{post.excerpt}</p>
          <p className="small-copy"><Icon name="calendar" />Published {post.date}.</p>
        </div>
        <figure className="page-hero__media page-hero__media--landscape">
          <Image
            src={articleImage}
            alt={isNikahArticle ? 'Imam Zaniar Ahmad preparing Nikah documents' : 'Imam Zaniar Ahmad at a community gathering'}
            width={isNikahArticle ? 1365 : 1448}
            height={isNikahArticle ? 2048 : 1086}
            priority
            sizes="(max-width: 820px) 92vw, 38vw"
          />
        </figure>
      </section>

      <section className="article-layout">
        <div className="article-sections prose">
          {post.sections.map((section, index) => (
            <div className="article-section" key={section.heading}>
              <span className="article-section__number">0{index + 1}</span>
              <div>
                <h2>{section.heading}</h2>
                <p>{section.body}</p>
              </div>
            </div>
          ))}
        </div>
        <aside className="article-aside">
          <span className="card-icon"><Icon name={isNikahArticle ? 'book' : 'microphone'} /></span>
          <h2>{isNikahArticle ? 'Plan Your Nikah with Confidence' : 'Planning a Community Event?'}</h2>
          <p>{isNikahArticle ? 'Use the complimentary Ontario Nikkah Guide alongside this article.' : 'Share your audience, date, venue, and topic to request a speaking engagement.'}</p>
          <Link className="button button--primary" href={isNikahArticle ? siteContent.guide.onlinePath : '/contact'}>
            {isNikahArticle ? 'View Nikah Guide' : 'Invite Imam Zaniar'}
          </Link>
        </aside>
      </section>
    </div>
  );
}
