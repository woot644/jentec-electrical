import type { Metadata } from "next";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Jentech Electrical — Brisbane Electrician",
  description:
    "Contact Brisbane's premium electrician. Call 07 3914 9696 for 24/7 emergency service, or request a quote online. Licence 80766.",
  alternates: { canonical: `${SITE.url}/contact` },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
