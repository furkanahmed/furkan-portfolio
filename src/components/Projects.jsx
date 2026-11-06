"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, ExternalLink, Lock } from "lucide-react";
import { projectsData } from "@/data/portfolioData";

function GithubIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="15"
      height="15"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
    </svg>
  );
}

function ProjectStackCard({ project, index, total }) {
  const cardRef = useRef(null);

  // Track the scroll of each individual card in relation to the viewport
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "start 100px"],
  });

  // Smooth entrance scale while keeping 100% solid opacity
  const scale = useTransform(scrollYProgress, [0, 1], [0.95, 1]);

  const isLive =
    project.status.includes("Live") || project.status.includes("Completed");

  // Dynamic sticky top offset creating the visible layered file/card stack at the top
  const topOffset = 88 + index * 24;

  return (
    <div
      ref={cardRef}
      className="sticky will-change-transform mb-24 sm:mb-32"
      style={{
        top: `${topOffset}px`,
        zIndex: index + 1,
      }}
    >
      <motion.div
        style={{ scale }}
        transition={{ ease: [0.16, 1, 0.3, 1], duration: 0.4 }}
        className="rounded-3xl bg-[#080C14] border border-white/15 hover:border-amber-500/40 transition-colors duration-300 shadow-[0_20px_50px_rgba(0,0,0,0.95)] relative overflow-hidden group"
      >
        {/* Top subtle highlight border for clear edge separation */}
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none" />

        {/* Subtle Ambient Hover Glow */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/5 rounded-full blur-3xl pointer-events-none group-hover:bg-amber-500/10 group-hover:scale-125 transition-all duration-700" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch">
          
          {/* Left Column: Details & Actions */}
          <div className="p-7 sm:p-9 lg:p-11 lg:col-span-7 flex flex-col justify-between space-y-7 relative z-10 bg-[#080C14]">
            <div className="space-y-5">
              
              {/* Top Badges Row */}
              <div className="flex flex-wrap items-center gap-3">
                <span className="font-mono text-xs font-semibold px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/25">
                  PROJ &bull; 0{index + 1}
                </span>

                <span
                  className={`px-3 py-1 rounded-full text-xs font-semibold border backdrop-blur-md inline-flex items-center gap-1.5 ${
                    isLive
                      ? "text-emerald-400 bg-emerald-950/60 border-emerald-500/30"
                      : "text-amber-400 bg-amber-950/60 border-amber-500/30"
                  }`}
                >
                  <span
                    className={`w-1.5 h-1.5 rounded-full ${
                      isLive ? "bg-emerald-400" : "bg-amber-400"
                    }`}
                  />
                  {project.status}
                </span>
              </div>

              {/* Project Title & Tagline */}
              <div>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight group-hover:text-amber-300 transition-colors">
                  {project.name}
                </h3>
                <p className="text-xs sm:text-sm font-mono tracking-wider text-amber-400/90 uppercase mt-1.5">
                  {project.tagline}
                </p>
              </div>

              {/* Description */}
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                {project.description}
              </p>

              {/* Tech Stack Chips */}
              <div className="pt-2">
                <div className="text-[11px] font-mono text-slate-400 uppercase tracking-widest mb-2.5">
                  STACK & ARCHITECTURE
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-lg text-xs font-mono font-medium text-slate-300 bg-white/[0.05] border border-white/10 group-hover:border-amber-500/20 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Action Links & Footer Area */}
            <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
              {/* View Details Link */}
              <Link
                href={`/projects/${project.id}`}
                className="inline-flex items-center gap-2 text-sm font-semibold bg-white/10 hover:bg-[#D4AF37] text-white hover:text-black px-6 py-2.5 rounded-full transition-all duration-300 group/btn shadow-md border border-white/10 hover:border-amber-400"
              >
                <span>Case Study & Details</span>
                <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
              </Link>

              {/* External Demo & GitHub Links */}
              <div className="flex items-center gap-3">
                {project.liveLink && (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-semibold bg-amber-500/10 hover:bg-amber-500/20 text-amber-300 border border-amber-500/25 transition-colors"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>Live Demo</span>
                  </a>
                )}

                {project.githubLink ? (
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-semibold bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 transition-colors"
                  >
                    <GithubIcon className="w-3.5 h-3.5" />
                    <span>Source Code</span>
                  </a>
                ) : (
                  <span
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-semibold bg-white/5 text-slate-500 border border-white/5 cursor-not-allowed"
                    title="Client / Proprietary Codebase"
                  >
                    <Lock className="w-3.5 h-3.5" />
                    <span>Private Code</span>
                  </span>
                )}
              </div>
            </div>

          </div>

          {/* Right Column: Project Preview Image */}
          <div className="relative min-h-[280px] sm:min-h-[360px] lg:min-h-full lg:col-span-5 bg-slate-950 border-t lg:border-t-0 lg:border-l border-white/10 overflow-hidden flex items-center justify-center">
            <Image
              src={project.image}
              alt={`${project.name} Preview`}
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
            />

            {/* Harmonized Subtle Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#080C14]/90 via-transparent to-[#080C14]/20 lg:bg-gradient-to-l lg:from-transparent lg:to-[#080C14]/60 pointer-events-none" />
          </div>

        </div>
      </motion.div>
    </div>
  );
}

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-28 sm:py-36 relative bg-black text-[#E8DFD8]"
    >
      {/* Cinematic Golden Amber Glow Matching Site Theme */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[55rem] h-[55rem] bg-[#D4AF37]/[0.03] rounded-full blur-[180px] pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        
        {/* Section Header - Harmonized with About, Skills & Experience */}
        <div className="max-w-3xl mb-20 space-y-4">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full text-xs font-mono tracking-[0.25em] uppercase text-amber-400 bg-amber-500/[0.08] border border-amber-500/30">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
            <span>CHAPTER 05 &bull; FEATURED WORK</span>
          </div>

          <h2 className="text-4xl sm:text-6xl font-black uppercase tracking-tight text-white leading-tight font-sans">
            Real products, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-[#D4AF37] to-amber-500">
              engineered to perform.
            </span>
          </h2>

          <p className="text-lg sm:text-xl text-slate-300 font-normal leading-relaxed">
            Real-world web applications, localized pricing engines, and multi-tenant platforms built with clean, modern full-stack architectures.
          </p>
        </div>

        {/* Cinematic Sticky Card Stacking Container */}
        <div className="relative pb-40">
          {projectsData.map((project, index) => (
            <ProjectStackCard
              key={project.id}
              project={project}
              index={index}
              total={projectsData.length}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
