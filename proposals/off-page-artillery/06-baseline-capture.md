# 06 · Day-0 Baseline Capture

**Goal**: capture every measurable starting metric the day before the new site goes live (or on the day of launch, before traffic hits). Without these, the Month-3 trial review is subjective ("things feel better"). With them, it's evidence.

**Time required**: 60–90 minutes once on Day 0. The values get recorded into a single tracking sheet and never overwritten.

---

## What to capture

### Google Search Console

For the property `https://jentechelectrical.com.au` and the old `https://jentec-electrical.vercel.app` (if both will be live during transition):

- **Total clicks** — last 28 days
- **Total impressions** — last 28 days
- **Average CTR**
- **Average position**
- **Indexed page count** — *Coverage* report → *Valid* count
- **Top 20 queries** (export as CSV) — these are the queries the site already ranks for; the trial should grow this list

> Path: search.google.com/search-console → property → Performance → tabs *Search results*, *Coverage*

### Google Analytics 4

For the property linked to the site:

- **Total users** — last 28 days
- **Sessions** — last 28 days
- **Engaged sessions / engagement rate**
- **Average engagement time per session**
- **Top 20 landing pages** by sessions (export)
- **Conversion events** count — phone clicks, form submissions, booking-bot completions
- **Source / medium breakdown** — last 28 days

> Path: analytics.google.com → property → Reports → Acquisition + Engagement

### Google Business Profile Insights

For the Jentech GBP listing:

- **Total searches** — direct + discovery + branded — last 28 days
- **Profile views** — last 28 days
- **Calls from listing** — last 28 days
- **Direction requests** — last 28 days
- **Website clicks** — last 28 days
- **Photo views** — last 28 days
- **Review count** — exact number on Day 0 (currently 158)
- **Average rating** — exact figure (currently 5.0)
- **Posts in last 28 days** (probably 0 if the calendar from doc 05 hasn't started)

> Path: business.google.com → choose listing → Performance + Insights

### Bing Webmaster Tools

If not yet set up, set it up now and capture:

- **Indexed pages count**
- **Total impressions** (often near-zero, that's fine — record it)

### Lighthouse / Core Web Vitals

Run a full Lighthouse audit (mobile + desktop) on:

- Homepage
- One service page (e.g. /services/switchboards)
- One blog post (e.g. /blog/qld-smoke-alarm-2027-deadline-explained)
- /team (since this is the page that just got the biggest E-E-A-T upgrade)

Save the four key scores per run: **Performance / Accessibility / Best Practices / SEO**.

PageSpeed Insights URL pattern: `https://pagespeed.web.dev/analysis?url=https%3A%2F%2Fjentechelectrical.com.au%2F`

### AHREFs / SEMrush / similar (if subscribed)

- **Domain Rating** / **Domain Authority** — record exact figure
- **Referring domains count** — currently and historically
- **Backlink count**
- **Organic keyword count**
- **Organic traffic estimate**

If no paid tool, skip — Search Console + GA4 are enough for a fair trial review.

---

## Capture template (copy/paste into a Google Sheet)

| Metric | Source | Day 0 value | Month 1 | Month 2 | Month 3 |
|---|---|---|---|---|---|
| Search Console — clicks (28d) | GSC | | | | |
| Search Console — impressions (28d) | GSC | | | | |
| Search Console — avg position | GSC | | | | |
| Search Console — indexed pages | GSC | | | | |
| GA4 — total users (28d) | GA4 | | | | |
| GA4 — sessions (28d) | GA4 | | | | |
| GA4 — engaged sessions (28d) | GA4 | | | | |
| GA4 — phone-click conversions (28d) | GA4 | | | | |
| GA4 — form submission conversions (28d) | GA4 | | | | |
| GBP — profile views (28d) | GBP Insights | | | | |
| GBP — calls from listing (28d) | GBP Insights | | | | |
| GBP — direction requests (28d) | GBP Insights | | | | |
| GBP — website clicks (28d) | GBP Insights | | | | |
| GBP — review count (lifetime) | GBP | 158 | | | |
| GBP — avg rating | GBP | 5.0 | | | |
| Lighthouse — homepage perf (mobile) | PageSpeed | | | | |
| Lighthouse — homepage SEO | PageSpeed | | | | |
| Citations — directories live | Manual | | | | |
| Backlinks — referring domains | (tool) | | | | |

Same row checked at Month 1, 2, 3. The Month 3 column is the trial review.

---

## What "success" looks like at Month 3

Realistic targets for a 3-month SEO trial of a brand-new launch (no existing baseline) for a Brisbane electrician with strong GBP starting position:

- Search Console clicks: **+40–80%** vs Day 0
- Indexed pages: from 0/few → **40+**
- GBP profile views: **+20–40%**
- GBP calls from listing: **+15–30%**
- Review count: **158 → 200+** (per doc 04)
- Citations: **10 directories live**
- Backlinks: **5–10 new referring domains** (architects + suppliers)
- Lighthouse SEO: **95+** across the four sampled pages

Falling short on any one of these isn't failure — falling short on most of them is the trigger for a frank conversation about market dynamics or whether the package is right.
