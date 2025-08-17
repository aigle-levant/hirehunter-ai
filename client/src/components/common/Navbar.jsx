import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Moon, Sun, Menu, X } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [showNav, setShowNav] = useState(true);
  const [scrolled, setScrolled] = useState(false);

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

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") setIsDark(true);
  }, []);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  return (
    <>
      <style>
        {`
          @keyframes slideDown {
            from {
              transform: translateX(-50%) translateY(-100px);
              opacity: 0;
              scale: 0.95;
            }
            to {
              transform: translateX(-50%) translateY(0);
              opacity: 1;
              scale: 1;
            }
          }
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(-10px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>

      {showNav && (
        <div
          className="font-body fixed top-4 left-1/2 z-50 w-[90%] max-w-6xl -translate-x-1/2"
          style={{
            animation: "slideDown 0.8s ease-out",
          }}
        >
          <nav
            className={`rounded-full px-6 py-4 shadow-lg border transition-all duration-300 backdrop-blur-md ${
              scrolled
                ? "bg-white/50 border-white/30 text-gray-900"
                : "bg-blue-900/90 border-blue-300/30 text-white"
            }`}
          >
            {/* Desktop Layout */}
            <div className="hidden lg:flex items-center justify-between">
              {/* Logo */}
              <a
                href="/"
                className="text-xl font-bold font-sans transition-colors duration-200 relative group"
              >
                Hirehunter
                <span
                  className={`absolute bottom-0 left-0 w-0 h-[2px] transition-all duration-300 group-hover:w-full ${
                    scrolled ? "bg-gray-900" : "bg-white"
                  }`}
                />
              </a>

              {/* Navigation Links */}
              <div className="flex items-center space-x-8">
                {["about", "schedule", "leaderboard"].map((link) => (
                  <a
                    key={link}
                    href={`/${link}`}
                    className="font-medium relative group transition-colors duration-200 hover:opacity-80"
                  >
                    {link.charAt(0).toUpperCase() + link.slice(1)}
                    <span
                      className={`absolute bottom-0 left-0 w-0 h-[2px] transition-all duration-300 group-hover:w-full ${
                        scrolled ? "bg-gray-900" : "bg-white"
                      }`}
                    />
                  </a>
                ))}
              </div>

              {/* Right Side: Auth Button + Theme Toggle */}
              <div className="flex items-center space-x-4">
                {/* Combined Login/Signup Button */}
                <a href="/login">
                  <Button
                    className={`transition-all duration-200 rounded-2xl ${
                      scrolled
                        ? "bg-blue-600/90 hover:bg-blue-700 text-white backdrop-blur-sm shadow-lg"
                        : "bg-white text-blue-900 hover:bg-gray-100"
                    }`}
                  >
                    Get Started
                  </Button>
                </a>

                {/* Theme Toggle */}
                <button
                  onClick={toggleTheme}
                  className={`p-2 rounded-full transition-all duration-200 ${
                    scrolled
                      ? "bg-gray-100 hover:bg-gray-200 text-gray-900"
                      : "bg-white/10 hover:bg-white/20 text-white"
                  }`}
                >
                  {isDark ? (
                    <Sun className="w-4 h-4" />
                  ) : (
                    <Moon className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>

            {/* Mobile Layout */}
            <div className="lg:hidden flex items-center justify-between">
              {/* Logo */}
              <a href="/" className="font-bold text-lg relative group">
                Hirehunter
                <span
                  className={`absolute bottom-0 left-0 w-0 h-[2px] transition-all duration-300 group-hover:w-full ${
                    scrolled ? "bg-gray-900" : "bg-white"
                  }`}
                />
              </a>

              {/* Mobile Controls */}
              <div className="flex items-center space-x-2">
                {/* Theme Toggle */}
                <button
                  onClick={toggleTheme}
                  className={`p-2 rounded-full transition-all duration-200 ${
                    scrolled
                      ? "bg-gray-100 hover:bg-gray-200 text-gray-900"
                      : "bg-white/10 hover:bg-white/20 text-white"
                  }`}
                >
                  {isDark ? (
                    <Sun className="w-4 h-4" />
                  ) : (
                    <Moon className="w-4 h-4" />
                  )}
                </button>

                {/* Menu Toggle */}
                <button
                  onClick={() => setMenuOpen(!menuOpen)}
                  className={`p-2 rounded-full transition-all duration-200 ${
                    scrolled
                      ? "bg-gray-100 hover:bg-gray-200 text-gray-900"
                      : "bg-white/10 hover:bg-white/20 text-white"
                  }`}
                >
                  {menuOpen ? (
                    <X className="w-4 h-4" />
                  ) : (
                    <Menu className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
              <div
                className="lg:hidden mt-4 pt-4 border-t border-white/20"
                style={{
                  animation: "fadeIn 0.3s ease-out",
                }}
              >
                <div className="flex flex-col space-y-4">
                  {/* Navigation Links */}
                  <div className="flex flex-col space-y-3">
                    {["about", "schedule", "leaderboard"].map((link) => (
                      <a
                        key={link}
                        href={`/${link}`}
                        onClick={() => setMenuOpen(false)}
                        className="relative group font-medium transition-colors duration-200 hover:opacity-80"
                      >
                        {link.charAt(0).toUpperCase() + link.slice(1)}
                        <span
                          className={`absolute bottom-0 left-0 w-0 h-[2px] transition-all duration-300 group-hover:w-full ${
                            scrolled ? "bg-gray-900" : "bg-white"
                          }`}
                        />
                      </a>
                    ))}
                  </div>

                  {/* Auth Buttons */}
                  <div className="flex flex-col space-y-2 pt-2">
                    <a href="/login" onClick={() => setMenuOpen(false)}>
                      <Button
                        variant="ghost"
                        className={`w-full justify-start transition-all duration-200 ${
                          scrolled
                            ? "text-gray-900 hover:bg-gray-100"
                            : "text-white hover:bg-white/20"
                        }`}
                      >
                        Login
                      </Button>
                    </a>
                    <a href="/login" onClick={() => setMenuOpen(false)}>
                      <Button
                        className={`w-full transition-all duration-200 ${
                          scrolled
                            ? "bg-blue-600 hover:bg-blue-700 text-white"
                            : "bg-white text-blue-900 hover:bg-gray-100"
                        }`}
                      >
                        Sign Up
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
            )}
          </nav>
        </div>
      )}
    </>
  );
}
