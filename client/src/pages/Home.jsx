import HeroSection from "../components/home/HeroSection.jsx";
import HowItWorks from "../components/home/HowItWorks.jsx";
import Testimonials from "../components/home/Testimonials.jsx";
import Solution from "../components/home/Solution.jsx";
import FinalCTA from "../components/home/FinalCTA.jsx";
import ProblemStatement from "../components/home/ProblemStatement.jsx";
import { useEffect, useState } from "react";
import LoadingScreen from "../components/common/LoadingScreen.jsx";
import CurtainsOpen from "../components/common/CurtainsOpen.jsx";

export default function Home() {
  // "loading" -> show spinner/splash
  // "transition" -> curtain wipe
  // "content" -> show page
  const [phase, setPhase] = useState("loading");

  useEffect(() => {
    // 1) show your LoadingScreen for ~2.6–3s (tweak to taste)
    const t1 = setTimeout(() => setPhase("transition"), 2500);
    return () => clearTimeout(t1);
  }, []);

  return (
    <>
      {phase === "loading" && <LoadingScreen />}

      {phase === "transition" && (
        <CurtainsOpen onComplete={() => setPhase("content")} />
      )}

      <div
        className={`transition-opacity duration-700 ${
          phase === "content" ? "opacity-100" : "opacity-100"
        }`}
      >
        <section id="home">
          <HeroSection />
          <ProblemStatement />
          <Solution />
          <HowItWorks />
          <Testimonials />
          <FinalCTA />
        </section>
      </div>
    </>
  );
}
