import { useId, useMemo, useState } from 'react';
import Breadcrumbs from '../components/Breadcrumbs';
import { clinicians } from '../data/clinicians';
import './ClinicianDirectory.css';

export default function ClinicianDirectory() {
  const [search, setSearch] = useState('');
  const [state, setState] = useState('all');
  const [specialty, setSpecialty] = useState('all');
  const searchId = useId();
  const stateId = useId();
  const specialtyId = useId();

  const states = useMemo(
    () => Array.from(new Set(clinicians.map((c) => c.state))).sort(),
    [],
  );
  const specialties = useMemo(
    () => Array.from(new Set(clinicians.map((c) => c.specialty))).sort(),
    [],
  );

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    return clinicians.filter((c) => {
      if (state !== 'all' && c.state !== state) return false;
      if (specialty !== 'all' && c.specialty !== specialty) return false;
      if (!q) return true;
      const haystack = `${c.name} ${c.specialty} ${c.locations
        .map((l) => `${l.hospital} ${l.address}`)
        .join(' ')}`.toLowerCase();
      return haystack.includes(q);
    });
  }, [search, state, specialty]);

  return (
    <main id="main-content" className="container page-main">
      <Breadcrumbs
        trail={[
          { label: 'Home', path: '/' },
          { label: 'Resources', path: '/resources' },
          { label: 'Clinician Directory' },
        ]}
      />
      <h1>Clinician Directory</h1>
      <p>
        This directory helps patients and healthcare providers find medical and allied health
        professionals with an interest in spinal CSF leaks, including practitioners who are
        familiar with the condition or willing to learn. We will continue to grow and update the
        directory as more clinicians provide their information.
      </p>

      <div className="cta-block" style={{ marginBottom: 'var(--space-6)' }}>
        <p>
          <strong>Are you a clinician with experience in CSF leaks?</strong> Join our directory to
          help patients and health professionals find you.
        </p>
        <a className="btn" href="/get-involved/volunteer">
          Get in touch
        </a>
      </div>

      <form
        className="directory-filters"
        role="search"
        aria-label="Search the clinician directory"
        onSubmit={(e) => e.preventDefault()}
      >
        <div className="directory-filters__field">
          <label htmlFor={searchId}>Search by name, specialty or keyword</label>
          <input
            id={searchId}
            type="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="e.g. Neurologist, Brisbane, blood patch…"
          />
        </div>
        <div className="directory-filters__field">
          <label htmlFor={stateId}>State / territory</label>
          <select id={stateId} value={state} onChange={(e) => setState(e.target.value)}>
            <option value="all">All states &amp; territories</option>
            {states.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>
        <div className="directory-filters__field">
          <label htmlFor={specialtyId}>Specialty</label>
          <select
            id={specialtyId}
            value={specialty}
            onChange={(e) => setSpecialty(e.target.value)}
          >
            <option value="all">All specialties</option>
            {specialties.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>
      </form>

      <p aria-live="polite" className="directory-results-count">
        Showing {filtered.length} of {clinicians.length} clinicians
      </p>

      <ul className="clinician-list">
        {filtered.map((c) => (
          <li key={c.id} className="card clinician-card">
            <div className="clinician-card__header">
              <h2>{c.name}</h2>
              <span className="clinician-card__badge">{c.state}</span>
            </div>
            <p className="clinician-card__specialty">{c.specialty}</p>

            {c.locations.map((loc, i) => (
              <div key={i} className="clinician-card__location">
                {c.locations.length > 1 && i > 0 && <p className="clinician-card__or">OR</p>}
                <p>{loc.hospital}</p>
                <p>{loc.address}</p>
                <p>
                  {loc.phone && (
                    <>
                      <a href={loc.phoneHref}>{loc.phone}</a>{' '}
                    </>
                  )}
                  {loc.website && <a href={loc.websiteHref}>{loc.website}</a>}
                </p>
              </div>
            ))}

            <details>
              <summary>Experience &amp; services</summary>
              <p>{c.experience}</p>
            </details>
            <details>
              <summary>Referral pathway</summary>
              <p>
                {c.referralEmail ? (
                  <>
                    Email: <a href={`mailto:${c.referralEmail}`}>{c.referralEmail}</a>
                  </>
                ) : (
                  c.referral
                )}
              </p>
            </details>
          </li>
        ))}
      </ul>

      {filtered.length === 0 && (
        <p>No clinicians match your search. Try clearing a filter.</p>
      )}

      <div className="coming-soon-banner clinician-directory__disclaimer" role="note">
        <strong>Please note:</strong> this directory is provided for general information only and
        does not constitute a recommendation or endorsement of any individual clinician,
        healthcare provider, service or hospital. Spinal CSF Leak Australia does not screen or
        endorse individual providers listed in the directory, and inclusion does not guarantee a
        provider's availability, expertise or suitability for your individual needs. We encourage
        patients and referring clinicians to undertake their own research when selecting a
        healthcare provider, and to make choices based on individual needs and preferences.
      </div>
    </main>
  );
}
