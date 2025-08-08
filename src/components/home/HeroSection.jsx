import { Button } from "@/components/ui/button";
import { NavLink } from "react-router-dom";
import { Sticker } from "lucide-react";

export default function HeroSection() {
  return (
    <section id="hero" className="bg-white text-zinc-950 my-5">
      <div className="flex flex-row">
        <div className="flex flex-col">
          <h1 className="font-sans text-4xl">
            Eliminate your hiring woes with
            <p className="font-sans text-4xl font-bold text-blue-900">
              100% accuracy
            </p>
          </h1>
          <p className="font-body text-xl">
            Meet Hirehunter, your AI wingman for hiring.
          </p>
        </div>
        <div className="bg-amber-50 flex flex-col">
          <div className="flex flex-row">
            <div className="rounded-full p-4 bg-blue-900">
              <Sticker size={40} color="#ffffff" absoluteStrokeWidth />
            </div>
            <div className="rounded-2xl px-5 py-3">
              Hey champ! What would you like to do today?
            </div>
          </div>
          <div className="flex flex-col">
            <Button variant="outline">
              <NavLink
                to="/schedule"
                className="text-white hover:text-white transition-colors duration-200 font-medium"
              >
                Schedule an interview
              </NavLink>
            </Button>
            <Button variant="outline">
              <NavLink
                to="/scan"
                className="text-white hover:text-white transition-colors duration-200 font-medium"
              >
                Scan some resumes
              </NavLink>
            </Button>
            <Button variant="outline">
              <NavLink
                to="/leaderboard"
                className="text-white hover:text-white transition-colors duration-200 font-medium"
              >
                Check the leaderboard
              </NavLink>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
