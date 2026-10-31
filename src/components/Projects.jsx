import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import { projectsData } from "@/data/portfolioData";

function GithubIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
    </svg>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-28 border-t border-white/5 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Unified Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 backdrop-blur-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
              <span className="uppercase tracking-widest">SELECTED WORK</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Featured Projects
            </h2>
            <p className="text-slate-400 text-base sm:text-lg max-w-xl leading-relaxed">
              Real-world web applications, pricing trackers, and production platforms built with modern full-stack architectures.
            </p>
          </div>

          <span className="text-xs font-mono text-slate-400 bg-slate-900/60 px-3.5 py-1.5 rounded-full border border-white/10 self-start sm:self-auto">
            {projectsData.length} Projects Showcase
          </span>
        </div>

        {/* 6 Projects Grid in High-End Responsive Card Format */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project) => (
            <div
              key={project.id}
              className="rounded-3xl bg-slate-900/40 border border-white/10 overflow-hidden hover:border-white/20 transition-all duration-300 flex flex-col group backdrop-blur-sm shadow-lg hover:shadow-2xl hover:-translate-y-1"
            >
              {/* Project Image Frame with Natural 16:10 Aspect */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-950">
                <Image
                  src={project.image}
                  alt={`${project.name} Screenshot`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Subtle Inner Gradient & Status Badge */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80 pointer-events-none" />
                
                <div className="absolute top-3.5 right-3.5">
                  <span className={`px-2.5 py-1 rounded-full text-[11px] font-semibold border backdrop-blur-md ${
                    project.status.includes("Live") || project.status.includes("Completed")
                      ? "text-emerald-300 bg-emerald-950/80 border-emerald-500/30"
                      : "text-amber-300 bg-amber-950/80 border-amber-500/30"
                  }`}>
                    {project.status}
                  </span>
                </div>
              </div>

              {/* Card Body Content */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-5">
                
                <div className="space-y-3">
                  {/* Project Name & Tagline */}
                  <div>
                    <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-sky-300 transition-colors">
                      {project.name}
                    </h3>
                    <p className="text-xs text-sky-400 font-medium mt-0.5">
                      {project.tagline}
                    </p>
                  </div>

                  {/* Brief Description */}
                  <p className="text-xs sm:text-sm text-slate-300 line-clamp-3 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="space-y-4 pt-2 border-t border-white/5">
                  {/* Tech Stack Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded-md text-[11px] font-mono font-medium text-slate-300 bg-slate-800/60 border border-white/5"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Links & "View Details" Button */}
                  <div className="flex items-center justify-between pt-2">
                    {/* View Details Button linking to dynamic route /projects/[id] */}
                    <Link
                      href={`/projects/${project.id}`}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold bg-white/10 hover:bg-white text-slate-100 hover:text-slate-950 px-4 py-2 rounded-full transition-all duration-200 group/btn"
                    >
                      <span>View Details</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
                    </Link>

                    {/* Quick External Links (Live & GitHub) */}
                    <div className="flex items-center gap-2">
                      {project.liveLink && (
                        <a
                          href={project.liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-full bg-slate-800/80 text-slate-400 hover:text-sky-300 hover:bg-slate-700 transition-colors"
                          title="Open Live Website"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      )}

                      {project.githubLink && (
                        <a
                          href={project.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-full bg-slate-800/80 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
                          title="View GitHub Repository"
                        >
                          <GithubIcon className="w-3.5 h-3.5" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
