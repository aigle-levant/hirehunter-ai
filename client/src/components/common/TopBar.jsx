import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react"; // optional icons

export default function TopBar() {
  const [fadeIn, setFadeIn] = useState(false);
  const [darkMode, setDarkMode] = useState(
    document.documentElement.classList.contains("dark")
  );

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

  const toggleDarkMode = () => {
    if (darkMode) {
      document.documentElement.classList.remove("dark");
      setDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      setDarkMode(true);
    }
  };

  return (
    <div className="h-30 rounded-bl-2xl pb-7 bg-white/90 backdrop-blur-md border-b border-slate-200 flex items-center justify-between px-10 top-0 z-40 dark:bg-slate-900/90 dark:border-slate-700">
      {/* Greeting */}
      <div
        className={`mt-10 mb-6 flex flex-col space-y-1 transition-opacity duration-1000 ${
          fadeIn ? "opacity-100" : "opacity-0"
        }`}
      >
        <h1 className="text-9xl font-sans sm:text-5xl font-extrabold text-slate-900 dark:text-white leading-tight">
          Hi,{" "}
          <span className="text-[#1C398E] dark:text-blue-300">Prajanya</span>
        </h1>
        <p className="text-medium font-inter sm:text-xl text-[#71717B] dark:text-slate-400">
          {currentTime}
        </p>
      </div>

      {/* Dark mode toggle */}
      <div
        className={`transition-opacity duration-1000 ${
          fadeIn ? "opacity-100" : "opacity-0"
        }`}
      >
        <button
          onClick={toggleDarkMode}
          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition"
        >
          {darkMode ? (
            <>
              <Sun className="w-5 h-5 text-yellow-400" /> Light Mode
            </>
          ) : (
            <>
              <Moon className="w-5 h-5 text-gray-800" /> Dark Mode
            </>
          )}
        </button>
      </div>
    </div>
  );
}
