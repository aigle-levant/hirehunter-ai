import HeroSection from "../components/home/HeroSection.jsx";
import Body from "../components/home/Body.jsx";
import Testimonials from "../components/home/Testimonials.jsx";
import FAQ from "../components/home/FAQ.jsx";

export default function Home() {
  return (
    <section id="home">
      <HeroSection />
      <Body />
      <Testimonials />
      <FAQ />
    </section>
  );
}
