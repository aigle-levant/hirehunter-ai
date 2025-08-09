import { motion } from "framer-motion";
import { UploadCloud, Cpu, Users, Mail } from "lucide-react";

const steps = [
  {
    icon: UploadCloud,
    color: "text-blue-600",
    text: "Recruiter uploads the resumes.",
  },
  {
    icon: Cpu,
    color: "text-green-600",
    text: "AI swiftly prepares candidate profiles and assigns rankings on the leaderboard.",
  },
  {
    icon: Users,
    color: "text-purple-600",
    text: "Recruiter can review the top candidates and schedule interview with them.",
  },
  {
    icon: Mail,
    color: "text-pink-600",
    text: "Rejected candidates get a personalised mail sent by our specialised AI buddy.",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="howworks"
      className="px-6 my-17 py-16 bg-gradient-to-b from-blue-50 to-blue-100"
    >
      <div className="max-w-4xl mx-auto font-sans text-black">
        <h2 className="text-4xl font-extrabold mb-12 text-center">
          How it works
        </h2>

        <div className="relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-blue-300 -translate-x-1/2 rounded-full"></div>

          <div className="flex flex-col space-y-16">
            {steps.map(({ icon: Icon, color, text }, i) => {
              const isLeft = i % 2 === 0;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: isLeft ? -100 : 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{
                    type: "spring",
                    stiffness: 100,
                    damping: 15,
                    delay: i * 0.3,
                  }}
                  className={`flex items-center max-w-3xl mx-auto ${
                    isLeft ? "justify-start" : "justify-end"
                  }`}
                >
                  <div className="relative flex items-center gap-6">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{
                        delay: i * 0.3 + 0.1,
                        type: "spring",
                        stiffness: 150,
                      }}
                      className="z-10 flex items-center justify-center w-12 h-12 rounded-full bg-white/90 backdrop-blur-lg border border-blue-300 shadow-lg text-xl font-bold text-blue-700"
                    >
                      {i + 1}
                    </motion.div>

                    <div
                      className={`absolute top-6 left-12 h-1 w-6 bg-blue-300 ${
                        isLeft ? "rounded-l-full" : "rounded-r-full"
                      }`}
                    ></div>

                    <motion.div
                      whileHover={{
                        scale: 1.03,
                        boxShadow: "0 8px 20px rgba(0,0,0,0.12)",
                      }}
                      className="bg-white/30 backdrop-blur-lg border border-white/40 rounded-2xl p-6 shadow-md max-w-[320px] flex flex-col gap-4"
                    >
                      <motion.div
                        animate={{
                          y: [0, -8, 0],
                        }}
                        transition={{
                          repeat: Infinity,
                          repeatType: "loop",
                          duration: 2,
                          ease: "easeInOut",
                        }}
                        className={`p-2 rounded-full ${color} bg-white/50 flex items-center justify-center w-12 h-12 shadow-md`}
                      >
                        <Icon className={`w-6 h-6`} />
                      </motion.div>
                      <p className="font-semibold text-gray-800">{text}</p>
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
