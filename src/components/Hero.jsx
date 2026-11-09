"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight, Download, Terminal, Sparkles, MapPin, Globe, Mail } from "lucide-react";
import { personalInfo } from "@/data/portfolioData";
import Container from "@/components/Container";

export default function Hero() {
  return (
    <section className="relative overflow-x-clip min-h-[90vh] pt-28 sm:pt-32 pb-16 sm:pb-20 flex flex-col justify-center bg-black text-[#E8DFD8] w-full max-w-full box-border">
      {/* Cinematic Golden Amber Vignette & Glow */}
      <div className="absolute top-1/4 right-1/4 w-[240px] sm:w-[400px] md:w-[500px] h-[240px] sm:h-[400px] md:h-[500px] bg-gradient-to-bl from-amber-500/15 via-[#C99E5D]/10 to-transparent blur-[80px] sm:blur-[160px] pointer-events-none -z-10 max-w-full" />
      <div className="absolute bottom-10 left-10 w-[200px] sm:w-[320px] md:w-[400px] h-[200px] sm:h-[320px] md:h-[400px] bg-amber-700/10 blur-[80px] sm:blur-[150px] pointer-events-none -z-10 max-w-full" />

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-12 items-center w-full max-w-full box-border">
          
          {/* Left Column: Massive Hollywood Typography */}
          <div className="lg:col-span-7 space-y-6 w-full max-w-full box-border">
            
            {/* Tagline Badge */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="inline-flex max-w-full items-center gap-2 px-3.5 sm:px-4 py-1.5 rounded-full border border-amber-500/30 bg-amber-500/[0.05] text-[10px] sm:text-[11px] uppercase tracking-[0.16em] sm:tracking-[0.28em] text-[#EAD8C7] font-mono [overflow-wrap:anywhere]"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-ping shrink-0"></span>
              <span className="truncate sm:overflow-visible">Available for Hire &bull; 2026 Season</span>
            </motion.div>

            {/* Massive Bebas-Style Dramatic Headline */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.1 }}
              className="space-y-1 select-none w-full max-w-full box-border"
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-tight leading-[0.98] sm:leading-[0.92] font-sans [overflow-wrap:anywhere] break-words">
                <span className="block text-transparent bg-clip-text bg-gradient-to-b from-white via-slate-200 to-slate-500 drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)]">
                  I BUILD
                </span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#FFF0D4] via-[#D4AF37] to-[#8C6D4F] drop-shadow-[0_8px_30px_rgba(212,175,55,0.4)]">
                  DIGITAL
                </span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#EAD8C7] via-[#9B7640] to-[#342410]">
                  EXPERIENCES
                </span>
              </h1>
            </motion.div>

            {/* Sub-label */}
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.25 }}
              className="text-xs sm:text-sm tracking-[0.15em] sm:tracking-[0.22em] uppercase text-[#C4B29E] font-mono [overflow-wrap:anywhere] break-words"
            >
              Junior Full-Stack Developer <span className="text-amber-500/60 mx-1 sm:mx-1.5">&bull;</span> IT Instructor <span className="text-amber-500/60 mx-1 sm:mx-1.5">&bull;</span> Dremoy IT
            </motion.p>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.35 }}
              className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-xl font-normal [overflow-wrap:anywhere] break-words"
            >
              Crafting high-impact web applications with React, Next.js, and modern backends. Dedicated to writing clean code and empowering next-generation developers.
            </motion.p>

            {/* Action Buttons: Metallic Gold & Dark */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.45 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-3 w-full sm:w-auto"
            >
              <a
                href="#projects"
                className="group inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3.5 border border-[#D4AF37] bg-gradient-to-r from-[#D4AF37]/20 via-[#D4AF37]/10 to-transparent hover:bg-[#D4AF37] hover:text-black text-[#FFF0D4] text-xs uppercase tracking-[0.2em] font-semibold transition-all duration-300 shadow-[0_0_20px_rgba(212,175,55,0.25)] min-h-[44px]"
              >
                <span>EXPLORE WORK</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              <a
                href="/resume.pdf"
                download="Furkan_Ahmed_Resume.pdf"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 border border-white/20 hover:border-white/50 text-[#C4B5A5] hover:text-white text-xs uppercase tracking-[0.18em] font-medium transition-all duration-300 backdrop-blur-sm min-h-[44px]"
              >
                <Download className="w-4 h-4 text-amber-400" />
                <span>RESUME</span>
              </a>
            </motion.div>

          </div>

          {/* Right Column: Dramatic Cinematic Portrait */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative w-full max-w-sm sm:max-w-md group">
              {/* Outer Golden Aura */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-[#D4AF37]/30 via-[#9B7640]/20 to-transparent blur-2xl opacity-60 group-hover:opacity-100 transition-opacity duration-700"></div>

              <div className="relative rounded-2xl overflow-hidden border border-[#D4AF37]/40 bg-black shadow-[0_20px_60px_rgba(0,0,0,0.9)]">
                <div className="relative aspect-[4/5] w-full">
                  <Image
                    src={personalInfo.avatarUrl}
                    alt={personalInfo.name}
                    fill
                    priority
                    className="object-cover object-top filter grayscale-[30%] contrast-[1.1] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  />
                  {/* Cinematic black fade at bottom */}
                  <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black via-black/70 to-transparent"></div>
                </div>

                {/* Floating Film Badge */}
                <div className="absolute bottom-4 inset-x-4 p-3.5 rounded-xl bg-black/80 backdrop-blur-md border border-[#D4AF37]/30 flex items-center justify-between">
                  <div>
                    <p className="text-[10px] tracking-[0.24em] uppercase text-amber-400 font-mono">DIRECTOR / DEV</p>
                    <p className="text-sm font-bold text-white tracking-wide">{personalInfo.name}</p>
                  </div>
                  <span className="text-[11px] font-mono text-slate-400">DREMOY IT</span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </Container>
    </section>
  );
}
