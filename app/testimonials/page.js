import Image from 'next/image';
import Link from 'next/link';

import Icon from '../components/ui-icon';
import { buildBreadcrumbJsonLd, buildMetadata } from '../../lib/metadata';
import { siteContent } from '../../lib/site-content';

const breadcrumbJsonLd = buildBreadcrumbJsonLd([
  { name: 'Home', item: siteContent.siteUrl },
  { name: 'Testimonials', item: `${siteContent.siteUrl}/testimonials` },
]);

const trustMetrics = [
  { icon: 'ring', value: '300+', label: 'Nikkahs Officiated' },
  { icon: 'star', value: '110', label: 'Google Reviews' },
  { icon: 'calendar', value: 'Since 2017', label: 'Serving the Community' },
  { icon: 'microphone', value: '1,000+', label: 'Featured Event Appearances' },
];

export const metadata = buildMetadata({
  title: 'Testimonials, Nikah Experience and Google Reviews',
  description:
    'Explore 110 Google reviews and community feedback for Imam Zaniar Ahmad, with 300+ Nikkahs and appearances at 1,000+ events since 2017.',
  path: '/testimonials',
});

export default function TestimonialsPage() {
  return (
    <div className="page-shell testimonials-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <section className="page-hero page-hero--with-media testimonials-page__hero">
        <div className="page-hero__copy">
          <span className="eyebrow">Testimonials</span>
          <h1>Trusted by Couples, Families, and Communities</h1>
          <p className="section-lead">
            People remember calm guidance, clear communication, and personal care
            on important days. Explore Imam Zaniar Ahmad&apos;s Google Business
            Profile and community feedback below.
          </p>
        </div>
        <figure className="page-hero__media page-hero__media--portrait testimonials-page__portrait">
          <Image
            src={siteContent.photos.gardenCeremony}
            alt="Imam Zaniar Ahmad at an outdoor wedding ceremony"
            width={1128}
            height={1394}
            priority
            sizes="(max-width: 820px) 92vw, 38vw"
          />
          <figcaption>Serving couples and communities since 2017.</figcaption>
        </figure>
      </section>

      <section className="testimonial-metrics" aria-label="Community experience">
        {trustMetrics.map((metric) => (
          <article key={metric.label}>
            <span className="testimonial-metrics__icon"><Icon name={metric.icon} /></span>
            <div>
              <strong>{metric.value}</strong>
              <p>{metric.label}</p>
            </div>
          </article>
        ))}
      </section>

      <section className="reviews-showcase">
        <div className="reviews-showcase__proof">
          <div className="reviews-showcase__stars" aria-label="Google review community">
            {[0, 1, 2, 3, 4].map((star) => (
              <Icon name="star" key={star} />
            ))}
          </div>
          <span className="eyebrow eyebrow--light">Google Reviews</span>
          <strong>{siteContent.reviews.reportedCount}</strong>
          <p>reviews from couples, families, and community members</p>
          <div className="reviews-showcase__monogram" aria-hidden="true">G</div>
        </div>

        <div className="reviews-showcase__copy">
          <span className="eyebrow eyebrow--light">Community Trust</span>
          <h2>Care People Remember</h2>
          <p>{siteContent.reviews.note}</p>
          <div className="reviews-showcase__assurances">
            <span><Icon name="check" /> Clear preparation</span>
            <span><Icon name="heart" /> Personal care</span>
            <span><Icon name="document" /> Religious and legal clarity</span>
          </div>
          <div
            className="reviews-showcase__embed"
            aria-label="Google Business Profile map for Imam Zaniar Ahmad"
          >
            <iframe
              src={siteContent.reviews.googleMapsEmbedUrl}
              title="Imam Zaniar Ahmad Google Business Profile"
              loading="lazy"
              allowFullScreen
              referrerPolicy="strict-origin-when-cross-origin"
            />
          </div>
          <div className="content-actions">
            {siteContent.reviews.reviewsUrl ? (
              <a
                className="button button--cream"
                href={siteContent.reviews.reviewsUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Read Reviews on Google
              </a>
            ) : null}
            <Link className="button button--outline-light" href="/contact">
              Contact Imam Zaniar
            </Link>
          </div>
        </div>
      </section>

      <section className="closing-cta closing-cta--compact">
        <span className="closing-cta__seal" aria-hidden="true"><Icon name="message" /></span>
        <span className="eyebrow">Plan Your Occasion</span>
        <h2>Start with a Clear Conversation</h2>
        <p>
          Share the date, location, and service you need to discuss availability
          with Imam Zaniar Ahmad.
        </p>
        <div className="content-actions content-actions--center">
          <Link className="button button--primary" href="/contact">
            Contact Imam Zaniar
          </Link>
          <Link className="button button--quiet" href="/nikah">
            Explore Nikah Services
          </Link>
        </div>
      </section>
    </div>
  );
}
