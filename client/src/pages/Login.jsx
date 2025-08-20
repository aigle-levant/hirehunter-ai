import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Moon, Sun, Sticker } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Login() {
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

  return (
    <div className="min-h-screen flex items-center justify-center transition-colors duration-500">
      {/* Login Card */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`rounded-3xl shadow-xl max-w-md w-full p-10 border relative overflow-hidden ${
          isDarkMode
            ? "bg-gray-900 border-gray-800"
            : "bg-white border-gray-200"
        }`}
      >
        {/* Background Glow */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute -top-32 -right-32 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl" />
          <div className="absolute -bottom-32 -left-32 w-72 h-72 bg-indigo-400/20 rounded-full blur-3xl" />
        </div>

        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="flex justify-center mb-8"
        >
          <Sticker
            size={70}
            className="text-blue-600 dark:text-blue-300 drop-shadow-2xl"
          />
        </motion.div>

        {/* Line Reveal Heading */}
        <motion.h1
          initial={{ clipPath: "inset(0 100% 0 0)" }}
          animate={{ clipPath: "inset(0 0% 0 0)" }}
          transition={{ duration: 1, ease: "easeOut" }}
          className={`text-3xl font-basier-circle font-bold text-center mb-3 ${
            isDarkMode ? "text-white" : "text-gray-900"
          }`}
        >
          Welcome back, <span>Prajanya</span>
        </motion.h1>

        <motion.p
          initial={{ clipPath: "inset(0 100% 0 0)" }}
          animate={{ clipPath: "inset(0 0% 0 0)" }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className={`text-center mb-10 font-body ${
            isDarkMode ? "text-gray-400" : "text-gray-600"
          }`}
        >
          Let's hire some awesome candidates!
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Button
            size="lg"
            className="flex-1 py-3 px-6 text-base font-semibold bg-black dark:bg-white dark:text-black font-basier-square text-white shadow-lg hover:shadow-xl transition-all"
          >
            <a href="/dashboard">Go to Dashboard</a>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className={`flex-1 py-3 font-basier-square px-6 text-base font-medium ${
              isDarkMode
                ? "border-gray-700 bg-gray-800 text-gray-200 hover:bg-gray-700"
                : "border-gray-300 bg-white text-gray-700 hover:bg-gray-50"
            }`}
          >
            Logout
          </Button>
        </motion.div>
      </motion.div>
    </div>
  );
}
