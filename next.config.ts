import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 301 redirects from the legacy GoDaddy site URL structure to the new
  // App Router URLs. Populate as we audit the old site (Wayback Machine
  // snapshots + GoDaddy admin sitemap before DNS cutover, plus any
  // inbound links surfaced in Search Console after the property is
  // verified).
  //
  // Each entry preserves SEO equity from any old-URL backlinks that
  // architects, suppliers, or directories still point at. Without this,
  // those links 404 the moment DNS lands here.
  async redirects() {
    return [
      // Common WordPress/GoDaddy boilerplate paths
      { source: "/index.html", destination: "/", permanent: true },
      { source: "/home", destination: "/", permanent: true },
      // Likely old service / about / contact patterns — verify each
      // against the live GoDaddy site before launch and remove any
      // that don't actually exist there.
      { source: "/our-services", destination: "/services", permanent: true },
      { source: "/about-us", destination: "/team", permanent: true },
      { source: "/about", destination: "/team", permanent: true },
      { source: "/contact-us", destination: "/contact", permanent: true },
    ];
  },
};

export default nextConfig;
