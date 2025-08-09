import { Button } from "@/components/ui/button";

export default function FinalCTA() {
  return (
    <section
      id="final"
      className="font-sans flex flex-col items-center justify-center gap-6 bg-white/70 backdrop-blur-md
                 py-20 px-8 rounded-3xl max-w-3xl mx-auto text-center"
    >
      <h2 className="text-4xl font-extrabold leading-tight text-gray-900">
        Ready to hire smarter, <br /> not harder?
      </h2>
      <Button className="px-10 py-4 rounded-full font-semibold shadow-md hover:scale-105 transition-transform duration-300">
        Get Started
      </Button>
    </section>
  );
}
