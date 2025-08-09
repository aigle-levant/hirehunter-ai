import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { motion, AnimatePresence } from "framer-motion";
import { Sticker, ListOrdered, Calendar } from "lucide-react";

const features = [
  {
    icon: <Sticker className="w-8 h-8 text-blue-600 dark:text-blue-400" />,
    title: "A single score. Infinite insights.",
    description:
      "HireScore distills every resume into a data-backed rating: fair, fast, and bias-free.",
    button: "Check out candidates' HireScore",
  },
  {
    icon: (
      <ListOrdered className="w-8 h-8 text-green-600 dark:text-green-400" />
    ),
    title: "See the best, instantly.",
    description:
      "The Leaderboard ranks top candidates in real-time, so you focus on who matters — not just who applied first.",
    button: "View the leaderboard rankings",
  },
  {
    icon: <Calendar className="w-8 h-8 text-purple-600 dark:text-purple-400" />,
    title: "One click to connect.",
    description:
      "Hirehunter auto-schedules interviews with top picks, syncing with your calendar to save hours, and sanity.",
    button: "Schedule an interview",
  },
];

export default function Solution() {
  const [index, setIndex] = useState(0);

  // Auto-slide every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % features.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="solution"
      className="relative font-sans flex flex-col md:flex-row items-center justify-center gap-10 p-8
                 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-gray-200 transition-colors duration-300"
    >
      {/* Left side - Intro */}
      <div className="flex flex-col max-w-md">
        <h2 className="text-3xl font-bold leading-snug">
          Meet{" "}
          <span className="text-blue-900 dark:text-blue-400">Hirehunter</span>
        </h2>
        <p className="mt-4 text-gray-600 dark:text-gray-400">
          Your AI hiring buddy that replaces bias with data and guesswork with
          clarity. Because hiring should be about potential, not privilege.
        </p>

        {/* Sticker Icon Buddy */}
        <div className="mt-6 flex items-center gap-3">
          <div className="w-16 h-16 rounded-full bg-white/30 dark:bg-zinc-700/40 backdrop-blur-lg shadow-lg flex items-center justify-center transition-colors duration-300">
            <Sticker className="w-10 h-10 text-blue-600 dark:text-blue-400" />
          </div>
          <span className="text-lg font-semibold text-blue-700 dark:text-blue-400">
            Hello!
          </span>
        </div>
      </div>

      <div className="relative w-full max-w-sm">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            <Card className="bg-white/20 dark:bg-zinc-800/70 backdrop-blur-lg border border-white/40 dark:border-zinc-600 shadow-xl rounded-2xl p-4 transition-colors duration-300">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  {features[index].icon}
                  <CardTitle className="text-xl text-blue-900 dark:text-blue-400">
                    {features[index].title}
                  </CardTitle>
                </div>
                <CardDescription className="text-gray-700 dark:text-gray-300">
                  {features[index].description}
                </CardDescription>
              </CardHeader>
              <CardFooter>
                <Button className="w-full">{features[index].button}</Button>
              </CardFooter>
            </Card>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
