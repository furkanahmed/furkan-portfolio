import { 
  Code2, 
  Server, 
  Database, 
  Wrench,
  Check
} from "lucide-react";
import { skillsData } from "@/data/portfolioData";

export default function Skills() {
  const groups = [
    {
      category: "Frontend Development",
      description: "Building responsive, accessible, and high-performance user interfaces.",
      skills: skillsData.frontend,
    },
    {
      category: "Backend & APIs",
      description: "Server actions, server-side APIs, and secure authentication flows.",
      skills: skillsData.backend,
    },
    {
      category: "Database & Storage",
      description: "Designing schema, managing relations, and optimizing queries.",
      skills: skillsData.database,
    },
    {
      category: "Tools & Workflow",
      description: "Version control, automated CI/CD deployments, and developer tooling.",
      skills: skillsData.tools,
    },
  ];

  return (
    <section id="skills" className="py-28 border-t border-white/5 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Unified Section Header DNA (Same as About Me) */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 mb-8 backdrop-blur-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
          <span className="uppercase tracking-widest">TECHNICAL ARSENAL</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
          Skills &amp; Technologies
        </h2>
        <p className="text-slate-400 text-base sm:text-lg max-w-2xl leading-relaxed mb-16">
          A disciplined stack honed through daily full-stack development at Dremoy IT and project sprints at Programming Hero.
        </p>

        {/* Seamless Unified Editorial Grid (No Chunky Cards) */}
        <div className="space-y-12">
          {groups.map((group, idx) => (
            <div 
              key={group.category}
              className={`space-y-4 ${idx !== 0 ? "pt-10 border-t border-white/5" : ""}`}
            >
              {/* Category Header */}
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1.5">
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight flex items-center gap-2.5">
                  <span className="text-sm font-mono text-sky-400 font-semibold">0{idx + 1}.</span>
                  {group.category}
                </h3>
                <span className="text-xs sm:text-sm text-slate-400 font-normal">
                  {group.description}
                </span>
              </div>

              {/* Graphical Unified Badge Flow */}
              <div className="flex flex-wrap gap-2.5 pt-2">
                {group.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-900/60 border border-white/5 hover:border-white/20 hover:bg-slate-800/60 transition-all duration-200 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400/80 group-hover:scale-125 transition-transform"></span>
                    <span className="text-sm font-medium text-slate-200 group-hover:text-white">
                      {skill.name}
                    </span>
                    <span className="text-[10px] font-mono font-medium text-slate-400 group-hover:text-slate-300 pl-1 border-l border-white/10">
                      {skill.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
