import Link from "next/link";
import { projects } from "@/data/projects";

const featuredProjects = [
  "nofomo-helensvale",
  "stoke-green",
  "fridas-paddington",
  "clementine",
  "nofomo-bundall",
  "verney-house",
]
  .map((s) => projects.find((p) => p.slug === s)!)
  .filter(Boolean);

const services = [
  {
    title: "Commercial",
    desc: "Fit-outs, emergency breakdowns, repairs & maintenance, testing & compliance.",
    href: "/services/commercial",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
      </svg>
    ),
  },
  {
    title: "Renovations",
    desc: "Design, lighting, renovations and new builds. Working with Brisbane's best architects.",
    href: "/services/residential",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
      </svg>
    ),
  },
  {
    title: "Industrial",
    desc: "3-phase machinery, emergency stops, load balancing and 24/7 breakdown service.",
    href: "/services/industrial",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085" />
      </svg>
    ),
  },
  {
    title: "Air Conditioning",
    desc: "Split system installations and year-round servicing for homes and offices.",
    href: "/services/air-conditioning",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
      </svg>
    ),
  },
  {
    title: "Smoke Alarms",
    desc: "Installations and compliance testing. QLD 2027 interconnected alarm deadline ready.",
    href: "/services/smoke-alarms",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
      </svg>
    ),
  },
  {
    title: "Switchboards",
    desc: "Upgrades and safety inspections. Hundreds of switchboard upgrades across Brisbane.",
    href: "/services/switchboards",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 14.25h13.5m-13.5 0a3 3 0 0 1-3-3m3 3a3 3 0 1 0 0 6h13.5a3 3 0 1 0 0-6m-16.5-3a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3m-19.5 0a4.5 4.5 0 0 1 .9-2.7L5.737 5.1a3.375 3.375 0 0 1 2.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 0 1 .9 2.7m0 0a3 3 0 0 1-3 3m0 3h.008v.008h-.008v-.008Zm0-6h.008v.008h-.008v-.008Zm-3 6h.008v.008h-.008v-.008Zm0-6h.008v.008h-.008v-.008Z" />
      </svg>
    ),
  },
  {
    title: "UPS Systems",
    desc: "PSS Distributors service agent. NDIS UPS systems and long-life batteries for QLD conditions.",
    href: "/services/ups-systems",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5a2.25 2.25 0 0 1 2.25 2.25v8.25a2.25 2.25 0 0 1-2.25 2.25H3.75a2.25 2.25 0 0 1-2.25-2.25V9a2.25 2.25 0 0 1 2.25-2.25ZM7.5 10.5h.75v3h-.75v-3Zm3 0h.75v3h-.75v-3Zm3 0h.75v3h-.75v-3Z" />
      </svg>
    ),
  },
];

const reviews = [
  { name: "Rick Griffin", date: "March 2026", text: "Great service by Stephen in particular. On time, fast, efficient and very reasonably priced. Would highly recommend Jentech Electrical to anyone." },
  { name: "Evannie Cris Guzman", date: "February 2026", text: "Professional, friendly, and reliable. Jett did an excellent job with our electrical work. Would not hesitate to use Jentech again." },
  { name: "Vikki L Brown", date: "February 2026", text: "The tech that came out to see me today was awesome. He was professional, thorough and explained everything clearly. Highly recommend." },
];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src="/team-hero.webp" alt="Jentech Electrical team in Brisbane" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/30" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-8">
              <span className="w-3 h-3 rounded-full bg-neon pulse-neon" />
              <span className="text-sm font-medium text-neon tracking-wider uppercase">Available 24/7 &mdash; Emergency Service</span>
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] mb-6 text-white">
              Brisbane&apos;s Premium{" "}
              <span className="neon-text">Electrician</span>
            </h1>
            <p className="text-xl sm:text-2xl text-white/80 font-light leading-relaxed max-w-2xl mb-4">
              Concierge-style electrical service with the expertise you can count on.
            </p>
            <p className="text-lg text-white/60 max-w-2xl mb-10">
              Family-owned. Commercial. Residential. Industrial. When you need us, we&apos;re here.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:0739149696" className="neon-btn px-8 py-4 rounded text-base tracking-wider text-center">
                CALL 07 3914 9696
              </a>
              <Link href="/contact" className="neon-btn-outline px-8 py-4 rounded text-base tracking-wider text-center">
                REQUEST A QUOTE
              </Link>
            </div>
            <div className="flex flex-wrap items-center gap-8 mt-14 pt-8 border-t border-white/20">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-neon" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                <span className="text-white font-bold">5.0</span>
                <span className="text-white/70 text-sm">158 Google Reviews</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-neon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" /></svg>
                <span className="text-white/70 text-sm">QLD Licence <span className="text-white font-semibold">80766</span></span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-neon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <span className="text-white/70 text-sm">24/7 Emergency Response</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-24 section-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-xs font-bold text-neon uppercase tracking-[3px] mb-4">What We Do</p>
            <h2 className="text-3xl sm:text-4xl font-bold">Our Electrical Services</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <Link key={s.href} href={s.href} className="card-hover bg-surface-card rounded-lg p-8 group">
                <div className="text-text-muted group-hover:text-neon transition-colors mb-6">{s.icon}</div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-neon transition-colors">{s.title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed mb-6">{s.desc}</p>
                <span className="text-neon text-sm font-medium flex items-center gap-2 group-hover:gap-3 transition-all">
                  Learn more
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE JENTECH */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xs font-bold text-neon uppercase tracking-[3px] mb-4">Why Choose Us</p>
              <h2 className="text-3xl sm:text-4xl font-bold mb-8">Your Business Is<br />Our Business</h2>
              <p className="text-text-secondary text-lg leading-relaxed mb-10">
                We&apos;re not just another electrical company. We&apos;re a family-owned team that treats every job like it&apos;s our own home. Concierge-style service means you get high communication, premium workmanship, and someone who actually picks up the phone.
              </p>
              <div className="space-y-6">
                {[
                  { title: "Concierge Customer Experience", desc: "High levels of communication, presentation, and service. We keep you informed at every step." },
                  { title: "Family-Owned & Operated", desc: "We understand how costly disruptions can be. That's why we treat your business as our business." },
                  { title: "Young, Vibrant Team", desc: "Each team member brings their own unique gifts, energy, and a passion for innovating the electrical industry." },
                  { title: "24/7 Emergency Service", desc: "Power outage at 2am? Business breakdown on a Sunday? We're here when it matters most." },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded bg-neon-glow border border-neon/30 flex items-center justify-center">
                      <svg className="w-5 h-5 text-neon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">{item.title}</h3>
                      <p className="text-sm text-text-secondary">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-surface-card border border-border rounded-xl p-10">
              <div className="grid grid-cols-2 gap-8">
                {[
                  { value: "158+", label: "5-Star Reviews" },
                  { value: "24/7", label: "Emergency Response" },
                  { value: "80766", label: "QLD Licence" },
                  { value: "100%", label: "Communication" },
                ].map((stat) => (
                  <div key={stat.label} className="text-center p-6 bg-surface rounded-lg border border-border">
                    <p className="text-3xl font-bold neon-text mb-2">{stat.value}</p>
                    <p className="text-xs text-text-muted uppercase tracking-wider">{stat.label}</p>
                  </div>
                ))}
              </div>
              <div className="mt-8 p-6 bg-neon-glow rounded-lg border border-neon/20">
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-3 h-3 rounded-full bg-neon pulse-neon" />
                  <span className="text-sm font-bold text-neon">ALWAYS AVAILABLE</span>
                </div>
                <p className="text-sm text-text-secondary leading-relaxed">
                  Household loss of power or business breakdown &mdash; call us anytime and follow the prompts to reach our on-call technician.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-16 gap-4">
            <div>
              <p className="text-xs font-bold text-neon uppercase tracking-[3px] mb-4">Our Work</p>
              <h2 className="text-3xl sm:text-4xl font-bold">Featured Projects</h2>
            </div>
            <Link href="/projects" className="neon-btn-outline px-6 py-3 rounded text-sm tracking-wider">VIEW ALL PROJECTS</Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.map((p) => (
              <Link
                key={p.slug}
                href={`/projects/${p.slug}`}
                className="card-hover bg-surface-card rounded-lg overflow-hidden group"
              >
                <div className="h-48 bg-surface-elevated border-b border-border overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <span className="text-[10px] font-bold text-neon uppercase tracking-[2px] bg-neon-glow px-2.5 py-1 rounded">
                    {p.category}
                  </span>
                  <h3 className="text-lg font-bold mt-3 mb-1 group-hover:text-neon transition-colors">
                    {p.name}
                  </h3>
                  <p className="text-sm text-text-secondary">{p.tagline}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="py-24 section-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero rating strip */}
          <div className="bg-surface-card border border-border rounded-xl p-8 sm:p-10 mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start gap-1 mb-3">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <svg key={i} className="w-7 h-7 text-neon" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                  ))}
                </div>
                <p className="text-6xl font-bold neon-text leading-none mb-2">5.0</p>
                <p className="text-sm text-text-muted uppercase tracking-wider">out of 5 stars</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-bold mb-2">158</p>
                <p className="text-sm text-text-muted uppercase tracking-wider">Google Reviews</p>
                <p className="text-xs text-text-secondary mt-2">Verified on Google Business Profile</p>
              </div>
              <div className="text-center lg:text-right">
                <p className="text-sm text-text-secondary mb-4">
                  Don&apos;t just take our word for it — read every review on Google.
                </p>
                <a
                  href="https://maps.google.com/maps?cid=14536006754446114868"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="neon-btn-outline px-6 py-3 rounded text-sm tracking-wider inline-flex items-center gap-2"
                >
                  READ ALL 158 REVIEWS
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="text-center mb-12">
            <p className="text-xs font-bold text-neon uppercase tracking-[3px] mb-4">Recent Reviews</p>
            <h2 className="text-3xl sm:text-4xl font-bold">What Our Clients Say</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviews.map((r) => (
              <div key={r.name} className="bg-surface-card border border-border rounded-lg p-8">
                <div className="flex gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <svg key={i} className="w-4 h-4 text-neon" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                  ))}
                </div>
                <p className="text-text-secondary text-sm leading-relaxed mb-6">&ldquo;{r.text}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-neon/10 border border-neon/30 flex items-center justify-center">
                    <span className="text-neon font-bold text-sm">{r.name[0]}</span>
                  </div>
                  <div>
                    <p className="text-sm font-medium">{r.name}</p>
                    <p className="text-xs text-text-muted flex items-center gap-1.5">
                      <svg className="w-3 h-3" viewBox="0 0 24 24" fill="#4285F4"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>
                      {r.date}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-surface relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(57,255,20,0.08),transparent_70%)]" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-neon-glow border border-neon/20 rounded-full px-4 py-2 mb-8">
            <span className="w-2.5 h-2.5 rounded-full bg-neon pulse-neon" />
            <span className="text-xs font-medium text-neon tracking-wider">WE&apos;RE READY WHEN YOU ARE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Need an Electrician?<br />
            <span className="neon-text">We&apos;re Here.</span>
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto mb-10">
            From emergency callouts to full commercial fit-outs, our family-owned team delivers premium electrical service with the communication and care you deserve.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:0739149696" className="neon-btn px-10 py-4 rounded text-base tracking-wider">CALL 07 3914 9696</a>
            <Link href="/contact" className="neon-btn-outline px-10 py-4 rounded text-base tracking-wider">GET A FREE QUOTE</Link>
          </div>
        </div>
      </section>
    </>
  );
}
