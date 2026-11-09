"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, CheckCircle2, Building2, Calendar } from "lucide-react";
import { experienceData } from "@/data/experienceData";
import Container from "@/components/Container";

export default function Experience() {
  const timelineTrackRef = useRef(null);

  // Measure scroll specifically relative to the timeline nodes container
  const { scrollYProgress } = useScroll({
    target: timelineTrackRef,
    offset: ["start 70%", "end 80%"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section
      id="experience"
      className="py-20 sm:py-32 relative overflow-x-clip bg-black text-[#E8DFD8]"
    >
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[450px] md:w-[45rem] h-[300px] sm:h-[450px] md:h-[45rem] bg-[#D4AF37]/[0.03] rounded-full blur-[110px] sm:blur-[160px] pointer-events-none -z-10 max-w-full" />

      <Container className="relative z-10">
        
        {/* Section Header - Perfectly Balanced */}
        <div className="max-w-3xl mb-14 sm:mb-20 space-y-4 w-full max-w-full box-border">
          <div className="inline-flex max-w-full items-center gap-2 sm:gap-2.5 px-3 sm:px-4 py-1.5 rounded-full text-[10px] sm:text-xs font-mono tracking-[0.14em] sm:tracking-[0.25em] uppercase text-amber-400 bg-amber-500/[0.08] border border-amber-500/30 [overflow-wrap:anywhere]">
            <span className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-amber-400 animate-pulse shrink-0"></span>
            <span className="break-words">CHAPTER 04 &bull; CAREER TIMELINE</span>
          </div>

          <h2 className="text-[clamp(2.1rem,7.5vw,3.75rem)] font-black uppercase tracking-tight text-white leading-tight font-sans [overflow-wrap:anywhere] break-words">
            Practical execution, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-[#D4AF37] to-amber-500">
              classroom leadership.
            </span>
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-slate-300 font-normal leading-relaxed [overflow-wrap:anywhere]">
            A track record spanning full-stack software development, production VPS deployments, and foundational coding education.
          </p>
        </div>

        {/* Minimalist Route Map Timeline - Polished & Structured */}
        <div ref={timelineTrackRef} className="relative w-full max-w-full box-border">
          
          {/* Inactive Background Track Line (Starts right from Center of Node 1 to Node 3) */}
          <div className="absolute left-[16px] sm:left-[20px] md:left-[210px] top-[26px] bottom-10 w-[2px] bg-slate-800/80 rounded-full" />
          
          {/* Ultra-Visible Animated Gold Laser Beam (Anchored from 0px at Node 1) */}
          <motion.div
            style={{ height: lineHeight }}
            className="absolute left-[16px] sm:left-[20px] md:left-[210px] top-[26px] max-h-[calc(100%-60px)] w-[3px] bg-gradient-to-b from-[#FFF0D4] via-[#D4AF37] to-[#F59E0B] shadow-[0_0_15px_rgba(212,175,55,1),0_0_30px_rgba(245,158,11,0.6)] origin-top rounded-full z-10 pointer-events-none"
          >
            {/* Glowing Traveling Spark Head at the tip of the line */}
            <div className="absolute -bottom-1.5 -left-[4.5px] w-3 h-3 rounded-full bg-white shadow-[0_0_12px_#FFF,0_0_20px_#D4AF37] animate-pulse" />
          </motion.div>

          <div className="space-y-16">
            {experienceData.map((exp, idx) => (
              <motion.div
                key={exp.role + exp.organization}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="relative flex flex-col md:flex-row items-start group w-full max-w-full box-border min-w-0"
              >
                {/* Desktop Timeline Pillar (Left side - 210px) */}
                <div className="hidden md:flex flex-col items-end w-[210px] shrink-0 pr-10 pt-1 text-right">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold tracking-wider text-amber-400 bg-amber-500/10 border border-amber-500/20 group-hover:border-amber-400/50 transition-colors">
                    <Calendar className="w-3.5 h-3.5" />
                    {exp.period}
                  </span>
                  <span className="text-[11px] font-mono uppercase tracking-widest text-slate-500 mt-2">
                    {exp.category}
                  </span>
                </div>

                {/* Route Node (Interactive Glowing Pulse Center - Exactly at top 26px) */}
                <div className="absolute left-[16px] sm:left-[20px] md:left-[210px] top-[26px] -translate-x-1/2 -translate-y-1/2 flex items-center justify-center z-20">
                  <div className="absolute w-8 sm:w-10 h-8 sm:h-10 rounded-full border border-amber-400/20 group-hover:border-amber-400/80 group-hover:scale-150 transition-all duration-500 ease-out" />
                  <div className="w-3.5 sm:w-4 h-3.5 sm:h-4 rounded-full bg-[#120F0C] border-2 border-amber-500 group-hover:bg-amber-400 group-hover:shadow-[0_0_20px_#D4AF37] transition-all duration-300" />
                </div>

                {/* Content Card (Right of Track) */}
                <div className="ml-9 sm:ml-12 md:ml-12 pl-1 sm:pl-2 flex-1 w-full max-w-full box-border min-w-0">
                  
                  {/* Mobile Timeline Tag */}
                  <div className="md:hidden flex items-center gap-2 mb-2">
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] sm:text-xs font-mono font-semibold text-amber-400 bg-amber-500/10 border border-amber-500/20">
                      <Calendar className="w-3 h-3" />
                      {exp.period}
                    </span>
                    <span className="text-[10px] sm:text-[11px] font-mono uppercase text-slate-500">
                      {exp.category}
                    </span>
                  </div>

                  {/* Polished Glass Capsule Container */}
                  <div className="p-5 sm:p-7 md:p-9 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-slate-900/80 via-slate-950 to-black border border-white/[0.10] group-hover:border-amber-500/40 transition-all duration-300 shadow-xl w-full max-w-full box-border min-w-0">
                    
                    {/* Header: Role & Organization */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-5 mb-5 border-b border-white/[0.08]">
                      <div>
                        <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-amber-200 transition-colors leading-tight">
                          {exp.role}
                        </h3>
                        
                        <div className="flex items-center gap-2 mt-1.5 text-sm sm:text-base font-medium">
                          <Building2 className="w-4 h-4 text-amber-400/80 shrink-0" />
                          {exp.url ? (
                            <a
                              href={exp.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-amber-300 hover:text-white underline underline-offset-4 decoration-amber-400/40 inline-flex items-center gap-1 transition-colors"
                            >
                              <span>{exp.organization}</span>
                              <ArrowUpRight className="w-3.5 h-3.5 text-amber-400" />
                            </a>
                          ) : (
                            <span className="text-slate-300">{exp.organization}</span>
                          )}
                        </div>
                      </div>

                      <span className="text-xs font-mono text-slate-500 shrink-0">
                        Role #0{idx + 1}
                      </span>
                    </div>

                    {/* Responsibilities List with Clear Typographic Hierarchy */}
                    <div className="space-y-3">
                      {exp.responsibilities.map((resp, i) => (
                        <div key={i} className="flex items-start gap-3 text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
                          <CheckCircle2 className="w-5 h-5 text-amber-400/80 shrink-0 mt-0.5" />
                          <span>{resp}</span>
                        </div>
                      ))}
                    </div>

                  </div>

                </div>
              </motion.div>
            ))}
          </div>

        </div>

      </Container>
    </section>
  );
}
