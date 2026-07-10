"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, FileText } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Work", href: "/#work" },
    { name: "Skills", href: "/#skills" },
    { name: "Certificates", href: "/#certificates" },
    { name: "About", href: "/#about" },
    { name: "Contact", href: "/#contact" },
  ];

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        scrolled
          ? "bg-blueprint-bg/80 backdrop-blur-md border-blueprint-border/60 py-4"
          : "bg-transparent border-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Monogram styled like terminal prompt */}
        <Link href="/" className="font-display font-bold text-xl flex items-center tracking-tight text-blueprint-text-primary hover:text-blueprint-amber transition-colors group">
          <span className="text-blueprint-amber mr-0.5">{"$"}</span>
          <span>NM</span>
          <span className="animate-pulse text-blueprint-amber">_</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="font-display font-medium text-sm text-blueprint-text-secondary hover:text-blueprint-amber transition-colors tracking-wide"
            >
              {link.name}
            </Link>
          ))}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-4 py-2 text-xs font-display font-semibold uppercase tracking-wider text-blueprint-bg bg-blueprint-amber hover:bg-blueprint-amber/90 rounded border border-blueprint-amber transition-all shadow-[0_0_10px_rgba(232,163,61,0.2)] hover:shadow-[0_0_15px_rgba(232,163,61,0.4)]"
          >
            <FileText size={14} />
            Resume
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-1 text-blueprint-text-secondary hover:text-blueprint-amber focus:outline-none"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      <div
        className={`md:hidden fixed inset-y-0 right-0 z-40 w-64 bg-blueprint-surface border-l border-blueprint-border/80 shadow-2xl p-6 transition-transform duration-300 transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end mb-8">
          <button
            onClick={() => setIsOpen(false)}
            className="p-1 text-blueprint-text-secondary hover:text-blueprint-amber focus:outline-none"
            aria-label="Close Menu"
          >
            <X size={24} />
          </button>
        </div>

        <nav className="flex flex-col space-y-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={handleLinkClick}
              className="font-display font-medium text-lg text-blueprint-text-secondary hover:text-blueprint-amber transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleLinkClick}
            className="flex items-center justify-center gap-1.5 w-full py-3 text-sm font-display font-semibold uppercase tracking-wider text-blueprint-bg bg-blueprint-amber hover:bg-blueprint-amber/90 rounded border border-blueprint-amber transition-colors"
          >
            <FileText size={16} />
            Resume
          </a>
        </nav>
      </div>

      {/* Mobile Drawer Overlay */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="md:hidden fixed inset-0 z-30 bg-black/50 backdrop-blur-sm"
        />
      )}
    </header>
  );
}
