import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [showNav, setShowNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowNav(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <AnimatePresence>
      {showNav && (
        <motion.header
          initial={{ y: -100, opacity: 0, scale: 0.95 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{
            type: "spring",
            stiffness: 80,
            damping: 12,
          }}
          className="fixed top-4 left-1/2 z-50 w-[90%] max-w-4xl -translate-x-1/2"
        >
          <nav
            className={`rounded-2xl px-5 py-3 shadow-lg border transition-all duration-300 backdrop-blur-md
    ${
      scrolled
        ? "bg-white/30 border-white/20 text-gray-900" // On
        : "bg-blue-900 border-blue-300/20 text-white" //
    }`}
          >
            <div className="hidden md:flex items-center justify-between">
              <NavLink
                to="/"
                className="text-xl font-bold font-sans transition-colors duration-200 relative group"
              >
                Hirehunter
                <span
                  className={`absolute bottom-0 left-0 w-0 h-[2px] transition-all duration-300 group-hover:w-full ${
                    scrolled ? "bg-gray-900" : "bg-white"
                  }`}
                />
              </NavLink>

              <div className="flex items-center space-x-8">
                {["about", "schedule", "leaderboard"].map((link) => (
                  <NavLink
                    key={link}
                    to={`/${link}`}
                    className="font-body relative group"
                  >
                    {link.charAt(0).toUpperCase() + link.slice(1)}
                    <span
                      className={`absolute bottom-0 left-0 w-0 h-[2px] transition-all duration-300 group-hover:w-full ${
                        scrolled ? "bg-gray-900" : "bg-white"
                      }`}
                    />
                  </NavLink>
                ))}
              </div>

              {/* Dark Mode Toggle */}
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-200 text-[#F0F4F9] hover:text-white"
              >
                {isDark ? "🌞" : "🌙"}
              </button>
            </div>

            {/* Mobile Layout */}
            <div className="md:hidden flex items-center justify-between">
              <NavLink
                to="/"
                className="font-bold text-white text-lg relative group"
              >
                Hirehunter
                <span
                  className={`absolute bottom-0 left-0 w-0 h-[2px] transition-all duration-300 group-hover:w-full ${
                    scrolled ? "bg-gray-900" : "bg-white"
                  }`}
                />
              </NavLink>

              <div className="flex items-center space-x-2">
                <button
                  onClick={toggleTheme}
                  className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-[#F0F4F9]"
                >
                  {isDark ? "🌞" : "🌙"}
                </button>
                <button
                  onClick={() => setMenuOpen(!menuOpen)}
                  className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-[#F0F4F9]"
                >
                  {menuOpen ? "✖" : "☰"}
                </button>
              </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
              {menuOpen && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="md:hidden mt-4 pt-4 border-t border-white/20"
                >
                  <div className="flex flex-col space-y-3 font-body">
                    {["about", "schedule", "leaderboard"].map((link) => (
                      <NavLink
                        key={link}
                        to={`/${link}`}
                        onClick={() => setMenuOpen(false)}
                        className="relative group"
                      >
                        {link.charAt(0).toUpperCase() + link.slice(1)}
                        <span
                          className={`absolute bottom-0 left-0 w-0 h-[2px] transition-all duration-300 group-hover:w-full ${
                            scrolled ? "bg-gray-900" : "bg-white"
                          }`}
                        />
                      </NavLink>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </nav>
        </motion.header>
      )}
    </AnimatePresence>
  );
}
