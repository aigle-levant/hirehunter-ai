import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { Loader2, Moon, Sun, Sticker } from "lucide-react";

export default function Login() {
  const [isLoading, setIsLoading] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (
      savedTheme === "dark" ||
      (!savedTheme && window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      setIsDarkMode(true);
    }
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  if (isLoading) {
    return (
      <div
        className={`min-h-screen flex items-center justify-center transition-colors duration-300 ${
          isDarkMode ? "bg-gray-900" : "bg-white"
        }`}
      >
        <div className="flex flex-col items-center space-y-4">
          <div className="flex justify-center animate-pulse">
            <Sticker size={80} color="#3b82f6" className="drop-shadow-2xl" />
          </div>

          <div className="flex items-center space-x-2">
            <Loader2
              className={`w-5 h-5 animate-spin ${
                isDarkMode ? "text-blue-400" : "text-blue-600"
              }`}
            />
            <span
              className={`text-sm ${
                isDarkMode ? "text-gray-300" : "text-gray-600"
              }`}
            >
              Fetching your details...
            </span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        isDarkMode ? "bg-gray-900" : "bg-white"
      }`}
    >
      <div className="absolute top-4 right-4">
        <Button
          variant="ghost"
          size="icon"
          onClick={toggleTheme}
          className={`w-10 h-10 rounded-full ${
            isDarkMode
              ? "hover:bg-gray-800 text-gray-300"
              : "hover:bg-gray-100 text-gray-600"
          }`}
        >
          {isDarkMode ? (
            <Sun className="w-5 h-5" />
          ) : (
            <Moon className="w-5 h-5" />
          )}
        </Button>
      </div>

      <main className="flex items-center justify-center min-h-screen p-4">
        <div
          className={`rounded-3xl p-8 max-w-md w-full shadow-lg border transition-all duration-300 ${
            isDarkMode
              ? "bg-gray-800 border-gray-700 shadow-gray-900/20 bg-gradient-to-br from-gray-800 to-gray-800/80"
              : "bg-gradient-to-br from-white via-blue-50/50 to-blue-100/30 border-blue-200/50 shadow-blue-200/30"
          }`}
        >
          <div className="flex justify-center mb-6">
            <Sticker size={64} color="#3b82f6" className="drop-shadow-2xl" />
          </div>

          <div className="text-center mb-8">
            <h1
              className={`text-2xl font-bold mb-2 ${
                isDarkMode ? "text-white" : "text-gray-900"
              }`}
            >
              Welcome, <span className="text-blue-600">Prajanya</span>
            </h1>
            <p className={`${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
              Good to see you here!
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <Button
              variant="primary"
              className="flex-1 py-3 px-6 text-base font-medium bg-black dark:bg-white dark:text-black text-white"
              size="lg"
            >
              <a href="/dashboard">Go to dashboard</a>
            </Button>
            <Button
              variant="ghost"
              className={`flex-1 transition-colors py-3 px-6 text-base font-medium ${
                isDarkMode
                  ? "border-gray-600 bg-gray-700 text-gray-200 hover:bg-gray-600 hover:text-white hover:border-gray-500"
                  : "border-gray-300 bg-white text-gray-700 hover:bg-gray-50 hover:border-gray-400"
              }`}
              size="lg"
            >
              Logout
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
}
