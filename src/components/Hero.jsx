"use client";

import { useState } from "react";
import Image from "next/image";
import { 
  Download, 
  ArrowRight, 
  Mail, 
  Globe, 
  MapPin, 
  Briefcase,
  Check,
  Copy
} from "lucide-react";
import { personalInfo } from "@/data/portfolioData";

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

export default function Hero() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const socialLinks = [
    { name: "GitHub", href: personalInfo.github, icon: GithubIcon },
    { name: "LinkedIn", href: personalInfo.linkedin, icon: LinkedinIcon },
    { name: "Website", href: personalInfo.website, icon: Globe },
  ];

  return (
    <section className="relative pt-32 pb-20 sm:pt-36 sm:pb-28 overflow-hidden">
      {/* Subtle ambient light glows */}
      <div className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-sky-500/10 blur-[130px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-1/4 w-[450px] h-[350px] bg-indigo-500/10 blur-[140px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Ultra-clean, punchy, standard presentation */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-5">
            
            {/* Minimal Status Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Available for projects &amp; training</span>
            </div>

            {/* Powerful, Clean Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.12]">
              Crafting Clean Code, <br />
              Building{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-sky-300 to-indigo-400">
                Real Impact.
              </span>
            </h1>

            {/* Concise Subtitle (Short & Standard) */}
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0 font-normal">
              <span className="text-white font-semibold">{personalInfo.name}</span> — Full-stack developer building modern, responsive web applications with a focus on simplicity, speed, and clean architecture.
            </p>

            {/* Action Buttons: Clean & Pro */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-1">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold bg-gradient-to-r from-sky-500 to-indigo-600 text-white shadow-lg shadow-sky-500/25 hover:shadow-sky-500/40 hover:opacity-95 transition-all duration-200"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={personalInfo.resumeUrl}
                download="Furkan-Ahmed-Resume.pdf"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-sm font-medium bg-slate-900/90 text-slate-300 border border-slate-800 hover:bg-slate-800 hover:text-white hover:border-slate-700 transition-all duration-200 shadow-sm"
              >
                <Download className="w-4 h-4 text-sky-400" />
                <span>Resume</span>
              </a>
            </div>

            {/* Minimal Quick Connect Bar (Inspired by reference) */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <div className="flex items-center p-1 rounded-full bg-slate-900/90 border border-slate-800 shadow-inner w-full max-w-xs sm:max-w-sm">
                <div className="flex items-center gap-2 px-3 py-1 text-xs text-slate-400 flex-1 truncate font-mono">
                  <Mail className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                  <span className="truncate">{personalInfo.email}</span>
                </div>
                <button
                  onClick={handleCopyEmail}
                  type="button"
                  className="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-sky-500 hover:bg-sky-400 text-white flex items-center gap-1.5 transition-colors shrink-0 shadow-sm"
                  title="Copy email to clipboard"
                >
                  {copied ? (
                    <>
                      <Check className="w-3 h-3" />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3" />
                      <span>Connect</span>
                    </>
                  )}
                </button>
              </div>

              {/* Minimal Social Icons */}
              <div className="flex items-center gap-2">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-full bg-slate-900/70 border border-slate-800 text-slate-400 hover:text-sky-400 hover:border-sky-500/40 hover:bg-slate-800/80 transition-all duration-200"
                      aria-label={`Visit Furkan's ${social.name}`}
                      title={social.name}
                    >
                      <Icon className="w-4 h-4" />
                    </a>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Right Column: World-Class Clean Portrait Presentation */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm sm:max-w-md group">
              
              {/* Subtle accent halo */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-sky-500/20 via-indigo-500/20 to-sky-400/10 blur-xl opacity-70 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Main Photo Frame */}
              <div className="relative rounded-3xl overflow-hidden bg-slate-900 border border-slate-800/80 shadow-2xl">
                <div className="relative aspect-[4/5] w-full overflow-hidden bg-slate-950">
                  <Image
                    src={personalInfo.avatarUrl}
                    alt="Furkan Ahmed - Full-Stack Developer & IT Instructor"
                    fill
                    sizes="(max-width: 768px) 100vw, 420px"
                    className="object-cover object-top filter contrast-[1.02] brightness-95 group-hover:scale-[1.02] transition-transform duration-500"
                    priority
                  />
                  {/* Subtle inner dark vignette at bottom */}
                  <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#0B0F19] via-[#0B0F19]/40 to-transparent pointer-events-none"></div>
                </div>

                {/* Single minimalist floating pill */}
                <div className="absolute bottom-4 inset-x-4 p-3 rounded-2xl bg-slate-900/85 backdrop-blur-md border border-slate-800/90 flex items-center justify-between shadow-xl">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-sky-500/15 border border-sky-500/30 flex items-center justify-center text-sky-400">
                      <Briefcase className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-white leading-tight">Co-Founder &amp; Instructor</p>
                      <p className="text-[11px] text-slate-400">Dremoy IT • Since 2024</p>
                    </div>
                  </div>
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 shadow-sm shadow-emerald-400/50" title="Active"></span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
