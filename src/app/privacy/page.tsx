import type { Metadata } from "next";
import Link from "next/link";
import ServicePageHero from "@/components/ServicePageHero";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy — Jentech Electrical",
  description:
    "How Jentech Electrical collects, uses, stores, and protects personal information in accordance with the Australian Privacy Act 1988 and the Privacy Principles.",
  alternates: { canonical: `${SITE.url}/privacy` },
};

const sections = [
  {
    heading: "1. About this policy",
    body: [
      "Jentech Electrical (\"we\", \"us\", \"our\") respects your privacy and is committed to handling your personal information in accordance with the Australian Privacy Principles (APPs) contained in the Privacy Act 1988 (Cth).",
      "This policy explains what personal information we collect, how we collect it, how we use and disclose it, how we keep it secure, and your rights regarding your information.",
    ],
  },
  {
    heading: "2. Information we collect",
    body: [
      "We collect personal information when you request a quote, book a service, submit a contact form, send us an email, call us, or otherwise engage our services. This may include:",
      "• Your name, phone number, email address, and service address",
      "• Details about the property and the electrical work you're enquiring about",
      "• Payment information provided directly to our payment processor (we do not store full card details)",
      "• Photographs of completed work where relevant to the job record",
      "• Any other information you voluntarily provide",
    ],
  },
  {
    heading: "3. How we use your information",
    body: [
      "We use your personal information to:",
      "• Respond to your enquiry and prepare a quote",
      "• Schedule, deliver, and invoice for electrical services",
      "• Communicate with you about your job (scheduling, updates, compliance records)",
      "• Maintain legally required records (electrical compliance certificates, tax records)",
      "• Improve our services and, with consent, request reviews or feedback",
      "We do not sell, trade, or rent your personal information to third parties for marketing purposes.",
    ],
  },
  {
    heading: "4. Third parties",
    body: [
      "We share personal information with trusted third-party service providers only to the extent necessary to deliver our services:",
      "• ServiceM8 — our job management and scheduling platform",
      "• Accounting and payment providers for invoicing and payment processing",
      "• Regulatory bodies where required by law (e.g. compliance certificates submitted to Energex or Queensland Electrical Safety Office)",
      "• Insurers and legal advisors where relevant to a specific job or incident",
      "All third-party providers are required to handle your information in accordance with applicable privacy laws.",
    ],
  },
  {
    heading: "5. Security and retention",
    body: [
      "We take reasonable steps to protect personal information from misuse, interference, loss, unauthorised access, modification, or disclosure. Our measures include restricted-access cloud systems, role-based permissions for staff, and destruction of paper records when no longer needed.",
      "We retain records for as long as required by Australian tax and electrical compliance law — typically 5 to 7 years after a job is completed. After the retention period we securely destroy or de-identify personal information.",
    ],
  },
  {
    heading: "6. Cookies and website analytics",
    body: [
      "Our website may use cookies and similar technologies to remember preferences, measure traffic, and improve the user experience. This includes standard analytics from Google Analytics or similar platforms. You can disable cookies in your browser settings, though some site features may not work correctly without them.",
      "We do not use cookies to build a profile of you for advertising purposes.",
    ],
  },
  {
    heading: "7. Accessing or correcting your information",
    body: [
      "You can request access to the personal information we hold about you, or request that we correct information that is inaccurate, out of date, or incomplete. To make a request, contact us at info@jentechelectrical.com.au.",
      "We will respond within 30 days. In rare cases we may decline a request (for example, where the information is subject to a legal hold) — if so we'll explain why in writing.",
    ],
  },
  {
    heading: "8. Complaints",
    body: [
      "If you believe we have mishandled your personal information, please contact us first at info@jentechelectrical.com.au so we can investigate and resolve the issue. We take complaints seriously and aim to respond within 30 days.",
      "If you are not satisfied with our response, you can lodge a complaint with the Office of the Australian Information Commissioner (OAIC) at www.oaic.gov.au or by calling 1300 363 992.",
    ],
  },
  {
    heading: "9. Changes to this policy",
    body: [
      "We may update this privacy policy from time to time. The current version is always available at jentec-electrical.vercel.app/privacy. Where changes are significant we'll note them at the top of this page.",
    ],
  },
  {
    heading: "10. Contact us",
    body: [
      "Jentech Electrical",
      "6/190 Station Rd, Yeerongpilly QLD 4105",
      "Phone: 07 3914 9696",
      "Email: info@jentechelectrical.com.au",
      "ABN: 46 611 087 462",
      "QLD Electrical Licence: 80766",
      "ARC Refrigerant Handling Licence: AU068040",
    ],
  },
];

const LAST_UPDATED = "17 April 2026";

export default function PrivacyPage() {
  return (
    <>
      <ServicePageHero
        overline="Legal"
        title="Privacy Policy"
        description="How Jentech Electrical collects, uses, stores, and protects your personal information under the Australian Privacy Act 1988."
      />

      <section className="py-16 bg-surface">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm text-text-muted mb-12">Last updated: {LAST_UPDATED}</p>

          <div className="space-y-12">
            {sections.map((s) => (
              <div key={s.heading}>
                <h2 className="text-xl font-bold mb-4">{s.heading}</h2>
                <div className="space-y-4">
                  {s.body.map((p, i) => (
                    <p
                      key={i}
                      className="text-text-secondary leading-relaxed whitespace-pre-line"
                    >
                      {p}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 p-6 bg-surface-card border border-border rounded-lg">
            <p className="text-sm text-text-secondary leading-relaxed">
              Questions about this policy or your personal information? Contact
              us at{" "}
              <a
                href="mailto:info@jentechelectrical.com.au"
                className="text-neon hover:underline"
              >
                info@jentechelectrical.com.au
              </a>{" "}
              or call{" "}
              <a href="tel:0739149696" className="text-neon hover:underline">
                07 3914 9696
              </a>
              .
            </p>
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/contact"
              className="neon-btn-outline px-8 py-3 rounded text-sm tracking-wider inline-block"
            >
              CONTACT JENTECH
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
