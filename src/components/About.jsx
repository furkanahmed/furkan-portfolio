"use client";

import { 
  Target, 
  TrendingUp, 
  Lightbulb, 
  Heart,
  ArrowUpRight
} from "lucide-react";
import { personalInfo } from "@/data/portfolioData";

export default function About() {
  return (
    <section id="about" className="py-28 sm:py-36 relative overflow-hidden bg-black text-[#E8DFD8]">
      {/* Cinematic Golden Amber Ambient Lights */}
      <div className="absolute top-1/3 left-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-amber-500/10 via-[#D4AF37]/5 to-transparent blur-[170px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header - Bold, Large & Cinematic */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full text-xs font-mono tracking-[0.25em] uppercase text-amber-400 bg-amber-500/[0.08] border border-amber-500/30">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
            <span>CHAPTER 01 &bull; ABOUT ME</span>
          </div>
          
          <h2 className="text-4xl sm:text-6xl font-black uppercase tracking-tight text-white leading-tight font-sans">
            Built on logic, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-[#D4AF37] to-amber-500">
              driven by genuine impact.
            </span>
          </h2>
          
          <div className="space-y-3 pt-2">
            {personalInfo.bio.map((paragraph, index) => (
              <p key={index} className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        {/* Premium Bento Grid - High Readability & Large Typography */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* Card 1: Problem-Solving Mindset (8 Cols) */}
          <div className="md:col-span-8 p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-slate-900/90 via-slate-950 to-black border border-white/[0.12] hover:border-amber-500/40 transition-all duration-300 shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-72 h-72 bg-amber-500/10 rounded-full blur-3xl pointer-events-none group-hover:scale-125 transition-transform duration-700" />
            
            <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 mb-6 shadow-inner">
              <Lightbulb className="w-6 h-6" />
            </div>

            <p className="text-xs font-mono uppercase tracking-[0.25em] text-amber-400/90 mb-2">
              01 &bull; Practical Problem Solver
            </p>

            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 leading-snug">
              Breaking down complex logic into clean, workable solutions.
            </h3>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              Whether building an automated grocery price tracker or managing multi-user school ERP portals, I approach engineering with a first-principles mindset. I listen, identify the core bottleneck, and craft clean, performant React and Next.js applications that people love to use every day.
            </p>
          </div>

          {/* Card 2: Contribute to Company's Success (4 Cols) */}
          <div className="md:col-span-4 p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-slate-900/90 via-slate-950 to-black border border-white/[0.12] hover:border-amber-500/40 transition-all duration-300 shadow-2xl flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-6 shadow-inner">
                <TrendingUp className="w-6 h-6" />
              </div>

              <p className="text-xs font-mono uppercase tracking-[0.25em] text-emerald-400 mb-2">
                02 &bull; Real Business Value
              </p>

              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                Team Commitment
              </h3>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
                I take complete ownership of every feature I build—ensuring cross-browser stability, fast load times, and maintainable code that directly accelerates company objectives.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-white/[0.08] flex items-center justify-between text-xs font-mono text-slate-400">
              <span>Execution</span>
              <span className="text-emerald-400 font-semibold">Reliable &bull; Fast</span>
            </div>
          </div>

          {/* Card 3: Career Goals (6 Cols) */}
          <div className="md:col-span-6 p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-slate-900/90 via-slate-950 to-black border border-white/[0.12] hover:border-amber-500/40 transition-all duration-300 shadow-2xl group">
            <div className="w-12 h-12 rounded-2xl bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-sky-400 mb-6 shadow-inner">
              <Target className="w-6 h-6" />
            </div>

            <p className="text-xs font-mono uppercase tracking-[0.25em] text-sky-400 mb-2">
              03 &bull; Career Direction
            </p>

            <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
              Where I Am Headed
            </h3>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              My goal is to continuously advance as a reliable software engineer in a collaborative product team—building modern web platforms while continuing to mentor aspiring developers at{" "}
              <a 
                href="https://dremoy.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-amber-300 hover:text-white font-medium underline underline-offset-4 decoration-amber-400/50 inline-flex items-center gap-1"
              >
                Dremoy IT
                <ArrowUpRight className="w-4 h-4 text-amber-400" />
              </a>.
            </p>
          </div>

          {/* Card 4: Beyond the Screen (6 Cols) */}
          <div className="md:col-span-6 p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-slate-900/90 via-slate-950 to-black border border-white/[0.12] hover:border-amber-500/40 transition-all duration-300 shadow-2xl group">
            <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400 mb-6 shadow-inner">
              <Heart className="w-6 h-6" />
            </div>

            <p className="text-xs font-mono uppercase tracking-[0.25em] text-indigo-400 mb-2">
              04 &bull; The Human Side
            </p>

            <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
              Simplicity &amp; Balance
            </h3>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              When I&apos;m not debugging code, I recharge through quiet nature walks in rural Mymensingh, reading technology insights, and playing casual cricket with childhood friends.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
