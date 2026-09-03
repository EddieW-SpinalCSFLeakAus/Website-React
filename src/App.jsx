import { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import SkipLink from './components/SkipLink';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import ClinicianDirectory from './pages/ClinicianDirectory';
import Contact from './pages/Contact';
import Donate from './pages/Donate';
import SectionLanding from './pages/SectionLanding';
import GenericPage from './pages/GenericPage';
import NotFound from './pages/NotFound';
import { navigation } from './data/navigation';

// On every route change: send focus to the page's main content region and
// scroll to the top. Without this, SPA navigation silently leaves keyboard
// and screen-reader focus wherever it was on the previous page.
function RouteAnnouncer() {
  const location = useLocation();

  useEffect(() => {
    const main = document.getElementById('main-content');
    if (main) {
      main.setAttribute('tabIndex', '-1');
      main.focus({ preventScroll: true });
    }
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return null;
}

export default function App() {
  return (
    <>
      <SkipLink />
      <Navbar />
      <RouteAnnouncer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resources/clinician-directory" element={<ClinicianDirectory />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/donate" element={<Donate />} />

        {navigation
          .filter((item) => item.children)
          .flatMap((item) => [
            <Route
              key={item.path}
              path={item.path}
              element={<SectionLanding item={item} />}
            />,
            ...item.children
              .filter((child) => child.path !== '/resources/clinician-directory')
              .map((child) => (
                <Route
                  key={child.path}
                  path={child.path}
                  element={<GenericPage path={child.path} />}
                />
              )),
          ])}

        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}
