import Image from 'next/image';

export default function Home() {
  return (
    <>
      <nav className="nav">
        <div className="nav-logo">Imam Zaniar Ahmad</div>
        <div className="nav-links">
          <a href="#lectures">Lectures</a>
          <a href="#weddings">Weddings</a>
          <a href="#questions">Questions</a>
        </div>
      </nav>

      <section className="hero">
        <Image
          src="/images/zan.jpg"
          alt="Imam Zaniar Ahmad smiling, wearing a black thobe"
          width={200}
          height={200}
          className="hero-photo"
          priority
        />
        <h1>Imam Zaniar Ahmad</h1>
        <p>
          Sharing Islamic knowledge, officiating weddings, and answering
          your questions with clarity and compassion.
        </p>
        <div className="button-group">
          <a className="btn btn-primary" href="#lectures">
            Watch Lectures
          </a>
          <a className="btn btn-secondary" href="#questions">
            Ask a Question
          </a>
        </div>
      </section>

      <section className="content-section" id="lectures">
        <h2>Islamic Lectures</h2>
        <p>
          Explore lectures on Islamic theology, daily practice, and
          contemporary issues facing Muslims today. New lectures are added
          regularly, covering topics from Quranic reflection to practical
          guidance for modern life.
        </p>
        <div className="feature-card">
          <h3>Recent Topics</h3>
          <p>
            Faith &amp; resilience, raising Muslim children in the West,
            the etiquette of seeking knowledge, and more.
          </p>
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
        <a className="btn btn-primary" href="#questions">
          Inquire About Booking
        </a>
      </section>

      <section className="content-section" id="questions">
        <h2>Ask a Question</h2>
        <p>
          Have a question about Islam, worship, or daily practice? Reach
          out directly and Imam Zaniar Ahmad will respond personally.
        </p>
        <div className="feature-card">
          <h3>Common Topics</h3>
          <p>
            Prayer, fasting, family matters, and general guidance on
            living an Islamic life in a modern context.
          </p>
        </div>
        <a className="btn btn-primary" href="mailto:youremail@example.com">
          Send a Question
        </a>
      </section>

      <footer className="footer" id="footer">
        <p>Imam Zaniar Ahmad &middot; {new Date().getFullYear()}</p>
      </footer>
    </>
  );
}
