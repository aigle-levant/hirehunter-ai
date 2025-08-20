import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    role: "candidate",
    text: "Finally, a platform that judged my skills, not just my keywords. HireScore gave me a real shot.",
    client: "Jessica Davis",
    clientInfo: "Full Stack Developer @AWE",
  },
  {
    role: "recruiter",
    text: "Hirehunter saved me days of screening. It’s like having a tireless assistant who knows exactly what I’m looking for.",
    client: "Marcell Glock",
    clientInfo: "Recruiter @TDD",
  },
  {
    role: "founder",
    text: "We went from 100 resumes to 3 amazing hires — without the chaos. This is how hiring should work in 2025.",
    client: "Amit Kapoor",
    clientInfo: "Founder @XYZ",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const testimonial = testimonials[index];

  return (
    <section className="w-full py-20 px-6 bg-gradient-to-b from-white to-blue-50 dark:from-zinc-950 dark:to-zinc-900">
      <div className="mx-auto">
        <h2 className="text-center text-5xl font-basier-circle font-bold text-gray-800 dark:text-gray-100 mb-12">
          Real voices. Real impact.
        </h2>

        <div className="relative flex flex-col items-center font-body">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className={`max-w-xl p-6 rounded-2xl shadow-md backdrop-blur-md ${
                testimonial.role === "candidate"
                  ? "bg-blue-100/60 dark:bg-blue-900/40 self-start ml-6"
                  : "bg-cyan-100/60 dark:bg-cyan-900/40 self-end mr-6"
              }`}
            >
              <p className="text-lg leading-relaxed text-gray-800 dark:text-gray-200">
                “{testimonial.text}”
              </p>
              <div className="mt-4 text-sm text-gray-600 dark:text-gray-400">
                <span className="font-semibold text-gray-900 dark:text-gray-100">
                  {testimonial.client}
                </span>{" "}
                • {testimonial.clientInfo}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Typing dots indicator */}
          <motion.div
            key={index + "-dots"}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute bottom-[-2rem] flex gap-2"
          >
            {[...Array(3)].map((_, i) => (
              <motion.span
                key={i}
                className="w-2 h-2 bg-blue-400 dark:bg-cyan-400 rounded-full"
                animate={{ y: [0, -4, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 1,
                  delay: i * 0.2,
                }}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
