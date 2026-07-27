import Link from 'next/link';

import Icon from '../components/ui-icon';
import { buildBreadcrumbJsonLd, buildMetadata } from '../../lib/metadata';
import { siteContent } from '../../lib/site-content';

const breadcrumbJsonLd = buildBreadcrumbJsonLd([
  { name: 'Home', item: siteContent.siteUrl },
  { name: 'Testimonials', item: `${siteContent.siteUrl}/testimonials` },
]);

export const metadata = buildMetadata({
  title: 'Testimonials and Google Reviews',
  description:
    'Read Google reviews and community feedback about Imam Zaniar Ahmad from couples, families, and Muslim community organizers.',
  path: '/testimonials',
});

export default function TestimonialsPage() {
  return (
    <div className="page-shell testimonials-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <section className="page-hero testimonials-page__hero">
        <span className="eyebrow">Testimonials</span>
        <h1>Trusted by Couples, Families, and Communities</h1>
        <p className="section-lead">
          People remember calm guidance, clear communication, and personal care
          on important days. Explore Imam Zaniar Ahmad&apos;s Google Business
          Profile and community feedback below.
        </p>
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
