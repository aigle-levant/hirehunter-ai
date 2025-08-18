import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import { NavLink } from "react-router-dom";
import { Sticker } from "lucide-react";

export default function FinalCTA() {
  const [isHovered, setIsHovered] = useState(false);
  const ctaRef = useRef(null);
  const isInView = useInView(ctaRef, { once: true });

  return (
    <section
      ref={ctaRef}
      className="relative flex flex-col items-center justify-center gap-8
                text-center py-24 px-8
                 bg-blue-50 dark:bg-zinc-900 backdrop-blur-md
                 rounded-3xl overflow-hidden transition-colors duration-500"
    >
      {/* Floating Gradient Orbs */}
      <motion.div
        animate={{
          x: [0, 60, 0],
          y: [0, -60, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-10 left-10 w-72 h-72 bg-gradient-to-r  rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          x: [0, -80, 0],
          y: [0, 50, 0],
          scale: [1, 0.8, 1],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-10 right-10 w-64 h-64 bg-gradient-to-r  rounded-full blur-3xl"
      />

      {/* Headline */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="text-4xl lg:text-5xl font-extrabold leading-tight text-gray-900 dark:text-gray-100"
      >
        Ready to hire smarter, <br /> not harder?
      </motion.h2>

      {/* Subtext */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-lg text-gray-700 dark:text-gray-300 max-w-xl"
      >
        Let AI find the perfect candidates in{" "}
        <span className="font-bold text-blue-500 dark:text-blue-400">
          seconds
        </span>
        , not weeks.
      </motion.p>

      {/* CTA Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.4 }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        className="relative"
      >
        <NavLink to="/scan">
          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0 15px 30px rgba(59, 130, 246, 0.4)",
            }}
            whileTap={{ scale: 0.95 }}
            className="relative px-12 py-4 bg-blue-900 dark:bg-blue-700 text-white font-bold rounded-full overflow-hidden"
          >
            <div
              className={`absolute inset-0 bg-white/20 translate-x-[-100%] ${
                isHovered ? "translate-x-[100%]" : ""
              } transition-transform duration-700`}
            />
            <span className="relative">Get Started →</span>
          </motion.button>
        </NavLink>
      </motion.div>
    </section>
  );
}
