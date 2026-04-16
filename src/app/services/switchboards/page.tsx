import Link from "next/link";

const features = [
  {
    title: "Switchboard Upgrades",
    desc: "If your switchboard still uses old ceramic fuses, rewireable fuses, or lacks modern safety switches, it's time for an upgrade. We replace outdated switchboards with modern units featuring residual current devices (RCDs), miniature circuit breakers (MCBs), and surge protection. An upgraded switchboard is the foundation of a safe and reliable electrical system for your home or business.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 14.25h13.5m-13.5 0a3 3 0 0 1-3-3m3 3a3 3 0 1 0 0 6h13.5a3 3 0 1 0 0-6m-16.5-3a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3m-19.5 0a4.5 4.5 0 0 1 .9-2.7L5.737 5.1a3.375 3.375 0 0 1 2.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 0 1 .9 2.7m0 0a3 3 0 0 1-3 3m0 3h.008v.008h-.008v-.008Zm0-6h.008v.008h-.008v-.008Zm-3 6h.008v.008h-.008v-.008Zm0-6h.008v.008h-.008v-.008Z" />
      </svg>
    ),
  },
  {
    title: "Safety Switch Installation",
    desc: "Safety switches (RCDs) are your first line of defence against electric shock. They monitor the flow of electricity through a circuit and cut power within milliseconds if they detect current leaking to earth &mdash; such as when a person accidentally touches a live wire. Queensland law requires safety switches on all power circuits in domestic dwellings, and we strongly recommend them on lighting circuits too.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
      </svg>
    ),
  },
  {
    title: "Safety Inspections & Testing",
    desc: "Not sure if your switchboard is up to current standards? We provide thorough electrical safety inspections that assess the condition of your switchboard, check for compliance with current regulations, identify potential hazards, and provide clear recommendations. Our inspection reports give you a complete picture of your electrical system's safety status and what, if anything, needs attention.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
      </svg>
    ),
  },
  {
    title: "Surge Protection",
    desc: "Power surges caused by lightning strikes, grid fluctuations, or switching of large loads can damage sensitive electronics, appliances, and even cause fires. We install whole-of-house surge protection devices at the switchboard level to shield your entire property from harmful voltage spikes. This is especially important for homes with expensive electronics, home offices, or solar power systems.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
      </svg>
    ),
  },
];

const warningSignItems = [
  "Ceramic fuses or rewireable fuse holders",
  "Frequent tripping of circuits or blown fuses",
  "Burning smell or scorch marks near the switchboard",
  "No safety switches (RCDs) installed",
  "Flickering lights throughout the home",
  "Switchboard more than 25 years old",
  "Buzzing or crackling sounds from the switchboard",
  "Adding new appliances causes circuits to overload",
];

export default function SwitchboardsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-24 sm:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(57,255,20,0.06),transparent_50%)]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-bold text-neon uppercase tracking-[3px] mb-4">Services</p>
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">Switchboards</h1>
          <p className="text-xl text-text-secondary max-w-2xl">
            Hundreds of switchboard upgrades completed throughout Brisbane. Your switchboard is the heart of your electrical system &mdash; if it&apos;s outdated, your home or business could be at risk. We bring switchboards up to current safety standards with expert upgrades and installations.
          </p>
        </div>
      </section>

      {/* Stats Banner */}
      <section className="py-16 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { value: "Hundreds", label: "Switchboard Upgrades", desc: "Across Brisbane homes and businesses" },
              { value: "RCDs", label: "Safety Switches", desc: "Your first line of defence against electric shock" },
              { value: "100%", label: "Current Standards", desc: "Every upgrade meets the latest Australian Standards" },
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

      {/* Features */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-xs font-bold text-neon uppercase tracking-[3px] mb-4">Our Services</p>
            <h2 className="text-3xl sm:text-4xl font-bold">Switchboard Services</h2>
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

      {/* Warning Signs */}
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xs font-bold text-neon uppercase tracking-[3px] mb-4">Warning Signs</p>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">Does Your Switchboard Need Upgrading?</h2>
              <p className="text-text-secondary leading-relaxed mb-8">
                Many Queensland homes and businesses have switchboards that are decades old and no longer meet current Australian safety standards. An outdated switchboard is more than an inconvenience &mdash; it&apos;s a genuine safety hazard that increases the risk of electrical fire, electric shock, and damage to appliances and equipment. If you notice any of these warning signs, contact us for a professional assessment.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {warningSignItems.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded bg-neon-glow border border-neon/30 flex items-center justify-center mt-0.5">
                      <svg className="w-4 h-4 text-neon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
                      </svg>
                    </div>
                    <span className="text-sm font-medium leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-surface-card border border-border rounded-xl p-8">
              <h3 className="text-xl font-bold mb-6">What We Replace It With</h3>
              <p className="text-text-secondary text-sm leading-relaxed mb-6">
                When we upgrade your switchboard, we don&apos;t just swap like-for-like. We install a modern switchboard designed for your current needs and future growth, featuring:
              </p>
              <div className="space-y-4">
                {[
                  { title: "RCD Safety Switches", desc: "Protection on all power and lighting circuits against electric shock." },
                  { title: "Circuit Breakers (MCBs)", desc: "Modern miniature circuit breakers replace old fuses for reliable overcurrent protection." },
                  { title: "Surge Protection", desc: "Whole-of-house surge protection to safeguard electronics and appliances." },
                  { title: "Spare Capacity", desc: "Room for future additions like solar, EV chargers, or air conditioning without another upgrade." },
                  { title: "Clear Labelling", desc: "Every circuit clearly labelled for easy identification and faster fault-finding." },
                ].map((item) => (
                  <div key={item.title} className="p-4 bg-surface rounded-lg border border-border">
                    <h4 className="text-sm font-bold text-neon mb-1">{item.title}</h4>
                    <p className="text-xs text-text-secondary leading-relaxed">{item.desc}</p>
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
            Your switchboard is the most important safety device in your home. If it&apos;s outdated, don&apos;t wait for a problem to occur. Contact Jentech Electrical today for a free switchboard inspection and upgrade quote.
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
