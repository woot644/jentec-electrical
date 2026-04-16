import type { Metadata } from "next";
import Link from "next/link";
import ServicePageHero from "@/components/ServicePageHero";
import { JsonLd, serviceSchema, breadcrumbSchema } from "@/lib/schema";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "24/7 Emergency Electrician Brisbane — Same-Day Response",
  description:
    "Power out? Burning smell? Tripping breaker? Call Jentech on 07 3914 9696 for 24/7 emergency electrical service across Greater Brisbane. Licence 80766.",
  alternates: { canonical: `${SITE.url}/emergency-electrician-brisbane` },
};

const signs = [
  {
    title: "Total loss of power",
    text: "When a full property outage isn't a street-wide blackout, the fault is inside your boundary — often a burnt mains connection, water ingress at the switchboard, or a failed RCD. Don't wait for morning.",
  },
  {
    title: "Burning smell from a power point or switchboard",
    text: "A sweet, plasticky odour around an outlet, fitting, or the switchboard itself means something is arcing, overheating, or melting insulation. Turn off the affected circuit and call us — this is the leading cause of electrical fires.",
  },
  {
    title: "Sparks, buzzing, or scorch marks",
    text: "Visible sparking or a loud buzzing from an outlet, appliance, or the board is always an emergency. Isolate if safe to do so, keep people away, and get a licensed electrician on site immediately.",
  },
  {
    title: "Repeatedly tripping safety switch (RCD)",
    text: "If your RCD trips as soon as you reset it — or won't stay on with nothing plugged in — there's likely a wiring fault or a short circuit somewhere in the installation. Leave the RCD off and call us.",
  },
  {
    title: "Water ingress after a storm",
    text: "Brisbane storms regularly drive water into roof spaces and external meter boxes. If power points, light fittings, or the switchboard are wet, treat it as an emergency — water and 240V don't mix.",
  },
  {
    title: "Appliance on fire or smoking",
    text: "Unplug if safe, isolate the circuit at the board, and call 000 for active fires. Once safe, we'll diagnose the circuit and appliance before you restore power.",
  },
];

export default function EmergencyPage() {
  return (
    <>
      <JsonLd
        data={serviceSchema(
          "24/7 Emergency Electrician",
          "Around-the-clock emergency electrical response across Greater Brisbane for power outages, burning smells, sparks, and fault-finding.",
          `${SITE.url}/emergency-electrician-brisbane`
        )}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: SITE.url },
          { name: "Emergency Electrician", url: `${SITE.url}/emergency-electrician-brisbane` },
        ])}
      />
      <ServicePageHero
        overline="24/7 Emergency Service"
        title="Emergency Electrician Brisbane"
        description="Power failures, burning smells, tripping breakers and storm damage don't wait for business hours. Our on-call electricians respond across Greater Brisbane day and night."
        image="/images/20221005-img_0284.jpg"
      />

      {/* Call to action band */}
      <section className="py-10 bg-neon text-black">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-xs font-bold uppercase tracking-[3px] mb-1">Always available</p>
            <p className="text-2xl sm:text-3xl font-bold">Call now for immediate help</p>
          </div>
          <a
            href="tel:0739149696"
            className="bg-black text-neon px-8 py-4 rounded font-bold tracking-wider hover:bg-surface-card transition-colors"
          >
            07 3914 9696
          </a>
        </div>
      </section>

      {/* When to call */}
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <p className="text-xs font-bold text-neon uppercase tracking-[3px] mb-4">
              When to call
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Electrical Emergencies We Respond To
            </h2>
            <p className="text-text-secondary">
              If you see any of the following, don&apos;t wait until the morning.
              Electrical faults get worse fast — and the longer they go
              unattended, the higher the risk of fire, shock, or permanent
              damage to your wiring.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {signs.map((s) => (
              <div key={s.title} className="card-hover bg-surface-card rounded-lg p-8">
                <h3 className="font-bold mb-3 text-lg flex items-center gap-3">
                  <span className="w-2.5 h-2.5 rounded-full bg-neon pulse-neon" />
                  {s.title}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety first */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-neon-glow border border-neon/30 rounded-lg p-8">
            <h2 className="text-xl font-bold text-neon mb-4">
              Before we get there — stay safe
            </h2>
            <ul className="space-y-3 text-sm text-text-secondary leading-relaxed list-disc list-outside pl-5">
              <li>
                If there&apos;s smoke, active flames, or a shock risk, call
                000 first. Evacuate and don&apos;t re-enter until cleared.
              </li>
              <li>
                If it&apos;s safe to reach the main switch or affected RCD,
                turn it off. Leave it off until we&apos;ve inspected.
              </li>
              <li>
                Don&apos;t touch wet power points or fittings. Water ingress
                after a storm is a common cause of callouts — keep people
                away until isolation.
              </li>
              <li>
                Photograph any visible damage, scorch marks, or tripped
                breakers if you can do so safely. It helps us diagnose faster.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-24 bg-surface">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-xs font-bold text-neon uppercase tracking-[3px] mb-4">
              How it works
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold">Our Emergency Callout Process</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                step: "1",
                title: "Call",
                text: "Dial 07 3914 9696 and follow the after-hours prompts. The call routes directly to the on-call technician.",
              },
              {
                step: "2",
                title: "Triage",
                text: "Our electrician will talk you through immediate safety steps — isolating circuits, turning off appliances, staying clear.",
              },
              {
                step: "3",
                title: "Onsite",
                text: "A fully stocked service vehicle is dispatched. Most emergency callouts across Greater Brisbane are resolved in a single visit.",
              },
            ].map((p) => (
              <div key={p.step} className="card-hover bg-surface-card rounded-lg p-8">
                <div className="w-12 h-12 rounded-full bg-neon-glow border border-neon/30 flex items-center justify-center mb-5">
                  <span className="text-neon font-bold text-lg">{p.step}</span>
                </div>
                <h3 className="text-xl font-bold mb-3">{p.title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service area */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-xs font-bold text-neon uppercase tracking-[3px] mb-4">
              Emergency service area
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">
              Greater Brisbane, 24/7
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              We respond to emergency callouts across inner Brisbane, the
              eastern and western suburbs, and throughout the Gold Coast
              hinterland. After-hours response times vary with distance and
              current workload — call and we&apos;ll give you an ETA.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-2 max-w-3xl mx-auto">
            {SITE.areaServed.map((suburb) => (
              <span
                key={suburb}
                className="text-xs px-3 py-1.5 rounded bg-neon-glow border border-neon/20 text-neon"
              >
                {suburb}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-surface relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(136,189,64,0.12),transparent_70%)]" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-neon-glow border border-neon/20 rounded-full px-4 py-2 mb-8">
            <span className="w-2.5 h-2.5 rounded-full bg-neon pulse-neon" />
            <span className="text-xs font-medium text-neon tracking-wider">
              ON CALL RIGHT NOW
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Need an Electrician <span className="neon-text">Now</span>?
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto mb-10">
            Call and follow the after-hours prompts. The line routes to the
            on-call technician, day or night, weekend or public holiday.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:0739149696"
              className="neon-btn px-10 py-4 rounded text-base tracking-wider"
            >
              CALL 07 3914 9696
            </a>
            <Link
              href="/guides/loss-of-power"
              className="neon-btn-outline px-10 py-4 rounded text-base tracking-wider"
            >
              POWER OUT? READ THE GUIDE
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
