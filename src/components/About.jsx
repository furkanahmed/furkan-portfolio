import { 
  Code2, 
  GraduationCap, 
  Server, 
  HeartHandshake,
  Compass,
  Laptop
} from "lucide-react";
import { personalInfo } from "@/data/portfolioData";

export default function About() {
  const pillars = [
    {
      icon: Code2,
      title: "Full-Stack Development",
      description: "Focused on clean code, responsive layouts, and reliable systems using React, Next.js, and Laravel."
    },
    {
      icon: GraduationCap,
      title: "Teaching & Mentorship",
      description: "Breaking down complex programming concepts into simple, practical exercises for beginners at Dremoy IT."
    },
    {
      icon: Server,
      title: "Systems & Deployments",
      description: "Configuring Linux VPS servers, cloud hosting on Vercel/Netlify, domain routing, and database setup."
    }
  ];

  return (
    <section id="about" className="py-24 border-t border-white/5 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-2 mb-14 text-center sm:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold text-sky-400 bg-sky-500/10 border border-sky-500/20">
            <span>Section 03</span>
            <span className="text-slate-600">•</span>
            <span>Get to know me</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            About Me
          </h2>
          <p className="text-slate-400 text-base max-w-xl">
            My background, everyday coding philosophy, and how I bridge the gap between building software and teaching it.
          </p>
        </div>

        {/* Narrative & Philosophy Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Authentic Personal Journey (Human-Voice) */}
          <div className="lg:col-span-7 space-y-5 text-slate-300 text-base sm:text-lg leading-relaxed">
            <p>
              I am a web developer and instructor based in <strong className="text-white font-medium">Valuka, Mymensingh, Bangladesh</strong>. My path in tech has always been guided by two core drives: building practical tools that make everyday work simpler, and helping others learn how to code.
            </p>
            <p>
              As a Co-Founder at <a href="https://dremoy.com" target="_blank" rel="noopener noreferrer" className="text-sky-400 hover:text-sky-300 underline underline-offset-4 decoration-sky-500/30 font-medium">Dremoy IT</a>, I architect web applications, manage client platforms, and oversee our server environments. I believe in clean code, disciplined component structure, and building software that genuinely works without unnecessary complexity.
            </p>
            <p>
              Alongside engineering, I spend significant time in the classroom teaching ICT and web development fundamentals. There is nothing more rewarding than seeing a beginner write their first JavaScript function or understand how relational databases communicate with an API.
            </p>

            {/* Quick Facts / Personality Chips */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
              <div className="p-3.5 rounded-2xl bg-slate-900/60 border border-slate-800 flex items-start gap-3">
                <Compass className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" />
                <div>
                  <p className="text-white font-medium text-xs">Work Philosophy</p>
                  <p className="text-slate-400 text-xs mt-0.5">Honesty, steady practice, and taking ownership of every line of code.</p>
                </div>
              </div>

              <div className="p-3.5 rounded-2xl bg-slate-900/60 border border-slate-800 flex items-start gap-3">
                <HeartHandshake className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <p className="text-white font-medium text-xs">Collaboration</p>
                  <p className="text-slate-400 text-xs mt-0.5">Approachable, respectful, and eager to learn under senior mentorship.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Three Core Pillars Cards */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2 px-1">
              What I Do Everyday
            </h3>
            
            {pillars.map((pillar, index) => {
              const Icon = pillar.icon;
              return (
                <div 
                  key={pillar.title}
                  className="p-5 rounded-2xl bg-slate-900/50 border border-slate-800/80 hover:border-slate-700/80 transition-all duration-200 group"
                >
                  <div className="flex items-center gap-3.5 mb-2.5">
                    <div className="w-9 h-9 rounded-xl bg-slate-800/80 border border-slate-700/60 flex items-center justify-center text-sky-400 group-hover:scale-110 group-hover:text-white group-hover:bg-sky-500/20 transition-all duration-200">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h4 className="text-base font-semibold text-white tracking-tight">
                      {pillar.title}
                    </h4>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed pl-12">
                    {pillar.description}
                  </p>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
