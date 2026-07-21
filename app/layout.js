import './globals.css';

import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';
import { siteContent, sitePathLinks } from '../lib/site-content';

const primaryLinks = [
  { href: '/nikah-weddings', label: 'Nikah Services' },
  { href: '/lectures-speaking', label: 'Speaking' },
  { href: '/about', label: 'About' },
  { href: '/blog', label: 'Blog' },
  { href: '/nikah-guide', label: 'Free Nikkah Guide', featured: true },
];

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
  verification: {
    google: process.env.GOOGLE_SEARCH_CONSOLE_VERIFICATION || undefined,
    other: {
      'msvalidate.01': process.env.BING_VERIFICATION || undefined,
    },
  },
};

export default function RootLayout({ children }) {
  const ga4Id = process.env.NEXT_PUBLIC_GA4_ID;
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
        email: siteContent.contact.email,
        sameAs: [siteContent.contact.instagram, siteContent.contact.linkedin],
        areaServed: siteContent.serviceAreas,
        knowsAbout: [
          'Nikah ceremonies',
          'Nikkah preparation',
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
        {ga4Id ? (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${ga4Id}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', ${JSON.stringify(ga4Id)}, { anonymize_ip: true });`}
            </Script>
          </>
        ) : null}
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
              <Image
                className="brand__mark"
                src="/favicon.svg"
                width={44}
                height={44}
                alt=""
                priority
              />
              <span className="brand__text">
                <strong>Imam Zaniar Ahmad</strong>
              </span>
            </Link>

            <nav className="site-nav site-nav--desktop" aria-label="Primary">
              <ul>
                {primaryLinks.map((link) => (
                  <li key={link.href}>
                    <Link className={link.featured ? 'nav-featured' : undefined} href={link.href}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="header-actions">
              <Link className="button button--primary button--header" href="/contact">
                Book a Consultation
              </Link>
              <details className="mobile-nav">
                <summary aria-label="Open navigation">Menu</summary>
                <nav className="mobile-nav__panel" aria-label="Mobile">
                  {sitePathLinks.slice(1).map((link) => (
                    <Link key={link.href} href={link.href}>
                      {link.label}
                    </Link>
                  ))}
                  <a href={siteContent.contact.phoneHref}>
                    Call {siteContent.contact.phoneDisplay}
                  </a>
                  <a href={siteContent.contact.emailHref}>Email Imam Zaniar Ahmad</a>
                </nav>
              </details>
            </div>
          </div>
        </header>

        <main id="main-content" className="site-main">
          {children}
        </main>

        <footer className="site-footer">
          <div className="site-footer__inner">
            <div className="footer-intro">
              <p className="footer-eyebrow">Imam Zaniar Ahmad</p>
              <p className="footer-description">{siteContent.shortDescription}</p>
              <Link className="footer-cta" href="/contact">
                Contact Imam Zaniar <span aria-hidden="true">&rarr;</span>
              </Link>
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
              <p className="footer-heading">Contact</p>
              <ul className="footer-links">
                <li>
                  <a href={siteContent.contact.emailHref}>
                    Email {siteContent.contact.email}
                  </a>
                </li>
                <li>
                  <a href={siteContent.contact.phoneHref}>
                    Call or text {siteContent.contact.phoneDisplay}
                  </a>
                </li>
                <li>
                  <a
                    href={siteContent.contact.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Follow Imam Zaniar Ahmad on Instagram"
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    href={siteContent.contact.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Connect with Imam Zaniar Ahmad on LinkedIn"
                  >
                    LinkedIn
                  </a>
                </li>
              </ul>
              <p className="footer-area">
                Serving the Greater Toronto Area, Hamilton, Niagara, Waterloo
                Region, and communities across Ontario.
              </p>
            </div>
          </div>

          <div className="site-footer__fineprint">
            <p>Copyright {new Date().getFullYear()} Imam Zaniar Ahmad. All rights reserved.</p>
            <div>
              <Link href="/privacy">Privacy</Link>
              <Link href="/accessibility">Accessibility</Link>
              <a href="/sitemap.xml">Sitemap</a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
