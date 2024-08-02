import HeroSection from "./components/HeroSection/HeroSection";
import About from "./components/About";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Education from "./components/Education/Education";

export default function Home() {
  return (
    <>
      <main className="flex flex-col bg-[#121212] snap-y snap-mandatory overflow-y-scroll h-screen">
        <div className="snap-start h-screen">
          <HeroSection />
        </div>
        <div className="snap-center h-screen">
          <About />
        </div>
        <div className="snap-end h-screen">
          <Skills/>
        </div>
        <div className="snap-end h-screen">
          <Projects/>
        </div>
        <div className="snap-end h-screen">
          <Education/>
        </div>
        
      </main>
    </>
  );
}
