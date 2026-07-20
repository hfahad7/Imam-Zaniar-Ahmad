# SEO Setup

This site already includes:

- Semantic headings and crawlable content
- `robots` and `sitemap` routes
- Canonical metadata helpers
- JSON-LD for the public person profile and breadcrumbs
- Dedicated service pages and guide pages

## What to connect next

1. Google Business Profile
   - Add the verified `GOOGLE_PLACE_ID`
   - Add `NEXT_PUBLIC_GOOGLE_REVIEWS_URL`
   - Only show live Google review content after the profile URL is verified

2. Search Console
   - Add the verification value to the environment or Vercel settings
   - Submit the sitemap at `/sitemap.xml`

3. Bing Webmaster Tools
   - Add the Bing verification value
   - Submit the same sitemap

4. IndexNow
   - Set `INDEXNOW_KEY` and `INDEXNOW_KEY_LOCATION`
   - Keep the key file or endpoint aligned with Bing and other supported engines

5. Analytics
   - Add real Google Analytics, Vercel Web Analytics, or other approved IDs only if the owner wants tracking
   - Keep analytics disabled until the real IDs are available

## Google Business Profile notes

- Confirm the exact public business name before publishing review widgets
- Add approved photos and service details to the profile
- Keep hours, service areas, and contact details consistent with the website
- Respond to reviews respectfully and do not offer incentives

## Review display guidance

- Do not scrape Google reviews
- Do not fake review text, reviewer names, or star ratings
- If the review widget is not ready, show the owner-reported count and link to the verified profile later

## Nikah guide guidance

- Keep the HTML page crawlable on its own
- Keep the PDF downloadable
- Review the guide against current Ontario pages before public launch
- Get Imam approval for all religious wording
