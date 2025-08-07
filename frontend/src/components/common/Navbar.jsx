import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "dark") {
      document.documentElement.classList.add("dark");
      setIsDark(true);
    }
  }, []);

  const toggleTheme = () => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
    setIsDark(!isDark);
  };

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`${
        scrolled ? "top-4" : "-top-32"
      } fixed left-1/2 z-50 w-[90%] max-w-4xl -translate-x-1/2 rounded-full bg-blue-50 px-4 py-2 shadow-md transition-all duration-300 dark:bg-slate-900`}
    >
      <div className="relative flex items-center justify-center">
        <div className="absolute left-4">
          <button
            onClick={toggleTheme}
            className="text-sm text-blue-800 hover:underline dark:text-white"
          >
            {isDark ? "☀ Light Mode" : "🌙 Dark Mode"}
          </button>
        </div>

        <div>
          <NavLink
            to="/"
            className="text-lg font-semibold text-blue-800 hover:text-blue-600 dark:text-white"
          >
            HireHunter
          </NavLink>
        </div>

        <div className="absolute right-4">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-blue-800 dark:text-white"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="absolute top-20 left-1/2 z-40 w-[90%] max-w-4xl -translate-x-1/2 rounded-xl bg-white p-4 shadow-xl border border-blue-100 dark:bg-slate-900 dark:border-slate-700">
          <ul className="space-y-3 text-center text-base text-blue-800 dark:text-white">
            <li>
              <NavLink to="/about" className="block hover:underline">
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/scan" className="block hover:underline">
                Scan Resume
              </NavLink>
            </li>
            <li>
              <NavLink to="/leaderboard" className="block hover:underline">
                Leaderboard
              </NavLink>
            </li>
            <li>
              <NavLink to="/schedule" className="block hover:underline">
                Schedule
              </NavLink>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
