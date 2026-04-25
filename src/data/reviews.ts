// Featured Google reviews — surfaced on the homepage as Review schema
// alongside the existing aggregateRating (5.0 / 158).
//
// Source: https://www.google.com/maps?cid=14536006754446114868
//
// To add more, paste real reviews verbatim. Google penalises invented
// review text, so do not edit the wording. Approximate-date strings
// like "March 2026" are normalised to ISO "2026-03-01" — that's
// schema-valid for datePublished.

export type FeaturedReview = {
  authorName: string;
  rating: number;
  reviewBody: string;
  /** ISO 8601 date — use "YYYY-MM-01" if only the month is known. */
  datePublished: string;
  /** Optional friendly date for display, e.g. "March 2026". */
  displayDate?: string;
};

export const featuredReviews: FeaturedReview[] = [
  {
    authorName: "Rick Griffin",
    rating: 5,
    reviewBody:
      "Great service by Stephen in particular. On time, fast, efficient and very reasonably priced. Would highly recommend Jentech Electrical to anyone.",
    datePublished: "2026-03-01",
    displayDate: "March 2026",
  },
  {
    authorName: "Evannie Cris Guzman",
    rating: 5,
    reviewBody:
      "Professional, friendly, and reliable. Jett did an excellent job with our electrical work. Would not hesitate to use Jentech again.",
    datePublished: "2026-02-01",
    displayDate: "February 2026",
  },
  {
    authorName: "Vikki L Brown",
    rating: 5,
    reviewBody:
      "The tech that came out to see me today was awesome. He was professional, thorough and explained everything clearly. Highly recommend.",
    datePublished: "2026-02-01",
    displayDate: "February 2026",
  },
];
