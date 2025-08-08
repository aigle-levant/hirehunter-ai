import HeroSection from "../components/home/HeroSection.jsx";
import HowItWorks from "../components/home/HowItWorks.jsx";
import Testimonials from "../components/home/Testimonials.jsx";
import Solution from "../components/home/Solution.jsx";
import FinalCTA from "../components/home/FinalCTA.jsx";
import ProblemStatement from "../components/home/ProblemStatement.jsx";

export default function Home() {
  return (
    <section id="home">
      <HeroSection />
      <ProblemStatement />
      <Solution />
      <HowItWorks />
      <Testimonials />
      <FinalCTA />
    </section>
  );
}
