import React from "react";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#080B10] border-t border-blueprint-border/60 py-12 relative overflow-hidden">
      {/* Accent Blueprint Line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-blueprint-amber/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left side */}
        <div className="flex flex-col items-center md:items-start gap-2">
          <Link href="/" className="font-display font-bold text-lg flex items-center tracking-tight text-blueprint-text-primary hover:text-blueprint-amber transition-colors">
            <span className="text-blueprint-amber mr-0.5">{"$"}</span>
            <span>NM</span>
            <span className="text-blueprint-amber animate-pulse">_</span>
          </Link>
          <p className="text-xs text-blueprint-text-secondary font-mono tracking-wide text-center md:text-left">
            Nirav Mathukiya &mdash; ASP.NET Core Developer &middot; Built {currentYear}
          </p>
        </div>

        {/* Right side navigation links */}
        <nav className="flex flex-wrap justify-center gap-x-8 gap-y-2">
          <Link
            href="/#work"
            className="text-xs font-mono text-blueprint-text-secondary hover:text-blueprint-amber transition-colors uppercase tracking-widest"
          >
            // 01 Work
          </Link>
          <Link
            href="/#skills"
            className="text-xs font-mono text-blueprint-text-secondary hover:text-blueprint-amber transition-colors uppercase tracking-widest"
          >
            // 02 Skills
          </Link>
          <Link
            href="/#certificates"
            className="text-xs font-mono text-blueprint-text-secondary hover:text-blueprint-amber transition-colors uppercase tracking-widest"
          >
            // 03 Certificates
          </Link>
          <Link
            href="/#about"
            className="text-xs font-mono text-blueprint-text-secondary hover:text-blueprint-amber transition-colors uppercase tracking-widest"
          >
            // 04 About
          </Link>
          <Link
            href="/#contact"
            className="text-xs font-mono text-blueprint-text-secondary hover:text-blueprint-amber transition-colors uppercase tracking-widest"
          >
            // 05 Contact
          </Link>
        </nav>
      </div>
    </footer>
  );
}
