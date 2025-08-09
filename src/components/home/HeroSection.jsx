import { Button } from "@/components/ui/button";
import { NavLink } from "react-router-dom";
import { Sticker } from "lucide-react";
import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";

const greetingText = "Hey champ! What would you like to do today?";

export default function HeroSection() {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);
  const textRef = useRef(greetingText);

  useEffect(() => {
    if (index < textRef.current.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + textRef.current.charAt(index));
        setIndex((prev) => prev + 1);
      }, 50);
      return () => clearTimeout(timeout);
    }
  }, [index]);

  return (
    <section
      id="hero"
      className="bg-white dark:bg-zinc-900 text-zinc-950 dark:text-gray-200 py-16"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 px-6">
        <div className="flex-1 space-y-6">
          <h1 className="font-sans text-5xl md:text-6xl leading-tight">
            Eliminate your hiring woes with{" "}
            <span className="block font-extrabold text-transparent bg-clip-text bg-blue-900 dark:bg-blue-400">
              100% accuracy
            </span>
          </h1>
          <p className="font-body text-xl text-gray-700 dark:text-gray-300 max-w-xl">
            Meet{" "}
            <span className="font-semibold text-blue-900 dark:text-blue-400">
              Hirehunter
            </span>
            , your AI wingman for hiring — making recruitment faster, smarter,
            and stress-free.
          </p>
        </div>

        <div
          className="relative w-full max-w-md p-6 flex flex-col gap-6
                     bg-white/35 dark:bg-zinc-800/60 backdrop-blur-[9px] rounded-2xl border border-white/30 dark:border-zinc-700
                     shadow-[0_8px_32px_rgba(0,0,0,0.1),inset_0_1px_0_rgba(255,255,255,0.5),inset_0_-1px_0_rgba(255,255,255,0.1),inset_0_0_14px_7px_rgba(255,255,255,0.7)]
                     dark:shadow-none overflow-hidden"
        >
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/80 to-transparent dark:via-zinc-600" />
          <div className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-white/80 via-transparent to-white/30 dark:from-zinc-600" />

          <div className="flex items-center gap-4">
            <motion.div
              animate={{ y: [0, -5, 0], rotate: [0, 5, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="rounded-full p-4 bg-blue-900 dark:bg-blue-400"
            >
              <Sticker size={40} color="#ffffff" />
            </motion.div>
            <div className="rounded-2xl px-4 py-2 text-gray-800 dark:text-gray-200 font-medium">
              {displayedText}
              <span className="animate-pulse">|</span>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            {[
              { to: "/schedule", label: "Schedule an interview" },
              { to: "/scan", label: "Scan some resumes" },
              { to: "/leaderboard", label: "Check the leaderboard" },
            ].map((btn, index) => (
              <motion.div
                key={index}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0px 0px 12px rgba(47,82,224,0.4)",
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Button className="w-full rounded-3xl text-white border-none bg-blue-900 dark:bg-blue-400 hover:bg-blue-800 dark:hover:bg-blue-500">
                  <NavLink
                    to={btn.to}
                    className="block w-full text-center font-medium text-white"
                  >
                    {btn.label}
                  </NavLink>
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
