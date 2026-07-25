import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import Stats from "@/components/Stats";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Skills from "@/components/Skills";
import Certifications from "@/components/Certifications";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Contact from "@/components/Contact";
import Reveal from "@/components/Reveal";

export default function Home() {
  return (
    <main>
      <Hero />
      <TrustBar />
      <Reveal>
        <Stats />
      </Reveal>
      <Reveal>
        <About />
      </Reveal>
      <Reveal>
        <Projects />
      </Reveal>
      <Reveal>
        <Services />
      </Reveal>
      <Reveal>
        <Skills />
      </Reveal>
      <Reveal>
        <Certifications />
      </Reveal>
      <Reveal>
        <Testimonials />
      </Reveal>
      <Reveal>
        <FAQ />
      </Reveal>
      <Reveal>
        <FinalCTA />
      </Reveal>
      <Reveal>
        <Contact />
      </Reveal>
    </main>
  );
}
