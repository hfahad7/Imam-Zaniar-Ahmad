import Image from 'next/image';

export default function Home() {
  return (
    <>
      <nav className="nav">
        <div className="nav-logo">Imam Zaniar Ahmad</div>
        <div className="nav-links">
          <a href="#bio">About</a>
          <a href="#weddings">Weddings</a>
          <a href="#lectures">Lectures</a>
          <a href="#questions">Questions</a>
        </div>
      </nav>

      <section className="hero">
        <Image
          src="/images/zaniar-ahmad.jpg"
          alt="Imam Zaniar Ahmad smiling, wearing a black thobe"
          width={200}
          height={200}
          className="hero-photo"
          priority
        />
        <h1>Imam Zaniar Ahmad</h1>
        <p>
          Officiating weddings, delivering lectures, and answering your
          questions about Islam with clarity and compassion.
        </p>
        <div className="button-group">
          <a className="btn btn-primary" href="#weddings">
            Book a Wedding
          </a>
          <a className="btn btn-secondary" href="#lectures">
            Book a Lecture
          </a>
        </div>
      </section>

      <section className="content-section" id="bio">
        <h2>About Imam Zaniar Ahmad</h2>
        <p>
          Imam Zaniar Ahmad is dedicated to serving the Muslim community
          through education, ceremony, and guidance. Beyond his work as an
          imam, he is involved with several projects supporting the
          community:
        </p>

        <div className="project-grid">
          <div className="feature-card">
            <h3>AutoAjr.com</h3>
            <p>Learn more about this project and how it supports the community.</p>
            
              className="btn btn-secondary btn-small"
              href="https://autoajr.com"
              target="_blank"
              rel="noreferrer"
            >
              Learn More
            </a>
          </div>

          <div className="feature-card">
            <h3>MeezanApp.com</h3>
            <p>Learn more about this project and how it supports the community.</p>
            
              className="btn btn-secondary btn-small"
              href="https://meezanapp.com"
              target="_blank"
              rel="noreferrer"
            >
              Learn More
            </a>
          </div>

          <div className="feature-card">
            <h3>Zakah.com</h3>
            <p>Learn more about this project and how it supports the community.</p>
            
              className="btn btn-secondary btn-small"
              href="https://zakah.com"
              target="_blank"
              rel="noreferrer"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>

      <section className="content-section alt-bg" id="weddings">
        <h2>Wedding (Nikah) Officiating</h2>
        <p>
          Imam Zaniar Ahmad officiates Islamic wedding ceremonies (nikah)
          for couples, providing guidance through the process and a
          meaningful, tradition-rooted ceremony for your special day.
        </p>
        <div className="feature-card">
          <h3>What's Included</h3>
          <p>
            Pre-marital counseling, ceremony officiating, and marriage
            contract (aqd) guidance tailored to your family's traditions.
          </p>
        </div>
        
          className="btn btn-primary"
          href="mailto:youremail@example.com?subject=Wedding%20Inquiry"
        >
          Request a Consultation
        </a>
      </section>

      <section className="content-section" id="lectures">
        <h2>Book a Lecture or Conference</h2>
        <p>
          Imam Zaniar Ahmad is available to speak at community events,
          conferences, and gatherings on topics in Islamic theology,
          daily practice, and contemporary issues facing Muslims today.
        </p>
        <div className="feature-card">
          <h3>Popular Topics</h3>
          <p>
            Faith &amp; resilience, raising Muslim children in the West,
            the etiquette of seeking knowledge, and more.
          </p>
        </div>
        
          className="btn btn-primary"
          href="mailto:youremail@example.com?subject=Speaking%20Request"
        >
          Request a Booking
        </a>
      </section>

      <section className="content-section alt-bg" id="questions">
        <h2>Ask a Question</h2>
        <p>
          Have a question about Islam, worship, or daily practice? Reach
          out directly and Imam Zaniar Ahmad will respond personally.
        </p>
        
          className="btn btn-primary"
          href="mailto:youremail@example.com?subject=Question"
        >
          Send a Question
        </a>
      </section>

      <footer className="footer" id="footer">
        <p>Imam Zaniar Ahmad &middot; {new Date().getFullYear()}</p>
      </footer>
    </>
  );
}
