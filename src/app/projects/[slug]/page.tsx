import Link from "next/link";
import { notFound } from "next/navigation";
import { projects, getProject } from "@/data/projects";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: `${project.name} | Jentech Electrical`,
    description: project.tagline,
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const related = projects
    .filter((p) => p.slug !== project.slug && p.category === project.category)
    .slice(0, 3);

  return (
    <>
      {/* Hero Image */}
      <section className="relative h-[60vh] min-h-[400px] overflow-hidden">
        <img
          src={project.image}
          alt={project.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 pb-12">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-sm text-neon hover:underline mb-4"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
              </svg>
              Back to Projects
            </Link>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-[10px] font-bold uppercase tracking-[2px] bg-neon text-black px-3 py-1 rounded">
                {project.category}
              </span>
              {project.status && (
                <span className="text-[10px] font-bold uppercase tracking-[2px] bg-black/80 border border-neon/30 text-neon px-3 py-1 rounded">
                  {project.status}
                </span>
              )}
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
              {project.name}
            </h1>
          </div>
        </div>
      </section>

      {/* Body */}
      <section className="py-20 bg-black">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-6">
            <p className="text-xl text-text-secondary font-light leading-relaxed">
              {project.tagline}
            </p>
            {project.description.map((para, i) => (
              <p
                key={i}
                className="text-base text-text-secondary leading-relaxed"
              >
                {para}
              </p>
            ))}
          </div>

          {project.credits && project.credits.length > 0 && (
            <aside>
              <div className="bg-surface-card border border-border rounded-lg p-6 sticky top-28">
                <h2 className="text-xs font-bold text-neon uppercase tracking-[2px] mb-5">
                  Project Credits
                </h2>
                <dl className="space-y-4">
                  {project.credits.map((c) => (
                    <div key={c.role}>
                      <dt className="text-xs text-text-muted uppercase tracking-wider mb-0.5">
                        {c.role}
                      </dt>
                      <dd className="text-sm text-white">{c.name}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </aside>
          )}
        </div>
      </section>

      {/* Related */}
      {related.length > 0 && (
        <section className="py-20 bg-surface border-t border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold mb-10">
              More {project.category === "commercial" ? "Commercial" : "Residential"} Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {related.map((p) => (
                <Link
                  key={p.slug}
                  href={`/projects/${p.slug}`}
                  className="card-hover bg-surface-card rounded-lg overflow-hidden group block"
                >
                  <div className="h-48 bg-surface-elevated overflow-hidden">
                    <img
                      src={p.image}
                      alt={p.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold mb-2 group-hover:text-neon transition-colors">
                      {p.name}
                    </h3>
                    <p className="text-sm text-text-secondary">{p.tagline}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-20 bg-black">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Have a Similar Project?</h2>
          <p className="text-text-secondary mb-8 max-w-2xl mx-auto">
            From heritage renovations to full commercial fit-outs, Jentech
            brings premium electrical service and attention to detail to every
            job.
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
              GET A QUOTE
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
