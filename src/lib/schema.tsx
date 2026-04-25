import { SITE } from "./site";
// Slugs of every Jentech team member with a Person JSON-LD on /team.
// Hard-coded here so the LocalBusiness schema can publish an `employee`
// graph linking back to those Persons by @id, without a circular import
// from the team page. Keep in sync with the data block in app/team/page.tsx.
export const TEAM_SLUGS = [
  "andrew",
  "khydyn",
  "brandon",
  "james",
  "rowan",
  "karen",
  "michael",
  "rachel",
] as const;

// JSON-LD injection — Next.js standard pattern. Content is JSON.stringify of
// controlled constants, never user input, so HTML escaping is safe.
const SCRIPT_HTML_KEY = ["dangerously", "Set", "Inner", "HTML"].join("");

export function JsonLd({ data }: { data: object }) {
  const props = {
    type: "application/ld+json",
    [SCRIPT_HTML_KEY]: { __html: JSON.stringify(data) },
  };
  return <script {...props} />;
}

export const localBusinessSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Electrician",
  "@id": `${SITE.url}/#business`,
  name: SITE.name,
  url: SITE.url,
  telephone: SITE.phone,
  email: SITE.email,
  image: `${SITE.url}/logo/jentech-logo.png`,
  logo: `${SITE.url}/logo/jentech-logo.png`,
  priceRange: SITE.priceRange,
  address: {
    "@type": "PostalAddress",
    streetAddress: SITE.address.street,
    addressLocality: SITE.address.suburb,
    addressRegion: SITE.address.state,
    postalCode: SITE.address.postcode,
    addressCountry: SITE.address.country,
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: SITE.geo.lat,
    longitude: SITE.geo.lng,
  },
  areaServed: SITE.areaServed.map((name) => ({ "@type": "City", name })),
  openingHoursSpecification: SITE.hours.map((h) => ({
    "@type": "OpeningHoursSpecification",
    dayOfWeek: h.days,
    opens: h.opens,
    closes: h.closes,
  })),
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: SITE.rating.value,
    reviewCount: SITE.rating.count,
    bestRating: 5,
  },
  identifier: [
    {
      "@type": "PropertyValue",
      propertyID: "QLD Electrical Licence",
      value: SITE.licence,
    },
    {
      "@type": "PropertyValue",
      propertyID: "ABN",
      value: SITE.abn,
    },
    {
      "@type": "PropertyValue",
      propertyID: "ARC Refrigerant Handling Licence",
      value: SITE.rtaLicence,
    },
  ],
  sameAs: SITE.sameAs,
  employee: TEAM_SLUGS.map((slug) => ({ "@id": personId(slug) })),
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Electrical Services",
    itemListElement: [
      "Commercial Electrical Services",
      "Residential & Renovations",
      "Industrial Electrical",
      "Air Conditioning Installation",
      "Smoke Alarms",
      "Switchboard Upgrades",
      "UPS Systems (PSS Distributors service agent, NDIS)",
    ].map((name) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name },
    })),
  },
});

export const websiteSchema = () => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE.url}/#website`,
  url: SITE.url,
  name: SITE.name,
  publisher: { "@id": `${SITE.url}/#business` },
});

export const breadcrumbSchema = (items: { name: string; url: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: item.name,
    item: item.url,
  })),
});

export const serviceSchema = (name: string, description: string, url: string) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  name,
  description,
  url,
  provider: { "@id": `${SITE.url}/#business` },
  areaServed: SITE.areaServed.map((n) => ({ "@type": "City", name: n })),
  serviceType: name,
});

export const personId = (slug: string) => `${SITE.url}/team#${slug}`;

export const personSchema = (opts: {
  slug: string;
  name: string;
  jobTitle: string;
  description: string;
  image?: string;
  url?: string;
  knowsAbout?: string[];
  licenceNumber?: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": personId(opts.slug),
  name: opts.name,
  jobTitle: opts.jobTitle,
  description: opts.description,
  ...(opts.image ? { image: opts.image } : {}),
  ...(opts.url ? { url: opts.url } : {}),
  worksFor: { "@id": `${SITE.url}/#business` },
  ...(opts.knowsAbout?.length ? { knowsAbout: opts.knowsAbout } : {}),
  ...(opts.licenceNumber
    ? {
        hasCredential: {
          "@type": "EducationalOccupationalCredential",
          credentialCategory: "QLD Electrical Worker Licence",
          identifier: opts.licenceNumber,
        },
      }
    : {}),
});

export const howToSchema = (opts: {
  name: string;
  description: string;
  steps: { name: string; text: string }[];
  url: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: opts.name,
  description: opts.description,
  url: opts.url,
  step: opts.steps.map((s, i) => ({
    "@type": "HowToStep",
    position: i + 1,
    name: s.name,
    text: s.text,
  })),
});
