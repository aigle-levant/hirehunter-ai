import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { NavLink } from "react-router-dom";

export default function FinalCTA() {
  const [isHovered, setIsHovered] = useState(false);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const ctaRef = useRef(null);
  const isInView = useInView(ctaRef, { once: true });

  // Mouse movement effect
  useEffect(() => {
    const handleMove = (e) => {
      const rect = ctaRef.current?.getBoundingClientRect();
      if (!rect) return;
      const x = ((e.clientX - rect.left) / rect.width - 0.5) * 10; // max 5deg tilt
      const y = ((e.clientY - rect.top) / rect.height - 0.5) * 10;
      setMouse({ x, y });
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <section
      ref={ctaRef}
      className="relative flex flex-col items-center justify-center gap-8
                 text-center py-24 px-8
                 bg-blue-50 dark:bg-zinc-900 backdrop-blur-md
                 rounded-3xl overflow-hidden transition-colors duration-500"
    >
      {/* Floating Gradient Orbs rising from below */}
      <motion.div
        animate={{
          y: [80, -20, 80],
          scale: [0.9, 1.2, 0.9],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -bottom-20 left-10 w-72 h-72 bg-gradient-to-t from-blue-500/30 to-blue-700/20 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          y: [60, -30, 60],
          scale: [0.8, 1, 0.8],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -bottom-16 right-10 w-64 h-64 bg-gradient-to-t from-blue-400/30 to-blue-600/20 rounded-full blur-3xl"
      />

      {/* Headline */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="text-4xl lg:text-5xl font-basier-circle font-bold leading-tight text-gray-900 dark:text-gray-100"
      >
        Ready to hire smarter, <br /> not harder?
      </motion.h2>

      {/* Subtext */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-xl font-body text-gray-700 dark:text-gray-300 max-w-xl"
      >
        Let AI find the perfect candidates in seconds, not weeks.
      </motion.p>

      {/* CTA Button with mouse parallax */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <NavLink to="/login">
          <motion.button
            style={{
              rotateX: -mouse.y,
              rotateY: mouse.x,
              perspective: 600,
            }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 15px 30px rgba(59, 130, 246, 0.4)",
            }}
            whileTap={{ scale: 0.95 }}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
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
