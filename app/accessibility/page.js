import { buildMetadata } from '../../lib/metadata';

export const metadata = buildMetadata({
  title: 'Accessibility Statement',
  description:
    "Accessibility statement describing keyboard support, contrast, semantics, responsive layout, and the site's accessibility goals.",
  path: '/accessibility',
});

export default function AccessibilityPage() {
  return (
    <div className="page-shell">
      <section className="page-hero">
        <span className="eyebrow">Accessibility</span>
        <h1>Accessibility Statement</h1>
        <p className="section-lead">
          The website is designed to work well with keyboard navigation, screen
          readers, mobile devices, and reduced-motion preferences.
        </p>
      </section>

      <section className="section prose">
        <h2>Current Goals</h2>
        <p>
          The site aims for WCAG 2.2 AA friendly patterns: semantic landmarks,
          clear heading structure, visible focus states, readable contrast, and
          descriptive links.
        </p>

        <h2>Keyboard Support</h2>
        <p>
          Navigation, buttons, and forms are built to work with a keyboard from
          the start. A skip link is available at the top of the page.
        </p>

        <h2>Images and Text</h2>
        <p>
          Important content remains in HTML, and the hero image includes
          meaningful alternative text. Decorative elements should remain empty
          when they do not add information.
        </p>

        <h2>Forms and Errors</h2>
        <p>
          The contact form uses visible labels, concise help text, and simple
          error messaging.
        </p>

        <h2>Motion and Responsiveness</h2>
        <p>
          The site respects reduced-motion preferences and is built to stay
          usable on mobile, tablet, and desktop without horizontal overflow.
        </p>
      </section>
    </div>
  );
}
