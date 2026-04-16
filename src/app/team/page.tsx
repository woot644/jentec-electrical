import type { Metadata } from "next";
import Link from "next/link";
import ServicePageHero from "@/components/ServicePageHero";
import { JsonLd, breadcrumbSchema } from "@/lib/schema";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Meet the Team — Jentech Electrical",
  description:
    "Meet the licensed electricians behind Jentech Electrical — a family-owned Brisbane team delivering concierge-level service to commercial, residential, and industrial clients.",
  alternates: { canonical: `${SITE.url}/team` },
};

const team = [
  {
    name: "Senior Licensed Electrician",
    role: "Director & Lead Technician",
    image: "/images/portraits-4.webp",
    bio: "Founder of Jentech Electrical, leading every job with a focus on communication, workmanship, and long-term client relationships. QLD Licence 80766.",
  },
  {
    name: "Senior Electrician",
    role: "Residential & Renovations",
    image: "/images/portraits-df58935.webp",
    bio: "Specialises in premium residential work — Queenslander rewires, lighting design, and architect-led renovations across inner Brisbane.",
  },
  {
    name: "Electrician",
    role: "Commercial & Industrial",
    image: "/images/portraits-9.webp",
    bio: "Handles commercial fit-outs, 3-phase machinery, and compliance testing across Jentech's commercial and industrial client portfolio.",
  },
];

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

export default function TeamPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: SITE.url },
          { name: "Team", url: `${SITE.url}/team` },
        ])}
      />
      <ServicePageHero
        overline="The People Behind Jentech"
        title="Meet the Team"
        description="A family-owned Brisbane electrical team. Fully licensed, fully insured, and known for concierge-level communication and premium workmanship."
        image="/team-hero.webp"
      />

      {/* Team grid */}
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <p className="text-xs font-bold text-neon uppercase tracking-[3px] mb-4">
              Our Electricians
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Licensed. Experienced. Reliable.
            </h2>
            <p className="text-text-secondary">
              We deliberately keep our team small and senior. Every Jentech
              electrician is fully licensed, fully insured, and has years of
              experience on Brisbane jobs — so the person who turns up at your
              door knows what they're doing from the moment they arrive.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {team.map((m) => (
              <div
                key={m.name}
                className="card-hover bg-surface-card rounded-lg overflow-hidden"
              >
                <div className="aspect-[3/4] overflow-hidden border-b border-border">
                  <img
                    src={m.image}
                    alt={m.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold mb-1">{m.name}</h3>
                  <p className="text-xs font-bold text-neon uppercase tracking-wider mb-4">
                    {m.role}
                  </p>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    {m.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 p-5 bg-surface-card border border-neon/20 rounded-lg text-center">
            <p className="text-sm text-text-secondary">
              <span className="text-neon font-semibold">Names coming soon.</span>{" "}
              We're updating this page with the full team's names, bios, and
              direct photos.
            </p>
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
            <h2 className="text-3xl sm:text-4xl font-bold">What Jentech Stands For</h2>
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
              { value: "80766", label: "QLD Licence" },
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
