export type Project = {
  slug: string;
  name: string;
  category: "commercial" | "residential";
  tagline: string;
  description: string[];
  image: string;
  gallery?: string[];
  status?: "IN PROGRESS";
  credits?: { role: string; name: string }[];
};

export const projects: Project[] = [
  {
    slug: "nofomo-helensvale",
    name: "NOFOMO Gym Helensvale",
    category: "commercial",
    tagline: "24/7 HIIT studio with smart TVs, neon lighting, and member-only access.",
    description: [
      "We turned this commercial space into an energetic HIIT training center, alive with smart TVs that stream workout programs to the participants, dynamic neon lighting, and nightclub-style sound systems.",
      "It required a 24hr member-only access system and a full switchboard overhaul to accommodate state-of-the-art equipment.",
    ],
    image: "/images/helensvale-nofomo-11-.webp",
    credits: [
      { role: "Website", name: "nofomofit.com" },
      { role: "Instagram", name: "@nofomohelensvale" },
    ],
  },
  {
    slug: "nofomo-bundall",
    name: "NOFOMO Gym Bundall",
    category: "commercial",
    tagline: "Innovative 24/7 HIIT studio with nightclub lighting and beats on the Gold Coast.",
    description: [
      "NOFOMO is an innovative 24/7 HIIT studio with nightclub lighting and beats. It required a complete disconnection of the existing electrical from the previous tenancy and a full new fitout of electrical and data.",
      "Complete with integrated smart TV installation, state-of-the-art dynamic lighting and sound systems, 24hr member-only access system, and selfie station. We also carried out servicing on the air conditioning systems to ensure maximum climate control in this high-paced environment.",
    ],
    image: "/images/nofomo-bundall-1-.webp",
    credits: [
      { role: "Website", name: "nofomofit.com" },
      { role: "Instagram", name: "@nofomo_bundall" },
    ],
  },
  {
    slug: "fridas-noosa",
    name: "Frida's Sip n' Paint Noosa",
    category: "commercial",
    tagline: "Premier Sip n' Paint Studio in one of the Sunshine Coast's hottest locations.",
    description: [
      "It was our pleasure to create a luxe space for this premier Sip n' Paint Studio in the Sunshine Coast's hottest tourist location. We provided lighting design input to create a sophisticated, chic space adorned with boutique chandeliers.",
      "Full power and data were installed for back-of-office requirements, as well as appliances and hot water. The result was an imaginative and collaborative space — perfect for allowing the artistic juices to flow.",
    ],
    image: "/images/frida-s-noosa-6-.webp",
    credits: [
      { role: "Website", name: "fridas.com.au/noosa" },
      { role: "Instagram", name: "@fridassipnpaintnoosa" },
    ],
  },
  {
    slug: "fridas-paddington",
    name: "Frida's Sip n' Paint Paddington",
    category: "commercial",
    tagline: "Brisbane's luxe Sip n' Paint Studio — sophisticated, chic, and boutique-lit.",
    description: [
      "A tired commercial tenancy turned into Brisbane's most chic Sip n' Paint Studio. The previously dull office was disconnected and demolished to make way for brand new data, power and lighting.",
      "We installed boutique lighting and chandeliers throughout the space to provide a soft, warm and welcoming atmosphere. Power for the dishwasher and hot water system would get a workout with many glasses and palettes to be used throughout the numerous upcoming boozy evening painting classes. We also set up the back of house office with all data and internet requirements.",
    ],
    image: "/images/frida-s-paddington-6-.webp",
    credits: [
      { role: "Website", name: "fridas.com.au/paddington-studio" },
      { role: "Instagram", name: "@fridassipnpaintpaddington" },
    ],
  },
  {
    slug: "stoke-green",
    name: "Stoke Green",
    category: "residential",
    tagline: "1930s Queenslander transformed into a modern family home.",
    description: [
      "Stoke Green is a 1930's Queenslander that had previously undergone some small renovations before being transformed into a modern-day family home to suit the changing needs of its current family.",
      "The original home was packed full of charming features including pressed metal ceilings, stained glass windows and doors and two original timber fireplaces which were restored during the renovation.",
      "The property underwent an extensive electrical overhaul which included new smoke alarms, switchboards and LED lighting throughout. We rewired several antique pendants and chandeliers for a beautifully designed blend of old and new.",
    ],
    image: "/images/stokegreen_clementine-1.webp",
    credits: [
      { role: "Architect", name: "Inaspace Architecture & Design" },
      { role: "Builder", name: "grayHAUS" },
      { role: "Photographer", name: "NIRA Creative" },
    ],
  },
  {
    slug: "clementine",
    name: "Clementine",
    category: "residential",
    tagline: "Meticulous transformation embracing 1940s Art Deco origins.",
    description: [
      'Clementine House is a meticulous transformation embracing its 1940\'s Art Deco origins with a harmonious contemporary fusion of the classic romantic features of a bygone era. grayHAUS have masterfully merged the beautiful, original Clementine cottage with an emphasis on continuing the period curves and colour themes, gently merging through to a modern extension suited to relaxed family living and entertaining.',
      "All new LED lighting was installed throughout with a vast array of pendant lights that feature gold droppers and blown glass orbs. A bespoke grand chandelier marries the old and new extending to the modern extension, where dramatic high ceilings enhance the perfect north easterly light, creating a sense of openness and space.",
      "Ilve appliances are used throughout the kitchen including an integrated dishwasher and refrigerator, a steam oven and standard oven. The property is also fitted with a purposely designed security system to give our clients that added peace of mind.",
    ],
    image: "/images/insta-res-10-5cf5745.webp",
    credits: [
      { role: "Designer", name: "grayHAUS" },
      { role: "Builder", name: "grayHAUS" },
      { role: "Photographer", name: "mgk_photographer" },
    ],
  },
  {
    slug: "verney-house",
    name: "Verney House",
    category: "residential",
    tagline: "Major renovation preserving the character of a classic Queensland home.",
    description: [
      "Verney House is set out over a large block of land with beautifully landscaped gardens. The once old Queenslander has been lifted and extended to create the home you see now. When walking through the front door, you are met with a custom-made staircase that leads downstairs to a giant wine cellar that features heated glass and feature lighting.",
      "The property is filled with LED downlights and a well-balanced mix of old and new pendant lighting to really bring the modern Queenslander feel to the forefront. The garden features soft lighting to set the mood when enjoying the large pool and outdoor dining area.",
      "Verney House has ducted air conditioning throughout — even in the bathrooms — to make this home comfortable all year round.",
    ],
    image: "/images/grayhaus-verney-rd-5.webp",
    credits: [
      { role: "Builder", name: "grayHAUS" },
      { role: "Photographer", name: "NIRA Creative" },
    ],
  },
  {
    slug: "courtyard-house",
    name: "Courtyard House",
    category: "residential",
    tagline: "Large family home built around a beautifully designed courtyard.",
    description: [
      "This property has received a major overhaul. From once being a block of flats to now being a large family home built around a beautifully designed courtyard. Courtyard House is set across 3 different levels.",
      "The bottom level has a large garage, LED lit cellar and a guest bedroom and bathroom. The staircase with a handmade handrail with an enclosed LED strip takes you up to the courtyard level. The kitchen and the upper ground level wrap around the courtyard with large glass windows and doors to maximise the view from all areas of the house.",
      "The kitchen has the finest appliances and feature lighting to set the mood for all occasions. Upper ground level has multiple bathrooms with hidden LED strips and spacious bedrooms with large ceiling fans and ducted air conditioning. The home is fully secured by state of the art alarm, camera and intercom system.",
    ],
    image: "/images/elv_4414.webp",
    credits: [
      { role: "Designer", name: "KO&Co Architecture" },
      { role: "Builder", name: "grayHAUS" },
      { role: "Photographer", name: "New View Photography & Realscope" },
      { role: "Completion", name: "May 2023" },
    ],
  },
  {
    slug: "fortitude-queenslander",
    name: "Fortitude Valley Queenslander",
    category: "residential",
    status: "IN PROGRESS",
    tagline: "Heritage-listed Queenslander getting a full rewire, LED lighting, and rooftop terrace.",
    description: [
      "This heritage-listed property has been sitting vacant in this inner city suburb for years. The property is about to undergo an extensive renovation and extension to bring life and character back to this beautiful piece of Brisbane real estate.",
      "Once completed this property will have undergone a complete rewire and switchboard upgrade, along with new LED light fittings, top-of-the-market kitchen appliances, a roof terrace with soft mood lighting, and a vehicle turntable that allows the owners to access the garage off the small cul de sac.",
      "Keep an eye out for photo updates as this job progresses.",
    ],
    image: "/images/blob-c0ea1df.webp",
    credits: [
      { role: "Designer", name: "grayHAUS" },
      { role: "Builder", name: "grayHAUS" },
      { role: "Photographer", name: "strk_visuals" },
    ],
  },
  {
    slug: "wilston-redesign",
    name: "Wilston Redesign",
    category: "residential",
    status: "IN PROGRESS",
    tagline: "Complete electrical strip and redesign for a modern Wilston family home.",
    description: [
      "This property is getting completely stripped of all the existing electrical services to make way for the redesign. The staircase, bedrooms, living areas and outdoor areas are being reshaped or extended to suit the current family.",
      "We are reusing some of the existing pendant lighting while installing brand new feature lighting that gives the home a modern feel. The kitchen is being majorly extended and updated with modern appliances, lighting and power.",
      "We are doing a full switchboard relocation and upgrade to meet the current standards and demands of this renovated property. Keep an eye out as we continue to bring this property new life.",
    ],
    image: "/images/blob-6dd2ed8.webp",
    credits: [
      { role: "Designer", name: "grayHAUS" },
      { role: "Builder", name: "grayHAUS" },
      { role: "Photographer", name: "strk_visuals" },
    ],
  },
  {
    slug: "killara-house",
    name: "Killara House",
    category: "residential",
    status: "IN PROGRESS",
    tagline: "Luxury Queenslander with elevator, pool house, and made-to-order pendant lighting.",
    description: [
      "If there was ever a property that you pull out all the stops for, this is the one. This large Queenslander is getting majorly updated and extended to suit the new owners.",
      "This home when finished will be complete with an elevator, newly built pool house with custom lighting and power, designer kitchen and brand new butlers pantry to house all of the top end appliances. Every light in the house is being changed to new LEDs with several made to order designer pendants to give this house a one off look.",
      "The gardens are being redone and completely lit up by carefully placed garden lights to really make the area pop.",
    ],
    image: "/images/blob-d22796b.webp",
    credits: [
      { role: "Designer", name: "Renee Dunn Architect" },
      { role: "Builder", name: "grayHAUS" },
      { role: "Photographer", name: "strk_visuals" },
    ],
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export const commercialProjects = projects.filter((p) => p.category === "commercial");
export const residentialProjects = projects.filter((p) => p.category === "residential");
