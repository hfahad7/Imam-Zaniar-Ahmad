import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="page-shell">
      <section className="page-hero">
        <span className="eyebrow">404</span>
        <h1>Page not found</h1>
        <p className="section-lead">
          The page you are looking for does not exist, but the main website is
          ready to help you find the right booking page.
        </p>
        <div className="content-actions">
          <Link className="button button--primary" href="/">
            Go home
          </Link>
          <Link className="button button--ghost" href="/contact">
            Contact the site
          </Link>
        </div>
      </section>
    </div>
  );
}
