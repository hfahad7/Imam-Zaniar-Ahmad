export default function Home() {
  return (
    <>
      <nav className="nav">
        <div className="nav-logo">My Site</div>
        <div className="nav-links">
          <a href="#features">Features</a>
          <a href="#footer">Contact</a>
        </div>
      </nav>

      <section className="hero">
        <h1>Build something great.</h1>
        <p>
          A clean, simple starting point built with Next.js. Edit
          app/page.js to make it your own.
        </p>
        <div className="button-group">
          <a className="btn btn-primary" href="#features">
            Get Started
          </a>
          <a
            className="btn btn-secondary"
            href="https://nextjs.org/docs"
            target="_blank"
            rel="noreferrer"
          >
            Read the Docs
          </a>
        </div>
      </section>

      <section className="features" id="features">
        <div className="feature-card">
          <h3>Fast</h3>
          <p>Powered by Next.js for quick page loads and smooth navigation.</p>
        </div>
        <div className="feature-card">
          <h3>Simple</h3>
          <p>A minimal setup with no extra dependencies to get in your way.</p>
        </div>
        <div className="feature-card">
          <h3>Customizable</h3>
          <p>Easy to edit and extend as your project grows.</p>
        </div>
      </section>

      <footer className="footer" id="footer">
        <p>Made with Next.js &middot; {new Date().getFullYear()}</p>
      </footer>
    </>
  );
}
