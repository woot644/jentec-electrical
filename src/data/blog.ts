export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  category: "News" | "Safety" | "Troubleshooting";
  excerpt: string;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "cyclone-preparedness-emergency-electrical-assistance",
    title: "Cyclone Preparedness & Emergency Electrical Assistance",
    date: "2 March 2025",
    category: "Safety",
    excerpt:
      "At Jentech Electrical, we understand the risks that severe weather brings. With the forecasted cyclone approaching, our team is fully prepared to assist with emergency electrical issues…",
  },
  {
    slug: "lighting-design-trends-of-2023",
    title: "Lighting Design Trends of 2023",
    date: "16 May 2023",
    category: "News",
    excerpt:
      "As we have moved through 2023, there are some exciting trends emerging in the world of lighting design. From statement fixtures to smart technology, these trends are changing the way we think about lighting…",
  },
  {
    slug: "the-roles-of-electricians-in-smart-homes",
    title: "The Roles of Electricians in Smart Homes",
    date: "28 February 2023",
    category: "News",
    excerpt:
      "Smart devices are becoming ever more present in our homes and will continue to be integrated further in the future…",
  },
  {
    slug: "why-do-power-outages-occur",
    title: "Why Do Power Outages Occur?",
    date: "23 February 2023",
    category: "News",
    excerpt:
      "Power outages are an inconvenience that we have all experienced in our lives. With electricity powering our cities and homes, outages can cause massive disruptions…",
  },
  {
    slug: "ac-dc-power-whats-the-difference",
    title: "AC & DC Power — What's the Difference?",
    date: "14 February 2023",
    category: "News",
    excerpt:
      "You might hear the phrases AC & DC when chatting with your electrician. These terms stand for the types of electrical currents that we use to power our cities and devices…",
  },
  {
    slug: "how-is-electricity-generated-and-distributed",
    title: "How is Electricity Generated and Distributed?",
    date: "2 February 2023",
    category: "News",
    excerpt:
      "Electricity is a fundamental part of our lives, powering everything from our homes to our workplaces, schools, and even some of our vehicles now…",
  },
  {
    slug: "tips-for-recycling-electronic-waste",
    title: "Tips for Recycling Electronic Waste",
    date: "29 January 2023",
    category: "News",
    excerpt:
      "Around 40 million tons of electronic waste gets disposed of every year globally, making up for 70% of all toxic waste…",
  },
  {
    slug: "the-most-common-electrical-causes-of-house-fires",
    title: "The Most Common Electrical Causes of House Fires",
    date: "18 January 2023",
    category: "Safety",
    excerpt:
      "In Australia alone, there are over 17,000 residential house fires annually (on average), with reports noting electrical issues as the leading cause in many states…",
  },
  {
    slug: "emergency-and-exit-lighting",
    title: "Emergency and Exit Lighting",
    date: "9 January 2023",
    category: "Safety",
    excerpt:
      "We are all too familiar with the green exit signs that appear all throughout buildings across our cities…",
  },
  {
    slug: "electrical-safety-for-kids",
    title: "Electrical Safety for Kids",
    date: "5 January 2023",
    category: "Safety",
    excerpt:
      "The Wiggles teamed up with The Queensland Government to make a song dubbed Electricity as an effort to spread electrical safety knowledge to children…",
  },
];
