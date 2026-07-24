import Link from 'next/link';

import Icon from '../components/ui-icon';
import { buildBreadcrumbJsonLd, buildMetadata } from '../../lib/metadata';
import { siteContent } from '../../lib/site-content';

const breadcrumbJsonLd = buildBreadcrumbJsonLd([
  { name: 'Home', item: siteContent.siteUrl },
  {
    name: 'Nikah Planning Guide',
    item: `${siteContent.siteUrl}${siteContent.guide.onlinePath}`,
  },
]);

const licenceSteps = [
  {
    title: 'Apply Online',
    description:
      'Apply online for an Ontario marriage license. You can also go directly to City Hall, but online is often faster.',
  },
  {
    title: 'Pick Up Your Licence in Person',
    description:
      'Go to your city or municipality to pick it up. Bring the required ID.',
  },
  {
    title: 'Review the Nikah Details',
    description:
      'Confirm the date, time, location, and arrival time with your imam or officiant.',
  },
  {
    title: 'Bring the Licence on the Wedding Day',
    description:
      'Make sure you have the marriage license with you on the day of the Nikah.',
  },
  {
    title: 'Use a Registered Officiant',
    description:
      'Make sure the imam or officiant you choose is registered in your locality.',
  },
  {
    title: 'Paperwork After the Ceremony',
    description:
      'The imam or officiant fills out and files the legal marriage paperwork after the ceremony.',
  },
  {
    title: 'Order Your Marriage Certificate',
    description:
      'About 3-4 months later, the bride and groom apply online for the Ontario marriage certificate. The imam does not do this.',
  },
];

const nikahRequirements = [
  {
    number: '1',
    icon: 'handshake',
    title: 'Consent of the Bride and Groom',
    description:
      'Both the bride and groom must willingly agree to the marriage.',
  },
  {
    number: '2',
    icon: 'community',
    title: 'Wali (Guardian for the Bride)',
    description:
      "A wali is the bride's guardian. This may be the father, brother, uncle, or grandfather. The wali may be present in person or online. In some cases, he may permit someone else to represent him. In certain circumstances, the imam may act as the wali.",
  },
  {
    number: '3',
    icon: 'gift',
    title: 'Mahr (Bridal Gift)',
    description:
      'A mahr is an agreed gift from the groom to the bride. It can be cash, gold, jewelry, memorizing a surah, Umrah, or another agreed gift. It should be reasonable.',
    details: [
      ['Muqaddam', 'given on the wedding day'],
      ['Muakhkhar', 'given later'],
      [null, 'Give some now & some later'],
    ],
  },
  {
    number: '4',
    icon: 'community',
    title: 'Islamic Witnesses',
    description:
      'The Nikah requires either two Muslim men, or one Muslim man and two Muslim women as witnesses. Witnesses may be present in person or online when needed.',
  },
];

const vendorCategories = [
  {
    number: '1',
    icon: 'person',
    title: 'Licensed Imams & Officiants',
    description:
      'Book someone who can perform the Nikah and guide you through the process.',
  },
  {
    number: '2',
    icon: 'mosque',
    title: 'Mosques & Islamic Centres',
    description:
      'Find local mosques and Islamic centres for your Nikah ceremony.',
  },
  {
    number: '3',
    icon: 'camera',
    title: 'Photographers',
    description:
      'Capture your day with experienced wedding photographers.',
  },
  {
    number: '4',
    icon: 'building',
    title: 'Venues',
    description:
      'Explore beautiful venues, halls, homes, or simple spaces for your Nikah.',
  },
  {
    number: '5',
    icon: 'servingDish',
    title: 'Catering',
    description:
      'Choose halal catering options for your family and guests.',
  },
  {
    number: '6',
    icon: 'heart',
    title: 'Marriage Prep / Counselling',
    description:
      'Get support with pre-marriage guidance and counselling.',
  },
];

const bringOnTheDay = [
  'Bride and groom names',
  'Wali contact or representation',
  'Mahr details',
  'Witness names',
  'Marriage licence',
  'Any IDs or forms needed',
];

export const metadata = buildMetadata({
  title: 'The Simple Nikah Guide',
  description:
    'View the complete Nikah planning guide for Islamic ceremony requirements, Ontario marriage licence steps, trusted officiants, and wedding vendors.',
  path: siteContent.guide.onlinePath,
});

function PageNumber({ current }) {
  return (
    <span className="digital-guide__page-number" aria-label={`Page ${current} of 4`}>
      {current} / 4
    </span>
  );
}

function WoodPanel() {
  return (
    <aside className="digital-guide__wood-panel" aria-hidden="true">
      <div className="digital-guide__brand-mark">
        <strong>M</strong>
        <span>
          Meezan
          <small>can connect you.</small>
        </span>
      </div>
    </aside>
  );
}

function FloralDetail() {
  return (
    <span className="digital-guide__floral" aria-hidden="true">
      <i />
      <i />
      <i />
      <i />
      <i />
    </span>
  );
}

export default function NikahPlanningGuidePage() {
  const meezanSearchUrl =
    'https://meezanapp.com/search?level1Service=6826aad535473d1156c63f2b';

  return (
    <div className="digital-guide">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <header className="digital-guide__toolbar">
        <div>
          <span className="eyebrow">Free Online Resource</span>
          <h1>The Simple Nikah Guide</h1>
          <p>
            Read the complete guide online or keep the original four-page PDF
            for easy reference.
          </p>
        </div>
        <nav className="digital-guide__jump-links" aria-label="Guide sections">
          <a href="#guide-overview">Overview</a>
          <a href="#ontario-licence">Ontario Licence</a>
          <a href="#islamic-requirements">Islamic Requirements</a>
          <a href="#trusted-support">Trusted Support</a>
        </nav>
        <a
          className="button button--primary"
          href={siteContent.guide.downloadPath}
          download="nikah-guide.pdf"
        >
          Download Nikah Guide
        </a>
      </header>

      <article
        className="digital-guide__page digital-guide__page--with-wood"
        id="guide-overview"
      >
        <WoodPanel />
        <div className="digital-guide__page-content">
          <FloralDetail />
          <PageNumber current="1" />

          <header className="digital-guide__page-heading">
            <span>The</span>
            <h2>Simple Nikah Guide</h2>
            <p>A Complete Overview</p>
          </header>

          <div className="digital-guide__overview-grid">
            <section className="digital-guide__overview-card">
              <span className="digital-guide__round-icon">
                <Icon name="mosque" />
              </span>
              <div className="digital-guide__numbered-title">
                <span>1</span>
                <h3>Islamic Requirements</h3>
              </div>
              <ul>
                <li>Bride and groom consent</li>
                <li>The presence of a Wali (male guardian for the bride)</li>
                <li>An agreed upon Mahr (bridal gift)</li>
                <li>Muslim witnesses present</li>
                <li>An Imam or officiant to perform the Nikah</li>
              </ul>
            </section>

            <section className="digital-guide__overview-card">
              <span className="digital-guide__round-icon">
                <Icon name="document" />
              </span>
              <div className="digital-guide__numbered-title">
                <span>2</span>
                <h3>Ontario Legal Requirements</h3>
              </div>
              <ul>
                <li>Ontario marriage licence</li>
                <li>Registered marriage officiant</li>
                <li>Bring the licence on the wedding day</li>
                <li>Legal paperwork completed after the ceremony</li>
                <li>Marriage certificate ordered after registration</li>
              </ul>
            </section>

            <section className="digital-guide__overview-card">
              <span className="digital-guide__round-icon">
                <Icon name="community" />
              </span>
              <div className="digital-guide__numbered-title">
                <span>3</span>
                <h3>Trusted Imams &amp; Vendors</h3>
              </div>
              <ul>
                <li>Licensed imams and officiants</li>
                <li>Mosques and Islamic centres</li>
                <li>Photographers, venues, and catering</li>
                <li>Marriage prep and counselling support</li>
                <li>Book through MeezanApp or your trusted imam list</li>
              </ul>
            </section>
          </div>

          <aside className="digital-guide__notice">
            <span>!</span>
            <p>
              <strong>Important:</strong> A Nikah alone is not automatically a
              legal marriage in Ontario. If you want one ceremony for both,
              make sure your officiant is registered.
            </p>
          </aside>

          <p className="digital-guide__tip">
            <Icon name="sparkle" />
            <span>
              <strong>Tip:</strong> An Ontario marriage licence is valid for 3
              months, so do not apply too early.
            </span>
          </p>
        </div>
      </article>

      <article className="digital-guide__page" id="ontario-licence">
        <div className="digital-guide__page-content digital-guide__page-content--full">
          <PageNumber current="2" />
          <header className="digital-guide__page-heading digital-guide__page-heading--step">
            <span>Step 1:</span>
            <h2>Get Your Ontario Marriage Licence</h2>
            <p>
              A Nikah alone is not automatically a legal marriage in Ontario.
              Follow these steps for the government process.
            </p>
          </header>

          <div className="digital-guide__licence-layout">
            <ol className="digital-guide__timeline">
              {licenceSteps.map((step, index) => (
                <li key={step.title}>
                  <span>{index + 1}</span>
                  <div>
                    <h3>{step.title}</h3>
                    <p>{step.description}</p>
                  </div>
                </li>
              ))}
            </ol>

            <aside className="digital-guide__urgent-card">
              <span className="digital-guide__round-icon">
                <Icon name="clock" />
              </span>
              <h3>Need It Quicker?</h3>
              <ul>
                <li>Apply online first for your Ontario marriage certificate.</li>
                <li>
                  About 1 week after the imam mails the marriage licence,
                  submit an urgent request to the Office of the Registrar General.
                </li>
                <li>
                  Keep your marriage licence number, date of marriage,
                  application reference, and tracking number ready for the day
                  of the wedding to complete paperwork.
                </li>
              </ul>
              <div className="digital-guide__phone-note">
                <Icon name="phone" />
                <p>
                  <strong>Urgent processing contact:</strong>
                  <a href="tel:18004612156">Toll Free: 800-461-2156</a>
                  <span>or</span>
                  <a href="tel:14163258305">416-325-8305</a>
                </p>
              </div>
            </aside>
          </div>

          <div className="digital-guide__resource-links">
            <p>
              <strong>Marriage licence:</strong>
              <a
                href="https://www.ontario.ca/page/apply-marriage-licence-online"
                target="_blank"
                rel="noopener noreferrer"
              >
                ontario.ca/page/apply-marriage-licence-online
              </a>
            </p>
            <p>
              <strong>Marriage certificate:</strong>
              <a
                href="https://www.ontario.ca/page/how-get-copy-ontario-marriage-certificate-online"
                target="_blank"
                rel="noopener noreferrer"
              >
                ontario.ca/page/how-get-copy-ontario-marriage-certificate-online
              </a>
            </p>
            <p>
              <strong>Urgent request:</strong>
              <a
                href="https://www.ontario.ca/page/send-request-office-registrar-general"
                target="_blank"
                rel="noopener noreferrer"
              >
                ontario.ca/page/send-request-office-registrar-general
              </a>
            </p>
          </div>
        </div>
      </article>

      <article
        className="digital-guide__page digital-guide__page--with-wood"
        id="islamic-requirements"
      >
        <WoodPanel />
        <div className="digital-guide__page-content">
          <FloralDetail />
          <PageNumber current="3" />
          <header className="digital-guide__page-heading digital-guide__page-heading--step">
            <span>Step 2:</span>
            <h2>Complete the Islamic Nikah Requirements</h2>
          </header>

          <div className="digital-guide__requirements-layout">
            <div className="digital-guide__requirement-list">
              {nikahRequirements.map((requirement) => (
                <section className="digital-guide__requirement-card" key={requirement.title}>
                  <span className="digital-guide__requirement-number">
                    {requirement.number}
                  </span>
                  <span className="digital-guide__round-icon">
                    <Icon name={requirement.icon} />
                  </span>
                  <div>
                    <h3>{requirement.title}</h3>
                    <p>{requirement.description}</p>
                    {requirement.details ? (
                      <div className="digital-guide__mahr-details">
                        {requirement.details.map(([label, detail]) => (
                          <span key={label || detail}>
                            {label ? <strong>{label}:</strong> : null} {detail}
                          </span>
                        ))}
                      </div>
                    ) : null}
                  </div>
                </section>
              ))}
            </div>

            <aside className="digital-guide__checklist">
              <span className="digital-guide__round-icon">
                <Icon name="clipboard" />
              </span>
              <h3>Bring on the Day</h3>
              <div className="digital-guide__rule" />
              <ul>
                {bringOnTheDay.map((item) => (
                  <li key={item}>
                    <Icon name="check" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </aside>
          </div>

          <aside className="digital-guide__notice digital-guide__notice--small">
            <span>!</span>
            <p>
              If your mahr or wali situation is complicated, speak to an
              experienced imam for guidance.
            </p>
          </aside>
        </div>
      </article>

      <article className="digital-guide__page" id="trusted-support">
        <div className="digital-guide__page-content digital-guide__page-content--full">
          <PageNumber current="4" />
          <header className="digital-guide__page-heading digital-guide__page-heading--step">
            <span>Step 3:</span>
            <h2>Book a Trusted Imam, Officiant &amp; Vendors</h2>
            <p>
              Choose someone who can support your Nikah properly. Make sure the
              officiant is registered.
            </p>
          </header>

          <div className="digital-guide__vendor-grid">
            {vendorCategories.map((category) => (
              <section className="digital-guide__vendor-card" key={category.title}>
                <span className="digital-guide__round-icon">
                  <Icon name={category.icon} />
                </span>
                <span className="digital-guide__vendor-number">{category.number}</span>
                <h3>{category.title}</h3>
                <div className="digital-guide__rule" />
                <p>{category.description}</p>
              </section>
            ))}
          </div>

          <div className="digital-guide__vendor-actions">
            <a
              className="digital-guide__vendor-button digital-guide__vendor-button--solid"
              href={meezanSearchUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon name="person" />
              Full Imam List
            </a>
            <a
              className="digital-guide__vendor-button"
              href={meezanSearchUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon name="phone" />
              Book on MeezanApp
            </a>
          </div>

          <aside className="digital-guide__notice digital-guide__notice--wide">
            <Icon name="check" />
            <p>
              Streamline your event preparation with expert coordination across
              all venues, vendors, and officiants.
            </p>
          </aside>
        </div>
      </article>

      <section className="digital-guide__closing">
        <div>
          <span className="eyebrow">Ready to Plan Your Ceremony?</span>
          <h2>Book a Nikah Consultation</h2>
          <p>
            Share your date, location, and whether you need a religious Nikah,
            Ontario legal officiation, or both.
          </p>
        </div>
        <div className="content-actions">
          <Link className="button button--primary" href="/contact">
            Contact Imam Zaniar Ahmad
          </Link>
          <a
            className="button button--ghost"
            href={siteContent.guide.downloadPath}
            download="nikah-guide.pdf"
          >
            Download Nikah Guide
          </a>
        </div>
      </section>
    </div>
  );
}
