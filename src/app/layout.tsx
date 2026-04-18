import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import BookingBotWidget from "@/components/BookingBotWidget";
import { JsonLd, localBusinessSchema, websiteSchema } from "@/lib/schema";
import { SITE } from "@/lib/site";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "Jentech Electrical — Brisbane Electrician | Commercial, Residential, Industrial",
    template: "%s | Jentech Electrical",
  },
  description:
    "Brisbane's premium electrician. 24/7 emergency service, commercial fit-outs, residential renovations, industrial maintenance, air conditioning, smoke alarms, switchboards. QLD Licence 80766.",
  keywords: [
    "Brisbane electrician",
    "24/7 emergency electrician Brisbane",
    "commercial electrician Brisbane",
    "residential electrician Brisbane",
    "switchboard upgrade Brisbane",
    "smoke alarm installation Brisbane",
    "air conditioning installation Brisbane",
  ],
  openGraph: {
    type: "website",
    locale: "en_AU",
    siteName: SITE.name,
    url: SITE.url,
    images: [{ url: "/logo/jentech-logo.png", width: 2560, height: 856, alt: SITE.name }],
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-black text-white">
        <JsonLd data={localBusinessSchema()} />
        <JsonLd data={websiteSchema()} />
        <Navigation />
        <main className="flex-1 pt-20">{children}</main>
        <Footer />
        <BookingBotWidget />
      </body>
    </html>
  );
}
