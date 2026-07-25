import Image from 'next/image';
import Link from 'next/link';

import Icon from '../components/ui-icon';
import { buildBreadcrumbJsonLd, buildMetadata } from '../../lib/metadata';
import { siteContent } from '../../lib/site-content';

const religiousRequirements = [
  {
    icon: 'handshake',
    title: 'Consent of the Bride and Groom',
    description:
      'A Nikah begins with the willing consent of both the bride and groom. Neither person should be pressured into the marriage.',
  },
  {
    icon: 'community',
    title: "The Bride's Wali",
    description:
      "The wali is the bride's guardian, such as her father, brother, uncle, or grandfather. He may attend in person or online, and he may authorize a representative when needed. In certain circumstances, an Imam may act as wali.",
  },
  {
    icon: 'gift',
    title: 'An Agreed Mahr',
    description:
      'The mahr is a gift agreed upon by the groom and bride. It may be cash, gold, jewellery, Umrah, memorizing a surah, or another reasonable gift. It can be given on the wedding day, later, or divided between both times.',
  },
  {
    icon: 'person',
    title: 'Islamic Witnesses',
    description:
      'The ceremony requires either two Muslim men, or one Muslim man and two Muslim women, as witnesses. If anyone needs to participate online, confirm the arrangement with the Imam before the Nikah.',
  },
];

const legalSteps = [
  {
    title: 'Apply for an Ontario Marriage Licence',
    description:
      'Apply online where the service is available, or begin the process through the city or municipality that will issue the licence.',
  },
  {
    title: 'Pick Up the Licence in Person',
    description:
      'Visit the issuing municipality with the required identification and documents. Check that all names and details are correct.',
  },
  {
    title: 'Confirm the Ceremony Details',
    description:
      'Review the date, time, location, arrival time, witnesses, wali, and mahr with your Imam or marriage officiant.',
  },
  {
    title: 'Bring the Licence to the Wedding',
    description:
      'Keep the original Ontario marriage licence with the documents you will bring on the day of the Nikah ceremony.',
  },
  {
    title: 'Use a Registered Marriage Officiant',
    description:
      'A religious Nikah does not automatically register a legal marriage in Ontario. For both services together, confirm that the officiant is authorized in Ontario.',
  },
  {
    title: 'Complete and Submit the Paperwork',
    description:
      'After the ceremony, the registered officiant completes the required legal paperwork and sends it for provincial registration.',
  },
  {
    title: 'Order the Marriage Certificate',
    description:
      'The couple applies for the Ontario marriage certificate after the marriage has been registered. This commonly takes about three to four months and is not ordered by the Imam.',
  },
];

const weddingSupport = [
  {
    icon: 'person',
    title: 'Imam or Muslim Wedding Officiant',
    description:
      'Choose someone who can explain the Islamic requirements and, when requested, complete Ontario legal marriage officiation.',
  },
  {
    icon: 'mosque',
    title: 'Mosque or Islamic Centre',
    description:
      'Ask about ceremony space, scheduling, accessibility, guest capacity, and any community guidelines.',
  },
  {
    icon: 'camera',
    title: 'Photography and Venue',
    description:
      "Choose a setting and photographer that respect the couple's preferences and the religious character of the ceremony.",
  },
  {
    icon: 'servingDish',
    title: 'Halal Catering',
    description:
      'Confirm the menu, halal sourcing, guest count, serving plan, and any dietary requirements.',
  },
  {
    icon: 'heart',
    title: 'Marriage Preparation',
    description:
      'Premarital counselling can help a couple discuss expectations, communication, faith, family, and shared responsibilities.',
  },
];

const dayOfChecklist = [
  'Full names of the bride and groom',
  'Wali contact details or authorized representation',
  'The agreed mahr and when it will be given',
  'Names and attendance plan for the Islamic witnesses',
  'The original Ontario marriage licence for legal officiation',
  'Any identification or forms requested by the officiant',
];

const faqItems = [
  {
    question: 'Is a Nikah Automatically a Legal Marriage in Ontario?',
    answer:
      'No. A religious Nikah and an Ontario legal marriage are separate unless an authorized marriage officiant completes the legal ceremony and submits the required provincial paperwork.',
  },
  {
    question: 'Can One Officiant Perform the Nikah and Legal Marriage?',
    answer:
      'Yes, when the Imam is also registered to solemnize marriages in Ontario. Confirm both services when booking and bring a valid Ontario marriage licence to the ceremony.',
  },
  {
    question: 'When Should We Apply for the Marriage Licence?',
    answer:
      'An Ontario marriage licence is generally valid for three months. Plan the application around the wedding date and confirm current requirements with the issuing municipality.',
  },
  {
    question: 'What Should We Discuss with the Imam Before the Ceremony?',
    answer:
      'Confirm consent, the wali, mahr, witnesses, ceremony format, legal officiation, paperwork, date, location, arrival time, and any questions specific to your family.',
  },
  {
    question: 'Can We Book a Nikah Outside Ontario?',
    answer:
      'Yes. Ceremonies outside Ontario are available by request, with additional travel fees. Legal marriage requirements depend on the jurisdiction where the wedding takes place.',
  },
  {
    question: 'Where Can We Read the Designed Version of the Guide?',
    answer:
      'Use the View Nikah Guide button for the complete online infographic, or download the original PDF to keep a copy.',
  },
];

const breadcrumbJsonLd = buildBreadcrumbJsonLd([
  { name: 'Home', item: siteContent.siteUrl },
  { name: 'Nikah Guide', item: `${siteContent.siteUrl}/nikah-guide` },
]);

const guideJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      '@id': `${siteContent.siteUrl}/nikah-guide#article`,
      headline: 'Free Nikah Guide for Ontario Muslim Weddings',
      description:
        'A practical guide to Islamic Nikah requirements, Ontario marriage licences, wedding-day preparation, and choosing a Muslim wedding officiant.',
      url: `${siteContent.siteUrl}/nikah-guide`,
      dateModified: '2026-07-25',
      author: {
        '@type': 'Person',
        name: siteContent.name,
        url: siteContent.siteUrl,
      },
      about: [
        'Nikah ceremony',
        'Muslim wedding planning',
        'Islamic marriage requirements',
        'Ontario marriage licence',
        'Muslim wedding officiant',
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: faqItems.map((item) => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: item.answer,
        },
      })),
    },
  ],
};

export const metadata = buildMetadata({
  title: 'Free Nikah Guide for Ontario Muslim Weddings',
  description:
    'Plan a Nikah in Ontario with this free guide to Islamic marriage requirements, marriage licences, Muslim wedding officiants, checklists, and vendors.',
  path: '/nikah-guide',
});

export default function NikahGuidePage() {
  const meezanSearchUrl =
    'https://meezanapp.com/search?level1Service=6826aad535473d1156c63f2b';

  return (
    <div className="page-shell">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(guideJsonLd) }}
      />

      <section className="page-hero page-hero--with-media page-hero--guide">
        <div className="page-hero__copy">
          <span className="eyebrow">Free Muslim Wedding Resource</span>
          <h1>Free Nikah Guide for Ontario Couples</h1>
          <p className="section-lead">
            Understand the Islamic ceremony, Ontario marriage process, and
            practical decisions that help a Muslim wedding feel organized,
            meaningful, and calm.
          </p>
          <div className="content-actions">
            <Link className="button button--primary" href={siteContent.guide.onlinePath}>
              View Nikah Guide
            </Link>
            <a
              className="button button--ghost"
              href={siteContent.guide.downloadPath}
              download="nikah-guide.pdf"
            >
              Download the PDF
            </a>
          </div>
          <p className="small-copy">Reviewed and updated {siteContent.guide.lastUpdated}.</p>
        </div>
        <figure className="guide-cover">
          <div className="guide-cover__paper">
            <span className="guide-cover__mark"><Icon name="ring" /></span>
            <small>Complimentary Ontario Edition</small>
            <strong>The Nikah Guide</strong>
            <p>A clear path from preparation to ceremony day.</p>
            <span className="guide-cover__author">Imam Zaniar Ahmad</span>
          </div>
        </figure>
      </section>

      <nav className="guide-topic-nav" aria-label="Nikah guide topics">
        <a href="#nikah-basics"><Icon name="ring" />Nikah Basics</a>
        <a href="#islamic-requirements"><Icon name="mosque" />Islamic Requirements</a>
        <a href="#ontario-marriage"><Icon name="document" />Ontario Marriage</a>
        <a href="#wedding-planning"><Icon name="calendar" />Wedding Planning</a>
        <a href="#nikah-faq"><Icon name="book" />Common Questions</a>
      </nav>

      <article className="guide-seo-article">
        <section className="section section--compact" id="nikah-basics">
          <div className="section-heading">
            <div>
              <span className="eyebrow">Start with the Difference</span>
              <h2>Religious Nikah and Ontario Legal Marriage</h2>
            </div>
          </div>

          <p className="prose guide-intro-copy">
            A Nikah is the Islamic marriage ceremony that brings a couple
            together through mutual consent, a wali, an agreed mahr, and
            witnesses. Ontario legal marriage officiation is a separate
            government process involving a marriage licence, an authorized
            officiant, signed documents, and provincial registration.
          </p>

          <div className="guide-distinction-grid">
            <section className="guide-distinction-card">
              <span className="card-icon"><Icon name="mosque" /></span>
              <div>
                <p className="card-meta">Religious Service</p>
                <h3>Islamic Nikah Ceremony</h3>
                <p>
                  Covers the Islamic requirements, the marriage contract, and
                  the ceremony led by an Imam or knowledgeable officiant.
                </p>
              </div>
            </section>
            <section className="guide-distinction-card guide-distinction-card--legal">
              <span className="card-icon"><Icon name="document" /></span>
              <div>
                <p className="card-meta">Government Service</p>
                <h3>Ontario Marriage Registration</h3>
                <p>
                  Requires a valid marriage licence and a registered Ontario
                  marriage officiant who completes and submits the legal forms.
                </p>
              </div>
            </section>
          </div>

          <aside className="guide-important-note">
            <span><Icon name="sparkle" /></span>
            <div>
              <strong>Planning one ceremony for both?</strong>
              <p>
                Ask whether your Imam is also a registered marriage officiant
                in Ontario, and confirm both services before the wedding day.
              </p>
            </div>
          </aside>
        </section>

        <section className="section section--muted section--compact" id="islamic-requirements">
          <div className="section-heading">
            <div>
              <span className="eyebrow">The Religious Ceremony</span>
              <h2>Islamic Requirements for a Nikah</h2>
            </div>
          </div>

          <p className="prose guide-intro-copy">
            Every couple&apos;s situation deserves careful guidance. These are the
            main requirements covered in the Nikkah guide; speak with an
            experienced Imam when a wali, mahr, witness, or family circumstance
            needs individual attention.
          </p>

          <div className="guide-requirement-grid">
            {religiousRequirements.map((requirement, index) => (
              <section className="guide-requirement-card" key={requirement.title}>
                <span className="guide-requirement-card__number">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span className="card-icon"><Icon name={requirement.icon} /></span>
                <div>
                  <h3>{requirement.title}</h3>
                  <p>{requirement.description}</p>
                </div>
              </section>
            ))}
          </div>
        </section>

        <section className="guide-photo-callout">
          <Image
            src={siteContent.photos.signingNikah}
            alt="Imam Zaniar Ahmad reviewing documents for a Nikah ceremony"
            width={1365}
            height={2048}
            sizes="(max-width: 820px) 92vw, 44vw"
          />
          <blockquote>
            <Icon name="document" />
            <p>
              Clear preparation protects the meaning of the ceremony and keeps
              the legal details from becoming a last-minute concern.
            </p>
            <cite>Ontario Nikah Planning Guide</cite>
          </blockquote>
        </section>

        <section className="section section--compact" id="ontario-marriage">
          <div className="section-heading">
            <div>
              <span className="eyebrow">Legal Marriage Checklist</span>
              <h2>How to Register a Marriage in Ontario</h2>
            </div>
          </div>

          <p className="prose guide-intro-copy">
            Couples who want their Muslim wedding to create a legal marriage in
            Ontario should complete these steps in addition to the religious
            Nikah ceremony.
          </p>

          <ol className="guide-legal-steps">
            {legalSteps.map((step, index) => (
              <li key={step.title}>
                <span>{index + 1}</span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </li>
            ))}
          </ol>

          <div className="guide-processing-note">
            <span className="card-icon"><Icon name="clock" /></span>
            <div>
              <p className="card-meta">If a Certificate Is Needed Urgently</p>
              <h3>Begin the Standard Application, Then Request Urgent Processing</h3>
              <p>
                After the officiant sends the completed marriage licence, wait
                about one week, submit the normal marriage certificate
                application, and then send an urgent request to the Office of
                the Registrar General. Keep the marriage licence number,
                marriage date, application reference, and tracking details
                available.
              </p>
              <p>
                For current urgent-processing guidance, call{' '}
                <a href="tel:18004612156">800-461-2156</a> or{' '}
                <a href="tel:14163258305">416-325-8305</a>.
              </p>
            </div>
          </div>
        </section>

        <section className="section section--accent section--compact" id="wedding-planning">
          <div className="section-heading">
            <div>
              <span className="eyebrow">Prepare with Confidence</span>
              <h2>What to Arrange Before the Nikah Ceremony</h2>
            </div>
          </div>

          <div className="guide-planning-layout">
            <section className="guide-day-checklist">
              <span className="card-icon"><Icon name="clipboard" /></span>
              <p className="card-meta">Wedding Day File</p>
              <h3>Bring These Details with You</h3>
              <ul>
                {dayOfChecklist.map((item) => (
                  <li key={item}><Icon name="check" /><span>{item}</span></li>
                ))}
              </ul>
            </section>

            <div className="guide-support-list">
              {weddingSupport.map((item) => (
                <section key={item.title}>
                  <span><Icon name={item.icon} /></span>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </section>
              ))}
            </div>
          </div>

          <aside className="guide-meezan-callout">
            <div>
              <p className="card-meta">Finding Trusted Support</p>
              <h3>Search for Imams and Islamic Wedding Services</h3>
              <p>
                Meezan can help couples explore Muslim service providers for
                their ceremony and wedding plans.
              </p>
            </div>
            <a
              className="button button--primary"
              href={meezanSearchUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Search on Meezan
            </a>
          </aside>
        </section>

        <section className="section section--compact">
          <div className="section-heading">
            <div>
              <span className="eyebrow">Official Ontario Information</span>
              <h2>Marriage Licence and Certificate Resources</h2>
            </div>
          </div>

          <p className="prose guide-intro-copy">
            Government requirements and processing times can change. Use these
            official Ontario sources to confirm the latest information before
            your wedding.
          </p>

          <div className="guide-grid guide-grid--references">
            {siteContent.guide.officialLinks.map((link) => (
              <article key={link.href} className="guide-card">
                <span className="card-icon"><Icon name="globe" /></span>
                <div className="guide-card__copy">
                  <p className="card-meta">Ontario.ca</p>
                  <h3>{link.label}</h3>
                </div>
                <a
                  className="button button--ghost"
                  href={link.href}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Open Official Source
                </a>
              </article>
            ))}
            <article className="guide-card">
              <span className="card-icon"><Icon name="clock" /></span>
              <div className="guide-card__copy">
                <p className="card-meta">Ontario.ca</p>
                <h3>Send an Urgent Request to the Registrar General</h3>
              </div>
              <a
                className="button button--ghost"
                href="https://www.ontario.ca/page/send-request-office-registrar-general"
                target="_blank"
                rel="noreferrer noopener"
              >
                Open Official Source
              </a>
            </article>
          </div>
        </section>

        <section className="section section--muted section--compact" id="nikah-faq">
          <div className="section-heading">
            <div>
              <span className="eyebrow">Common Planning Questions</span>
              <h2>Nikah and Muslim Wedding FAQs</h2>
            </div>
          </div>

          <div className="guide-faq-grid">
            {faqItems.map((item) => (
              <details key={item.question}>
                <summary>{item.question}</summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>
        </section>
      </article>

      <section className="guide-final-cta">
        <div>
          <span className="eyebrow">Ready to Plan the Ceremony?</span>
          <h2>Book a Nikah Consultation with Imam Zaniar Ahmad</h2>
          <p>
            Ask about a religious Nikah, Ontario legal marriage officiation, or
            both services together. Travel outside Ontario is available by
            request with additional fees.
          </p>
        </div>
        <div className="content-actions">
          <Link className="button button--primary" href="/contact">
            Book a Nikah Consultation
          </Link>
          <Link className="button button--ghost" href="/nikah-weddings">
            View Nikah Services
          </Link>
        </div>
      </section>
    </div>
  );
}
