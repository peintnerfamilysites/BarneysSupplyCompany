# Barneys Supply Company Website

A production-ready React + Vite website for **Barneys Supply Company**, focused on roofing, siding, seamless gutters, storm support, and exterior construction work across Southwest Missouri and the Ozarks.

The site keeps the Barneys red/black/amber construction brand, uses Framer Motion for premium UI motion, and uses a lightweight Three.js scene on the Home page hero only.

---

## Tech Stack

- **React 19** — UI components and routing views.
- **Vite 8** — local dev server and production build.
- **React Router 7** — Home, About, Services, Insurance, Contact, Terms, and Error routes.
- **Tailwind CSS 4** — utility-first styling through `src/index.css` and component classes.
- **Google Fonts** — Oswald + Roboto Condensed for a stronger construction-company look.
- **Framer Motion** — page transitions, card animations, nav/menu motion, and slider transitions.
- **Three.js** — custom Home hero construction/roofline scene.
- **EmailJS** — client-side estimate/contact form sending.
- **ESLint + Prettier** — code quality and formatting.

---

## Quick Start

Use Node **20.19+** or Node **22.12+**.

```bash
npm install
npm run dev
```

Common commands:

```bash
npm run dev          # Start local Vite dev server
npm run lint         # Check code quality
npm run build        # Create production build in dist/
npm run preview      # Preview production build locally
npm run format       # Format project files with Prettier
npm run format:check # Check formatting without changing files
```

---

## Production Launch Checklist

### Business and Content

- [ ] Confirm the business name is exactly how it should appear: **Barneys Supply Company**.
- [ ] Confirm service list is accurate: roofing, siding, seamless gutters, storm/exterior diagnostics, and exterior project support.
- [ ] Confirm there are no services listed that the company does not offer.
- [ ] Confirm all project gallery photos are real, approved, and safe to publish.
- [ ] Confirm phone numbers in `src/config/site.js` are correct.
- [ ] Confirm the email address in `src/config/site.js` is correct.
- [ ] Confirm service area wording in `src/config/site.js` and SEO copy is accurate.
- [ ] Confirm Terms of Use language is acceptable for the business.

### Contact Form / EmailJS

- [ ] Create or confirm the EmailJS service, template, and public key.
- [ ] Add these secrets locally in `.env` and in GitHub Actions secrets:

```bash
VITE_EMAILJS_SERVICE_ID=
VITE_EMAILJS_TEMPLATE_ID=
VITE_EMAILJS_PUBLIC_KEY=
```

- [ ] Test the Contact form locally with `npm run dev`.
- [ ] Test the Contact form again after deployment.
- [ ] Make sure EmailJS template fields match the code in `src/pages/contact/hooks/useEstimateForm.js`:
  - `from_name`
  - `from_phone`
  - `from_email`
  - `service_requested`
  - `message`

### SEO and Search Readiness

- [ ] Update `public/sitemap.xml` if the live domain or route paths change.
- [ ] Update `public/robots.txt` if the live domain changes.
- [ ] Update `src/config/site.js` if the GitHub Pages repo name or domain changes.
- [ ] Update `vite.config.js` `base` if the GitHub Pages repo name changes.
- [ ] Submit the live URL and sitemap in Google Search Console.
- [ ] Connect the live site from the Google Business Profile.
- [ ] Add the site link to Yelp and other business listings.
- [ ] Confirm Open Graph/social preview image uses `public/site-logo.webp`.
- [ ] Confirm page titles/descriptions in `src/config/seo.js` are accurate.

### Deployment

- [ ] Push to the correct GitHub branch, currently expected to be `main`.
- [ ] In GitHub repo settings, enable **Pages** using **GitHub Actions**.
- [ ] Confirm `.github/workflows/deploy.yml` runs successfully.
- [ ] Confirm deployed routes work after refresh:
  - `/`
  - `/about`
  - `/services`
  - `/insurance`
  - `/contact`
  - `/terms`
- [ ] Confirm `public/404.html` exists for GitHub Pages single-page app routing.

### QA Before Going Live

- [ ] Run `npm run lint`.
- [ ] Run `npm run build`.
- [ ] Run `npm run preview` and click every route.
- [ ] Test mobile nav on an actual phone, including right-center thumb trigger placement while scrolled.
- [ ] Test phone landscape orientation to confirm the full-screen menu scrolls cleanly.
- [ ] Test tablet portrait/landscape breakpoints.
- [ ] Test desktop nav at laptop and large monitor widths.
- [ ] Test About project lightbox with keyboard Escape / arrows.
- [ ] Test Contact form required fields.
- [ ] Click every phone link and email link.
- [ ] Run Lighthouse or PageSpeed Insights on the deployed site.

---

## Project Structure

```text
src/
  app/
    router.jsx
  assets/
    *.webp
    ourwork/
  components/
    footer/
    layout/
    navigation/
    seo/
    three/
    ui/
  config/
    seo.js
    site.js
  pages/
    about/
    contact/
    error/
    home/
    insurance/
    services/
    termsofuse/
  index.css
  main.jsx
public/
  404.html
  robots.txt
  sitemap.xml
  site-logo.webp
```

---

## Main Files and Where to Edit Things

### Global Business Info

**File:** `src/config/site.js`

Use this file for business-wide values:

- business name
- base path and base URL
- phone numbers
- email address
- founding year
- service areas
- service names used in structured data

Change phone numbers here instead of hunting through every page.

### Navigation and Responsive Behavior

**File:** `src/components/navigation/NavBar.jsx`

Current behavior:

- desktop navbar is fixed to the top of the screen
- an equal-height spacer preserves page spacing below the fixed header
- mobile menu trigger is fixed at the center-right side of the viewport for thumb access
- mobile menu uses a full-screen overlay and locks body scroll while open
- desktop navigation switches on at the `xl` breakpoint so buttons have room to stay readable

When adjusting navigation, keep these details in mind:

- Keep the mobile trigger at `right-0 top-1/2 -translate-y-1/2` unless intentionally changing thumb placement.
- Keep the button size separate from the CTA image size. The button controls tap area; the image controls readability.
- If navbar height changes, update the fixed-header spacer directly under the header.

### Fonts and Global Styling

**Files:**

```text
index.html
src/index.css
```

The project uses:

- `Oswald` for headings, buttons, nav, and heavy branded text
- `Roboto Condensed` for body copy

This gives the site a stronger contractor/construction feel without needing custom font files in the repo.

### SEO Copy and Schema

**File:** `src/config/seo.js`

This controls route-level SEO:

- page titles
- page descriptions
- route paths
- LocalBusiness / RoofingContractor structured data

The reusable SEO component is here:

```text
src/components/seo/Seo.jsx
```

It updates title tags, descriptions, Open Graph tags, Twitter preview tags, canonical URLs, robots tags, and schema data when routes change.

### Routes

**File:** `src/app/router.jsx`

This is where the site routes are registered:

- `/`
- `/about`
- `/services`
- `/insurance`
- `/contact`
- `/terms`
- `*` catch-all error page

Each route is lazy-loaded so the browser only downloads page code as needed.

### Layout Wrapper

**File:** `src/components/ui/MotionPage.jsx`

This wraps every page with:

- site background gradient
- fixed subtle grid overlay
- `NavBar`
- page `<main>` area
- `Footer`

Avoid changing this unless you want to change the entire site shell/background.

### Navigation

**File:** `src/components/navigation/NavBar.jsx`

This controls:

- desktop navbar
- main logo
- nav links
- Call Us / Contact Us image buttons
- right-center mobile nav trigger
- full-screen mobile menu
- scroll lock while mobile menu is open

The nav link list lives here:

```text
src/components/navigation/navItems.js
```

Edit `navItems.js` if you need to add/remove a page link.

### Footer

**File:** `src/components/footer/Footer.jsx`

This controls:

- footer business copy
- Established in 1944 image
- phone/email links
- footer navigation buttons
- active-page footer button styling
- PFS credit image

Footer buttons use `NavLink`, so they automatically respond to the active page.

---

## Page Breakdown

### Home Page

**File:** `src/pages/home/Home.jsx`

Contains:

- main hero copy and CTA buttons
- lazy-loaded Three.js roofline scene
- brand image cards
- service cards
- final “Why choose Barneys” CTA section

Three.js scene:

```text
src/components/three/BarneysHeroScene.jsx
```

The Three scene is optimized to dispose WebGL resources on unmount, respect reduced-motion settings, pause rendering when off-screen or when the browser tab is hidden, and lazy-load separately from the main app.

### About Page

**File:** `src/pages/about/About.jsx`

Contains:

- About hero
- legacy/exterior/local cards
- project gallery
- professional “Why homeowners call Barneys” section
- phone numbers artwork

Project gallery data:

```text
src/pages/about/data/projectGallery.js
```

Lightbox hook:

```text
src/pages/about/hooks/useProjectLightbox.js
```

Lightbox UI:

```text
src/pages/about/components/ProjectLightbox.jsx
```

Project gallery behavior:

- mobile shows 4 projects
- desktop shows 6 projects
- each project supports up to 30 media items
- media supports images and videos
- slider media fills the full viewing stage with `object-cover` for a modern full-bleed look
- thumbnails, arrows, keyboard arrows, and Escape close are supported

To add a project, edit `projectGallery.js` and add a new object:

```js
{
  coverImage: myCoverImage,
  title: "Project Title",
  location: "City, MO",
  summary: "Short summary of the work.",
  media: limitMedia([image1, image2, image3].map(image)),
}
```

To add a video later:

```js
{ type: "video", src: importedVideoFile, poster: importedPosterImage }
```

### Services Page

**File:** `src/pages/services/Services.jsx`

Service data:

```text
src/pages/services/data/servicesData.jsx
```

This page contains:

- service hero
- roofing/siding/gutters cards
- work process section
- phone-number CTA card
- project details link

Update service-specific copy in `servicesData.jsx` first.

### Insurance Page

**File:** `src/pages/insurance/Insurance.jsx`

Contains:

- storm/exterior claim guidance
- non-legal, non-adjuster wording
- selected-system helper
- claim status helper
- material age guidance that changes based on selected system
- process and FAQs

Important: this page should stay construction-focused. Barneys should not be represented as an insurance company, public adjuster, attorney, or claim decision-maker.

### Contact Page

**File:** `src/pages/contact/Contact.jsx`

Form logic:

```text
src/pages/contact/hooks/useEstimateForm.js
```

Contains:

- contact hero
- direct contact cards
- “Helpful before we arrive” card
- estimate/contact form
- EmailJS submission handling

### Terms Page

**File:** `src/pages/termsofuse/TermsOfUse.jsx`

Contains readable website terms in a professional layout. It intentionally has no extra construction animation so it stays clean and easy to read.

### Error Page

**File:** `src/pages/error/Error.jsx`

Detailed diagnostic-style error page that shows:

- error code
- status
- source
- message
- optional stack trace
- return/contact actions

This helps debug broken links, route issues, and app errors.

---

## Assets

Main image assets live in:

```text
src/assets/
```

Project gallery assets live in:

```text
src/assets/ourwork/
```

Production optimization completed in this version:

- unused garage-door image removed
- unused retired image removed
- old backup image folders removed
- duplicate `.jpg` originals removed after `.webp` versions were confirmed in use
- only active `.webp` assets remain in the project bundle source

For future images:

- Prefer `.webp` for website photos.
- Keep filenames simple and lowercase.
- Avoid spaces in filenames.
- Compress large photos before adding them.
- Add imports through the relevant page/data file instead of hardcoding public paths.

---

## Performance Notes

Current optimization choices:

- Page components are lazy-loaded in `src/app/router.jsx`.
- The Three.js scene is lazy-loaded only on Home.
- Vite manual chunks separate React, Framer Motion, Three.js, EmailJS, and other vendor code for better browser caching.
- Unused development/archival image assets were removed from the project.
- The About slider memoizes media state and uses stable callbacks to avoid unnecessary rerender churn.
- The Three.js scene pauses rendering when off-screen or when the tab is hidden.
- WebGL geometries/materials are disposed on unmount.
- Images use `.webp`, `loading="lazy"`, and `decoding="async"` where appropriate.

---

## Deployment Notes

This project is currently configured for GitHub Pages at:

```text
https://peintnerfamilysites.github.io/BarneysSupplyCompany/
```

The Vite base path is in:

```text
vite.config.js
```

Current behavior:

```js
base: command === "build" ? "/BarneysSupplyCompany/" : "/";
```

That means local development runs cleanly at:

```text
http://localhost:5173/
```

Production builds still use the GitHub Pages subfolder path:

```text
/BarneysSupplyCompany/
```

The React Router basename is derived automatically from `import.meta.env.BASE_URL` in:

```text
src/config/site.js
```

So local dev uses no subfolder basename, and production uses `/BarneysSupplyCompany`. If the GitHub repository name changes, update the production build path in `vite.config.js`.

The deployment workflow is:

```text
.github/workflows/deploy.yml
```

It installs dependencies, builds the site, and deploys `dist/` to GitHub Pages.

---

## Troubleshooting

### `npm install` fails

Try a clean install:

```bash
rm -rf node_modules
rm -f package-lock.json
npm cache clean --force
npm install
```

Also check Node:

```bash
node -v
npm -v
```

Use Node **20.19+** or **22.12+**.

### Site is blank after deployment

Check these first:

- `vite.config.js` production `base` matches the GitHub repo name.
- `src/config/site.js` derives `basePath` from `import.meta.env.BASE_URL`, so make sure the Vite base is correct.
- GitHub Pages is set to deploy from GitHub Actions.
- The latest workflow run completed successfully.

### Refreshing a route shows 404

GitHub Pages needs the SPA fallback file:

```text
public/404.html
```

That file is included. Confirm it exists in the built/deployed output.

### Contact form does not send

Check:

- `.env` exists locally.
- GitHub Actions secrets are set for production.
- EmailJS service/template/public key are correct.
- Template variable names match `useEstimateForm.js`.

### Images are too large or slow

Use compressed `.webp` images and replace imports in:

```text
src/pages/about/data/projectGallery.js
src/pages/home/Home.jsx
```

Do not add full-size phone photos directly without compressing them first.

---

## Final Pre-Push Routine

Before pushing a production update:

```bash
npm run format:check
npm run lint
npm run build
npm run preview
```

Then manually test the pages in the browser.
# BarneysSupplyCompany
