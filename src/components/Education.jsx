"use client";

import { 
  GraduationCap, 
  Building2, 
  Calendar,
  Award,
  Binary,
  Database,
  Code2
} from "lucide-react";
import { educationData } from "@/data/educationData";

export default function Education() {
  const getIconForCategory = (idx) => {
    switch (idx) {
      case 0: return GraduationCap;
      case 1: return Binary;
      case 2: return Database;
      default: return Code2;
    }
  };

  return (
    <section id="education" className="py-24 sm:py-32 relative overflow-x-clip bg-black text-[#E8DFD8]">
      {/* Subtle Cinematic Ambient Light */}
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[260px] sm:w-[380px] md:w-[500px] h-[260px] sm:h-[380px] md:h-[500px] bg-gradient-to-tr from-amber-500/10 via-[#D4AF37]/5 to-transparent blur-[110px] sm:blur-[160px] pointer-events-none -z-10 max-w-full" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full max-w-full box-border">
        
        {/* Simple & Clean Section Header */}
        <div className="mb-14 space-y-3 w-full max-w-full box-border">
          <div className="inline-flex max-w-full items-center gap-2 px-3 sm:px-3.5 py-1 rounded-full text-[10px] sm:text-xs font-mono tracking-[0.14em] sm:tracking-[0.2em] uppercase text-amber-400 bg-amber-500/[0.08] border border-amber-500/30 [overflow-wrap:anywhere]">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0"></span>
            <span className="break-words">CHAPTER 03 &bull; EDUCATION</span>
          </div>

          <h2 className="text-[clamp(1.9rem,6.5vw,3rem)] font-black uppercase tracking-tight text-white font-sans [overflow-wrap:anywhere] break-words">
            Educational Background
          </h2>
        </div>

        {/* Crisp, Direct, No-Fluff Education Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {educationData.map((edu, idx) => {
            const Icon = getIconForCategory(idx);

            return (
              <div
                key={edu.degree}
                className="p-6 sm:p-7 rounded-2xl bg-gradient-to-br from-slate-900/90 via-slate-950 to-black border border-white/[0.10] hover:border-amber-500/40 transition-all duration-300 shadow-xl flex flex-col justify-between group"
              >
                <div>
                  {/* Top Row: Icon + Passing Year + Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
                      <Icon className="w-5 h-5" />
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono text-slate-400 flex items-center gap-1.5 bg-white/[0.04] px-2.5 py-1 rounded-md border border-white/[0.06]">
                        <Calendar className="w-3.5 h-3.5 text-amber-400/80" />
                        {edu.timeline}
                      </span>
                      <span className={`text-[11px] font-mono font-semibold px-2.5 py-1 rounded-md border ${
                        edu.statusBadge === "In Progress"
                          ? "text-amber-400 bg-amber-500/10 border-amber-500/20"
                          : "text-emerald-400 bg-emerald-500/10 border-emerald-500/20"
                      }`}>
                        {edu.statusBadge}
                      </span>
                    </div>
                  </div>

                  {/* Degree Name */}
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-1.5 leading-snug group-hover:text-amber-200 transition-colors">
                    {edu.degree}
                  </h3>

                  {/* Focus / Subject */}
                  <p className="text-sm text-amber-400/90 font-medium mb-3">
                    {edu.specialization}
                  </p>
                </div>

                {/* Institute Name (Bottom) */}
                <div className="pt-4 border-t border-white/[0.08] flex items-center gap-2 text-xs sm:text-sm text-slate-300 font-medium">
                  <Building2 className="w-4 h-4 text-slate-400 shrink-0" />
                  <span className="truncate">{edu.institute}</span>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
