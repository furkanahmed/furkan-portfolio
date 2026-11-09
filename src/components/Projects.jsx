"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ExternalLink, Lock } from "lucide-react";
import { projectsData } from "@/data/portfolioData";
import Container from "@/components/Container";

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

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-20 sm:py-32 relative bg-black text-[#E8DFD8]"
    >
      {/* Golden Amber Background Glow - Same as About, Skills & Experience */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] sm:w-[500px] md:w-[55rem] h-[320px] sm:h-[500px] md:h-[55rem] max-w-full bg-[#D4AF37]/[0.03] rounded-full blur-[120px] sm:blur-[180px] pointer-events-none -z-10" />

      <Container className="relative z-10">
        
        {/* Section Header - Exactly matched with About/Skills/Experience */}
        <div className="max-w-3xl mb-14 sm:mb-20 space-y-4 w-full max-w-full box-border">
          <div className="inline-flex max-w-full items-center gap-2 sm:gap-2.5 px-3 sm:px-4 py-1.5 rounded-full text-[10px] sm:text-xs font-mono tracking-[0.14em] sm:tracking-[0.25em] uppercase text-amber-400 bg-amber-500/[0.08] border border-amber-500/30 [overflow-wrap:anywhere]">
            <span className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-amber-400 animate-pulse shrink-0"></span>
            <span className="break-words">CHAPTER 05 &bull; FEATURED WORK</span>
          </div>

          <h2 className="text-[clamp(2.2rem,8vw,3.75rem)] font-black uppercase tracking-tight text-white leading-tight font-sans [overflow-wrap:anywhere] break-words">
            Real products, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-[#D4AF37] to-amber-500">
              engineered to perform.
            </span>
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-slate-300 font-normal leading-relaxed [overflow-wrap:anywhere]">
            Real-world web applications, localized pricing engines, and multi-tenant platforms built with clean, modern full-stack architectures.
          </p>
        </div>

        {/* Pure CSS Sticky Card Stacking Container - Zero parent overflow */}
        <div className="relative w-full pb-32">
          {projectsData.map((project, index) => {
            const isLive =
              project.status.includes("Live") ||
              project.status.includes("Completed");

            return (
              <div
                key={project.id}
                className="card-wrap w-full [position:sticky] [margin-bottom:20vh] sm:[margin-bottom:40vh] will-change-transform group/card"
                style={{
                  top: `calc(100px + ${index} * 24px)`,
                  zIndex: index + 1,
                }}
              >
                {/* 
                  100% Solid Card Shell:
                  - Background: 100% solid #0B1120 (slate-950) without any alpha/transparency.
                  - Zero opacity, zero backdrop-filter bleed-through.
                  - Depth shadow matching theme.
                */}
                <div className="card-body relative rounded-3xl bg-[#0B1120] border border-white/[0.12] hover:border-amber-500/40 shadow-[0_30px_70px_-15px_rgba(0,0,0,0.95)] overflow-hidden transition-all duration-300 will-change-transform [view-timeline-name:--card-view] [@supports(animation-timeline:view())]:[animation:card-stack-scale_linear_both] [@supports(animation-timeline:view())]:[animation-timeline:--card-view] [@supports(animation-timeline:view())]:[animation-range:exit_0%_exit_100%] group">
                  
                  {/* Top subtle highlight border for clear edge separation */}
                  <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/[0.15] to-transparent pointer-events-none" />

                  {/* Subtle Ambient Hover Glow */}
                  <div className="absolute top-0 right-0 w-72 h-72 bg-amber-500/10 rounded-full blur-3xl pointer-events-none group-hover:scale-125 transition-transform duration-700" />

                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch bg-[#0B1120]">
                    
                    {/* Left Column: Details & Actions (100% solid #0B1120) */}
                    <div className="p-7 sm:p-9 lg:p-11 lg:col-span-7 flex flex-col justify-between space-y-7 relative z-10 bg-[#0B1120]">
                      <div className="space-y-5">
                        
                        {/* Top Badges Row */}
                        <div className="flex flex-wrap items-center gap-3">
                          <span className="font-mono text-xs font-semibold px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/25">
                            PROJ &bull; 0{index + 1}
                          </span>

                          <span
                            className={`px-3 py-1 rounded-full text-xs font-semibold border inline-flex items-center gap-1.5 ${
                              isLive
                                ? "text-emerald-400 bg-emerald-950 border-emerald-500/30"
                                : "text-amber-400 bg-amber-950 border-amber-500/30"
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
                          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight group-hover:text-amber-300 transition-colors duration-300">
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
                                className="px-3 py-1 rounded-lg text-xs font-mono font-medium text-slate-300 bg-[#151D30] border border-white/10 group-hover:border-amber-500/20 transition-colors duration-300"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Action Links & Footer Area */}
                      <div className="pt-6 border-t border-white/[0.08] flex flex-wrap items-center justify-between gap-4">
                        {/* View Details Link */}
                        <Link
                          href={`/projects/${project.id}`}
                          className="inline-flex items-center gap-2 text-sm font-semibold bg-white/10 hover:bg-[#D4AF37] text-white hover:text-black px-6 py-2.5 rounded-full transition-all duration-300 group/btn shadow-md border border-white/10 hover:border-amber-400"
                        >
                          <span>Case Study & Details</span>
                          <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform duration-300" />
                        </Link>

                        {/* External Demo & GitHub Links */}
                        <div className="flex items-center gap-3">
                          {project.liveLink && (
                            <a
                              href={project.liveLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-semibold bg-amber-500/10 hover:bg-amber-500/20 text-amber-300 border border-amber-500/25 transition-colors duration-300"
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
                              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-semibold bg-[#151D30] hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 transition-colors duration-300"
                            >
                              <GithubIcon className="w-3.5 h-3.5" />
                              <span>Source Code</span>
                            </a>
                          ) : (
                            <span
                              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-semibold bg-[#151D30] text-slate-500 border border-white/5 cursor-not-allowed"
                              title="Client / Proprietary Codebase"
                            >
                              <Lock className="w-3.5 h-3.5" />
                              <span>Private Code</span>
                            </span>
                          )}
                        </div>
                      </div>

                    </div>

                    {/* Right Column: Project Preview Image with 100% Solid Background & Clean Edge */}
                    <div className="relative min-h-[280px] sm:min-h-[360px] lg:min-h-full lg:col-span-5 bg-[#070B14] border-t lg:border-t-0 lg:border-l border-white/[0.10] overflow-hidden flex items-center justify-center">
                      <Image
                        src={project.image}
                        alt={`${project.name} Preview`}
                        fill
                        sizes="(max-width: 1024px) 100vw, 40vw"
                        className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-105"
                      />

                      {/* Solid edge vignette without transparent leaking */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#070B14]/80 via-transparent to-transparent lg:bg-gradient-to-l lg:from-transparent lg:to-[#070B14]/40 pointer-events-none" />
                    </div>

                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </Container>

      {/* Pure CSS Animation Keyframes for native scale & dim support */}
      <style jsx global>{`
        @keyframes card-stack-scale {
          to {
            transform: scale(0.96);
            filter: brightness(0.7);
          }
        }
      `}</style>
    </section>
  );
}
