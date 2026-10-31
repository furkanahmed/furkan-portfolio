import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
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
        {/* Section 2: Hero Section with FadeIn */}
        <FadeIn delay={100}>
          <Hero />
        </FadeIn>

        {/* Section 3: About Me (Placeholder with Scroll Reveal) */}
        <FadeIn delay={150}>
          <section id="about" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24 border-t border-white/5">
            <span className="text-xs font-semibold uppercase tracking-wider text-emerald-400">Step 4 Next</span>
            <h2 className="text-3xl font-bold text-white mt-1 mb-3">About Me</h2>
            <p className="text-slate-400 leading-relaxed max-w-2xl">
              Scroll Reveal সক্রিয় রয়েছে — নিচের দিকে স্ক্রোল করার সাথে সাথে প্রতিটি সেকশন এভাবে আলতো করে নিচ থেকে ওপরে ভেসে উঠবে।
            </p>
          </section>
        </FadeIn>

        {/* Section 4: Skills */}
        <FadeIn delay={150}>
          <section id="skills" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24 border-t border-white/5">
            <span className="text-xs font-semibold uppercase tracking-wider text-emerald-400">Step 5 Next</span>
            <h2 className="text-3xl font-bold text-white mt-1 mb-3">Skills &amp; Technologies</h2>
            <p className="text-slate-400 leading-relaxed max-w-2xl">
              Section placeholder — Ready for Step 5
            </p>
          </section>
        </FadeIn>

        {/* Section 5: Experience */}
        <FadeIn delay={150}>
          <section id="experience" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24 border-t border-white/5">
            <span className="text-xs font-semibold uppercase tracking-wider text-emerald-400">Step 7 Next</span>
            <h2 className="text-3xl font-bold text-white mt-1 mb-3">Professional Experience</h2>
            <p className="text-slate-400 leading-relaxed max-w-2xl">
              Section placeholder — Ready for Step 7
            </p>
          </section>
        </FadeIn>

        {/* Section 6: Education */}
        <FadeIn delay={150}>
          <section id="education" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24 border-t border-white/5">
            <span className="text-xs font-semibold uppercase tracking-wider text-emerald-400">Step 6 Next</span>
            <h2 className="text-3xl font-bold text-white mt-1 mb-3">Educational Qualification</h2>
            <p className="text-slate-400 leading-relaxed max-w-2xl">
              Section placeholder — Ready for Step 6
            </p>
          </section>
        </FadeIn>

        {/* Section 7: Projects */}
        <FadeIn delay={150}>
          <section id="projects" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24 border-t border-white/5">
            <span className="text-xs font-semibold uppercase tracking-wider text-emerald-400">Step 8 Next</span>
            <h2 className="text-3xl font-bold text-white mt-1 mb-3">Featured Projects</h2>
            <p className="text-slate-400 leading-relaxed max-w-2xl">
              Section placeholder — Ready for Step 8
            </p>
          </section>
        </FadeIn>

        {/* Section 8: Contact */}
        <FadeIn delay={150}>
          <section id="contact" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24 border-t border-white/5">
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
