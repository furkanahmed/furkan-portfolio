import { 
  Building2, 
  Award, 
  Calendar,
  CheckCircle2
} from "lucide-react";
import { educationData } from "@/data/educationData";

export default function Education() {
  return (
    <section id="education" className="py-28 border-t border-white/5 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Unified Section Header */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 mb-8 backdrop-blur-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
          <span className="uppercase tracking-widest">ACADEMIC BACKGROUND</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
          Educational Qualification
        </h2>
        <p className="text-slate-400 text-base sm:text-lg max-w-2xl leading-relaxed mb-16">
          Higher academic education in business and finance paired with specialized technical training and modern software engineering.
        </p>

        {/* Seamless Unified Editorial Education Flow */}
        <div className="space-y-12">
          {educationData.map((edu, idx) => (
            <div 
              key={edu.degree}
              className={`space-y-4 ${idx !== 0 ? "pt-12 border-t border-white/5" : ""}`}
            >
              {/* Degree Title & Timeline */}
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight flex items-center gap-2.5">
                    <span className="text-sm font-mono text-sky-400 font-semibold">0{idx + 1}.</span>
                    {edu.degree}
                  </h3>
                  <p className="text-sm text-sky-400 font-medium mt-1">
                    Major / Concentration: {edu.specialization}
                  </p>
                </div>

                <div className="flex items-center gap-3 shrink-0">
                  <span className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-400 bg-slate-900/60 px-3 py-1 rounded-full border border-white/10">
                    <Calendar className="w-3.5 h-3.5 text-slate-400" />
                    {edu.timeline}
                  </span>
                  <span className={`inline-flex items-center gap-1 text-xs font-medium px-2.5 py-1 rounded-full border ${
                    edu.statusBadge === "In Progress"
                      ? "text-amber-400 bg-amber-500/10 border-amber-500/20"
                      : "text-emerald-400 bg-emerald-500/10 border-emerald-500/20"
                  }`}>
                    <Award className="w-3 h-3" />
                    {edu.statusBadge}
                  </span>
                </div>
              </div>

              {/* Institution & Board Meta */}
              <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs sm:text-sm text-slate-300">
                <div className="flex items-center gap-2">
                  <Building2 className="w-4 h-4 text-slate-400" />
                  <span>{edu.institute}</span>
                </div>
                <span className="text-slate-600 hidden sm:inline">•</span>
                <div className="flex items-center gap-2 text-slate-400">
                  <span>Affiliation / Board:</span>
                  <span className="text-slate-200 font-medium">{edu.board}</span>
                </div>
              </div>

              {/* Highlights & Key Learnings */}
              <div className="space-y-2 pt-2">
                {edu.highlights.map((item, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-400 leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5 opacity-80" />
                    <span>{item}</span>
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
