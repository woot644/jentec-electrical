import type { Metadata } from "next";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Project Gallery — Brisbane Electrical Fit-outs & Renovations",
  description:
    "Explore completed and in-progress Jentech Electrical projects — Queenslander rewires, luxury home renovations, gym fit-outs, and boutique studios.",
  alternates: { canonical: `${SITE.url}/projects` },
};

export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
