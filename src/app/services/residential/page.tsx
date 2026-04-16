import type { Metadata } from "next";
import Link from "next/link";
import ServicePageHero from "@/components/ServicePageHero";
import { JsonLd, serviceSchema, breadcrumbSchema } from "@/lib/schema";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Residential Electrician & Renovation Specialists Brisbane",
  description:
    "Brisbane's premium residential electrician. LED lighting, full rewiring, switchboard upgrades, new builds and Queenslander renovations. Licence 80766.",
  alternates: { canonical: `${SITE.url}/services/residential` },
};

const features = [
  {
    title: "LED Lighting Design",
    desc: "Transform the ambiance of your home with expertly designed LED lighting. We work with you to create layered lighting plans that combine task, accent, and ambient lighting for every room. From pendant installations and dimmer circuits to under-cabinet strips and outdoor landscape lighting, we bring your vision to life with energy-efficient solutions that look stunning.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
      </svg>
    ),
  },
  {
    title: "Full Rewiring",
    desc: "Older Brisbane homes, especially Queenslanders and period properties, often have outdated wiring that no longer meets current safety standards. Our team specialises in full rewiring projects that bring your electrical system up to code while preserving the character and integrity of your home. We minimise disruption with careful planning and clean workmanship.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
      </svg>
    ),
  },
  {
    title: "Switchboard Upgrades",
    desc: "A modern switchboard is the backbone of a safe and functional home. If your switchboard still uses ceramic fuses or lacks safety switches, it's time for an upgrade. We replace outdated boards with modern switchboards featuring RCD safety switches, circuit breakers, and surge protection to keep your family safe and your appliances protected.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 14.25h13.5m-13.5 0a3 3 0 0 1-3-3m3 3a3 3 0 1 0 0 6h13.5a3 3 0 1 0 0-6m-16.5-3a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3m-19.5 0a4.5 4.5 0 0 1 .9-2.7L5.737 5.1a3.375 3.375 0 0 1 2.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 0 1 .9 2.7m0 0a3 3 0 0 1-3 3m0 3h.008v.008h-.008v-.008Zm0-6h.008v.008h-.008v-.008Zm-3 6h.008v.008h-.008v-.008Zm0-6h.008v.008h-.008v-.008Z" />
      </svg>
    ),
  },
  {
    title: "New Builds & Extensions",
    desc: "Building a new home or adding an extension? We handle the complete electrical package from rough-in to final fit-off. Our team coordinates with builders, architects, and interior designers to ensure your electrical layout supports your lifestyle perfectly &mdash; from power point placement to data cabling, home automation, and EV charger pre-wiring.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
      </svg>
    ),
  },
];

const architectPartners = [
  { name: "Inaspace Architecture", desc: "Collaborative partnership on premium residential and commercial projects across Brisbane." },
  { name: "KO&Co Architecture", desc: "Working together on architecturally designed homes that push creative boundaries." },
];

export default function ResidentialPage() {
  return (
    <>
      <JsonLd
        data={serviceSchema(
          "Residential Electrical & Renovations",
          "LED lighting design, full rewiring, switchboard upgrades, new builds and Queenslander renovations for premium Brisbane homes.",
          `${SITE.url}/services/residential`
        )}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: SITE.url },
          { name: "Services", url: `${SITE.url}/services/residential` },
          { name: "Residential", url: `${SITE.url}/services/residential` },
        ])}
      />
      <ServicePageHero
        overline="Services"
        title="Renovations & Residential"
        description="Expert electrical design, lighting, renovations, and new builds for Brisbane's finest homes. We specialise in premium residences, period properties, and architecturally designed houses that demand exceptional craftsmanship."
        image="/images/elv_4716.jpg"
      />

      {/* Architect Partners */}
      <section className="py-16 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-bold text-neon uppercase tracking-[3px] mb-4">Trusted By</p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Working With Brisbane&apos;s Best Architects</h2>
          <p className="text-text-secondary max-w-2xl mb-10">
            We&apos;re proud to partner with leading architectural firms who trust us with their most demanding residential projects. These collaborations result in homes where the electrical design is as considered and refined as the architecture itself.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {architectPartners.map((partner) => (
              <div key={partner.name} className="card-hover bg-surface-card rounded-lg p-8 flex items-start gap-5">
                <div className="flex-shrink-0 w-12 h-12 rounded bg-neon-glow border border-neon/30 flex items-center justify-center">
                  <svg className="w-6 h-6 text-neon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3H21m-3.75 3H21" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">{partner.name}</h3>
                  <p className="text-text-secondary text-sm leading-relaxed">{partner.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-xs font-bold text-neon uppercase tracking-[3px] mb-4">Our Expertise</p>
            <h2 className="text-3xl sm:text-4xl font-bold">Residential Electrical Services</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { ...features[0], img: "/images/elv_4537.jpg" },
              { ...features[1], img: "/images/elv_4390.jpg" },
              { ...features[2], img: "/images/20221005-img_9887.jpg" },
              { ...features[3], img: "/images/elv_4676.jpg" },
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

      {/* Premium Homes */}
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xs font-bold text-neon uppercase tracking-[3px] mb-4">Specialisation</p>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">Premium Homes & Period Properties</h2>
              <p className="text-text-secondary leading-relaxed mb-6">
                Brisbane is home to some of Australia&apos;s most beautiful heritage architecture &mdash; from 1920s Queenslanders to 1940s Art Deco gems. These properties deserve electricians who understand the unique challenges of working with older construction while delivering modern electrical performance.
              </p>
              <p className="text-text-secondary leading-relaxed mb-8">
                Our team has extensive experience with heritage renovations, concealed wiring in VJ walls, upgrading aging infrastructure without damaging original features, and integrating modern lighting design that respects the character of the home. We treat every period property with the care and attention it deserves.
              </p>
              <div className="space-y-4">
                {["Queenslanders & character homes", "Art Deco period properties", "Architecturally designed new builds", "High-end kitchen & bathroom renovations", "Smart home integration & automation"].map((item) => (
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
              <div className="space-y-6">
                {[
                  { value: "Premium", label: "Craftsmanship" },
                  { value: "Heritage", label: "Specialists" },
                  { value: "Custom", label: "Lighting Design" },
                  { value: "Modern", label: "Standards" },
                ].map((stat) => (
                  <div key={stat.label} className="flex items-center gap-4 p-5 bg-surface rounded-lg border border-border">
                    <p className="text-xl font-bold neon-text min-w-[100px]">{stat.value}</p>
                    <p className="text-sm text-text-secondary">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-surface">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-text-secondary mb-8">
            Whether you&apos;re renovating a Queenslander, building your dream home, or upgrading your lighting, Jentech Electrical brings premium craftsmanship to every residential project. Get in touch for a free quote.
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
