import { buildMetadata } from '../../lib/metadata';
import { siteContent } from '../../lib/site-content';

export const metadata = buildMetadata({
  title: 'Privacy Policy',
  description:
    'Read how the website handles contact-form submissions, analytics placeholders, and basic privacy expectations.',
  path: '/privacy',
});

export default function PrivacyPage() {
  return (
    <div className="page-shell">
      <section className="page-hero">
        <span className="eyebrow">Privacy</span>
        <h1>Privacy policy</h1>
        <p className="section-lead">
          This policy explains how the site handles the information visitors
          choose to send through the contact form or through direct contact
          methods.
        </p>
      </section>

      <section className="section prose">
        <h2>What we collect</h2>
        <p>
          The site only collects information that visitors choose to submit, such
          as name, email, phone number, booking details, and message content.
        </p>

        <h2>How we use it</h2>
        <p>
          Submitted details are used to respond to booking requests, review
          availability, and follow up on the service requested.
        </p>

        <h2>Email delivery</h2>
        <p>
          The contact form is intended to send requests to the server-side
          destination email configured for the site. The destination address is
          kept out of the public UI.
        </p>

        <h2>Verification and spam protection</h2>
        <p>
          The form uses a honeypot, timing checks, and Cloudflare Turnstile when
          configured.
        </p>

        <h2>Analytics</h2>
        <p>
          Optional analytics and webmaster tools can be added later only when the
          owner supplies real IDs and chooses to activate them.
        </p>

        <h2>Direct contact</h2>
        <p>
          People may also call or text {siteContent.contact.phoneDisplay} or send
          a message on Instagram at @zanahmad.
        </p>
      </section>
    </div>
  );
}
