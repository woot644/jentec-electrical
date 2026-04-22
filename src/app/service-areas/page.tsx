import type { Metadata } from "next";
import Link from "next/link";
import ServicePageHero from "@/components/ServicePageHero";
import FAQSection, { type FAQ } from "@/components/FAQ";
import { JsonLd, breadcrumbSchema } from "@/lib/schema";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Service Areas — Brisbane & Gold Coast Electrician",
  description:
    "Jentech Electrical covers Greater Brisbane and the Gold Coast hinterland. Dedicated electrician pages for Yeerongpilly, Paddington, Fortitude Valley, Wilston, Bulimba, Teneriffe, Hamilton, West End, Helensvale, and Bundall. QLD Licence 80766.",
  alternates: { canonical: `${SITE.url}/service-areas` },
};

type SuburbCard = {
  slug: string;
  name: string;
  region: "brisbane" | "gold-coast";
  angle: string;
  focus: string;
};

const suburbs: SuburbCard[] = [
  {
    slug: "yeerongpilly",
    name: "Yeerongpilly",
    region: "brisbane",
    angle: "Home base — our workshop is on Station Rd.",
    focus: "Post-war homes, flood remediation, Station Rd commercial, 24/7 emergency.",
  },
  {
    slug: "paddington",
    name: "Paddington",
    region: "brisbane",
    angle: "Heritage Queenslanders under Character Protection overlay.",
    focus: "Full rewires, knob-and-tube replacement, overlay-compliant meter placement, Latrobe Tce commercial.",
  },
  {
    slug: "fortitude-valley",
    name: "Fortitude Valley",
    region: "brisbane",
    angle: "Hospitality density meets heritage Queenslanders.",
    focus: "Venue compliance programs, overnight switchboard upgrades, heritage rewires, AS/NZS 2293 emergency lighting.",
  },
  {
    slug: "wilston",
    name: "Wilston",
    region: "brisbane",
    angle: "Family-renovation suburb — 15–20 year home horizons.",
    focus: "Full rewires, 3-phase supply upgrades, ducted A/C, EV pre-wiring, architect-led lighting.",
  },
  {
    slug: "bulimba",
    name: "Bulimba",
    region: "brisbane",
    angle: "Riverfront premium, architect-led lighting design.",
    focus: "Pool-zone electrical, pontoon power, marine-grade outdoor spec, Oxford Street commercial.",
  },
  {
    slug: "teneriffe",
    name: "Teneriffe",
    region: "brisbane",
    angle: "Converted woolstores, apartment density, strata.",
    focus: "Body corporate coordination, 3-phase apartment work, high-ceiling lighting, ground-floor commercial.",
  },
  {
    slug: "hamilton",
    name: "Hamilton",
    region: "brisbane",
    angle: "Peninsula premium — residential scale at commercial complexity.",
    focus: "3-phase distribution, pool houses, pontoon supply, Racecourse Rd commercial, ducted A/C.",
  },
  {
    slug: "west-end",
    name: "West End",
    region: "brisbane",
    angle: "Brisbane's most mixed-use suburb.",
    focus: "Boundary St hospitality fit-outs, Queenslander rewires, warehouse conversions, Davies Park events.",
  },
  {
    slug: "helensvale",
    name: "Helensvale",
    region: "gold-coast",
    angle: "Gold Coast commercial fit-outs — NOFOMO Gym is ours.",
    focus: "Retail and venue fit-outs, 24/7 access systems, dynamic lighting, UPS, A/C servicing.",
  },
  {
    slug: "bundall",
    name: "Bundall",
    region: "gold-coast",
    angle: "Gold Coast corporate spine — multi-tenancy commercial.",
    focus: "Office and showroom fit-outs, landlord-coordinated electrical, high-bay lighting, UPS for critical systems.",
  },
];

const brisbaneSuburbs = suburbs.filter((s) => s.region === "brisbane");
const goldCoastSuburbs = suburbs.filter((s) => s.region === "gold-coast");

const hubFAQs: FAQ[] = [
  {
    q: "Where is Jentech actually based?",
    a: "Our workshop and office are at 6/190 Station Rd, Yeerongpilly QLD 4105. We're a family-owned business — not a call centre that forwards to whichever subcontractor is closest. Every job is dispatched from Yeerongpilly and delivered by our own electricians.",
  },
  {
    q: "Do you only service the suburbs listed here?",
    a: "No — the pages above cover the suburbs we work in most frequently, but we service the broader Greater Brisbane area (roughly a 25km radius of the CBD) and the Gold Coast hinterland for commercial work. If your suburb isn't listed, call us — we likely already service the area. If you're at the outer edge of the radius, we'll be upfront about any travel time priced into the quote.",
  },
  {
    q: "What's the fastest response you can offer in my area?",
    a: "In Yeerongpilly and the immediate 4105/4104/4107 postcodes, we're usually on site inside 15 minutes during business hours. Inner-Brisbane suburbs within 8km of the workshop — Paddington, West End, Fortitude Valley, Bulimba, Teneriffe, New Farm — are typically 20–30 minutes. Outer-Brisbane and Gold Coast work is scheduled rather than emergency-response dispatched, but we do offer after-hours emergency callouts across the wider network.",
  },
  {
    q: "Why have dedicated pages for individual suburbs?",
    a: "Because electrical work genuinely differs by suburb. Paddington's heritage overlay, Bulimba's pool-zone riverfront, Teneriffe's strata-building apartments, Hamilton's peninsula-scale residential — each has its own compliance, specification, and coordination profile. Rather than one generic 'Brisbane electrician' page, we've built suburb-specific pages so clients know we understand the conditions they actually live and work in.",
  },
  {
    q: "Do you service body corporates and commercial multi-tenancies?",
    a: "Yes — scheduled compliance programs, emergency response, and fit-outs for multi-tenancy buildings and strata across Teneriffe, Newstead, New Farm, Fortitude Valley, and Bundall. Records are kept for the 5-year retention required under Queensland regulation and filed with the body corporate or landlord.",
  },
  {
    q: "Are new suburbs going to be added to the site?",
    a: "Yes. The current pages cover our most active suburbs, but we'll add more — New Farm, Newstead, Red Hill, Rosalie, Bardon, Highgate Hill, Ascot, Clayfield, and others — as the catalogue of local project references and testimonials grows. If you're in one of those and can't find a dedicated page yet, the service still applies — call us the same way.",
  },
];

function SuburbCard({ suburb }: { suburb: SuburbCard }) {
  return (
    <Link
      href={`/service-areas/${suburb.slug}`}
      className="card-hover bg-surface-card border border-border rounded-lg p-8 block h-full"
    >
      <h3 className="text-xl font-bold mb-2 text-neon">{suburb.name}</h3>
      <p className="text-sm font-semibold text-white mb-3">{suburb.angle}</p>
      <p className="text-text-secondary text-sm leading-relaxed mb-4">{suburb.focus}</p>
      <span className="text-xs font-bold text-neon uppercase tracking-wider">
        View {suburb.name} electrician →
      </span>
    </Link>
  );
}

export default function ServiceAreasPage() {
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Jentech Electrical service areas",
    itemListElement: suburbs.map((s, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: `${SITE.url}/service-areas/${s.slug}`,
      name: `Electrician ${s.name}`,
    })),
  };

  return (
    <>
      <JsonLd data={itemListSchema} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: SITE.url },
          { name: "Service Areas", url: `${SITE.url}/service-areas` },
        ])}
      />

      <ServicePageHero
        overline="Where We Work"
        title="Service Areas"
        description="Jentech is based in Yeerongpilly and services Greater Brisbane and the Gold Coast hinterland. The pages below cover the suburbs we work in most frequently — each with its own electrical character, its own compliance profile, and its own reasons for the specific work we do there."
        image="/team-hero.webp"
      />

      {/* Intro */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-bold text-neon uppercase tracking-[3px] mb-4 text-center">
            Suburb-specific electrical
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-center">
            Ten suburbs, ten different electrical profiles
          </h2>
          <div className="space-y-5 text-text-secondary leading-relaxed">
            <p>
              &quot;Brisbane electrician&quot; is a generic search term — and a generic description of the job. In practice, the work we do in <strong className="text-white">Paddington</strong> (Character Protection overlay, pre-1990 wiring, heritage meter placement) has almost nothing in common with the work we do in <strong className="text-white">Bundall</strong> (multi-tenancy coordination, landlord outages, high-bay commercial lighting) or <strong className="text-white">Hamilton</strong> (3-phase distribution, pool houses, pontoon supply, salt-air specification).
            </p>
            <p>
              That&apos;s why we&apos;ve built a dedicated page for each of our most-active suburbs. Every page explains the specific conditions we plan around in that suburb, the services those conditions drive, and — where we have them — the real projects we&apos;ve completed there. If you&apos;re looking for an electrician who understands your postcode rather than a generic &quot;we service Brisbane&quot; line, start with the suburb below and go from there.
            </p>
          </div>
        </div>
      </section>

      {/* Brisbane */}
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-xs font-bold text-neon uppercase tracking-[3px] mb-4">
              Greater Brisbane
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold">
              Eight suburbs across inner Brisbane
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {brisbaneSuburbs.map((s) => (
              <SuburbCard key={s.slug} suburb={s} />
            ))}
          </div>
        </div>
      </section>

      {/* Gold Coast */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-xs font-bold text-neon uppercase tracking-[3px] mb-4">
              Gold Coast
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold">
              Two Gold Coast commercial hubs
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {goldCoastSuburbs.map((s) => (
              <SuburbCard key={s.slug} suburb={s} />
            ))}
          </div>
        </div>
      </section>

      {/* Coverage band */}
      <section className="py-16 bg-surface-card border-y border-border">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <p className="text-3xl font-bold neon-text mb-1">10</p>
              <p className="text-xs uppercase tracking-wider text-text-secondary">
                Dedicated suburb pages
              </p>
            </div>
            <div>
              <p className="text-3xl font-bold neon-text mb-1">25km</p>
              <p className="text-xs uppercase tracking-wider text-text-secondary">
                Greater Brisbane radius
              </p>
            </div>
            <div>
              <p className="text-3xl font-bold neon-text mb-1">GC</p>
              <p className="text-xs uppercase tracking-wider text-text-secondary">
                Commercial hinterland
              </p>
            </div>
            <div>
              <p className="text-3xl font-bold neon-text mb-1">24/7</p>
              <p className="text-xs uppercase tracking-wider text-text-secondary">
                Emergency response
              </p>
            </div>
          </div>
        </div>
      </section>

      <FAQSection
        items={hubFAQs}
        title="Service Areas — FAQs"
        overline="Coverage Questions"
      />

      {/* CTA */}
      <section className="py-24 bg-surface">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-xs font-bold text-neon uppercase tracking-[3px] mb-4">
            Not sure if we cover your suburb?
          </p>
          <h2 className="text-3xl font-bold mb-6">
            Call us — we probably do
          </h2>
          <p className="text-text-secondary mb-8">
            The pages above cover our most-active suburbs. Our actual coverage is wider — Greater Brisbane and Gold Coast hinterland, with scheduled commercial work going further on request. One call will confirm whether we service your area.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:0739149696"
              className="neon-btn px-8 py-4 rounded tracking-wider"
            >
              CALL 07 3914 9696
            </a>
            <Link
              href="/contact"
              className="neon-btn-outline px-8 py-4 rounded tracking-wider"
            >
              REQUEST A QUOTE
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
