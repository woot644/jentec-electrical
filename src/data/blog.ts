export type ContentBlock =
  | { type: "h2"; text: string; id?: string }
  | { type: "h3"; text: string; id?: string }
  | { type: "p"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "callout"; title?: string; text: string }
  | { type: "quote"; text: string }
  | { type: "cta"; text: string; href: string; label: string };

export type BlogFAQ = { q: string; a: string };

export type BlogPost = {
  slug: string;
  title: string;
  subtitle?: string;
  date: string;
  updated?: string;
  category: "Guides" | "Compliance" | "Safety" | "Costs" | "Commercial";
  excerpt: string;
  metaDescription: string;
  coverImage?: string;
  coverAlt?: string;
  readTime: number;
  sections: ContentBlock[];
  faqs?: BlogFAQ[];
  relatedServiceSlugs?: string[];
  relatedSuburbSlugs?: string[];
  author?: string;
};

export const blogPosts: BlogPost[] = [
  // ─────────────────────────────────────────────────────────────
  // Storm / cyclone preparedness
  // ─────────────────────────────────────────────────────────────
  {
    slug: "storm-power-outage-brisbane-electrician-guide",
    title: "Storm & Cyclone Preparedness — A Brisbane Homeowner's Electrical Guide",
    subtitle:
      "Brisbane sits in one of Australia's most storm-exposed capitals. When the power goes out, lines come down, or water gets into your electrics, here's what to do — and when to call a licensed electrician.",
    date: "10 April 2026",
    category: "Safety",
    excerpt:
      "What to do if the power goes out in a storm, how to handle water-damaged electrical fittings, and what's involved in getting Energex to reconnect after an Electricity Defect Report. Brisbane-focused safety guide.",
    metaDescription:
      "Brisbane storm power outage guide — what to do when power fails, how to handle water-damaged electrical, Energex reconnection after storm, post-flood safety inspection. Licensed electrician advice.",
    coverImage: "/images/storm-hero.webp",
    coverAlt:
      "Dark storm clouds rolling over a Brisbane residential street at dusk",
    readTime: 7,
    author: "Jentech Electrical",
    sections: [
      {
        type: "p",
        text: "Brisbane and South East Queensland sit in one of Australia's most storm-exposed corridors. Severe weather in 2011, 2022, and again in 2025 reminded everyone how fast a routine summer afternoon can turn into lost power, flooded properties, and downed lines. If you own or manage property in Greater Brisbane or the Gold Coast hinterland, this is the electrical-safety checklist you should keep somewhere accessible before the next event.",
      },
      {
        type: "callout",
        title: "Emergency numbers — save these",
        text: "Energex (power outages, downed lines): 13 19 62 · SES (storm / flood emergency): 132 500 · Triple Zero (life-threatening): 000 · Jentech Electrical (post-storm safety inspection & reconnection): 07 3914 9696",
      },
      {
        type: "h2",
        text: "What to do if your power goes out in a storm",
      },
      {
        type: "ul",
        items: [
          "Check if the outage is widespread — look at your neighbours' lights and check the Energex Outage Finder online. If it's the whole street, it's a network issue, not your switchboard.",
          "Turn off and unplug sensitive electrical appliances. When power is restored there's often a surge — TVs, computers, A/C units, and anything with a circuit board can be damaged if they're plugged in at the moment of reconnection.",
          "Keep fridge and freezer doors closed. A well-sealed fridge holds temperature for about 4 hours; a full freezer closer to 24. Opening them repeatedly wastes that buffer.",
          "Use torches, not candles. Post-storm house fires from open flames are more common than people realise, especially if there's been any flooding that's left damp fabric or paper near the flame.",
          "Stay clear of any downed power lines — assume they are live, even if they look dead. Keep yourself, children, and pets at least 8 metres away and call Energex on 13 19 62 or 000 if there's immediate danger.",
          "For flood or storm-related property emergencies, call the SES on 132 500.",
          "Once power is restored and it's safe, call Jentech on 07 3914 9696 if anything in your home isn't working normally — especially if water has been near any electrical fittings.",
        ],
      },
      {
        type: "h2",
        text: "What to do if electrical outlets or fittings are water-damaged",
      },
      {
        type: "p",
        text: "Water inside any electrical fitting is a serious problem. Even if the visible water dries, residual moisture inside the fitting can cause corrosion, shorts, and fires weeks after the event.",
      },
      {
        type: "ol",
        items: [
          "Do not touch wet electrical outlets, switches, or appliances. The risk of electric shock is real, even if the power appears to be off — backfeed from a generator or UPS can keep circuits live.",
          "If it's safe to do so, turn off the power at your main switchboard. Do not stand in water to reach the switchboard — if it's wet, call Energex to isolate the supply at the street.",
          "Avoid standing in water near any electrical outlet or appliance.",
          "Do not use any electrical device or switch that's been in contact with water until a licensed electrician has inspected it.",
          "Call Jentech on 07 3914 9696 for a safety inspection. Every affected fitting, cable length, and switchboard component needs to be checked — this is specialist work.",
          "If flooding poses an ongoing risk to your property, call the SES on 132 500.",
        ],
      },
      {
        type: "h2",
        text: "Understanding the Electricity Defect Report",
      },
      {
        type: "p",
        text: "If Energex disconnects your property because of storm or flood damage, they usually issue an Electricity Defect Report. This is a formal document stating that the electrical installation is unsafe to reconnect in its current condition. Until a licensed electrician has inspected the installation, remediated any faults, and provided a Certificate of Electrical Safety confirming the work, Energex will not restore your supply.",
      },
      {
        type: "p",
        text: "This process exists for good reason — reconnecting power to a storm-damaged installation has caused house fires and electrocutions in the past. The inspection and remediation usually covers: switchboard condition, earth integrity, every circuit that was at risk of water ingress, each affected socket and switch, and any appliance that was connected at the time. The switchboard itself is frequently replaced because water damage to a board is effectively irreversible.",
      },
      {
        type: "h2",
        text: "How Jentech helps with post-storm electrical",
      },
      {
        type: "ul",
        items: [
          "Priority safety inspections for storm-affected properties — we move emergency callouts to the front of the schedule.",
          "Full electrical remediation to the standard Energex requires for reconnection — affected circuits repaired or replaced, switchboard replacement where needed, full testing.",
          "Certificate of Electrical Safety issued on completion, lodged with the QLD Electrical Safety Office.",
          "Coordination with Energex on your behalf to close out the Electricity Defect Report and book the reconnection visit. You don't have to wrangle the paperwork yourself.",
          "Post-remediation recommendations — surge protection at the switchboard to reduce future storm damage, battery backup (UPS) for critical items, and RCD coverage where missing.",
        ],
      },
      {
        type: "callout",
        title: "After a storm — why speed matters",
        text: "Energex prioritises reconnection requests in the order they're received. The sooner a licensed electrician completes your safety inspection and lodges the Certificate of Electrical Safety, the sooner you're back in the queue. Calling us early after a major event puts you at the front of our list and — in turn — closer to the front of the Energex reconnection queue.",
      },
      {
        type: "h2",
        text: "Before the next storm — what to do now",
      },
      {
        type: "ul",
        items: [
          "Add surge protection to your switchboard. Whole-of-house surge protection is a modest add-on that protects every appliance in the property from lightning-strike and grid-switching surges.",
          "Check your RCDs. Press the TEST button on each RCD in the switchboard — if it doesn't trip, that RCD isn't protecting you.",
          "Consider UPS backup for anything that can't afford to go down — server rooms, medical equipment, home office with critical data, 24/7 access systems.",
          "Know where your main switch is. Everyone in the household should know how to isolate the power.",
          "Book a pre-storm-season inspection if your switchboard is ageing — the start of summer is the worst time to discover an old board can't take the load of a just-installed A/C unit.",
        ],
      },
      {
        type: "cta",
        text: "Storm damage at your property? Call us now.",
        href: "/emergency-electrician-brisbane",
        label: "SEE EMERGENCY SERVICES",
      },
    ],
    faqs: [
      {
        q: "How long does it take to get Energex to reconnect after a storm?",
        a: "Depends on the queue — after a major event, wait times for reconnection can stretch several days if the network has widespread damage. The part you control is the electrical-inspection step: the sooner a licensed electrician completes remediation and issues a Certificate of Electrical Safety, the sooner Energex can schedule your reconnection visit. We often fast-track safety inspections for storm-affected properties so our clients aren't waiting on us.",
      },
      {
        q: "Do I need an electrician to inspect my home after a minor storm with no visible damage?",
        a: "Not usually — if your power stayed on, nothing flickered, no GPOs got wet, and the switchboard is dry and working, you're fine. If there was any water ingress, a lightning strike nearby, or your RCDs tripped and won't stay on, book an inspection. Cheap insurance against a fire two weeks from now.",
      },
      {
        q: "My switchboard got wet but everything seems to work — is it OK?",
        a: "Probably not. Moisture inside a switchboard corrodes terminals invisibly and can cause a slow-building fault that eventually triggers an arc fire. Even if circuits test OK today, a wet switchboard should be professionally inspected — and in most cases, replaced. The cost of the inspection is small relative to the insurance claim you don't want to have to make.",
      },
      {
        q: "Can I use a generator to power my home during an outage?",
        a: "Not without proper transfer switching. Plugging a generator directly into a wall socket (back-feeding) is both illegal and extremely dangerous — it can energise the network and electrocute linesmen working to restore power, and can damage your home's electrical when the grid returns. A licensed electrician can install a transfer switch that lets you use a generator safely and code-compliantly.",
      },
      {
        q: "Is storm damage covered by home insurance?",
        a: "Most home insurance policies cover direct storm damage including lightning, power surges, and water ingress. Insurers typically require a licensed electrician's written inspection report and repair invoice as part of the claim. We provide both as standard for any post-storm remediation job — our paperwork is insurer-ready.",
      },
      {
        q: "What's the fastest way to reach you after a major storm event?",
        a: "Call 07 3914 9696. Our emergency line is answered 24/7 by one of our electricians — not a third-party call centre. In the aftermath of a major event our schedule fills quickly, so earlier calls get earlier visits.",
      },
    ],
    relatedServiceSlugs: ["switchboards", "residential", "ups-systems"],
    relatedSuburbSlugs: ["yeerongpilly", "bulimba", "hamilton", "west-end"],
  },

  // ─────────────────────────────────────────────────────────────
  // Electrical causes of house fires
  // ─────────────────────────────────────────────────────────────
  {
    slug: "electrical-causes-house-fires-brisbane",
    title: "The Most Common Electrical Causes of House Fires",
    subtitle:
      "Australia records over 17,000 residential house fires annually, with electrical issues the leading cause in many states. Most are preventable. Here's what causes them — and how to stop them in your Brisbane home.",
    date: "14 April 2026",
    category: "Safety",
    excerpt:
      "Over 17,000 house fires happen in Australia each year — electrical issues lead the causes in many states. The six most common electrical fire risks, warning signs of aged wiring, and how to protect your Brisbane home.",
    metaDescription:
      "The six most common electrical causes of house fires in Australian homes. Faulty outlets, outdated wiring, overloaded power boards, and the warning signs you shouldn't ignore. Brisbane electrical safety guide.",
    coverImage: "/images/house-fires-hero.webp",
    coverAlt:
      "Electrical fire-risk scene illustrating the most common causes of house fires",
    readTime: 8,
    author: "Jentech Electrical",
    sections: [
      {
        type: "p",
        text: "Australia records an average of over 17,000 residential house fires every year, with electrical issues cited as the leading cause in many state-level reports. Most Australians think of bushfires or floods when they think of fire risk — but a 2019 Macquarie University research paper found that residential fires contributed to more deaths on average than all natural disasters combined, and that most of those deaths were preventable.",
      },
      {
        type: "p",
        text: "The six leading electrical causes are well-documented, and every one of them has either a warning sign you can learn to spot or a preventative step you can take now. This guide walks through each — with specific advice for Brisbane homeowners, because the mix of character Queenslanders, post-war homes, and modern appliance loads creates a particular risk profile we see repeatedly on callouts.",
      },
      {
        type: "h2",
        text: "1. Faulty outlets & appliances",
      },
      {
        type: "p",
        text: "If a power outlet looks visibly worn — cracked plastic, blackening around the socket holes, feels warm to touch — it's likely the wiring inside it is deteriorating too. Pair that with a plugged-in appliance with a frayed cord, and heat can build rapidly at the connection, igniting the wall cavity or the appliance itself.",
      },
      {
        type: "p",
        text: "The fix: replace any damaged outlet as soon as you notice it, and retire appliances with frayed or damaged leads rather than repairing the cord with tape. A licensed electrician can replace an outlet in under an hour. The longer the worn outlet stays in service, the higher the fire risk becomes — this is genuinely not something to defer.",
      },
      {
        type: "h2",
        text: "2. Portable heaters",
      },
      {
        type: "p",
        text: "Portable heaters cause more winter house fires than any other appliance class. The manufacturer safety rules matter — follow them:",
      },
      {
        type: "ul",
        items: [
          "Keep at least 1 metre of clearance from anything combustible — curtains, bedding, furniture, clothing laid out to dry.",
          "Place on a solid, flat, stable surface. A heater knocked over by a pet or child during operation is a direct ignition source.",
          "Plug directly into a wall outlet, never into an extension cord or power board — heaters draw significant current and overload multi-outlet setups.",
          "Upgrade any old coil-element heater. Modern heaters with tilt-protection, over-temperature shutoff, and enclosed elements are dramatically safer.",
          "Never leave running unattended, and never run overnight in a bedroom without supervision.",
        ],
      },
      {
        type: "h2",
        text: "3. Outdated wiring",
      },
      {
        type: "p",
        text: "Older Brisbane homes — particularly Queenslanders built before 1970 and post-war homes built in the 1940s–1960s — often have wiring that's 50+ years old and was never designed for today's electrical loads. Modern households run ducted A/C, multiple fridges, induction cooking, multi-device charging stations, home offices with several computers, and EV chargers in the garage. The 1950s wiring in the ceiling wasn't engineered for that.",
      },
      {
        type: "p",
        text: "Warning signs your home's wiring might be struggling:",
      },
      {
        type: "ul",
        items: [
          "Flickering lights or intermittent power outages under normal load.",
          "Appliances or electrical devices that feel excessively hot in normal use.",
          "Shocks or sparks from appliances or outlets.",
          "Unexplained burning smells that don't have an obvious source.",
          "Circuit breakers that trip repeatedly without an obvious overload.",
          "Outlets or switches that feel warm to touch.",
        ],
      },
      {
        type: "p",
        text: "If your Brisbane home was built more than 20 years ago and hasn't had a rewire, there's a meaningful chance the wiring is at or past its original service life. A full or partial rewire brings the installation up to current AS/NZS 3000:2018 standards. In the meantime, a licensed safety inspection will flag any immediate risks and give you a prioritised remediation plan.",
      },
      {
        type: "callout",
        title: "Especially relevant for character-home owners",
        text: "Queenslanders and period homes in Paddington, Wilston, West End, and similar suburbs are particularly likely to have pre-1990 wiring — VIR (rubber-insulated) or early TPS cable that's well past service life. Our guide to Queenslander rewires covers the signs, the process, and the cost profile.",
      },
      {
        type: "h2",
        text: "4. Over-stacked power boards",
      },
      {
        type: "p",
        text: "The 'daisy chain' — plugging one power board into another, or chaining extension cords together — is one of the most common causes of house fires and one of the easiest to avoid. Each power board and cord has a maximum current rating. Stacking them means the first one in line carries all the load of everything downstream, often well beyond what it's designed for.",
      },
      {
        type: "p",
        text: "If you don't have enough outlets for your needs, the correct fix is to call a licensed electrician and get additional outlets installed. Adding GPOs is cheap, permanent, and dramatically safer than living with overloaded power boards. If you're renovating anyway, plan for 50% more outlets than you currently think you need — future-you will thank you.",
      },
      {
        type: "h2",
        text: "5. Wrong wattage light bulbs",
      },
      {
        type: "p",
        text: "Every light fitting has a maximum wattage rating printed on the fitting or in its instructions. Installing a bulb above that rating — typically attempted to get more brightness — causes the fitting and wiring to heat beyond their design temperature. Over time, insulation in the cable breaks down and the fitting can ignite.",
      },
      {
        type: "p",
        text: "The modern fix is LED. LED bulbs produce the same light as incandescent or halogen at a fraction of the wattage — typically 7–10W for the equivalent of an old 60W incandescent. A lumens-equivalent LED bulb inside the rated wattage of the fitting gives you all the brightness you want without the heat.",
      },
      {
        type: "h2",
        text: "6. Faulty circuit breakers",
      },
      {
        type: "p",
        text: "Circuit breakers are the fundamental fire-prevention device in your switchboard. They're designed to trip and cut power when a circuit draws more current than it's rated for — which prevents the wiring in that circuit from overheating. A failed breaker that doesn't trip when it should is a genuine fire risk.",
      },
      {
        type: "p",
        text: "Warning signs of a faulty breaker:",
      },
      {
        type: "ul",
        items: [
          "A strange burning smell near the switchboard.",
          "A breaker that keeps tripping under normal load, or won't stay reset.",
          "A breaker that feels warm or hot to touch.",
          "Discolouration (yellowing or browning) on the breaker face.",
          "An appliance keeps tripping the same circuit even when plugged into different outlets on it.",
        ],
      },
      {
        type: "p",
        text: "Any of these calls for a professional inspection. Older switchboards with rewireable ceramic fuses don't have breakers at all — they rely on fuse wire that can fail silently, and they offer none of the electric-shock protection that modern RCD-protected boards provide. If your home has ceramic fuses, a switchboard upgrade is the single most valuable electrical safety investment you can make.",
      },
      {
        type: "h2",
        text: "Smoke alarms — your last line of defence",
      },
      {
        type: "p",
        text: "Research cited by Australian fire authorities consistently finds that around half of deaths in home fires each year occur in the approximately 6% of homes that don't have working smoke alarms. That's an enormous risk concentration — and one of the cheapest to fix.",
      },
      {
        type: "p",
        text: "Under Queensland law, every smoke alarm in a dwelling must be tested and cleaned at least once every 12 months. If an alarm doesn't sound after a test, it must be replaced immediately. Any smoke alarm more than 10 years old must be replaced regardless of whether it still works — the sensors degrade past reliable operation.",
      },
      {
        type: "p",
        text: "Queensland also has the strictest smoke alarm law in Australia — from 1 January 2027, every owner-occupied dwelling must have interconnected photoelectric alarms in every bedroom, every hallway connecting bedrooms, and on every storey. We've written a detailed guide to the 2027 deadline and what compliance involves.",
      },
      {
        type: "callout",
        title: "Queensland Fire and Emergency Services",
        text: "For current official guidance on smoke alarm requirements, alarm placement, and fire safety in QLD homes, Queensland Fire and Emergency Services (QFES) maintains detailed resources that every homeowner should know.",
      },
      {
        type: "h2",
        text: "The best preventative step — annual safety inspection",
      },
      {
        type: "p",
        text: "Most electrical fires start with a fault that was visible or detectable weeks or months before ignition — a warm outlet, a tripping breaker, a burning smell, or degraded wiring insulation. An annual electrical safety inspection by a licensed electrician catches these faults on your clipboard instead of as an insurance claim later.",
      },
      {
        type: "p",
        text: "A typical safety inspection covers: switchboard condition and age, RCD functionality, earthing and bonding integrity, visible wiring condition in accessible areas, socket and switch condition, smoke alarm compliance, and any appliance with obvious wear. You get a written report with any issues prioritised by risk.",
      },
      {
        type: "cta",
        text: "Book an annual electrical safety inspection for your Brisbane home",
        href: "/services/switchboards",
        label: "BOOK A SAFETY INSPECTION",
      },
    ],
    faqs: [
      {
        q: "How often should I have my home's electrical system inspected?",
        a: "Annually is the usual recommendation for owner-occupied homes. Rental properties require more frequent inspections in some cases under QLD law. Homes with switchboards over 25 years old, or homes that have had any post-storm damage, should be inspected sooner. A full safety inspection takes 1–2 hours and the written report is something you can keep for insurance records.",
      },
      {
        q: "My circuit keeps tripping — is that a fire risk?",
        a: "A breaker that trips is doing its job — it's cutting power when something's wrong. The fire risk is when a breaker fails to trip. That said, repeated tripping under normal use means something on that circuit isn't right: a faulty appliance, an overloaded circuit, or damaged wiring. Have it investigated rather than just resetting and ignoring. Persistent trips without an obvious cause are the kind of thing that leads to a fire if left unexamined.",
      },
      {
        q: "Is it safe to use double adapters and power boards?",
        a: "Individual power boards and adapters used within their rated capacity are fine — that's what they're designed for. The danger is stacking them (boards plugged into boards, extension cords into extension cords) or running high-load appliances like heaters or kettles through them. For anything drawing real current — A/C units, portable heaters, large appliances — plug directly into a wall outlet on a dedicated circuit. If you don't have enough wall outlets, the right answer is to install more, not to chain power boards.",
      },
      {
        q: "How do I know if my Queenslander's wiring is dangerous?",
        a: "If the home hasn't been rewired since the 1990s, assume the wiring is near or past service life. Specific warning signs: flickering lights, repeatedly tripping breakers, warm outlets, unexplained burning smells, or shocks from appliances. Any of these warrants immediate inspection. We've written a detailed guide to the signs of a Queenslander that needs rewiring — worth a read if you own a character home.",
      },
      {
        q: "What should I do if I smell burning but can't find the source?",
        a: "Treat it as urgent. An intermittent electrical burning smell is often the early stage of a wiring fault heating up inside a wall. Turn off the main switch at your switchboard if safe to do so. Do not ignore it — call a licensed electrician immediately. If the smell is acrid and intense, or you see smoke, call 000. Waiting to see if it goes away is exactly how electrical fires start.",
      },
      {
        q: "Does house insurance cover electrical fires?",
        a: "Most Australian home insurance policies cover electrical fires. However, insurers frequently require evidence that the installation was maintained — annual inspection records, recent switchboard upgrade certificates, and compliance paperwork all help claims proceed smoothly. Insurers can challenge claims where there's evidence of known but unaddressed electrical faults. An annual safety inspection protects both your home and your insurance position.",
      },
      {
        q: "Are LED bulbs safer than incandescent or halogen?",
        a: "Yes, materially. LEDs run cool, draw a fraction of the current, and the vast majority don't contain combustible filaments. Halogen downlights are a known fire risk in Australian homes — a hot halogen in contact with ceiling insulation has started many house fires. Swapping halogens for LED downlights (with appropriate fire-rated fittings where required) is one of the easier electrical-safety upgrades you can do.",
      },
    ],
    relatedServiceSlugs: ["switchboards", "smoke-alarms", "residential"],
    relatedSuburbSlugs: ["paddington", "wilston", "west-end", "yeerongpilly"],
  },

  // ─────────────────────────────────────────────────────────────
  // 1. QLD Smoke Alarm 2027
  // ─────────────────────────────────────────────────────────────
  {
    slug: "qld-smoke-alarm-2027-deadline-explained",
    title: "QLD Smoke Alarm Law 2027 — What Every Homeowner Needs to Know",
    subtitle:
      "Queensland has the strictest smoke alarm rules in Australia. The 2027 deadline for owner-occupied homes is now 18 months away. Here's what it actually requires — and why most Brisbane homes aren't yet compliant.",
    date: "22 April 2026",
    category: "Compliance",
    excerpt:
      "The 2027 deadline for interconnected photoelectric smoke alarms in every QLD owner-occupied home is 18 months away. Here's what the law actually requires, why it exists, and what an upgrade costs.",
    metaDescription:
      "QLD smoke alarm 2027 deadline explained. What the law requires, what interconnected photoelectric alarms are, cost ranges, and how to get your Brisbane home compliant before 1 January 2027.",
    coverImage: "/images/20221005-img_0085.webp",
    coverAlt:
      "Interconnected photoelectric smoke alarm installed on a Brisbane ceiling",
    readTime: 9,
    author: "Jentech Electrical",
    sections: [
      {
        type: "callout",
        title: "About the figures in this article",
        text: "Any price ranges mentioned below are indicative of what we see across Brisbane smoke-alarm compliance work — they're not a Jentech rate card. Every home is quoted fixed-price after a 15-minute audit.",
      },
      {
        type: "p",
        text: "If you own a home in Queensland, you have a legal deadline coming up. From 1 January 2027, every owner-occupied dwelling in QLD must have interconnected photoelectric smoke alarms in every bedroom, every hallway that connects bedrooms, and on every storey. Rental properties have already had this requirement since 2022. Homes being sold or leased must be compliant at the point of transaction, regardless of the 2027 date.",
      },
      {
        type: "p",
        text: "In plain language: if you own your home, you have until 1 January 2027 to upgrade. Most Brisbane homes we visit aren't yet compliant. Here's what the law actually requires, why Queensland is stricter than any other state, and what the upgrade costs.",
      },
      {
        type: "h2",
        text: "The five-line summary",
      },
      {
        type: "ul",
        items: [
          "Every bedroom needs its own alarm.",
          "Every hallway connecting bedrooms needs an alarm.",
          "Every storey of the home needs at least one alarm (even if there are no bedrooms on that storey).",
          "All alarms must be photoelectric type (ionisation alarms are banned in QLD as of 2022).",
          "All alarms must be interconnected — when one sounds, they all sound.",
        ],
      },
      {
        type: "p",
        text: "Alarms must also either be hardwired to mains power with a backup battery, or have a non-removable 10-year sealed lithium battery. 9V battery-only alarms no longer meet the standard.",
      },
      {
        type: "h2",
        text: "Why Queensland has stricter rules than other states",
      },
      {
        type: "p",
        text: "The Queensland law was strengthened in response to the 2011 Slacks Creek house fire, in which 11 people died — the largest residential fire loss of life in Australian history. An independent review identified that compliant smoke alarms could have saved lives. The state government progressively tightened the law from 2017, with the final stage — owner-occupied homes — landing on 1 January 2027.",
      },
      {
        type: "p",
        text: "Other Australian states have similar but less strict rules. Queensland's requirement for interconnected alarms in every bedroom and the banning of ionisation alarms goes further than NSW, Victoria, or most other jurisdictions.",
      },
      {
        type: "h2",
        text: "What 'interconnected' actually means",
      },
      {
        type: "p",
        text: "When any one alarm detects smoke, every alarm in the home must sound simultaneously. This is critical in the bedroom-to-kitchen scenario: a fire starting in the kitchen at night needs to wake people asleep in bedrooms down the hall. Without interconnection, the person closest to the fire is often the last to know.",
      },
      {
        type: "p",
        text: "Interconnection can be hardwired (alarms physically connected by a low-voltage signal wire) or wireless (RF signalling between compliant alarm heads). Both are acceptable under the law. Hardwired is typically cheaper and more reliable for new installs during a renovation; wireless is easier for retrofits into finished homes where running extra cable would require ceiling access.",
      },
      {
        type: "h2",
        text: "Why photoelectric — and why ionisation was banned",
      },
      {
        type: "p",
        text: "Photoelectric alarms detect the large smoke particles produced by smouldering fires — the most common type of residential fire, and the type most likely to give people time to escape. Ionisation alarms are better at detecting fast-flaming fires (like a pan on a stovetop) but are notorious for nuisance-tripping on burnt toast and steam, which leads homeowners to disable them — defeating the entire purpose.",
      },
      {
        type: "p",
        text: "Queensland Fire and Emergency Services pushed for a photoelectric-only rule based on fire investigation data showing photoelectric alarms saved more lives. Since 2022, new installs of ionisation alarms have been banned in QLD. Any existing ionisation alarms in your home must be replaced as part of the 2027 compliance upgrade.",
      },
      {
        type: "callout",
        title: "Important — the photoelectric symbol",
        text: "Every compliant alarm will have 'PHOTOELECTRIC' and 'AS 3786-2014' printed on the face. If your existing alarms don't, they need replacing regardless of age. Don't assume because an alarm is 'new' it's compliant — there are still non-photoelectric alarms on Australian hardware-store shelves.",
      },
      {
        type: "h2",
        text: "Who has to comply, and when",
      },
      {
        type: "h3",
        text: "Rental properties — already in force (since 2022)",
      },
      {
        type: "p",
        text: "If you rent out a property in Queensland, it must already be compliant. Your property manager should be arranging annual compliance inspections. If they're not, that's a gap you need to address — non-compliance can affect your landlord insurance coverage and exposes you to liability in the event of a fire.",
      },
      {
        type: "h3",
        text: "Sale or lease trigger — already in force",
      },
      {
        type: "p",
        text: "A property being sold or leased must be compliant at the point of transaction. This catches homeowners who haven't upgraded yet — if you're selling in 2026, you need to be compliant before settlement. Smart sellers upgrade before listing, because non-compliance becomes a negotiation lever for buyers.",
      },
      {
        type: "h3",
        text: "Owner-occupied homes — 1 January 2027",
      },
      {
        type: "p",
        text: "If you own and live in your home and haven't yet upgraded, 1 January 2027 is your deadline. In practice, we recommend not leaving it to late 2026 — the compliance trade is going to be busy, pricing will firm as availability tightens, and you'll save money and hassle by booking in a quiet window.",
      },
      {
        type: "h2",
        text: "What compliance typically costs for a Brisbane home",
      },
      {
        type: "p",
        text: "Costs vary with bedroom count and whether existing alarm cabling can be reused. Based on hundreds of QLD home upgrades:",
      },
      {
        type: "ul",
        items: [
          "Single hardwired photoelectric alarm installed: $180 – $250",
          "3-bedroom home compliance package: $450 – $850",
          "4-bedroom home compliance package: $650 – $1,100",
          "5-bedroom / 2-storey home: $850 – $1,500",
          "Rental compliance inspection: from $150 (written certificate included)",
          "Annual service: from $120 per home",
        ],
      },
      {
        type: "p",
        text: "A compliance package typically takes a single day for a 3-bedroom home. The technician arrives with the alarms and cabling, isolates power, installs the units to Australian Standard AS 3786 spacing, interconnects them (hardwired or wireless depending on existing infrastructure), and runs an interconnection test — triggering each alarm in turn to confirm all others respond. On completion you receive a written compliance report.",
      },
      {
        type: "h2",
        text: "The common mistakes we see",
      },
      {
        type: "ol",
        items: [
          "Assuming new alarms from the hardware store are compliant. Many aren't — they're ionisation or non-compliant photoelectric. Check the face for 'AS 3786' markings.",
          "Leaving one bedroom out 'because nobody sleeps there'. The law applies to every bedroom in the dwelling, regardless of current occupancy.",
          "Using battery-only alarms without a 10-year sealed lithium cell. Standard 9V battery alarms are no longer compliant.",
          "Skipping the interconnection test. We see homes where someone has installed the right alarm heads but wired them as standalone. If one goes off and the others don't, you're not compliant.",
          "Leaving it until December 2026. Compliance tradespeople will be booked out. Pricing firms as availability shrinks.",
        ],
      },
      {
        type: "h2",
        text: "What to do next",
      },
      {
        type: "p",
        text: "Book an audit. For a Brisbane home, a compliance audit takes 15–20 minutes — we walk the home, count bedrooms and storeys, check existing alarms for compliance markings, and give you a fixed-price quote the same or next day. No obligation; audits are free for owner-occupied homes.",
      },
      {
        type: "p",
        text: "If your home needs an upgrade, we'll schedule the install — most 3-bedroom homes completed in a single day. You'll end up with a compliant, properly-tested system and a written compliance report you can keep on file.",
      },
      {
        type: "cta",
        text: "Bring your QLD home into compliance ahead of 2027",
        href: "/services/smoke-alarms",
        label: "SEE SMOKE ALARM SERVICES",
      },
    ],
    faqs: [
      {
        q: "Does the 2027 deadline apply if I've done a renovation since 2017?",
        a: "Yes, but you may already be partly compliant. Any renovation triggering a building approval since 2017 was required to bring the affected rooms up to the then-current standard. If your renovation was less than 4 years ago, there's a good chance you already have some compliant alarms — we can audit and upgrade just the areas that need it.",
      },
      {
        q: "Can I install the alarms myself?",
        a: "For a hardwired installation, no — it's regulated electrical work requiring a licensed electrician and a Certificate of Electrical Safety. For 10-year sealed lithium battery units that don't connect to mains, the installation itself is DIY-legal — but the compliance interconnection test is still specialised, and we recommend a licensed install for the assurance that everything is done to AS 3786.",
      },
      {
        q: "Do I need to replace alarms that are only 3 years old?",
        a: "Possibly — depends what they are. If they're ionisation, yes (banned in QLD since 2022). If they're standalone 9V battery photoelectric, yes (they don't meet the 10-year sealed battery requirement). If they're hardwired interconnected photoelectric installed to AS 3786 already, they're compliant and we just add any missing locations.",
      },
      {
        q: "My home is heritage-listed — are there any exemptions?",
        a: "No general exemption for heritage listing. The fire safety obligations apply regardless. Practically, heritage homes need careful cable routing and often wireless interconnection to avoid damaging original features (pressed metal ceilings, VJ timber linings). Done carefully, compliance upgrades don't need to damage original finishes.",
      },
      {
        q: "What happens if I miss the 2027 deadline?",
        a: "No immediate fine, but two real consequences. First, your home insurance can be challenged in the event of a fire — non-compliance has been used by insurers to reduce or deny claims. Second, if you ever sell or lease, you can't complete the transaction without becoming compliant. The practical cost of missing the deadline is much higher than the cost of doing the upgrade on time.",
      },
    ],
    relatedServiceSlugs: ["smoke-alarms", "residential"],
    relatedSuburbSlugs: ["paddington", "wilston", "bulimba", "west-end"],
  },

  // ─────────────────────────────────────────────────────────────
  // 2. Switchboard cost Brisbane
  // ─────────────────────────────────────────────────────────────
  {
    slug: "switchboard-upgrade-cost-brisbane",
    title: "Switchboard Upgrade Cost Brisbane 2026 — A Real Price Guide",
    subtitle:
      "Most Brisbane electricians won't publish pricing. Here's what a switchboard upgrade actually costs in 2026 — what drives the price, what's included, and how to tell whether you're being quoted fairly.",
    date: "20 April 2026",
    category: "Costs",
    excerpt:
      "Switchboard upgrades for a typical Brisbane home range from $1,800 to $3,500 in 2026. Here's what drives that range, what a modern switchboard includes, and how to tell whether your quote is fair.",
    metaDescription:
      "Switchboard upgrade cost Brisbane 2026. Real price ranges, what drives the cost, what a modern RCD-protected switchboard includes, and how to tell if your quote is fair.",
    coverImage: "/images/20221005-img_9887.webp",
    coverAlt: "Modern RCD-protected switchboard installed in a Brisbane home",
    readTime: 8,
    author: "Jentech Electrical",
    sections: [
      {
        type: "callout",
        title: "About the figures in this article",
        text: "The price ranges below are indicative of what we see across Brisbane electrical work in 2026 — they're not a Jentech rate card. Every job is quoted fixed-price after a site visit. Use these numbers as a reference for what to expect when getting quotes, not as a commitment.",
      },
      {
        type: "p",
        text: "The short answer: most residential switchboard upgrades in Brisbane fall in the low- to mid-thousands in 2026. Commercial upgrades run higher — often four-to-five figures depending on board size. Meter relocations with Energex coordination add meaningfully on top. Surge protection is a modest add-on.",
      },
      {
        type: "p",
        text: "That's the headline. But if you've been quoted something outside that range — either suspiciously cheap or uncomfortably expensive — it's worth understanding what actually drives the cost, what a modern switchboard includes, and where the honest variation sits.",
      },
      {
        type: "h2",
        text: "What the price range actually covers",
      },
      {
        type: "p",
        text: "A standard residential switchboard upgrade in the $1,800 – $3,500 range should cover:",
      },
      {
        type: "ul",
        items: [
          "Removal of the existing board (ceramic fuse, rewireable, or older MCB board).",
          "Supply and install of a new modern distribution board sized for the home.",
          "RCD (Residual Current Device) safety switches protecting every power and lighting circuit.",
          "Modern miniature circuit breakers (MCBs) on each circuit.",
          "Clear circuit labelling so anyone can identify what runs what.",
          "Coordination with Energex for the temporary supply isolation.",
          "Full testing and commissioning of every circuit.",
          "Certificate of Electrical Safety (legally required, issued on completion).",
          "Lodgement of the certificate with the QLD Electrical Safety Office.",
        ],
      },
      {
        type: "h2",
        text: "What pushes the price up",
      },
      {
        type: "h3",
        text: "Circuit count",
      },
      {
        type: "p",
        text: "A 3-bedroom home with 8 circuits is simpler than a 5-bedroom home with 14 circuits. Each additional circuit needs its own MCB, its own RCD coverage (or a shared RCD block), and its own test. Beyond about 18 circuits you're into larger board territory with higher-rated components.",
      },
      {
        type: "h3",
        text: "Board location and access",
      },
      {
        type: "p",
        text: "A board in a ground-floor laundry with easy access is a faster job than a board mounted on a Queenslander's front verandah (where you need weatherproofing and often council overlay sensitivity) or in a hard-to-access meter cupboard. Access adds time; time adds cost.",
      },
      {
        type: "h3",
        text: "Energex coordination and meter relocation",
      },
      {
        type: "p",
        text: "A straight board swap doesn't need the meter relocated — Energex temporarily isolates the supply, we swap the board, they reconnect. Cost stays in the $1,800 – $3,500 range. If the meter itself needs to be moved (external location change, three-phase upgrade, or underground conversion), that adds $2,500 – $6,000 including Energex connection fees, permit applications, and usually two site visits.",
      },
      {
        type: "h3",
        text: "3-phase upgrade",
      },
      {
        type: "p",
        text: "Single-phase to 3-phase supply upgrade is a separate scope. Coordinated with Energex, typically $4,500 – $12,000 on top of the board upgrade itself depending on distance from the street pole. Essential for homes adding ducted air conditioning, EV charging, pool heating, or a solar battery system simultaneously.",
      },
      {
        type: "h3",
        text: "Additional compliance fixes",
      },
      {
        type: "p",
        text: "If the inspection reveals problems elsewhere — failing GPOs, damaged cable insulation, unbonded metallic parts, missing earthing — those become separate line items. We surface them at quote stage rather than as site-visit surprises.",
      },
      {
        type: "h2",
        text: "What pulls the price down",
      },
      {
        type: "p",
        text: "Three legitimate cost-reducers:",
      },
      {
        type: "ul",
        items: [
          "Fewer circuits (smaller older homes).",
          "Reusing the existing enclosure if the board location is weatherproof and big enough.",
          "Bundling with other works — if we're already on site for a rewire or renovation, the board upgrade is often cheaper because we're already mobilised.",
        ],
      },
      {
        type: "p",
        text: "Be wary of quotes significantly below the $1,800 floor for a standard residential upgrade. The components alone — modern distribution board, RCDs, MCBs, busbars, terminals, labelling — cost $600 – $900 at trade prices. A quote at $900 – $1,200 means someone is cutting a corner: using cheap components, skipping RCD coverage on lighting circuits, or (most commonly) not pulling a Certificate of Electrical Safety. That last one is a genuine problem for you if you ever sell the home.",
      },
      {
        type: "h2",
        text: "Signs your switchboard actually needs upgrading",
      },
      {
        type: "ul",
        items: [
          "Ceramic fuses or rewireable fuse holders in the board.",
          "No RCD safety switches (you should see red or green test buttons on multiple switches).",
          "The board is more than 25 years old.",
          "You're adding a new circuit (air conditioning, EV charger, solar) — any renovation that adds a circuit triggers a compliance upgrade under AS/NZS 3000.",
          "Burning smell or scorch marks near the board.",
          "Frequent circuit trips or blown fuses.",
          "Flickering lights throughout the home (not just one room).",
          "Buzzing or crackling sounds from the board.",
        ],
      },
      {
        type: "callout",
        title: "The renovation trigger",
        text: "Under AS/NZS 3000:2018, any new circuit added to a property must be RCD-protected. If your existing board can't provide RCD protection on the new circuit, the regulator treats the renovation as triggering a full switchboard upgrade. Most Brisbane homeowners discover this when they're quoting A/C or EV charger installation — the electrician says 'actually, we need to do the board first.' Better to know up front.",
      },
      {
        type: "h2",
        text: "What upgrade day looks like",
      },
      {
        type: "ol",
        items: [
          "Site visit a few days before: photos taken, scope locked, Energex temporary disconnection booked.",
          "Upgrade day: power off for 2–4 hours, usually in the morning.",
          "Existing board removed, new board mounted.",
          "Every circuit rewired to its labelled MCB, RCD protection applied.",
          "Testing: every circuit tested for correct earth-fault clearance, every RCD trip-time verified.",
          "Power restored. Certificate of Electrical Safety issued.",
          "Follow-up: certificate lodged with QLD ESO, copy emailed to you for records.",
        ],
      },
      {
        type: "h2",
        text: "The quiet benefit — insurance",
      },
      {
        type: "p",
        text: "Most home insurers now expect RCD-protected switchboards for full policy cover. A 40-year-old ceramic-fuse board is increasingly likely to be flagged if you claim for an electrical-fire-related loss — and in some cases claims have been reduced or denied on the grounds of non-compliance. The switchboard upgrade is partly an electrical improvement and partly an insurance de-risking move.",
      },
      {
        type: "h2",
        text: "Bundle opportunities",
      },
      {
        type: "p",
        text: "If you're planning any of the following, getting them done at the same time as the switchboard upgrade saves money — one mobilisation, shared scoping, integrated wiring:",
      },
      {
        type: "ul",
        items: [
          "Ducted or multi-split air conditioning install (often triggers the board upgrade anyway).",
          "EV charger pre-wiring (32A 3-phase circuit run from the board).",
          "Solar inverter and battery provision.",
          "Smoke alarm compliance (for 2027 deadline — see our guide).",
          "Whole-of-house surge protection.",
          "Partial rewire if the home also has pre-1990 circuits.",
        ],
      },
      {
        type: "cta",
        text: "Want a fixed-price switchboard upgrade quote for your Brisbane home?",
        href: "/services/switchboards",
        label: "SEE SWITCHBOARD SERVICES",
      },
    ],
    faqs: [
      {
        q: "How long does a switchboard upgrade take?",
        a: "Most residential upgrades are a single-day job with power off for 2–4 hours in the morning. Larger homes or commercial boards can run 1–2 days. The exact outage window is confirmed before the day so you can plan around it.",
      },
      {
        q: "Do I need to be home during the upgrade?",
        a: "Preferably yes — someone should be on-site to confirm the circuit labelling matches how you use the home, and to let us in at the start and end. If you can't be home, we can work to written circuit instructions and a key left with us. Commercial upgrades are more commonly done with just site access.",
      },
      {
        q: "Can I add circuits for solar or EV to my existing old board?",
        a: "Technically sometimes, but not recommended. Under AS/NZS 3000 any new circuit must be RCD-protected. Older boards without RCD capacity effectively force a full upgrade before any new circuit can be added. Doing it piece-by-piece on an old board costs more overall than doing the board upgrade first and then adding circuits cleanly.",
      },
      {
        q: "Will my house lose power for the whole day?",
        a: "No — typically 2–4 hours in the morning. Most of our residential upgrades have power restored by lunchtime. If the upgrade is combined with other works (rewire, meter relocation) the outage can be longer and we tell you in advance.",
      },
      {
        q: "Do I need an upgrade if my board just has old-style breakers but works fine?",
        a: "If it still works, and you're not planning any renovation or new circuits, you can legally leave it. But — insurance coverage can be affected, resale can flag it, and the first unexpected circuit failure usually forces an upgrade under pressure rather than in planned time. Most Brisbane homeowners upgrade proactively within 5 years of identifying an ageing board.",
      },
    ],
    relatedServiceSlugs: ["switchboards", "residential"],
    relatedSuburbSlugs: ["wilston", "paddington", "bulimba", "hamilton"],
  },

  // ─────────────────────────────────────────────────────────────
  // 3. Queenslander rewire signs
  // ─────────────────────────────────────────────────────────────
  {
    slug: "signs-your-queenslander-needs-rewiring",
    title: "Signs Your Queenslander Needs a Rewire — A Brisbane Checklist",
    subtitle:
      "Brisbane's heritage Queenslander stock includes homes still running rubber-insulated wiring from the 1940s and 50s. Here's how to tell whether your home is due a rewire — and what it actually involves.",
    date: "18 April 2026",
    category: "Guides",
    excerpt:
      "Brisbane's Queenslander stock often still runs pre-1990 wiring that's past service life. Seven warning signs, the scope of a rewire, typical cost ranges, and how to preserve heritage features during the work.",
    metaDescription:
      "How to tell if your Brisbane Queenslander needs rewiring. Seven warning signs, the full scope of a heritage rewire, typical costs, and how we preserve pressed metal, VJ, and stained glass.",
    coverImage: "/images/stokegreen_clementine-1.webp",
    coverAlt:
      "1930s Queenslander undergoing a full electrical rewire with original features preserved",
    readTime: 9,
    author: "Jentech Electrical",
    sections: [
      {
        type: "callout",
        title: "About the figures in this article",
        text: "Any price ranges below are indicative of what we see across Brisbane Queenslander work — they're not a Jentech rate card. Every rewire is quoted fixed-price after a site visit.",
      },
      {
        type: "p",
        text: "Queensland's character home stock is one of Australia's most recognisable architectural treasures — and one of the most electrically aged. Brisbane's inner suburbs — Paddington, Red Hill, Wilston, West End, Bulimba, Bardon — are full of Queenslanders built between 1900 and 1950 that have been partially modernised over the decades, but which still carry significant original or early-renovation-era electrical wiring below the floorboards and above the ceilings.",
      },
      {
        type: "p",
        text: "That wiring — typically rubber-insulated VIR (vulcanised indian rubber) or early TPS (tough plastic sheathed) cable — has a rated service life of about 30 years. The cable installed in a 1955 home is now 70 years old. The cable installed in a 1985 renovation is 40 years old. Both are well past safe service life and both fall short of current AS/NZS 3000:2018 compliance.",
      },
      {
        type: "p",
        text: "This guide walks through seven signs your Queenslander is due a rewire, what the work actually involves, and how we approach preserving the heritage features that make these homes worth owning in the first place.",
      },
      {
        type: "h2",
        text: "The seven warning signs",
      },
      {
        type: "h3",
        text: "1. The switchboard still has ceramic fuses",
      },
      {
        type: "p",
        text: "Open the switchboard door and look for small white ceramic cylinders with a screw-top. That's a rewireable ceramic fuse — the technology the world moved on from in the 1970s. A ceramic-fuse board almost always means the rest of the wiring is of a similar era. It's also your single clearest indicator that a rewire should be on the near-term horizon.",
      },
      {
        type: "h3",
        text: "2. No RCD safety switches",
      },
      {
        type: "p",
        text: "Modern switchboards have RCDs — Residual Current Devices, recognisable by red or green 'TEST' buttons on multiple switches. These cut power within milliseconds if they detect current leaking to earth (what happens when a person touches a live wire). If your board doesn't have these, you have no electric-shock protection on most of the home's circuits. Adding RCDs to an older board is rarely a clean retrofit — it usually leads to a board upgrade, which usually leads to a rewire discussion.",
      },
      {
        type: "h3",
        text: "3. Circuits trip or fuses blow under normal load",
      },
      {
        type: "p",
        text: "A circuit that trips when the kettle, toaster, and dishwasher run simultaneously isn't necessarily a wiring fault — it might be undersized cable or overloaded circuits. But frequent, unexplained trips (especially without an identifiable cause) often indicate insulation breakdown on the cable itself. Rubber-insulated wiring degrades from the inside out and eventually develops earth faults that trip under normal use.",
      },
      {
        type: "h3",
        text: "4. Flickering lights not caused by LED dimmers",
      },
      {
        type: "p",
        text: "LED lighting with incompatible dimmers flickers on its own — that's a lighting problem, not a wiring problem. But if traditional incandescent or halogen lights flicker, or if multiple rooms dim momentarily when an appliance starts, that usually indicates a loose connection or a failing neutral somewhere in the circuit. In older wiring, these develop as the cable and its terminations age.",
      },
      {
        type: "h3",
        text: "5. Warm or discoloured outlets and switches",
      },
      {
        type: "p",
        text: "A power point or light switch that feels warm to the touch under normal use is a red flag. So is discolouration (yellowing or browning of the plastic faceplate). Both indicate heating at the connection — which in turn indicates loose terminals, oxidised wire, or insulation breakdown. This isn't something to monitor; it's something to have inspected promptly, because heating connections cause house fires.",
      },
      {
        type: "h3",
        text: "6. Cloth-covered or rubber-sheathed cable visible in the roof",
      },
      {
        type: "p",
        text: "If you can access the roof cavity or under the floor, you can often see the cable itself. Modern cable is white PVC-sheathed (typical TPS). Older installations show cable sheathed in cloth, rubber, or lead. Any of those are indicators that the wiring is pre-1970s. The insulation may still be holding up, but the service life is exhausted.",
      },
      {
        type: "h3",
        text: "7. Renovation or appliance additions being quoted with a 'board upgrade required' line",
      },
      {
        type: "p",
        text: "If you've recently had an A/C installer, EV charger installer, or renovation electrician tell you 'the switchboard needs upgrading before we can add this circuit', that's not them upselling — it's the AS/NZS 3000 renovation trigger rule. And it's often the prompt that makes homeowners confront the broader wiring age question.",
      },
      {
        type: "h2",
        text: "What a Queenslander rewire actually involves",
      },
      {
        type: "p",
        text: "A full rewire replaces every circuit in the home — power, lighting, stove, hot water, air conditioning, fans — with new TPS cable routed through the ceiling cavity, wall cavities, and under the floor, terminating in a new switchboard with RCD protection on every circuit. Every GPO, switch, and light fitting is replaced or reused depending on condition. Every smoke alarm is brought up to 2027 compliance.",
      },
      {
        type: "h3",
        text: "Staged, not shut-down",
      },
      {
        type: "p",
        text: "A full Queenslander rewire typically takes 5–7 working days total — 3–5 days for the rough-in (the cable routing) and 2–3 days for the fit-off (outlets, switches, fittings, testing). We stage the work room-by-room so the kitchen, main bathroom, and main bedroom stay functional throughout. Families can usually stay in the home for the duration.",
      },
      {
        type: "h3",
        text: "Preserving heritage features",
      },
      {
        type: "p",
        text: "This is where a heritage-competent electrician differs from a generalist. Queenslanders routinely have pressed metal ceilings, VJ timber wall linings, stained glass windows and internal doors, and original timber floors with valuable patina. Drilling through any of these without planning is how heritage damage happens.",
      },
      {
        type: "p",
        text: "Our approach: cable routes are planned to use existing chases, top-of-wall runs behind the cornice, and under-floor drops where accessible. Pressed metal is taped and protected before any drilling; we use bi-metal hole saws at low speed to avoid cracking. Stained glass rooms are done by hand — no vibration transmission. Original pendant fittings are unhung, rewired on the bench (cloth-covered flex replaced with modern but period-correct cable), and rehung.",
      },
      {
        type: "h2",
        text: "Typical cost ranges for a Brisbane Queenslander rewire",
      },
      {
        type: "ul",
        items: [
          "Partial rewire (2–3 bedroom character home): $8,000 – $14,000",
          "Full Queenslander rewire (4–5 bedroom, including switchboard upgrade): $18,000 – $30,000",
          "Larger heritage rewire with full lighting redesign: $30,000 – $60,000+",
          "Switchboard upgrade only (if wiring is less aged): $1,800 – $3,500",
        ],
      },
      {
        type: "p",
        text: "Cost variation comes from: bedroom count, switchboard location, heritage overlay constraints (Paddington, West End), whether any pendants or features need rewiring individually, and whether we're bundling it with a broader renovation.",
      },
      {
        type: "callout",
        title: "Insurance tip",
        text: "Many home insurers offer lower premiums for properties with compliant modern wiring and RCD-protected switchboards. If you're mid-policy-renewal, a rewire certificate can be worth raising with your insurer — and can sometimes offset part of the rewire cost over 5–10 years.",
      },
      {
        type: "h2",
        text: "Heritage overlays (Paddington, West End, parts of Fortitude Valley)",
      },
      {
        type: "p",
        text: "If your home sits in Brisbane City Council's Traditional Building Character overlay, you have external constraints on what can be visible from the street — meter box placement, conduit runs on front-facing facades, visible solar panels, and EV charger hardware. Internal rewiring is unaffected by the overlay, but the meter and switchboard location may need careful planning for any external work.",
      },
      {
        type: "p",
        text: "See our suburb pages for Paddington, West End, and other character suburbs for more on the overlay rules and how we plan around them.",
      },
      {
        type: "cta",
        text: "Not sure if your Queenslander needs a rewire?",
        href: "/services/residential",
        label: "BOOK A SAFETY INSPECTION",
      },
    ],
    faqs: [
      {
        q: "Can we stay in the house during a full rewire?",
        a: "Almost always yes. We stage the work so kitchen, main bathroom, and main bedroom stay live throughout. Rough-in happens room-by-room. The only whole-of-house outage is the day of the switchboard changeover — 2–4 hours, in the morning.",
      },
      {
        q: "Do you work with heritage consultants or architects on character home rewires?",
        a: "Yes — a significant share of our Queenslander rewires are architect-led. We attend coordination meetings, work to the overall renovation program, and feed practical input on feasibility and cost. Past collaborations include Inaspace Architecture & Design, grayHAUS, KO&Co Architecture, and Renee Dunn Architect.",
      },
      {
        q: "How do you protect pressed metal ceilings during rewiring?",
        a: "Every feature is protected with masking before work starts. Drilling is done with bi-metal hole saws at low speed — not standard high-speed wood bits — which prevents the metal cracking. Where possible we route cable through existing penetrations or via the wall-cornice junction rather than new holes in the ceiling itself.",
      },
      {
        q: "What happens to my original pendants and chandeliers?",
        a: "We take them down, inspect the flex (almost always cloth-covered and past service life), rewire on the bench with modern but period-appropriate cable, test under load, and rehang. Antique fittings can almost always be reused — it's a specific skill that separates heritage-competent electricians from generalists.",
      },
      {
        q: "How much disruption is there during the rewire — dust, mess, access?",
        a: "Less than a builder's renovation but more than a paint job. We protect floors with heavy-duty drop sheets, clean up each day, and don't leave wall cavities open overnight. The noisiest days are the rough-in (drilling) — typically 3 days for a standard 3-bed home. Fit-off days are quiet.",
      },
      {
        q: "Will a rewire devalue my home's heritage character?",
        a: "No — it does the opposite. A rewire done respectfully preserves the character while making the home safer and more insurable. Buyers increasingly ask about wiring age during inspections, and a recent Certificate of Electrical Safety is a direct value signal.",
      },
    ],
    relatedServiceSlugs: ["residential", "switchboards"],
    relatedSuburbSlugs: ["paddington", "west-end", "wilston", "fortitude-valley"],
  },

  // ─────────────────────────────────────────────────────────────
  // 4. EV charger Brisbane
  // ─────────────────────────────────────────────────────────────
  {
    slug: "ev-charger-installation-brisbane",
    title: "EV Charger Installation Brisbane — What You Actually Need",
    subtitle:
      "EV adoption in Queensland has grown rapidly, and most owners charge at home rather than at public chargers. Here's what you actually need — and what you don't — to install a home EV charger in Brisbane.",
    date: "15 April 2026",
    category: "Guides",
    excerpt:
      "A practical guide to home EV charger installation in Brisbane — Level 1 vs Level 2, single-phase vs 3-phase, load management, coastal-proofing, typical costs, and what to look for in an installer.",
    metaDescription:
      "EV charger installation Brisbane guide. Level 2 AC charging explained, single-phase vs 3-phase, home EV charger costs $850-$2,800 installed, load management, and licensed installer checklist.",
    coverImage: "/images/ev-charger-hero.webp",
    coverAlt:
      "EV charger installed in a residential Brisbane garage by licensed electrician",
    readTime: 8,
    author: "Jentech Electrical",
    sections: [
      {
        type: "callout",
        title: "About the figures in this article",
        text: "Any price ranges below are indicative of what we see across Brisbane EV charger installs — they're not a Jentech rate card. Every install is quoted fixed-price after a site visit.",
      },
      {
        type: "p",
        text: "EV ownership has grown rapidly across Queensland, and most Brisbane owners charge at home rather than at public stations — home electricity is materially cheaper per kWh, more convenient (plugged in overnight), and often eligible for off-peak tariffs that push effective charging cost lower still.",
      },
      {
        type: "p",
        text: "If you're joining that group, you have three home charging options, and the middle one is what most Brisbane households actually need. Here's the guide.",
      },
      {
        type: "h2",
        text: "The three levels of EV charging",
      },
      {
        type: "h3",
        text: "Level 1 — Standard 10A power point (granny charger)",
      },
      {
        type: "p",
        text: "Every EV sold in Australia comes with a portable charger that plugs into any standard 10A power point. Charging rate: about 10–15 km of range per hour. For a Tesla Model Y or BYD Atto, a full charge takes 30–40 hours from empty. Practical for plug-in hybrids (smaller batteries) or drivers covering under 50km a day. For most new pure EVs, it's a workable trickle charge but not the primary plan.",
      },
      {
        type: "h3",
        text: "Level 2 — Dedicated AC charger (7kW or 22kW)",
      },
      {
        type: "p",
        text: "A hardwired home charger on a dedicated circuit. 7kW is single-phase (roughly 40–50 km of range per hour); 22kW is 3-phase (roughly 120 km per hour). This is what most Brisbane households install — fast enough for a full charge overnight, well-matched to solar and battery systems, and typically $850–$2,800 installed depending on distance from the switchboard and phase type.",
      },
      {
        type: "h3",
        text: "Level 3 — DC fast charging (50kW+)",
      },
      {
        type: "p",
        text: "The high-speed chargers at service stations and shopping centres. DC fast chargers are commercial-grade, typically cost $30,000–$60,000 to install, and require significant supply capacity. Not residential. If you see someone quote 'DC fast charger home install' for under $10,000, it's not actually a DC charger.",
      },
      {
        type: "h2",
        text: "Single-phase vs 3-phase — which one do you need?",
      },
      {
        type: "p",
        text: "Most Brisbane homes are single-phase (one live conductor supplying the house from Energex). Many inner-Brisbane premium homes and any home that's had a recent renovation with ducted A/C and EV provision are 3-phase (three live conductors, enabling higher continuous loads).",
      },
      {
        type: "p",
        text: "The difference matters for EV charging:",
      },
      {
        type: "ul",
        items: [
          "Single-phase: maximum charger rate is 7.4kW (32A × 230V). Delivers about 40 km of range per hour. Full charge from empty in 8–10 hours for most EVs. Perfect for overnight charging.",
          "3-phase: maximum charger rate is 22kW. Delivers about 120 km of range per hour. Full charge in 3–4 hours. Overkill for most households, but useful if you have multiple EVs, drive long distances daily, or intend to feed a vehicle-to-grid system.",
        ],
      },
      {
        type: "p",
        text: "Our recommendation for most Brisbane households: a 7kW single-phase charger is plenty. A 22kW 3-phase charger only makes sense if you already have 3-phase supply (or were planning to upgrade anyway for ducted A/C or similar) and genuinely drive enough to justify it. The price difference for the charger itself is modest ($150–$400); the price difference for the supply upgrade is not ($4,500–$12,000 if you're going from single-phase to 3-phase).",
      },
      {
        type: "h2",
        text: "Load management — essential if you have solar, battery, or multiple EVs",
      },
      {
        type: "p",
        text: "A 7kW charger running at full rate plus a ducted A/C system plus a hot water element plus a kitchen-peak-hour cooking load can exceed what a typical Brisbane home's supply can deliver simultaneously. Without load management, the result is a tripped main breaker at an inconvenient moment.",
      },
      {
        type: "p",
        text: "Load-managed chargers monitor the total household draw in real time and throttle the EV charge rate to keep the house within supply capacity. Brands like JET Charge, Ocular, and Wallbox Pulsar Plus include load management natively. We commission the load limit during installation and test it.",
      },
      {
        type: "p",
        text: "For households with solar, some load-managed chargers can also prioritise EV charging from surplus solar — so when the panels are producing more than the house is using, the excess feeds the car instead of exporting to the grid (where the feed-in tariff is often 5c/kWh vs the retail rate of 30c/kWh). This is a material cost saving over years of ownership.",
      },
      {
        type: "h2",
        text: "Coastal-proofing for river-adjacent and coastal Brisbane",
      },
      {
        type: "p",
        text: "Homes in Bulimba, Hamilton, Teneriffe, New Farm, and anywhere close to the Brisbane River or the coast pick up more salt-air exposure than inland suburbs. Standard residential-grade chargers mounted in outdoor garages or carports will corrode internally over 3–5 years in these environments.",
      },
      {
        type: "p",
        text: "The fix is straightforward: specify an IP54 or IP66-rated charger (most quality brands meet this by default), install it in a marine-grade or stainless-housing enclosure if it's fully exposed, and use stainless-steel cable glands and fixings. Adds $150–$300 to the install; adds 15+ years to service life.",
      },
      {
        type: "h2",
        text: "What a Brisbane EV charger install actually involves",
      },
      {
        type: "ol",
        items: [
          "Site visit: confirm supply (single or 3-phase), switchboard capacity, charger location, cable run distance.",
          "Written quote with recommended charger model and any necessary board work or load management configuration.",
          "Install day: dedicated circuit run from the switchboard to the charger location, usually $120–$180 per metre of cable run (most installs 6–15 metres).",
          "Circuit RCD-protected (legal requirement for EV circuits under AS/NZS 3000 appendix C).",
          "Charger mounted, connected, and commissioned to manufacturer spec.",
          "Load limit set and tested. Network card configured if applicable.",
          "Certificate of Electrical Safety issued. 12-month workmanship warranty.",
        ],
      },
      {
        type: "h2",
        text: "Typical cost ranges",
      },
      {
        type: "ul",
        items: [
          "7kW single-phase charger, <10m cable run, existing supply adequate: $850 – $1,400 installed",
          "7kW single-phase charger, longer cable run or trenching required: $1,400 – $2,000",
          "22kW 3-phase charger, supply capacity adequate: $1,600 – $2,800",
          "Pre-wire only (during renovation, no charger installed yet): $850 – $1,400",
          "Load-managed charger with solar integration: add $200 – $500",
          "Marine-grade enclosure for coastal installs: add $150 – $300",
          "Switchboard upgrade if required: $1,800 – $3,500 (see our dedicated guide)",
        ],
      },
      {
        type: "callout",
        title: "Installer checklist",
        text: "EV charger installation is regulated electrical work under AS/NZS 3000 appendix C. The installer must be a licensed electrician and the circuit must be RCD-protected. A Certificate of Electrical Safety must be issued. If the person quoting the job can't name the standard, can't confirm RCD protection, and isn't prepared to issue a certificate, they're not qualified to install an EV charger in Queensland.",
      },
      {
        type: "cta",
        text: "Book a Brisbane EV charger install or quote",
        href: "/services/residential",
        label: "REQUEST AN EV CHARGER QUOTE",
      },
    ],
    faqs: [
      {
        q: "Can I plug my EV into a normal power point without installing a dedicated charger?",
        a: "Yes, but only via the portable granny charger that came with your car, and only for low-kilometre daily charging. Plugging into a normal 10A GPO via any third-party extension cable or adapter is unsafe and technically non-compliant. For most households it's fine as a backup but not as the primary home-charging solution.",
      },
      {
        q: "Which brand of home EV charger do you recommend?",
        a: "It depends on features. JET Charge Juicepoint for integration with Australian energy apps, Wallbox Pulsar Plus for clean design and solar matching, Ocular IQ for Australian-built and competitive pricing, Zappi if you specifically want heavy solar-matching features. We'll recommend at quote stage based on what you want to get out of it.",
      },
      {
        q: "Will my insurance cover a home-installed EV charger?",
        a: "Yes — provided it's professionally installed with a Certificate of Electrical Safety. We keep a digital copy of every certificate so if your insurer ever asks, you can forward it in a minute. DIY or unlicensed installs are a different story and can invalidate both home and vehicle insurance.",
      },
      {
        q: "Can I install a charger now and upgrade my supply to 3-phase later?",
        a: "Yes. A 7kW single-phase install can be swapped to a 22kW 3-phase charger later if you upgrade your supply — the cable work is already done, only the charger unit changes. Many Brisbane households do it this way: charger now, supply upgrade when another driver justifies it.",
      },
      {
        q: "Does the install need to be near the switchboard or can it go in the garage?",
        a: "Typically in the garage or carport — where the car parks. The cable runs from the switchboard to wherever you park. Cable run distance is the main variable in install cost — $120–$180 per metre. We scope the shortest practical route at the site visit.",
      },
      {
        q: "Is there a Queensland rebate for home EV charger installation?",
        a: "As of April 2026 there's no active state rebate specifically for home chargers (the previous incentive closed in 2024). Some electricity retailers offer discounted chargers bundled with their EV plans — worth checking. The Australian Federal Government's EV rebates focus on vehicle purchase, not charger infrastructure.",
      },
    ],
    relatedServiceSlugs: ["residential", "switchboards"],
    relatedSuburbSlugs: ["wilston", "bulimba", "hamilton", "paddington"],
  },

  // ─────────────────────────────────────────────────────────────
  // 5. Commercial compliance QLD
  // ─────────────────────────────────────────────────────────────
  {
    slug: "commercial-electrical-compliance-queensland",
    title:
      "Commercial Electrical Compliance in Queensland — A Building Manager's Guide",
    subtitle:
      "Six overlapping regulations cover electrical safety in Queensland commercial tenancies. Most building managers don't realise what they're on the hook for until an insurer or WHSQ inspector asks for records. Here's what you actually need.",
    date: "12 April 2026",
    category: "Commercial",
    excerpt:
      "A plain-English guide to the six electrical compliance obligations that apply to every Queensland commercial tenancy — RCD testing, emergency lighting, test-and-tag, record retention, and what happens when you can't produce the paperwork.",
    metaDescription:
      "Commercial electrical compliance QLD guide. RCD testing, AS/NZS 2293 emergency lighting, AS/NZS 3760 test and tag, 5-year record retention, and WHSQ/insurer consequences of non-compliance.",
    coverImage: "/images/nofomo-bundall-4-.webp",
    coverAlt:
      "Modern commercial switchboard with full RCD protection in a Queensland tenancy",
    readTime: 10,
    author: "Jentech Electrical",
    sections: [
      {
        type: "callout",
        title: "About the figures in this article",
        text: "Any price ranges mentioned below are indicative of what we see across Brisbane commercial compliance programs — they're not a Jentech rate card. Every program is quoted fixed-price after a site assessment.",
      },
      {
        type: "p",
        text: "If you manage a commercial tenancy in Queensland — your own business premises, a rental commercial property, or a portfolio of tenanted buildings — six overlapping regulations govern your electrical safety obligations. Most building managers don't realise what they're on the hook for until something goes wrong: an insurance claim gets challenged, a WHSQ inspector turns up, or a tenant asks for records and you can't produce them.",
      },
      {
        type: "p",
        text: "This guide walks through the six areas, what each requires, who's legally responsible (often the landlord, sometimes the tenant, sometimes both), and what compliance actually looks like in practice.",
      },
      {
        type: "h2",
        text: "The six compliance areas",
      },
      {
        type: "h3",
        text: "1. RCD testing (every 6 and 12 months)",
      },
      {
        type: "p",
        text: "Under the Queensland Electrical Safety Regulation 2013, every non-hostile commercial premises requires: 6-monthly push-button testing (a physical press of the RCD test button to confirm it trips), and 12-monthly operational testing (a portable tester confirms both trip time and trip current are within AS/NZS 3000 specification). Hostile environments (construction sites, demolition, heavy manufacturing) require more frequent testing.",
      },
      {
        type: "p",
        text: "Records must be kept for 5 years. A typical small commercial premises might have 4–8 RCDs in the main switchboard and sub-boards; a larger tenancy might have 20+. The testing takes 15–45 minutes per visit depending on circuit count.",
      },
      {
        type: "h3",
        text: "2. Emergency and exit lighting (AS/NZS 2293)",
      },
      {
        type: "p",
        text: "AS/NZS 2293.1 governs design and installation; AS/NZS 2293.2 governs maintenance. Every emergency and exit light in a commercial premises must be discharge-tested every 6 months — a minimum 90-minute battery discharge test to prove the light can actually run for the full emergency duration. Results are recorded in a compliant log book that follows the building through changes of tenant, manager, and owner.",
      },
      {
        type: "p",
        text: "This is an area where we commonly find non-compliance. Emergency lights installed 5–10 years ago often have flat batteries that no-one has tested — so in an actual emergency (fire, power failure) they don't work. Testing surfaces this before it matters.",
      },
      {
        type: "h3",
        text: "3. Test and tag of portable appliances (AS/NZS 3760)",
      },
      {
        type: "p",
        text: "AS/NZS 3760 covers the in-service testing of portable appliances — the hair-dryer-style cords, power boards, extension leads, kettles, microwaves, and IT equipment in commercial premises. Testing intervals depend on environment risk: 3 months for construction, 6 months for hostile environments (factories, workshops), 12 months for hospitality, 5 years for low-risk office equipment.",
      },
      {
        type: "p",
        text: "Each tested item gets a physical tag showing the test date, next-due date, technician ID, and pass/fail status. Untagged or expired items in a commercial premises are a WHSQ finding waiting to happen, and are the first thing an insurer looks at after an electrical incident.",
      },
      {
        type: "h3",
        text: "4. Commercial kitchen electrical compliance",
      },
      {
        type: "p",
        text: "If your tenancy has a commercial kitchen, there's an additional compliance layer. Every piece of cooking equipment requires correct bonding to the main earth; every cleaning-zone circuit requires RCD protection; extraction and exhaust fan power needs to be interlocked with gas safety systems where applicable; and grease-laden environments require specific IP-rated fittings to prevent ignition.",
      },
      {
        type: "p",
        text: "Commercial kitchen compliance is the single area most likely to be flagged in a fire-related insurance investigation — because if a kitchen fire happened and something wasn't right with the electrical, the insurer will find it. We deliver and maintain compliance for cafes, restaurants, bars, and hospitality venues across Brisbane.",
      },
      {
        type: "h3",
        text: "5. Building Fire Safety (QLD Building Fire Safety Regulation 2008)",
      },
      {
        type: "p",
        text: "This regulation requires specific electrical equipment in commercial buildings: exit lighting, emergency lighting, electrically-powered fire detection, and specific compliance records. It cross-references AS/NZS 2293 (emergency lighting) and AS 1670 (fire detection). For most commercial premises, this is where the log book requirements bite — a compliant log book must be available at all times for fire department, WHSQ, or council inspection.",
      },
      {
        type: "h3",
        text: "6. Annual thermal imaging and preventative maintenance (recommended, not mandated)",
      },
      {
        type: "p",
        text: "This isn't a regulatory requirement, but it's rapidly becoming an insurer expectation for larger commercial tenancies and industrial premises. Annual thermal imaging of switchboards and distribution panels catches hot spots — loose connections, overloaded circuits, failing components — before they cause fires. It's the cheapest, most effective preventative measure available, and insurers are starting to discount premiums for buildings that run an annual thermal program.",
      },
      {
        type: "h2",
        text: "Who's responsible — landlord or tenant?",
      },
      {
        type: "p",
        text: "Generally speaking, the landlord is responsible for base-building infrastructure (main switchboard, emergency lighting in common areas, building-wide fire detection) and the tenant is responsible for tenancy-specific equipment (portable appliances, tenant-added circuits, tenant-operated cooking equipment).",
      },
      {
        type: "p",
        text: "The overlap gets complicated in multi-tenanted buildings. Most commercial leases include specific clauses about who does what — but even with a clear lease, the regulator's position is that the person in control of the premises (often the tenant) is responsible for visible compliance issues. In practice, clean compliance is delivered through cooperation between landlord, tenant, and a single electrical contractor running the scheduled programs.",
      },
      {
        type: "h2",
        text: "What happens if you can't produce the records",
      },
      {
        type: "h3",
        text: "Workplace Health and Safety Queensland",
      },
      {
        type: "p",
        text: "WHSQ inspections increasingly ask for electrical compliance records. If you can't produce the last 5 years of RCD test records, emergency lighting log book, and test-and-tag register on request, you're potentially in breach of your primary duty of care under the Work Health and Safety Act 2011. Penalties range from improvement notices to significant fines.",
      },
      {
        type: "h3",
        text: "Insurance",
      },
      {
        type: "p",
        text: "Every commercial insurance policy has a due-diligence clause. In the event of a fire, electrical fault, or electrocution incident, the insurer will ask for compliance records. Inability to produce them is a common basis for reduced or denied claims. The strict legal position is that the insurer must show that non-compliance contributed to the loss — but in practice, producing clean records is what keeps the claim process smooth.",
      },
      {
        type: "h3",
        text: "Reputation and liability",
      },
      {
        type: "p",
        text: "Beyond regulatory and insurance consequences, an electrical incident in a commercial premises has real reputational cost. For hospitality and customer-facing tenants, a fire or injury closes the business for weeks, stays in local media, and costs significantly more in lost trade than any maintenance program would have cost.",
      },
      {
        type: "h2",
        text: "How a scheduled compliance program actually runs",
      },
      {
        type: "ol",
        items: [
          "Initial compliance audit: we walk the premises, document existing records (or lack thereof), identify gaps, and scope a program.",
          "Program agreement: written schedule covering 6-monthly RCD and emergency lighting testing, annual test-and-tag (or more frequent if environment demands), thermal imaging on agreed frequency.",
          "Reminders: we book visits in your calendar. No need to track due dates — we turn up on schedule.",
          "After-hours visits: most compliance work is done outside trading hours so customers aren't disrupted.",
          "Records delivered by email the week of the visit: log books updated, tags applied, any remediation items flagged.",
          "Annual compliance summary: one document per year showing everything that happened, available for insurer or WHSQ audits.",
        ],
      },
      {
        type: "callout",
        title: "Typical annual cost",
        text: "A scheduled compliance program for a small commercial premises (single tenancy, 4–8 RCDs, 6–10 emergency lights, ~40 portable appliances) runs around $1,400–$2,400 per year all-in. Compare to the cost of a single insurance claim challenge — or the reputational cost of an electrical fire — and it's a fraction. For larger tenancies or multi-site portfolios, the per-site cost drops with scale.",
      },
      {
        type: "cta",
        text: "Want a compliance audit of your Brisbane commercial tenancy?",
        href: "/services/commercial",
        label: "SEE COMMERCIAL SERVICES",
      },
    ],
    faqs: [
      {
        q: "We have compliance records from a previous electrician but they're not consistent — can you take over?",
        a: "Yes. We audit the existing records, identify gaps, and pick up the program from where it left off. If some items are out of date, we bring them current and then maintain on schedule. No need to start over.",
      },
      {
        q: "Do I need to use the same electrician for all compliance work?",
        a: "Not legally required — but strongly preferred. A single contractor running all the testing programs means records are consistent, scheduling is coordinated, and if anything is found we can remediate in the same visit. Splitting test-and-tag, RCD testing, and emergency lighting between different providers is administrative mess for minimal cost saving.",
      },
      {
        q: "What's the difference between push-button RCD testing and operational RCD testing?",
        a: "Push-button (6-monthly): someone presses the physical TEST button on the RCD to confirm it trips — this verifies basic function. Operational (12-monthly): a portable tester applies a known fault current and measures the actual trip time and trip current — this verifies the RCD is working within AS/NZS 3000 specification. Both are required. Push-button is quick; operational takes longer and needs specific test equipment.",
      },
      {
        q: "We're fitting out a new commercial tenancy — when does compliance start?",
        a: "From the moment you take occupancy. Emergency lighting must be compliant on day one of trading; RCD coverage must be verified as part of the fit-out; test-and-tag applies to every portable appliance from day one. We typically roll the initial compliance testing into the fit-out handover so you're compliant from your first trading day.",
      },
      {
        q: "Can emergency lighting tests be done outside trading hours?",
        a: "Yes — and usually must be, because the test involves a 90-minute power-off to discharge the batteries. We book tests for evenings, early mornings, or designated quiet windows so the emergency lights can discharge fully without affecting trading.",
      },
      {
        q: "What's the fine for non-compliance if WHSQ inspects?",
        a: "Penalties under the Work Health and Safety Act 2011 are tiered by offence severity and whether it's an individual or corporation. Minor record-keeping offences typically result in improvement notices (fix it within X weeks). Serious safety breaches can attract fines ranging from $50,000 to well over $1 million for corporations in the most serious cases. The practical cost of compliance is tiny compared to the potential exposure.",
      },
    ],
    relatedServiceSlugs: ["commercial", "switchboards", "industrial"],
    relatedSuburbSlugs: ["fortitude-valley", "bundall", "teneriffe", "west-end"],
  },
];

export function getAllBlogPosts(): BlogPost[] {
  return blogPosts;
}

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}
