import type { Metadata } from "next";
import Link from "next/link";
import ServicePageHero from "@/components/ServicePageHero";
import FAQSection, { type FAQ } from "@/components/FAQ";
import { JsonLd, serviceSchema, breadcrumbSchema } from "@/lib/schema";
import { SITE } from "@/lib/site";
import { getProject } from "@/data/projects";

export const metadata: Metadata = {
  title: "Electrician Paddington | Heritage Queenslander Rewires & Lighting",
  description:
    "Licensed Paddington electrician. Heritage Queenslander rewires, character-home switchboard upgrades, architect-led lighting design, commercial fit-outs on Latrobe & Given Terrace. QLD Licence 80766. 5.0 stars, 158 Google reviews.",
  alternates: { canonical: `${SITE.url}/service-areas/paddington` },
};

const SUBURB = "Paddington";
const SUBURB_URL = `${SITE.url}/service-areas/paddington`;

const localChallenges = [
  {
    title: "Pre-1990 wiring in original stock",
    desc: "Many Paddington Queenslanders still run rubber-insulated VIR, TPS, or in older cases knob-and-tube wiring. None of this meets current Australian Standards for new circuits, and most insurers now flag it on pre-purchase reports. We plan rewires room-by-room so the home stays liveable during the work.",
  },
  {
    title: "Character Protection zone",
    desc: "Paddington sits under Brisbane City Council's Character Residential (Infill Housing) zoning and Traditional Building Character overlay. External changes — including visible meter boxes, conduit runs, and solar or EV charging hardware — need careful placement to stay compliant. We scope heritage-sensitive cable routes at quote stage, before any wall gets opened.",
  },
  {
    title: "Tight lots, close neighbours",
    desc: "Paddington's narrow allotments mean side-access is often 600–900mm. Power-pole drops, meter relocations, and switchboard upgrades have to be planned around neighbouring boundaries and root systems of heritage street trees. We coordinate with Energex for supply work and handle the temporary disconnection paperwork ourselves.",
  },
  {
    title: "Original features worth preserving",
    desc: "Pressed metal ceilings, stained glass, VJ timber linings, and antique pendants are the reason people buy in Paddington. Drilling through pressed metal without cracking it, or rewiring a chandelier without damaging its cloth-covered flex, is a specific skill — one we've developed across heritage projects like Stoke Green and Clementine.",
  },
];

const servicesInSuburb = [
  {
    title: "Heritage Queenslander Rewires",
    desc: "Full and partial rewires for character homes. We stage the work around your living arrangements, preserve original fittings where they can be rewired safely, and issue a Certificate of Electrical Safety on completion.",
    href: "/services/residential",
  },
  {
    title: "Switchboard Upgrades",
    desc: "Replacement of ceramic-fuse and rewireable boards with modern RCD-protected units. We weatherproof verandah-mounted boards and coordinate with Energex where a meter relocation is involved.",
    href: "/services/switchboards",
  },
  {
    title: "Architect-Led Lighting Design",
    desc: "LED retrofit, pendant restoration, feature and landscape lighting. We work with your designer or architect from schematic design through to commissioning — as we did on the Frida's Sip n' Paint Paddington fit-out.",
    href: "/services/residential",
  },
  {
    title: "Smoke Alarm Compliance",
    desc: "Interconnected photoelectric alarms meeting Queensland's 2027 deadline. Critical for Paddington's timber-framed homes — and a must-fix before sale or lease.",
    href: "/services/smoke-alarms",
  },
  {
    title: "Pre-Purchase Electrical Inspections",
    desc: "Thorough safety inspection before you commit to a character home. We report on board condition, wiring age, RCD coverage, bonding, and any overlay-restricted issues — so you know exactly what the electrical remediation will cost before contract.",
    href: "/services/switchboards",
  },
  {
    title: "Commercial Fit-Outs — Latrobe & Given Terrace",
    desc: "Boutique retail, hospitality, and office fit-outs along Paddington's commercial strips. Full power and data, feature lighting, emergency compliance, and back-of-house systems. Frida's Paddington was one of ours.",
    href: "/services/commercial",
  },
];

const paddingtonFAQs: FAQ[] = [
  {
    q: "Do Paddington Queenslanders usually need rewiring?",
    a: "If the home hasn't been rewired since the 1990s, almost always yes. Rubber-insulated VIR cable, older TPS, and knob-and-tube all degrade over time and don't meet the earth-fault protection standards in AS/NZS 3000:2018. We can usually tell within 10 minutes on-site whether a full rewire is needed or whether a partial upgrade and RCD-protected switchboard will bring the home up to standard.",
  },
  {
    q: "Does Paddington's Character Protection overlay restrict electrical upgrades?",
    a: "Internal rewiring is unaffected — you can do whatever is needed behind the walls. What's restricted is the visible exterior: meter box placement, conduit runs across street-facing facades, solar panel visibility from the street, and EV charger hardware on the front of the property. We plan around these constraints at quote stage. For most Paddington homes, routing meter and supply hardware to a side or rear wall is straightforward.",
  },
  {
    q: "How long does a full rewire take in a Paddington Queenslander?",
    a: "A typical 2–3 bedroom Paddington Queenslander takes 3–5 working days for the rough-in and another 2–3 days for the fit-off. Homes with pressed metal ceilings, VJ linings, or restored original pendants take longer because cable routing has to preserve those features. We stage rooms so you can stay in the home during the project, and we tidy up each day — no open wall cavities overnight.",
  },
  {
    q: "Can you work around pressed metal ceilings and stained glass without damaging them?",
    a: "Yes — this is the skill that separates a heritage-competent electrician from a general one. Pressed metal cracks if you use a standard hole saw; stained glass won't tolerate the dust and vibration of unplanned drilling. We use surgical cable routing (top-of-wall runs behind the cornice, under-floor drops, and existing chase paths where they exist), and we tape and protect every feature before any work begins.",
  },
  {
    q: "Do you handle meter and switchboard relocations on Paddington homes?",
    a: "Yes. Meter relocations require coordination with Energex (the South East Queensland distributor) and a temporary disconnection permit, which we arrange and manage on your behalf. Most relocations take 1–2 site visits: one to prepare the new location, and a second timed with Energex for the disconnection, reconnection, and meter transfer. Switchboard upgrades are typically completed in a single day, with power restored before dark.",
  },
  {
    q: "How do you handle tight access on Paddington's narrow lots?",
    a: "We send a single van rather than multiple vehicles, park considerately (usually on your driveway or the front verge), and we don't leave materials in shared side paths. For larger jobs we coordinate with your builder so trades aren't fighting for access. If the street itself is the constraint — residents-only parking, or active Council works — we plan the schedule around it.",
  },
  {
    q: "Is Jentech the right electrician for an architect-led Paddington renovation?",
    a: "Most of our residential work is architect-led. We join the project from schematic design through to final commissioning and we're comfortable on drawing coordination calls. Recent projects with Inaspace Architecture & Design, KO&Co Architecture, Renee Dunn Architect, and grayHAUS speak to the style of work we do — careful, collaborative, and delivered to the design intent.",
  },
];

const featuredProject = getProject("fridas-paddington");

export default function PaddingtonPage() {
  return (
    <>
      <JsonLd
        data={serviceSchema(
          `Electrician ${SUBURB}`,
          `Licensed electrical services for ${SUBURB}, Brisbane — heritage Queenslander rewires, switchboard upgrades, architect-led lighting, and commercial fit-outs.`,
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
        description="Paddington's character homes and commercial strips need an electrician who understands heritage wiring, Council overlays, and the style of work the suburb demands. Jentech's work in the area includes heritage rewires and boutique commercial fit-outs — most visibly the Frida's Sip n' Paint Paddington build on Latrobe Terrace."
        image={featuredProject?.image ?? "/images/frida-s-paddington-6-.webp"}
      />

      {/* Opening context */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-bold text-neon uppercase tracking-[3px] mb-4 text-center">
            Jentech in Paddington
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-center">
            A Paddington-specific electrician, not a generalist
          </h2>
          <div className="space-y-5 text-text-secondary leading-relaxed">
            <p>
              Paddington is one of Brisbane's most electrically demanding suburbs — and that's not a reference to wattage. It's a suburb of heritage Queenslanders, mid-century workers&apos; cottages, and modern renovations sitting right next to 120-year-old homes still running original wiring. It's also under Brisbane City Council&apos;s <strong className="text-white">Character Residential zoning</strong> and <strong className="text-white">Traditional Building Character overlay</strong>, which restricts what can be done externally without approval.
            </p>
            <p>
              An electrician who doesn&apos;t know Paddington will quote the job, turn up, discover the existing rubber-insulated wiring, and either hit you with a variation or cut corners. A Paddington-specific electrician — which is what we are — plans the rewire, the switchboard, and the overlay-safe routing at quote stage, so nothing on-site surprises anyone.
            </p>
            <p>
              Our Brisbane residential portfolio includes Queenslander rewires across the inner-west character corridor. We&apos;ve worked alongside Inaspace Architecture &amp; Design, grayHAUS, KO&amp;Co Architecture, and Renee Dunn Architect on architecturally-led renovations. And on the commercial side, we delivered the full electrical fit-out of <strong className="text-white">Frida&apos;s Sip n&apos; Paint Paddington</strong> — from strip-out through to feature lighting, chandeliers, back-of-house data, and the dishwasher circuits that get a workout every evening.
            </p>
          </div>
        </div>
      </section>

      {/* Local challenges */}
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <p className="text-xs font-bold text-neon uppercase tracking-[3px] mb-4">
              What Makes Paddington Different
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Electrical work in Paddington isn&apos;t electrical work in a newer suburb
            </h2>
            <p className="text-text-secondary">
              Four things we plan around on every Paddington job. None of them are problems if they&apos;re scoped at quote stage. All of them become problems if they&apos;re not.
            </p>
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
              Services in Paddington
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold">
              What Paddington residents and businesses call us for
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
                  Featured Project in Paddington
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
                  alt={`${featuredProject.name} — Paddington commercial electrical fit-out by Jentech`}
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
                Emergency Response
              </p>
            </div>
            <div>
              <p className="text-3xl font-bold neon-text mb-1">Family</p>
              <p className="text-xs uppercase tracking-wider text-text-secondary">
                Owned &amp; operated
              </p>
            </div>
          </div>
        </div>
      </section>

      <FAQSection
        items={paddingtonFAQs}
        title="Paddington Electrician — FAQs"
        overline="Questions We Get in Paddington"
      />

      {/* CTA */}
      <section className="py-24 bg-surface">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-xs font-bold text-neon uppercase tracking-[3px] mb-4">
            Paddington callouts &amp; quotes
          </p>
          <h2 className="text-3xl font-bold mb-6">
            Need an electrician in Paddington?
          </h2>
          <p className="text-text-secondary mb-8">
            Whether it&apos;s an emergency, a rewire, an overlay-sensitive meter relocation, or a full architect-led renovation — we quote fast, scope honestly, and deliver the work to the standard the home deserves.
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
