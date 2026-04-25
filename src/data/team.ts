// Team data — single source of truth, consumed by /team page and the
// expert-attribution component on service / blog / guide pages.

export type TeamMember = {
  /** URL-safe identifier; matches Person @id and the /team#anchor. */
  slug: string;
  name: string;
  role: string;
  years?: number;
  licence?: string;
  specialisations?: string[];
  image?: string;
  bio: string;
};

export const director: TeamMember = {
  slug: "andrew",
  name: "Andrew",
  role: "Director",
  years: 18,
  licence: "129399",
  image: "/team/andrew.webp",
  // Andrew's own words — kept long because it's the founder/director's
  // statement and sets the tone for the whole team page.
  bio:
    "With 18 years of experience in the industry, I have honed a diverse skill set that spans leadership, client relations, problem-solving, and operational management. I am passionate about delivering value through a client-focused business model that places customers' needs at the heart of everything we do.\n\nThroughout my career, I have developed exceptional communication skills, enabling me to effectively collaborate across teams, engage clients, and ensure the seamless execution of complex projects. Whether it's driving innovation, managing functional teams, or optimising processes, I am committed to finding solutions that drive results and exceed expectations.\n\nAs a leader and manager, I take pride in motivating teams to perform at their best, while fostering an environment of trust, collaboration, and continuous improvement. My organisational strengths allow me to manage multiple priorities effectively, ensuring that both short-term and long-term goals are met efficiently and precisely.\n\nI am always eager to learn by leveraging my experience and expertise to tackle new challenges.",
};

export const electricians: TeamMember[] = [
  {
    slug: "khydyn",
    name: "Khydyn",
    role: "Manager",
    years: 14,
    licence: "151153",
    specialisations: [
      "Architectural builds",
      "High-end renovations",
      "Fine-detail work",
    ],
    image: "/team/khydyn.webp",
    bio:
      "Khydyn manages the field team and specialises in architectural builds and renovations — anything that demands a fine eye for detail. 14 years on the tools across Brisbane's residential and commercial markets.",
  },
  {
    slug: "brandon",
    name: "Brandon",
    role: "Team Leader",
    years: 10,
    licence: "164332",
    specialisations: [
      "Large project coordination",
      "School & corporate maintenance",
      "UPS servicing & installation",
    ],
    image: "/team/brandon.webp",
    bio:
      "Brandon coordinates Jentech's largest projects — including school buildings — and runs the ongoing maintenance program for school and corporate clients. Also leads UPS servicing and installations as a PSS authorised service agent.",
  },
  {
    slug: "james",
    name: "James",
    role: "Team Leader",
    years: 6,
    licence: "179744",
    specialisations: [
      "Complex fault-finding",
      "Residential renovations",
      "Switchboard upgrades",
    ],
    image: "/team/james.webp",
    bio:
      "James handles complex faults, residential renovations, and switchboard upgrades. The electrician you want when something doesn't make sense and the job needs a methodical, experienced eye.",
  },
  {
    slug: "rowan",
    name: "Rowan",
    role: "Team Leader",
    years: 5,
    licence: "1506377",
    specialisations: [
      "Commercial fitouts",
      "Residential projects",
      "Switchboard upgrades",
    ],
    image: "/team/rowan.webp",
    bio:
      "Rowan leads commercial fitouts, residential projects, and switchboard upgrades. Brings calm, detail-focused execution to multi-trade jobsites where coordination matters.",
  },
];

export const office: TeamMember[] = [
  {
    slug: "karen",
    name: "Karen",
    role: "Quoting & Accounts",
    image: "/team/karen.webp",
    bio:
      "30 years across residential and commercial property management, plus a history coordinating small building projects. Karen prepares quotes, handles accounts, and keeps the back-of-house running so jobs move smoothly from enquiry to invoice.",
  },
  {
    slug: "michael",
    name: "Michael",
    role: "Customer Relations",
    image: "/team/michael.webp",
    bio:
      "Michael runs customer relations, drawing on a family history in property investment and a genuine love of the conversations that come with the role. Often the first voice you'll hear from Jentech.",
  },
  {
    slug: "rachel",
    name: "Rachel",
    role: "Office Manager",
    image: "/team/rachel.webp",
    bio:
      "Six years of residential property management — including leading a property management department — and seven years embedded at Jentech, with a family background in real estate. Rachel keeps the team's day-to-day organised.",
  },
];

export const allTeamMembers: TeamMember[] = [director, ...electricians, ...office];

export function getTeamMember(slug: string): TeamMember | undefined {
  return allTeamMembers.find((m) => m.slug === slug);
}
