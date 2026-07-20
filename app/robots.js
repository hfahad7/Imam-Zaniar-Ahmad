import { siteContent } from '../lib/site-content';

export default function robots() {
  const isPreview = process.env.VERCEL_ENV === 'preview';

  return {
    rules: [
      {
        userAgent: '*',
        ...(isPreview ? { disallow: '/' } : { allow: '/' }),
      },
    ],
    sitemap: `${siteContent.siteUrl}/sitemap.xml`,
    host: siteContent.siteUrl,
  };
}
