import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { 
  ArrowLeft, 
  ExternalLink, 
  Layers, 
  AlertTriangle, 
  Sparkles, 
  CheckCircle2, 
  Globe,
  Lock,
  ArrowRight,
  Code2,
  Calendar,
  Compass
} from "lucide-react";
import { projectsData, personalInfo } from "@/data/portfolioData";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

function GithubIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
    </svg>
  );
}

// Generate static params for all 6 projects
export async function generateStaticParams() {
  return projectsData.map((project) => ({
    id: project.id,
  }));
}

// Dynamic SEO Metadata
export async function generateMetadata({ params }) {
  const { id } = await params;
  const project = projectsData.find((p) => p.id === id);

  if (!project) {
    return {
      title: "Project Not Found | Furkan Ahmed Portfolio",
    };
  }

  return {
    title: `${project.name} — Case Study | Furkan Ahmed`,
    description: project.description,
  };
}

export default async function ProjectDetailPage({ params }) {
  const { id } = await params;
  const projectIndex = projectsData.findIndex((p) => p.id === id);

  if (projectIndex === -1) {
    notFound();
  }

  const project = projectsData[projectIndex];
  const nextProject = projectsData[(projectIndex + 1) % projectsData.length];
  const isLive = project.status.includes("Live") || project.status.includes("Completed");

  return (
    <div className="relative min-h-screen bg-black text-[#E8DFD8] selection:bg-amber-400/20 selection:text-amber-200">
      
      {/* Navigation */}
      <Navbar />

      <main className="relative z-10 pt-36 sm:pt-40 pb-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header Navigation & Category Breadcrumb */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
            <Link
              href="/#projects"
              className="inline-flex items-center gap-2.5 text-xs sm:text-sm font-mono text-slate-400 hover:text-white transition-colors group px-4 py-2 rounded-full bg-[#0B1120] border border-white/10 hover:border-amber-400/50"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform text-amber-400" />
              <span>Back to All Projects</span>
            </Link>

            <div className="flex items-center gap-3">
              <span className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-mono font-medium border ${
                isLive
                  ? "text-emerald-400 bg-emerald-950/40 border-emerald-500/30"
                  : "text-amber-400 bg-amber-950/40 border-amber-500/30"
              }`}>
                <span className={`w-2 h-2 rounded-full ${isLive ? "bg-emerald-400 animate-pulse" : "bg-amber-400"}`} />
                {project.status}
              </span>
              <span className="text-xs font-mono text-slate-500 hidden sm:inline">
                Case Study #0{projectIndex + 1}
              </span>
            </div>
          </div>

          {/* Project Title & Tagline Banner */}
          <div className="space-y-4 mb-10">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1]">
              {project.name}
            </h1>
            <p className="text-base sm:text-xl text-slate-300 font-normal max-w-3xl leading-relaxed">
              {project.tagline}
            </p>
          </div>

          {/* Featured Showcase Display (Matching Home Card Aesthetic) */}
          <div className="relative rounded-3xl bg-[#0B1120] border border-white/[0.12] shadow-[0_30px_90px_rgba(0,0,0,0.9)] overflow-hidden mb-12">
            <div className="relative aspect-[16/9] w-full bg-[#0B1120]">
              <Image
                src={project.image}
                alt={`${project.name} Showcase Screenshot`}
                fill
                priority
                sizes="(max-width: 1200px) 100vw, 1024px"
                className="object-cover object-top"
              />
            </div>

            {/* Quick Action Ribbon bar inside Card Footer */}
            <div className="p-5 sm:p-6 bg-[#0E1626] border-t border-white/[0.08] flex flex-wrap items-center justify-between gap-4">
              <div className="flex flex-wrap items-center gap-3">
                {project.liveLink ? (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs sm:text-sm font-semibold bg-[#D4AF37] hover:bg-[#F3E5AB] text-black transition-all duration-300 shadow-md hover:shadow-amber-500/20"
                  >
                    <Globe className="w-4 h-4" />
                    <span>Visit Live Website</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                ) : (
                  <span className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-xs sm:text-sm text-slate-400 bg-slate-900 border border-white/10">
                    <Lock className="w-4 h-4 text-amber-400" />
                    <span>Internal Enterprise Preview</span>
                  </span>
                )}

                {project.githubLink ? (
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium bg-[#151D30] hover:bg-[#1C2740] text-slate-200 hover:text-white border border-white/10 hover:border-amber-400/40 transition-all duration-300"
                  >
                    <GithubIcon className="w-4 h-4" />
                    <span>GitHub Repository</span>
                  </a>
                ) : (
                  <span className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-xs sm:text-sm text-slate-400 bg-slate-900 border border-white/10">
                    <Lock className="w-4 h-4 text-slate-500" />
                    <span>Client / Private Repository</span>
                  </span>
                )}
              </div>

              <span className="text-xs font-mono text-slate-400">
                Stack: {project.techStack.slice(0, 3).join(", ")}
              </span>
            </div>
          </div>

          {/* Structured Two-Column Case Study Content */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
            
            {/* Left Column: Deep Overview & Architecture (8 Cols) */}
            <div className="lg:col-span-8 space-y-8">
              
              {/* 01. Overview */}
              <div className="p-7 sm:p-8 rounded-3xl bg-[#0B1120] border border-white/[0.12] space-y-4">
                <div className="flex items-center gap-2.5 text-xs font-semibold uppercase tracking-widest text-[#D4AF37] font-mono">
                  <CheckCircle2 className="w-4 h-4 text-[#D4AF37]" />
                  <span>01. Project Purpose &amp; Overview</span>
                </div>
                <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
                  {project.detailedDescription || project.description}
                </p>
              </div>

              {/* 02. Challenges Faced & Engineering Solutions */}
              <div className="p-7 sm:p-8 rounded-3xl bg-[#0B1120] border border-white/[0.12] space-y-4 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-48 h-48 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
                <div className="flex items-center gap-2.5 text-xs font-semibold uppercase tracking-widest text-amber-400 font-mono">
                  <AlertTriangle className="w-4 h-4 text-amber-400" />
                  <span>02. Challenges Faced &amp; Technical Solutions</span>
                </div>
                <div className="text-sm sm:text-base text-slate-300 leading-relaxed space-y-3">
                  <p>{project.challenges}</p>
                </div>
              </div>

              {/* 03. Future Roadmap & Iterations */}
              <div className="p-7 sm:p-8 rounded-3xl bg-[#0B1120] border border-white/[0.12] space-y-4 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-48 h-48 bg-sky-500/5 rounded-full blur-3xl pointer-events-none" />
                <div className="flex items-center gap-2.5 text-xs font-semibold uppercase tracking-widest text-sky-400 font-mono">
                  <Sparkles className="w-4 h-4 text-sky-400" />
                  <span>03. Potential Improvements &amp; Future Plans</span>
                </div>
                <div className="text-sm sm:text-base text-slate-300 leading-relaxed space-y-3">
                  <p>{project.futureImprovements}</p>
                </div>
              </div>

            </div>

            {/* Right Column: Sticky Project Metadata Card (4 Cols) */}
            <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-28">
              
              {/* Stack & Architecture Meta */}
              <div className="p-6 sm:p-7 rounded-3xl bg-[#0B1120] border border-white/[0.12] space-y-6">
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono text-[#D4AF37] uppercase tracking-wider mb-3">
                    <Layers className="w-4 h-4" />
                    <span>Technology Stack</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1.5 rounded-xl text-xs font-mono font-medium text-slate-300 bg-[#151D30] border border-white/10"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-5 border-t border-white/[0.08] space-y-4 text-xs font-mono">
                  <div className="flex items-center justify-between text-slate-400">
                    <span>Role / Scope</span>
                    <span className="text-white font-medium">Full-Stack Architecture</span>
                  </div>
                  <div className="flex items-center justify-between text-slate-400">
                    <span>Project Status</span>
                    <span className="text-white font-medium">{project.status}</span>
                  </div>
                  <div className="flex items-center justify-between text-slate-400">
                    <span>Target Market</span>
                    <span className="text-white font-medium">Bangladesh / Global</span>
                  </div>
                </div>

                <div className="pt-5 border-t border-white/[0.08]">
                  <Link
                    href="/#contact"
                    className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl text-xs sm:text-sm font-semibold bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-amber-400/40 transition-all duration-300"
                  >
                    <span>Discuss Similar Project</span>
                    <ArrowRight className="w-3.5 h-3.5 text-amber-400" />
                  </Link>
                </div>
              </div>

            </div>

          </div>

          {/* Next Project Case Study Quick Switcher Banner */}
          <div className="p-8 sm:p-10 rounded-3xl bg-[#0B1120] border border-white/[0.12] hover:border-amber-400/40 transition-all duration-300 group flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div className="space-y-1">
              <span className="text-xs font-mono text-[#D4AF37] uppercase tracking-wider">
                Next Project Case Study →
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-amber-300 transition-colors">
                {nextProject.name}
              </h3>
              <p className="text-xs sm:text-sm text-slate-400">
                {nextProject.tagline}
              </p>
            </div>

            <Link
              href={`/projects/${nextProject.id}`}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-semibold bg-[#D4AF37] text-black hover:bg-[#F3E5AB] transition-all duration-300 shadow-md"
            >
              <span>Read Next Study</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

        </div>
      </main>

      {/* Global Consistent Footer */}
      <Footer />

    </div>
  );
}
