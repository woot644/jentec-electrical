import type { Metadata } from "next";
import Link from "next/link";
import ServicePageHero from "@/components/ServicePageHero";
import FAQSection, { type FAQ } from "@/components/FAQ";
import { JsonLd, serviceSchema, breadcrumbSchema } from "@/lib/schema";
import { SITE } from "@/lib/site";
import { getProject } from "@/data/projects";

export const metadata: Metadata = {
  title: "Electrician Wilston | Premium Family Renovations & Rewires",
  description:
    "Licensed electrician in Wilston — premium family-home renovations, full rewires, switchboard upgrades, ducted A/C, landscape lighting. QLD Licence 80766. 5.0 stars, 158 reviews.",
  alternates: { canonical: `${SITE.url}/service-areas/wilston` },
};

const SUBURB = "Wilston";
const SUBURB_URL = `${SITE.url}/service-areas/wilston`;

const localChallenges = [
  {
    title: "Wilston State School catchment drives renovations",
    desc: "Wilston is one of inner-north Brisbane's most sought-after family suburbs, largely because of the school catchment. Families buy in, extend the Queenslander, and intend to stay 15–20 years. That means electrical work needs to future-proof the home for EV charging, solar, A/C expansion, and teenage-bedroom appliance loads — not just meet today's needs.",
  },
  {
    title: "1980s–1990s renovation-era wiring is now tired",
    desc: "A lot of Wilston homes were renovated in the 1980s or 1990s — which means they have TPS wiring and switchboards that are now 30–40 years old. They tested fine when installed but are approaching end-of-life. Owners often discover this during a second renovation, when the switchboard can't take another circuit and the wiring insulation is brittle.",
  },
  {
    title: "Keeping families liveable during the reno",
    desc: "Wilston renovations rarely involve the family moving out — most stay in two or three rooms while the rest is rebuilt. That shapes how we stage the electrical work: we isolate and reconnect room-by-room so there's always a functional kitchen, bathroom, and main bedroom. Power, hot water, and cooking don't get interrupted overnight.",
  },
  {
    title: "Big renovations need big switchboard capacity",
    desc: "A full Wilston reno typically adds ducted A/C (3-phase), two or three EV-ready circuits, a solar inverter, pool equipment, and a butler's pantry with induction cooktop plus double oven. Existing single-phase 63A supply doesn't cut it. Most of our Wilston jobs involve an Energex-coordinated supply upgrade and a new 3-phase distribution board as the foundation.",
  },
];

const servicesInSuburb = [
  {
    title: "Full Home Rewires",
    desc: "Complete rewires for Wilston Queenslanders and post-war homes mid-renovation. Staged room-by-room so the family stays in the home. Certificate of Electrical Safety on completion.",
    href: "/services/residential",
  },
  {
    title: "3-Phase Supply Upgrades",
    desc: "Coordination with Energex for single-phase to 3-phase conversion. New distribution board with capacity for ducted A/C, EV charging, solar, and future expansion.",
    href: "/services/switchboards",
  },
  {
    title: "Ducted Air Conditioning",
    desc: "Daikin, Mitsubishi, Fujitsu — full design, installation, and commissioning for family homes. Zoned systems with WiFi control. Servicing included on an annual schedule.",
    href: "/services/air-conditioning",
  },
  {
    title: "Landscape &amp; Pool Lighting",
    desc: "Low-voltage garden lighting, pool-zone compliant fittings, outdoor entertaining areas, covered deck wiring. Designed around the family's outdoor routine.",
    href: "/services/residential",
  },
  {
    title: "EV Charger Pre-Wiring",
    desc: "Pre-wired 32A dedicated circuits in the garage during renovation — future-proofs the home and costs a fraction of retrofitting later. Compatible with all major brands.",
    href: "/services/residential",
  },
  {
    title: "Smoke Alarm Compliance",
    desc: "Interconnected photoelectric alarms to meet the 2027 QLD deadline. Installed during renovation so you're compliant on day 1 of occupation.",
    href: "/services/smoke-alarms",
  },
];

const wilstonFAQs: FAQ[] = [
  {
    q: "Can we stay in the house during a full rewire in Wilston?",
    a: "Almost always, yes. We stage the work so the kitchen, bathroom, and main bedroom stay live at all times. Rough-in happens room-by-room — we isolate a section, complete the new wiring, and reconnect before moving to the next. The only time power goes off for the whole house is on the day of the switchboard changeover, which is usually 2–4 hours in daylight. For larger Wilston renovations we often coordinate with the builder so the electrical staging fits around the broader program.",
  },
  {
    q: "Do I need to upgrade to 3-phase for our Wilston renovation?",
    a: "If you're adding ducted air conditioning, an EV charger, solar, or a butler's pantry with induction cooking, almost certainly yes. Single-phase 63A supply is typically maxed out by any two of those loads running simultaneously. The Energex supply upgrade takes 2–4 weeks lead time and coordinates with a scheduled outage — we handle the paperwork and timing on your behalf. Cost varies by distance from the street pole and whether trenching is required.",
  },
  {
    q: "We're extending — can the existing switchboard handle more circuits?",
    a: "Check the board first. Older Wilston boards from the 1980s–1990s often have no room for additional circuits, lack RCD protection on existing circuits, and use MCBs that are no longer manufactured. Adding new circuits to an old board is false economy — you'll spend money on the work and still have an expiry date on it. A new board with spare capacity is usually a 1-day upgrade and lasts 30+ years.",
  },
  {
    q: "Will you work with our architect and builder on a Wilston renovation?",
    a: "Yes — most of our Wilston work is architect-led and coordinated with an established builder. We join the project from schematic design through to final commissioning, attend drawing coordination meetings, and feed input back on feasibility and cost. Recent projects have been with Inaspace Architecture & Design, grayHAUS, KO&Co Architecture, and Renee Dunn Architect.",
  },
  {
    q: "What does landscape and garden lighting cost for a typical Wilston home?",
    a: "It varies enormously with scope. A simple set of in-ground path lights and deck downlights on a timer might be a few thousand dollars. A designed lighting scheme — uplights on trees, pool-zone compliant fittings, moonlit pergola, automated scenes — runs into five figures. We scope it at the design stage with a lighting plan and sample on-site where needed, so you can see the effect before committing.",
  },
  {
    q: "Can you future-proof our renovation for solar and battery later?",
    a: "Yes. We pre-wire conduits to the roof for DC solar runs, leave capacity in the distribution board for a solar supply circuit, and provide space for a battery inverter and battery enclosure. If you know you'll install in the next 3–5 years, doing the groundwork during renovation saves several thousand dollars in retrofit costs.",
  },
  {
    q: "Do you service Grange, Newmarket, Alderley, and Wooloowin as well?",
    a: "Yes — all immediate Wilston neighbours. We work across the 4051, 4059, and 4030 area regularly, and the pattern of work is very similar: inner-north family renovations on character homes with a strong architect-and-builder network. We're often already in the area and can respond quickly.",
  },
];

const featuredProject = getProject("wilston-redesign");

export default function WilstonPage() {
  return (
    <>
      <JsonLd
        data={serviceSchema(
          `Electrician ${SUBURB}`,
          `Licensed electrical services for ${SUBURB}, Brisbane — premium family-home renovations, full rewires, 3-phase supply upgrades, ducted A/C, landscape lighting.`,
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
        description="Wilston families don't renovate casually — the school catchment alone means homes are bought to stay in for 15–20 years. Jentech delivers the full electrical backbone of those renovations: Energex-coordinated supply upgrades, 3-phase distribution, ducted A/C, EV pre-wiring, and architect-led lighting design."
        image={featuredProject?.image ?? "/images/blob-6dd2ed8.webp"}
      />

      {/* Opening context */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-bold text-neon uppercase tracking-[3px] mb-4 text-center">
            Jentech in Wilston
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-center">
            Renovation-grade electrical for a suburb that renovates properly
          </h2>
          <div className="space-y-5 text-text-secondary leading-relaxed">
            <p>
              Wilston is a renovation suburb — and a serious one. Buyers purchase character homes for the school catchment and the tree-lined streets, and they spend serious money bringing those homes up to modern family standards. Half-measures don&apos;t belong here.
            </p>
            <p>
              The electrical implication is significant. A modern Wilston renovation routinely includes <strong className="text-white">ducted air conditioning</strong>, <strong className="text-white">EV charger pre-wiring</strong>, <strong className="text-white">solar-ready infrastructure</strong>, <strong className="text-white">butler&apos;s pantries with high-load cooking</strong>, <strong className="text-white">landscape lighting</strong>, and <strong className="text-white">pool house electrical</strong>. Stacking those loads on a 1980s single-phase switchboard doesn&apos;t work. Most of our Wilston jobs start with an Energex-coordinated supply upgrade and a new 3-phase distribution board — that&apos;s the foundation; everything else sits on top of it.
            </p>
            <p>
              Our current Wilston Redesign project is a textbook example: complete electrical strip-out, full redesign of lighting and power, switchboard relocation and upgrade, and integration of new pendant lighting with preserved original fittings. It&apos;s the standard we aim for across every Wilston renovation we touch.
            </p>
          </div>
        </div>
      </section>

      {/* Local challenges */}
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <p className="text-xs font-bold text-neon uppercase tracking-[3px] mb-4">
              What Wilston Renovations Need
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Four realities that shape every Wilston job
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
              Services in Wilston
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold">
              What Wilston families call us for
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
                  Featured Project in Wilston
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
                  alt={`${featuredProject.name} — Wilston family home electrical redesign by Jentech`}
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
              <p className="text-3xl font-bold neon-text mb-1">3-phase</p>
              <p className="text-xs uppercase tracking-wider text-text-secondary">
                Supply upgrades
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
        items={wilstonFAQs}
        title="Wilston Electrician — FAQs"
        overline="Questions We Get in Wilston"
      />

      {/* CTA */}
      <section className="py-24 bg-surface">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-xs font-bold text-neon uppercase tracking-[3px] mb-4">
            Renovation &amp; family home electrical
          </p>
          <h2 className="text-3xl font-bold mb-6">
            Need an electrician in Wilston?
          </h2>
          <p className="text-text-secondary mb-8">
            Whether you&apos;re planning a full renovation, upgrading to 3-phase for ducted A/C, or scoping EV and solar pre-wiring — we quote properly, we stage the work around the family, and we deliver the backbone the home deserves.
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
