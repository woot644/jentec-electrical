import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import FAQSection from "@/components/FAQ";
import ExpertAttribution from "@/components/ExpertAttribution";
import { JsonLd, breadcrumbSchema, personId } from "@/lib/schema";
import { SITE } from "@/lib/site";
import {
  blogPosts,
  getBlogPostBySlug,
  type BlogPost,
  type ContentBlock,
} from "@/data/blog";
import { getTeamMember } from "@/data/team";

type Params = { slug: string };

export async function generateStaticParams(): Promise<Params[]> {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return { title: "Article Not Found" };
  const url = `${SITE.url}/blog/${post.slug}`;
  return {
    title: post.title,
    description: post.metaDescription,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      url,
      title: post.title,
      description: post.metaDescription,
      publishedTime: post.date,
      modifiedTime: post.updated ?? post.date,
      images: post.coverImage ? [{ url: post.coverImage }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.metaDescription,
    },
  };
}

function articleSchema(post: BlogPost) {
  const url = `${SITE.url}/blog/${post.slug}`;
  // If a team member is named as reviewer, attribute as Person and
  // reference the Person @id from /team — that lets crawlers connect
  // the article back to the licensed expert and through to Jentech.
  const reviewer = post.reviewedBy ? getTeamMember(post.reviewedBy) : undefined;
  const author = reviewer
    ? {
        "@type": "Person" as const,
        "@id": personId(reviewer.slug),
        name: reviewer.name,
        jobTitle: reviewer.role,
        url: `${SITE.url}/team#${reviewer.slug}`,
      }
    : {
        "@type": "Organization" as const,
        name: post.author ?? SITE.name,
        url: SITE.url,
      };
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    headline: post.title,
    description: post.metaDescription,
    image: post.coverImage ? `${SITE.url}${post.coverImage}` : undefined,
    datePublished: post.date,
    dateModified: post.updated ?? post.date,
    author,
    publisher: {
      "@type": "Organization",
      name: SITE.name,
      url: SITE.url,
      logo: {
        "@type": "ImageObject",
        url: `${SITE.url}/logo/jentech-logo.png`,
      },
    },
    articleSection: post.category,
  };
}

function ContentRenderer({ blocks }: { blocks: ContentBlock[] }) {
  return (
    <>
      {blocks.map((b, i) => {
        switch (b.type) {
          case "h2":
            return (
              <h2
                key={i}
                id={b.id}
                className="text-2xl sm:text-3xl font-bold mt-14 mb-5 text-white"
              >
                {b.text}
              </h2>
            );
          case "h3":
            return (
              <h3
                key={i}
                id={b.id}
                className="text-xl font-bold mt-10 mb-3 text-white"
              >
                {b.text}
              </h3>
            );
          case "p":
            return (
              <p
                key={i}
                className="text-text-secondary leading-relaxed mb-5 text-[15px]"
              >
                {b.text}
              </p>
            );
          case "ul":
            return (
              <ul
                key={i}
                className="mb-6 space-y-2 text-text-secondary text-[15px] leading-relaxed list-none pl-0"
              >
                {b.items.map((item, j) => (
                  <li key={j} className="flex gap-3 pl-0">
                    <span className="text-neon flex-shrink-0 mt-[6px]">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            );
          case "ol":
            return (
              <ol
                key={i}
                className="mb-6 space-y-2 text-text-secondary text-[15px] leading-relaxed list-none pl-0 counter-reset-list"
              >
                {b.items.map((item, j) => (
                  <li key={j} className="flex gap-3 pl-0">
                    <span className="text-neon font-bold flex-shrink-0 min-w-[1.75rem]">
                      {j + 1}.
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ol>
            );
          case "callout":
            return (
              <aside
                key={i}
                className="my-8 p-6 bg-neon-glow border border-neon/30 rounded-lg"
              >
                {b.title && (
                  <p className="text-xs font-bold text-neon uppercase tracking-[2px] mb-2">
                    {b.title}
                  </p>
                )}
                <p className="text-text-secondary text-[14px] leading-relaxed">
                  {b.text}
                </p>
              </aside>
            );
          case "quote":
            return (
              <blockquote
                key={i}
                className="my-8 pl-6 border-l-4 border-neon text-text-secondary italic text-lg leading-relaxed"
              >
                &ldquo;{b.text}&rdquo;
              </blockquote>
            );
          case "cta":
            return (
              <div
                key={i}
                className="my-10 p-6 bg-surface-card border border-border rounded-lg flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
              >
                <p className="text-white font-semibold flex-1">{b.text}</p>
                <Link
                  href={b.href}
                  className="neon-btn px-6 py-3 rounded tracking-wider text-sm whitespace-nowrap text-center"
                >
                  {b.label}
                </Link>
              </div>
            );
          default:
            return null;
        }
      })}
    </>
  );
}

const serviceNames: Record<string, string> = {
  commercial: "Commercial Electrical",
  residential: "Residential & Renovations",
  industrial: "Industrial",
  "air-conditioning": "Air Conditioning",
  "smoke-alarms": "Smoke Alarms",
  switchboards: "Switchboards",
  "ups-systems": "UPS Systems",
};

const suburbNames: Record<string, string> = {
  yeerongpilly: "Yeerongpilly",
  paddington: "Paddington",
  "fortitude-valley": "Fortitude Valley",
  wilston: "Wilston",
  bulimba: "Bulimba",
  teneriffe: "Teneriffe",
  hamilton: "Hamilton",
  "west-end": "West End",
  helensvale: "Helensvale",
  bundall: "Bundall",
};

export default async function BlogPostPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) notFound();

  const url = `${SITE.url}/blog/${post.slug}`;
  const relatedPosts = blogPosts
    .filter((p) => p.slug !== post.slug)
    .slice(0, 3);

  return (
    <>
      <JsonLd data={articleSchema(post)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: SITE.url },
          { name: "Blog", url: `${SITE.url}/blog` },
          { name: post.title, url },
        ])}
      />

      {/* Article hero */}
      <section className="pt-24 pb-16 border-b border-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-[10px] font-bold uppercase tracking-[2px] px-2.5 py-1 rounded bg-neon-glow text-neon border border-neon/20">
              {post.category}
            </span>
            <span className="text-xs text-text-muted">{post.date}</span>
            <span className="text-xs text-text-muted">
              · {post.readTime} min read
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-5">
            {post.title}
          </h1>
          {post.subtitle && (
            <p className="text-lg text-text-secondary leading-relaxed">
              {post.subtitle}
            </p>
          )}
        </div>
      </section>

      {/* Cover image */}
      {post.coverImage && (
        <section className="py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <img
              src={post.coverImage}
              alt={post.coverAlt ?? post.title}
              className="w-full rounded-lg border border-border"
            />
          </div>
        </section>
      )}

      {/* Article body */}
      <article className="py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <ContentRenderer blocks={post.sections} />
          {post.reviewedBy ? (
            <div className="mt-12 pt-8 border-t border-border">
              <ExpertAttribution slug={post.reviewedBy} />
            </div>
          ) : null}
        </div>
      </article>

      {/* FAQs */}
      {post.faqs && post.faqs.length > 0 && (
        <FAQSection
          items={post.faqs}
          title="Frequently Asked Questions"
          overline="FAQs"
        />
      )}

      {/* Related services & suburbs */}
      {(post.relatedServiceSlugs?.length || post.relatedSuburbSlugs?.length) && (
        <section className="py-16 bg-surface">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-xs font-bold text-neon uppercase tracking-[3px] mb-6 text-center">
              Explore related
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {post.relatedServiceSlugs && post.relatedServiceSlugs.length > 0 && (
                <div>
                  <h3 className="text-lg font-bold mb-4">Related services</h3>
                  <ul className="space-y-2">
                    {post.relatedServiceSlugs.map((s) => (
                      <li key={s}>
                        <Link
                          href={`/services/${s}`}
                          className="text-text-secondary hover:text-neon transition-colors text-sm"
                        >
                          {serviceNames[s] ?? s} →
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {post.relatedSuburbSlugs && post.relatedSuburbSlugs.length > 0 && (
                <div>
                  <h3 className="text-lg font-bold mb-4">Service areas mentioned</h3>
                  <ul className="space-y-2">
                    {post.relatedSuburbSlugs.map((s) => (
                      <li key={s}>
                        <Link
                          href={`/service-areas/${s}`}
                          className="text-text-secondary hover:text-neon transition-colors text-sm"
                        >
                          Electrician {suburbNames[s] ?? s} →
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* More articles */}
      {relatedPosts.length > 0 && (
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-xs font-bold text-neon uppercase tracking-[3px] mb-6 text-center">
              Keep reading
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-center mb-10">
              More from the Jentech blog
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map((p) => (
                <Link
                  key={p.slug}
                  href={`/blog/${p.slug}`}
                  className="card-hover bg-surface-card border border-border rounded-lg p-6 block"
                >
                  <span className="text-[10px] font-bold uppercase tracking-[2px] text-neon">
                    {p.category}
                  </span>
                  <h3 className="text-base font-bold mt-3 mb-2 leading-snug">
                    {p.title}
                  </h3>
                  <p className="text-xs text-text-secondary leading-relaxed">
                    {p.excerpt}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-20 bg-surface">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Need an electrician in Brisbane?
          </h2>
          <p className="text-text-secondary mb-8">
            Call us. Quote fast, scope honest, delivered to the standard your property deserves.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:0739149696"
              className="neon-btn px-8 py-4 rounded tracking-wider"
            >
              CALL 07 3914 9696
            </a>
            <Link
              href="/contact"
              className="neon-btn-outline px-8 py-4 rounded tracking-wider"
            >
              REQUEST A QUOTE
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
