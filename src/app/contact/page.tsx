"use client";
import { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // Mock submit
    setSubmitted(true);
  }

  return (
    <>
      {/* Hero */}
      <section className="relative py-24 sm:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(57,255,20,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(57,255,20,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-3 h-3 rounded-full bg-neon pulse-neon" />
              <span className="text-xs font-bold text-neon uppercase tracking-[3px]">
                Get In Touch
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] mb-6">
              Contact <span className="neon-text">Us</span>
            </h1>
            <p className="text-lg sm:text-xl text-text-secondary font-light leading-relaxed">
              Ready to start a project or need emergency help? Reach out and
              our team will get back to you as soon as possible.
            </p>
          </div>
        </div>
      </section>

      {/* Contact info + Form */}
      <section className="py-16 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left: Info */}
            <div className="space-y-8">
              {/* Phone */}
              <div className="card-hover bg-surface-card rounded-lg p-8">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-neon-glow border border-neon/30 flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-neon"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Phone</h3>
                    <a
                      href="tel:0739149696"
                      className="text-xl font-bold neon-text hover:opacity-80 transition-opacity"
                    >
                      07 3914 9696
                    </a>
                    <p className="text-sm text-text-muted mt-1">
                      24/7 emergency line available
                    </p>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="card-hover bg-surface-card rounded-lg p-8">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-neon-glow border border-neon/30 flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-neon"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Email</h3>
                    <a
                      href="mailto:info@jentechelectrical.com.au"
                      className="text-neon hover:opacity-80 transition-opacity break-all"
                    >
                      info@jentechelectrical.com.au
                    </a>
                    <p className="text-sm text-text-muted mt-1">
                      We aim to respond within 1 business day
                    </p>
                  </div>
                </div>
              </div>

              {/* Hours */}
              <div className="card-hover bg-surface-card rounded-lg p-8">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-neon-glow border border-neon/30 flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-neon"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Office Hours</h3>
                    <p className="text-text-secondary">
                      Monday &ndash; Friday: 9:00am &ndash; 5:00pm
                    </p>
                    <div className="flex items-center gap-2 mt-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-neon pulse-neon" />
                      <span className="text-sm font-medium text-neon">
                        Emergency service available 24/7
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Service area & Licence */}
              <div className="card-hover bg-surface-card rounded-lg p-8">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-neon-glow border border-neon/30 flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-neon"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Service Area</h3>
                    <p className="text-text-secondary">
                      Greater Brisbane &amp; Toowoomba Region
                    </p>
                    <div className="flex items-center gap-2 mt-3">
                      <svg
                        className="w-4 h-4 text-neon"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"
                        />
                      </svg>
                      <span className="text-sm text-text-muted">
                        QLD Licence{" "}
                        <span className="text-white font-semibold">80766</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map placeholder */}
              <div className="bg-surface-card border border-border rounded-lg overflow-hidden">
                <div className="h-64 bg-surface-elevated flex items-center justify-center">
                  <div className="text-center">
                    <svg
                      className="w-12 h-12 text-border mx-auto mb-3"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 6.75V15m6-6v8.25m.503 3.498 4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 0 0-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0Z"
                      />
                    </svg>
                    <p className="text-sm text-text-muted">
                      Map &mdash; Greater Brisbane &amp; Toowoomba
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Form */}
            <div>
              <div className="bg-surface-card border border-border rounded-lg p-8 sm:p-10 sticky top-28">
                <h2 className="text-2xl font-bold mb-2">Send Us a Message</h2>
                <p className="text-sm text-text-secondary mb-8">
                  Fill out the form below and we&apos;ll get back to you
                  promptly.
                </p>

                {submitted ? (
                  <div className="bg-neon-glow border border-neon/30 rounded-lg p-8 text-center">
                    <div className="w-14 h-14 rounded-full bg-neon/10 border border-neon/30 flex items-center justify-center mx-auto mb-4">
                      <svg
                        className="w-7 h-7 text-neon"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.5 12.75l6 6 9-13.5"
                        />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-neon">
                      Message Sent
                    </h3>
                    <p className="text-sm text-text-secondary">
                      Thank you for getting in touch. Our team will respond
                      within 1 business day.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium mb-2"
                      >
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        required
                        value={form.name}
                        onChange={(e) =>
                          setForm({ ...form, name: e.target.value })
                        }
                        className="w-full bg-surface border border-border rounded-lg px-4 py-3 text-white placeholder-text-muted focus:outline-none focus:border-neon focus:ring-1 focus:ring-neon transition-colors"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium mb-2"
                      >
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        value={form.email}
                        onChange={(e) =>
                          setForm({ ...form, email: e.target.value })
                        }
                        className="w-full bg-surface border border-border rounded-lg px-4 py-3 text-white placeholder-text-muted focus:outline-none focus:border-neon focus:ring-1 focus:ring-neon transition-colors"
                        placeholder="you@example.com"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium mb-2"
                      >
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        value={form.phone}
                        onChange={(e) =>
                          setForm({ ...form, phone: e.target.value })
                        }
                        className="w-full bg-surface border border-border rounded-lg px-4 py-3 text-white placeholder-text-muted focus:outline-none focus:border-neon focus:ring-1 focus:ring-neon transition-colors"
                        placeholder="04XX XXX XXX"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium mb-2"
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        required
                        rows={5}
                        value={form.message}
                        onChange={(e) =>
                          setForm({ ...form, message: e.target.value })
                        }
                        className="w-full bg-surface border border-border rounded-lg px-4 py-3 text-white placeholder-text-muted focus:outline-none focus:border-neon focus:ring-1 focus:ring-neon transition-colors resize-none"
                        placeholder="Tell us about your project or issue..."
                      />
                    </div>
                    <button
                      type="submit"
                      className="neon-btn w-full px-8 py-4 rounded text-base tracking-wider"
                    >
                      SEND MESSAGE
                    </button>
                    <p className="text-xs text-text-muted text-center">
                      Or call us directly at{" "}
                      <a
                        href="tel:0739149696"
                        className="text-neon hover:opacity-80"
                      >
                        07 3914 9696
                      </a>
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
