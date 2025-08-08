import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

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
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const testimonial = testimonials[index];

  return (
    <div className="w-full max-w-3xl mx-auto text-center px-4">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.4 }}
          className="bg-white dark:bg-zinc-900 rounded-xl p-6 shadow-lg"
        >
          <p className="text-lg italic text-gray-700 dark:text-gray-300 mb-4">
            “{testimonial.title}”
          </p>
          <div className="text-sm font-semibold text-gray-900 dark:text-white">
            {testimonial.client}
          </div>
          <div className="text-sm text-gray-500 dark:text-gray-400">
            {testimonial.clientInfo}
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="flex justify-center gap-2 mt-4">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`h-2 w-2 rounded-full ${
              i === index ? "bg-blue-600" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
