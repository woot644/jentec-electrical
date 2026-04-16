import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";
import { projects } from "@/data/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const pages: MetadataRoute.Sitemap = [
    { url: `${SITE.url}/`, changeFrequency: "weekly", priority: 1, lastModified: now },
    { url: `${SITE.url}/services/commercial`, changeFrequency: "monthly", priority: 0.9, lastModified: now },
    { url: `${SITE.url}/services/residential`, changeFrequency: "monthly", priority: 0.9, lastModified: now },
    { url: `${SITE.url}/services/industrial`, changeFrequency: "monthly", priority: 0.9, lastModified: now },
    { url: `${SITE.url}/services/air-conditioning`, changeFrequency: "monthly", priority: 0.9, lastModified: now },
    { url: `${SITE.url}/services/smoke-alarms`, changeFrequency: "monthly", priority: 0.9, lastModified: now },
    { url: `${SITE.url}/services/switchboards`, changeFrequency: "monthly", priority: 0.9, lastModified: now },
    { url: `${SITE.url}/emergency-electrician-brisbane`, changeFrequency: "monthly", priority: 0.95, lastModified: now },
    { url: `${SITE.url}/toowoomba-electrician`, changeFrequency: "monthly", priority: 0.8, lastModified: now },
    { url: `${SITE.url}/team`, changeFrequency: "monthly", priority: 0.6, lastModified: now },
    { url: `${SITE.url}/privacy`, changeFrequency: "yearly", priority: 0.3, lastModified: now },
    { url: `${SITE.url}/guides/loss-of-power`, changeFrequency: "yearly", priority: 0.7, lastModified: now },
    { url: `${SITE.url}/guides/no-hot-water`, changeFrequency: "yearly", priority: 0.7, lastModified: now },
    { url: `${SITE.url}/projects`, changeFrequency: "monthly", priority: 0.8, lastModified: now },
    { url: `${SITE.url}/blog`, changeFrequency: "weekly", priority: 0.6, lastModified: now },
    { url: `${SITE.url}/specials`, changeFrequency: "monthly", priority: 0.7, lastModified: now },
    { url: `${SITE.url}/contact`, changeFrequency: "yearly", priority: 0.8, lastModified: now },
  ];

  const projectPages: MetadataRoute.Sitemap = projects.map((p) => ({
    url: `${SITE.url}/projects/${p.slug}`,
    changeFrequency: "yearly",
    priority: 0.6,
    lastModified: now,
  }));

  return [...pages, ...projectPages];
}
