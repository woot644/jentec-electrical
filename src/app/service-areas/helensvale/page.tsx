import type { Metadata } from "next";
import Link from "next/link";
import ServicePageHero from "@/components/ServicePageHero";
import FAQSection, { type FAQ } from "@/components/FAQ";
import { JsonLd, serviceSchema, breadcrumbSchema } from "@/lib/schema";
import { SITE } from "@/lib/site";
import { getProject } from "@/data/projects";

export const metadata: Metadata = {
  title: "Electrician Helensvale | Gold Coast Commercial Fit-Outs & Smart Systems",
  description:
    "Licensed electrician in Helensvale — commercial fit-outs, 24/7 access systems, smart lighting, A/C servicing. Home of our NOFOMO Gym project. QLD Licence 80766.",
  alternates: { canonical: `${SITE.url}/service-areas/helensvale` },
};

const SUBURB = "Helensvale";
const SUBURB_URL = `${SITE.url}/service-areas/helensvale`;

const localChallenges = [
  {
    title: "Commercial-tenancy turnover drives fit-outs",
    desc: "Helensvale's Westfield and the surrounding commercial pockets turn tenancies over regularly. Every new lease means a complete electrical strip-out, redesign, and fit-out — often inside a tight landlord-imposed handover window. We've delivered Gold Coast commercial fit-outs that went from empty shell to trading venue inside three weeks.",
  },
  {
    title: "Smart access and 24/7 systems",
    desc: "Gyms, co-working spaces, and serviced offices in the Helensvale area increasingly run 24/7 member-only access. That means integrated smart locks, member RFID systems, CCTV with live monitoring, and alarm integration — all tied into a dedicated data cabinet with UPS backup. The electrical scope isn't just power — it's the entire nervous system of the business.",
  },
  {
    title: "High-density dynamic lighting",
    desc: "Modern commercial fit-outs on the Gold Coast are moving away from static downlights toward dynamic, scene-programmable LED systems — DMX, DALI, and Casambi protocols. These lighting systems need dedicated control cabling, scene programming, and often integration with music and venue management software. It's no longer just a case of running the power.",
  },
  {
    title: "Coastal climate on outdoor electrical",
    desc: "Helensvale is inland of the coast but still gets coastal humidity and salt spray on elevated and outdoor fittings. We specify IP66-rated fittings and stainless or powder-coated housings on any outdoor installation, and we service external lighting and air-con condensers annually to catch corrosion before it causes faults.",
  },
];

const servicesInSuburb = [
  {
    title: "Commercial Fit-Outs",
    desc: "Full electrical strip-out and rebuild for new tenancies — retail, gyms, offices, hospitality. Power, data, lighting, emergency compliance, back-of-house systems. Delivered within landlord handover windows.",
    href: "/services/commercial",
  },
  {
    title: "24/7 Access &amp; Security Systems",
    desc: "Member-only smart locks, RFID access, CCTV, alarm integration, video intercom. Designed as a unified system with UPS backup so a power blip doesn't lock members out.",
    href: "/services/commercial",
  },
  {
    title: "Smart &amp; Dynamic Lighting",
    desc: "DMX, DALI, and Casambi-controlled LED systems for venues and high-end retail. Scene programming, music-sync options, integration with venue management software.",
    href: "/services/commercial",
  },
  {
    title: "Air Conditioning Installation &amp; Servicing",
    desc: "Multi-split and ducted systems for Gold Coast commercial spaces. Year-round servicing to maintain efficiency in the humid climate. ARC-certified for refrigerant handling.",
    href: "/services/air-conditioning",
  },
  {
    title: "UPS &amp; Backup Power",
    desc: "Critical for 24/7 venues and data-sensitive tenancies. PSS Distributors service agent — we size, install, and service UPS systems with long-life batteries suited to Gold Coast conditions.",
    href: "/services/ups-systems",
  },
  {
    title: "Residential Service",
    desc: "We service Helensvale homes too — switchboard upgrades, LED retrofits, smoke alarm compliance, EV charger installations. Same team, same standards, same compliance paperwork.",
    href: "/services/residential",
  },
];

const helensvaleFAQs: FAQ[] = [
  {
    q: "Is Jentech actually on the Gold Coast or do you travel from Brisbane?",
    a: "Our workshop is in Yeerongpilly (Brisbane), but we service Helensvale, Bundall, and the broader Gold Coast hinterland regularly — it's part of our defined service area. Our NOFOMO Gym Helensvale project was one of our larger Gold Coast commercial fit-outs, and we have multiple active projects south of Brisbane. For commercial work, travel time is priced in transparently at quote stage, and we often coordinate multi-day jobs so the van stays on-site.",
  },
  {
    q: "Can you deliver a commercial fit-out inside a landlord's handover window?",
    a: "Yes — most of our Gold Coast commercial fit-outs run to a tight landlord-imposed window. We scope the job on site, produce a sequenced program, coordinate with other trades (builder, plumber, HVAC, joinery), and mobilise a team to hit the handover date. For the NOFOMO Helensvale project, that meant strip-out, complete electrical rebuild, 24/7 access system integration, smart TV installations, and dynamic lighting — all delivered within the tenant's opening target.",
  },
  {
    q: "What's involved in a 24/7 member-only access system?",
    a: "Three integrated subsystems: an RFID or app-based door access control (with per-member credentials and audit logs), CCTV covering entry, exit, and floor areas with cloud or local recording, and an alarm/monitoring layer tied to the door system. For reliability, all three are powered from a dedicated UPS so a 5-second power blip doesn't drop members mid-session. We install, commission, and document the whole stack.",
  },
  {
    q: "Do you do DMX or DALI lighting for Gold Coast venues?",
    a: "Yes. Dynamic lighting is standard on our commercial fit-outs now — we've programmed DMX-controlled nightclub-style systems (as seen at NOFOMO Helensvale and Bundall), DALI setups in retail, and Casambi wireless lighting in cafes. We handle cable runs, control hardware, scene programming, and integration with venue management apps where the client wants music-sync or mobile control.",
  },
  {
    q: "Is UPS necessary for a Helensvale commercial tenancy?",
    a: "Depends on the tenancy. For a 24/7 access venue, yes — a 5-second outage that locks your members out is a reputational event you don't want. For retail with EFTPOS, yes — five minutes of downtime on a busy trading day is real revenue loss. For offices with critical data, yes. Most retail or hospitality without these specific dependencies can run without UPS if your insurer isn't requiring it, but the cost of adding one is usually modest compared to the business risk of not having it.",
  },
  {
    q: "Do you service the tenancy after the fit-out is complete?",
    a: "Yes. Scheduled RCD testing (6-monthly), emergency lighting testing (6-monthly), test-and-tag of portable appliances, annual air-conditioning service, and annual UPS load-test are all things we run on a calendar so you don't have to think about it. Reminders go out automatically, the visits are booked in at your preferred time, and the compliance paperwork arrives by email the same week.",
  },
  {
    q: "What's the typical cost range for a Helensvale commercial fit-out?",
    a: "It varies enormously with scope — a simple retail fit-out with existing walls and some new power, data, and LED lighting might be $8,000–$15,000. A complete gym or venue fit-out with dynamic lighting, access systems, CCTV, A/C, and 24/7 infrastructure typically sits in the $40,000–$80,000+ range depending on size. We scope in detail on site before quoting, so you get a defensible number rather than a guess.",
  },
];

const featuredProject = getProject("nofomo-helensvale");

export default function HelensvalePage() {
  return (
    <>
      <JsonLd
        data={serviceSchema(
          `Electrician ${SUBURB}`,
          `Licensed electrical services for ${SUBURB}, Gold Coast — commercial fit-outs, 24/7 access systems, dynamic lighting, UPS backup, A/C servicing.`,
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
        description="Helensvale is Gold Coast commercial territory — retail tenancies, gyms, offices, and 24/7 venues. Jentech has delivered full commercial fit-outs in the area, most visibly the NOFOMO Gym Helensvale rebuild. Smart access, dynamic lighting, UPS, A/C — the full commercial stack."
        image={featuredProject?.image ?? "/images/helensvale-nofomo-11-.webp"}
      />

      {/* Opening context */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-bold text-neon uppercase tracking-[3px] mb-4 text-center">
            Jentech in Helensvale
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-center">
            Gold Coast commercial, delivered to Brisbane standards
          </h2>
          <div className="space-y-5 text-text-secondary leading-relaxed">
            <p>
              Helensvale and the wider northern Gold Coast is one of our busiest commercial markets outside the Brisbane city limits. The work is different from Brisbane inner-city — bigger tenancies, higher-turnover retail, more integrated smart systems, and outdoor-adjacent infrastructure that needs to handle Gold Coast humidity.
            </p>
            <p>
              Our <strong className="text-white">NOFOMO Gym Helensvale</strong> project was a complete commercial fit-out: strip-out of the previous tenancy, full electrical and data rebuild, switchboard overhaul, smart TV integration, nightclub-style dynamic lighting, and a 24-hour member-only access system. It&apos;s the kind of project that shows up on a Google search months later when someone&apos;s scoping their own gym, cafe, or venue fit-out — and that&apos;s a lot of what our Helensvale work looks like.
            </p>
            <p>
              For Helensvale commercial tenants, we bring three things most local electricians don&apos;t: <strong className="text-white">compliance-first paperwork</strong> (we&apos;re used to operating under Brisbane inner-city regulatory scrutiny), <strong className="text-white">integrated systems capability</strong> (access control, CCTV, dynamic lighting, UPS — all in one scope), and <strong className="text-white">after-the-fit-out support</strong> (scheduled testing programs, A/C service, UPS battery replacements — all calendared so you don&apos;t have to remember).
            </p>
          </div>
        </div>
      </section>

      {/* Local challenges */}
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <p className="text-xs font-bold text-neon uppercase tracking-[3px] mb-4">
              What Helensvale Tenants Need
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Four things that shape Gold Coast commercial work
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
              Services in Helensvale
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold">
              What Gold Coast tenants and homeowners call us for
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
                  Featured Project in Helensvale
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
                  alt={`${featuredProject.name} — Helensvale commercial fit-out by Jentech`}
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
              <p className="text-3xl font-bold neon-text mb-1">24/7</p>
              <p className="text-xs uppercase tracking-wider text-text-secondary">
                Access systems
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
        items={helensvaleFAQs}
        title="Helensvale Electrician — FAQs"
        overline="Questions We Get on the Gold Coast"
      />

      {/* CTA */}
      <section className="py-24 bg-surface">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-xs font-bold text-neon uppercase tracking-[3px] mb-4">
            Commercial fit-outs &amp; residential service
          </p>
          <h2 className="text-3xl font-bold mb-6">
            Need an electrician in Helensvale?
          </h2>
          <p className="text-text-secondary mb-8">
            Retail fit-out, venue rebuild, 24/7 access system, home switchboard upgrade — we scope properly, we hit the handover date, and we support the tenancy long after the ribbon is cut.
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
