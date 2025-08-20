import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function TopBar() {
  const [darkMode, setDarkMode] = useState(
    document.documentElement.classList.contains("dark")
  );

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const currentTime = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  const toggleDarkMode = () => {
    if (darkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setDarkMode(true);
    }
  };

  return (
    <header className="top-0 rounded-bl-2xl font-basier-circle z-50 flex items-center justify-between px-10 py-6   bg-white/80 backdrop-blur-xl shadow-sm dark:bg-slate-900/80 ">
      {/* Greeting + Date */}
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="flex flex-col"
      >
        <h1 className="text-5xl mb-2 font-extrabold tracking-tight text-slate-900 dark:text-white">
          Hey,{" "}
          <span className="text-blue-700 dark:text-blue-400">Prajanya</span>
        </h1>
        <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
          {currentTime}
        </p>
      </motion.div>

      {/* Dark Mode Toggle */}
      <AnimatePresence mode="wait" initial={false}>
        {mounted && (
          <motion.button
            key={darkMode ? "dark" : "light"}
            initial={{ opacity: 0, scale: 0.8, rotate: -20 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            exit={{ opacity: 0, scale: 0.8, rotate: 20 }}
            transition={{ duration: 0.3 }}
            onClick={toggleDarkMode}
            className="p-3 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition shadow-md"
          >
            {darkMode ? (
              <Sun className="w-6 h-6 text-yellow-400" />
            ) : (
              <Moon className="w-6 h-6 text-slate-900" />
            )}
          </motion.button>
        )}
      </AnimatePresence>
    </header>
  );
}
