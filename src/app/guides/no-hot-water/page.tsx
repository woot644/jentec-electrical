import type { Metadata } from "next";
import Link from "next/link";
import ServicePageHero from "@/components/ServicePageHero";
import { JsonLd, howToSchema, breadcrumbSchema } from "@/lib/schema";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "No Hot Water — Troubleshooting Guide",
  description:
    "No hot water at home? Follow our 4-step guide to check for leaks, tank level, and power supply before calling a technician. Brisbane electrician advice.",
  alternates: { canonical: `${SITE.url}/guides/no-hot-water` },
};

const steps = [
  {
    number: 1,
    title: "Check for Leaks",
    content:
      "Inspect the area around your hot water system for any visible leaks, pooling water, or dripping from the tank, valves, or pipes. A leaking unit may need to be replaced or repaired by a licensed technician before it can heat water safely.",
  },
  {
    number: 2,
    title: "Ensure the Tank Is Full",
    content:
      "If your hot water was recently drained or has run out after heavy use, it may simply need time to refill and reheat. Check that the cold water inlet valve to the tank is fully open. Gas systems typically reheat in 30-40 minutes, while electric systems can take 1-2 hours.",
  },
  {
    number: 3,
    title: "Check the Power Supply",
    content:
      "For electric hot water systems, check your switchboard for a tripped circuit breaker or safety switch labelled for hot water. If it has tripped, switch it firmly back to the ON position. For gas systems, ensure the pilot light is lit and the gas supply valve is open.",
  },
  {
    number: 4,
    title: "Contact a Technician",
    content:
      "If none of the above resolves the issue, the element, thermostat, or gas burner may have failed. Call Jentech Electrical and we can diagnose and repair or replace your hot water system quickly.",
  },
];

export default function NoHotWaterPage() {
  return (
    <>
      <JsonLd
        data={howToSchema({
          name: "How to Troubleshoot No Hot Water",
          description:
            "4 steps to diagnose a hot water system failure before calling an electrician or plumber.",
          url: `${SITE.url}/guides/no-hot-water`,
          steps: steps.map((s) => ({ name: s.title, text: s.content })),
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: SITE.url },
          { name: "Guides", url: `${SITE.url}/guides/no-hot-water` },
          { name: "No Hot Water", url: `${SITE.url}/guides/no-hot-water` },
        ])}
      />
      <ServicePageHero
        overline="Troubleshooting Guide"
        title="No Hot Water"
        description="Lost hot water at home? Follow these steps to identify common causes before calling a technician. Most issues can be diagnosed quickly."
        image="/images/hero-no-hot-water.webp"
      />

      {/* Video */}
      <section className="py-12 bg-surface">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-surface-card border border-border rounded-lg overflow-hidden">
            <div className="aspect-video">
              <iframe
                src="https://player.vimeo.com/video/1035353405?h=454cf00f7f"
                title="No Hot Water — Troubleshooting Tips"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          </div>
          <p className="text-center text-sm text-text-muted mt-4">
            Watch our team walk through the troubleshooting steps.
          </p>
        </div>
      </section>

      {/* Safety Warning */}
      <section className="bg-surface py-6">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-neon-glow border border-neon/30 rounded-lg p-6 flex gap-4 items-start">
            <div className="flex-shrink-0 mt-0.5">
              <svg
                className="w-6 h-6 text-neon"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"
                />
              </svg>
            </div>
            <div>
              <p className="font-bold text-neon mb-1">Caution &mdash; Hot Water</p>
              <p className="text-sm text-text-secondary leading-relaxed">
                Hot water systems operate at high temperatures and pressure. Do
                not attempt to open or disassemble any part of the tank. If you
                see steam, hear hissing, or notice a pressure relief valve
                discharging, keep clear and call a licensed professional
                immediately.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="py-16 bg-surface">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {steps.map((step) => (
              <div
                key={step.number}
                className="card-hover bg-surface-card rounded-lg p-8"
              >
                <div className="flex items-start gap-5">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-neon-glow border border-neon/30 flex items-center justify-center">
                    <span className="text-neon font-bold text-lg">
                      {step.number}
                    </span>
                  </div>
                  <div>
                    <h2 className="text-xl font-bold mb-3">{step.title}</h2>
                    <p className="text-text-secondary leading-relaxed">
                      {step.content}
                    </p>
                  </div>
                </div>
                {step.number === 3 && (
                  <div className="mt-6 rounded overflow-hidden border border-border bg-surface">
                    <img
                      src="/images/screenshot-2025-02-06-214353.webp"
                      alt="Electric hot water system diagram"
                      className="w-full max-h-80 object-contain bg-white"
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick tip */}
      <section className="py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-surface-card border border-border rounded-lg p-8">
            <h3 className="font-bold mb-3 flex items-center gap-2">
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
                  d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"
                />
              </svg>
              Quick Tip
            </h3>
            <p className="text-sm text-text-secondary leading-relaxed">
              Most electric hot water systems in Queensland operate on a
              controlled-load tariff (Tariff 31 or 33), which means they only
              receive power during off-peak hours. If your hot water ran out
              during the day, it may not reheat until overnight. Check with
              your electricity provider about your tariff arrangement.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-surface relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(57,255,20,0.08),transparent_70%)]" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Need a Hot Water Repair?
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto mb-8">
            Our team can diagnose, repair, or replace your hot water system.
            Call us for fast, reliable service across Brisbane.
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
              REQUEST A CALLBACK
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
