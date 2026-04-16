import Link from "next/link";
import ServicePageHero from "@/components/ServicePageHero";

const pricing = [
  { size: "2.6KW", price: "$1,760" },
  { size: "3.5KW", price: "$1,830" },
  { size: "5.2KW", price: "$2,260" },
  { size: "7.2KW", price: "$2,310" },
];

const features = [
  {
    title: "Smart Inverter Technology",
    desc: "Advanced inverter compressor adjusts speed for consistent temperatures and lower energy bills.",
  },
  {
    title: "Air Purification",
    desc: "Built-in air purification filters for cleaner, healthier indoor air quality.",
  },
  {
    title: "Google & Alexa Compatible",
    desc: "Control your air conditioner with voice commands through Google Home or Amazon Alexa.",
  },
  {
    title: "5-Year Warranty",
    desc: "Full manufacturer warranty for complete peace of mind on parts and compressor.",
  },
];

const conditions = [
  "Pricing is ex GST and includes full supply and installation.",
  "Property must be within 20km of the Brisbane CBD.",
  "Available for back-to-back replacements only (existing unit being replaced in the same location).",
  "Quote must be accepted within 30 days.",
  "Subject to availability. Offer may be withdrawn at any time.",
];

export default function SpecialsPage() {
  return (
    <>
      <ServicePageHero
        overline="Limited Time Offer"
        title="TCL Split System Air Conditioner Special"
        description="Premium TCL split system air conditioners, fully supplied and installed. Up to 30% off standard pricing while stocks last."
        image="/images/hero-specials.webp"
      />

      {/* Pricing Cards */}
      <section className="py-16 bg-surface">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-neon-glow border border-neon/20 rounded-full px-4 py-2 mb-6">
              <span className="text-xs font-bold text-neon tracking-wider">
                UP TO 30% OFF
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-3">
              Supply &amp; Install Pricing
            </h2>
            <p className="text-text-secondary">
              All prices ex GST. Includes full supply and professional
              installation.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {pricing.map((item) => (
              <div
                key={item.size}
                className="card-hover bg-surface-card rounded-lg p-8 text-center"
              >
                <p className="text-sm font-bold text-neon uppercase tracking-wider mb-4">
                  {item.size}
                </p>
                <p className="text-4xl font-bold mb-2">{item.price}</p>
                <p className="text-xs text-text-muted uppercase tracking-wider">
                  ex GST
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-xs font-bold text-neon uppercase tracking-[3px] mb-4">
              Why TCL
            </p>
            <h2 className="text-3xl font-bold">
              Packed with Features
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((f) => (
              <div
                key={f.title}
                className="card-hover bg-surface-card rounded-lg p-8"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded bg-neon-glow border border-neon/30 flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-neon"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">{f.title}</h3>
                    <p className="text-sm text-text-secondary leading-relaxed">
                      {f.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Conditions */}
      <section className="py-16 bg-surface">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-8 text-center">
            Terms &amp; Conditions
          </h2>
          <div className="bg-surface-card border border-border rounded-lg p-8">
            <ul className="space-y-4">
              {conditions.map((c, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-neon-glow border border-neon/30 flex items-center justify-center mt-0.5">
                    <span className="text-neon text-xs font-bold">
                      {i + 1}
                    </span>
                  </span>
                  <span className="text-sm text-text-secondary leading-relaxed">
                    {c}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(57,255,20,0.08),transparent_70%)]" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Ready to Stay Cool?
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto mb-10">
            Call us today to lock in this special pricing. Our team will assess
            your space and handle the full installation.
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
