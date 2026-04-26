# DNS Cutover Runbook — `jentechelectrical.com.au`

**Owner**: Arclight Digital (Zac)
**Coordinated with**: Daryn at Davichi (Jentech IT)
**Stakeholder**: Andrew Gibson (Jentech)

This is the play-by-play for switching `jentechelectrical.com.au` from the old GoDaddy site to the new Vercel-hosted Next.js site. Run it once we have DNS access. **No rollback drama** if you follow the order — every step is reversible up to the moment the A record changes.

---

## 0. Pre-flight (do at least 24 hrs before cutover)

### 0.1 Crawl the existing GoDaddy site
Goal: collect every existing URL so we don't lose any that have inbound links.

- Use `https://web.archive.org/web/*/jentechelectrical.com.au` to enumerate every page Wayback ever saw.
- Use Screaming Frog (free up to 500 URLs) or `wget --mirror` against the live old site.
- Note any URL that returns 200 — that's a potential 301 source.

### 0.2 Build the redirect map
Edit `next.config.ts` `redirects()` array. Each old URL → closest new URL. Examples:

```
/services/electrical-installation         -> /services/residential
/services/commercial-electrical           -> /services/commercial
/blog/some-godaddy-post                   -> closest blog match (or / if no match)
```

For paths with no good match, redirect to `/` rather than letting them 404 — preserves the link equity even if the topic is gone.

### 0.3 Vercel project — staging is healthy
- Confirm latest `master` deploys cleanly. Visit `https://jentec-electrical.vercel.app` — every page loads, no broken links, mobile renders right.
- Run Lighthouse on 3 pages (homepage, one service, one blog). Note scores — these are your "before" numbers for the trial review (per `off-page-artillery/06-baseline-capture.md`).

### 0.4 Have the credentials ready
- Vercel project access (Andrew or Zac)
- DNS panel access (Davichi)
- Google Search Console — Andrew's google account or Arclight's
- Google Analytics 4 — same
- Google Business Profile — Andrew has owner access
- Email host login (where `info@jentechelectrical.com.au` is hosted) — confirm DNS for MX records won't be touched

---

## 1. Cutover steps (in order)

### 1.1 Capture Day-0 baseline numbers
**Before** any DNS change. See `off-page-artillery/06-baseline-capture.md` for the full template. Minimum: GBP review count, current GSC clicks/impressions on whatever property exists, GA4 numbers, Lighthouse scores. Lock these into a sheet — this is the trial's "before" snapshot.

### 1.2 Swap the production env var in Vercel
- Vercel dashboard → Project → Settings → Environment Variables
- Add **`NEXT_PUBLIC_SITE_URL`** = `https://jentechelectrical.com.au` for the **Production** environment
- Redeploy production (or wait for the next git push)

After redeploy, the `vercel.app` URL still works, but every canonical link, schema, sitemap, OpenGraph URL, and llms.txt-rendered URL now points at the new domain. **Crawlers visiting the old domain still get the old site** until step 1.4 — this is fine.

### 1.3 Add the custom domain in Vercel
- Vercel dashboard → Project → Settings → Domains
- Add domain → enter `jentechelectrical.com.au`
- Vercel shows the required DNS records:
  - **A record**: `@` → `76.76.21.21` (or whatever Vercel surfaces — copy from the Vercel UI)
  - **CNAME record**: `www` → `cname.vercel-dns.com`
- Vercel also accepts adding `www.jentechelectrical.com.au` as a second domain — do this and let Vercel manage the redirect from `www` → apex.

### 1.4 Update DNS records (Davichi action)
At the registrar / DNS panel:

1. **Capture screenshots of the current records before changing anything.** Email these to Andrew + Zac so we have a known-good baseline if anything goes wrong.
2. Lower TTL on existing A / CNAME records to **300 seconds** if they're currently set higher. Wait for the existing TTL to expire before continuing — typically 1–24 hours depending on the previous setting. *Note: if TTL is already low, skip this.*
3. Replace the **A** record (`@`) with the value Vercel provided in step 1.3.
4. Replace the **CNAME** record for `www` with `cname.vercel-dns.com`.
5. Leave **MX** records (email), **TXT** records (SPF/DKIM/DMARC), and any other existing records **untouched** — those are for email and unrelated services.

### 1.5 Wait for SSL provisioning
Vercel auto-issues a Let's Encrypt SSL cert once the DNS is pointing correctly. Usually takes 1–10 minutes. The Vercel domain panel turns the domain green when ready. Hard-refresh `https://jentechelectrical.com.au` — should serve the new site with a valid cert.

### 1.6 Sanity-check everywhere
- Open in incognito: hits should serve the new site (not GoDaddy cached version)
- DNS propagation check: `dig jentechelectrical.com.au` should return Vercel's IP from at least one resolver. Use `https://dnschecker.org/#A/jentechelectrical.com.au` for a global view.
- Any page on the old GoDaddy site that you bookmark in browser → should now hit the new site (after browser cache clears).
- Trigger a contact form submission — confirm the email lands at `info@jentechelectrical.com.au`.
- Phone call CTA → `tel:0739149696` opens the dialer correctly.

### 1.7 Post-cutover sweeps
Do these within 1–2 hours of cutover.

#### 1.7.1 `public/llms.txt`
Open the file. Find/replace `jentec-electrical.vercel.app` → `jentechelectrical.com.au`. Commit and push. Redeploys automatically.

```bash
sed -i 's/jentec-electrical.vercel.app/jentechelectrical.com.au/g' public/llms.txt
git add public/llms.txt
git commit -m "Switch llms.txt URLs to production domain"
git push
```

#### 1.7.2 Google Search Console
- Add property for `https://jentechelectrical.com.au` (Domain property is preferred — covers `www` and apex)
- Verify via DNS TXT record (Davichi adds it; GSC accepts)
- Submit sitemap: `https://jentechelectrical.com.au/sitemap.xml`
- Submit a manual URL inspection for the homepage — request indexing

#### 1.7.3 Google Analytics 4
- Property → Data streams → edit the existing stream's URL to `https://jentechelectrical.com.au`
- Or create a new web data stream if the property doesn't exist yet

#### 1.7.4 Google Business Profile
- Edit the website field on the GBP listing → `https://jentechelectrical.com.au`
- Save — Google revalidates the URL and re-credits any rank signals

#### 1.7.5 Social profiles
- Facebook page → about → website
- Instagram bio link
- Any directory listings that already have URLs

#### 1.7.6 Email signatures
- Andrew, Rachel, anyone else sending email from `@jentechelectrical.com.au` → update website line in their signature

---

## 2. Day 1–7 monitoring

### Day 1
- Check Search Console **Coverage** — the new property should start showing the sitemap URLs as discovered
- Check **404s** in GSC and GA4 — any old GoDaddy URL hitting 404 needs to be added to `next.config.ts redirects()`
- Confirm contact form / booking calendar / chat widget all still work end-to-end on the production domain

### Day 3
- GSC should be returning impressions for the new property (sometimes takes 24–72 hours)
- Re-run Lighthouse on the production domain (different from staging — the CDN edge changes can affect perf scores). Capture into the baseline sheet.

### Day 7
- 404 sweep — anything that's been hit and not redirected gets added to `next.config.ts`
- GSC top-queries comparison — check the new property's queries against any previous data

---

## 3. If something goes wrong

### Symptom: site not loading after DNS change
- Wait. DNS propagation takes time. `dnschecker.org` will show which resolvers have updated. Typically 5–30 min globally.
- If 1+ hour and still not propagating, check the A record value against what Vercel gave you. Easy typo trap.

### Symptom: SSL warning in browser
- Vercel hasn't finished provisioning. Wait 10 min, hard-refresh.
- If still erroring after 30 min: Vercel domain panel → click the domain → look for a "Refresh" or "Issue cert" button.

### Symptom: every old GoDaddy URL 404s
- That's because they don't have redirect rules yet. Capture the URL list from Search Console → add to `next.config.ts redirects()` → push. Each push is a 60-second redeploy.

### Symptom: GBP rankings drop
- This is normal for the first 48–72 hours after a domain change. Google re-evaluates the listing once it sees the new website URL. Recovery typically within a week if the new site loads correctly and the GBP–website match is consistent.
- Speeds up if you submit URL Inspection requests in GSC for the homepage and top suburb / service pages.

### Nuclear rollback
If there's a critical issue and we need to revert:
1. In the DNS panel, restore the original A and CNAME records from the screenshots taken in step 1.4.
2. Wait for TTL to expire.
3. Site is back on GoDaddy. The Vercel deployment continues on `vercel.app` until we're ready to try again.

This costs 30 minutes of downtime worst case. The damage is limited because we never deleted the original DNS records — only replaced them.

---

## 4. Post-cutover checklist (one week in)

- [ ] All 7 service pages rank-tracked in GSC
- [ ] 10 suburb pages indexed
- [ ] 7 blog posts indexed
- [ ] /team page indexed
- [ ] Sitemap shows >40 indexed pages
- [ ] 404 rate on the new property approaching zero
- [ ] GBP review velocity climbing (per `04-review-workflow.md`)
- [ ] First batch of architect / supplier outreach emails sent (per `02-` and `03-` docs)
- [ ] Day-7 metrics captured into the baseline sheet (`06-baseline-capture.md`)

When all those tick, the 3-month trial is officially in motion and there's no further launch work — only weekly monitoring + the `05-gbp-content-calendar.md` schedule.
