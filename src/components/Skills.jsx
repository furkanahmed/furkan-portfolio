"use client";

import { 
  Code2, 
  Server, 
  Database, 
  Cloud, 
  CheckCircle2,
  Sparkles,
  Layers
} from "lucide-react";

export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend Engineering",
      tag: "01 &bull; UI & CLIENT SYSTEMS",
      icon: Code2,
      accent: "from-sky-400 to-indigo-400",
      borderGlow: "hover:border-sky-500/40",
      description: "Building responsive, modern, and accessible web experiences with component-driven architecture.",
      skills: [
        { name: "JavaScript (ES6+)", role: "Core Language" },
        { name: "React.js", role: "SPA & State Architecture" },
        { name: "Next.js (App Router)", role: "Full-Stack Framework" },
        { name: "Tailwind CSS", role: "Design Systems & UI" },
        { name: "HTML5 & CSS3", role: "Semantic Structure" },
        { name: "Responsive Design", role: "Mobile-First UX" },
      ],
    },
    {
      title: "Backend & Server Architecture",
      tag: "02 &bull; APIS & LOGIC",
      icon: Server,
      accent: "from-amber-400 to-amber-600",
      borderGlow: "hover:border-amber-500/40",
      description: "Crafting scalable server logic, secure authentication, and high-performance API endpoints.",
      skills: [
        { name: "Node.js", role: "Runtime Environment" },
        { name: "Express.js", role: "RESTful Web Services" },
        { name: "REST APIs", role: "API Integration & Design" },
        { name: "Supabase", role: "BaaS & Realtime Auth" },
        { name: "Laravel (Basics)", role: "PHP Backend Framework" },
      ],
    },
    {
      title: "Database Management",
      tag: "03 &bull; DATA STORAGE",
      icon: Database,
      accent: "from-emerald-400 to-teal-400",
      borderGlow: "hover:border-emerald-500/40",
      description: "Managing relational schemas, NoSQL document collections, and optimized queries.",
      skills: [
        { name: "PostgreSQL", role: "Relational Database" },
        { name: "MySQL", role: "Relational Storage" },
        { name: "MongoDB", role: "NoSQL Document Store" },
        { name: "Data Modeling", role: "Schema Architecture" },
      ],
    },
    {
      title: "Cloud, DevOps & Tools",
      tag: "04 &bull; DEPLOYMENT & ECOSYSTEM",
      icon: Cloud,
      accent: "from-indigo-400 to-purple-400",
      borderGlow: "hover:border-indigo-500/40",
      description: "Deploying applications with automated CI/CD pipelines and managing Linux VPS servers.",
      skills: [
        { name: "Git & GitHub", role: "Version Control" },
        { name: "VPS / Linux Server", role: "Production Hosting" },
        { name: "AWS Cloud", role: "Cloud Services" },
        { name: "Vercel & Netlify", role: "Edge Deployment" },
        { name: "VS Code & Postman", role: "Developer Environment" },
        { name: "Vite", role: "Frontend Build Tool" },
      ],
    },
  ];

  return (
    <section id="skills" className="py-28 sm:py-36 relative overflow-x-clip bg-black text-[#E8DFD8]">
      {/* Cinematic Golden Amber Ambient Lights */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[280px] sm:w-[420px] md:w-[600px] h-[280px] sm:h-[420px] md:h-[600px] bg-gradient-to-bl from-amber-500/10 via-amber-700/5 to-transparent blur-[120px] sm:blur-[180px] pointer-events-none -z-10 max-w-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full max-w-full box-border">
        
        {/* Section Header - Harmonized with Hero & About */}
        <div className="max-w-3xl mb-16 space-y-4 w-full max-w-full box-border">
          <div className="inline-flex max-w-full items-center gap-2 sm:gap-2.5 px-3 sm:px-4 py-1.5 rounded-full text-[10px] sm:text-xs font-mono tracking-[0.14em] sm:tracking-[0.25em] uppercase text-amber-400 bg-amber-500/[0.08] border border-amber-500/30 [overflow-wrap:anywhere]">
            <span className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-amber-400 animate-pulse shrink-0"></span>
            <span className="break-words">CHAPTER 02 &bull; TECHNICAL ARSENAL</span>
          </div>

          <h2 className="text-[clamp(2.2rem,8vw,3.75rem)] font-black uppercase tracking-tight text-white leading-tight font-sans [overflow-wrap:anywhere] break-words">
            Disciplined tools, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-[#D4AF37] to-amber-500">
              real-world execution.
            </span>
          </h2>

          <p className="text-lg sm:text-xl text-slate-300 font-normal leading-relaxed [overflow-wrap:anywhere]">
            Every tool in this stack is verified by real production applications built at Dremoy IT and daily instructional sessions.
          </p>
        </div>

        {/* Bento Grid Architecture for Skills */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((cat, idx) => {
            const Icon = cat.icon;

            return (
              <div
                key={cat.title}
                className={`p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-slate-900/90 via-slate-950 to-black border border-white/[0.12] ${cat.borderGlow} transition-all duration-300 shadow-2xl relative overflow-hidden group flex flex-col justify-between`}
              >
                {/* Subtle Inner Glow */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/5 rounded-full blur-3xl pointer-events-none group-hover:scale-125 transition-transform duration-700" />

                <div>
                  {/* Category Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 shadow-inner">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span 
                      className="text-xs font-mono uppercase tracking-[0.2em] text-slate-400"
                      dangerouslySetInnerHTML={{ __html: cat.tag }}
                    />
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                    {cat.title}
                  </h3>

                  <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed mb-8">
                    {cat.description}
                  </p>
                </div>

                {/* Tech Pills Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-4 border-t border-white/[0.08]">
                  {cat.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="flex items-center justify-between p-3 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:border-amber-400/30 hover:bg-white/[0.06] transition-all group/item"
                    >
                      <div className="flex items-center gap-2 truncate">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-400/80 group-hover/item:scale-125 transition-transform"></span>
                        <span className="text-sm font-semibold text-slate-100 group-hover/item:text-amber-200 transition-colors truncate">
                          {skill.name}
                        </span>
                      </div>
                      <span className="text-[10px] font-mono text-slate-400 shrink-0 pl-1">
                        {skill.role}
                      </span>
                    </div>
                  ))}
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
