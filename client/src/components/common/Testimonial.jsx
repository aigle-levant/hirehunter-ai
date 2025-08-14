import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    title:
      "Finally, a platform that judged my skills, not just my keywords. HireScore gave me a real shot.",
    client: "Jessica Davis",
    clientInfo: "Full Stack Developer @AWE",
  },
  {
    title:
      "Hirehunter saved me days of screening. It’s like having a tireless assistant who knows exactly what I’m looking for.",
    client: "Marcell Glock",
    clientInfo: "Recruiter, @TDD",
  },
  {
    title:
      "We went from 100 resumes to 3 amazing hires — without the chaos. This is how hiring should work in 2025.",
    client: "Amit Kapoor",
    clientInfo: "Founder @XYZ",
  },
];

export default function TestimonialsCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const testimonial = testimonials[index];

  return (
    <div className="w-full max-w-3xl mx-auto px-6 py-12 text-center">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="relative bg-gradient-to-br from-white/40 to-white/10 dark:from-zinc-900/60 dark:to-zinc-900/40 backdrop-blur-md rounded-3xl p-10 shadow-lg"
        >
          <Quote
            className="absolute top-4 right-4 w-6 h-6 text-blue-400 opacity-20"
            aria-hidden="true"
          />
          <p className="text-lg italic text-gray-900 dark:text-gray-200 mb-8 leading-relaxed max-w-[600px] mx-auto">
            “{testimonial.title}”
          </p>
          <h3 className="relative inline-block text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-400">
            {testimonial.client}
            <motion.span
              layoutId="highlight"
              className="absolute inset-0 rounded-md bg-gradient-to-r from-blue-200/40 to-cyan-300/30 blur-lg -z-10"
              transition={{ duration: 0.4 }}
            />
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
            {testimonial.clientInfo}
          </p>
        </motion.div>
      </AnimatePresence>

      {/* Dots */}
      <div className="flex justify-center gap-4 mt-10">
        {testimonials.map((_, i) => (
          <motion.button
            key={i}
            onClick={() => setIndex(i)}
            aria-label={`Show testimonial ${i + 1}`}
            className="rounded-full bg-gray-300 dark:bg-zinc-600"
            initial={false}
            animate={{
              scale: i === index ? 1.6 : 1,
              backgroundColor: i === index ? "#22d3ee" : "#94a3b8",
              opacity: i === index ? 1 : 0.6,
            }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 20,
            }}
            whileHover={{ scale: 1.8, opacity: 1 }}
            style={{ width: 12, height: 12 }}
          />
        ))}
      </div>
    </div>
  );
}
