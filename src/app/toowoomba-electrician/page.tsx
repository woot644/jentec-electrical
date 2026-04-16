import type { Metadata } from "next";
import Link from "next/link";
import ServicePageHero from "@/components/ServicePageHero";
import FAQSection from "@/components/FAQ";
import { JsonLd, serviceSchema, breadcrumbSchema } from "@/lib/schema";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Toowoomba Electrician — Jentech Electrical",
  description:
    "Licensed Toowoomba electrician serving the Darling Downs. Residential, commercial, industrial, and 24/7 emergency electrical service. Licence 80766.",
  alternates: { canonical: `${SITE.url}/toowoomba-electrician` },
};

const toowoombaFAQs = [
  {
    q: "Do you actually service Toowoomba, or just Brisbane?",
    a: "Both. Jentech has been operating in the Toowoomba region for several years alongside our Brisbane work. We maintain a regular service schedule on the Range and across the Darling Downs, with dedicated technicians familiar with rural properties, older Queenslander homes in the CBD, and the region's commercial and industrial sites.",
  },
  {
    q: "Can you respond to an emergency in Toowoomba at night?",
    a: "Yes, we run a 24/7 emergency line for existing Toowoomba clients and most residential emergencies. Response times from Brisbane are longer than our inner-Brisbane callouts, so we'll confirm an ETA when you call. For businesses with critical systems, we recommend pre-booking a maintenance plan so we have your site documented ahead of any emergency.",
  },
  {
    q: "Are Toowoomba rates different to Brisbane?",
    a: "No. We quote the same fair rates for both regions. There may be a travel component added for smaller jobs in outer suburbs of the Downs, which we'll always disclose up front on the quote — no hidden surprises.",
  },
  {
    q: "Do you work on rural properties and sheds?",
    a: "Yes. Rural installations are a major part of our Toowoomba work — shed power, 3-phase for workshops and machinery, solar tie-ins, switchboard upgrades, and bore pump circuits. We're familiar with the standards and common setups on rural and lifestyle blocks across the Downs.",
  },
  {
    q: "Can you help with storm damage in Toowoomba?",
    a: "Absolutely. Storm season routinely damages meter boxes, roof wiring, and outdoor fittings across the Downs. We handle insurance-job claims directly, document the damage for your insurer, and restore safe operation fast. If your property has been affected by a significant storm, call us — we triage emergencies across the region.",
  },
];

const services = [
  { title: "Residential Electrical", text: "Rewires, lighting, renovations, new builds, EV chargers, and storm repairs across Toowoomba homes." },
  { title: "Commercial Electrical", text: "Shop and office fit-outs, emergency lighting, exit signs, Test & Tag, and scheduled maintenance for Toowoomba businesses." },
  { title: "Industrial & Rural", text: "3-phase machinery, shed power, switchboard upgrades, bore pump circuits, and compliance testing." },
  { title: "Air Conditioning", text: "Split and multi-split installations and servicing suited to Toowoomba's cooler winters and hot summers." },
  { title: "Smoke Alarms", text: "Interconnected alarm installation meeting QLD 2027 compliance for Toowoomba homes and rental properties." },
  { title: "Switchboards", text: "Upgrades from ceramic fuses to modern RCD-protected boards on period homes across Toowoomba." },
];

export default function ToowoombaPage() {
  return (
    <>
      <JsonLd
        data={serviceSchema(
          "Toowoomba Electrician",
          "Licensed electrician servicing Toowoomba and the Darling Downs — residential, commercial, industrial, 24/7 emergency.",
          `${SITE.url}/toowoomba-electrician`
        )}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: SITE.url },
          { name: "Toowoomba Electrician", url: `${SITE.url}/toowoomba-electrician` },
        ])}
      />
      <ServicePageHero
        overline="Darling Downs Service"
        title="Toowoomba Electrician"
        description="Licensed, fully insured Jentech Electrical technicians service Toowoomba and the Darling Downs — from residential rewires to commercial fit-outs and rural 3-phase work. The same standard of work that's earned us 158 five-star Google reviews across Brisbane."
        image="/images/hero-industrial.webp"
      />

      {/* Local context */}
      <section className="py-20 bg-surface">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-bold text-neon uppercase tracking-[3px] mb-4">
            Serving Toowoomba &amp; the Downs
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Local expertise, metro standards
          </h2>
          <div className="space-y-5 text-text-secondary leading-relaxed">
            <p>
              Toowoomba's electrical landscape is its own beast. Between the 1880s
              character homes on North Street, the commercial strip through the
              CBD, the sprawling rural properties across Gowrie Junction,
              Highfields, and Westbrook, and the industrial zones out toward
              Wellcamp — every job needs a technician who understands the local
              conditions and the full range of Australian standards.
            </p>
            <p>
              Our Toowoomba clients trust us for the same reasons our Brisbane
              clients do: we turn up on time, we communicate clearly, we do the
              work to code, and we stand by it. Whether that's a complete rewire
              of a Victorian-era Queenslander on the Range, a switchboard upgrade
              on a rural shed with 3-phase machinery, or emergency lighting
              compliance for a commercial tenancy off Margaret Street, we bring
              the same attention to detail and the same fixed-price
              transparency.
            </p>
            <p>
              We also understand Toowoomba's weather. The Downs gets hit hard by
              storms — we've repaired more water-damaged meter boxes and
              lightning-struck switchboards than we can count. If you've had a
              storm roll through and you're not sure whether your property is
              still safe, call us for an assessment before re-energising.
            </p>
          </div>
        </div>
      </section>

      {/* Services grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-xs font-bold text-neon uppercase tracking-[3px] mb-4">
              What we cover
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold">
              Full Electrical Services — Toowoomba
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <div key={s.title} className="card-hover bg-surface-card rounded-lg p-8">
                <h3 className="font-bold text-lg mb-3">{s.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Suburbs covered */}
      <section className="py-20 bg-surface">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-xs font-bold text-neon uppercase tracking-[3px] mb-4">
              Suburbs covered
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">
              Toowoomba &amp; the Darling Downs
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              Service across Toowoomba city, the Range, and outer localities.
              Travel time varies with distance — we'll confirm on the quote.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-2 max-w-3xl mx-auto">
            {[
              "Toowoomba CBD",
              "East Toowoomba",
              "North Toowoomba",
              "South Toowoomba",
              "Rangeville",
              "Mount Lofty",
              "Middle Ridge",
              "Centenary Heights",
              "Kearneys Spring",
              "Newtown",
              "Harristown",
              "Highfields",
              "Gowrie Junction",
              "Westbrook",
              "Oakey",
              "Pittsworth",
              "Wellcamp",
            ].map((s) => (
              <span
                key={s}
                className="text-xs px-3 py-1.5 rounded bg-neon-glow border border-neon/20 text-neon"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </section>

      <FAQSection items={toowoombaFAQs} />

      {/* CTA */}
      <section className="py-24 bg-surface">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Need a Toowoomba electrician?
          </h2>
          <p className="text-text-secondary mb-8 max-w-2xl mx-auto">
            Call for 24/7 emergency service, or request a no-obligation quote.
            We'll confirm an ETA and travel component on the phone.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:0739149696"
              className="neon-btn px-10 py-4 rounded text-base tracking-wider"
            >
              CALL 07 3914 9696
            </a>
            <Link
              href="/contact"
              className="neon-btn-outline px-10 py-4 rounded text-base tracking-wider"
            >
              GET A FREE QUOTE
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
