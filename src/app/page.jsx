import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import SpotlightBackground from "@/components/SpotlightBackground";
import FadeIn from "@/components/FadeIn";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#0B0F19] text-slate-100 selection:bg-emerald-500/20 selection:text-emerald-300">
      {/* 01. Cursor Spotlight & Grid Reveal Background */}
      <SpotlightBackground />

      {/* Navigation */}
      <Navbar />

      <main className="relative z-10">
        {/* Section 2: Hero Section */}
        <FadeIn delay={100}>
          <Hero />
        </FadeIn>

        {/* Section 3: About Me */}
        <FadeIn delay={150}>
          <About />
        </FadeIn>

        {/* Section 4: Skills & Technologies */}
        <FadeIn delay={150}>
          <Skills />
        </FadeIn>

        {/* Section 5: Educational Qualification */}
        <FadeIn delay={150}>
          <Education />
        </FadeIn>

        {/* Section 6: Professional Experience */}
        <FadeIn delay={150}>
          <Experience />
        </FadeIn>

        {/* Section 7: Projects */}
        <FadeIn delay={150}>
          <section id="projects" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24 border-t border-white/5">
            <span className="text-xs font-semibold uppercase tracking-wider text-emerald-400">Step 8 Next</span>
            <h2 className="text-3xl font-bold text-white mt-1 mb-3">Featured Projects</h2>
            <p className="text-slate-400 leading-relaxed max-w-2xl">
              Section placeholder — Ready for Step 8
            </p>
          </section>
        </FadeIn>

        {/* Section 8: Contact */}
        <FadeIn delay={150}>
          <section id="contact" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24 border-t border-white/5">
            <span className="text-xs font-semibold uppercase tracking-wider text-emerald-400">Step 10 Next</span>
            <h2 className="text-3xl font-bold text-white mt-1 mb-3">Contact &amp; Inquiries</h2>
            <p className="text-slate-400 leading-relaxed max-w-2xl">
              Section placeholder — Ready for Step 10
            </p>
          </section>
        </FadeIn>
      </main>
    </div>
  );
}
