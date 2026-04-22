import type { Metadata } from "next";
import Link from "next/link";
import ServicePageHero from "@/components/ServicePageHero";
import FAQSection, { type FAQ } from "@/components/FAQ";
import { JsonLd, serviceSchema, breadcrumbSchema } from "@/lib/schema";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Electrician Hamilton | Premium Riverside Homes, Pool Houses, Portside",
  description:
    "Licensed electrician in Hamilton — premium riverside homes, pool houses, outdoor kitchens, pontoon power, ducted A/C, Racecourse Road commercial. QLD Licence 80766.",
  alternates: { canonical: `${SITE.url}/service-areas/hamilton` },
};

const SUBURB = "Hamilton";
const SUBURB_URL = `${SITE.url}/service-areas/hamilton`;

const localChallenges = [
  {
    title: "Hamilton Hill homes are electrically enormous",
    desc: "Hamilton Hill and the wider Hamilton peninsula host some of Brisbane's largest homes — 800+ square metre builds with multiple A/C zones, pool and pool house electrical, outdoor kitchens and entertaining areas, extensive landscape lighting, and full smart home integration. The electrical distribution is closer to a small commercial building than a standard residence. 3-phase supply is standard, sub-boards are common, and load management matters.",
  },
  {
    title: "River-adjacent salt-air exposure",
    desc: "Hamilton sits directly on the Brisbane River with prevailing southeast winds pushing salt air onto the peninsula. External electrical hardware — meter boxes, outdoor fittings, A/C condensers, pool equipment housings, pontoon supply — corrodes noticeably faster than inland suburbs. Specification to IP66 with marine-grade housings, stainless fixings, and annual corrosion inspection is standard on every Hamilton job.",
  },
  {
    title: "Pool houses, outdoor kitchens, pontoons",
    desc: "Hamilton homes routinely include detached pool houses (often with full kitchen and bathroom — effectively a second residence electrically), outdoor kitchens with BBQ, fridge, ventilation and feature lighting, and pontoon power for boats. Each of these needs dedicated sub-circuits, zone-compliant fittings, and RCD protection tailored to the outdoor-adjacent environment.",
  },
  {
    title: "Racecourse Road commercial density",
    desc: "Racecourse Road is the commercial anchor of Hamilton — restaurants, retail, boutique fitness, medical, specialty services. Tenancies here operate under hospitality-adjacent compliance (emergency lighting, scheduled RCD testing, test-and-tag) and often need fit-outs or refurbishments scheduled around trading hours. Portside Wharf adjacent adds hospitality and mixed-use commercial to the scope.",
  },
];

const servicesInSuburb = [
  {
    title: "Premium Residential Electrical",
    desc: "Large-home builds and renovations. 3-phase distribution, sub-boards, multi-zone A/C, ducted systems, integrated lighting design, home automation, security integration.",
    href: "/services/residential",
  },
  {
    title: "Pool House &amp; Outdoor Kitchen",
    desc: "Detached pool house electrical, outdoor kitchen power and lighting, BBQ and cooking equipment supply, feature lighting for entertaining areas. Zone-compliant and weather-rated throughout.",
    href: "/services/residential",
  },
  {
    title: "Pontoon &amp; Riverfront Power",
    desc: "Shoreline GPOs, pontoon walkway lighting, power for boat-lift equipment. Marine-grade fittings, shoreline isolation for storm events, RCD and surge protection.",
    href: "/services/residential",
  },
  {
    title: "Ducted Air Conditioning",
    desc: "Multi-zone ducted systems for large Hamilton homes. Daikin, Mitsubishi, Fujitsu specification. WiFi control, zoning by room or floor, annual servicing. ARC-certified.",
    href: "/services/air-conditioning",
  },
  {
    title: "Landscape &amp; Feature Lighting",
    desc: "Designed landscape lighting schemes — driveway and garden path lighting, tree uplighting, pool-zone feature lighting, moonlit pergolas. Automated scenes with smart home control.",
    href: "/services/residential",
  },
  {
    title: "Racecourse Road Commercial",
    desc: "Restaurant, retail, and medical fit-outs along Racecourse Road and around Portside. Full electrical and data, commercial kitchen power, feature lighting, compliance programs.",
    href: "/services/commercial",
  },
];

const hamiltonFAQs: FAQ[] = [
  {
    q: "Does a large Hamilton home need 3-phase power?",
    a: "Almost always, yes. A modern Hamilton home with ducted A/C, pool and pool-house electrical, induction cooking, EV charging, outdoor kitchen, and solar will pull loads that exceed single-phase 63A supply. 3-phase gives you 3×63A (or higher) and the ability to balance loads across phases for stable voltage and lower risk of nuisance tripping. For new builds and major renovations we coordinate the Energex supply upgrade at the start of the project so the electrical backbone is sized for everything that follows.",
  },
  {
    q: "How do you handle electrical for a detached pool house?",
    a: "A pool house is electrically a mini-residence — it usually needs lighting, power points, bathroom electrical (RCD-protected), kitchen or bar equipment, and often A/C. We run a dedicated sub-main from the main switchboard (or directly from the meter in some cases) to a dedicated pool-house sub-board with its own RCDs and MCBs. This allows isolation independent of the main house and gives the pool house its own load capacity. All pool-zone proximity fittings are zone-certified.",
  },
  {
    q: "What's involved in pontoon and riverfront electrical on a Hamilton home?",
    a: "Shoreline GPOs, walkway lighting from the yard to the pontoon, and sometimes power for boat-lift equipment. Every circuit is RCD-protected with additional surge protection at the shoreline. The entire pontoon supply is designed to be isolated quickly from the main house — we install a clearly marked disconnect at the shoreline so the pontoon can be de-energised during storms or flood events. All fittings are IP66 or IP68 depending on location.",
  },
  {
    q: "Can you design a layered lighting scheme for a Hamilton home?",
    a: "Yes. For larger Hamilton homes we usually work alongside the architect and interior designer on layered schemes — task (kitchen benches, study desks), accent (artwork, joinery, feature walls), ambient (general room illumination), feature (pendants, sculptural elements). Dimmer circuits throughout, smart home control for scenes (entertain, dinner, movie, away, wake). For outdoor we layer landscape lighting, pool feature lighting, and security lighting with motion sensors. Scope at design stage with fitting specifications.",
  },
  {
    q: "Do you handle annual servicing on our ducted air conditioning?",
    a: "Yes. We ARC-certify our refrigerant handling (Licence AU068040) and provide annual servicing on all commercial and residential A/C systems we install. Services include refrigerant level check, condenser and evaporator clean, drain line clear, electrical component inspection, thermostat calibration, and filter replacement. We calendar the visits so clients don't have to track them, and we catch issues like condenser corrosion and drain blockages before they become faults in peak summer.",
  },
  {
    q: "What's involved in an EV charger install for a Hamilton home?",
    a: "For a standard 22kW AC charger, we run a dedicated 32A 3-phase circuit from the main switchboard to the charging location, usually the garage. For homes with multiple EVs we specify load-managed chargers that balance draw across the building's total capacity. The charger is installed in a marine-grade enclosure (important close to the river), commissioned with the client's chosen backend (JET Charge, Chargefox, Ocular, Wallbox), and documented for the client's records.",
  },
  {
    q: "Do you service Ascot, Clayfield, and Hendra as well?",
    a: "Yes — all immediate Hamilton neighbours. The pattern of work is similar across this corridor: premium residential, larger homes, pool and landscape focus. Racecourse Road blends into Kingsford Smith Drive and the commercial fabric continues — we service restaurants, cafes, and retail across the whole commercial strip.",
  },
];

export default function HamiltonPage() {
  return (
    <>
      <JsonLd
        data={serviceSchema(
          `Electrician ${SUBURB}`,
          `Licensed electrical services for ${SUBURB}, Brisbane — premium residential, pool houses, riverfront, pontoon power, landscape lighting, Racecourse Road commercial.`,
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
        description="Hamilton's Hill and riverfront homes are among Brisbane's most electrically demanding — 3-phase supply, multiple sub-boards, pool houses, outdoor kitchens, pontoon power, landscape lighting, and full smart home integration. Jentech delivers that scale of residential work, plus Racecourse Road commercial."
        image="/images/elv_4716.webp"
      />

      {/* Opening context */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-bold text-neon uppercase tracking-[3px] mb-4 text-center">
            Jentech in Hamilton
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-center">
            Residential scale that behaves like commercial
          </h2>
          <div className="space-y-5 text-text-secondary leading-relaxed">
            <p>
              Hamilton is where a &quot;home&quot; stops being residential-scale electrically. Large peninsula homes routinely include <strong className="text-white">3-phase supply, multiple sub-boards, detached pool houses, outdoor kitchens, pontoon-adjacent power, and designed lighting</strong> across a property footprint larger than many Brisbane commercial tenancies. The electrical backbone is closer to a small office building than a standard residence.
            </p>
            <p>
              That scale changes how we approach the work. We plan the distribution like a commercial project — main switchboard at the supply point, sub-boards feeding the pool house, garage, outdoor kitchen, and detached studios, each with its own isolation and RCD coverage. Load management matters: a Hamilton home can&apos;t afford nuisance tripping when half the lighting and the pool pump are on one overloaded phase.
            </p>
            <p>
              The other side of Hamilton is the Racecourse Road commercial strip — restaurants, retail, medical, boutique fitness — plus Portside Wharf&apos;s hospitality and mixed-use tenancies. This work is more familiar Brisbane commercial: full fit-outs, ongoing compliance programs, emergency lighting to AS/NZS 2293.2, scheduled RCD testing, and after-hours coordination to avoid trading disruption.
            </p>
          </div>
        </div>
      </section>

      {/* Local challenges */}
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <p className="text-xs font-bold text-neon uppercase tracking-[3px] mb-4">
              What Hamilton Properties Need
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Four realities of premium peninsula electrical
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
              Services in Hamilton
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold">
              What Hamilton homeowners and businesses call us for
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
              <p className="text-3xl font-bold neon-text mb-1">3-phase</p>
              <p className="text-xs uppercase tracking-wider text-text-secondary">
                Premium distribution
              </p>
            </div>
            <div>
              <p className="text-3xl font-bold neon-text mb-1">ARC</p>
              <p className="text-xs uppercase tracking-wider text-text-secondary">
                Refrigerant Licence AU068040
              </p>
            </div>
          </div>
        </div>
      </section>

      <FAQSection
        items={hamiltonFAQs}
        title="Hamilton Electrician — FAQs"
        overline="Questions We Get in Hamilton"
      />

      {/* CTA */}
      <section className="py-24 bg-surface">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-xs font-bold text-neon uppercase tracking-[3px] mb-4">
            Premium residential &amp; Racecourse Road commercial
          </p>
          <h2 className="text-3xl font-bold mb-6">
            Need an electrician in Hamilton?
          </h2>
          <p className="text-text-secondary mb-8">
            Hill-top rebuild, pool house, pontoon supply, Racecourse Road fit-out — we scope at the right scale, we coordinate Energex and building trades, and we deliver to the standard these properties demand.
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
