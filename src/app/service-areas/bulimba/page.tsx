import type { Metadata } from "next";
import Link from "next/link";
import ServicePageHero from "@/components/ServicePageHero";
import FAQSection, { type FAQ } from "@/components/FAQ";
import { JsonLd, serviceSchema, breadcrumbSchema } from "@/lib/schema";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Electrician Bulimba | Riverfront Homes, Lighting Design & Pool Electrical",
  description:
    "Licensed electrician in Bulimba — riverfront luxury homes, architect-led lighting design, pool-zone compliant electrical, pontoon power, Oxford Street commercial. QLD Licence 80766.",
  alternates: { canonical: `${SITE.url}/service-areas/bulimba` },
};

const SUBURB = "Bulimba";
const SUBURB_URL = `${SITE.url}/service-areas/bulimba`;

const localChallenges = [
  {
    title: "Riverfront salt-air exposure",
    desc: "Bulimba's riverfront and riverside properties sit directly in the path of Brisbane River salt-air, which corrodes standard meter boxes, outdoor fittings, and A/C condenser units faster than inland suburbs. We specify IP66 and marine-grade housings on any exposed equipment, use stainless-steel conduit fixings, and recommend annual corrosion inspections on external hardware.",
  },
  {
    title: "Pool and spa zone compliance",
    desc: "Every second Bulimba home has a pool, and pool-zone electrical is one of the strictest compliance areas in AS/NZS 3000:2018. Zone 0 (inside the water), Zone 1 (within 2m), and Zone 2 (2–3.5m and above) each have different allowable fittings, earthing, and RCD requirements. Non-compliant pool electrical doesn't just fail inspection — it's a genuine electrocution risk. We certify every pool-adjacent installation to current standards.",
  },
  {
    title: "Architect-led lighting expectations",
    desc: "Bulimba homeowners and their architects expect designed lighting, not installed lighting. Layered schemes — task, accent, ambient, feature — with dimmer circuits, LED strip integration, landscape and pool lighting, and smart home control (C-Bus, Clipsal, Philips Hue, Google Home). We scope this at schematic design stage with the architect and interior designer, not after the walls are lined.",
  },
  {
    title: "Pontoon and jetty power",
    desc: "Riverfront Bulimba homes with pontoon or jetty access need marine-grade electrical supply to the water's edge — shoreline GPOs, lighting for the walkway, sometimes power for davits or boat maintenance. This is zone-rated work (marine environment has its own classification) and needs RCD protection, surge protection, and regular inspection. We've installed and certified pontoon power across the riverfront streets.",
  },
];

const servicesInSuburb = [
  {
    title: "Riverfront Residential Electrical",
    desc: "Full rewires, switchboard upgrades, marine-grade outdoor electrical. Coordination with your architect, interior designer, and landscape designer from schematic design through commissioning.",
    href: "/services/residential",
  },
  {
    title: "Pool &amp; Spa Electrical",
    desc: "AS/NZS 3000 pool-zone compliant installations. Pump circuits, pool lighting, spa heater supply, poolside GPOs, salt-chlorinator wiring. Every installation zone-certified.",
    href: "/services/residential",
  },
  {
    title: "Lighting Design &amp; Control",
    desc: "Layered lighting schemes — task, accent, ambient, feature. Dimmer circuits, LED strip integration, smart home control (C-Bus, Clipsal, Google Home). Landscape and garden lighting.",
    href: "/services/residential",
  },
  {
    title: "Switchboard Upgrades for Larger Loads",
    desc: "Modern Bulimba homes run multiple A/C systems, pool equipment, EV charging, and induction cooking simultaneously. We upgrade to 3-phase distribution boards with capacity for everything plus future expansion.",
    href: "/services/switchboards",
  },
  {
    title: "Oxford Street Commercial Fit-Outs",
    desc: "Boutique retail, cafes, and restaurants along Oxford Street. Full electrical and data, feature lighting, emergency compliance, commercial kitchen power, POS and EFTPOS infrastructure.",
    href: "/services/commercial",
  },
  {
    title: "EV Charger Installation",
    desc: "22kW 3-phase AC chargers in marine-grade enclosures. Load-management integration where multiple vehicles share a property. Compatible with all major brands.",
    href: "/services/residential",
  },
];

const bulimbaFAQs: FAQ[] = [
  {
    q: "How do you handle salt-air corrosion on riverfront Bulimba electrical?",
    a: "Specification matters more than brand. We use IP66-rated outdoor fittings (dust-tight, protected against powerful water jets), stainless-steel conduit fixings, marine-grade meter box housings where the box is exposed to prevailing river wind, and polyurethane-coated cable glands. Annual inspection of external hardware catches any early corrosion before it affects the installation. Homes that follow this approach get 20+ year service life out of outdoor fittings; homes with standard inland specification typically need remediation inside 7–10 years.",
  },
  {
    q: "What's actually required for pool-zone electrical compliance?",
    a: "AS/NZS 3000:2018 sets three zones around a pool: Zone 0 (inside the water — only extra-low-voltage, waterproof fittings allowed), Zone 1 (within 2m of the pool edge — limited IP-rated fittings, RCD-protected), and Zone 2 (2–3.5m from edge, or above Zone 1 — still restricted). Every fitting in these zones needs to match the zone's ingress protection rating. Every circuit supplying pool-zone equipment needs RCD protection. Equipotential bonding of all metallic parts (pool ladder, handrails, pump housing) to the main earth is also required. We certify to current standards and issue the paperwork.",
  },
  {
    q: "Can you work with our architect and interior designer on a Bulimba renovation?",
    a: "Yes — most of our Bulimba work is architect-led. We join the project from schematic design through to final commissioning, attend coordination meetings, and feed practical input back on feasibility, cost, and compliance. Recent projects in the area and neighbouring inner-east suburbs have been with grayHAUS, Inaspace Architecture & Design, KO&Co Architecture, and Renee Dunn Architect.",
  },
  {
    q: "Do you install pontoon or jetty power?",
    a: "Yes. Riverfront pontoon electrical supply — shoreline GPOs, walkway lighting, power for davits or boat-lift equipment — is specialised marine-adjacent work. It needs IP66 or IP68 fittings depending on location, RCD protection on every circuit, surge protection, and often isolation at the shore so the pontoon can be de-energised during storms. We've installed and certified this across the Bulimba, Hawthorne, and Norman Park riverfront.",
  },
  {
    q: "What's a realistic budget for a layered lighting design on a Bulimba renovation?",
    a: "It depends on scope. A moderately layered scheme for a 4-bedroom home — dimmable downlights, pendant feature lighting, under-cabinet kitchen lighting, bathroom feature lighting, outdoor deck and garden lighting, smart home control for scenes — typically sits in the $15,000–$30,000 range. A fully designed high-end scheme with bespoke pendants, concealed LED strips in every joinery element, automated landscape lighting, pool-zone feature lighting, and full home automation can go to $60,000+. We scope it at design stage with fitting specifications and quantities so you can see where the budget goes.",
  },
  {
    q: "Can you integrate our lighting with C-Bus or similar smart home systems?",
    a: "Yes. We install and commission C-Bus, Clipsal Wiser, Philips Hue, and Google Home-compatible systems. For new builds we wire in the C-Bus cabling during rough-in. For retrofits we use wireless solutions (Wiser, Hue) where possible. We also handle the scene programming — dinner scene, movie scene, away mode, wake-up sequences — and provide the client with a one-page setup guide and remote support for the first month.",
  },
  {
    q: "Do you service Hawthorne, Balmoral, and Norman Park as well?",
    a: "Yes — all immediate neighbours along the inner-east river strip. The pattern of work is very similar across this corridor: premium residential, riverfront, architect-led, pool and landscape focus. We're often already in the area and can respond quickly.",
  },
];

export default function BulimbaPage() {
  return (
    <>
      <JsonLd
        data={serviceSchema(
          `Electrician ${SUBURB}`,
          `Licensed electrical services for ${SUBURB}, Brisbane — riverfront residential, pool-zone compliance, architect-led lighting design, pontoon power, Oxford Street commercial.`,
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
        description="Bulimba's riverfront homes, premium renovations, and Oxford Street boutique commercial strip all demand an electrician who understands pool-zone compliance, salt-air specification, and architect-led lighting design. That's the work Jentech does — across Bulimba and the wider inner-east river corridor."
        image="/images/20221005-img_9887.webp"
      />

      {/* Opening context */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-bold text-neon uppercase tracking-[3px] mb-4 text-center">
            Jentech in Bulimba
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-center">
            Riverfront specification, architect-led delivery
          </h2>
          <div className="space-y-5 text-text-secondary leading-relaxed">
            <p>
              Bulimba is one of Brisbane&apos;s most electrically demanding residential suburbs — and that&apos;s about specification, not load. Riverfront salt-air corrosion rewards proper outdoor-fitting specification and punishes anyone who doesn&apos;t. Pool-zone compliance is non-negotiable because non-compliant work in these zones is genuinely dangerous. Architect-led lighting design expects a layered, controllable scheme — not a grid of downlights.
            </p>
            <p>
              We spec every Bulimba job to the <strong className="text-white">Brisbane River standard</strong>: marine-grade outdoor fittings, stainless or powder-coated housings, pool-zone certified installations, and full AS/NZS 3000:2018 compliance documentation. For architect-led renovations we join the project at schematic design and stay with it through commissioning — we&apos;ve done this repeatedly with <strong className="text-white">grayHAUS, Inaspace Architecture &amp; Design, KO&amp;Co Architecture, and Renee Dunn Architect</strong> on projects across the inner-east river corridor.
            </p>
            <p>
              Oxford Street&apos;s boutique retail and hospitality is the other side of our Bulimba work — cafes, restaurants, and small retail tenancies needing full electrical and data fit-outs, feature lighting, and ongoing compliance. It&apos;s a different scope from residential but the same attention to specification.
            </p>
          </div>
        </div>
      </section>

      {/* Local challenges */}
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <p className="text-xs font-bold text-neon uppercase tracking-[3px] mb-4">
              What Bulimba Homes Demand
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Four realities of riverfront electrical work
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
              Services in Bulimba
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold">
              What Bulimba residents and Oxford Street businesses call us for
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
              <p className="text-3xl font-bold neon-text mb-1">AS/NZS</p>
              <p className="text-xs uppercase tracking-wider text-text-secondary">
                3000 pool-zone certified
              </p>
            </div>
            <div>
              <p className="text-3xl font-bold neon-text mb-1">Architect</p>
              <p className="text-xs uppercase tracking-wider text-text-secondary">
                Led projects
              </p>
            </div>
          </div>
        </div>
      </section>

      <FAQSection
        items={bulimbaFAQs}
        title="Bulimba Electrician — FAQs"
        overline="Questions We Get in Bulimba"
      />

      {/* CTA */}
      <section className="py-24 bg-surface">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-xs font-bold text-neon uppercase tracking-[3px] mb-4">
            Riverfront, lighting, pool &amp; commercial
          </p>
          <h2 className="text-3xl font-bold mb-6">
            Need an electrician in Bulimba?
          </h2>
          <p className="text-text-secondary mb-8">
            Riverfront rewire, pool-zone compliance, architect-led lighting design, pontoon power, Oxford Street fit-out — we scope properly, we specify to the Brisbane River standard, and we deliver to the tier of home these streets are known for.
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
