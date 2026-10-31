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
  Calendar,
  Globe,
  Lock
} from "lucide-react";
import { projectsData, personalInfo } from "@/data/portfolioData";
import Navbar from "@/components/Navbar";
import SpotlightBackground from "@/components/SpotlightBackground";

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
    title: `${project.name} — Project Case Study | Furkan Ahmed`,
    description: project.description,
  };
}

export default async function ProjectDetailPage({ params }) {
  const { id } = await params;
  const project = projectsData.find((p) => p.id === id);

  if (!project) {
    notFound();
  }

  return (
    <div className="relative min-h-screen bg-[#0B0F19] text-slate-100 selection:bg-emerald-500/20 selection:text-emerald-300">
      {/* Background Interactive Spotlight */}
      <SpotlightBackground />

      {/* Navigation */}
      <Navbar />

      <main className="relative z-10 pt-32 pb-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Back Navigation Button */}
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-slate-400 hover:text-white transition-colors mb-10 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Back to All Projects</span>
          </Link>

          {/* Project Header Banner */}
          <div className="space-y-4 mb-10">
            <div className="flex flex-wrap items-center gap-3">
              <span className={`px-3 py-1 rounded-full text-xs font-semibold border backdrop-blur-md ${
                project.status.includes("Live") || project.status.includes("Completed")
                  ? "text-emerald-300 bg-emerald-950/80 border-emerald-500/30"
                  : "text-amber-300 bg-amber-950/80 border-amber-500/30"
              }`}>
                {project.status}
              </span>
              <span className="text-xs font-mono text-slate-400">
                {project.tagline}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              {project.name}
            </h1>
          </div>

          {/* Featured Hero Screenshot */}
          <div className="relative aspect-[16/9] w-full rounded-3xl overflow-hidden bg-slate-900 border border-white/10 shadow-2xl mb-12">
            <Image
              src={project.image}
              alt={`${project.name} Full Preview`}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 896px"
              className="object-cover object-top"
            />
          </div>

          {/* Project Action Links (Requirement: Live Link & GitHub Link) */}
          <div className="flex flex-wrap items-center gap-4 p-5 rounded-2xl bg-slate-900/60 border border-white/10 mb-14 backdrop-blur-sm">
            {project.liveLink ? (
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold bg-white text-slate-950 hover:bg-slate-200 transition-colors shadow-sm"
              >
                <Globe className="w-4 h-4" />
                <span>Visit Live Project</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            ) : (
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs text-slate-400 bg-slate-800/80 border border-white/5">
                <Lock className="w-3.5 h-3.5 text-slate-400" />
                <span>Private Staging Environment</span>
              </span>
            )}

            {project.githubLink ? (
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium bg-slate-800/90 hover:bg-slate-800 text-white border border-white/10 transition-colors"
              >
                <GithubIcon className="w-4 h-4" />
                <span>View Client GitHub Repository</span>
              </a>
            ) : (
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs text-slate-400 bg-slate-800/80 border border-white/5">
                <Lock className="w-3.5 h-3.5 text-slate-400" />
                <span>Client / Private Repository</span>
              </span>
            )}
          </div>

          {/* 6 Required Sections Flow */}
          <div className="space-y-14">
            
            {/* 1. Main Technology Stack Used */}
            <div className="space-y-4">
              <div className="flex items-center gap-2.5 text-xs font-semibold uppercase tracking-wider text-sky-400 font-mono">
                <Layers className="w-4 h-4" />
                <span>01. Main Technology Stack Used</span>
              </div>
              <div className="flex flex-wrap gap-2 pt-1">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-mono font-medium text-slate-200 bg-slate-900/80 border border-white/10"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* 2. Brief & Detailed Description */}
            <div className="space-y-4 pt-10 border-t border-white/5">
              <div className="flex items-center gap-2.5 text-xs font-semibold uppercase tracking-wider text-emerald-400 font-mono">
                <CheckCircle2 className="w-4 h-4" />
                <span>02. Project Overview &amp; Architecture</span>
              </div>
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
                {project.detailedDescription || project.description}
              </p>
            </div>

            {/* 3. Challenges Faced While Developing */}
            <div className="space-y-4 pt-10 border-t border-white/5">
              <div className="flex items-center gap-2.5 text-xs font-semibold uppercase tracking-wider text-amber-400 font-mono">
                <AlertTriangle className="w-4 h-4" />
                <span>03. Challenges Faced &amp; Solutions</span>
              </div>
              <div className="p-6 rounded-2xl bg-slate-900/40 border border-amber-500/20 text-slate-300 text-sm sm:text-base leading-relaxed">
                {project.challenges}
              </div>
            </div>

            {/* 4. Potential Improvements and Future Plans */}
            <div className="space-y-4 pt-10 border-t border-white/5">
              <div className="flex items-center gap-2.5 text-xs font-semibold uppercase tracking-wider text-indigo-400 font-mono">
                <Sparkles className="w-4 h-4" />
                <span>04. Potential Improvements &amp; Future Plans</span>
              </div>
              <div className="p-6 rounded-2xl bg-slate-900/40 border border-indigo-500/20 text-slate-300 text-sm sm:text-base leading-relaxed">
                {project.futureImprovements}
              </div>
            </div>

          </div>

          {/* Footer Back Link */}
          <div className="pt-16 mt-16 border-t border-white/10 flex justify-between items-center">
            <Link
              href="/#projects"
              className="inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-sky-300 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to all projects</span>
            </Link>

            <span className="text-xs font-mono text-slate-400">
              Furkan Ahmed Portfolio
            </span>
          </div>

        </div>
      </main>
    </div>
  );
}

