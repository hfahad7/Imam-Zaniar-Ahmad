# Imam Zaniar Ahmad Website

This repository contains the production website for Imam Zaniar Ahmad.

## Stack

- Next.js App Router
- React
- JavaScript
- Custom responsive CSS
- Server-side contact form handling

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
- `app/nikah-weddings/page.js` - Nikkah and Nikah service page
- `app/lectures-speaking/page.js` - lectures and speaking page
- `app/nikah-guide/page.js` - crawlable guide page
- `app/projects/page.js` - Meezan, Zakah.com, and AutoAjr
- `app/contact/page.js` - inquiry page and protected form
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

## Contact form setup

The contact form posts to `app/api/contact/route.js`.

Required environment variables for production:

- `CONTACT_TO_EMAIL`
- `EMAIL_FROM_ADDRESS`
- `RESEND_API_KEY`
- `NEXT_PUBLIC_TURNSTILE_SITE_KEY`
- `TURNSTILE_SECRET_KEY`

The route also supports a local development fallback when those credentials are missing.

## Google Reviews setup

Add the verified Google Business Profile URL and Place ID to the environment or content layer before showing a live review feed.

## Nikah guide setup

The HTML guide lives at `/nikah-guide`.

The download button points to `/nikah-guide/download`, which serves a generated PDF attachment.

## SEO

The app includes:

- Canonical metadata helpers
- `robots.txt` and `sitemap.xml`
- Breadcrumb JSON-LD on the service and guide pages
- A Person JSON-LD profile in the root layout

See `SEO_SETUP.md` for the next configuration steps.

## Testing

Run these commands before deploying:

```bash
npm run lint
npm run build
```

## Vercel deployment

Push the repository to GitHub, connect the project in Vercel, and deploy the main branch.

Set the production environment variables in Vercel before enabling the contact form or review integrations.
