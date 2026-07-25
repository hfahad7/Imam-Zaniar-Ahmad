import Image from 'next/image';
import Link from 'next/link';

import Icon from '../components/ui-icon';
import { buildBreadcrumbJsonLd, buildMetadata } from '../../lib/metadata';
import { siteContent } from '../../lib/site-content';

const religiousFoundations = [
  {
    icon: 'handshake',
    title: 'A Marriage Chosen Freely',
    description:
      'The bride and groom must both willingly agree to the marriage. Consent is the beginning of a valid and meaningful Nikah.',
  },
  {
    icon: 'community',
    title: 'The Bride Is Supported by Her Wali',
    description:
      "The wali is the bride's guardian, often her father, brother, uncle, or grandfather. He may attend in person or online and may authorize a representative when needed. In certain circumstances, an Imam may act as wali.",
  },
  {
    icon: 'gift',
    title: 'The Couple Agrees on the Mahr',
    description:
      'The mahr is a reasonable gift from the groom to the bride. It may be cash, gold, jewellery, Umrah, memorizing a surah, or another agreed gift. It can be given on the wedding day, later, or in two parts.',
  },
  {
    icon: 'person',
    title: 'Witnesses Are Confirmed in Advance',
    description:
      'The ceremony requires either two Muslim men, or one Muslim man and two Muslim women, as witnesses. Discuss online participation with the Imam before the ceremony.',
  },
];

const ontarioPath = [
  {
    title: 'Start the Licence Application',
    description:
      'Apply online where available, or begin through the Ontario city or municipality that will issue the marriage licence.',
  },
  {
    title: 'Collect the Licence',
    description:
      'Pick it up in person with the required identification and documents. Review every name and detail before leaving.',
  },
  {
    title: 'Align the Ceremony Plan',
    description:
      'Confirm the date, location, arrival time, wali, mahr, witnesses, and legal service with the Imam or officiant.',
  },
  {
    title: 'Keep the Original with Your Wedding File',
    description:
      'Bring the original Ontario marriage licence to the ceremony if legal marriage officiation is part of the booking.',
  },
  {
    title: 'Confirm the Officiant Is Registered',
    description:
      'A religious ceremony alone does not register an Ontario marriage. One ceremony can cover both when the officiant is legally authorized.',
  },
  {
    title: 'Sign and Submit the Legal Forms',
    description:
      'After the ceremony, the registered officiant completes the paperwork and sends it for provincial registration.',
  },
  {
    title: 'Order the Marriage Certificate',
    description:
      'After registration, the couple orders the Ontario marriage certificate. This commonly takes three to four months and is not ordered by the Imam.',
  },
];

const planningPartners = [
  {
    icon: 'person',
    title: 'Imam and Officiant',
    description:
      'Choose someone who can explain the Islamic ceremony and, if requested, complete Ontario legal marriage officiation.',
  },
  {
    icon: 'mosque',
    title: 'Ceremony Space',
    description:
      'Confirm the mosque, venue, or home setting, including timing, accessibility, guest capacity, and any community guidelines.',
  },
  {
    icon: 'camera',
    title: 'Photography',
    description:
      "Discuss privacy, family preferences, and the religious character of the wedding before the photographer's arrival.",
  },
  {
    icon: 'servingDish',
    title: 'Halal Catering',
    description:
      'Confirm halal sourcing, the menu, guest count, serving schedule, and dietary requirements.',
  },
  {
    icon: 'heart',
    title: 'Marriage Preparation',
    description:
      'Premarital counselling creates space to discuss faith, communication, family, expectations, and shared responsibilities.',
  },
];

const weddingFile = [
  'The full names of the bride and groom',
  'Wali contact details or authorized representation',
  'The agreed mahr and when it will be given',
  'Names and attendance plans for the Islamic witnesses',
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
      headline: 'Planning a Muslim Wedding in Ontario',
      description:
        'A practical resource for Islamic Nikah requirements, Ontario marriage licences, wedding-day preparation, and choosing a Muslim wedding officiant.',
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
  title: 'Muslim Wedding Planning in Ontario: Free Nikah Guide',
  description:
    'Plan a Nikah in Ontario with this free guide to Islamic marriage requirements, marriage licences, Muslim wedding officiants, checklists, and vendors.',
  path: '/nikah-guide',
});

export default function NikahGuidePage() {
  const meezanSearchUrl =
    'https://meezanapp.com/search?level1Service=6826aad535473d1156c63f2b';

  return (
    <div className="page-shell planning-guide">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(guideJsonLd) }}
      />

      <section className="planning-guide__hero">
        <div className="planning-guide__hero-copy">
          <span className="eyebrow">Ontario Muslim Wedding Planning</span>
          <h1>Planning a Muslim Wedding in Ontario</h1>
          <p>
            A practical resource for couples bringing together the meaning of
            the Nikah ceremony, the Ontario legal marriage process, and the
            details that shape a thoughtful wedding day.
          </p>
          <div className="content-actions">
            <Link className="button button--primary" href={siteContent.guide.onlinePath}>
              View the Visual Nikah Guide
            </Link>
            <Link className="button button--ghost" href="/contact">
              Book a Nikah Consultation
            </Link>
          </div>
          <div className="planning-guide__hero-notes" aria-label="Guide topics">
            <span><Icon name="ring" />Religious Ceremony</span>
            <span><Icon name="document" />Ontario Registration</span>
            <span><Icon name="clipboard" />Wedding-Day Checklist</span>
          </div>
        </div>

        <figure className="planning-guide__hero-media">
          <Image
            src={siteContent.photos.withGroom}
            alt="Imam Zaniar Ahmad greeting a groom at a Muslim wedding"
            width={1206}
            height={1494}
            priority
            sizes="(max-width: 820px) 94vw, 44vw"
          />
          <figcaption>
            <span>Free Planning Resource</span>
            <strong>Clear Steps for a Meaningful Nikah</strong>
          </figcaption>
        </figure>
      </section>

      <div className="planning-guide__reading-layout">
        <aside className="planning-guide__contents">
          <div>
            <p className="card-meta">In This Resource</p>
            <nav aria-label="Wedding planning topics">
              <a href="#two-commitments"><span>01</span>Religious and Legal</a>
              <a href="#marriage-foundations"><span>02</span>Nikah Foundations</a>
              <a href="#ontario-path"><span>03</span>Ontario Process</a>
              <a href="#wedding-day"><span>04</span>Wedding-Day Plan</a>
              <a href="#planning-questions"><span>05</span>Questions</a>
            </nav>
            <a
              className="planning-guide__download"
              href={siteContent.guide.downloadPath}
              download="nikah-guide.pdf"
            >
              <Icon name="document" />
              <span>
                <small>Keep a Copy</small>
                Download the PDF
              </span>
            </a>
          </div>
        </aside>

        <article className="planning-guide__article">
          <section className="planning-guide__chapter" id="two-commitments">
            <header className="planning-guide__chapter-heading">
              <span>01</span>
              <div>
                <p className="eyebrow">Begin with Clarity</p>
                <h2>Two Commitments, One Wedding Day</h2>
              </div>
            </header>

            <p className="planning-guide__opening">
              A Muslim wedding may include two connected but distinct
              commitments. The religious Nikah establishes the Islamic marriage.
              Ontario marriage officiation completes the government process.
              Couples can arrange either service or bring both together in one
              ceremony.
            </p>

            <div className="planning-guide__commitment-split">
              <section>
                <span><Icon name="mosque" /></span>
                <p className="card-meta">The Religious Commitment</p>
                <h3>The Islamic Marriage Contract</h3>
                <p>
                  The Nikah centres on willing consent, the bride&apos;s wali, an
                  agreed mahr, witnesses, and the marriage contract led by an
                  Imam or knowledgeable officiant.
                </p>
              </section>
              <section>
                <span><Icon name="document" /></span>
                <p className="card-meta">The Legal Commitment</p>
                <h3>The Ontario Marriage Record</h3>
                <p>
                  Legal registration requires a valid marriage licence and an
                  authorized Ontario officiant who signs and submits the
                  required provincial forms.
                </p>
              </section>
            </div>

            <aside className="planning-guide__clarity-note">
              <Icon name="sparkle" />
              <p>
                <strong>Want both completed together?</strong> Confirm that the
                Imam is registered to solemnize marriages in Ontario and include
                both services in the booking.
              </p>
            </aside>
          </section>

          <section className="planning-guide__chapter" id="marriage-foundations">
            <header className="planning-guide__chapter-heading">
              <span>02</span>
              <div>
                <p className="eyebrow">The Heart of the Ceremony</p>
                <h2>Four Foundations of the Islamic Marriage</h2>
              </div>
            </header>

            <p className="planning-guide__opening">
              These foundations help an Imam understand whether the ceremony is
              ready to proceed. The free Nikkah guide summarizes the general
              requirements, while personal or complex circumstances should be
              discussed privately with an experienced Imam.
            </p>

            <div className="planning-guide__foundation-list">
              {religiousFoundations.map((item, index) => (
                <section key={item.title}>
                  <span className="planning-guide__foundation-number">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className="planning-guide__foundation-icon">
                    <Icon name={item.icon} />
                  </span>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </section>
              ))}
            </div>
          </section>

          <figure className="planning-guide__photo-break">
            <Image
              src={siteContent.photos.signingNikah}
              alt="Imam Zaniar Ahmad completing Nikah and marriage documents"
              width={1365}
              height={2048}
              sizes="(max-width: 820px) 94vw, 58vw"
            />
            <figcaption>
              <span className="eyebrow">Preparation Creates Calm</span>
              <p>
                Settle the religious requirements and legal paperwork before
                the wedding day, so the ceremony can remain the focus.
              </p>
            </figcaption>
          </figure>

          <section className="planning-guide__chapter" id="ontario-path">
            <header className="planning-guide__chapter-heading">
              <span>03</span>
              <div>
                <p className="eyebrow">From Licence to Certificate</p>
                <h2>The Couple&apos;s Path Through Ontario Registration</h2>
              </div>
            </header>

            <p className="planning-guide__opening">
              If your ceremony will also create a legal marriage in Ontario,
              use this path to keep the government steps moving alongside your
              Nikah plans.
            </p>

            <ol className="planning-guide__ontario-path">
              {ontarioPath.map((item, index) => (
                <li key={item.title}>
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </li>
              ))}
            </ol>

            <aside className="planning-guide__urgent">
              <span className="planning-guide__urgent-icon"><Icon name="clock" /></span>
              <div>
                <p className="card-meta">When a Certificate Is Time-Sensitive</p>
                <h3>Apply Normally, Then Request Urgent Processing</h3>
                <p>
                  After the officiant sends the completed marriage licence,
                  wait about one week, submit the standard marriage certificate
                  application, and then send an urgent request to the Office of
                  the Registrar General. Keep the licence number, marriage date,
                  application reference, and tracking details available.
                </p>
                <p>
                  For current guidance, call{' '}
                  <a href="tel:18004612156">800-461-2156</a> or{' '}
                  <a href="tel:14163258305">416-325-8305</a>.
                </p>
              </div>
            </aside>
          </section>

          <section className="planning-guide__chapter" id="wedding-day">
            <header className="planning-guide__chapter-heading">
              <span>04</span>
              <div>
                <p className="eyebrow">Bring the Plan Together</p>
                <h2>Build a Wedding-Day File Everyone Can Follow</h2>
              </div>
            </header>

            <div className="planning-guide__day-layout">
              <section className="planning-guide__wedding-file">
                <span className="planning-guide__file-icon"><Icon name="clipboard" /></span>
                <p className="card-meta">The Final Check</p>
                <h3>Keep These Details Together</h3>
                <ul>
                  {weddingFile.map((item) => (
                    <li key={item}><Icon name="check" /><span>{item}</span></li>
                  ))}
                </ul>
              </section>

              <div className="planning-guide__partner-list">
                {planningPartners.map((item) => (
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

            <div className="planning-guide__meezan">
              <div>
                <p className="card-meta">Need Trusted Wedding Support?</p>
                <h3>Explore Imams and Islamic Service Providers</h3>
                <p>
                  Meezan can help couples find Muslim service providers for
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
            </div>
          </section>

          <section className="planning-guide__sources">
            <header>
              <span><Icon name="globe" /></span>
              <div>
                <p className="eyebrow">Check the Current Rules</p>
                <h2>Official Ontario Marriage Resources</h2>
              </div>
            </header>
            <p>
              Government requirements and processing times can change. Confirm
              the latest information directly with Ontario before the wedding.
            </p>
            <div>
              {siteContent.guide.officialLinks.map((link) => (
                <a key={link.href} href={link.href} target="_blank" rel="noreferrer noopener">
                  <span>{link.label}</span>
                  <Icon name="arrow" />
                </a>
              ))}
              <a
                href="https://www.ontario.ca/page/send-request-office-registrar-general"
                target="_blank"
                rel="noreferrer noopener"
              >
                <span>Send an Urgent Request to the Registrar General</span>
                <Icon name="arrow" />
              </a>
            </div>
          </section>

          <section className="planning-guide__chapter" id="planning-questions">
            <header className="planning-guide__chapter-heading">
              <span>05</span>
              <div>
                <p className="eyebrow">Before You Confirm the Date</p>
                <h2>Questions Couples Often Ask About the Nikah</h2>
              </div>
            </header>

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
      </div>

      <section className="planning-guide__final">
        <div>
          <span className="eyebrow">Plan the Ceremony with Confidence</span>
          <h2>Discuss Your Nikah with Imam Zaniar Ahmad</h2>
          <p>
            Ask about a religious ceremony, Ontario legal marriage officiation,
            or both services together. Travel outside Ontario is available by
            request with additional fees.
          </p>
        </div>
        <div className="content-actions">
          <Link className="button button--cream" href="/contact">
            Book a Nikah Consultation
          </Link>
          <Link className="button button--outline-light" href="/nikah-weddings">
            View Nikah Services
          </Link>
        </div>
      </section>
    </div>
  );
}
