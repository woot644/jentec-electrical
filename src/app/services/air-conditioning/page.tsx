import type { Metadata } from "next";
import Link from "next/link";
import ServicePageHero from "@/components/ServicePageHero";
import FAQSection from "@/components/FAQ";
import { JsonLd, serviceSchema, breadcrumbSchema } from "@/lib/schema";
import { SITE } from "@/lib/site";
import { airConditioningFAQs } from "@/data/faqs";

export const metadata: Metadata = {
  title: "Air Conditioning Installation & Servicing Brisbane",
  description:
    "Split system and ducted air conditioning installations, servicing and repairs across Greater Brisbane. Licensed electricians, ARC-certified refrigerant handling, 5-year warranties.",
  alternates: { canonical: `${SITE.url}/services/air-conditioning` },
};

const features = [
  {
    title: "New Installations",
    desc: "Beat the Brisbane heat with a professionally installed split system air conditioner. We supply and install leading brands suited to your room size, layout, and budget. Our electricians handle the full process from initial site assessment and unit selection through to electrical connection, refrigerant charging, and commissioning. Every installation is completed to manufacturer specifications for maximum efficiency and warranty compliance.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
      </svg>
    ),
  },
  {
    title: "Regular Servicing",
    desc: "Air conditioning systems that aren't regularly serviced lose efficiency, consume more power, and can develop mould and bacteria in their filters and coils. Our comprehensive servicing includes filter cleaning or replacement, coil cleaning, refrigerant level checks, electrical connection inspection, thermostat calibration, and a full performance assessment to keep your system running at peak efficiency year-round.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085" />
      </svg>
    ),
  },
  {
    title: "Repairs & Diagnostics",
    desc: "Is your air conditioner not cooling properly, making unusual noises, or leaking water? Our technicians diagnose and repair faults across all major split system brands. We carry common replacement parts on our service vehicles so most repairs can be completed in a single visit, getting your comfort restored without unnecessary delays or follow-up appointments.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0 1 12 15a9.065 9.065 0 0 0-6.23.693L5 14.5m14.8.8 1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0 1 12 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
      </svg>
    ),
  },
  {
    title: "Ducted Air Conditioning",
    desc: "For whole-home or whole-office comfort, ducted air conditioning delivers consistent temperatures across every zone with discreet ceiling vents and a single controller. We install ducted systems with zone control for personalised comfort and energy savings, and we handle the full package — design, ductwork coordination with the builder, refrigerant line install, controller setup, and full commissioning.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z" />
      </svg>
    ),
  },
];

const benefits = [
  { title: "Lower Energy Bills", desc: "A well-maintained and correctly sized system uses significantly less power than an inefficient or oversized unit." },
  { title: "Improved Air Quality", desc: "Regular filter cleaning removes dust, allergens, and mould spores, creating a healthier indoor environment." },
  { title: "Extended Lifespan", desc: "Routine servicing catches minor issues before they become major faults, adding years to your system's life." },
  { title: "Warranty Protection", desc: "Most manufacturers require regular servicing to maintain warranty coverage. We provide service records for your peace of mind." },
];

export default function AirConditioningPage() {
  return (
    <>
      <JsonLd
        data={serviceSchema(
          "Air Conditioning Installation",
          "Split system and ducted installations, servicing, repairs and maintenance for Brisbane homes and businesses.",
          `${SITE.url}/services/air-conditioning`
        )}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: SITE.url },
          { name: "Services", url: `${SITE.url}/services/air-conditioning` },
          { name: "Air Conditioning", url: `${SITE.url}/services/air-conditioning` },
        ])}
      />
      <ServicePageHero
        overline="Services"
        title="Air Conditioning"
        description="Split system installations and year-round servicing to keep your home or business comfortable in Brisbane's climate. Licensed, experienced, and trusted by hundreds of Brisbane households and businesses."
        image="/images/20221005-img_9858.webp"
      />

      {/* Features */}
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-xs font-bold text-neon uppercase tracking-[3px] mb-4">What We Offer</p>
            <h2 className="text-3xl sm:text-4xl font-bold">Air Conditioning Services</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { ...features[0], img: "/images/20221005-img_9858.webp" },
              { ...features[1], img: "/images/20221005-img_0104.webp" },
              { ...features[2], img: "/images/20221005-img_9887.webp" },
              { ...features[3], img: "/images/ac-ducted.webp" },
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

      {/* Why Service */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-xs font-bold text-neon uppercase tracking-[3px] mb-4">Maintenance Matters</p>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">Why Regular Servicing Is Essential</h2>
              <p className="text-text-secondary leading-relaxed mb-6">
                Brisbane&apos;s subtropical climate means your air conditioning system works hard for much of the year. Without regular maintenance, filters clog, coils accumulate grime, and refrigerant levels can drop &mdash; all of which force your system to work harder, consume more energy, and wear out faster.
              </p>
              <p className="text-text-secondary leading-relaxed mb-8">
                We recommend servicing your split system at least once per year, ideally before the summer cooling season begins. For commercial systems or units that run year-round, we recommend servicing every six months. Our maintenance plans are designed to keep your system performing at its best while protecting your investment.
              </p>
              <a href="tel:0739149696" className="neon-btn px-6 py-3 rounded tracking-wider text-sm inline-block">
                BOOK A SERVICE
              </a>
            </div>
            <div className="space-y-4">
              {benefits.map((b) => (
                <div key={b.title} className="card-hover bg-surface-card rounded-lg p-6 flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded bg-neon-glow border border-neon/30 flex items-center justify-center mt-1">
                    <svg className="w-5 h-5 text-neon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">{b.title}</h3>
                    <p className="text-sm text-text-secondary leading-relaxed">{b.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Supply & Install */}
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-surface-card border border-border rounded-xl p-8 sm:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <p className="text-xs font-bold text-neon uppercase tracking-[3px] mb-4">Supply & Install</p>
                <h2 className="text-2xl sm:text-3xl font-bold mb-6">Complete Supply & Installation Service</h2>
                <p className="text-text-secondary leading-relaxed mb-4">
                  Not sure which system is right for your space? We take the guesswork out of air conditioning. Our team assesses your room size, insulation, window exposure, and usage patterns to recommend the perfect unit for your needs. We supply quality units from trusted brands and handle the complete installation including electrical connection, piping, drainage, and commissioning.
                </p>
                <p className="text-text-secondary leading-relaxed">
                  Every installation includes a full electrical assessment to ensure your switchboard and wiring can safely support the new system. If an upgrade is needed, we handle that too &mdash; one team, one call, no coordination headaches.
                </p>
              </div>
              <div className="flex flex-col justify-center space-y-4">
                {[
                  { value: "Licensed", label: "QBCC & ARC Licensed" },
                  { value: "Quality", label: "Leading Brands" },
                  { value: "Complete", label: "Supply & Install" },
                ].map((stat) => (
                  <div key={stat.label} className="text-center p-5 bg-surface rounded-lg border border-border">
                    <p className="text-lg font-bold neon-text mb-1">{stat.value}</p>
                    <p className="text-xs text-text-muted uppercase tracking-wider">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <FAQSection items={airConditioningFAQs} />

      {/* CTA */}
      <section className="py-24 bg-surface">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-text-secondary mb-8">
            Whether you need a new split system installed, an existing unit serviced, or a complete air conditioning solution for your home or business, Jentech Electrical has you covered. Call us today for a free quote.
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
