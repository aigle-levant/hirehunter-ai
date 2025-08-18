import { motion } from "framer-motion";
import { UploadCloud, Cpu, Users, Mail } from "lucide-react";

const steps = [
  {
    icon: UploadCloud,
    accent: "border-indigo-500 text-indigo-600 dark:text-indigo-400",
    text: "Recruiter uploads the resumes.",
  },
  {
    icon: Cpu,
    accent: "border-teal-500 text-teal-600 dark:text-teal-400",
    text: "AI swiftly prepares candidate profiles and assigns rankings on the leaderboard.",
  },
  {
    icon: Users,
    accent: "border-amber-500 text-amber-600 dark:text-amber-400",
    text: "Recruiter can review the top candidates and schedule interview with them.",
  },
  {
    icon: Mail,
    accent: "border-rose-500 text-rose-600 dark:text-rose-400",
    text: "Rejected candidates get a personalised mail sent by our specialised AI buddy.",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="howworks"
      className="relative py-24 px-6 md:px-16 
                 bg-white dark:bg-zinc-950 
                 overflow-hidden"
    >
      <div className="relative max-w-5xl mx-auto font-sans text-gray-900 dark:text-gray-200">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-4xl md:text-5xl font-bold text-center mb-20"
        >
          How it works
        </motion.h2>

        <div className="relative">
          {/* Minimal vertical line */}
          <div
            className="absolute left-1/2 top-0 bottom-0 w-px 
                        bg-gray-300 dark:bg-zinc-700 
                        -translate-x-1/2"
          />

          <div className="flex flex-col gap-20">
            {steps.map(({ icon: Icon, accent, text }, i) => {
              const isLeft = i % 2 === 0;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: isLeft ? -120 : 120 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{
                    type: "spring",
                    stiffness: 80,
                    damping: 20,
                    delay: i * 0.15,
                  }}
                  className={`relative flex items-center ${
                    isLeft ? "justify-start" : "justify-end"
                  }`}
                >
                  <div
                    className={`flex items-center gap-6 max-w-md ${
                      isLeft ? "text-left" : "text-right"
                    }`}
                  >
                    {/* Number bubble */}
                    <motion.div
                      whileInView={{ scale: [0.6, 1] }}
                      transition={{
                        type: "spring",
                        stiffness: 120,
                        delay: i * 0.15 + 0.1,
                      }}
                      className={`z-10 flex items-center justify-center w-10 h-10 
                                 rounded-full bg-white dark:bg-zinc-900 
                                 border-2 ${accent} font-bold shadow-sm`}
                    >
                      {i + 1}
                    </motion.div>

                    {/* Step Card */}
                    <motion.div
                      whileHover={{ y: -3 }}
                      className="relative bg-white dark:bg-zinc-900 
                                 border border-gray-200 dark:border-zinc-700 
                                 rounded-xl p-6 shadow-sm flex flex-col gap-4"
                    >
                      {/* Icon in ring */}
                      <div
                        className={`p-2 w-10 h-10 rounded-full flex items-center justify-center border-2 ${accent}`}
                      >
                        <Icon className="w-5 h-5" />
                      </div>

                      <p className="font-medium text-base leading-snug">
                        {text}
                      </p>
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
