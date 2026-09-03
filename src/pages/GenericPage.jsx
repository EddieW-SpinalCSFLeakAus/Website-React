import { useLocation } from 'react-router-dom';
import Breadcrumbs from '../components/Breadcrumbs';
import { getBreadcrumbTrail } from '../data/navigation';
import { pageContent } from '../data/pageContent';

function ExternalOrInternalLink({ href, children, ...rest }) {
  const isExternal = /^https?:\/\//.test(href);
  return isExternal ? (
    <a href={href} target="_blank" rel="noopener noreferrer" {...rest}>
      {children} <span className="visually-hidden">(opens in a new tab)</span>
    </a>
  ) : (
    <a href={href} {...rest}>
      {children}
    </a>
  );
}

function Section({ section }) {
  const { type, heading } = section;

  return (
    <div className="page-section">
      {heading && <h2>{heading}</h2>}
      {section.intro && <p>{section.intro}</p>}
      {section.image !== undefined && (
        <img
          src={section.image}
          alt={section.imageAlt ?? ''}
          className="page-section__image"
          loading="lazy"
        />
      )}

      {type === 'text' &&
        section.paragraphs?.map((p, i) => <p key={i}>{p}</p>)}

      {type === 'list' && (
        <ul>
          {section.items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      )}

      {type === 'download' && (
        <p>
          <ExternalOrInternalLink href={section.linkHref} className="btn btn--outline">
            {section.linkLabel}
          </ExternalOrInternalLink>
        </p>
      )}

      {type === 'cta' && (
        <div className="cta-block">
          {section.body && <p>{section.body}</p>}
          <ExternalOrInternalLink href={section.linkHref} className="btn">
            {section.linkLabel}
          </ExternalOrInternalLink>
        </div>
      )}

      {type === 'cards' && (
        <div className={`grid ${section.columns ? `grid--${section.columns}` : 'grid--3'}`}>
          {section.items.map((card, i) => (
            <article className="card" key={i}>
              {card.image && (
                <img src={card.image} alt={card.imageAlt ?? ''} loading="lazy" />
              )}
              <h3>{card.title}</h3>
              {card.body && <p>{card.body}</p>}
              {card.list && (
                <ul>
                  {card.list.map((li, j) => (
                    <li key={j}>{li}</li>
                  ))}
                </ul>
              )}
              {card.linkHref && (
                <p>
                  <ExternalOrInternalLink href={card.linkHref}>
                    {card.linkLabel ?? 'Learn more'}
                  </ExternalOrInternalLink>
                </p>
              )}
            </article>
          ))}
        </div>
      )}

      {type === 'people' && (
        <div className={`grid ${section.columns ? `grid--${section.columns}` : 'grid--4'}`}>
          {section.items.map((person, i) => (
            <div className="person-card" key={i}>
              {person.image && (
                <img
                  src={person.image}
                  alt={`Photo of ${person.name}`}
                  className="person-card__photo"
                  loading="lazy"
                />
              )}
              <p className="person-card__name">{person.name}</p>
              {person.role && <p className="person-card__role">{person.role}</p>}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default function GenericPage({ content, path }) {
  const location = useLocation();
  const resolvedPath = path ?? location.pathname;
  const data = content ?? pageContent[resolvedPath];

  if (!data) {
    return (
      <main id="main-content" className="container page-main">
        <h1>Page not found in content data</h1>
        <p>No content is configured for {resolvedPath}.</p>
      </main>
    );
  }

  const trail = getBreadcrumbTrail(resolvedPath);

  return (
    <main id="main-content" className="container page-main">
      <Breadcrumbs trail={trail} />
      <h1>{data.title}</h1>

      {data.isStub && (
        <div className="coming-soon-banner" role="note">
          <strong>Coming soon —</strong> this page is a placeholder while real content is being
          written.
        </div>
      )}

      {data.intro?.map((p, i) => (
        <p key={i}>{p}</p>
      ))}

      <div className="stack">
        {data.sections?.map((section, i) => (
          <Section section={section} key={i} />
        ))}
      </div>
    </main>
  );
}
