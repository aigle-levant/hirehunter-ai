import { useState, useRef } from "react";
import { motion } from "framer-motion";
import HeroInput from "./HeroInput";

export default function HeroSection() {
  const [input, setInput] = useState("");
  const inputRef = useRef(null);

  return (
    <div className="relative w-full min-h-screen bg-gradient-to-br from-[#155dfc]/10 via-[#1c398e]/20 to-[#155dfc]/10 flex flex-col items-center justify-center overflow-hidden px-6">
      {/* Floating Blobs */}
      <motion.div
        animate={{ x: [0, 120, 0], y: [0, -80, 0], scale: [1, 1.2, 1] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-10 left-10 w-96 h-96 bg-gradient-to-r from-[#155dfc]/20 to-[#1c398e]/10 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ x: [0, -150, 0], y: [0, 120, 0], scale: [1, 0.9, 1] }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-tr from-[#1c398e]/20 to-[#155dfc]/10 rounded-full blur-3xl"
      />

      {/* Headings */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center space-y-4 z-10 mt-10"
      >
        <h1 className="text-6xl font-basier-circle font-bold text-black dark:text-white leading-tight">
          Your perfect hire just got
          <br />
          <span className="font-italics italic">auto-rejected </span>
          by a broken filter.
        </h1>
        <p className="text-lg lg:text-2xl font-body text-[#0a0a0a]/90 dark:text-gray-300 max-w-2xl mx-auto">
          Your AI sidekick spots talent patterns humans miss.
        </p>
      </motion.div>

      <HeroInput />
    </div>
  );
}
