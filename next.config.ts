import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 301 redirects from the legacy GoDaddy site URL structure to the new
  // App Router URLs. The map was built from a live crawl of
  // jentechelectrical.com.au plus the Wayback Machine CDX index, so it
  // covers every URL that's been live or indexed historically.
  //
  // Order matters: more specific paths come first. The catch-all blog
  // wildcard at the bottom handles any old /blog/f/* URL we don't have
  // a specific match for, falling back to /blog.
  async redirects() {
    return [
      // Top-level aliases
      { source: "/home", destination: "/", permanent: true },
      { source: "/index.html", destination: "/", permanent: true },
      // /specials is a real page on the new site (TCL AC promo) — no redirect.
      { source: "/call-now-07-3914-9696", destination: "/contact", permanent: true },
      { source: "/troubleshooting", destination: "/blog", permanent: true },
      // /blog stays at /blog — no redirect needed (path matches new site)

      // Service pages
      { source: "/air-conditioning", destination: "/services/air-conditioning", permanent: true },
      { source: "/commercial", destination: "/services/commercial", permanent: true },
      { source: "/commercial-1", destination: "/services/commercial", permanent: true },
      { source: "/industrial", destination: "/services/industrial", permanent: true },
      { source: "/residential", destination: "/services/residential", permanent: true },
      { source: "/renovations", destination: "/services/residential", permanent: true },
      { source: "/smoke-alarms", destination: "/services/smoke-alarms", permanent: true },
      { source: "/switchboards-1", destination: "/services/switchboards", permanent: true },

      // Project case studies — old GoDaddy used flat top-level slugs;
      // new site nests them under /projects/.
      { source: "/clementine", destination: "/projects/clementine", permanent: true },
      { source: "/courtyard-house", destination: "/projects/courtyard-house", permanent: true },
      { source: "/fortitude-queenslander", destination: "/projects/fortitude-queenslander", permanent: true },
      { source: "/fridas-noosa", destination: "/projects/fridas-noosa", permanent: true },
      { source: "/fridas-paddington", destination: "/projects/fridas-paddington", permanent: true },
      { source: "/killara-house", destination: "/projects/killara-house", permanent: true },
      { source: "/nofomo-bundall", destination: "/projects/nofomo-bundall", permanent: true },
      { source: "/nofomo-helensvale", destination: "/projects/nofomo-helensvale", permanent: true },
      { source: "/stoke-green", destination: "/projects/stoke-green", permanent: true },
      { source: "/verney-house", destination: "/projects/verney-house", permanent: true },
      { source: "/wilston-redesign", destination: "/projects/wilston-redesign", permanent: true },

      // Guide pages — old GoDaddy used top-level slugs; new site nests
      // under /guides/.
      { source: "/loss-of-power", destination: "/guides/loss-of-power", permanent: true },
      { source: "/no-hot-water", destination: "/guides/no-hot-water", permanent: true },

      // Specific old blog posts → closest new content. Anything not
      // matched here falls through to the wildcard at the end.
      // Apostrophes in old slugs are URL-encoded as %E2%80%99, but
      // Next.js matches against the decoded path so we use the literal.
      { source: "/blog/f/all-things-electric-vehicles", destination: "/blog/ev-charger-installation-brisbane", permanent: true },
      { source: "/blog/f/be-prepared-for-a-power-outage", destination: "/blog/storm-power-outage-brisbane-electrician-guide", permanent: true },
      { source: "/blog/f/cyclone-preparedness-emergency-electrical-assistance", destination: "/blog/storm-power-outage-brisbane-electrician-guide", permanent: true },
      { source: "/blog/f/how-to-prepare-for-storms-and-weather-emergencies", destination: "/blog/storm-power-outage-brisbane-electrician-guide", permanent: true },
      { source: "/blog/f/why-do-power-outages-occur", destination: "/blog/storm-power-outage-brisbane-electrician-guide", permanent: true },
      { source: "/blog/f/loss-of-power", destination: "/guides/loss-of-power", permanent: true },
      { source: "/blog/f/electric-hot-water-systems", destination: "/guides/no-hot-water", permanent: true },
      { source: "/blog/f/the-most-common-electrical-causes-of-house-fires", destination: "/blog/electrical-causes-house-fires-brisbane", permanent: true },
      { source: "/blog/f/air-conditioning---no-cooling", destination: "/services/air-conditioning", permanent: true },
      { source: "/blog/f/what-air-conditioner-set-up-is-best-for-your-home-or-office", destination: "/services/air-conditioning", permanent: true },
      { source: "/blog/f/what-is-the-difference-between-single-phase-three-phase-power", destination: "/services/industrial", permanent: true },
      { source: "/blog/f/lighting-design-trends-of-2023", destination: "/services/residential", permanent: true },
      { source: "/blog/f/the-roles-of-electricians-in-smart-homes", destination: "/services/residential", permanent: true },
      { source: "/blog/f/common-electrical-problems-in-commercial-buildingssites", destination: "/services/commercial", permanent: true },
      { source: "/blog/f/emergency-and-exit-lighting", destination: "/services/commercial", permanent: true },
      { source: "/blog/f/what-type-of-lighting-is-best-for-offices", destination: "/services/commercial", permanent: true },
      { source: "/blog/f/why-you-need-an-electrical-inspection-for-your-home-or-business", destination: "/blog/commercial-electrical-compliance-queensland", permanent: true },
      { source: "/blog/f/how-do-you-know-if-your-electrician-is-licensed", destination: "/team", permanent: true },

      // Old blog feeds — point at the new blog index
      { source: "/blog/f.atom", destination: "/blog", permanent: true },
      { source: "/blog/f.rss", destination: "/blog", permanent: true },
      { source: "/blog/f.json", destination: "/blog", permanent: true },

      // Catch-all for any other /blog/f/* URL we didn't explicitly map
      // (e.g. ac-dc-power, electrical-safety-for-kids, your-pet-electrical-
      // safety, the-best-brisbane, tips-for-recycling-electronic-waste,
      // how-is-electricity-generated, how-to-save-money-on-power-bill).
      // These don't have direct topic matches on the new site, so we
      // send them to the blog index rather than letting them 404.
      { source: "/blog/f/:slug*", destination: "/blog", permanent: true },
    ];
  },
};

export default nextConfig;
