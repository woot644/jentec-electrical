import Link from "next/link";

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

export default function SmokeAlarmsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-24 sm:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(57,255,20,0.06),transparent_50%)]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-bold text-neon uppercase tracking-[3px] mb-4">Services</p>
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">Smoke Alarms</h1>
          <p className="text-xl text-text-secondary max-w-2xl">
            Queensland law requires hardwired, interconnected smoke alarms in all domestic dwellings. With the 2027 compliance deadline approaching, now is the time to ensure your home meets the latest fire safety requirements.
          </p>
        </div>
      </section>

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
