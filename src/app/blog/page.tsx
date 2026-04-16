import Link from "next/link";
import ServicePageHero from "@/components/ServicePageHero";
import { blogPosts as posts } from "@/data/blog";

function CategoryBadge({ category }: { category: string }) {
  const isSafety = category === "Safety";
  return (
    <span
      className={`text-[10px] font-bold uppercase tracking-[2px] px-2.5 py-1 rounded ${
        isSafety
          ? "bg-red-500/10 text-red-400 border border-red-500/20"
          : "bg-neon-glow text-neon border border-neon/20"
      }`}
    >
      {category}
    </span>
  );
}

export default function BlogPage() {
  return (
    <>
      <ServicePageHero
        overline="Blog"
        title="News & Safety Tips"
        description="Stay informed with the latest electrical safety advice, industry news, and tips from the Jentech Electrical team."
      />

      {/* Blog Grid */}
      <section className="py-16 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="card-hover bg-surface-card rounded-lg overflow-hidden group flex flex-col"
              >
                {/* Placeholder image */}
                <div className="h-44 bg-surface-elevated flex items-center justify-center border-b border-border">
                  <svg
                    className="w-10 h-10 text-border group-hover:text-neon/30 transition-colors"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5"
                    />
                  </svg>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <CategoryBadge category={post.category} />
                    <span className="text-xs text-text-muted">
                      {post.date}
                    </span>
                  </div>
                  <h2 className="text-lg font-bold mb-3 group-hover:text-neon transition-colors leading-snug">
                    {post.title}
                  </h2>
                  <p className="text-sm text-text-secondary leading-relaxed flex-1">
                    {post.excerpt}
                  </p>
                  <div className="mt-5 pt-4 border-t border-border">
                    <span className="text-neon text-sm font-medium flex items-center gap-2 group-hover:gap-3 transition-all">
                      Read article
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(57,255,20,0.08),transparent_70%)]" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Need Electrical Help Now?
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto mb-8">
            Our team is available 24/7 for emergency electrical service across
            Greater Brisbane and the Toowoomba Region.
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
              GET IN TOUCH
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
