import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";

export default function Auth() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Load theme on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (
      savedTheme === "dark" ||
      (!savedTheme && window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      setIsDarkMode(true);
    }
  }, []);

  // Apply theme to <html>
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  return (
    <main
      className={`min-h-screen flex items-center justify-center transition-colors duration-300
        ${
          isDarkMode
            ? "bg-gray-950 text-white"
            : "bg-gradient-to-br from-blue-50 to-white text-gray-900"
        }`}
    >
      {/* Example toggle button – remove if you don’t want */}
      <button
        onClick={toggleTheme}
        className="absolute top-4 right-4 px-3 py-1.5 rounded-full text-sm 
                   bg-gray-200 dark:bg-gray-800 dark:text-white shadow"
      >
        {isDarkMode ? "Light" : "Dark"} Mode
      </button>

      <Outlet />
    </main>
  );
}
