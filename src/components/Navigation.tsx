"use client";
import { useState } from "react";
import Link from "next/link";

const services = [
  { name: "Commercial", href: "/services/commercial" },
  { name: "Renovations", href: "/services/residential" },
  { name: "Industrial", href: "/services/industrial" },
  { name: "Air Conditioning", href: "/services/air-conditioning" },
  { name: "Smoke Alarms", href: "/services/smoke-alarms" },
  { name: "Switchboards", href: "/services/switchboards" },
];

const guides = [
  { name: "Loss of Power", href: "/guides/loss-of-power" },
  { name: "No Hot Water", href: "/guides/no-hot-water" },
];

export default function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [guidesOpen, setGuidesOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center group" aria-label="Jentech Electrical home">
            <img
              src="/logo/jentech-logo.png"
              alt="Jentech Electrical — Powering positive connections"
              className="h-14 w-auto transition-opacity group-hover:opacity-90"
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            <Link href="/" className="px-3 py-2 text-sm font-medium text-white hover:text-neon transition-colors">
              Home
            </Link>

            {/* Services Dropdown */}
            <div className="relative group">
              <button className="px-3 py-2 text-sm font-medium text-white hover:text-neon transition-colors flex items-center gap-1">
                Services
                <svg className="w-3.5 h-3.5 transition-transform group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </button>
              <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="bg-surface-elevated border border-border rounded-lg shadow-2xl py-2 min-w-[220px]">
                  {services.map((s) => (
                    <Link key={s.href} href={s.href} className="block px-4 py-2.5 text-sm text-text-secondary hover:text-neon hover:bg-neon-glow transition-colors">
                      {s.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link href="/projects" className="px-3 py-2 text-sm font-medium text-white hover:text-neon transition-colors">
              Projects
            </Link>

            {/* Guides Dropdown */}
            <div className="relative group">
              <button className="px-3 py-2 text-sm font-medium text-white hover:text-neon transition-colors flex items-center gap-1">
                Guides
                <svg className="w-3.5 h-3.5 transition-transform group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </button>
              <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="bg-surface-elevated border border-border rounded-lg shadow-2xl py-2 min-w-[200px]">
                  {guides.map((g) => (
                    <Link key={g.href} href={g.href} className="block px-4 py-2.5 text-sm text-text-secondary hover:text-neon hover:bg-neon-glow transition-colors">
                      {g.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link href="/specials" className="px-3 py-2 text-sm font-medium text-white hover:text-neon transition-colors">
              Specials
            </Link>
            <Link href="/blog" className="px-3 py-2 text-sm font-medium text-white hover:text-neon transition-colors">
              Blog
            </Link>
            <Link href="/contact" className="px-3 py-2 text-sm font-medium text-white hover:text-neon transition-colors">
              Contact
            </Link>
          </div>

          {/* CTA + Availability */}
          <div className="hidden lg:flex items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-neon pulse-neon" />
              <span className="text-xs font-medium text-neon">24/7 AVAILABLE</span>
            </div>
            <a href="tel:0739149696" className="neon-btn px-5 py-2.5 rounded text-sm tracking-wide">
              CALL 07 3914 9696
            </a>
          </div>

          {/* Mobile toggle */}
          <button onClick={() => setMobileOpen(!mobileOpen)} className="lg:hidden p-2 text-white">
            {mobileOpen ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-surface border-t border-border">
          <div className="px-4 py-4 space-y-1">
            <Link href="/" onClick={() => setMobileOpen(false)} className="block py-2.5 text-sm font-medium text-white">Home</Link>

            <button onClick={() => setServicesOpen(!servicesOpen)} className="w-full flex items-center justify-between py-2.5 text-sm font-medium text-white">
              Services
              <svg className={`w-4 h-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
            </button>
            {servicesOpen && (
              <div className="pl-4 space-y-1">
                {services.map((s) => (
                  <Link key={s.href} href={s.href} onClick={() => setMobileOpen(false)} className="block py-2 text-sm text-text-secondary hover:text-neon">{s.name}</Link>
                ))}
              </div>
            )}

            <Link href="/projects" onClick={() => setMobileOpen(false)} className="block py-2.5 text-sm font-medium text-white">Projects</Link>

            <button onClick={() => setGuidesOpen(!guidesOpen)} className="w-full flex items-center justify-between py-2.5 text-sm font-medium text-white">
              Guides
              <svg className={`w-4 h-4 transition-transform ${guidesOpen ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
            </button>
            {guidesOpen && (
              <div className="pl-4 space-y-1">
                {guides.map((g) => (
                  <Link key={g.href} href={g.href} onClick={() => setMobileOpen(false)} className="block py-2 text-sm text-text-secondary hover:text-neon">{g.name}</Link>
                ))}
              </div>
            )}

            <Link href="/specials" onClick={() => setMobileOpen(false)} className="block py-2.5 text-sm font-medium text-white">Specials</Link>
            <Link href="/blog" onClick={() => setMobileOpen(false)} className="block py-2.5 text-sm font-medium text-white">Blog</Link>
            <Link href="/contact" onClick={() => setMobileOpen(false)} className="block py-2.5 text-sm font-medium text-white">Contact</Link>

            <div className="pt-4 border-t border-border space-y-3">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-neon pulse-neon" />
                <span className="text-xs font-medium text-neon">24/7 EMERGENCY SERVICE AVAILABLE</span>
              </div>
              <a href="tel:0739149696" className="neon-btn block text-center px-5 py-3 rounded text-sm tracking-wide">
                CALL 07 3914 9696
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
