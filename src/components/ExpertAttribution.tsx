import Link from "next/link";
import { getTeamMember } from "@/data/team";

/**
 * Named-expert attribution footer. Renders "Reviewed by Andrew, Director,
 * QLD Electrical Worker Licence #129399" with a portrait + link to the
 * team page anchor for that person.
 *
 * Why it exists: Google E-E-A-T (Experience, Expertise, Authoritativeness,
 * Trust) and AI search citation engines weight content much higher when
 * it carries a named, credentialed reviewer rather than appearing under a
 * faceless brand. Drop this near the bottom of any service / blog / guide
 * page and pick the team member whose specialisation maps to the topic.
 */
export default function ExpertAttribution({
  slug,
  context = "Reviewed by",
  className = "",
}: {
  slug: string;
  /** Override the lead-in if "Reviewed by" doesn't fit (e.g. "Written by"). */
  context?: string;
  className?: string;
}) {
  const m = getTeamMember(slug);
  if (!m) return null;

  return (
    <aside
      className={`bg-surface-card border border-border rounded-lg p-5 flex items-center gap-4 ${className}`}
    >
      {m.image ? (
        <img
          src={m.image}
          alt={`${m.name} — ${m.role} at Jentech Electrical`}
          className="w-16 h-16 rounded-full object-cover flex-shrink-0 border border-border"
          loading="lazy"
        />
      ) : (
        <div
          aria-hidden
          className="w-16 h-16 rounded-full flex items-center justify-center text-neon font-bold flex-shrink-0 bg-surface border border-border"
        >
          {m.name.slice(0, 2).toUpperCase()}
        </div>
      )}
      <div className="text-sm leading-relaxed">
        <p className="text-text-muted text-xs uppercase tracking-wider mb-1">
          {context}
        </p>
        <p className="text-text-primary">
          <Link
            href={`/team#${m.slug}`}
            className="font-semibold hover:text-neon transition-colors"
          >
            {m.name}
          </Link>
          {" — "}
          <span className="text-text-secondary">{m.role}</span>
          {m.years ? (
            <span className="text-text-muted">
              {" · "}
              {m.years} years on the tools
            </span>
          ) : null}
        </p>
        {m.licence ? (
          <p className="text-xs text-text-muted mt-1">
            QLD Electrical Worker Licence #{m.licence}
          </p>
        ) : null}
      </div>
    </aside>
  );
}
