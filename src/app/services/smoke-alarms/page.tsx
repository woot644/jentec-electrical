import type { Metadata } from "next";
import Link from "next/link";
import ServicePageHero from "@/components/ServicePageHero";
import FAQSection from "@/components/FAQ";
import ExpertAttribution from "@/components/ExpertAttribution";
import { JsonLd, serviceSchema, breadcrumbSchema } from "@/lib/schema";
import { SITE } from "@/lib/site";
import { smokeAlarmsFAQs } from "@/data/faqs";

export const metadata: Metadata = {
  title: "Smoke Alarm Installation & Compliance Brisbane",
  description:
    "Interconnected smoke alarm installation and compliance testing to AS3786 and QLD 2027 requirements. Hardwired and 10-year battery-backup options.",
  alternates: { canonical: `${SITE.url}/services/smoke-alarms` },
};

const features = [
  {
    title: "Hardwired Installation",
    desc: "Queensland law requires all smoke alarms in domestic dwellings to be hardwired to the mains power supply or powered by a non-removable 10-year lithium battery. Our licensed electricians install hardwired, interconnected photoelectric smoke alarms that meet the latest QFES requirements. Hardwired alarms provide the most reliable protection because they don't rely on batteries that can be removed or forgotten.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
      </svg>
    ),
  },
  {
    title: "Interconnected Alarms",
    desc: "When smoke alarms are interconnected, if one alarm detects smoke anywhere in the house, every alarm in the property sounds simultaneously. This is critical for larger homes where a fire starting in a distant room might not be heard from bedrooms. Queensland legislation mandates interconnected alarms in all dwellings by January 2027 &mdash; and we can bring your home into compliance today.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z" />
      </svg>
    ),
  },
  {
    title: "Testing & Certification",
    desc: "Smoke alarms require regular testing to ensure they will function when you need them most. We provide comprehensive testing and certification services for landlords, property managers, and homeowners. Our testing includes verifying alarm functionality, checking interconnection between units, inspecting mounting and placement, and issuing compliance certificates for your records.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.745 3.745 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
      </svg>
    ),
  },
  {
    title: "Landlord Compliance",
    desc: "If you own a rental property in Queensland, you have a legal obligation to ensure smoke alarms comply with current legislation. Failure to comply can result in penalties of up to $7,755. We offer a complete landlord compliance package that includes assessment, installation, testing, and certification &mdash; giving you and your tenants peace of mind that the property meets all requirements.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
      </svg>
    ),
  },
];

const placements = [
  "Each bedroom in the dwelling",
  "Hallways connecting bedrooms to the rest of the house",
  "Each storey of the dwelling (including multi-level homes)",
  "If no bedrooms on a storey, at least one alarm per storey",
];

const applicationsServed = [
  {
    title: "Owner-Occupied Homes",
    desc: "QLD's 2027 deadline applies to you. Every bedroom needs an interconnected photoelectric alarm, plus hallways and storeys. Pre-compliance upgrades now avoid the 2026/2027 rush.",
  },
  {
    title: "Rental Properties",
    desc: "Already in force since 2022. Landlords are legally required to provide compliant alarms. We work with property managers to roll compliance across portfolios on schedule.",
  },
  {
    title: "New Builds",
    desc: "Compliance is built in from rough-in — interconnected hardwired alarms with 10-year sealed lithium backup batteries. No retrofit needed.",
  },
  {
    title: "Renovations",
    desc: "Any significant renovation triggers the compliance upgrade requirement. We include smoke alarm upgrade in the rewire or addition scope so the home is compliant at handover.",
  },
  {
    title: "Commercial Properties",
    desc: "Commercial smoke detection falls under different regulations (BCA, fire engineering) but we integrate with commercial systems, tenancy compliance, and base-building fire services.",
  },
  {
    title: "Short-Stay Accommodation",
    desc: "Airbnb, short-stay rentals, Bed & Breakfasts must meet the rental compliance standard. Property managers rely on us for scheduled annual inspections.",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Home audit",
    desc: "We walk the home counting bedrooms, storeys, and hallways. We note existing alarms (hardwired? battery-only? ionisation or photoelectric?). Takes 15–20 minutes.",
  },
  {
    step: "02",
    title: "Compliance package quote",
    desc: "Written quote showing exactly what's needed — alarm count, locations, brand (Brooks, Clipsal, Emerald), and total price. Usually the same or next day after audit.",
  },
  {
    step: "03",
    title: "Installation",
    desc: "Most 3-bedroom homes done in a single day. Hardwired with 10-year sealed lithium backup batteries. No cutting into ceilings where existing cabling can be reused.",
  },
  {
    step: "04",
    title: "Interconnection test",
    desc: "Every alarm in the home sounds when one triggers. We trigger each alarm in turn and confirm the others respond — the critical part of QLD's 2027 requirement.",
  },
  {
    step: "05",
    title: "Certification & report",
    desc: "Written compliance report — useful for owner records, required for rental property files. Includes alarm locations, serial numbers, test results, and 10-year expiry dates.",
  },
];

export default function SmokeAlarmsPage() {
  return (
    <>
      <JsonLd
        data={serviceSchema(
          "Smoke Alarm Installation & Compliance",
          "Installation and compliance testing to AS3786 and QLD 2027 interconnected-alarm requirements for homes and rental properties.",
          `${SITE.url}/services/smoke-alarms`
        )}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: SITE.url },
          { name: "Services", url: `${SITE.url}/services/smoke-alarms` },
          { name: "Smoke Alarms", url: `${SITE.url}/services/smoke-alarms` },
        ])}
      />
      <ServicePageHero
        overline="Services"
        title="Smoke Alarms"
        description="Queensland law requires hardwired, interconnected smoke alarms in all domestic dwellings. With the 2027 compliance deadline approaching, now is the time to ensure your home meets the latest fire safety requirements."
        image="/images/20221005-img_0085.webp"
      />

      {/* Deadline Banner */}
      <section className="py-16 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-surface-card border border-neon/20 rounded-xl p-8 sm:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
              <div className="lg:col-span-2">
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-3 h-3 rounded-full bg-neon pulse-neon" />
                  <span className="text-sm font-bold text-neon tracking-wider">IMPORTANT DEADLINE</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold mb-4">January 2027 &mdash; All Dwellings Must Comply</h2>
                <p className="text-text-secondary leading-relaxed mb-4">
                  Under the Fire and Emergency Services Act 1990 and the Building Fire Safety Regulation 2008, all Queensland domestic dwellings must have compliant smoke alarms by 1 January 2027. This includes owner-occupied homes, which were previously exempt from the stricter requirements that already apply to rental properties and properties being sold.
                </p>
                <p className="text-text-secondary leading-relaxed">
                  Compliant alarms must be photoelectric type, hardwired or powered by a non-removable 10-year lithium battery, and interconnected so that when one alarm activates, all alarms in the dwelling sound simultaneously.
                </p>
              </div>
              <div className="text-center p-8 bg-surface rounded-xl border border-border">
                <p className="text-5xl font-bold neon-text mb-2">2027</p>
                <p className="text-sm text-text-muted uppercase tracking-wider mb-4">Compliance Deadline</p>
                <p className="text-xs text-text-secondary">All Queensland dwellings must have interconnected smoke alarms</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-xs font-bold text-neon uppercase tracking-[3px] mb-4">Our Services</p>
            <h2 className="text-3xl sm:text-4xl font-bold">Smoke Alarm Solutions</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((f, i) => {
              const imgs = [
                "/images/20221005-img_0085.webp",
                "/images/20221005-img_9887.webp",
                "/images/20221005-img_0284.webp",
                "/images/elv_4716.webp",
              ];
              return (
                <div key={f.title} className="card-hover bg-surface-card rounded-lg overflow-hidden">
                  <div className="h-56 overflow-hidden border-b border-border">
                    <img src={imgs[i % imgs.length]} alt={f.title} className="w-full h-full object-cover" />
                  </div>
                  <div className="p-8">
                    <div className="text-neon mb-4">{f.icon}</div>
                    <h3 className="text-xl font-bold mb-3">{f.title}</h3>
                    <p className="text-text-secondary text-sm leading-relaxed">{f.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* QFES Requirements */}
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xs font-bold text-neon uppercase tracking-[3px] mb-4">QFES Requirements</p>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">Where Smoke Alarms Must Be Installed</h2>
              <p className="text-text-secondary leading-relaxed mb-8">
                The Queensland Fire and Emergency Services (QFES) specifies exact locations where smoke alarms must be installed in every domestic dwelling. Alarms must be hardwired to the mains power supply or use a non-removable 10-year lithium battery, and all alarms in the dwelling must be interconnected.
              </p>
              <div className="space-y-4">
                {placements.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded bg-neon-glow border border-neon/30 flex items-center justify-center mt-0.5">
                      <svg className="w-4 h-4 text-neon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                    </div>
                    <span className="text-sm font-medium leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-surface-card border border-border rounded-xl p-8">
              <h3 className="text-xl font-bold mb-6">Alarm Requirements Summary</h3>
              <div className="space-y-4">
                {[
                  { label: "Type", value: "Photoelectric" },
                  { label: "Power", value: "Hardwired or 10-year lithium battery" },
                  { label: "Connection", value: "Interconnected (all alarms sound together)" },
                  { label: "Compliance", value: "AS 3786:2014" },
                  { label: "Deadline", value: "1 January 2027 (all dwellings)" },
                ].map((req) => (
                  <div key={req.label} className="flex items-start gap-4 p-4 bg-surface rounded-lg border border-border">
                    <span className="text-sm font-bold text-neon min-w-[100px]">{req.label}</span>
                    <span className="text-sm text-text-secondary">{req.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <p className="text-xs font-bold text-neon uppercase tracking-[3px] mb-4">
              Who Needs Compliance
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Smoke alarm compliance by property type
            </h2>
            <p className="text-text-secondary">
              Queensland&apos;s smoke alarm rules apply differently depending on how the property is used. Six common situations and what compliance means for each.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {applicationsServed.map((a) => (
              <div
                key={a.title}
                className="card-hover bg-surface-card border border-border rounded-lg p-8"
              >
                <h3 className="text-lg font-bold mb-3">{a.title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 bg-surface">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-xs font-bold text-neon uppercase tracking-[3px] mb-4">
              What to Expect
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold">
              From audit to certified, in one day
            </h2>
          </div>
          <div className="space-y-5">
            {processSteps.map((s) => (
              <div
                key={s.step}
                className="flex gap-6 items-start bg-surface-card border border-border rounded-lg p-6"
              >
                <div className="flex-shrink-0 w-14 h-14 rounded-full bg-neon-glow border border-neon/30 flex items-center justify-center">
                  <span className="text-neon font-bold text-sm tracking-wider">{s.step}</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">{s.title}</h3>
                  <p className="text-text-secondary text-sm leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance & Costs */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-surface-card border border-border rounded-xl p-8">
              <p className="text-xs font-bold text-neon uppercase tracking-[2px] mb-4">
                Compliance & Standards
              </p>
              <h3 className="text-2xl font-bold mb-4">The 2027 deadline explained</h3>
              <p className="text-text-secondary text-sm leading-relaxed mb-6">
                Queensland has the strictest smoke alarm laws in Australia. The core instruments:
              </p>
              <ul className="space-y-3 text-sm text-text-secondary">
                <li><strong className="text-white">QLD Fire and Emergency Services Act 1990</strong> — requires compliant alarms in every QLD dwelling.</li>
                <li><strong className="text-white">QLD Building Fire Safety Regulation 2008</strong> — sets the compliance specifications.</li>
                <li><strong className="text-white">AS 3786:2014</strong> — the product standard every compliant alarm must meet. Only photoelectric allowed in QLD — ionisation is banned.</li>
                <li><strong className="text-white">2027 deadline (owner-occupied)</strong> — by 1 January 2027 every owner-occupied QLD home must have interconnected photoelectric alarms in every bedroom, hallway, and storey.</li>
                <li><strong className="text-white">Rental standard (already in force)</strong> — tenanted properties have had this requirement since 2022.</li>
                <li><strong className="text-white">Sale &amp; lease trigger</strong> — a property being sold or leased must be compliant at the point of transaction, regardless of the 2027 date.</li>
              </ul>
            </div>
            <div className="bg-surface-card border border-border rounded-xl p-8">
              <p className="text-xs font-bold text-neon uppercase tracking-[2px] mb-4">
                What Affects Your Quote
              </p>
              <h3 className="text-2xl font-bold mb-4">How we price smoke alarm compliance</h3>
              <p className="text-text-secondary text-sm leading-relaxed mb-6">
                Every home is quoted fixed-price after a 15-minute audit. The variables that drive the price:
              </p>
              <div className="space-y-4 text-sm">
                <div className="border-l-2 border-neon pl-4">
                  <p className="font-bold text-white">Bedroom &amp; storey count</p>
                  <p className="text-text-secondary text-xs">Every bedroom + every hallway connecting bedrooms + every storey needs a compliant alarm.</p>
                </div>
                <div className="border-l-2 border-neon pl-4">
                  <p className="font-bold text-white">Existing alarm suitability</p>
                  <p className="text-text-secondary text-xs">Whether any existing alarms already meet AS 3786 and can be retained vs full replacement needed.</p>
                </div>
                <div className="border-l-2 border-neon pl-4">
                  <p className="font-bold text-white">Interconnection method</p>
                  <p className="text-text-secondary text-xs">Hardwired (usually cheaper during renovation) vs wireless (easier retrofit into finished homes).</p>
                </div>
                <div className="border-l-2 border-neon pl-4">
                  <p className="font-bold text-white">Access &amp; cable routing</p>
                  <p className="text-text-secondary text-xs">Ceiling access, heritage-feature considerations, whether existing cabling can be reused.</p>
                </div>
                <div className="border-l-2 border-neon pl-4">
                  <p className="font-bold text-white">Rental or bulk-portfolio pricing</p>
                  <p className="text-text-secondary text-xs">Property managers with multiple properties — volume quoted at a reduced per-property rate.</p>
                </div>
              </div>
              <div className="mt-6 pt-4 border-t border-border">
                <a href="tel:0739149696" className="text-neon font-bold text-sm">
                  Call 07 3914 9696 for a fixed-price quote →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <ExpertAttribution slug="andrew" />
        </div>
      </section>

      <FAQSection items={smokeAlarmsFAQs} />

      {/* CTA */}
      <section className="py-24 bg-surface">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-text-secondary mb-8">
            Don&apos;t wait for the 2027 deadline. Protect your family and ensure your home complies with Queensland smoke alarm legislation. Contact Jentech Electrical today for a free assessment and quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:0739149696" className="neon-btn px-8 py-4 rounded tracking-wider">CALL 07 3914 9696</a>
            <Link href="/contact" className="neon-btn-outline px-8 py-4 rounded tracking-wider">REQUEST A QUOTE</Link>
          </div>
        </div>
      </section>
    </>
  );
}
