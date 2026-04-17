import type { Metadata } from "next";
import Link from "next/link";
import ServicePageHero from "@/components/ServicePageHero";
import FAQSection from "@/components/FAQ";
import { JsonLd, serviceSchema, breadcrumbSchema } from "@/lib/schema";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "UPS Systems Service & Installation Brisbane",
  description:
    "Authorised PSS Distributors service agent for UPS (Uninterruptible Power Supply) systems across Queensland. NDIS-compliant UPS, long-life batteries for QLD conditions. Brisbane electrician.",
  alternates: { canonical: `${SITE.url}/services/ups-systems` },
};

const capabilities = [
  {
    title: "PSS Distributors Service Agent",
    desc: "Jentech is an authorised service agent for PSS Distributors — one of Australia's leading UPS suppliers. That means we carry genuine replacement batteries and parts, service records go back to the manufacturer, and warranty work is honoured. When your PSS UPS needs attention across Queensland, we're the team who can keep it covered.",
  },
  {
    title: "NDIS UPS Systems",
    desc: "For NDIS participants who rely on powered medical equipment, a UPS isn't a nice-to-have — it's life-critical. We install and maintain NDIS-compliant UPS systems that keep oxygen concentrators, ventilators, feeding pumps, CPAP machines, and other essential equipment running through outages. We can also liaise with your NDIS plan manager or support coordinator on the documentation.",
  },
  {
    title: "Long-life QLD-spec batteries",
    desc: "Standard UPS batteries die fast in Brisbane's humid, hot conditions — we've seen sealed lead-acid batteries fail inside 18 months because they weren't specified for the climate. We install long-life batteries designed for sustained high-temperature operation, significantly extending service intervals and lowering total cost of ownership.",
  },
  {
    title: "Replacement & upgrades",
    desc: "If your existing UPS is nearing end of life, no longer supported by its manufacturer, or has outgrown its original load, we can size, supply, and install a replacement. We handle everything from load assessment and unit selection through to installation, battery commissioning, and decommissioning of the old equipment.",
  },
];

const applications = [
  { title: "Medical / NDIS", text: "Life-support equipment, medical refrigeration, oxygen concentrators." },
  { title: "Small business", text: "Servers, point-of-sale, networking, CCTV, access control." },
  { title: "Home offices", text: "Workstations, internet, phones — ride through brownouts and outages." },
  { title: "Commercial sites", text: "Retail tills, kitchen display systems, building management systems." },
];

const faqs = [
  {
    q: "What is a UPS and do I need one?",
    a: "A UPS (Uninterruptible Power Supply) is a battery-backed power unit that sits between mains power and your critical equipment. When mains fails or drops (even for a fraction of a second), the UPS takes over immediately so your equipment keeps running. You need one if you rely on equipment that can't tolerate a power interruption — medical devices, servers, point-of-sale systems, surveillance, or anything with sensitive electronics that doesn't handle voltage dips well.",
  },
  {
    q: "Do NDIS participants qualify for a UPS through their plan?",
    a: "In many cases, yes. If you rely on powered medical or mobility equipment, a UPS can be included in your NDIS plan as reasonable and necessary support. We can provide a written quote and specifications that your support coordinator or plan manager can submit as part of your plan. We're happy to have a direct conversation with them about sizing and suitability.",
  },
  {
    q: "How long will a UPS keep my equipment running?",
    a: "Runtime depends on the UPS capacity and the load it's supporting. A small UPS can keep a single router or workstation running for 15–30 minutes — enough to ride through a typical short outage or bridge to a generator. Larger units configured for medical equipment can run for hours. We size UPS systems specifically for your equipment so you know exactly what runtime to expect.",
  },
  {
    q: "How often should UPS batteries be replaced?",
    a: "Standard lead-acid UPS batteries typically last 3–5 years in controlled conditions, but Brisbane's climate often shortens that significantly. We install long-life batteries rated for sustained high-temperature operation, which can double service life. As a PSS Distributors service agent, we also carry out scheduled battery health checks and preventative replacements before a failure catches you out.",
  },
  {
    q: "Can Jentech service a UPS from another supplier?",
    a: "Yes. Even if your UPS wasn't supplied by us, we can assess it, carry out battery replacements, load tests, firmware checks, and maintenance. We'll give you an honest read on whether it's worth continuing to maintain, or whether a replacement is a better long-term call.",
  },
];

export default function UPSSystemsPage() {
  return (
    <>
      <JsonLd
        data={serviceSchema(
          "UPS Systems — Installation, Service, Battery Replacement",
          "Authorised PSS Distributors service agent for UPS systems across Queensland. NDIS-compliant UPS installations and long-life batteries specified for QLD conditions.",
          `${SITE.url}/services/ups-systems`
        )}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: SITE.url },
          { name: "Services", url: `${SITE.url}/services/ups-systems` },
          { name: "UPS Systems", url: `${SITE.url}/services/ups-systems` },
        ])}
      />
      <ServicePageHero
        overline="Specialist Service"
        title="UPS Systems"
        description="Authorised PSS Distributors service agent for Queensland. NDIS-compliant UPS installations, long-life batteries specified for Brisbane's climate, and full lifecycle support for existing systems."
        image="/images/20221111-img_0652-3549x5116.webp"
      />

      {/* Key credentials band */}
      <section className="py-16 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { value: "PSS", label: "Authorised Service Agent", desc: "Genuine parts, factory-honoured warranties." },
              { value: "NDIS", label: "Life-Support Grade UPS", desc: "For participants on powered medical equipment." },
              { value: "QLD", label: "Climate-Spec Batteries", desc: "Long-life cells built for heat and humidity." },
            ].map((stat) => (
              <div key={stat.label} className="card-hover bg-surface-card rounded-lg p-8 text-center">
                <p className="text-3xl font-bold neon-text mb-2">{stat.value}</p>
                <p className="text-sm font-bold uppercase tracking-wider mb-2">{stat.label}</p>
                <p className="text-xs text-text-secondary">{stat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What we do */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <p className="text-xs font-bold text-neon uppercase tracking-[3px] mb-4">What we cover</p>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Full UPS Lifecycle Support</h2>
            <p className="text-text-secondary">
              From new installations to battery replacement, servicing and decommissioning — we handle the
              full lifecycle of a UPS system so you don&apos;t end up with equipment that fails when you need
              it most.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {capabilities.map((c) => (
              <div key={c.title} className="card-hover bg-surface-card rounded-lg p-8">
                <h3 className="font-bold mb-3 text-lg">{c.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-xs font-bold text-neon uppercase tracking-[3px] mb-4">
              Typical applications
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold">Who uses UPS systems?</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {applications.map((a) => (
              <div key={a.title} className="bg-surface-card border border-border rounded-lg p-6">
                <h3 className="font-bold mb-2 text-neon">{a.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">{a.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NDIS callout */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-neon-glow border border-neon/30 rounded-xl p-8 sm:p-12">
            <p className="text-xs font-bold text-neon uppercase tracking-[3px] mb-4">NDIS Participants</p>
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">
              Talk to us about NDIS UPS funding
            </h2>
            <p className="text-text-secondary leading-relaxed mb-6">
              If you rely on powered medical equipment and a power outage would put your health at risk,
              a UPS can often be funded through your NDIS plan. We&apos;ll provide a detailed written
              quote with specifications, runtime calculations, and warranty terms — everything your
              support coordinator or plan manager needs to make the case.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:0739149696" className="neon-btn px-6 py-3 rounded tracking-wider text-sm">
                CALL 07 3914 9696
              </a>
              <Link href="/contact" className="neon-btn-outline px-6 py-3 rounded tracking-wider text-sm">
                REQUEST A QUOTE
              </Link>
            </div>
          </div>
        </div>
      </section>

      <FAQSection items={faqs} />

      {/* CTA */}
      <section className="py-24 bg-surface">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Protect your critical equipment</h2>
          <p className="text-text-secondary mb-8 max-w-2xl mx-auto">
            Whether it&apos;s a new installation, a battery replacement, or servicing an existing
            system, we&apos;ll size and support a UPS that actually keeps working when Brisbane&apos;s
            power drops.
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
              REQUEST A QUOTE
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
