import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import SpotlightBackground from "@/components/SpotlightBackground";
import FadeIn from "@/components/FadeIn";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-black text-[#E8DFD8] selection:bg-amber-400/20 selection:text-amber-200 flex flex-col justify-between">
      {/* Navigation */}
      <Navbar />

      <main className="relative z-10 flex-1">
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

        {/* Section 7: Projects Showcase (Requirement 9) */}
        <FadeIn delay={150}>
          <Projects />
        </FadeIn>

        {/* Section 8: Contact Information (Requirement 10) */}
        <FadeIn delay={150}>
          <Contact />
        </FadeIn>
      </main>

      {/* Section 11: Footer (Requirement 11) */}
      <Footer />
    </div>
  );
}
