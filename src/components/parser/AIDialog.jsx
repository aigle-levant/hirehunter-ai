import { Button } from "@/components/ui/button";
import { Sticker } from "lucide-react";

export default function AIDialog() {
  return (
    <div id="suggestion">
      <div id="ai" className="flex flex-row">
        <div className="bg-blue-900 rounded-full p-4">
          <Sticker size={40} color="#ffffff" absoluteStrokeWidth />
        </div>
        <p>
          Hey! This candidate has some strong UI/UX foundation. Back-end could
          do with some improvement, though.
        </p>
      </div>
      <div id="further-btns" className="flex flex-row">
        <Button variant="outline">Add more resumes</Button>
        <Button variant="outline">Go to leaderboard</Button>
      </div>
    </div>
  );
}
