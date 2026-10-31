import { 
  Briefcase, 
  Building2, 
  Calendar, 
  CheckCircle2,
  ArrowUpRight 
} from "lucide-react";
import { experienceData } from "@/data/experienceData";

export default function Experience() {
  return (
    <section id="experience" className="py-28 border-t border-white/5 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Unified Section Header */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 mb-8 backdrop-blur-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
          <span className="uppercase tracking-widest">CAREER TIMELINE</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
          Professional Experience
        </h2>
        <p className="text-slate-400 text-base sm:text-lg max-w-2xl leading-relaxed mb-16">
          A track record spanning full-stack software development at Dremoy IT, academic ICT education at school, and practical coding mentorship.
        </p>

        {/* Seamless Unified Editorial Experience Flow */}
        <div className="space-y-14">
          {experienceData.map((exp, idx) => (
            <div 
              key={exp.role + exp.organization}
              className={`space-y-4 ${idx !== 0 ? "pt-12 border-t border-white/5" : ""}`}
            >
              {/* Role Title & Timeline */}
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight flex items-center gap-2.5">
                    <span className="text-sm font-mono text-sky-400 font-semibold">0{idx + 1}.</span>
                    {exp.role}
                  </h3>
                  
                  <div className="flex items-center gap-2 mt-1">
                    {exp.url ? (
                      <a
                        href={exp.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-sky-400 hover:text-sky-300 font-medium underline underline-offset-4 decoration-sky-400/40 inline-flex items-center gap-1"
                      >
                        {exp.organization}
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    ) : (
                      <span className="text-sm text-slate-300 font-medium">
                        {exp.organization}
                      </span>
                    )}
                    <span className="text-slate-600">•</span>
                    <span className="text-xs font-mono text-slate-400">
                      {exp.category}
                    </span>
                  </div>
                </div>

                <div className="shrink-0">
                  <span className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-400 bg-slate-900/60 px-3 py-1 rounded-full border border-white/10">
                    <Calendar className="w-3.5 h-3.5 text-slate-400" />
                    {exp.period}
                  </span>
                </div>
              </div>

              {/* Responsibilities List */}
              <div className="space-y-2.5 pt-2">
                {exp.responsibilities.map((resp, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-400 leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5 opacity-80" />
                    <span>{resp}</span>
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

