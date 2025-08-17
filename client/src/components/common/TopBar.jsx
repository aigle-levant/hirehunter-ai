import { Button } from "@/components/ui/button";
import { Bell } from "lucide-react";

export default function TopBar() {
  const currentTime = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="h-20 bg-white/80 backdrop-blur-md border-b border-slate-200/60 flex items-center justify-between px-8 sticky top-0 z-40 dark:bg-slate-900/80 dark:border-slate-700/50">
      <div className="flex flex-col">
        <h1 className="text-4xl font-bold text-slate-900 dark:text-white">
          Hi, <span className="text-blue-600">Prajanya</span>
        </h1>
        <p className="text-base text-slate-500 dark:text-slate-400 mt-1">
          {currentTime}
        </p>
      </div>

      <div className="flex items-center">
        <div className="relative">
          <Button
            variant="ghost"
            size="icon"
            className="w-12 h-12 rounded-xl bg-slate-50 hover:bg-slate-100 dark:bg-slate-800/50 dark:hover:bg-slate-700/50 transition-all duration-200"
          >
            <Bell className="w-5 h-5 text-slate-600 dark:text-slate-400" />
          </Button>
          <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center">
            <span className="text-xs font-medium text-white">3</span>
          </div>
        </div>
      </div>
    </div>
  );
}
