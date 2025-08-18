import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Sun, Moon } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const links = [
    { name: "About", path: "/about" },
    { name: "Schedule", path: "/schedule" },
    { name: "Leaderboard", path: "/leaderboard" },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/70 backdrop-blur-md shadow-md dark:bg-gray-900/70"
          : "bg-white dark:bg-gray-900"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link
            to="/"
            className={`font-bold font-sans text-2xl tracking-tight ${
              scrolled
                ? "text-gray-900 dark:text-white"
                : "text-gray-900 dark:text-gray-200"
            }`}
          >
            Hirehunter
          </Link>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-6">
            {links.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`font-medium relative group transition-colors duration-200 ${
                  scrolled
                    ? "text-gray-900 dark:text-gray-200"
                    : "text-gray-900 dark:text-gray-200"
                }`}
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-current transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}

            {/* Dark Mode Button */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full bg-zinc-50 hover:bg-gray-800 dark:hover:bg-gray-700 transition"
            >
              {darkMode ? (
                <Sun
                  size={20}
                  className="text-yellow-800 hover:text-yellow-200"
                />
              ) : (
                <Moon size={20} className="text-gray-900 hover:text-gray-50" />
              )}
            </button>

            {/* Get Started */}
            <Link to="/login">
              <Button
                className={`transition-all duration-200 rounded-2xl ${
                  scrolled
                    ? "bg-blue-600 hover:bg-blue-700 text-white"
                    : "bg-white text-blue-900 hover:bg-gray-100"
                }`}
              >
                Get Started
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className={`focus:outline-none ${
                scrolled ? "text-gray-900 dark:text-gray-200" : "text-white"
              }`}
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-lg">
          <div className="px-4 pt-2 pb-4 space-y-2">
            {links.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setMenuOpen(false)}
                className="block font-medium py-2 px-4 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                {link.name}
              </Link>
            ))}

            {/* Dark Mode Button (mobile) */}
            <button
              onClick={() => {
                setDarkMode(!darkMode);
                setMenuOpen(false);
              }}
              className="w-full flex items-center justify-center py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition"
            >
              {darkMode ? (
                <Sun size={20} className="mr-2 text-yellow-400" />
              ) : (
                <Moon
                  size={20}
                  className="mr-2 text-gray-900 dark:text-gray-200"
                />
              )}
              {darkMode ? "Light Mode" : "Dark Mode"}
            </button>

            <Link to="/login" onClick={() => setMenuOpen(false)}>
              <Button className="w-full rounded-2xl bg-blue-600 text-white hover:bg-blue-700">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
