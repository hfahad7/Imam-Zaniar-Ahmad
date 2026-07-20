import './globals.css';

import Link from 'next/link';
import { siteContent, sitePathLinks } from '../lib/site-content';

export const metadata = {
  metadataBase: new URL(siteContent.siteUrl),
  title: {
    default: siteContent.name,
    template: `%s | ${siteContent.name}`,
  },
  description: siteContent.shortDescription,
  icons: {
    icon: '/favicon.svg',
    apple: '/apple-touch-icon.svg',
  },
};

export default function RootLayout({ children }) {
  const personJsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Person',
        '@id': `${siteContent.siteUrl}/#person`,
        name: siteContent.name,
        url: siteContent.siteUrl,
        image: `${siteContent.siteUrl}${siteContent.heroImage}`,
        jobTitle: siteContent.title,
        description: siteContent.shortDescription,
        telephone: siteContent.contact.phoneHref.replace('tel:', ''),
        sameAs: [siteContent.contact.instagram, siteContent.contact.linkedin],
        areaServed: siteContent.serviceAreas,
        knowsAbout: [
          'Nikkah ceremonies',
          'Nikah ceremonies',
          'Ontario marriage officiation',
          'Lectures and khutbahs',
          'Community speaking',
          'Meezan',
          'Zakah.com',
          'AutoAjr',
        ],
      },
      {
        '@type': 'WebSite',
        '@id': `${siteContent.siteUrl}/#website`,
        url: siteContent.siteUrl,
        name: siteContent.name,
        description: siteContent.shortDescription,
      },
    ],
  };

  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        <header className="site-header">
          <div className="site-header__inner">
            <Link className="brand" href="/" aria-label="Imam Zaniar Ahmad home">
              <span className="brand__mark" aria-hidden="true">
                IA
              </span>
              <span className="brand__text">
                <strong>Imam Zaniar Ahmad</strong>
                <span>{siteContent.title}</span>
              </span>
            </Link>

            <nav className="site-nav" aria-label="Primary">
              <ul>
                {sitePathLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="header-actions">
              <a className="button button--ghost" href={siteContent.contact.phoneHref}>
                Call {siteContent.contact.phoneDisplay}
              </a>
              <a
                className="button button--primary"
                href={siteContent.contact.smsHref}
              >
                Text Imam Zaniar Ahmad
              </a>
            </div>
          </div>
        </header>

        <main id="main-content" className="site-main">
          {children}
        </main>

        <footer className="site-footer">
          <div className="site-footer__inner">
            <div>
              <p className="footer-eyebrow">Imam Zaniar Ahmad</p>
              <p className="footer-description">{siteContent.shortDescription}</p>
            </div>

            <div>
              <p className="footer-heading">Explore</p>
              <ul className="footer-links">
                {sitePathLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="footer-heading">Service areas</p>
              <div className="pill-list">
                {siteContent.serviceAreas.slice(0, 8).map((area) => (
                  <span key={area} className="pill">
                    {area}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <p className="footer-heading">Contact</p>
              <ul className="footer-links">
                <li>
                  <a href={siteContent.contact.phoneHref}>
                    Call or text {siteContent.contact.phoneDisplay}
                  </a>
                </li>
                <li>
                  <a href={siteContent.contact.instagram} target="_blank" rel="noreferrer">
                    Instagram
                  </a>
                </li>
                <li>
                  <a href={siteContent.contact.linkedin} target="_blank" rel="noreferrer">
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <p className="site-footer__fineprint">
            Copyright {new Date().getFullYear()} Imam Zaniar Ahmad. Built for clear
            discovery, respectful booking, and accessible use on mobile and desktop.
          </p>
        </footer>
      </body>
    </html>
  );
}
