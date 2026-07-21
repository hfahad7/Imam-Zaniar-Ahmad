import { buildMetadata } from '../../lib/metadata';
import { siteContent } from '../../lib/site-content';

export const metadata = buildMetadata({
  title: 'Privacy Policy',
  description:
    'Read how information submitted through the contact form is collected, used, and protected.',
  path: '/privacy',
});

export default function PrivacyPage() {
  return (
    <div className="page-shell">
      <section className="page-hero">
        <span className="eyebrow">Privacy</span>
        <h1>Privacy Policy</h1>
        <p className="section-lead">
          This policy explains how information you choose to share through the
          inquiry form or direct contact methods is handled.
        </p>
      </section>

      <section className="section prose">
        <h2>What We Collect</h2>
        <p>
          We only collect information you choose to submit, such as your name,
          email, phone number, booking details, and message.
        </p>

        <h2>How We Use It</h2>
        <p>
          Submitted details are used to respond to booking requests, review
          availability, and follow up on the service requested.
        </p>

        <h2>How Inquiries Are Delivered</h2>
        <p>
          Contact-form requests are delivered privately to the email address used
          to review and respond to inquiries.
        </p>

        <h2>Spam Protection</h2>
        <p>
          A security check may be used to reduce automated or unwanted messages.
        </p>

        <h2>Analytics</h2>
        <p>
          If analytics is enabled, privacy-conscious usage data may be collected
          to understand how people find and use the website.
        </p>

        <h2>Direct Contact</h2>
        <p>
          People may also call or text {siteContent.contact.phoneDisplay} or send
          a message on Instagram at @zanahmad.
        </p>
      </section>
    </div>
  );
}
