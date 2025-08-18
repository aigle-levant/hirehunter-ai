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
  const isInView = useInView(sectionRef, { once: false });
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
      className="relative min-h-screen w-full px-8 py-20 bg-white dark:bg-gray-950 overflow-hidden"
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] 
        dark:bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] 
        bg-[size:50px_50px]"
      />

      {/* Title section */}
      <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="inline-flex px-5 py-2 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-600 dark:text-blue-400 text-sm font-semibold backdrop-blur-lg"
        >
          System Failure
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl lg:text-5xl font-semibold leading-tight text-black dark:text-white"
        >
          Hiring is{" "}
          <span className="bg-gradient-to-r from-blue-900 via-blue-600 to-blue-900 bg-clip-text text-transparent font-bold">
            catastrophically
          </span>{" "}
          broken
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg lg:text-xl text-black/70 dark:text-gray-400 max-w-2xl mx-auto"
        >
          The talent acquisition industry is in crisis. Everyone loses in the
          current system.
        </motion.p>
      </div>

      {/* Problem cards */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="relative z-10 mt-16 grid md:grid-cols-3 gap-6 max-w-7xl mx-auto"
      >
        {problems.map((p, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05, y: -10 }}
            style={{
              transform: `rotateX(${mouse.y}deg) rotateY(${mouse.x}deg)`,
            }}
            className="relative p-6 bg-white/10 dark:bg-gray-800/20 backdrop-blur-xl border border-white/20 rounded-2xl shadow-lg"
          >
            <div className="relative z-10 space-y-4">
              <div className="text-blue-600 dark:text-blue-400">{p.icon}</div>
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

      {/* Solution teaser */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="relative z-10 mt-20 flex flex-col items-center space-y-6"
      >
        <div className="inline-flex items-center px-6 py-3 bg-white/10 dark:bg-gray-800/30 border border-white/20 backdrop-blur-lg rounded-2xl">
          <span className="text-xl lg:text-2xl font-bold bg-blue-700 bg-clip-text text-transparent">
            But we have the antidote
          </span>
        </div>
      </motion.div>
    </div>
  );
}
