import { Button } from "@/components/ui/button";
import {
  LayoutDashboard,
  FileText,
  Trophy,
  Calendar,
  MessageSquare,
  Settings,
  User,
} from "lucide-react";

export default function SideNavbar() {
  const navLinks = [
    { name: "Dashboard", icon: LayoutDashboard, href: "/dashboard" },
    { name: "Parse", icon: FileText, href: "/parse" },
    { name: "Leaderboard", icon: Trophy, href: "/leaderboard" },
    { name: "Schedule", icon: Calendar, href: "/schedule" },
    { name: "Feedback", icon: MessageSquare, href: "/feedback" },
  ];

  return (
    <div className="h-screen w-72 bg-gradient-to-b from-slate-50 to-white border-r border-slate-200/60 flex flex-col shadow-lg dark:from-slate-900 dark:to-slate-800 dark:border-slate-700/50">
      {/* Logo Section */}
      <div className="p-8 pb-6">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">
          Hirehunter.ai
        </h1>
      </div>

      {/* Navigation Links */}
      <div className="flex-1 px-6">
        <nav className="space-y-1">
          {navLinks.map((link, index) => {
            const IconComponent = link.icon;
            const isActive = index === 0; // Making first item active for demo
            return (
              <a
                key={link.name}
                href={link.href}
                className={`flex items-center space-x-4 px-4 py-3.5 rounded-xl transition-all duration-300 group relative ${
                  isActive
                    ? "bg-blue-500 text-white shadow-lg shadow-blue-500/25"
                    : "text-slate-700 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800/50 dark:hover:text-white"
                }`}
              >
                <IconComponent
                  className={`w-5 h-5 transition-all duration-300 ${
                    isActive
                      ? "text-white"
                      : "text-slate-500 group-hover:text-slate-700 dark:text-slate-400 dark:group-hover:text-slate-200"
                  }`}
                />
                <span className="font-medium text-sm tracking-wide">
                  {link.name}
                </span>
                {isActive && (
                  <div className="absolute right-4 w-1.5 h-1.5 bg-white/70 rounded-full"></div>
                )}
              </a>
            );
          })}
        </nav>
      </div>

      {/* Bottom Section - Push to very bottom */}
      <div className="mt-auto p-6 space-y-3 border-t border-slate-200/60 dark:border-slate-700/50">
        {/* Settings Button */}
        <Button
          variant="ghost"
          className="w-full justify-start space-x-4 px-4 py-3.5 h-auto rounded-xl text-slate-700 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800/50 dark:hover:text-white transition-all duration-300"
        >
          <Settings className="w-5 h-5 text-slate-500 dark:text-slate-400" />
          <span className="font-medium text-sm tracking-wide">Settings</span>
        </Button>

        {/* Profile Section */}
        <div className="bg-slate-100/80 dark:bg-slate-800/50 rounded-2xl p-4 backdrop-blur-sm">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/25">
              <User className="w-5 h-5 text-white" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-semibold text-slate-900 dark:text-white text-sm truncate">
                Profile
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-400 truncate">
                ps@example.com
              </p>
            </div>
            <div className="w-2 h-2 bg-green-400 rounded-full shadow-sm"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
