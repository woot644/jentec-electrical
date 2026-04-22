import type { Metadata } from "next";
import Link from "next/link";
import ServicePageHero from "@/components/ServicePageHero";
import FAQSection, { type FAQ } from "@/components/FAQ";
import { JsonLd, serviceSchema, breadcrumbSchema } from "@/lib/schema";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Electrician Yeerongpilly | Your Local Jentech Team",
  description:
    "Licensed electrician in Yeerongpilly — Jentech's home base. Residential, commercial, industrial, emergency. Flood-remediation experience. QLD Licence 80766. 5.0 stars across 158 Google reviews.",
  alternates: { canonical: `${SITE.url}/service-areas/yeerongpilly` },
};

const SUBURB = "Yeerongpilly";
const SUBURB_URL = `${SITE.url}/service-areas/yeerongpilly`;

const localChallenges = [
  {
    title: "Post-war housing stock",
    desc: "A large share of Yeerongpilly's homes are post-war brick-and-tile or timber-framed workers' cottages from the 1940s–1960s. Original switchboards from this era — ceramic fuses, single-phase, no RCD protection — are often still in service. We replace them with modern RCD-protected boards and bring the home up to AS/NZS 3000:2018 compliance in a day.",
  },
  {
    title: "Flood-affected properties",
    desc: "Parts of Yeerongpilly sit within the Brisbane River flood planning area and took water in 2011 and 2022. Post-flood electrical remediation is specialist work: every affected socket, switch, and cable length needs inspection, the switchboard usually needs replacement, and the whole installation requires re-certification before Energex will reconnect.",
  },
  {
    title: "Station Rd light-industrial corridor",
    desc: "Our own workshop sits on Station Rd, right next to the mix of auto workshops, small manufacturers, and hospitality venues that line the corridor. These tenancies need 3-phase connections, commercial compliance, emergency lighting, and scheduled RCD testing. We handle all of it, often outside business hours so operations aren't disrupted.",
  },
  {
    title: "Rail-line proximity",
    desc: "Homes and businesses close to the Beenleigh line occasionally see EMI (electromagnetic interference) issues on audio-visual systems and sensitive electronics. It's usually resolved with dedicated earthing, shielded cabling runs, and surge protection at the switchboard — none of which need to be dramatic, just properly specified.",
  },
];

const servicesInSuburb = [
  {
    title: "Residential Renovations & Rewires",
    desc: "Full and partial rewires for Yeerongpilly's post-war homes. LED lighting, switchboard upgrades, additional circuits for modern appliance loads, and Queenslander-style renovations.",
    href: "/services/residential",
  },
  {
    title: "Switchboard Upgrades",
    desc: "Ceramic-fuse replacement, RCD installation, surge protection. Most Yeerongpilly board upgrades are done inside a single day with power restored before dark.",
    href: "/services/switchboards",
  },
  {
    title: "Commercial Fit-Outs",
    desc: "Station Rd and Fairfield Rd tenancies — cafes, workshops, small offices. Full electrical and data, emergency lighting compliance, test-and-tag, scheduled RCD testing.",
    href: "/services/commercial",
  },
  {
    title: "Industrial & 3-Phase",
    desc: "3-phase connections and machinery wiring for the light-industrial operators along Station Rd. Emergency stops, load balancing, and compliance testing to keep you running.",
    href: "/services/industrial",
  },
  {
    title: "24/7 Emergency Response",
    desc: "We're literally minutes from Yeerongpilly homes and businesses. Power outages, burning smells, tripping boards, after-hours faults — our emergency line runs 24/7.",
    href: "/emergency-electrician-brisbane",
  },
  {
    title: "Smoke Alarm Compliance",
    desc: "Interconnected photoelectric alarms for QLD's 2027 deadline. We install, test, and certify across owner-occupied and rental properties in Yeerongpilly.",
    href: "/services/smoke-alarms",
  },
];

const yeerongpillyFAQs: FAQ[] = [
  {
    q: "Is Jentech actually based in Yeerongpilly?",
    a: "Yes — our workshop and office are at 6/190 Station Rd, Yeerongpilly 4105. If you live or run a business in Yeerongpilly, we're your actual neighbour, not a call centre with a Brisbane-wide phone number.",
  },
  {
    q: "My home was flooded — can you certify it safe for Energex to reconnect?",
    a: "Yes. Post-flood electrical remediation is one of our core specialties. Every flood-affected circuit, outlet, and switch needs inspection; any item below the water line typically needs replacement; the switchboard almost always needs replacing because water ingress into a board is irreversible damage. We issue a Certificate of Electrical Safety after remediation, which is what Energex needs before they'll reconnect the meter.",
  },
  {
    q: "How quickly can you get to an emergency in Yeerongpilly?",
    a: "Fast. The workshop is on Station Rd, so for 4105 callouts we're usually close by during business hours. Our emergency line is answered 24/7 — no third-party answering service. Call 07 3914 9696 and you'll speak to one of our electricians, not a dispatcher.",
  },
  {
    q: "Do you handle 3-phase work for Yeerongpilly businesses?",
    a: "Regularly. Most of our industrial and commercial work on Station Rd and the surrounding light-industrial pockets involves 3-phase — machinery connections, workshop lathes, commercial air conditioning, compressors, pumps. We coordinate with Energex for supply upgrades where needed and issue all compliance testing paperwork.",
  },
  {
    q: "Can you upgrade a post-war ceramic-fuse switchboard without pulling the house apart?",
    a: "Yes. A switchboard upgrade is usually a 1-day job and doesn't require any work inside the house itself — the board is usually mounted externally or in a meter cupboard. We disconnect with Energex, swap the board, install RCDs and MCBs on every circuit, label everything clearly, test, and reconnect. Power is usually off for 2–4 hours on the day.",
  },
  {
    q: "Do you work with property managers for Yeerongpilly rentals?",
    a: "Yes — a significant share of our Yeerongpilly work is through local property managers handling smoke alarm compliance, safety switch installations, end-of-lease inspections, and tenant-reported faults. We quote fast, invoice the agency directly, and keep clear records for each property.",
  },
  {
    q: "Do you service Fairfield, Moorooka, Tennyson, and Yeronga as well?",
    a: "Yes, all immediate neighbours. We cover the broader 4104/4105/4107 area as part of our local catchment — the travel time is the same and we're often already passing through on the way to or from a Yeerongpilly job.",
  },
];

export default function YeerongpillyPage() {
  return (
    <>
      <JsonLd
        data={serviceSchema(
          `Electrician ${SUBURB}`,
          `Licensed electrical services for ${SUBURB}, Brisbane — Jentech's home base. Residential, commercial, industrial, flood remediation, and 24/7 emergency response.`,
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
        description="Jentech is based in Yeerongpilly — our workshop sits on Station Rd. When we say 'local electrician', we mean it literally. For 4105 homes and businesses, we're your actual neighbour."
        image="/team-hero.webp"
      />

      {/* Opening context */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-bold text-neon uppercase tracking-[3px] mb-4 text-center">
            Jentech in Yeerongpilly
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-center">
            Your actual local electrician
          </h2>
          <div className="space-y-5 text-text-secondary leading-relaxed">
            <p>
              Yeerongpilly is where Jentech lives and works. Our workshop sits at <strong className="text-white">6/190 Station Rd</strong>, in the light-industrial stretch between the train line and Fairfield Rd. We're one of the businesses you probably drive past on your way home — and that proximity is the whole point.
            </p>
            <p>
              For 4105 callouts, we&apos;re close. We don&apos;t run a call centre and we don&apos;t dispatch from the other side of Brisbane — your call is answered by one of our electricians and the van is dispatched from a workshop you can walk to.
            </p>
            <p>
              Yeerongpilly's housing stock is genuinely varied. Post-war brick-and-tile homes with ageing switchboards. Flood-affected properties along the river fringe still carrying the electrical legacy of 2011 and 2022. Queenslanders on the high ground. New commercial tenancies along Station Rd and Fairfield Rd. We've seen and fixed all of it — often for the same family or business multiple times over the years, which is the kind of long-term electrical relationship this suburb seems to produce.
            </p>
          </div>
        </div>
      </section>

      {/* Local challenges */}
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <p className="text-xs font-bold text-neon uppercase tracking-[3px] mb-4">
              What Yeerongpilly Homes &amp; Businesses Call Us For
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              The four things we see most in 4105
            </h2>
            <p className="text-text-secondary">
              Yeerongpilly's electrical needs are shaped by its mix — older post-war housing, river-flood exposure, a light-industrial corridor, and rail-line proximity. Here's what that means in practice.
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
              Services in Yeerongpilly
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold">
              Everything we do — and we&apos;re close enough to do it fast
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
                Emergency response
              </p>
            </div>
            <div>
              <p className="text-3xl font-bold neon-text mb-1">Local</p>
              <p className="text-xs uppercase tracking-wider text-text-secondary">
                Based on Station Rd
              </p>
            </div>
          </div>
        </div>
      </section>

      <FAQSection
        items={yeerongpillyFAQs}
        title="Yeerongpilly Electrician — FAQs"
        overline="Questions We Get in 4105"
      />

      {/* CTA */}
      <section className="py-24 bg-surface">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-xs font-bold text-neon uppercase tracking-[3px] mb-4">
            Local callouts
          </p>
          <h2 className="text-3xl font-bold mb-6">
            Need an electrician in Yeerongpilly?
          </h2>
          <p className="text-text-secondary mb-8">
            We&apos;re a few streets away. Call the number below and we&apos;ll come straight over.
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
