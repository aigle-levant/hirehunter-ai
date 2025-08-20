import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import { motion, AnimatePresence } from "framer-motion";
import { Sticker, ListOrdered, Calendar } from "lucide-react";
import { useInView } from "react-intersection-observer";

const features = [
  {
    icon: <Sticker className="w-8 h-8 text-blue-500" />,
    title: "A single score. Infinite insights.",
    description:
      "Every resume distilled into one score. No bias. No wasted time. Just clarity that helps you act fast, and act fair.",
    button: "Check out candidates' HireScore",
    accent: "from-blue-500/20 to-blue-600/10 shadow-blue-400/30",
  },
  {
    icon: <ListOrdered className="w-8 h-8 text-green-500" />,
    title: "See the best, instantly.",
    description:
      "The dynamic Leaderboard shifts as new talent comes in, spotlighting the strongest candidates in real time.",
    button: "View the leaderboard rankings",
    accent: "from-green-500/20 to-green-600/10 shadow-green-400/30",
  },
  {
    icon: <Calendar className="w-8 h-8 text-purple-500" />,
    title: "One click to connect.",
    description:
      "With calendar sync, Hirehunter books meetings automatically — so you never lose momentum with top talent.",
    button: "Schedule an interview",
    accent: "from-purple-500/20 to-purple-600/10 shadow-purple-400/30",
  },
];

export default function Solution() {
  const [index, setIndex] = useState(0);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 });

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % features.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleMove = (e) => {
      setMouse({
        x: (e.clientX - window.innerWidth / 2) * 0.01,
        y: (e.clientY - window.innerHeight / 2) * 0.01,
      });
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <section
      id="solution"
      ref={ref}
      className="relative overflow-hidden py-24 px-6 md:px-16 
                 bg-white dark:bg-gray-900"
    >
      {/* Main content */}
      <motion.div
        initial={{ opacity: 0, y: 80, scale: 0.95 }}
        animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="relative max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center z-10"
      >
        {/* LEFT: Intro */}
        <div className="relative space-y-6">
          <h2 className="text-4xl md:text-5xl font-basier-circle font-bold leading-tight">
            Meet Hirehunter
          </h2>
          <p className="text-lg text-gray-600 font-body dark:text-gray-400 max-w-lg">
            Your AI hiring buddy that replaces bias with data and guesswork with
            clarity. Because hiring should be about potential, not privilege.
          </p>

          {/* Mini buddy */}
          <div className="flex items-center gap-3 mt-8">
            <div className="w-16 h-16 rounded-full bg-blue-500/10 border border-blue-500/30 shadow-lg shadow-blue-500/20 flex items-center justify-center">
              <Sticker className="w-9 h-9 text-blue-500" />
            </div>
            <span className="text-xl font-basier-circle font-bold text-blue-600 dark:text-blue-400">
              Say hi to Hunter!
            </span>
          </div>
        </div>

        {/* RIGHT: Animated Cards */}
        <div className="relative w-full max-w-md mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
                rotateX: mouse.y,
                rotateY: mouse.x,
              }}
              exit={{ opacity: 0, y: -50, scale: 0.95 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <Card
                className={`relative bg-white/10 dark:bg-gray-800/20 border border-white/20 rounded-2xl shadow-xl p-6 backdrop-blur-md hover:shadow-2xl transition-all duration-300 font-body`}
              >
                <CardHeader>
                  <div className="flex items-center gap-4 mb-3">
                    {features[index].icon}
                    <CardTitle className="text-xl font-basier-circle font-bold">
                      {features[index].title}
                    </CardTitle>
                  </div>
                  <CardDescription className="text-gray-700 dark:text-gray-300">
                    {features[index].description}
                  </CardDescription>
                </CardHeader>
                <CardFooter>
                  <Button
                    size="lg"
                    className="w-full font-semibold rounded-xl shadow-md"
                  >
                    {features[index].button}
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.div>
    </section>
  );
}
