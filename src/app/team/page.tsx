import type { Metadata } from "next";
import Link from "next/link";
import ServicePageHero from "@/components/ServicePageHero";
import { JsonLd, breadcrumbSchema, personSchema } from "@/lib/schema";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Meet the Team — Jentech Electrical",
  description:
    "Meet the licensed electricians behind Jentech Electrical — a family-owned Brisbane team led by Andrew with 18 years on the tools, delivering concierge-level service to commercial, residential, and industrial clients.",
  alternates: { canonical: `${SITE.url}/team` },
};

type TeamMember = {
  name: string;
  role: string;
  years?: number;
  licence?: string;
  specialisations?: string[];
  image?: string;
  bio: string;
};

const director: TeamMember = {
  name: "Andrew",
  role: "Director",
  years: 18,
  licence: "129399",
  image: "/team/andrew.webp",
  // Andrew's own words — kept long because it's the founder/director's
  // statement and sets the tone for the whole team page.
  bio:
    "With 18 years of experience in the industry, I have honed a diverse skill set that spans leadership, client relations, problem-solving, and operational management. I am passionate about delivering value through a client-focused business model that places customers' needs at the heart of everything we do.\n\nThroughout my career, I have developed exceptional communication skills, enabling me to effectively collaborate across teams, engage clients, and ensure the seamless execution of complex projects. Whether it's driving innovation, managing functional teams, or optimising processes, I am committed to finding solutions that drive results and exceed expectations.\n\nAs a leader and manager, I take pride in motivating teams to perform at their best, while fostering an environment of trust, collaboration, and continuous improvement. My organisational strengths allow me to manage multiple priorities effectively, ensuring that both short-term and long-term goals are met efficiently and precisely.\n\nI am always eager to learn by leveraging my experience and expertise to tackle new challenges.",
};

const electricians: TeamMember[] = [
  {
    name: "Khydyn",
    role: "Manager",
    years: 14,
    licence: "151153",
    specialisations: [
      "Architectural builds",
      "High-end renovations",
      "Fine-detail work",
    ],
    image: "/team/khydyn.webp",
    bio:
      "Khydyn manages the field team and specialises in architectural builds and renovations — anything that demands a fine eye for detail. 14 years on the tools across Brisbane's residential and commercial markets.",
  },
  {
    name: "Brandon",
    role: "Team Leader",
    years: 10,
    licence: "164332",
    specialisations: [
      "Large project coordination",
      "School & corporate maintenance",
      "UPS servicing & installation",
    ],
    image: "/team/brandon.webp",
    bio:
      "Brandon coordinates Jentech's largest projects — including school buildings — and runs the ongoing maintenance program for school and corporate clients. Also leads UPS servicing and installations as a PSS authorised service agent.",
  },
  {
    name: "James",
    role: "Team Leader",
    years: 6,
    licence: "179744",
    specialisations: [
      "Complex fault-finding",
      "Residential renovations",
      "Switchboard upgrades",
    ],
    image: "/team/james.webp",
    bio:
      "James handles complex faults, residential renovations, and switchboard upgrades. The electrician you want when something doesn't make sense and the job needs a methodical, experienced eye.",
  },
  {
    name: "Rowan",
    role: "Team Leader",
    years: 5,
    licence: "1506377",
    specialisations: [
      "Commercial fitouts",
      "Residential projects",
      "Switchboard upgrades",
    ],
    image: "/team/rowan.webp",
    bio:
      "Rowan leads commercial fitouts, residential projects, and switchboard upgrades. Brings calm, detail-focused execution to multi-trade jobsites where coordination matters.",
  },
];

const office: TeamMember[] = [
  {
    name: "Karen",
    role: "Quoting & Accounts",
    image: "/team/karen.webp",
    bio:
      "30 years across residential and commercial property management, plus a history coordinating small building projects. Karen prepares quotes, handles accounts, and keeps the back-of-house running so jobs move smoothly from enquiry to invoice.",
  },
  {
    name: "Michael",
    role: "Customer Relations",
    image: "/team/michael.webp",
    bio:
      "Michael runs customer relations, drawing on a family history in property investment and a genuine love of the conversations that come with the role. Often the first voice you'll hear from Jentech.",
  },
  {
    name: "Rachel",
    role: "Office Manager",
    image: "/team/rachel.webp",
    bio:
      "Six years of residential property management — including leading a property management department — and seven years embedded at Jentech, with a family background in real estate. Rachel keeps the team's day-to-day organised.",
  },
];

// Internal-link map: each specialisation tag points to the matching
// service page when one exists. Helps Google connect named experts to
// service-intent queries (e.g. "Brandon -> UPS systems").
const SPECIALISATION_LINKS: Record<string, string> = {
  "Architectural builds":            "/services/residential",
  "High-end renovations":            "/services/residential",
  "Large project coordination":      "/services/commercial",
  "School & corporate maintenance":  "/services/commercial",
  "UPS servicing & installation":    "/services/ups-systems",
  "Residential renovations":         "/services/residential",
  "Switchboard upgrades":            "/services/switchboards",
  "Commercial fitouts":              "/services/commercial",
  "Residential projects":            "/services/residential",
};

const values = [
  {
    title: "Concierge-level communication",
    text: "You hear from us before, during, and after every job. No ghosting, no surprises. Clear quotes, clear scope, clear timelines.",
  },
  {
    title: "Premium workmanship",
    text: "Every job is finished to the same standard — whether it's a single power point or a full commercial fit-out. We don't cut corners.",
  },
  {
    title: "Family-owned, Brisbane-based",
    text: "We live where we work, and we treat every property like our own home. That's why our clients come back for every job.",
  },
  {
    title: "Always available",
    text: "24/7 emergency response for the jobs that can't wait. Most emergency callouts resolved in a single visit.",
  },
];

function initialsOf(name: string) {
  return name.slice(0, 2).toUpperCase();
}

function MemberCard({ m }: { m: TeamMember }) {
  return (
    <div className="card-hover bg-surface-card rounded-lg overflow-hidden flex flex-col">
      <div className="aspect-[3/4] overflow-hidden border-b border-border bg-surface">
        {m.image ? (
          <img
            src={m.image}
            alt={`${m.name} — ${m.role} at Jentech Electrical`}
            className="w-full h-full object-cover"
          />
        ) : (
          <div
            aria-label={`${m.name} portrait — photo coming soon`}
            className="w-full h-full flex items-center justify-center text-neon font-bold tracking-tight"
            style={{ fontSize: "5rem" }}
          >
            {initialsOf(m.name)}
          </div>
        )}
      </div>
      <div className="p-6 flex-1 flex flex-col">
        <div className="flex items-baseline justify-between gap-3 mb-1">
          <h3 className="text-lg font-bold">{m.name}</h3>
          {m.years ? (
            <span className="text-xs text-text-muted whitespace-nowrap">
              {m.years} yrs
            </span>
          ) : null}
        </div>
        <p className="text-xs font-bold text-neon uppercase tracking-wider mb-3">
          {m.role}
        </p>
        {m.licence ? (
          <p className="text-xs text-text-muted mb-3">
            QLD Electrical Worker Licence #{m.licence}
          </p>
        ) : null}
        <p className="text-sm text-text-secondary leading-relaxed mb-4 flex-1">
          {m.bio}
        </p>
        {m.specialisations?.length ? (
          <div className="flex flex-wrap gap-1.5 mt-auto">
            {m.specialisations.map((s) => {
              const href = SPECIALISATION_LINKS[s];
              const className =
                "text-[11px] px-2 py-1 rounded border border-neon/30 text-neon/90 transition-colors";
              return href ? (
                <Link
                  key={s}
                  href={href}
                  className={`${className} hover:bg-neon/10`}
                >
                  {s}
                </Link>
              ) : (
                <span key={s} className={className}>
                  {s}
                </span>
              );
            })}
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default function TeamPage() {
  const teamUrl = `${SITE.url}/team`;
  const personSchemas = [director, ...electricians, ...office].map((m) =>
    personSchema({
      slug: m.name.toLowerCase(),
      name: `${m.name}${m.role ? ` — ${m.role}, Jentech Electrical` : ""}`,
      jobTitle: m.role,
      // Person schema description is one field — collapse Andrew's
      // multi-paragraph bio into a single paragraph for crawlers.
      description: m.bio.replace(/\s*\n+\s*/g, " "),
      image: m.image ? `${SITE.url}${m.image}` : undefined,
      url: teamUrl,
      knowsAbout: m.specialisations,
      licenceNumber: m.licence,
    }),
  );

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: SITE.url },
          { name: "Team", url: teamUrl },
        ])}
      />
      {personSchemas.map((s, i) => (
        <JsonLd key={i} data={s} />
      ))}

      <ServicePageHero
        overline="The People Behind Jentech"
        title="Meet the Team"
        description="A family-owned Brisbane electrical team. Five licensed electricians and a three-person office, known for concierge-level communication and premium workmanship."
        image="/team-hero.webp"
      />

      {/* Director — featured */}
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <p className="text-xs font-bold text-neon uppercase tracking-[3px] mb-4">
              From the Director
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Meet Andrew.
            </h2>
          </div>
          <div className="card-hover bg-surface-card rounded-lg overflow-hidden grid grid-cols-1 md:grid-cols-[minmax(0,1fr)_minmax(0,1.5fr)]">
            <div className="aspect-[3/4] md:aspect-auto md:min-h-full overflow-hidden bg-surface">
              {director.image ? (
                <img
                  src={director.image}
                  alt={`${director.name} — ${director.role} at Jentech Electrical`}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div
                  className="w-full h-full flex items-center justify-center text-neon font-bold tracking-tight"
                  style={{ fontSize: "8rem" }}
                >
                  {initialsOf(director.name)}
                </div>
              )}
            </div>
            <div className="p-8 md:p-10 flex flex-col">
              <div className="flex items-baseline justify-between gap-3 mb-1">
                <h3 className="text-2xl font-bold">{director.name}</h3>
                <span className="text-xs text-text-muted whitespace-nowrap">
                  {director.years} yrs
                </span>
              </div>
              <p className="text-xs font-bold text-neon uppercase tracking-wider mb-3">
                {director.role}
              </p>
              <p className="text-xs text-text-muted mb-6">
                QLD Electrical Worker Licence #{director.licence}
              </p>
              <div className="text-sm text-text-secondary leading-relaxed space-y-4">
                {director.bio.split("\n\n").map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Electricians */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <p className="text-xs font-bold text-neon uppercase tracking-[3px] mb-4">
              Our Licensed Electricians
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              35 years on the tools, between them.
            </h2>
            <p className="text-text-secondary">
              Every Jentech electrician is fully licensed and fully insured.
              Each has a specialisation — so the person who turns up at your
              door is the right one for the job from the moment they arrive.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {electricians.map((m) => (
              <MemberCard key={m.name} m={m} />
            ))}
          </div>
        </div>
      </section>

      {/* Office */}
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <p className="text-xs font-bold text-neon uppercase tracking-[3px] mb-4">
              Our Office Team
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              The people keeping every job moving.
            </h2>
            <p className="text-text-secondary">
              Behind every clean install is a team that quoted accurately,
              answered the phone quickly, and made sure your job didn&apos;t
              slip through the cracks.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {office.map((m) => (
              <MemberCard key={m.name} m={m} />
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-xs font-bold text-neon uppercase tracking-[3px] mb-4">
              How we work
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold">
              What Jentech Stands For
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((v) => (
              <div
                key={v.title}
                className="card-hover bg-surface-card rounded-lg p-8"
              >
                <h3 className="font-bold mb-3 text-lg">{v.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {v.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Credentials band */}
      <section className="py-16 bg-surface">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: "80766", label: "QLD Contractor Licence" },
              { value: "5.0", label: "Google Rating" },
              { value: "158", label: "Reviews" },
              { value: "24/7", label: "Emergency" },
            ].map((s) => (
              <div
                key={s.label}
                className="bg-surface-card border border-border rounded-lg p-6 text-center"
              >
                <p className="text-3xl font-bold neon-text mb-2">{s.value}</p>
                <p className="text-xs text-text-muted uppercase tracking-wider">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Work with our team</h2>
          <p className="text-text-secondary mb-8 max-w-2xl mx-auto">
            Whether it&apos;s a quick repair or a full fit-out, the Jentech
            team brings the same level of care and communication to every job.
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
              REQUEST A QUOTE
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
