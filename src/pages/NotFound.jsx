import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <main id="main-content" className="container page-main">
      <h1>Page not found</h1>
      <p>Sorry, we couldn't find that page.</p>
      <Link to="/" className="btn">
        Back to home
      </Link>
    </main>
  );
}
