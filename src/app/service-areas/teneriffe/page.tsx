import type { Metadata } from "next";
import Link from "next/link";
import ServicePageHero from "@/components/ServicePageHero";
import FAQSection, { type FAQ } from "@/components/FAQ";
import { JsonLd, serviceSchema, breadcrumbSchema } from "@/lib/schema";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Electrician Teneriffe | Apartment 3-Phase, Woolstore Conversions, Strata",
  description:
    "Licensed electrician in Teneriffe — woolstore apartment electrical, 3-phase to individual apartments, body corporate coordination, heritage commercial. QLD Licence 80766.",
  alternates: { canonical: `${SITE.url}/service-areas/teneriffe` },
};

const SUBURB = "Teneriffe";
const SUBURB_URL = `${SITE.url}/service-areas/teneriffe`;

const localChallenges = [
  {
    title: "Converted woolstore apartments",
    desc: "Much of Teneriffe's residential stock sits inside converted heritage woolstores — The Mills, Macarthur, Teneriffe Woolstore, and similar. These buildings have unusual electrical profiles: high ceilings that affect lighting and smoke alarm placement, original structural columns that constrain cable routing, and heritage-listed facades that restrict any external meter or conduit work. Apartment rewires and lighting redesigns need careful planning with body corporate.",
  },
  {
    title: "Body corporate coordination",
    desc: "Apartment electrical work in Teneriffe almost always involves body corporate or strata approval. Common-area supply, shared-wall cable runs, distribution board access, and any work that affects the building envelope requires committee notification, contractor insurance verification, and often a scheduled out-of-hours window. We're used to this process and we manage the paperwork on your behalf.",
  },
  {
    title: "3-phase supply into individual apartments",
    desc: "Larger Teneriffe apartments — particularly penthouses and dual-level conversions — often have 3-phase supply running to the unit for ducted A/C, larger cooking setups, and multi-zone lighting. Working with 3-phase in a residential context inside a multi-storey building needs coordinated isolation at the main switch room, tenant notification for any shared outage, and strict reinstatement procedures.",
  },
  {
    title: "Ground-floor heritage commercial",
    desc: "Teneriffe's ground floor is a mix of hospitality (cafes, restaurants along Vernon Tce and Florence St), boutique retail, and co-working space. These tenancies are often in heritage-envelope buildings with the same constraints that apply to the residential floors above — cable routing, meter placement, external hardware — plus their own commercial compliance load (emergency lighting, RCD testing, test-and-tag).",
  },
];

const servicesInSuburb = [
  {
    title: "Apartment Rewires &amp; Renovations",
    desc: "Full apartment electrical overhauls including high-ceiling lighting redesigns, kitchen and bathroom rewires, and A/C integration. Coordinated with body corporate and delivered to strata-approved schedules.",
    href: "/services/residential",
  },
  {
    title: "Body Corporate &amp; Strata Electrical",
    desc: "Common-area lighting, emergency lighting compliance, distribution board maintenance, lift power coordination, scheduled RCD testing for the whole building. We can contract to individual owners or to the body corporate.",
    href: "/services/commercial",
  },
  {
    title: "3-Phase Apartment Work",
    desc: "3-phase circuits for ducted A/C, EV charging in apartment car parks, multi-zone lighting. Coordinated isolation and tenant notification handled on your behalf.",
    href: "/services/switchboards",
  },
  {
    title: "Heritage Woolstore Lighting",
    desc: "High-ceiling lighting design for converted woolstore apartments. Pendant runs, architectural uplighting, integration with original structural features, smart home control.",
    href: "/services/residential",
  },
  {
    title: "Ground-Floor Commercial Fit-Outs",
    desc: "Cafes, restaurants, retail, and co-working tenancies along Vernon Tce and Florence St. Full electrical, emergency lighting, compliance programs, and scheduled testing.",
    href: "/services/commercial",
  },
  {
    title: "EV Charging in Apartment Buildings",
    desc: "Car park EV charger installations coordinated with body corporate — single-user chargers, shared-user with RFID access, or building-wide load-managed systems. Common-supply versus meter-to-owner configurations.",
    href: "/services/residential",
  },
];

const teneriffeFAQs: FAQ[] = [
  {
    q: "Do we need body corporate approval for electrical work in our Teneriffe apartment?",
    a: "For work entirely inside your apartment that doesn't affect shared infrastructure — replacing light fittings, adding internal power points, installing A/C indoor units — usually no. For anything that touches the building envelope, common-area power, shared-wall cable runs, the distribution board, or the building exterior (including A/C condenser placement), yes — body corporate approval is required before work starts. We're used to preparing the approval submission on your behalf: scope of work, licensed contractor evidence, public liability insurance, and proposed schedule.",
  },
  {
    q: "Can you do a woolstore apartment rewire without disrupting neighbouring apartments?",
    a: "Almost always, yes. The apartment's own distribution sub-board can usually be isolated independently of neighbours. Where a shared wall cable run is needed, we schedule that section for an out-of-hours window — typically early morning or evening — and notify the neighbouring apartment directly. Full apartment rewires in woolstore buildings usually take 4–7 working days with staged room isolation so the kitchen, bathroom, and main bedroom stay live.",
  },
  {
    q: "How do you handle lighting design for a converted woolstore's high ceilings?",
    a: "High ceilings are actually an opportunity. We design layered schemes that use the volume — suspended pendants at multiple heights, uplighting on original timber beams, recessed perimeter lighting to define zones. Smart home control (C-Bus, Clipsal, Philips Hue) lets you set scenes: daytime full-bright, evening warm and dimmed, movie scene, entertaining scene. We scope with you at design stage and provide fitting samples on-site before committing.",
  },
  {
    q: "Does the building's heritage listing affect electrical work?",
    a: "Mostly externally, not internally. Internal electrical work is free from heritage constraints. External changes — meter relocations, conduit runs across façades, A/C condensers on external walls, any visible hardware — need to comply with the building's heritage listing conditions and usually require body corporate approval as well. We scope these constraints at quote stage so there are no surprises.",
  },
  {
    q: "Can you install an EV charger in a Teneriffe apartment car park?",
    a: "Yes — this is increasingly common. The install depends on the building's infrastructure: some buildings allow individual apartments to run a dedicated circuit from their own meter to a parking bay; others require shared-user chargers with RFID access and separate billing; very modern buildings have building-wide load-managed systems where every bay can host a charger without overloading the building's supply. We scope the options with body corporate and deliver the approach the building allows.",
  },
  {
    q: "Do you run scheduled compliance testing for apartment buildings in Teneriffe?",
    a: "Yes — as a scope for body corporate. 6-monthly emergency and exit lighting testing to AS/NZS 2293.2, 6-monthly common-area RCD push-button testing, 12-monthly operational RCD testing, scheduled lift power compliance, test-and-tag of common-area portable appliances (vacuums, entry sign lighting, leasing office equipment). Records are provided to the body corporate and held for the 5-year retention period required by law.",
  },
  {
    q: "Do you service New Farm, Newstead, and Fortitude Valley apartment buildings too?",
    a: "Yes — the work is effectively the same across this apartment corridor. We regularly service body corporate contracts and individual apartments in New Farm, Newstead, and Fortitude Valley. Scheduled compliance programs, emergency response, and renovation work are all part of the ongoing scope.",
  },
];

export default function TeneriffePage() {
  return (
    <>
      <JsonLd
        data={serviceSchema(
          `Electrician ${SUBURB}`,
          `Licensed electrical services for ${SUBURB}, Brisbane — apartment rewires, body corporate electrical, 3-phase apartment work, heritage woolstore lighting, ground-floor commercial.`,
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
        description="Teneriffe is apartment territory — converted heritage woolstores, modern towers, ground-floor hospitality along Vernon Tce and Florence St. Jentech handles the body corporate coordination, the 3-phase apartment work, the high-ceiling lighting design, and the scheduled compliance programs that building owners and strata committees rely on."
        image="/images/20221005-img_0284.webp"
      />

      {/* Opening context */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-bold text-neon uppercase tracking-[3px] mb-4 text-center">
            Jentech in Teneriffe
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-center">
            Apartment-specialist electrical, delivered through body corporate
          </h2>
          <div className="space-y-5 text-text-secondary leading-relaxed">
            <p>
              Teneriffe is a different kind of electrical suburb to its neighbours. Where Bulimba is riverfront free-standing homes and Newstead is new-build towers, Teneriffe is <strong className="text-white">converted heritage woolstores</strong>: The Mills, Macarthur, Teneriffe Woolstore, and the cluster of 1990s and 2000s conversions that defined inner-east apartment living in Brisbane.
            </p>
            <p>
              Working in these buildings is specialised. Every job touches body corporate at some level — either for approval to work in your own apartment, or because the scope is a building-wide compliance program contracted through strata. High ceilings change how lighting is designed. Original structural columns and exposed timber beams affect cable routing. Heritage-listed envelopes restrict anything visible from the street. We plan for all of this at quote stage.
            </p>
            <p>
              For individual apartment owners, our scope is usually a renovation or rewire — with body corporate approval handled on your behalf. For strata committees, our scope is a <strong className="text-white">scheduled compliance program</strong>: 6-monthly emergency lighting, 6-monthly and 12-monthly RCD testing, test-and-tag, common-area lighting maintenance, and emergency response for lift power or distribution board faults. Records are filed with the committee and held for the 5-year retention required under Queensland regulation.
            </p>
          </div>
        </div>
      </section>

      {/* Local challenges */}
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <p className="text-xs font-bold text-neon uppercase tracking-[3px] mb-4">
              What Teneriffe Apartments Need
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Four realities of heritage-apartment electrical
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
              Services in Teneriffe
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold">
              What apartment owners and strata committees call us for
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
              <p className="text-3xl font-bold neon-text mb-1">Strata</p>
              <p className="text-xs uppercase tracking-wider text-text-secondary">
                Compliance programs
              </p>
            </div>
            <div>
              <p className="text-3xl font-bold neon-text mb-1">5 yr</p>
              <p className="text-xs uppercase tracking-wider text-text-secondary">
                Compliance retention
              </p>
            </div>
          </div>
        </div>
      </section>

      <FAQSection
        items={teneriffeFAQs}
        title="Teneriffe Electrician — FAQs"
        overline="Questions We Get in Teneriffe"
      />

      {/* CTA */}
      <section className="py-24 bg-surface">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-xs font-bold text-neon uppercase tracking-[3px] mb-4">
            Apartments, strata &amp; commercial
          </p>
          <h2 className="text-3xl font-bold mb-6">
            Need an electrician in Teneriffe?
          </h2>
          <p className="text-text-secondary mb-8">
            Apartment rewire, woolstore lighting design, body corporate compliance program, ground-floor commercial fit-out — we handle the strata layer, we meet the compliance load, and we work to the heritage envelope the buildings demand.
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
