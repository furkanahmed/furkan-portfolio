import { ArrowUpRight } from "lucide-react";

export default function About() {
  const highlights = [
    { number: "02+", label: "Years Hands-on Engineering" },
    { number: "06+", label: "Production & Client Systems" },
    { number: "100+", label: "Students Mentored in Code" },
  ];

  return (
    <section id="about" className="py-24 border-t border-white/5 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Subtle Category Tag */}
        <p className="text-xs font-semibold uppercase tracking-widest text-sky-400 mb-6">
          About
        </p>

        {/* The Big Statement — Ultra Bold, Clean, Confident */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-slate-100 leading-snug tracking-tight mb-8">
          I am a web developer and educator at{" "}
          <a
            href="https://dremoy.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-sky-300 underline underline-offset-8 decoration-sky-500/50 hover:decoration-sky-400 transition-colors font-bold inline-flex items-center gap-1"
          >
            Dremoy IT
            <ArrowUpRight className="w-5 h-5 text-sky-400 inline" />
          </a>
          . I split my time between engineering real-world web apps with React, Next.js, and Laravel, and helping students learn to code.
        </h2>

        {/* Short, Crisp 2-Sentence Essence */}
        <p className="text-base sm:text-lg text-slate-400 leading-relaxed font-normal max-w-2xl mb-12">
          I care about clean component architecture, reliable databases, and code that solves actual problems. When I am not pushing code or setting up VPS servers, I am in the classroom breaking down programming concepts for the next generation of builders.
        </p>

        {/* Clean, Non-Gimmicky Impact Metrics */}
        <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/5">
          {highlights.map((item) => (
            <div key={item.label}>
              <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-1">
                {item.number}
              </div>
              <p className="text-xs sm:text-sm text-slate-400 font-medium leading-snug">
                {item.label}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
