import { Link } from 'react-router-dom';

// `trail` is an array of { label, path? } — the last item (current page)
// should omit `path` and gets aria-current="page".
export default function Breadcrumbs({ trail }) {
  return (
    <nav className="breadcrumbs" aria-label="Breadcrumb">
      <ol>
        {trail.map((crumb, i) => {
          const isLast = i === trail.length - 1;
          return (
            <li key={crumb.label} aria-current={isLast ? 'page' : undefined}>
              {crumb.path && !isLast ? <Link to={crumb.path}>{crumb.label}</Link> : crumb.label}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
