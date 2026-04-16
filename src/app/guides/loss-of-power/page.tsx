import Link from "next/link";
import ServicePageHero from "@/components/ServicePageHero";

const steps = [
  {
    number: 1,
    title: "Check Your Neighbours",
    content:
      "Look outside and see if your neighbours also have no power. If the whole street is dark, the issue is likely a network outage managed by ENERGEX. You can call ENERGEX on 13 62 62 or check their outage map online.",
  },
  {
    number: 2,
    title: "Check Your Switchboard",
    content:
      "Open your switchboard (usually located outside near the meter box) and look for any tripped safety switches or circuit breakers. A tripped switch will sit in a middle or down position rather than fully up.",
  },
  {
    number: 3,
    title: "Identify the Cause",
    content:
      "If a safety switch has tripped, try to identify what caused it. Unplug all appliances on that circuit before attempting a reset. Common culprits include faulty appliances, overloaded circuits, water damage, or storm-related issues.",
  },
  {
    number: 4,
    title: "Reset If Safe",
    content:
      "If you can identify the cause and it is safe to do so, firmly push the tripped switch back to the ON position. If the switch trips again immediately, do not keep resetting it. There is an underlying fault that needs a licensed electrician.",
  },
  {
    number: 5,
    title: "Contact Jentech Electrical",
    content:
      "If you cannot restore power, or if a switch keeps tripping, call our team. We provide 24/7 emergency electrical service across Greater Brisbane and the Toowoomba Region.",
  },
];

export default function LossOfPowerPage() {
  return (
    <>
      <ServicePageHero
        overline="Troubleshooting Guide"
        title="Loss of Power"
        description="Follow these steps to safely diagnose and resolve a power outage at your home or business. If at any point you feel unsafe, stop and call a licensed electrician."
      />

      {/* Video */}
      <section className="py-12 bg-surface">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-surface-card border border-border rounded-lg overflow-hidden">
            <div className="aspect-video">
              <iframe
                src="https://player.vimeo.com/video/1034653272?h=14834260ce"
                title="Loss of Power — Troubleshooting Tips"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          </div>
          <p className="text-center text-sm text-text-muted mt-4">
            Watch how to troubleshoot a power outage step by step.
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
              <p className="font-bold text-neon mb-1">Safety Warning</p>
              <p className="text-sm text-text-secondary leading-relaxed">
                Never touch exposed wires, attempt to open your meter box, or
                work on electrical equipment if there is water present. If you
                smell burning or see sparking, evacuate the area and call 000
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
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency contacts */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-8 text-center">
            Important Numbers
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-surface-card border border-border rounded-lg p-8 text-center">
              <p className="text-xs font-bold text-neon uppercase tracking-[3px] mb-3">
                Jentech Electrical
              </p>
              <a
                href="tel:0739149696"
                className="text-2xl font-bold neon-text hover:opacity-80 transition-opacity"
              >
                07 3914 9696
              </a>
              <p className="text-sm text-text-muted mt-2">
                24/7 Emergency Service
              </p>
            </div>
            <div className="bg-surface-card border border-border rounded-lg p-8 text-center">
              <p className="text-xs font-bold text-text-muted uppercase tracking-[3px] mb-3">
                ENERGEX Faults
              </p>
              <a
                href="tel:136262"
                className="text-2xl font-bold text-white hover:text-neon transition-colors"
              >
                13 62 62
              </a>
              <p className="text-sm text-text-muted mt-2">
                Power outages &amp; network faults
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-surface relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(57,255,20,0.08),transparent_70%)]" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Still Without Power?
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto mb-8">
            Our licensed electricians are available around the clock. Call us now
            or request a callback.
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
