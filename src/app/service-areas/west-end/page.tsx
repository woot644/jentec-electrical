import type { Metadata } from "next";
import Link from "next/link";
import ServicePageHero from "@/components/ServicePageHero";
import FAQSection, { type FAQ } from "@/components/FAQ";
import { JsonLd, serviceSchema, breadcrumbSchema } from "@/lib/schema";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Electrician West End | Boundary Street Hospitality, Queenslander Rewires",
  description:
    "Licensed electrician in West End — Boundary Street hospitality fit-outs, Queenslander rewires, warehouse conversions, Davies Park events, South Bank-adjacent commercial. QLD Licence 80766.",
  alternates: { canonical: `${SITE.url}/service-areas/west-end` },
};

const SUBURB = "West End";
const SUBURB_URL = `${SITE.url}/service-areas/west-end`;

const localChallenges = [
  {
    title: "Brisbane's most mixed-use suburb",
    desc: "West End packs Queenslanders, warehouse conversions, new-build apartments, hospitality, small-lot retail, and festival precincts into one tight area. An electrician working here has to move between a Queenslander rewire at 9am and a Boundary Street cafe switchboard fault at 2pm. The variety is the point — and it's why a generalist commercial electrician doesn't last in West End.",
  },
  {
    title: "Boundary Street hospitality compliance",
    desc: "Boundary Street, Vulture Street, and the Hardgrave Road cluster host dozens of cafes, restaurants, bars, and specialty food venues. Every one is subject to commercial compliance: emergency lighting to AS/NZS 2293.2, scheduled RCD testing, test-and-tag, commercial kitchen power, exhaust and grease-trap electrical, EFTPOS infrastructure. We run scheduled programs so operators don't have to track the dates.",
  },
  {
    title: "Character-home rewires alongside new builds",
    desc: "West End's housing stock is half heritage Queenslander and half modern infill. Queenslanders here often have pre-1990 TPS wiring or earlier VIR cable that's well past service life. Rewires need to preserve original features — VJ timber linings, pressed metal ceilings, stained glass — while bringing the home up to AS/NZS 3000:2018 compliance. Modern infill builds are electrically straightforward but sit right next door.",
  },
  {
    title: "Festival and event electrical",
    desc: "West End runs a busy calendar of markets and events — Davies Park markets every Saturday, Jan Power's Farmers Market on Sundays, plus festivals and street events along Boundary. Temporary electrical installations for events need compliance paperwork, RCD-protected distribution boards, generator integration, and certification from a licensed contractor. We handle this for event organisers on a per-event basis.",
  },
];

const servicesInSuburb = [
  {
    title: "Hospitality Fit-Outs &amp; Compliance",
    desc: "Boundary Street cafes, restaurants, bars. Full electrical and data, commercial kitchen, emergency lighting, test-and-tag, scheduled RCD testing. After-hours work to avoid trading disruption.",
    href: "/services/commercial",
  },
  {
    title: "Queenslander Rewires",
    desc: "Pre-1990 wiring replaced to current standards. Preservation of original features — VJ timber, pressed metal, stained glass. Staged room-by-room so you can stay in the home during the work.",
    href: "/services/residential",
  },
  {
    title: "Warehouse Conversion Electrical",
    desc: "Converted industrial tenancies and live-work spaces. High-ceiling lighting, exposed conduit aesthetics where wanted, 3-phase for workshop or studio space, data and power for hybrid living.",
    href: "/services/commercial",
  },
  {
    title: "Switchboard Upgrades",
    desc: "Replacement of ceramic-fuse and rewireable boards with modern RCD-protected units. Outdoor weatherproofing where the board is verandah-mounted — common in West End Queenslanders.",
    href: "/services/switchboards",
  },
  {
    title: "Event &amp; Market Electrical",
    desc: "Davies Park, Jan Power's Farmers Market, and festival setups. Temporary RCD-protected distribution, generator integration, vendor-site wiring, compliance certification per event.",
    href: "/services/commercial",
  },
  {
    title: "24/7 Emergency Response",
    desc: "Boundary Street venues can't afford downtime in trading hours. We respond to commercial emergencies 24/7 — power failures, board faults, kitchen equipment trips, emergency lighting outages.",
    href: "/emergency-electrician-brisbane",
  },
];

const westEndFAQs: FAQ[] = [
  {
    q: "Can you do an after-hours switchboard upgrade for a Boundary Street cafe?",
    a: "Yes — most of our hospitality switchboard work happens between 10pm and 6am so the venue is trading normally the next morning. We plan the work so the main isolation happens inside that window, the new board is tested and energised before dawn, and any residual commissioning is done the following morning outside peak hours. After-hours loadings are quoted up front.",
  },
  {
    q: "Our Queenslander has original 1950s wiring — what's involved in rewiring it?",
    a: "A full rewire on a West End Queenslander typically takes 3–5 working days for rough-in and 2–3 days for fit-off. We stage it room-by-room so you can stay in the home. Original features (pressed metal, VJ linings, stained glass, antique pendants) are protected before work starts and preserved throughout. Cable routing follows existing chases, top-of-wall runs behind the cornice, and under-floor drops where possible. On completion we issue a Certificate of Electrical Safety.",
  },
  {
    q: "Do you handle commercial kitchen power for Boundary Street restaurants?",
    a: "Yes. Commercial kitchen electrical scope usually includes dedicated 3-phase circuits for heavy cooking equipment (ovens, grills, fryers, dishwashers), waterproof GPOs rated for kitchen environment, RCD protection on every circuit, bonding of metallic kitchen equipment, and coordination with the mechanical contractor for exhaust fan power. We handle the compliance paperwork for your commercial kitchen inspection.",
  },
  {
    q: "Can you set up temporary electrical for Davies Park markets or a West End event?",
    a: "Yes. Temporary event electrical for markets and festivals requires licensed setup and compliance certification. We provide RCD-protected distribution boards, generator integration if grid supply is insufficient, vendor stall wiring with IP-rated connections for outdoor use, and a site compliance certificate that satisfies Brisbane City Council and insurance requirements. Priced per event depending on scale.",
  },
  {
    q: "Is West End's character overlay as restrictive as Paddington's?",
    a: "Less so. Parts of West End sit under Brisbane City Council's Traditional Building Character overlay, but it's not as uniformly heritage-protected as Paddington. The overlay does still restrict exterior changes — visible meter boxes, conduit on street-facing facades, solar panel visibility — for homes inside the overlay. We scope these constraints at quote stage. Internal electrical work is unaffected.",
  },
  {
    q: "Can you support a West End venue with ongoing compliance testing?",
    a: "Yes. We run scheduled compliance programs for West End hospitality: 6-monthly emergency lighting discharge testing, 6-monthly RCD push-button testing, 12-monthly operational RCD testing, annual test-and-tag of portable appliances. Records filed for the 5-year retention required under Queensland regulation, available on email for your insurer or a WHSQ audit.",
  },
  {
    q: "Do you service Highgate Hill, South Brisbane, and Kangaroo Point as well?",
    a: "Yes — the West End corridor extends naturally into Highgate Hill (similar character-home mix), South Brisbane (mixed-use with Southbank adjacency), and Kangaroo Point (Queenslanders and modern apartments). Our work pattern across this corridor is largely the same — hospitality, Queenslander rewires, commercial compliance.",
  },
];

export default function WestEndPage() {
  return (
    <>
      <JsonLd
        data={serviceSchema(
          `Electrician ${SUBURB}`,
          `Licensed electrical services for ${SUBURB}, Brisbane — Boundary Street hospitality, Queenslander rewires, warehouse conversions, event electrical, commercial compliance.`,
          SUBURB_URL
        )}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: SITE.url },
          { name: "Service Areas", url: `${SITE.url}/service-areas` },
          { name: SUBURB, url: SUBURB_URL },
        ])}
      />

      <ServicePageHero
        overline="Service Area"
        title={`Electrician ${SUBURB}`}
        description="West End packs everything into one suburb — Queenslander rewires, Boundary Street hospitality fit-outs, warehouse conversions, Davies Park events, new-build apartments. Jentech works across every scope this suburb produces, with the compliance paperwork and after-hours coordination each one demands."
        image="/images/20221111-img_0652-3549x5116.webp"
      />

      {/* Opening context */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-bold text-neon uppercase tracking-[3px] mb-4 text-center">
            Jentech in West End
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-center">
            Brisbane&apos;s most mixed-use suburb, covered end to end
          </h2>
          <div className="space-y-5 text-text-secondary leading-relaxed">
            <p>
              West End is the most mixed-use suburb in inner Brisbane, and the electrical work reflects that. A typical week here might include a <strong className="text-white">Queenslander rewire</strong> in the morning, an <strong className="text-white">after-hours switchboard upgrade for a Boundary Street cafe</strong> overnight, a <strong className="text-white">warehouse conversion sub-board install</strong> mid-week, and a <strong className="text-white">Davies Park market event setup</strong> on the Saturday. The variety is the point.
            </p>
            <p>
              For hospitality operators — and West End has a lot of them — we run <strong className="text-white">scheduled compliance programs</strong>: 6-monthly emergency lighting testing, 6-monthly and 12-monthly RCD testing, test-and-tag, commercial kitchen inspection support. Records filed for the 5-year retention required under Queensland regulation. Emergency response 24/7 for power failures, board faults, and kitchen equipment trips that happen when they&apos;re least convenient.
            </p>
            <p>
              For residents, West End is a Queenslander-rewire suburb. A lot of homes here still run pre-1990 wiring — VIR cable, early TPS, old ceramic-fuse boards — that&apos;s now well past service life. We rewire carefully, preserving original VJ timber, pressed metal, and stained glass where they exist, and stage the work so you can stay in the home.
            </p>
          </div>
        </div>
      </section>

      {/* Local challenges */}
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <p className="text-xs font-bold text-neon uppercase tracking-[3px] mb-4">
              What West End Needs
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Four realities of Brisbane&apos;s most eclectic suburb
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {localChallenges.map((c) => (
              <div
                key={c.title}
                className="card-hover bg-surface-card border border-border rounded-lg p-8"
              >
                <h3 className="text-xl font-bold mb-3">{c.title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services in suburb */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-xs font-bold text-neon uppercase tracking-[3px] mb-4">
              Services in West End
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold">
              What West End residents and venues call us for
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicesInSuburb.map((s) => (
              <Link
                key={s.title}
                href={s.href}
                className="card-hover bg-surface-card border border-border rounded-lg p-8 block"
              >
                <h3 className="text-lg font-bold mb-3 text-neon">{s.title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed mb-4">{s.desc}</p>
                <span className="text-xs font-bold text-neon uppercase tracking-wider">
                  Learn more →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Trust band */}
      <section className="py-16 bg-surface-card border-y border-border">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <p className="text-3xl font-bold neon-text mb-1">5.0★</p>
              <p className="text-xs uppercase tracking-wider text-text-secondary">
                158 Google reviews
              </p>
            </div>
            <div>
              <p className="text-3xl font-bold neon-text mb-1">80766</p>
              <p className="text-xs uppercase tracking-wider text-text-secondary">
                QLD Electrical Licence
              </p>
            </div>
            <div>
              <p className="text-3xl font-bold neon-text mb-1">24/7</p>
              <p className="text-xs uppercase tracking-wider text-text-secondary">
                Hospitality emergency
              </p>
            </div>
            <div>
              <p className="text-3xl font-bold neon-text mb-1">AS/NZS</p>
              <p className="text-xs uppercase tracking-wider text-text-secondary">
                2293 compliance programs
              </p>
            </div>
          </div>
        </div>
      </section>

      <FAQSection
        items={westEndFAQs}
        title="West End Electrician — FAQs"
        overline="Questions We Get in West End"
      />

      {/* CTA */}
      <section className="py-24 bg-surface">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-xs font-bold text-neon uppercase tracking-[3px] mb-4">
            Hospitality, residential, events &amp; emergencies
          </p>
          <h2 className="text-3xl font-bold mb-6">
            Need an electrician in West End?
          </h2>
          <p className="text-text-secondary mb-8">
            Boundary Street fit-out, Queenslander rewire, warehouse conversion, market event, 2am venue emergency — we cover the full spectrum of West End electrical, and we answer the phone when it&apos;s needed.
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
