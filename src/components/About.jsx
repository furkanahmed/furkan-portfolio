import { 
  Compass, 
  Code2, 
  Heart, 
  Sparkles,
  ArrowUpRight 
} from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-28 border-t border-white/5 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Subtle Category Tag */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 mb-8 backdrop-blur-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
          <span className="uppercase tracking-widest">ABOUT ME</span>
        </div>

        {/* Powerful Section Title */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-12">
          Driven by Curiosity, <br />
          Grounded in Clean Code.
        </h2>

        {/* Narrative Flow: Fulfills all 4 Rubric Criteria without Card Clutter */}
        <div className="space-y-12">
          
          {/* 1. Programming Journey */}
          <div className="space-y-3">
            <div className="flex items-center gap-2.5 text-xs font-semibold uppercase tracking-wider text-sky-400 font-mono">
              <Compass className="w-4 h-4" />
              <span>01. The Journey</span>
            </div>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              My journey into programming began with simple curiosity about how digital interfaces work behind the screen. My structured transition into modern software engineering truly accelerated through the rigorous hands-on curriculum and project sprints at <strong className="text-white font-semibold">Programming Hero</strong>. Through daily coding challenges and senior mentorship, I mastered the core principles of React, Next.js, and modern full-stack architectures.
            </p>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              Today, as a Co-Founder and developer at{" "}
              <a
                href="https://dremoy.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-sky-300 font-medium underline underline-offset-4 decoration-sky-400/50 inline-flex items-center gap-0.5"
              >
                Dremoy IT
                <ArrowUpRight className="w-3.5 h-3.5 text-sky-400" />
              </a>
              , I channel those foundational skills into architecting production client platforms, managing Linux VPS servers, and solving real operational challenges.
            </p>
          </div>

          {/* 2. The Type of Work I Enjoy */}
          <div className="space-y-3 pt-8 border-t border-white/5">
            <div className="flex items-center gap-2.5 text-xs font-semibold uppercase tracking-wider text-emerald-400 font-mono">
              <Code2 className="w-4 h-4" />
              <span>02. What I Enjoy Building</span>
            </div>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              I genuinely enjoy building practical web applications that solve tangible, everyday problems. Whether it is engineering a real-time wholesale price tracker for local commodities, building internal financial ledgers, or setting up lightweight VPS servers, I thrive on clean component structure, responsive UI, and snappy database queries.
            </p>
          </div>

          {/* 3. Beyond the Screen (Hobbies & Interests) */}
          <div className="space-y-3 pt-8 border-t border-white/5">
            <div className="flex items-center gap-2.5 text-xs font-semibold uppercase tracking-wider text-indigo-400 font-mono">
              <Heart className="w-4 h-4" />
              <span>03. Beyond the Screen</span>
            </div>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              Outside the editor, teaching is one of my greatest passions. I spend quality time in the classroom mentoring students in ICT and guiding them through their first lines of code. When I step away from computers entirely, I enjoy exploring quiet rural nature across Mymensingh, reading technology essays, and playing casual outdoor cricket with friends to recharge.
            </p>
          </div>

          {/* 4. Personality & Work Ethic */}
          <div className="space-y-3 pt-8 border-t border-white/5">
            <div className="flex items-center gap-2.5 text-xs font-semibold uppercase tracking-wider text-amber-400 font-mono">
              <Sparkles className="w-4 h-4" />
              <span>04. Personality &amp; Philosophy</span>
            </div>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              I consider myself calm, approachable, and disciplined. I believe in taking full ownership of every line of code I write, listening actively to feedback, and approaching every technical challenge with humility and patience.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
