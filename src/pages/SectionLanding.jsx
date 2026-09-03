import { Link } from 'react-router-dom';
import Breadcrumbs from '../components/Breadcrumbs';
import { pageContent } from '../data/pageContent';

export default function SectionLanding({ item }) {
  return (
    <main id="main-content" className="container page-main">
      <Breadcrumbs trail={[{ label: 'Home', path: '/' }, { label: item.label }]} />
      <h1>{item.label}</h1>
      <p>Explore everything under {item.label.toLowerCase()}:</p>

      <div className="grid grid--3 section-landing__grid">
        {item.children.map((child) => {
          const isStub = pageContent[child.path]?.isStub;
          return (
            <Link to={child.path} className="card" key={child.path}>
              <h3>{child.label}</h3>
              <p>{isStub ? 'Coming soon' : 'Read more →'}</p>
            </Link>
          );
        })}
      </div>
    </main>
  );
}
