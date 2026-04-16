"use client";
import { useState } from "react";
import Link from "next/link";
import { projects, type Project } from "@/data/projects";

function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="card-hover bg-surface-card rounded-lg overflow-hidden group block"
    >
      <div className="h-52 bg-surface-elevated border-b border-border relative overflow-hidden">
        <img
          src={project.image}
          alt={project.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {project.status && (
          <span className="absolute top-3 right-3 text-[10px] font-bold uppercase tracking-[2px] bg-neon text-black px-3 py-1 rounded">
            {project.status}
          </span>
        )}
        <span className="absolute top-3 left-3 text-[10px] font-bold uppercase tracking-[2px] bg-black/70 border border-neon/30 text-neon px-3 py-1 rounded">
          {project.category}
        </span>
      </div>
      <div className="p-6">
        <h3 className="text-lg font-bold mb-2 group-hover:text-neon transition-colors">
          {project.name}
        </h3>
        <p className="text-sm text-text-secondary leading-relaxed mb-4">
          {project.tagline}
        </p>
        {project.credits && project.credits.length > 0 && (
          <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-text-muted">
            {project.credits.slice(0, 2).map((c) => (
              <span key={c.role}>
                {c.role}:{" "}
                <span className="text-text-secondary">{c.name}</span>
              </span>
            ))}
          </div>
        )}
      </div>
    </Link>
  );
}

export default function ProjectsPage() {
  const [tab, setTab] = useState<"all" | "commercial" | "residential">("all");

  const displayed =
    tab === "all" ? projects : projects.filter((p) => p.category === tab);

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
                Our Work
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] mb-6">
              Project <span className="neon-text">Gallery</span>
            </h1>
            <p className="text-lg sm:text-xl text-text-secondary font-light leading-relaxed">
              From commercial gym fit-outs and boutique studios to heritage
              Queenslander rewires and luxury home renovations &mdash; explore the
              work behind Jentech Electrical.
            </p>
          </div>
        </div>
      </section>

      {/* Tabs + Grid */}
      <section className="py-16 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 mb-12">
            {(
              [
                { key: "all", label: "All Projects" },
                { key: "commercial", label: "Commercial" },
                { key: "residential", label: "Residential" },
              ] as const
            ).map((t) => (
              <button
                key={t.key}
                onClick={() => setTab(t.key)}
                className={`px-6 py-3 rounded text-sm font-bold tracking-wider transition-all ${
                  tab === t.key ? "neon-btn" : "neon-btn-outline"
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>

          <p className="text-sm text-text-muted mb-8">
            Showing{" "}
            <span className="text-white font-semibold">{displayed.length}</span>{" "}
            project{displayed.length !== 1 && "s"}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayed.map((p) => (
              <ProjectCard key={p.slug} project={p} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(57,255,20,0.08),transparent_70%)]" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Have a Project in Mind?
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto mb-10">
            Whether it&apos;s a commercial fit-out or a heritage renovation, our
            team brings the same premium service and attention to detail.
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
              GET A FREE QUOTE
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
