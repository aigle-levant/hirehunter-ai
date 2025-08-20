import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Users,
  TrendingDown,
  ArrowRight,
  CircleQuestionMark,
} from "lucide-react";

export default function ProblemStatement() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMove = (e) => {
      setMouse({
        x: (e.clientX - window.innerWidth / 2) * 0.02,
        y: (e.clientY - window.innerHeight / 2) * 0.02,
      });
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  const problems = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "Recruiter",
      desc: "Company XYZ",
      text: "I’m drowning in resumes that all look the same. I waste time screening than actually connecting with the candidates. Life sucks, man.",
    },
    {
      icon: <TrendingDown className="w-8 h-8" />,
      title: "Candidate",
      desc: "Seeking job since 3+ months",
      text: "I've applied for 300+ jobs, yet it seems the ATS filters reject me before a human sees my resume. The entire process feels humiliating, and depressing...",
    },
    {
      icon: <CircleQuestionMark className="w-8 h-8" />,
      title: "CEO",
      desc: "Company XYZ",
      text: "Where are all the rockstar candidates we're looking for?",
    },
  ];

  return (
    <div
      ref={sectionRef}
      className="relative w-full min-h-screen flex flex-col items-center justify-center px-6 py-20 overflow-hidden bg-gradient-to-br from-[#155dfc]/5 via-[#1c398e]/10 to-[#155dfc]/5 dark:from-[#1c1c2c]/5 dark:via-[#2c2c3a]/10 dark:to-[#1c1c2c]/5"
    >
      {/* Section Title */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-4xl mx-auto text-center space-y-6"
      >
        <div className="inline-flex px-5 py-2 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-600 dark:text-blue-400 text-sm font-semibold backdrop-blur-lg">
          System Failure
        </div>

        <h1 className="text-4xl lg:text-5xl font-bold font-basier-circle leading-tight text-black dark:text-white">
          Hiring in 2025 is{" "}
          <span className="font-italics italic">catastrophically</span> broken
        </h1>

        <p className="text-lg lg:text-xl text-black/70 font-body dark:text-gray-400 max-w-2xl mx-auto">
          The talent acquisition industry is in crisis. Everyone loses in the
          current system.
        </p>
      </motion.div>

      {/* Problem Cards with staggered scroll reveal */}
      <motion.div
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.2 } },
        }}
        className="relative z-10 mt-16 grid md:grid-cols-3 gap-6 max-w-7xl w-full"
      >
        {problems.map((p, i) => (
          <motion.div
            key={i}
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0 },
            }}
            whileHover={{ scale: 1.05, y: -10 }}
            animate={{
              rotateX: mouse.y,
              rotateY: mouse.x,
              y: [0, -5, 0],
            }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="relative p-6 bg-white/10 dark:bg-gray-800/20 backdrop-blur-xl border border-white/20 rounded-2xl shadow-lg cursor-pointer"
          >
            <div className="space-y-4">
              {p.icon}
              <h3 className="text-xl font-semibold text-black dark:text-white">
                {p.title}
              </h3>
              <p className="text-sm text-black/60 dark:text-gray-400">
                {p.desc}
              </p>
              <p className="text-black/80 dark:text-gray-200 text-sm leading-relaxed">
                “{p.text}”
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Solution Teaser Button */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="relative z-10 mt-20 flex flex-col items-center space-y-6"
      >
        <motion.div
          whileHover={{ scale: 1.05 }}
          animate={{
            rotateX: mouse.y * 0.5,
            rotateY: mouse.x * 0.5,
          }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="inline-flex items-center px-6 py-3 backdrop-blur-lg rounded-2xl cursor-pointer"
        >
          <span className="text-xl lg:text-6xl font-basier-circle font-bold bg-blue-900 bg-clip-text text-transparent">
            But we have the antidote
          </span>
        </motion.div>
      </motion.div>
    </div>
  );
}
