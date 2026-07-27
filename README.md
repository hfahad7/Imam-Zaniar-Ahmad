# Imam Zaniar Ahmad Website

This repository contains the production website for Imam Zaniar Ahmad.

## Stack

- Next.js App Router
- React
- JavaScript
- Custom responsive CSS
- Responsive image delivery through `next/image`
- Optional Google Analytics, Search Console, and Bing verification

## Local development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Project structure

- `app/layout.js` - shared header, footer, metadata, and structured data
- `app/page.js` - homepage
- `app/about/page.js` - biography and public identity
- `app/nikah/page.js` - Nikah services and the free Nikah guide
- `app/lectures/page.js` - lectures, khutbahs, workshops, and fundraising
- `app/testimonials/page.js` - Google reviews and testimonials
- `app/projects/page.js` - Meezan, Zakah.com, and AutoAjr
- `app/contact/page.js` - service-specific booking and contact pathways
- `app/blog/page.js` and `app/blog/[slug]/page.js` - approved blog posts
- `lib/site-content.js` - centralized content and URLs
- `lib/metadata.js` - reusable metadata helpers

## Editing content

Update `lib/site-content.js` for:

- Biography copy
- Service descriptions
- Service areas
- Project descriptions
- Speaking topics
- Guide details
- Contact links

Project logos and photography are stored in `public/images`. Use descriptive
filenames, keep the original aspect ratio, and update the corresponding path in
`lib/site-content.js` when replacing an image.

## Publishing a blog post

Add an approved entry to the `blogPosts` array in `lib/site-content.js`. Each
entry needs a unique slug, title, publication date, excerpt, and reviewed
sections. The blog index, article route, metadata, and sitemap are generated
from that centralized content.

## Booking and contact setup

- Nikah bookings open the confirmed Google Form.
- Lecture and fundraising requests use a regular phone call or SMS text.
- The booking number is not available on WhatsApp.
- General questions are directed to Instagram.
- Shared URLs and contact copy live in `lib/site-content.js`.

## Google Reviews setup

Add the verified Google Business Profile URL and Place ID to the environment or content layer before showing a live review feed.

## Nikah guide setup

Nikah services, the coded guide, and the PDF preview are consolidated at
`/nikah`. The download button serves the original PDF from
`/downloads/nikah-guide.pdf`, while legacy Nikah routes redirect to the
appropriate section of the consolidated page.

## SEO

The app includes:

- Canonical metadata helpers
- `robots.txt` and `sitemap.xml`
- Breadcrumb JSON-LD on the service and guide pages
- A Person JSON-LD profile in the root layout
- Preview-deployment blocking in `robots.txt`
- A permanent `/nikkah-weddings` spelling redirect
- Optional verification metadata from environment variables

See `SEO_SETUP.md` for the next configuration steps.

## Testing

Run these commands before deploying:

```bash
npm run lint
npm run build
```

After deployment, also test every navigation link, the mobile menu, the Google
Form booking link, phone and SMS links, `/robots.txt`, `/sitemap.xml`, and the
legacy route redirects. Run Lighthouse on mobile and desktop against the
production URL.

## Vercel deployment

Push the repository to GitHub, connect the project in Vercel, and deploy the main branch.

Set any analytics, webmaster verification, and review integration environment
variables in Vercel before enabling those services.

## Image sources

- Imam Zaniar Ahmad photographs were supplied directly by the website owner.
- Meezan, Zakah.com, and AutoAjr marks were obtained from each project's
  official website for identification within the project showcase.
- The supplied file labelled as a ChatGPT-generated image is intentionally not
  used, in keeping with the site&apos;s real-photography requirement.
