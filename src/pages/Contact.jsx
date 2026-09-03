import { useId, useState } from 'react';
import emailjs from '@emailjs/browser';
import Breadcrumbs from '../components/Breadcrumbs';
import './Contact.css';

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
const isConfigured = Boolean(SERVICE_ID && TEMPLATE_ID && PUBLIC_KEY);

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '', website: '' });
  const [status, setStatus] = useState('idle'); // idle | sending | success | error
  const nameId = useId();
  const emailId = useId();
  const messageId = useId();

  function handleChange(e) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();

    // Honeypot: real users never fill this hidden field, bots often do.
    if (form.website) return;

    if (!isConfigured) {
      setStatus('error');
      return;
    }

    setStatus('sending');
    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
          to_email: 'eddie.weatherhead@spinalcsfleakaustralia.org',
        },
        { publicKey: PUBLIC_KEY },
      );
      setStatus('success');
      setForm({ name: '', email: '', message: '', website: '' });
    } catch (err) {
      console.error(err);
      setStatus('error');
    }
  }

  return (
    <main id="main-content" className="container page-main">
      <Breadcrumbs trail={[{ label: 'Home', path: '/' }, { label: 'Contact Us' }]} />
      <h1>Contact Us</h1>
      <p>Spinal CSF Leak Australia is a volunteer-run charity.</p>

      <div className="grid grid--2 contact-grid">
        <div className="stack">
          <div className="card">
            <h2>Email us</h2>
            <p>
              <a href="mailto:hello@spinalcsfleakaustralia.org">
                hello@spinalcsfleakaustralia.org
              </a>
            </p>
          </div>

          <div className="card">
            <h2>Looking for patient support?</h2>
            <p>
              If you are a patient seeking support, you could join the unaffiliated{' '}
              <a
                href="https://www.facebook.com/share/g/1EtkkUpXZn/"
                target="_blank"
                rel="noopener noreferrer"
              >
                CSF Leakers DownUnder Patient Support Group on Facebook
                <span className="visually-hidden"> (opens in a new tab)</span>
              </a>
              .
            </p>
          </div>

          <div className="card">
            <h2>Follow us</h2>
            <p className="coming-soon-banner" role="note" style={{ marginBottom: 0 }}>
              <strong>Coming soon —</strong> official social media links will be added here.
            </p>
          </div>

          <div className="card">
            <h2>Newsletter</h2>
            <p className="coming-soon-banner" role="note" style={{ marginBottom: 0 }}>
              <strong>Coming soon —</strong> newsletter sign-up will be added here.
            </p>
          </div>
        </div>

        <form className="card contact-form" onSubmit={handleSubmit} noValidate>
          <h2>Send us a message</h2>

          {/* Honeypot field — hidden from sighted & AT users, bots often fill it in */}
          <div className="visually-hidden" aria-hidden="true">
            <label htmlFor="website">Leave this field empty</label>
            <input
              id="website"
              name="website"
              type="text"
              tabIndex={-1}
              autoComplete="off"
              value={form.website}
              onChange={handleChange}
            />
          </div>

          <div className="contact-form__field">
            <label htmlFor={nameId}>Name</label>
            <input
              id={nameId}
              name="name"
              type="text"
              required
              autoComplete="name"
              value={form.name}
              onChange={handleChange}
            />
          </div>

          <div className="contact-form__field">
            <label htmlFor={emailId}>Email</label>
            <input
              id={emailId}
              name="email"
              type="email"
              required
              autoComplete="email"
              value={form.email}
              onChange={handleChange}
            />
          </div>

          <div className="contact-form__field">
            <label htmlFor={messageId}>Message</label>
            <textarea
              id={messageId}
              name="message"
              rows={6}
              required
              value={form.message}
              onChange={handleChange}
            />
          </div>

          <button type="submit" className="btn" disabled={status === 'sending'}>
            {status === 'sending' ? 'Sending…' : 'Send message'}
          </button>

          <div role="status" aria-live="polite" className="contact-form__status">
            {status === 'success' && 'Thank you — your message has been sent.'}
            {status === 'error' && !isConfigured &&
              'The contact form isn’t connected to an email service yet. See README.md → “Setting up the contact form”. In the meantime, please email hello@spinalcsfleakaustralia.org directly.'}
            {status === 'error' && isConfigured &&
              'Sorry, something went wrong sending your message. Please try again, or email hello@spinalcsfleakaustralia.org directly.'}
          </div>
        </form>
      </div>
    </main>
  );
}
