import { JsonLd } from "@/lib/schema";

export type FAQ = { q: string; a: string };

export default function FAQSection({
  items,
  title = "Frequently Asked Questions",
  overline = "FAQ",
  schema = true,
}: {
  items: FAQ[];
  title?: string;
  overline?: string;
  schema?: boolean;
}) {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <section className="py-24 bg-surface">
      {schema && <JsonLd data={faqSchema} />}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-xs font-bold text-neon uppercase tracking-[3px] mb-4">
            {overline}
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold">{title}</h2>
        </div>
        <div className="space-y-3">
          {items.map((item, i) => (
            <details
              key={i}
              className="group bg-surface-card border border-border rounded-lg overflow-hidden"
            >
              <summary className="flex items-center justify-between cursor-pointer p-6 hover:bg-surface-elevated transition-colors">
                <span className="font-semibold text-base pr-4">{item.q}</span>
                <svg
                  className="w-5 h-5 text-neon flex-shrink-0 transition-transform group-open:rotate-180"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-sm text-text-secondary leading-relaxed border-t border-border pt-4">
                {item.a}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
