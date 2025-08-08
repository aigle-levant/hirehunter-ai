import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setScrolled(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <header
      className={`${
        scrolled ? "top-4" : "-top-32"
      } fixed top-4 left-1/2 z-50 w-[90%] max-w-4xl -translate-x-1/2 bg-blue-900 px-2 py-1 font-sans`}
    >
      <nav className="rounded-2xl px-6 py-3 shadow-lg backdrop-blur-md border border-[#2F52E0]/20">
        <div className="hidden md:flex items-center justify-between">
          <NavLink
            to="/"
            className="text-xl font-sans font-bold text-white transition-colors duration-200"
          >
            Hirehunter
          </NavLink>

          {/* Center Links */}
          <div className="flex items-center space-x-8">
            <NavLink
              to="/about"
              className="text-white hover:text-white transition-colors duration-200 font-medium"
            >
              About
            </NavLink>
            <NavLink
              to="/schedule"
              className="text-white hover:text-white transition-colors duration-200 font-medium"
            >
              Schedule
            </NavLink>
            <NavLink
              to="/leaderboard"
              className="text-white hover:text-white transition-colors duration-200 font-medium"
            >
              Leaderboard
            </NavLink>
          </div>

          {/* Dark Mode Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-200 text-[#F0F4F9] hover:text-white"
            aria-label="Toggle theme"
          >
            {isDark ? (
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
            ) : (
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden flex items-center justify-between">
          {/* Logo */}
          <NavLink to="/" className="font-sans font-bold text-white text-lg">
            Hirehunter
          </NavLink>

          {/* Right side buttons */}
          <div className="flex items-center space-x-2">
            {/* Dark Mode Toggle Mobile */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-200 text-[#F0F4F9]"
              aria-label="Toggle theme"
            >
              {isDark ? (
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              ) : (
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  />
                </svg>
              )}
            </button>

            {/* Hamburger Menu */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-200 text-[#F0F4F9]"
              aria-label="Toggle menu"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {menuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {menuOpen && (
          <div className="md:hidden mt-4 pt-4 border-t border-white/20">
            <div className="flex flex-col space-y-3">
              <NavLink
                to="/about"
                className="text-white hover:text-white transition-colors duration-200 font-medium py-2"
                onClick={() => setMenuOpen(false)}
              >
                About
              </NavLink>
              <NavLink
                to="/schedule"
                className="text-white hover:text-white transition-colors duration-200 font-medium py-2"
                onClick={() => setMenuOpen(false)}
              >
                Schedule
              </NavLink>
              <NavLink
                to="/leaderboard"
                className="text-white hover:text-white transition-colors duration-200 font-medium py-2"
                onClick={() => setMenuOpen(false)}
              >
                Leaderboard
              </NavLink>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
