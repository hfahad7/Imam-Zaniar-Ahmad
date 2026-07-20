import { siteContent } from '../lib/site-content';

export default function manifest() {
  return {
    name: siteContent.name,
    short_name: 'Imam Zaniar Ahmad',
    description: siteContent.shortDescription,
    start_url: '/',
    scope: '/',
    display: 'standalone',
    background_color: '#f7f2e7',
    theme_color: '#49624f',
  };
}
