import { Button } from "@/components/ui/button";
import { NavLink } from "react-router-dom";

export default function FinalCTA() {
  return (
    <section
      id="final"
      className="font-sans flex flex-col items-center justify-center gap-6
                 bg-white/70 dark:bg-zinc-900/70 backdrop-blur-md
                 py-20 px-8 rounded-3xl max-w-3xl mx-auto text-center
                 transition-colors duration-500"
    >
      <h2
        className="text-4xl font-extrabold leading-tight
                     text-gray-900 dark:text-gray-100"
      >
        Ready to hire smarter, <br /> not harder?
      </h2>
      <NavLink to="/scan">
        <Button
          className="px-10 py-4 rounded-full font-semibold shadow-md
                         hover:scale-105 transition-transform duration-300
                         bg-blue-900 text-white
                         hover:bg-blue-800
                         dark:bg-blue-700 dark:hover:bg-blue-600"
        >
          Get Started
        </Button>
      </NavLink>
    </section>
  );
}
