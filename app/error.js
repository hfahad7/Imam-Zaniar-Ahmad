'use client';

export default function ErrorPage({ reset }) {
  return (
    <div className="page-shell error-page" role="alert">
      <span className="eyebrow">Something went wrong</span>
      <h1>This page could not be loaded.</h1>
      <p>
        Please try again. If the problem continues, use the contact details in
        the footer to reach Imam Zaniar Ahmad directly.
      </p>
      <button className="button button--primary" type="button" onClick={() => reset()}>
        Try again
      </button>
    </div>
  );
}
