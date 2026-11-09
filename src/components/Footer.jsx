"use client";

import Link from "next/link";
import { ArrowUp, MessageSquare, Globe } from "lucide-react";
import { personalInfo } from "@/data/portfolioData";
import Container from "@/components/Container";

function GithubIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
    </svg>
  );
}

function LinkedinIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
      <rect x="2" y="9" width="4" height="12"></rect>
      <circle cx="4" cy="4" r="2"></circle>
    </svg>
  );
}

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const navLinks = [
    { name: "About", href: "/#about" },
    { name: "Skills", href: "/#skills" },
    { name: "Education", href: "/#education" },
    { name: "Experience", href: "/#experience" },
    { name: "Projects", href: "/#projects" },
    { name: "Contact", href: "/#contact" },
  ];

  const socialLinks = [
    {
      name: "GitHub",
      href: personalInfo.github,
      icon: GithubIcon,
    },
    {
      name: "LinkedIn",
      href: personalInfo.linkedin,
      icon: LinkedinIcon,
    },
    {
      name: "WhatsApp",
      href: personalInfo.whatsapp,
      icon: MessageSquare,
    },
    {
      name: "Dremoy IT",
      href: "https://dremoy.com",
      icon: Globe,
    },
  ];

  return (
    <footer className="relative bg-black border-t border-white/[0.08] text-slate-400 overflow-x-clip z-10 w-full max-w-full box-border">
      {/* Subtle Ambient Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 sm:w-96 h-24 bg-amber-500/5 blur-3xl pointer-events-none max-w-full" />

      <Container className="pt-16 pb-12">
        {/* 3-Column Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 sm:gap-12 pb-14 border-b border-white/[0.08]">
          
          {/* Column 1: Identity & Professional Status (6 cols) */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-black font-black text-sm shadow-md shadow-amber-500/20">
                F
              </span>
              <h3 className="text-xl font-black text-white tracking-tight">
                {personalInfo.name}
              </h3>
            </div>

            <p className="text-xs font-mono text-[#D4AF37] uppercase tracking-wider">
              {personalInfo.role}
            </p>

            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              Building reliable web software, localized pricing platforms, and teaching foundational programming in Bangladesh.
            </p>

            {/* Availability Status Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-mono text-emerald-400 bg-emerald-950/40 border border-emerald-500/30">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>Available for Full-Time Roles &amp; Engineering Projects</span>
            </div>
          </div>

          {/* Column 2: Quick Jump Navigation (3 cols) */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs font-mono font-semibold uppercase tracking-widest text-[#D4AF37]">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="hover:text-white transition-colors duration-200 inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Social & Agency Presence (3 cols) */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs font-mono font-semibold uppercase tracking-widest text-[#D4AF37]">
              Connect &amp; Follow
            </h4>
            <ul className="space-y-2.5 text-sm">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <li key={social.name}>
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 hover:text-white transition-colors duration-200 group"
                    >
                      <Icon className="w-4 h-4 text-slate-500 group-hover:text-amber-400 transition-colors" />
                      <span>{social.name}</span>
                    </a>
                  </li>
                );
              })}
            </ul>

            <div className="pt-2 text-xs font-mono text-slate-500">
              <span>📍 {personalInfo.location}</span>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Back to Top Button */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <p className="flex items-center gap-1.5 text-center sm:text-left">
            <span>© {currentYear} {personalInfo.name}. Built with</span>
            <span className="text-amber-400">Next.js &amp; Tailwind</span>
          </p>

          <button
            onClick={scrollToTop}
            type="button"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0B1120] border border-white/10 hover:border-amber-400/40 text-slate-300 hover:text-white transition-all duration-300 group shadow-sm"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform text-amber-400" />
          </button>
        </div>

      </Container>
    </footer>
  );
}
