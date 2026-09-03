import { Link } from 'react-router-dom';
import './Home.css';

const UPLOADS = 'https://spinalcsfleakaustralia.org/wp-content/uploads/2026/01';

export default function Home() {
  return (
    <main id="main-content">
      <section className="hero">
        <div className="container">
          <h1>
            An Australian charity aiming to create a brighter future for people experiencing
            Spinal Cerebrospinal Fluid (CSF) Leak
          </h1>
          <div className="hero__actions">
            <Link to="/donate" className="btn btn--accent">
              Donate
            </Link>
            <Link to="/information/what-is-a-spinal-csf-leak" className="btn btn--outline">
              Learn about spinal CSF leaks
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="home-feature">
            <img
              src={`${UPLOADS}/rsw_1200h_1200cg_truem-1024x1024.webp`}
              alt=""
              className="home-feature__image"
              loading="lazy"
            />
            <div>
              <h2>Our Purpose</h2>
              <p>
                To improve quality of life for people with spinal CSF leaks through improved
                access to timely, effective, and supportive care in Australia.
              </p>
              <Link to="/about-us/vision-goals" className="btn btn--outline">
                About Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--tint">
        <div className="container">
          <div className="home-feature home-feature--reverse">
            <img
              src={`${UPLOADS}/CSF-Leak-Association-UK-1024x1024.webp`}
              alt="CSF Leak Association UK documentary thumbnail"
              className="home-feature__image"
              loading="lazy"
            />
            <div>
              <h2>Chronic Headache Mystery — Hidden Stream: The Untold Story of a CSF Leak</h2>
              <p>
                This documentary follows Dr. Bern Hard's journey through a spinal CSF leak, a
                debilitating yet treatable condition that remains widely under-recognised.
                Through personal experience and expert insight, the film exposes the urgent need
                for earlier diagnosis, equitable access to care, and full implementation of the UK
                consensus guidelines. Spontaneous Intracranial Hypotension (SIH) must be treated
                as a medical emergency, not a rare curiosity.
              </p>
              <a
                className="btn btn--outline"
                href="https://www.youtube.com/watch?v=chUEvsxt6Zw"
                target="_blank"
                rel="noopener noreferrer"
              >
                Watch on YouTube
                <span className="visually-hidden"> (opens in a new tab)</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="home-feature">
            <img
              src={`${UPLOADS}/How-you-can-help-1024x1024.webp`}
              alt=""
              className="home-feature__image"
              loading="lazy"
            />
            <div>
              <h2>How you can help…</h2>
              <p>
                Spinal CSF Leak Australia is an entirely volunteer-run charity operating on
                minimal funding. If you would like to donate your time and use your experience in
                helping us achieve our purpose, please either see our current volunteer roles or
                complete the Skills Survey.
              </p>
              <Link to="/get-involved/volunteer" className="btn btn--outline">
                Get Involved
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--dark">
        <div className="container home-donate">
          <img
            src={`${UPLOADS}/Registered-Charity.webp`}
            alt="Spinal CSF Leak Australia is a registered charity under the ACNC"
            className="home-donate__badge"
            loading="lazy"
          />
          <div>
            <h2>Registered Charity</h2>
            <p>
              Your donation to <strong>Spinal CSF Leak Australia</strong> helps our vital work
              supporting people affected by spinal cerebrospinal fluid (CSF) leaks. As a{' '}
              <strong>volunteer-run registered charity</strong> with{' '}
              <strong>Deductible Gift Recipient (DGR) status</strong>, all donations over $2 are{' '}
              <strong>tax-deductible</strong>. Every contribution — large or small — directly
              supports the essential costs of running the charity, such as insurance, website
              hosting, and compliance, while also funding future{' '}
              <strong>awareness and education initiatives</strong>. By donating, you're helping us
              raise the profile of this under-recognised condition and improve access to
              diagnosis and treatment for people living with spinal CSF leaks across Australia.
            </p>
            <a
              className="btn btn--accent"
              href="https://www.givenow.com.au/spinalcsfleakaustralia"
              target="_blank"
              rel="noopener noreferrer"
            >
              Donate Now<span className="visually-hidden"> (opens in a new tab)</span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
