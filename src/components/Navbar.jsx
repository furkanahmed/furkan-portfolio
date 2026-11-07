"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, FileText, Send, Sparkles } from "lucide-react";
import { personalInfo } from "@/data/portfolioData";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [hoveredSection, setHoveredSection] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ["about", "skills", "education", "experience", "projects", "contact"];
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el) {
          const rect = el.getBoundingClientRect();
          const top = rect.top + window.scrollY;
          if (scrollPosition >= top) {
            setActiveSection(sections[i]);
            return;
          }
        }
      }

      if (window.scrollY < 200) {
        setActiveSection("");
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "/#about", id: "about" },
    { name: "Skills", href: "/#skills", id: "skills" },
    { name: "Education", href: "/#education", id: "education" },
    { name: "Experience", href: "/#experience", id: "experience" },
    { name: "Projects", href: "/#projects", id: "projects" },
    { name: "Contact", href: "/#contact", id: "contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0B0F19]/80 backdrop-blur-xl border-b border-white/[0.08] py-3 shadow-[0_4px_30px_rgba(0,0,0,0.4)]"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo with Ambient Glow */}
          <Link
            href="/"
            className="flex items-center gap-3 group focus:outline-none"
          >
            <div className="relative flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-br from-sky-400/20 via-indigo-500/10 to-transparent border border-sky-500/30 group-hover:border-sky-400 group-hover:shadow-[0_0_15px_rgba(56,189,248,0.25)] transition-all duration-300">
              <span className="text-base font-black text-sky-400 group-hover:text-white transition-colors">F</span>
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-emerald-400 ring-2 ring-[#0B0F19] shadow-[0_0_8px_rgba(52,211,153,0.8)]"></span>
            </div>
            <div className="flex flex-col">
              <span className="text-lg sm:text-xl font-bold text-white tracking-tight group-hover:text-sky-300 transition-colors flex items-center gap-1.5">
                {personalInfo.name}
              </span>
              <span className="text-[11px] uppercase font-semibold tracking-wider text-slate-400 -mt-0.5">
                Full-Stack Dev
              </span>
            </div>
          </Link>

          {/* Desktop Navigation - Magnetic Floating Pill with Framer Motion Layout Animation */}
          <nav 
            onMouseLeave={() => setHoveredSection(null)}
            className="hidden lg:flex items-center gap-1 p-1 rounded-full bg-slate-900/70 border border-white/[0.08] backdrop-blur-2xl shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),0_8px_25px_rgba(0,0,0,0.4)]"
          >
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              const isHovered = hoveredSection === link.id;

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onMouseEnter={() => setHoveredSection(link.id)}
                  className={`text-sm tracking-wide px-4 py-2 rounded-full transition-colors duration-200 relative select-none ${
                    isActive ? "text-white font-semibold" : "text-slate-400 hover:text-slate-200 font-medium"
                  }`}
                >
                  {/* Active Floating Pill Background (Spring Motion) */}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      className="absolute inset-0 rounded-full bg-gradient-to-r from-sky-500/20 via-indigo-500/20 to-sky-500/10 border border-sky-400/40 shadow-[0_0_20px_rgba(56,189,248,0.25),inset_0_1px_1px_rgba(255,255,255,0.4)]"
                    />
                  )}

                  {/* Hover Floating Glow Background */}
                  {!isActive && isHovered && (
                    <motion.div
                      layoutId="hoverNavIndicator"
                      transition={{ type: "spring", stiffness: 350, damping: 28 }}
                      className="absolute inset-0 rounded-full bg-white/[0.06] border border-white/[0.08]"
                    />
                  )}

                  <span className="relative z-10 flex items-center gap-1.5">
                    {link.name}
                    {isActive && (
                      <span className="w-1.5 h-1.5 rounded-full bg-sky-400 shadow-[0_0_6px_rgba(56,189,248,1)]"></span>
                    )}
                  </span>
                </Link>
              );
            })}
          </nav>

          {/* Action Buttons: Resume + Contact */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="/resume.pdf"
              download="Furkan_Ahmed_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold text-slate-300 hover:text-white bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 hover:border-slate-600 transition-all duration-200 hover:shadow-lg"
            >
              <FileText className="w-4 h-4 text-sky-400 group-hover:scale-110 transition-transform" />
              <span>Resume</span>
            </a>

            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-semibold bg-gradient-to-r from-sky-400 via-sky-300 to-indigo-400 text-slate-950 hover:opacity-95 hover:shadow-[0_0_25px_rgba(56,189,248,0.45)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Hire Me</span>
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2.5 rounded-xl bg-slate-900/80 border border-white/10 text-slate-300 hover:text-white hover:bg-slate-800 focus:outline-none transition-colors"
              aria-expanded={isOpen}
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="w-5 h-5 text-sky-400" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden bg-[#0B0F19]/98 border-b border-white/10 backdrop-blur-2xl px-5 pt-4 pb-6 shadow-2xl"
          >
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`text-sm font-medium px-4 py-2.5 rounded-xl transition-all flex items-center justify-between ${
                    activeSection === link.id
                      ? "text-sky-300 bg-sky-500/10 border border-sky-500/20 font-semibold"
                      : "text-slate-400 hover:text-white hover:bg-white/[0.04]"
                  }`}
                >
                  <span>{link.name}</span>
                  {activeSection === link.id && <Sparkles className="w-3.5 h-3.5 text-sky-400" />}
                </Link>
              ))}

              <div className="pt-4 mt-2 border-t border-white/10 grid grid-cols-2 gap-2">
                <a
                  href="/resume.pdf"
                  download="Furkan_Ahmed_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsOpen(false)}
                  className="inline-flex items-center justify-center gap-1.5 py-2.5 rounded-xl text-xs font-semibold text-slate-200 bg-slate-900 border border-slate-700 hover:bg-slate-800 transition-colors"
                >
                  <FileText className="w-3.5 h-3.5 text-sky-400" />
                  <span>Resume</span>
                </a>

                <Link
                  href="/#contact"
                  onClick={() => setIsOpen(false)}
                  className="inline-flex items-center justify-center gap-1.5 py-2.5 rounded-xl text-xs font-semibold bg-gradient-to-r from-sky-400 to-indigo-500 text-slate-950 hover:opacity-95 transition-opacity"
                >
                  <Send className="w-3 h-3" />
                  <span>Hire Me</span>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
