import Link from "next/link";

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
      {/* Hero */}
      <section className="relative py-24 sm:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(57,255,20,0.06),transparent_50%)]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-bold text-neon uppercase tracking-[3px] mb-4">Services</p>
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">Commercial Electrical Services</h1>
          <p className="text-xl text-text-secondary max-w-2xl">
            Specialist commercial electricians providing dedicated service to Brisbane businesses. From emergency breakdowns to full-scale fit-outs, we deliver premium electrical solutions tailored to your commercial needs.
          </p>
        </div>
      </section>

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

      {/* Features */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-xs font-bold text-neon uppercase tracking-[3px] mb-4">What We Offer</p>
            <h2 className="text-3xl sm:text-4xl font-bold">Full Commercial Electrical Solutions</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((f) => (
              <div key={f.title} className="card-hover bg-surface-card rounded-lg p-8">
                <div className="text-neon mb-4">{f.icon}</div>
                <h3 className="text-xl font-bold mb-3">{f.title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed">{f.desc}</p>
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
