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
    <div
      className={`min-h-full sticky top-0 transition-all duration-300 ${
        isCollapsed ? "w-16" : "w-64"
      } bg-gradient-to-b from-slate-50 to-white border-r border-slate-200/60 flex flex-col shadow-lg dark:from-slate-900 dark:to-slate-800 dark:border-slate-700/50`}
    >
      {/* Logo Section */}
      <div className="p-4 relative">
        {!isCollapsed && (
          <h1 className="text-xl font-bold bg-blue-900 dark:bg-blue-100 bg-clip-text text-transparent">
            Hirehunter.ai
          </h1>
        )}
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="absolute top-3 right-3 p-1 rounded-full hover:bg-slate-200/50 dark:hover:bg-slate-700/50 transition-colors"
        >
          <ChevronLeft
            className={`w-4 h-4 text-slate-500 dark:text-slate-400 transition-transform duration-300 ${
              isCollapsed ? "rotate-180" : ""
            }`}
          />
        </button>
      </div>

      {/* Nav Links */}
      <div className="flex-1 px-3">
        <nav className="space-y-1.5 mt-5">
          {navLinks.map((link) => {
            const IconComponent = link.icon;
            const isActive = location.pathname === link.to;

            return (
              <Link
                key={link.name}
                to={link.to}
                className={`flex items-center ${
                  isCollapsed ? "justify-center px-2" : "space-x-3 px-3"
                } py-2.5 rounded-lg transition-all duration-300 group relative ${
                  isActive
                    ? "bg-white border-cyan-800 hover:border-cyan-300 hover:shadow-blue-900 border-1 text-black shadow-sm shadow-cyan-950"
                    : "text-slate-700 hover:bg-slate-100/90 hover:text-slate-900 dark:text-slate-200 dark:hover:bg-slate-800/80 dark:hover:text-white"
                }`}
              >
                <IconComponent
                  className={`w-4 h-4 transition-all duration-300 flex-shrink-0 ${
                    isActive
                      ? "text-slate-900"
                      : "text-slate-500 group-hover:text-slate-800 dark:text-slate-400 dark:group-hover:text-white"
                  }`}
                />
                {!isCollapsed && (
                  <span className="font-medium text-sm tracking-tight truncate">
                    {link.name}
                  </span>
                )}
                {isActive && !isCollapsed && (
                  <div className="absolute -right-1.5 top-1/2 -translate-y-1/2 w-0.5 h-5 bg-purple-400 rounded-full blur-[1px]" />
                )}
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Bottom Section */}
      <div className="mt-auto p-3 space-y-1.5 border-t border-slate-200/60 dark:border-slate-700/50">
        {/* Settings Button */}
        <Button
          variant="ghost"
          className={`w-full ${
            isCollapsed ? "justify-center px-2" : "justify-start space-x-3 px-3"
          } py-2.5 h-auto rounded-lg text-slate-700 hover:bg-slate-100/90 hover:text-slate-900 dark:text-slate-200 dark:hover:bg-slate-800/80 dark:hover:text-white transition-all duration-300`}
        >
          <Settings className="w-4 h-4 text-slate-500 dark:text-slate-400 flex-shrink-0" />
          {!isCollapsed && (
            <span className="font-medium text-sm tracking-tight">Settings</span>
          )}
        </Button>

        {/* Profile Section */}
        <div className="bg-slate-100/50 dark:bg-slate-800/60 rounded-lg p-2.5 backdrop-blur-sm">
          <div
            className={`flex items-center ${
              isCollapsed ? "justify-center" : "space-x-2.5"
            }`}
          >
            <div className="w-8 h-8 bg-blue-500 rounded-md flex items-center justify-center shadow-sm shadow-purple-500/20">
              <User className="w-3.5 h-3.5 text-white" />
            </div>
            {!isCollapsed && (
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-slate-900 dark:text-white text-xs truncate">
                  Prajanya S
                </p>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 truncate">
                  ps@hirehunter.ai
                </p>
              </div>
            )}
            <div className="w-1.5 h-1.5 bg-green-400 rounded-full shadow-sm flex-shrink-0" />
          </div>
        </div>
      </div>
    </div>
  );
}
