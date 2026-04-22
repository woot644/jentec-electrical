import type { Metadata } from "next";
import Link from "next/link";
import ServicePageHero from "@/components/ServicePageHero";
import FAQSection, { type FAQ } from "@/components/FAQ";
import { JsonLd, serviceSchema, breadcrumbSchema } from "@/lib/schema";
import { SITE } from "@/lib/site";
import { getProject } from "@/data/projects";

export const metadata: Metadata = {
  title: "Electrician Bundall | Gold Coast Commercial Electrical & Fit-Outs",
  description:
    "Licensed electrician in Bundall — commercial fit-outs, office parks, multi-tenancy electrical, dynamic lighting, UPS. Home of our NOFOMO Gym Bundall project. QLD Licence 80766.",
  alternates: { canonical: `${SITE.url}/service-areas/bundall` },
};

const SUBURB = "Bundall";
const SUBURB_URL = `${SITE.url}/service-areas/bundall`;

const localChallenges = [
  {
    title: "Bundall is Gold Coast commercial density",
    desc: "Bundall concentrates a significant share of the Gold Coast's corporate and commercial real estate — office towers, car dealerships, showrooms, restaurants on Bundall Rd, and the Racecourse precinct. Electrical work here is almost never residential — it's multi-tenancy coordination, landlord approvals, after-hours access, and commercial compliance from the first scope meeting.",
  },
  {
    title: "Multi-tenancy switchboard access",
    desc: "Most Bundall buildings share distribution infrastructure across tenants. Working on one tenancy's circuits often means coordinating access to a main switch room controlled by the building manager, scheduling outages against other tenants' trading hours, and documenting every isolation and reconnection. We're used to this coordination layer and we build it into the project timeline up front.",
  },
  {
    title: "Coastal-adjacent corrosion",
    desc: "Bundall sits close enough to the coast that external electrical hardware — meter boxes, exterior lighting, A/C condenser units, EV charging points — picks up salt-air exposure faster than inland Brisbane. We specify IP66 fittings with stainless or marine-grade housings on any exposed installation, and we service external equipment annually to catch corrosion before it becomes a fault.",
  },
  {
    title: "High-bay commercial lighting",
    desc: "Car dealerships, showrooms, and larger commercial venues in Bundall need high-bay LED installations that balance output, energy efficiency, and colour rendering. We specify fittings matched to ceiling height and application, coordinate with the client's interior designer or architect on fitting positions, and handle the control systems — dimming, scene control, daylight sensing where appropriate.",
  },
];

const servicesInSuburb = [
  {
    title: "Commercial Fit-Outs",
    desc: "Full office, retail, showroom, and venue fit-outs. Power, data, LED lighting, emergency lighting, A/C integration. Delivered to landlord handover schedules.",
    href: "/services/commercial",
  },
  {
    title: "Multi-Tenancy Electrical",
    desc: "Coordination with building management, sub-board isolation, after-hours outage planning, tenancy compliance records for landlord audits.",
    href: "/services/commercial",
  },
  {
    title: "High-Bay Commercial Lighting",
    desc: "Dealership, showroom, and venue lighting. LED fittings matched to ceiling height, colour rendering for retail, dimming and scene control.",
    href: "/services/commercial",
  },
  {
    title: "Dynamic Venue Lighting",
    desc: "DMX, DALI, Casambi systems for venues and high-end retail. Scene programming, music-sync, integration with venue management software.",
    href: "/services/commercial",
  },
  {
    title: "Air Conditioning — Commercial",
    desc: "Multi-split and ducted systems for Bundall offices and showrooms. Year-round servicing to maintain efficiency in Gold Coast humidity. ARC-certified.",
    href: "/services/air-conditioning",
  },
  {
    title: "UPS for Critical Systems",
    desc: "PSS Distributors service agent. UPS sizing, installation, and servicing for server rooms, EFTPOS, 24/7 venues. Long-life batteries for QLD conditions.",
    href: "/services/ups-systems",
  },
];

const bundallFAQs: FAQ[] = [
  {
    q: "Do you travel from Brisbane to do commercial work in Bundall?",
    a: "Yes, regularly. Bundall is part of our defined Gold Coast service area and we run commercial projects there alongside Helensvale, Broadbeach, and the wider northern Gold Coast. Travel time is priced transparently at quote stage, and for larger fit-outs we coordinate multi-day site work so the van stays on the Gold Coast across the project. Our NOFOMO Gym Bundall project is one of our completed examples.",
  },
  {
    q: "How do you coordinate electrical work in a multi-tenanted Bundall building?",
    a: "First contact is usually with the building manager or facilities contact to confirm protocols, out-of-hours access, and which outages need notification to other tenants. We then schedule isolations either overnight or during a shoulder trading period to minimise disruption. All switchboard work, meter changes, and sub-board modifications are documented and filed with the building manager as part of the handover package.",
  },
  {
    q: "Can you do a full showroom or dealership electrical fit-out?",
    a: "Yes — this is a regular scope for us. Car dealership fit-outs typically include high-bay showroom lighting designed to flatter vehicle paint, feature lighting on display vehicles, back-of-house workshop power (usually 3-phase), customer-lounge lighting and power, EV charging for the service bay and customer demo, CCTV, and digital signage. We coordinate with the interior designer and handle the full fit-out delivery.",
  },
  {
    q: "Do you work after-hours in Bundall to avoid disrupting businesses?",
    a: "Yes. A significant share of our Bundall commercial work happens outside business hours — evenings, early mornings, weekends. Landlord protocols usually require this for switchboard or main supply work, and tenants prefer it for fit-out activities that generate noise or dust. After-hours loadings are quoted up front.",
  },
  {
    q: "What's involved in installing EV charging for a Bundall commercial tenancy?",
    a: "For a single standard 22kW AC charger, we run a dedicated 32A 3-phase circuit from the main switchboard, install the charger in a marine-grade enclosure (important this close to the coast), provide load-management integration if multiple chargers share supply, and commission with the client's chosen backend (JET Charge, Chargefox, Ocular, etc.). Quote varies with distance from the switchboard and whether trenching is involved.",
  },
  {
    q: "Do you handle commercial air conditioning installation and service in Bundall?",
    a: "Yes. We're ARC-certified for refrigerant handling (Licence AU068040) and regularly install and service ducted and multi-split commercial systems. For Bundall tenants we offer scheduled annual servicing to catch refrigerant issues, condenser corrosion, and drain line blockages before they cause downtime.",
  },
  {
    q: "Can you provide compliance paperwork for a landlord audit?",
    a: "Yes. Every job we do generates an electrical certificate of safety on completion, and for ongoing tenancies we run scheduled RCD testing, emergency lighting testing, and test-and-tag with audit-ready records. Landlords or insurers asking for the last 5 years of records — which is the retention requirement under the Queensland Electrical Safety Regulation — get them by email, same day.",
  },
];

const featuredProject = getProject("nofomo-bundall");

export default function BundallPage() {
  return (
    <>
      <JsonLd
        data={serviceSchema(
          `Electrician ${SUBURB}`,
          `Licensed electrical services for ${SUBURB}, Gold Coast — commercial fit-outs, multi-tenancy coordination, high-bay lighting, UPS backup, A/C servicing.`,
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
        description="Bundall is Gold Coast commercial — corporate offices, car dealerships, venues, and the Racecourse precinct. Jentech has delivered complete fit-outs in the area, including the NOFOMO Gym Bundall rebuild. Multi-tenancy coordination, landlord-grade compliance, after-hours scheduling — the full commercial stack."
        image={featuredProject?.image ?? "/images/nofomo-bundall-1-.webp"}
      />

      {/* Opening context */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-bold text-neon uppercase tracking-[3px] mb-4 text-center">
            Jentech in Bundall
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-center">
            Corporate-grade commercial, on the Gold Coast
          </h2>
          <div className="space-y-5 text-text-secondary leading-relaxed">
            <p>
              Bundall is the commercial spine of the northern Gold Coast. Office towers, car dealerships, showrooms, hospitality along Bundall Road, the Racecourse precinct — this is where Gold Coast businesses operate from, and it&apos;s almost entirely a commercial scope suburb for us.
            </p>
            <p>
              What makes Bundall different from Brisbane commercial work is the <strong className="text-white">multi-tenancy coordination layer</strong>. Most buildings here share distribution infrastructure — main switch rooms, common-area lighting circuits, shared car-park supply — and working on one tenant&apos;s electrical without disrupting the building next door takes a specific approach. We build that coordination into the program from day one: building manager introductions, outage notifications, after-hours access arrangements, and tenant-by-tenant compliance records.
            </p>
            <p>
              Our <strong className="text-white">NOFOMO Gym Bundall</strong> project is the clearest example of what we deliver here: complete strip-out of the previous tenancy, a full electrical and data fit-out, nightclub-style dynamic lighting, smart TV integration, 24/7 member access, self-service selfie station, and A/C servicing across the space. The fit-out was delivered inside the tenant&apos;s opening timeline, with building-manager coordination throughout.
            </p>
          </div>
        </div>
      </section>

      {/* Local challenges */}
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <p className="text-xs font-bold text-neon uppercase tracking-[3px] mb-4">
              What Bundall Commercial Needs
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Four realities that shape Gold Coast corporate work
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
              Services in Bundall
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold">
              What Bundall businesses call us for
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

      {/* Featured project */}
      {featuredProject && (
        <section className="py-24 bg-surface">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1">
                <p className="text-xs font-bold text-neon uppercase tracking-[3px] mb-4">
                  Featured Project in Bundall
                </p>
                <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                  {featuredProject.name}
                </h2>
                <p className="text-text-secondary leading-relaxed mb-4">
                  {featuredProject.tagline}
                </p>
                {featuredProject.description.map((p, i) => (
                  <p key={i} className="text-text-secondary leading-relaxed mb-4 text-sm">
                    {p}
                  </p>
                ))}
                <Link
                  href={`/projects/${featuredProject.slug}`}
                  className="inline-block mt-4 neon-btn-outline px-6 py-3 rounded tracking-wider text-sm"
                >
                  VIEW FULL PROJECT
                </Link>
              </div>
              <div className="order-1 lg:order-2">
                <img
                  src={featuredProject.image}
                  alt={`${featuredProject.name} — Bundall commercial fit-out by Jentech`}
                  className="w-full rounded-lg border border-border"
                />
              </div>
            </div>
          </div>
        </section>
      )}

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
              <p className="text-3xl font-bold neon-text mb-1">PSS</p>
              <p className="text-xs uppercase tracking-wider text-text-secondary">
                UPS Service Agent
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
        items={bundallFAQs}
        title="Bundall Electrician — FAQs"
        overline="Questions We Get on the Gold Coast"
      />

      {/* CTA */}
      <section className="py-24 bg-surface">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-xs font-bold text-neon uppercase tracking-[3px] mb-4">
            Commercial fit-outs &amp; multi-tenancy electrical
          </p>
          <h2 className="text-3xl font-bold mb-6">
            Need an electrician in Bundall?
          </h2>
          <p className="text-text-secondary mb-8">
            Office fit-out, dealership lighting, venue rebuild, multi-tenancy compliance — we coordinate, we deliver, and we keep the landlord and the tenant informed through every outage.
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
