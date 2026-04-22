import type { Metadata } from "next";
import Link from "next/link";
import ServicePageHero from "@/components/ServicePageHero";
import FAQSection, { type FAQ } from "@/components/FAQ";
import { JsonLd, serviceSchema, breadcrumbSchema } from "@/lib/schema";
import { SITE } from "@/lib/site";
import { getProject } from "@/data/projects";

export const metadata: Metadata = {
  title: "Electrician Fortitude Valley | Hospitality, Heritage & Commercial",
  description:
    "Licensed electrician in Fortitude Valley — hospitality venue compliance, emergency lighting, heritage Queenslander rewires, commercial fit-outs. QLD Licence 80766. 5.0 stars, 158 reviews.",
  alternates: { canonical: `${SITE.url}/service-areas/fortitude-valley` },
};

const SUBURB = "Fortitude Valley";
const SUBURB_URL = `${SITE.url}/service-areas/fortitude-valley`;

const localChallenges = [
  {
    title: "Hospitality compliance is non-negotiable",
    desc: "Fortitude Valley is Brisbane's entertainment precinct — live-music venues, bars, restaurants, late-night hospitality. Every one of them is subject to stricter electrical compliance than a standard commercial tenancy: emergency and exit lighting tested every 6 months to AS/NZS 2293.2, RCD push-button testing every 6 months, 12-month operational testing, and full compliance records retained 5 years. We provide scheduled testing programs to keep venues audit-ready.",
  },
  {
    title: "Heritage overlay alongside modern towers",
    desc: "The Valley sits on a unique overlay of pre-1911 Queenslanders, Federation-era commercial buildings, and brand-new mixed-use towers. Each asset class has its own compliance profile — heritage buildings need careful cable routing and character-protection-friendly meter placement; modern towers need BCA-compliant rising main work and landlord-coordinated switchboard access. We work across both.",
  },
  {
    title: "Venue power demands are no joke",
    desc: "Commercial kitchens, DJ rigs, stage lighting, large air conditioning systems, digital signage, and high-density EFTPOS all pull serious load. Many older Valley tenancies have inherited switchboards that weren't designed for this. We upgrade switchboards to modern distribution boards with correct phase balancing, dedicated kitchen circuits, and surge protection — usually completed outside trading hours with the venue back open the next night.",
  },
  {
    title: "Access, parking, and noise windows",
    desc: "The Valley's tight streets, licensed venues, and late-night trading hours make electrical work a logistics exercise. Most venue work gets scheduled between 7am–11am or after 3am. We plan routes, loading zones, and Council noise permits in advance — and we've been doing this long enough to know which streets have residents-only parking and which don't.",
  },
];

const servicesInSuburb = [
  {
    title: "Venue Compliance Programs",
    desc: "Scheduled 6-monthly RCD and emergency lighting testing, 12-month operational testing, test-and-tag of portable appliances. Audit-ready records for Workplace Health and Safety Queensland and your insurer.",
    href: "/services/commercial",
  },
  {
    title: "Hospitality Fit-Outs",
    desc: "Bars, restaurants, cafes, live venues. Full electrical and data, commercial kitchen, emergency lighting compliance, stage and feature lighting, digital signage, EFTPOS and POS infrastructure.",
    href: "/services/commercial",
  },
  {
    title: "Heritage Queenslander Rewires",
    desc: "Character-listed homes in the Valley's residential pockets. Heritage-sensitive cable routing, overlay-compliant meter placement, preservation of original features — VJ timber, pressed metal, stained glass.",
    href: "/services/residential",
  },
  {
    title: "Commercial Switchboard Upgrades",
    desc: "Ageing switchboards upgraded to modern distribution boards with correct phase balancing, RCD coverage, and surge protection. Outside trading hours by default.",
    href: "/services/switchboards",
  },
  {
    title: "Emergency &amp; Exit Lighting",
    desc: "AS/NZS 2293 compliant installation, 6-monthly discharge testing, log book maintenance, battery and fitting replacement. Critical for any venue or public building in the Valley.",
    href: "/services/commercial",
  },
  {
    title: "24/7 Venue Emergency Response",
    desc: "Venues can't afford downtime. Power failures, distribution board faults, emergency lighting outages, kitchen equipment trips — we respond 24/7 and usually have you back trading inside the hour.",
    href: "/emergency-electrician-brisbane",
  },
];

const fortitudeValleyFAQs: FAQ[] = [
  {
    q: "What's required for emergency lighting compliance in a Fortitude Valley venue?",
    a: "AS/NZS 2293.1 governs design and installation; AS/NZS 2293.2 governs maintenance. Every emergency and exit light must be discharge-tested every 6 months (a minimum 90-minute battery test), with results logged in a compliant log book. Faulty fittings or flat batteries must be replaced. Your insurer and the Queensland Building Fire Safety Regulation both require these records — and without them, your public liability coverage can be challenged after an incident.",
  },
  {
    q: "How often does a Valley bar need RCD testing?",
    a: "Under the Queensland Electrical Safety Regulation 2013, non-hostile commercial premises require 6-monthly RCD push-button testing and 12-monthly operational testing (where a portable tester confirms trip time and trip current). Records must be kept 5 years. Most of our Valley venues are on a scheduled program — we book the testing in advance, complete it outside trading hours, and deliver compliance paperwork to the licensee within 48 hours.",
  },
  {
    q: "Can you work overnight to minimise venue disruption?",
    a: "Yes — probably more of our Valley work is done between 3am and 10am than during normal business hours. We plan the job so everything that needs the power off is done in that window, and the venue is back trading the same evening. After-hours loadings are included up front in the quote so there are no surprises.",
  },
  {
    q: "Do you work on heritage-listed Valley buildings?",
    a: "Yes. A large share of the Valley's retail, hospitality, and residential stock is under Brisbane City Council's Traditional Building Character overlay or individually listed on the Queensland Heritage Register. We plan cable routing, meter placement, and exterior hardware to stay compliant with the overlay. For listed buildings we coordinate with the owner's heritage consultant where needed.",
  },
  {
    q: "Can you upgrade a venue's switchboard without closing the business?",
    a: "Almost always, yes. We plan the work so the main isolation happens overnight or in a defined shoulder window. Modern distribution boards can be staged — the new board is mounted and partially wired while the old board is still live, then the transfer happens in a short defined outage. For larger fit-outs we temporarily backfeed critical systems (cold-room, EFTPOS, CCTV) from a sub-board.",
  },
  {
    q: "Do you do power for pop-up venues and events in the Valley?",
    a: "Yes. Temporary 3-phase connections, generator integration, event lighting distribution, and portable RCD setups are all part of our scope. We handle the compliance certification that Brisbane City Council and the Queensland Electrical Safety Office require for temporary installations at events.",
  },
  {
    q: "What's the process for heritage meter relocation in the Valley?",
    a: "We scope the new location against the Character overlay, draft a proposal for Energex, and handle the temporary disconnection paperwork. Most meter relocations in the Valley take two site visits: one to prepare the new meter panel, and a second on the coordinated day for Energex to disconnect, we transfer, and they reconnect. Power is typically off for 3–5 hours on the relocation day.",
  },
];

const featuredProject = getProject("fortitude-queenslander");

export default function FortitudeValleyPage() {
  return (
    <>
      <JsonLd
        data={serviceSchema(
          `Electrician ${SUBURB}`,
          `Licensed electrical services for ${SUBURB}, Brisbane — hospitality and venue compliance, heritage rewires, commercial fit-outs, 24/7 emergency response.`,
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
        description="The Valley is Brisbane's most electrically demanding suburb — hospitality venues on one street, heritage Queenslanders on the next, modern towers above both. Jentech works across all three, with the after-hours scheduling and compliance paperwork that comes with the territory."
        image={featuredProject?.image ?? "/images/blob-c0ea1df.webp"}
      />

      {/* Opening context */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-bold text-neon uppercase tracking-[3px] mb-4 text-center">
            Jentech in Fortitude Valley
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-center">
            Valley-grade compliance, delivered out of hours
          </h2>
          <div className="space-y-5 text-text-secondary leading-relaxed">
            <p>
              Fortitude Valley is the hardest suburb in Brisbane to do electrical work in — and we mean that as a professional assessment, not a complaint. The Valley demands three distinct competencies in the one electrician: <strong className="text-white">hospitality-grade compliance</strong> (emergency lighting, RCD testing, audit records), <strong className="text-white">heritage-sensitive residential work</strong> (Queenslanders, Federation commercial, Character overlay), and <strong className="text-white">modern commercial fit-out scale</strong> (towers, mixed-use, large distribution boards).
            </p>
            <p>
              We run scheduled compliance programs for venues, handle overnight switchboard upgrades so bars can reopen the next night, and we&apos;ve rewired heritage Queenslanders off Brunswick Street and into the Valley&apos;s residential pockets. The Fortitude Valley Queenslander currently in our portfolio — a heritage-listed property getting a full rewire, switchboard upgrade, LED fit-out, and rooftop terrace — is the sort of work the Valley produces.
            </p>
            <p>
              If your business is in the Valley, the compliance obligations on you are stricter than almost anywhere else in Brisbane. If you haven&apos;t had a compliance audit since the last inspection, we&apos;ll do one for free — better to surface problems on our clipboard than on a WHSQ inspector&apos;s.
            </p>
          </div>
        </div>
      </section>

      {/* Local challenges */}
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <p className="text-xs font-bold text-neon uppercase tracking-[3px] mb-4">
              Working in the Valley
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Four things that shape every Valley job
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
              Services in Fortitude Valley
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold">
              What venue operators and Valley residents call us for
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
                  Featured Project in Fortitude Valley
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
                  alt={`${featuredProject.name} — Fortitude Valley heritage Queenslander rewire by Jentech`}
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
                Venue emergency response
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
        items={fortitudeValleyFAQs}
        title="Fortitude Valley Electrician — FAQs"
        overline="Questions We Get in the Valley"
      />

      {/* CTA */}
      <section className="py-24 bg-surface">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-xs font-bold text-neon uppercase tracking-[3px] mb-4">
            Valley venues, heritage homes &amp; emergencies
          </p>
          <h2 className="text-3xl font-bold mb-6">
            Need an electrician in Fortitude Valley?
          </h2>
          <p className="text-text-secondary mb-8">
            Whether it&apos;s a compliance audit, a venue fit-out, an overnight switchboard upgrade, or a 2am emergency — we answer, we respond, and we get you trading again.
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
