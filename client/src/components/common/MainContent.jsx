import { useState, useEffect } from "react";
import {
  Users,
  Briefcase,
  Mail,
  Calendar,
  TrendingUp,
  Star,
  Clock,
  MapPin,
  ChevronRight,
  Filter,
  Search,
  MoreHorizontal,
  Target,
  Award,
  Zap,
  Eye,
} from "lucide-react";

export default function MainContent() {
  const [currentJobIndex, setCurrentJobIndex] = useState(0);
  const [currentDate, setCurrentDate] = useState(new Date());
  const [isLoaded, setIsLoaded] = useState(false);

  const jobs = [
    {
      title: "Senior Frontend Developer",
      candidates: 12,
      color: "from-blue-500 to-purple-600",
    },
    {
      title: "Product Manager",
      candidates: 8,
      color: "from-green-500 to-teal-600",
    },
    {
      title: "UX Designer",
      candidates: 15,
      color: "from-pink-500 to-rose-600",
    },
    {
      title: "Data Scientist",
      candidates: 6,
      color: "from-orange-500 to-red-600",
    },
    {
      title: "Backend Engineer",
      candidates: 9,
      color: "from-indigo-500 to-blue-600",
    },
  ];

  const candidates = [
    {
      name: "Sarah Chen",
      score: 95,
      skills: "React, TypeScript",
      location: "San Francisco",
      avatar: "SC",
      trend: "+12%",
      status: "Interview Scheduled",
    },
    {
      name: "Michael Rodriguez",
      score: 92,
      skills: "Python, ML",
      location: "New York",
      avatar: "MR",
      trend: "+8%",
      status: "Technical Review",
    },
    {
      name: "Emma Thompson",
      score: 89,
      skills: "Design, Figma",
      location: "London",
      avatar: "ET",
      trend: "+15%",
      status: "Portfolio Review",
    },
  ];

  const stats = [
    {
      icon: Users,
      value: "100",
      label: "Applications",
      change: "+12%",
      color: "from-violet-500 to-purple-600",
    },
    {
      icon: Briefcase,
      value: "5",
      label: "Active Jobs",
      change: "+2",
      color: "from-emerald-500 to-teal-600",
    },
    {
      icon: Mail,
      value: "2",
      label: "Interview Invites",
      change: "Today",
      color: "from-amber-500 to-orange-600",
    },
    {
      icon: Target,
      value: "87%",
      label: "Match Rate",
      change: "+5%",
      color: "from-rose-500 to-pink-600",
    },
  ];

  const activities = [
    {
      time: "2 min ago",
      action: "New application",
      detail: "Frontend Developer",
      type: "application",
    },
    {
      time: "15 min ago",
      action: "Interview completed",
      detail: "Sarah Chen",
      type: "interview",
    },
    {
      time: "1 hour ago",
      action: "Job posted",
      detail: "Product Manager",
      type: "job",
    },
  ];

  useEffect(() => {
    setIsLoaded(true);
    const interval = setInterval(() => {
      setCurrentJobIndex((prev) => (prev + 1) % jobs.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const StatCard = ({ icon: Icon, value, label, change, color }) => (
    <div
      className={`relative overflow-hidden bg-gradient-to-br ${color} rounded-2xl p-6 text-white transform hover:scale-105 transition-all duration-300 hover:shadow-2xl group`}
    >
      <div className="relative z-10">
        <div className="flex items-center justify-between mb-4">
          <Icon className="w-8 h-8 opacity-90" />
          <span className="text-sm font-medium bg-white/20 px-2 py-1 rounded-full backdrop-blur-sm">
            {change}
          </span>
        </div>
        <div className="space-y-1">
          <p className="text-3xl font-bold tracking-tight">{value}</p>
          <p className="text-white/80 font-medium">{label}</p>
        </div>
      </div>
      <div className="absolute -right-4 -bottom-4 opacity-10 group-hover:opacity-20 transition-opacity">
        <Icon className="w-24 h-24" />
      </div>
    </div>
  );

  const CandidateCard = ({ candidate, index }) => (
    <div className="bg-white rounded-xl p-4 hover:shadow-lg transition-all duration-300 border border-gray-100 group hover:border-blue-200">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center text-white font-bold">
            {candidate.avatar}
          </div>
          <div>
            <p className="font-semibold text-gray-900">{candidate.name}</p>
            <p className="text-sm text-gray-500 flex items-center gap-1">
              <MapPin className="w-3 h-3" />
              {candidate.location}
            </p>
          </div>
        </div>
        <div className="text-right">
          <div className="flex items-center gap-2 mb-1">
            <div className="w-12 h-12 relative">
              <svg
                className="w-12 h-12 transform -rotate-90"
                viewBox="0 0 36 36"
              >
                <path
                  className="text-gray-200"
                  strokeWidth="3"
                  stroke="currentColor"
                  fill="none"
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <path
                  className="text-green-500"
                  strokeWidth="3"
                  strokeDasharray={`${candidate.score}, 100`}
                  stroke="currentColor"
                  fill="none"
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-xs font-bold text-gray-700">
                  {candidate.score}
                </span>
              </div>
            </div>
          </div>
          <span className="text-xs text-green-600 font-medium">
            {candidate.trend}
          </span>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <span className="inline-block px-3 py-1 text-xs rounded-full bg-blue-50 text-blue-700 font-medium">
          {candidate.status}
        </span>
        <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-blue-500 transition-colors" />
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50/30 p-6">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Recruitment Dashboard
            </h1>
            <p className="text-gray-600">
              Welcome back! Here's what's happening with your hiring pipeline.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 px-4 py-2 bg-white rounded-xl border border-gray-200 hover:border-gray-300 transition-colors">
              <Filter className="w-4 h-4" />
              Filter
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-white rounded-xl border border-gray-200 hover:border-gray-300 transition-colors">
              <Search className="w-4 h-4" />
              Search
            </button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`opacity-0 ${
                isLoaded ? "opacity-100" : ""
              } transition-opacity duration-700`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <StatCard {...stat} />
            </div>
          ))}
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
          {/* Left Column - Candidates */}
          <div className="xl:col-span-2 space-y-6">
            {/* Best Candidates */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="px-6 py-5 border-b border-gray-100 bg-gradient-to-r from-gray-50 to-white">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                      <Award className="w-6 h-6 text-amber-500" />
                      Top Candidates
                    </h2>
                    <div className="mt-2">
                      <p className="text-sm text-gray-600">For</p>
                      <div
                        className={`inline-block px-4 py-2 rounded-lg bg-gradient-to-r ${jobs[currentJobIndex].color} text-white font-medium transition-all duration-500 transform`}
                      >
                        {jobs[currentJobIndex].title}
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-gray-900">
                      {jobs[currentJobIndex].candidates}
                    </p>
                    <p className="text-sm text-gray-500">candidates</p>
                  </div>
                </div>
              </div>

              <div className="p-6 space-y-4">
                {candidates.map((candidate, index) => (
                  <CandidateCard
                    key={index}
                    candidate={candidate}
                    index={index}
                  />
                ))}
              </div>
            </div>

            {/* Activity Feed */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Zap className="w-5 h-5 text-yellow-500" />
                Recent Activity
              </h3>
              <div className="space-y-3">
                {activities.map((activity, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-3 hover:bg-gray-50 rounded-lg transition-colors"
                  >
                    <div
                      className={`w-2 h-2 rounded-full ${
                        activity.type === "application"
                          ? "bg-blue-500"
                          : activity.type === "interview"
                          ? "bg-green-500"
                          : "bg-purple-500"
                      }`}
                    />
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-900">
                        {activity.action}
                      </p>
                      <p className="text-sm text-gray-500">{activity.detail}</p>
                    </div>
                    <span className="text-xs text-gray-400">
                      {activity.time}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Calendar & Insights */}
          <div className="space-y-6">
            {/* Calendar Widget */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Calendar className="w-5 h-5 text-blue-500" />
                Schedule
              </h3>
              <div className="space-y-4">
                <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl">
                  <p className="text-sm text-gray-600 mb-1">Today</p>
                  <p className="text-2xl font-bold text-gray-900">
                    {currentDate.getDate()}
                  </p>
                  <p className="text-sm text-gray-600">
                    {currentDate.toLocaleDateString("en-US", {
                      month: "short",
                      year: "numeric",
                    })}
                  </p>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                    <Clock className="w-4 h-4 text-blue-600" />
                    <div>
                      <p className="font-medium text-blue-900">
                        Interview - Sarah Chen
                      </p>
                      <p className="text-sm text-blue-600">10:00 AM</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg border-l-4 border-green-500">
                    <Users className="w-4 h-4 text-green-600" />
                    <div>
                      <p className="font-medium text-green-900">Team Review</p>
                      <p className="text-sm text-green-600">2:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Performance Metrics */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Eye className="w-5 h-5 text-purple-500" />
                Performance
              </h3>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-700">
                    Interview Success
                  </span>
                  <span className="text-sm font-bold text-green-600">92%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-green-500 to-emerald-600 h-2 rounded-full"
                    style={{ width: "92%" }}
                  ></div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-700">
                    Response Rate
                  </span>
                  <span className="text-sm font-bold text-blue-600">78%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-blue-500 to-indigo-600 h-2 rounded-full"
                    style={{ width: "78%" }}
                  ></div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-700">
                    Hiring Speed
                  </span>
                  <span className="text-sm font-bold text-purple-600">
                    14 days
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-purple-500 to-pink-600 h-2 rounded-full"
                    style={{ width: "85%" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
