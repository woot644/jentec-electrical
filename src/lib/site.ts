// Canonical site URL. On the production domain this should be
// "https://jentechelectrical.com.au". Until DNS cutover lands we serve
// from the Vercel preview URL, so the env var lets us flip between the
// two without a code change.
//
// To cut over: set NEXT_PUBLIC_SITE_URL=https://jentechelectrical.com.au
// in the Vercel project settings (Environment Variables -> Production)
// and redeploy. Sitemap, schema, canonicals, robots.txt, OpenGraph and
// llms.txt-rendered links all read from here.
const PROD_URL = "https://jentechelectrical.com.au";
const STAGING_URL = "https://jentec-electrical.vercel.app";
const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? STAGING_URL
).replace(/\/$/, "");

export const SITE = {
  name: "Jentech Electrical",
  legalName: "Jentech Electrical",
  url: SITE_URL,
  /** Production canonical, regardless of which environment is rendering. */
  productionUrl: PROD_URL,
  phone: "+61739149696",
  phoneDisplay: "07 3914 9696",
  email: "info@jentechelectrical.com.au",
  licence: "80766",
  rtaLicence: "AU068040",
  abn: "46 611 087 462",
  priceRange: "$$",
  bookingUrl:
    "https://book.servicem8.com/request_service_booking?strVendorUUID=fe4ceb21-56b9-4e0e-bb43-9883d836069b",
  address: {
    street: "6/190 Station Rd",
    suburb: "Yeerongpilly",
    state: "QLD",
    postcode: "4105",
    country: "AU",
  },
  areaServed: [
    "Yeerongpilly",
    "Brisbane CBD",
    "Paddington",
    "Bulimba",
    "New Farm",
    "Fortitude Valley",
    "Wilston",
    "Newstead",
    "Teneriffe",
    "Hamilton",
    "Ascot",
    "Bundall",
    "Helensvale",
    "Noosa",
  ],
  geo: { lat: -27.5422, lng: 153.0257 },
  rating: { value: 5.0, count: 158 },
  gbpCid: "14536006754446114868",
  sameAs: [
    "https://www.facebook.com/1591270694501931",
    "https://www.instagram.com/jentechelectrical",
    "https://maps.google.com/maps?cid=14536006754446114868",
  ],
  hours: [
    { days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "09:00", closes: "16:00" },
  ],
  hoursDisplay: "Mon–Fri: 9:00am–4:00pm",
} as const;
