# Spinal CSF Leak Australia — React site

A React rebuild of spinalcsfleakaustralia.org, restructured around the
navigation in `SITEMAP.png`. **The live WordPress site was never modified —**
all real content here was pulled read-only from the WordPress REST API and
transcribed verbatim.

## What's real vs. placeholder

- Pages with actual content from the live site (Home, Clinician Directory,
  Board of Directors + Medical Advisory Board, Vision & Goals, Donate,
  Associated Conditions → *Related Conditions*, Leak Links → *Useful Links*,
  Hospital Tips → *For Patients*, Connect → *Support Group*, Skills Survey +
  Job Roles Available → *Volunteer*, Patient Stories, Contact Us) are fully
  populated.
- Everything else the site map describes but that doesn't exist yet on the
  live site (Symptoms, Causes, Diagnosis, Newsletters, Events, Shop, etc.)
  is a clearly-labelled **"Coming soon"** placeholder page — this was a
  deliberate choice so nothing here reads as real medical or organisational
  content that hasn't actually been written/reviewed by the charity.
- Images are currently hot-linked from the live WordPress media library
  (`spinalcsfleakaustralia.org/wp-content/uploads/...`). Before this goes
  live anywhere permanent, download and self-host them instead — hot-linking
  is fine for local development but is fragile and not something to ship.

## Getting started (VS Code)

1. Open this folder in VS Code (`File → Open Folder…`), or from a terminal:
   ```bash
   cd spinal-csf-leak-react
   code .
   ```
2. Open a terminal in VS Code (`` Ctrl+` ``) and install dependencies:
   ```bash
   npm install
   ```
3. Copy the env file and fill in your EmailJS details (see below):
   ```bash
   cp .env.example .env
   ```
4. Start the dev server:
   ```bash
   npm run dev
   ```
   Then open the URL it prints (usually http://localhost:5173).
5. To build a production bundle: `npm run build` (output goes to `dist/`).
   To preview that build locally: `npm run preview`.

## Setting up the contact form (EmailJS)

The contact page's form uses [EmailJS](https://www.emailjs.com/) so it can
send real email straight from the browser, with no backend server to host.
It's currently pointed at **eddie.weatherhead@spinalcsfleakaustralia.org**.

1. Create a free account at https://www.emailjs.com/.
2. **Email Services** → **Add New Service** → connect the mailbox you want
   the form to send *from* (e.g. Gmail, Outlook, or your org's SMTP). Note
   the **Service ID** it gives you.
3. **Email Templates** → **Create New Template**. On the template's
   **Content** tab, use these variables (they match what the form sends) —
   for example:
   ```
   New message from the website contact form

   Name: {{from_name}}
   Email: {{from_email}}

   Message:
   {{message}}
   ```
   Then switch to the template's **Settings** tab and set:
   - **To Email** → `{{to_email}}` — keeping this as a variable (rather than
     hard-coding the address here) means the recipient is controlled by the
     code, not by EmailJS's dashboard. That matters if you ever swap to a
     different email backend later: the app already decides who it's for,
     so there's nothing to reconfigure on the provider's side.
   - **Reply To** → `{{from_email}}` — this is the part that makes
     replying to the notification email go back to the *visitor*, not to
     whatever mailbox you connected as the sender in step 2. Easy to miss
     since it's a separate setting from the template body.
   Note the **Template ID**.
4. **Account → General** → copy your **Public Key**.
5. In `.env` (copied from `.env.example`), fill in:
   ```
   VITE_EMAILJS_SERVICE_ID=service_xxxxxxx
   VITE_EMAILJS_TEMPLATE_ID=template_xxxxxxx
   VITE_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxxxxx
   ```
6. Restart `npm run dev` (Vite only reads `.env` on startup).

Until this is configured, the form still works end-to-end (validation,
honeypot spam guard, loading state) but shows a message asking the visitor
to email hello@spinalcsfleakaustralia.org directly instead of failing
silently.

**Note:** `VITE_*` env vars are bundled into the public JavaScript at build
time — this is normal and expected for EmailJS's public key (it's designed
to be public, like a Stripe publishable key), but never put a secret/private
API key in a `VITE_*` variable.

## Dark mode

A toggle in the navbar (and persisted in `localStorage`) switches between
light and dark themes, defined as CSS custom properties in
`src/styles/tokens.css`. Dark mode uses `#002424` (page background) and
`#000000` (header/footer), with `#004c4c` and `#283f0a` available for
secondary surfaces, and text drawn from the palette's designated
"dark-mode text" colours.

## Accessibility

Implemented:
- Skip-to-content link, visible on keyboard focus
- Semantic landmarks (`header`, `nav`, `main`, `footer`) and heading order
- Visible 3px focus ring on every interactive element (not just a colour
  change, so it's visible to low-vision users too)
- All interactive nav dropdowns are reachable and operable by keyboard
  (Tab, Enter/Space, Escape to close) as well as mouse/touch
- Every form field has a real, associated `<label>`; errors and submission
  status are announced via `aria-live`/`role="status"` regions
- Route changes move focus to the new page's heading region and announce
  via a `tabIndex`-managed `<main>`, so screen-reader and keyboard users
  aren't left stranded on client-side navigation
- Breadcrumbs use a proper `<nav aria-label="Breadcrumb">` with
  `aria-current="page"`
- Images have meaningful `alt` text where they convey information (people's
  photos, charts), and empty `alt=""` where they're purely decorative
  duplicates of nearby text
- Respects `prefers-reduced-motion`
- Colour contrast was chosen from the supplied palette with contrast in
  mind, but **please re-check contrast with your final fonts/sizes** using
  a tool like the [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)
  — a few combinations (e.g. the light teal "badge" text) are borderline
  and worth a second look once real copy is in place.

Recommended next steps (not implemented, since they need input from the
charity or a real content/design pass):
- Run the whole site through a screen reader (NVDA/VoiceOver) end-to-end
  once real content replaces the "coming soon" pages — automated checks
  catch maybe half of real issues.
- Add real `alt` text to any photos/PDF scans once they're self-hosted —
  several images (Board of Directors group photo, hospital-tip icons) had
  no `alt` text on the original WordPress site, so text here is a
  reasonable best guess, not confirmed with the org.
- The scanned Privacy Policy currently only exists as three page-image
  scans plus a PDF — consider publishing it as real, selectable/searchable
  text for screen-reader and low-bandwidth users.
- Add captions/transcripts for the two embedded videos (the UK documentary
  and Dr Carroll's talk) if they don't already have them at the source.
- Consider an accessibility statement page, and a way for visitors to
  report access barriers.

## Structure

```
src/
  components/   Navbar, Footer, Breadcrumbs, ThemeToggle, SkipLink
  context/      Dark/light theme provider
  data/         navigation.js (site map), pageContent.js (page copy),
                clinicians.js (directory data)
  pages/        Home, ClinicianDirectory, Contact, Donate, SectionLanding
                (dropdown landing pages), GenericPage (renders everything
                driven by pageContent.js), NotFound
  styles/       tokens.css (colours/spacing), base.css (reset/typography),
                layout.css (containers/grid/buttons), pages.css
```

Adding a new real page = editing an entry in `src/data/pageContent.js`
(no new component needed) unless it needs a genuinely custom layout.
