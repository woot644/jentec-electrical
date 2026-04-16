import type { Metadata } from "next";
import Link from "next/link";
import ServicePageHero from "@/components/ServicePageHero";
import { JsonLd, serviceSchema, breadcrumbSchema } from "@/lib/schema";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Industrial Electrician Brisbane — 3-Phase, Plant & Machinery",
  description:
    "Industrial electrical maintenance and installation across Brisbane. 3-phase machinery connections, emergency stops, factory lighting, plant equipment. 24/7 breakdowns.",
  alternates: { canonical: `${SITE.url}/services/industrial` },
};

const features = [
  {
    title: "3-Phase Machinery Connection",
    desc: "Industrial operations rely on heavy-duty three-phase power to run machinery, compressors, and processing equipment. Our licensed electricians handle all aspects of 3-phase installation, from main switchboard configuration and cable sizing to final termination and commissioning. We ensure your machinery runs safely and efficiently from day one.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
      </svg>
    ),
  },
  {
    title: "Emergency Stops & Safety Systems",
    desc: "Worker safety is paramount in any industrial environment. We design, install, and maintain emergency stop systems, safety interlocks, machine guarding circuits, and isolation procedures that comply with Australian safety standards. Our team ensures every emergency stop is correctly wired, clearly labelled, and tested to function reliably when it matters most.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
      </svg>
    ),
  },
  {
    title: "Shop & Factory Lighting",
    desc: "Proper lighting in an industrial facility isn't just about visibility &mdash; it directly impacts productivity, safety, and energy costs. We design and install high-bay LED lighting systems for warehouses, workshops, and factories that deliver superior illumination while dramatically reducing your power bills. Our lighting solutions meet Australian Standards for workplace illumination levels.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
      </svg>
    ),
  },
  {
    title: "Plant Equipment & Load Balancing",
    desc: "Industrial electrical systems carry heavy loads that need careful management to prevent overloading, voltage drops, and equipment damage. Our electricians assess your total electrical load, balance power distribution across phases, and ensure your infrastructure can handle current demands as well as future expansion. We also maintain and repair plant equipment electrical systems to keep your operations running smoothly.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" />
      </svg>
    ),
  },
];

const industrialServices = [
  "Main switchboard installation & upgrades",
  "Distribution board wiring",
  "Motor control & variable speed drives",
  "Power factor correction",
  "Cable tray & conduit installation",
  "Thermal imaging & fault detection",
  "Preventative maintenance programs",
  "Testing & compliance certification",
];

export default function IndustrialPage() {
  return (
    <>
      <JsonLd
        data={serviceSchema(
          "Industrial Electrical",
          "Maintenance and installation for Brisbane industrial premises: 3-phase machinery, emergency stops, shop and factory lighting, plant equipment.",
          `${SITE.url}/services/industrial`
        )}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: SITE.url },
          { name: "Services", url: `${SITE.url}/services/industrial` },
          { name: "Industrial", url: `${SITE.url}/services/industrial` },
        ])}
      />
      <ServicePageHero
        overline="Services"
        title="Industrial Electrical"
        description="Specialist maintenance and installation for large industrial premises across Brisbane. From 3-phase machinery connections to comprehensive plant equipment servicing, our team keeps your operations powered and compliant."
        image="/images/hero-industrial.webp"
      />

      {/* 24/7 Banner */}
      <section className="py-16 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-surface-card border border-neon/20 rounded-xl p-8 sm:p-12 flex flex-col lg:flex-row gap-8 items-center">
            <div className="flex-shrink-0 w-16 h-16 rounded-full bg-neon-glow border border-neon/30 flex items-center justify-center">
              <svg className="w-8 h-8 text-neon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold mb-3">24/7 Emergency Breakdown Service</h2>
              <p className="text-text-secondary leading-relaxed">
                Industrial downtime can cost thousands per hour. When your production line stops, your machinery fails, or you lose power to critical systems, our emergency response team is available around the clock. We carry extensive inventory on our service vehicles to resolve most breakdowns in a single visit, getting your facility back to full operation as quickly as possible.
              </p>
            </div>
            <a href="tel:0739149696" className="neon-btn px-6 py-3 rounded tracking-wider text-sm whitespace-nowrap">
              CALL NOW
            </a>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-xs font-bold text-neon uppercase tracking-[3px] mb-4">Capabilities</p>
            <h2 className="text-3xl sm:text-4xl font-bold">Industrial Electrical Solutions</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { ...features[0], img: "/images/20221111-img_1080-pano-5243x3382.jpg" },
              { ...features[1], img: "/images/20221111-img_0652-3549x5116.jpg" },
              { ...features[2], img: "/images/20221111-img_1133-pano-5983x3433.jpg" },
              { ...features[3], img: "/images/20221111-img_0652-copy.jpg" },
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

      {/* Full Service List */}
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xs font-bold text-neon uppercase tracking-[3px] mb-4">Full Service</p>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">Complete Industrial Electrical Services</h2>
              <p className="text-text-secondary leading-relaxed mb-8">
                Our industrial electrical division handles everything from routine maintenance and testing through to major installations and upgrades. We work with factories, warehouses, workshops, processing plants, and distribution centres throughout the Brisbane region.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {industrialServices.map((item) => (
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
              <p className="text-xs font-bold text-neon uppercase tracking-[3px] mb-6">Testing & Compliance</p>
              <p className="text-text-secondary text-sm leading-relaxed mb-6">
                Industrial facilities face stringent electrical compliance requirements under Queensland workplace health and safety legislation. Regular testing, tagging, and inspection of electrical installations and equipment is not optional &mdash; it&apos;s a legal obligation.
              </p>
              <p className="text-text-secondary text-sm leading-relaxed mb-6">
                Our testing and compliance services include RCD testing, thermal imaging to detect hot spots and potential failures, Test & Tag of all portable equipment, emergency and exit light testing, and full electrical safety audits. We provide detailed compliance reports and certificates for your records.
              </p>
              <p className="text-text-secondary text-sm leading-relaxed">
                We also offer scheduled preventative maintenance programs designed to catch faults before they cause costly breakdowns or safety incidents. Prevention is always more cost-effective than repair.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-surface">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-text-secondary mb-8">
            From emergency breakdowns to scheduled maintenance programs, Jentech Electrical provides reliable industrial electrical services across Brisbane. Contact us to discuss your facility&apos;s requirements.
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
