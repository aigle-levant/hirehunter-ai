import { useEffect, useState } from "react";

export default function TopBar() {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setFadeIn(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const currentTime = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="h-24 bg-white/90 backdrop-blur-md border-b border-slate-200 flex items-center justify-between px-10 top-0 z-40 dark:bg-slate-900/90 dark:border-slate-700">
      <div
        className={`mt-10 flex flex-col space-y-1 transition-opacity duration-1000 ${
          fadeIn ? "opacity-100" : "opacity-0"
        }`}
      >
        <h1 className="text-9xl font-sans sm:text-5xl font-extrabold text-slate-900 dark:text-white leading-tight">
          Hi, <span className="text-[#1C398E]">Prajanya</span>
        </h1>
        <p className="text-medium font-inter sm:text-xl text-[#71717B] dark:text-slate-400">
          {currentTime}
        </p>
      </div>

      <div
        className={`transition-opacity duration-1000 ${
          fadeIn ? "opacity-100" : "opacity-0"
        }`}
      ></div>
    </div>
  );
}
