import { motion, useReducedMotion } from "framer-motion";

export default function CurtainsOpen({ onComplete }) {
  const reduce = useReducedMotion();

  const variants = {
    initial: { clipPath: "inset(0% 0% 0% 0%)" },
    exit: {
      clipPath: "inset(100% 0% 0% 0%)",
      transition: { duration: reduce ? 0.2 : 0.9, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <motion.div
      className="fixed inset-0 z-[60] pointer-events-none"
      initial="initial"
      animate="exit"
      onAnimationComplete={onComplete}
      style={{ willChange: "clip-path" }}
      variants={variants}
    >
      {/* Top color layer (Adaline-esque brand wipe) */}
      <div className="absolute inset-0 bg-[#193CB8]" />
      {/* Subtle grain overlay for premium feel */}
      <div
        className="absolute inset-0 opacity-[0.06] mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage:
            "url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22200%22 height=%22200%22 viewBox=%220 0 200 200%22><filter id=%22n%22><feTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 numOctaves=%222%22 stitchTiles=%22stitch%22/></filter><rect width=%22200%22 height=%22200%22 filter=%22url(%23n)%22 opacity=%220.35%22/></svg>')",
        }}
      />
    </motion.div>
  );
}
