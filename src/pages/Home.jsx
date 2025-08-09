import HeroSection from "../components/home/HeroSection.jsx";
import HowItWorks from "../components/home/HowItWorks.jsx";
import Testimonials from "../components/home/Testimonials.jsx";
import Solution from "../components/home/Solution.jsx";
import FinalCTA from "../components/home/FinalCTA.jsx";
import ProblemStatement from "../components/home/ProblemStatement.jsx";
import { useEffect, useState } from "react";
import LoadingScreen from "../components/common/LoadingScreen.jsx";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      {loading && <LoadingScreen />}
      <div
        className={
          loading ? "opacity-0" : "opacity-100 transition-opacity duration-500"
        }
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
