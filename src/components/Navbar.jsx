import { useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { navigation } from '../data/navigation';
import ThemeToggle from './ThemeToggle';
import './Navbar.css';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const navRef = useRef(null);

  // Close the mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  // Close the mobile menu on Escape or on click outside it
  useEffect(() => {
    function onKeyDown(e) {
      if (e.key === 'Escape') setMobileOpen(false);
    }
    function onClickOutside(e) {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setMobileOpen(false);
      }
    }
    document.addEventListener('keydown', onKeyDown);
    document.addEventListener('mousedown', onClickOutside);
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.removeEventListener('mousedown', onClickOutside);
    };
  }, []);

  const isSectionActive = (item) =>
    item.children
      ? location.pathname === item.path || location.pathname.startsWith(`${item.path}/`)
      : item.isHome
        ? location.pathname === '/'
        : location.pathname === item.path;

  return (
    <>
      <header className="site-header">
        <div className="container site-header__inner">
          <Link to="/" className="brand" aria-label="Spinal CSF Leak Australia — home">
            <img
              src={`${import.meta.env.BASE_URL}images/logo.svg`}
              alt=""
              className="brand__logo"
            />
          </Link>

          <button
            type="button"
            className="nav-toggle"
            aria-expanded={mobileOpen}
            aria-controls="primary-navigation"
            onClick={() => setMobileOpen((v) => !v)}
          >
            <span className="visually-hidden">
              {mobileOpen ? 'Close main menu' : 'Open main menu'}
            </span>
            <span className="nav-toggle__icon" aria-hidden="true" />
          </button>

          <nav
            id="primary-navigation"
            ref={navRef}
            className={`primary-nav${mobileOpen ? ' primary-nav--open' : ''}`}
            aria-label="Primary"
          >
            <ul className="primary-nav__list">
              {navigation.map((item) => {
                const active = isSectionActive(item);
                if (item.isCta) {
                  return (
                    <li key={item.path} className="primary-nav__item">
                      <Link to={item.path} className="btn btn--accent nav-cta">
                        {item.label}
                      </Link>
                    </li>
                  );
                }
                if (!item.children) {
                  return (
                    <li key={item.path} className="primary-nav__item">
                      <NavLink
                        to={item.path}
                        end={item.isHome}
                        className={({ isActive }) =>
                          `primary-nav__link${isActive ? ' is-active' : ''}`
                        }
                      >
                        {item.label}
                      </NavLink>
                    </li>
                  );
                }
                return (
                  <li
                    key={item.path}
                    className={`primary-nav__item has-dropdown${active ? ' is-active' : ''}`}
                  >
                    <Link
                      to={item.path}
                      className={`primary-nav__link${active ? ' is-active' : ''}`}
                    >
                      {item.label}
                    </Link>
                    <ul className="dropdown-menu">
                      {item.children.map((child) => (
                        <li key={child.path}>
                          <NavLink
                            to={child.path}
                            className={({ isActive }) =>
                              `dropdown-menu__link${isActive ? ' is-active' : ''}`
                            }
                          >
                            {child.label}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Positioned out of normal document flow (see .theme-switch-row
              in Navbar.css) so it doesn't push page content down — it just
              floats under the navbar. The inner .container reuses the same
              padding as the navbar's own content, so "justify-content:
              flex-end" lines its right edge up with Donate's, exactly. */}
          <div className="theme-switch-row">
            <div className="container theme-switch-row__inner">
              <ThemeToggle />
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
