import { siteContent } from '../lib/site-content';

export default function sitemap() {
  const routes = [
    '/',
    '/about',
    '/nikah',
    '/lectures',
    '/testimonials',
    '/projects',
    '/blog',
    '/contact',
    '/privacy',
    '/accessibility',
  ];

  const staticUrls = routes.map((route) => ({
    url: `${siteContent.siteUrl}${route}`,
    lastModified: new Date('2026-07-27'),
  }));

  const blogUrls = siteContent.blogPosts.map((post) => ({
    url: `${siteContent.siteUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
  }));

  return [...staticUrls, ...blogUrls];
}
