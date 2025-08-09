import { NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sticker } from "lucide-react";

export default function AIDialog() {
  return (
    <div
      id="suggestion"
      className="max-w-xl mx-auto bg-blue-50 dark:bg-zinc-800 rounded-2xl p-6 shadow-lg space-y-6"
    >
      <div
        id="ai"
        className="flex items-center space-x-4 bg-white dark:bg-zinc-900 rounded-xl p-4 shadow-sm"
      >
        <div className="bg-blue-700 rounded-full p-3 flex-shrink-0 shadow-md">
          <Sticker size={36} color="#fff" strokeWidth={1.5} />
        </div>
        <p className="text-gray-800 dark:text-gray-300 text-lg leading-relaxed">
          Hey! This candidate has some strong{" "}
          <span className="font-semibold">UI/UX foundation</span>. Back-end
          could do with some improvement, though.
        </p>
      </div>
      <div id="further-btns" className="flex justify-center space-x-6">
        <NavLink to="/parser" className="w-max">
          <Button
            variant="outline"
            className="rounded-full px-6 py-2 font-medium hover:bg-blue-100 dark:hover:bg-zinc-700 transition"
          >
            Add more resumes
          </Button>
        </NavLink>
        <NavLink to="/leaderboard" className="w-max">
          <Button
            variant="outline"
            className="rounded-full px-6 py-2 font-medium hover:bg-blue-100 dark:hover:bg-zinc-700 transition"
          >
            Go to leaderboard
          </Button>
        </NavLink>
      </div>
    </div>
  );
}
