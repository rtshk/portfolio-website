import HeroSection from "./components/HeroSection/HeroSection";
import About from "./components/About";

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
        <div className="snap-center h-screen">
          
        </div>
      </main>
    </>
  );
}
