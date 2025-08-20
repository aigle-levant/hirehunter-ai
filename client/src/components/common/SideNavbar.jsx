import { Button } from "@/components/ui/button";
import {
  LayoutDashboard,
  Briefcase,
  Calendar,
  MessageSquare,
  Settings,
  User,
  ChevronLeft,
  FileUser,
  ShieldHalf,
  FileJson,
} from "lucide-react";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

export default function SideNavbar() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [darkMode, setDarkMode] = useState(
    document.documentElement.classList.contains("dark")
  );
  const location = useLocation();

  // Sync dark mode with document.documentElement
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const navLinks = [
    { name: "Dashboard", icon: LayoutDashboard, to: "/dashboard" },
    { name: "Jobs", icon: Briefcase, to: "/jobs" },
    { name: "Parse JD", icon: FileJson, to: "/jd" },
    { name: "Match Resumes", icon: FileUser, to: "/scan" },
    { name: "Schedule", icon: Calendar, to: "/schedule" },
    { name: "Leaderboard", icon: ShieldHalf, to: "/leaderboard" },
    { name: "Feedback", icon: MessageSquare, to: "/feedback" },
  ];

  return (
    <motion.div
      initial={{ x: -40, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
      className={`min-h-screen sticky top-0 flex flex-col transition-all duration-300 ${
        isCollapsed ? "w-16" : "w-64"
      } bg-gradient-to-b from-slate-50 to-white border-r border-slate-200 shadow-lg 
      dark:from-slate-950 dark:to-slate-900 dark:border-slate-800`}
    >
      {/* Logo Section */}
      <div className="p-4 relative flex items-center justify-between">
        <AnimatePresence>
          {!isCollapsed && (
            <motion.h1
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              className="text-xl font-basier-circle font-bold tracking-tight text-slate-900 dark:text-white"
            >
              Hirehunter.ai
            </motion.h1>
          )}
        </AnimatePresence>
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="p-1 rounded-full hover:bg-slate-200/60 dark:hover:bg-slate-700/60 transition-colors"
        >
          <ChevronLeft
            className={`w-5 h-5 text-slate-500 dark:text-slate-400 transition-transform duration-300 ${
              isCollapsed ? "rotate-180" : ""
            }`}
          />
        </button>
      </div>

      {/* Nav Links */}
      <div className="flex-1 px-2">
        <nav className="space-y-1.5 mt-4 font-body">
          {navLinks.map((link) => {
            const IconComponent = link.icon;
            const isActive = location.pathname === link.to;

            return (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
              >
                <Link
                  to={link.to}
                  className={`group flex items-center ${
                    isCollapsed ? "justify-center px-2" : "space-x-3 px-3"
                  } py-2.5 rounded-xl transition-all duration-300 relative
                  ${
                    isActive
                      ? "bg-slate-100 text-slate-900 dark:bg-slate-800/70 dark:text-white font-semibold"
                      : "text-slate-600 hover:bg-slate-100/90 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white"
                  }`}
                >
                  <IconComponent
                    className={`w-5 h-5 transition-colors duration-300 flex-shrink-0 ${
                      isActive
                        ? "text-blue-600 dark:text-blue-400"
                        : "text-slate-500 group-hover:text-slate-800 dark:text-slate-400 dark:group-hover:text-white"
                    }`}
                  />
                  {!isCollapsed && (
                    <span className="text-sm tracking-tight">{link.name}</span>
                  )}
                  {isActive && (
                    <motion.div
                      layoutId="active-indicator"
                      className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-blue-500 rounded-r-full"
                    />
                  )}
                </Link>
              </motion.div>
            );
          })}
        </nav>
      </div>

      {/* Bottom Section */}
      <div className="mt-auto p-3 border-t border-slate-200 dark:border-slate-800 space-y-2">
        {/* Settings Button */}
        <Button
          variant="ghost"
          className={`w-full ${
            isCollapsed ? "justify-center" : "justify-start space-x-3"
          } py-2.5 rounded-lg text-slate-700 hover:bg-slate-100 hover:text-slate-900 
          dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white transition-all duration-300`}
        >
          <Settings className="w-5 h-5 text-slate-500 dark:text-slate-400" />
          {!isCollapsed && <span className="text-sm">Settings</span>}
        </Button>

        {/* Profile Section */}
        <div className="bg-slate-100 dark:bg-slate-800 rounded-lg p-2 flex items-center justify-between">
          <div
            className={`flex items-center ${
              isCollapsed ? "justify-center" : "space-x-2"
            }`}
          >
            <div className="w-9 h-9 bg-blue-600 rounded-lg flex items-center justify-center">
              <User className="w-4 h-4 text-white" />
            </div>
            {!isCollapsed && (
              <div className="min-w-0 font-basier-circle">
                <p className="font-semibold text-slate-900 dark:text-white text-xs truncate">
                  Prajanya S
                </p>
                <p className="text-[11px] font-body text-slate-500 dark:text-slate-400 truncate">
                  ps@hirehunter.ai
                </p>
              </div>
            )}
          </div>
          {!isCollapsed && (
            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
