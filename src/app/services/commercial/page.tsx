import type { Metadata } from "next";
import Link from "next/link";
import ServicePageHero from "@/components/ServicePageHero";
import FAQSection from "@/components/FAQ";
import ExpertAttribution from "@/components/ExpertAttribution";
import { JsonLd, serviceSchema, breadcrumbSchema } from "@/lib/schema";
import { SITE } from "@/lib/site";
import { commercialFAQs } from "@/data/faqs";

export const metadata: Metadata = {
  title: "Commercial Electrician Brisbane | Fit-Outs, Compliance & 24/7 Service",
  description:
    "Specialist commercial electricians for Brisbane businesses. Fit-outs, emergency breakdowns, AS/NZS 2293 emergency lighting, RCD testing, test-and-tag. QLD Licence 80766. 24/7 service.",
  alternates: { canonical: `${SITE.url}/services/commercial` },
};

const industriesServed = [
  {
    title: "Hospitality — Cafes, Restaurants, Bars",
    desc: "Commercial kitchens, venue lighting, EFTPOS and POS infrastructure, emergency lighting to AS/NZS 2293, grease-trap and exhaust electrical. After-hours work standard so trading isn't disrupted.",
  },
  {
    title: "Retail & Boutique",
    desc: "Feature lighting for display, point-of-sale infrastructure, CCTV integration, back-of-house systems. Scheduled fit-out delivery to landlord handover windows.",
  },
  {
    title: "Fitness & Wellness",
    desc: "24/7 access control, dynamic lighting, smart TV integration, high-load equipment circuits, UPS for critical systems. NOFOMO Gym Helensvale and Bundall were ours.",
  },
  {
    title: "Medical & Allied Health",
    desc: "Dedicated medical-grade power for diagnostic equipment, emergency power compliance, sterile-area lighting, patient-safety earthing. Coordination with medical fit-out specialists.",
  },
  {
    title: "Offices & Co-Working",
    desc: "Desk-level power and data, meeting-room AV infrastructure, lighting zones tuned for day-long screen work, emergency lighting, after-hours maintenance.",
  },
  {
    title: "Industrial & Workshops",
    desc: "3-phase machinery, emergency stops, compressed-air and mechanical plant wiring, dedicated workshop lighting at correct lux levels.",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Initial call &amp; site visit",
    desc: "We respond inside 1 business day to commercial enquiries. A qualified electrician attends your premises to walk the scope, take measurements, and identify any compliance gaps.",
  },
  {
    step: "02",
    title: "Detailed scoped quote",
    desc: "You receive a fixed-price quote typically within 3–5 business days. Every line item is described clearly — no vague lump-sum figures. After-hours loadings are included up front.",
  },
  {
    step: "03",
    title: "Schedule around your trading hours",
    desc: "We plan the work to minimise disruption — evenings, early mornings, weekends, or shoulder trading periods. Any planned isolation is notified in advance with a defined window.",
  },
  {
    step: "04",
    title: "Delivery & testing",
    desc: "Licensed electricians complete the work. Every new circuit is tested and commissioned. Certificate of Electrical Safety issued on completion for any regulated work.",
  },
  {
    step: "05",
    title: "Compliance handover",
    desc: "We deliver audit-ready paperwork — RCD test records, emergency lighting logs, test-and-tag registers, commissioning data — in a single digital package kept for the 5-year retention period.",
  },
];

const features = [
  {
    title: "Emergency Breakdowns",
    desc: "Power failures and electrical emergencies don't wait for business hours. Our 24/7 emergency breakdown service ensures your commercial operations are back online fast. We understand that every minute of downtime costs your business money, so we prioritise rapid response and efficient fault-finding to minimise disruption.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
      </svg>
    ),
  },
  {
    title: "Commercial Fit-Outs",
    desc: "From concept to completion, we deliver full electrical fit-outs for offices, retail stores, gyms, restaurants, and hospitality venues across Brisbane. Our team works alongside builders and project managers to ensure seamless coordination, on-time delivery, and a finished product that meets your exact specifications.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
      </svg>
    ),
  },
  {
    title: "Repairs & Maintenance",
    desc: "Keep your commercial premises running smoothly with our comprehensive repair and maintenance services. Whether it's a flickering light in a retail space, faulty power points in an office, or a complete electrical audit of your facility, our experienced technicians diagnose and resolve issues quickly and professionally.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085" />
      </svg>
    ),
  },
  {
    title: "Testing & Compliance",
    desc: "Stay compliant and protect your employees, customers, and assets with our full range of testing and compliance services. We handle RCD testing, Test & Tag of portable appliances, smoke alarm compliance, and comprehensive safety inspections to ensure your business meets all regulatory requirements.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
      </svg>
    ),
  },
];

const complianceServices = [
  "RCD Testing & Certification",
  "Test & Tag (Portable Appliances)",
  "Smoke Alarm Compliance",
  "Safety Inspections & Audits",
  "Emergency Lighting Testing",
  "Exit Light Compliance",
];

export default function CommercialPage() {
  return (
    <>
      <JsonLd
        data={serviceSchema(
          "Commercial Electrical Services",
          "Fit-outs, emergency breakdowns, repairs, maintenance, and compliance testing for Brisbane businesses.",
          `${SITE.url}/services/commercial`
        )}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: SITE.url },
          { name: "Services", url: `${SITE.url}/services/commercial` },
          { name: "Commercial", url: `${SITE.url}/services/commercial` },
        ])}
      />
      <ServicePageHero
        overline="Services"
        title="Commercial Electrical Services"
        description="Specialist commercial electricians providing dedicated service to Brisbane businesses. From emergency breakdowns to full-scale fit-outs, we deliver premium electrical solutions tailored to your commercial needs."
        image="/images/nofomo-bundall-4-.webp"
      />

      {/* Dedicated Tradesman */}
      <section className="py-16 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-surface-card border border-border rounded-xl p-8 sm:p-12 flex flex-col lg:flex-row gap-8 items-center">
            <div className="flex-shrink-0 w-16 h-16 rounded-full bg-neon-glow border border-neon/30 flex items-center justify-center">
              <svg className="w-8 h-8 text-neon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
              </svg>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-3">Dedicated Tradesman Per Client</h2>
              <p className="text-text-secondary leading-relaxed">
                Unlike large electrical companies where you never see the same face twice, Jentech assigns a dedicated tradesman to each commercial client. Your electrician learns your premises inside and out &mdash; they know your switchboard layout, your recurring needs, and your preferences. This means faster diagnosis, more efficient service, and a trusted professional who understands your business.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Images */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-xs font-bold text-neon uppercase tracking-[3px] mb-4">What We Offer</p>
            <h2 className="text-3xl sm:text-4xl font-bold">Full Commercial Electrical Solutions</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { ...features[0], img: "/images/blob-5acc874.webp" },
              { ...features[1], img: "/images/nofomo-bundall-4-.webp" },
              { ...features[2], img: "/images/20221111-img_1133-pano-5983x3433.webp" },
              { ...features[3], img: "/images/20221111-img_0652-copy.webp" },
            ].map((f) => (
              <div key={f.title} className="card-hover bg-surface-card rounded-lg overflow-hidden">
                <div className="h-56 overflow-hidden border-b border-border">
                  <img src={f.img} alt={f.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-8">
                  <div className="text-neon mb-4">{f.icon}</div>
                  <h3 className="text-xl font-bold mb-3">{f.title}</h3>
                  <p className="text-text-secondary text-sm leading-relaxed">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Checklist */}
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xs font-bold text-neon uppercase tracking-[3px] mb-4">Compliance</p>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">Testing & Compliance Services</h2>
              <p className="text-text-secondary leading-relaxed mb-8">
                Queensland workplace health and safety regulations require regular electrical testing and maintenance. Non-compliance can result in significant fines and, more importantly, put your people at risk. We make compliance simple with scheduled testing programs tailored to your business.
              </p>
              <div className="space-y-4">
                {complianceServices.map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded bg-neon-glow border border-neon/30 flex items-center justify-center">
                      <svg className="w-4 h-4 text-neon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                    </div>
                    <span className="text-sm font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-surface-card border border-border rounded-xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <span className="w-3 h-3 rounded-full bg-neon pulse-neon" />
                <span className="text-sm font-bold text-neon tracking-wider">24/7 EMERGENCY SERVICE</span>
              </div>
              <p className="text-text-secondary text-sm leading-relaxed mb-6">
                Electrical emergencies in a commercial setting can halt your entire operation. Our around-the-clock emergency breakdown service means you can reach a qualified technician any time of day or night &mdash; weekends and public holidays included.
              </p>
              <p className="text-text-secondary text-sm leading-relaxed mb-6">
                We carry a comprehensive range of parts and equipment on every service vehicle, enabling us to resolve the majority of emergency callouts in a single visit without return trips.
              </p>
              <a href="tel:0739149696" className="neon-btn px-6 py-3 rounded tracking-wider text-sm inline-block">
                CALL NOW
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <p className="text-xs font-bold text-neon uppercase tracking-[3px] mb-4">
              Who We Serve
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Commercial verticals we work across
            </h2>
            <p className="text-text-secondary">
              Every commercial vertical has its own compliance profile, lighting expectations, and load demands. We&apos;ve worked in all six below — the pattern of the job is different for each.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industriesServed.map((ind) => (
              <div
                key={ind.title}
                className="card-hover bg-surface-card border border-border rounded-lg p-8"
              >
                <h3 className="text-lg font-bold mb-3">{ind.title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed">{ind.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What to Expect / Process */}
      <section className="py-24 bg-surface">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-xs font-bold text-neon uppercase tracking-[3px] mb-4">
              What to Expect
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold">
              How a commercial job runs, start to finish
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

      {/* Compliance & Cost panels */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-surface-card border border-border rounded-xl p-8">
              <p className="text-xs font-bold text-neon uppercase tracking-[2px] mb-4">
                Compliance &amp; Standards
              </p>
              <h3 className="text-2xl font-bold mb-4">The regulations we work to</h3>
              <p className="text-text-secondary text-sm leading-relaxed mb-6">
                Every commercial job is delivered to the current Australian Standards and Queensland regulations. The specific instruments that apply most:
              </p>
              <ul className="space-y-3 text-sm text-text-secondary">
                <li><strong className="text-white">AS/NZS 3000:2018</strong> — the &quot;Wiring Rules&quot;, the foundation of all compliant electrical work in Australia.</li>
                <li><strong className="text-white">AS/NZS 3760</strong> — test and tag of portable appliances. Testing intervals vary from 3 months (construction) to 5 years (low-risk office).</li>
                <li><strong className="text-white">AS/NZS 2293.1 &amp; 2293.2</strong> — emergency and exit lighting design, installation, and 6-monthly discharge testing.</li>
                <li><strong className="text-white">QLD Electrical Safety Regulation 2013</strong> — RCD testing every 6 months (push-button) and 12 months (operational). Records kept 5 years.</li>
                <li><strong className="text-white">QLD Building Fire Safety Regulation 2008</strong> — emergency lighting log book requirements.</li>
                <li><strong className="text-white">Workplace Health &amp; Safety Queensland</strong> — workplace electrical safety duty of care.</li>
              </ul>
            </div>
            <div className="bg-surface-card border border-border rounded-xl p-8">
              <p className="text-xs font-bold text-neon uppercase tracking-[2px] mb-4">
                What Affects Your Quote
              </p>
              <h3 className="text-2xl font-bold mb-4">How we price commercial work</h3>
              <p className="text-text-secondary text-sm leading-relaxed mb-6">
                Every job is quoted fixed-price after a site visit. We don&apos;t publish rate cards — the same brief on two different tenancies often needs meaningfully different scope. The variables that shape your quote:
              </p>
              <div className="space-y-4 text-sm">
                <div className="border-l-2 border-neon pl-4">
                  <p className="font-bold text-white">Scope &amp; scale</p>
                  <p className="text-text-secondary text-xs">Floor area, circuit count, number of fittings, specialist systems (access control, CCTV, UPS, dynamic lighting).</p>
                </div>
                <div className="border-l-2 border-neon pl-4">
                  <p className="font-bold text-white">Trading-hours coordination</p>
                  <p className="text-text-secondary text-xs">Work completed outside business hours carries an after-hours loading — quoted transparently up front.</p>
                </div>
                <div className="border-l-2 border-neon pl-4">
                  <p className="font-bold text-white">Compliance inclusions</p>
                  <p className="text-text-secondary text-xs">RCD testing, emergency lighting testing, test-and-tag registers, Certificate of Electrical Safety, scheduled program setup.</p>
                </div>
                <div className="border-l-2 border-neon pl-4">
                  <p className="font-bold text-white">Landlord / building-manager coordination</p>
                  <p className="text-text-secondary text-xs">Multi-tenancy access, isolation planning, records filed with building management.</p>
                </div>
                <div className="border-l-2 border-neon pl-4">
                  <p className="font-bold text-white">Materials &amp; brand spec</p>
                  <p className="text-text-secondary text-xs">Quality of fittings, specified brands (client- or designer-nominated), long-lead items.</p>
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
          <ExpertAttribution slug="brandon" />
        </div>
      </section>

      <FAQSection items={commercialFAQs} />

      {/* CTA */}
      <section className="py-24 bg-surface">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-text-secondary mb-8">
            Whether you need a one-off repair or a dedicated commercial electrician for your business, Jentech Electrical is ready to help. Contact us today for a free consultation and quote.
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
