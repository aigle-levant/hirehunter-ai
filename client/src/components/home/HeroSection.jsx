import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { Sticker } from "lucide-react";

// Mock NavLink since we don't have React Router
const NavLink = ({ to, className, children, ...props }) => (
  <a href="#" className={className} {...props}>
    {children}
  </a>
);

export default function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const heroRef = useRef(null);
  const isInView = useInView(heroRef, { once: false });
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX - window.innerWidth / 2) * 0.02,
        y: (e.clientY - window.innerHeight / 2) * 0.02,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen w-full px-10 pb-30 mb-20 bg-white dark:bg-gray-950 overflow-hidden relative">
      <div
        className="absolute inset-0 
    bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] 
    dark:bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] 
    bg-[size:50px_50px] animate-pulse"
      />

      {/* Floating Orbs */}
      <motion.div
        animate={{
          x: [0, 100, 0],
          y: [0, -100, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-blue-400/20 to-blue-800/10 dark:from-blue-600/20 dark:to-blue-900/20 rounded-full blur-3xl"
      />

      <motion.div
        animate={{
          x: [0, -150, 0],
          y: [0, 100, 0],
          scale: [1, 0.8, 1],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-blue-300/20 to-gray-400/20 dark:from-blue-500/20 dark:to-gray-600/20 rounded-full blur-3xl"
      />

      <motion.section
        ref={heroRef}
        style={{ y }}
        className="relative z-10 min-h-screen w-full flex items-center justify-center overflow-hidden"
      >
        <div className="w-full max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            {/* Badge */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center gap-2 px-4 py-2 
          bg-black/10 text-black/90 hover:bg-black/50 hover:text-white/80 
          dark:bg-white/10 dark:text-white/80 dark:hover:bg-white/20 
          backdrop-blur-lg border border-white/20 rounded-full text-sm font-medium"
            >
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              Your AI Wingman for Hiring
            </motion.div>

            {/* Main Headline */}
            <div className="space-y-6">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-6xl lg:text-8xl font-helv-bold leading-[0.9] text-black/90 dark:text-white"
              >
                Hire
                <br />
                <span className="bg-gradient-to-r from-blue-700 dark:from-blue-500 via-blue-950 dark:via-gray-200 to-blue-800 bg-clip-text text-transparent animate-pulse">
                  smarter
                </span>
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-xl lg:text-2xl text-black/80 dark:text-gray-300 font-body max-w-lg leading-relaxed"
              >
                Stop drowning in resumes. Let AI find your perfect candidates in{" "}
                <span className="text-blue-400 font-bold">seconds</span>, not
                weeks.
              </motion.div>
            </div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(59, 130, 246, 0.4)",
                }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-8 py-4 bg-black dark:bg-blue-600 rounded-2xl text-white font-bold text-lg overflow-hidden"
              >
                <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                <span className="relative">Start Hunting →</span>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border border-black/20 dark:border-white/30 backdrop-blur-lg rounded-2xl text-black dark:text-white font-semibold text-lg hover:bg-black/5 dark:hover:bg-white/10 transition-all duration-300"
              >
                Learn more
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Interactive Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            style={{
              transform: `rotateX(${mousePosition.y}deg) rotateY(${mousePosition.x}deg)`,
            }}
            className="relative"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              onHoverStart={() => setIsHovered(true)}
              onHoverEnd={() => setIsHovered(false)}
              className="relative p-8 bg-gradient-to-br from-white/10 to-white/5 dark:from-gray-800/20 dark:to-gray-900/10 backdrop-blur-2xl border border-white/20 dark:border-white/10 rounded-3xl shadow-2xl overflow-hidden"
            >
              {/* Glowing Edge Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-gray-500/20 via-blue-500/20 to-white/20 rounded-3xl blur-xl" />

              {/* Inner Content */}
              <div className="relative z-10 space-y-6">
                {/* Header */}
                <div className="flex items-center gap-4 mb-8">
                  <motion.div
                    animate={{ rotate: isHovered ? 360 : 0 }}
                    transition={{ duration: 0.6 }}
                    className="w-16 h-16 rounded-2xl flex items-center justify-center"
                  >
                    <Sticker
                      className="text-blue-700 dark:text-blue-300"
                      size={120}
                    />
                  </motion.div>

                  <div>
                    <h3 className="text-2xl font-bold font-helv-black text-black dark:text-white">
                      Hunter
                    </h3>
                    <p className="text-black/60 dark:text-gray-400">
                      A cute assistant for hiring
                    </p>
                  </div>
                </div>

                {/* Chat Bubbles */}
                <div className="space-y-4">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1 }}
                    className="flex items-start gap-3"
                  >
                    <div className="w-8 h-8 rounded-full flex items-center justify-center">
                      <Sticker className="text-black dark:text-white" />
                    </div>
                    <div className="bg-white/10 dark:bg-gray-700/30 backdrop-blur-lg rounded-2xl rounded-tl-none px-4 py-3 max-w-xs">
                      <p className="text-gray-900/90 font-body dark:text-gray-100 text-sm">
                        Hey champ! How can I save your day?
                      </p>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.5 }}
                    className="flex items-start gap-3 justify-end"
                  >
                    <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl rounded-tr-none px-4 py-3 max-w-xs">
                      <p className="text-black dark:text-white text-sm">...</p>
                    </div>
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                      <span className="w-8 h-8 bg-white/20 dark:bg-gray-600 rounded-full flex items-center justify-center">
                        👤
                      </span>
                    </div>
                  </motion.div>
                </div>

                {/* Action Buttons */}
                <div className="grid grid-cols-2 gap-3 pt-4">
                  {[
                    { icon: "📊", label: "Leaderboard", to: "/leaderboard" },
                    { icon: "🔍", label: "Scan resumes", to: "/scan" },
                    { icon: "📅", label: "Schedule", to: "/schedule" },
                    { icon: "⚡", label: "Quick feedback", to: "/feedback" },
                  ].map((item, i) => (
                    <motion.button
                      key={i}
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="p-4 bg-white/5 hover:bg-white/10 backdrop-blur-lg border border-white/10 rounded-xl transition-all duration-300 group"
                    >
                      <div className="text-2xl mb-2 group-hover:scale-110 transition-transform">
                        {item.icon}
                      </div>
                      <div className="text-grey-800/80 text-sm font-medium">
                        {item.label}
                      </div>
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Animated Background Elements */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute top-4 right-4 w-20 h-20 border border-white/10 rounded-full"
              />

              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute bottom-4 left-4 w-16 h-16 bg-gradient-to-br from-gray-500/20 to-blue-500/20 rounded-full blur-lg"
              />
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
        >
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2" />
        </motion.div>
      </motion.div>
      <div className="absolute bottom-0 left-0 w-full h-40 pointer-events-none bg-gradient-to-t from-white to-transparent z-20" />
    </div>
  );
}
