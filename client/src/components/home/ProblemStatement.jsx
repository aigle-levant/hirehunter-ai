import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { motion } from "framer-motion";

export default function ProblemStatement() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.25,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.85, y: 60, rotate: -4 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 14,
      },
    },
  };

  const cards = [
    {
      title: "Recruiter",
      desc: "Company XYZ",
      text: "I’m drowning in resumes that all look the same. I waste time screening than actually connecting with the candidates. Life sucks, man.",
    },
    {
      title: "Candidate",
      desc: "Seeking job since 3+ months",
      text: "I've applied for 300+ jobs, yet it seems the ATS filters reject me before a human sees my resume. The entire process feels humiliating, and depressing...",
    },
    {
      title: "CEO",
      desc: "Company XYZ",
      text: "Where are all the rockstar candidates we're looking for?",
    },
  ];

  return (
    <section
      id="problem"
      className="px-6 pb-10 transition-colors duration-300
                 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-gray-200"
    >
      <motion.h2
        className="font-sans text-3xl md:text-4xl"
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.5 }}
      >
        Hiring in 2025 is{" "}
        <span className="text-blue-900 dark:text-blue-400 font-bold">
          broken
        </span>
        ...
      </motion.h2>

      <motion.div
        className="flex flex-col lg:flex-row gap-6 mt-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {cards.map((item, i) => (
          <motion.div key={i} variants={cardVariants} className="flex-1">
            <Card className="shadow-lg rounded-xl overflow-hidden backdrop-blur-md bg-white/70 dark:bg-zinc-800/70 transition-colors duration-300">
              <CardHeader>
                <CardTitle className="dark:text-gray-100">
                  {item.title}
                </CardTitle>
                <CardDescription className="dark:text-gray-400">
                  {item.desc}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="dark:text-gray-300">{item.text}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      <motion.h3
        className="font-sans mt-8 text-2xl"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        Fret not, for we have
        <span className="text-blue-900 dark:text-blue-400 font-bold">
          {" "}
          an antidote
        </span>
        !
      </motion.h3>
    </section>
  );
}
