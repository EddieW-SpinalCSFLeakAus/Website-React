// Site navigation, structured to match SITEMAP.png.
// Each top-level item is either a simple link (no `children`) or a dropdown
// with its own landing page plus a list of child pages.

export const navigation = [
  { label: 'Home', path: '/', isHome: true },
  {
    label: 'Information',
    path: '/information',
    children: [
      { label: 'What Is a Spinal CSF Leak?', path: '/information/what-is-a-spinal-csf-leak' },
      { label: 'Symptoms', path: '/information/symptoms' },
      { label: 'Causes', path: '/information/causes' },
      { label: 'Diagnosis', path: '/information/diagnosis' },
      { label: 'Treatments', path: '/information/treatments' },
      { label: 'Related Conditions', path: '/information/related-conditions' },
      { label: 'Aftercare', path: '/information/aftercare' },
      { label: 'FAQ', path: '/information/faq' },
      { label: 'Terminology', path: '/information/terminology' },
      { label: 'Living With a Leak', path: '/information/living-with-a-leak' },
    ],
  },
  {
    label: 'Resources',
    path: '/resources',
    children: [
      { label: 'Clinician Directory', path: '/resources/clinician-directory' },
      { label: 'For Patients', path: '/resources/for-patients' },
      { label: 'For Carers / Families', path: '/resources/for-carers-and-families' },
      { label: 'For Clinicians', path: '/resources/for-clinicians' },
      { label: 'Mental Health Resources', path: '/resources/mental-health-resources' },
      { label: 'Patient Stories', path: '/resources/patient-stories' },
      { label: 'Financial Support', path: '/resources/financial-support' },
      { label: 'Useful Links', path: '/resources/useful-links' },
    ],
  },
  {
    label: 'About Us',
    path: '/about-us',
    children: [
      { label: 'Vision, Purpose, Goals', path: '/about-us/vision-goals' },
      { label: 'Our Story / Timeline', path: '/about-us/our-story' },
      { label: 'Board of Directors', path: '/about-us/board-of-directors' },
      { label: 'Our Volunteers', path: '/about-us/our-volunteers' },
      { label: 'Current Projects', path: '/about-us/current-projects' },
      { label: 'Past Projects', path: '/about-us/past-projects' },
      { label: '1–5 Year Plan', path: '/about-us/plan' },
      { label: 'Policies & Important Information', path: '/about-us/policies' },
    ],
  },
  {
    label: 'News + Events',
    path: '/news-events',
    children: [
      { label: 'Newsletters', path: '/news-events/newsletters' },
      { label: 'Latest Journal Articles', path: '/news-events/journal-articles' },
      { label: 'Events', path: '/news-events/events' },
      { label: 'Support Group', path: '/news-events/support-group' },
    ],
  },
  {
    label: 'Get Involved',
    path: '/get-involved',
    children: [
      { label: 'Volunteer', path: '/get-involved/volunteer' },
      { label: 'Fundraise', path: '/get-involved/fundraise' },
      { label: 'Shop', path: '/get-involved/shop' },
      { label: 'Advocate / Spread the Word', path: '/get-involved/advocate' },
    ],
  },
  { label: 'Contact Us', path: '/contact-us' },
  { label: 'Donate', path: '/donate', isCta: true },
];

// Builds a Home > Section > Page breadcrumb trail for a given path,
// by looking the path up in the navigation tree.
export function getBreadcrumbTrail(path) {
  const trail = [{ label: 'Home', path: '/' }];
  if (path === '/') return trail;

  const section = navigation.find(
    (item) => item.path === path || item.children?.some((c) => c.path === path),
  );
  if (!section) {
    trail.push({ label: path });
    return trail;
  }

  trail.push({ label: section.label, path: section.path });
  if (section.path !== path) {
    const child = section.children?.find((c) => c.path === path);
    if (child) trail.push({ label: child.label });
  }
  return trail;
}
