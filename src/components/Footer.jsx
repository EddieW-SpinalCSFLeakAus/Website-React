import { Link } from 'react-router-dom';
import { navigation } from '../data/navigation';
import './Footer.css';

const footerColumns = navigation.filter((item) => item.children);

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container site-footer__inner">
        <div className="site-footer__about">
          <p className="brand__name" style={{ color: 'var(--text-on-dark)' }}>
            Spinal CSF Leak Australia
          </p>
          <p>
            We support Australians affected by spinal CSF leaks through information, advocacy,
            support and research.
          </p>
          <p>
            <a href="mailto:hello@spinalcsfleakaustralia.org">
              hello@spinalcsfleakaustralia.org
            </a>
          </p>
        </div>

        <nav className="site-footer__columns" aria-label="Footer">
          {footerColumns.map((column) => (
            <div key={column.path}>
              <h2>{column.label}</h2>
              <ul>
                {column.children.slice(0, 6).map((child) => (
                  <li key={child.path}>
                    <Link to={child.path}>{child.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div>
            <h2>Contact</h2>
            <ul>
              <li>
                <Link to="/contact-us">Contact form</Link>
              </li>
              <li>
                <Link to="/donate">Donate</Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>

      <div className="site-footer__bottom">
        <div className="container site-footer__bottom-inner">
          <p>&copy; {new Date().getFullYear()} Spinal CSF Leak Australia. All rights reserved.</p>
          <p>
            <Link to="/about-us/policies">Privacy Policy</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
