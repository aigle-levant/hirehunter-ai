import HeroSection from "../components/home/HeroSection.tsx";
import Body from "../components/home/Body.tsx";
import Testimonials from "../components/home/Testimonials.tsx";
import FAQ from "../components/home/FAQ.tsx";

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
