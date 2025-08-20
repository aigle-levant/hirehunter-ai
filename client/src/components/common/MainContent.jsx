import { useState, useEffect } from "react";
import {
  Users,
  Briefcase,
  Calendar,
  Star,
  Clock,
  MapPin,
  Eye,
  ChevronRight,
} from "lucide-react";
import { motion } from "framer-motion";

export default function MainContent() {
  const stats = [
    { icon: Users, value: "12", label: "Applications" },
    { icon: Briefcase, value: "5", label: "Active Jobs" },
    { icon: Calendar, value: "2", label: "Interviews Today" },
    { icon: Star, value: "87%", label: "Match Rate" },
  ];

  const candidates = [
    {
      name: "Jnaneshwar S",
      score: 78,
      location: "Noida",
      avatar: "JS",
      status: "Interview Scheduled",
    },
    {
      name: "Michael Kamaraj",
      score: 87,
      location: "Coimbatore",
      avatar: "MK",
      status: "Technical Review",
    },
    {
      name: "Joshua Fernandez",
      score: 98,
      location: "Mumbai",
      avatar: "JF",
      status: "Document Submission",
    },
  ];

  const feedback = [
    {
      name: "Jelisha Muruganathan",
      role: "HR Manager",
      comment:
        "The platform makes screening candidates incredibly fast and intuitive.",
    },
    {
      name: "Samarth Pandey",
      role: "Team Lead",
      comment:
        "I love the candidate insights and how quickly I can track interviews.",
    },
  ];

  const StatCard = ({ icon: Icon, value, label }) => (
    <motion.div
      whileHover={{ y: -4, scale: 1.03 }}
      className="p-6 rounded-2xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700"
    >
      <Icon className="w-7 h-7 text-blue-600 dark:text-blue-400" />
      <p className="text-2xl font-semibold mt-2 text-gray-900 dark:text-white">
        {value}
      </p>
      <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{label}</p>
    </motion.div>
  );

  const CandidateCard = ({ candidate, index }) => (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      whileHover={{ y: -3, scale: 1.01 }}
      className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700"
    >
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center text-white font-semibold">
            {candidate.avatar}
          </div>
          <div>
            <p className="font-semibold text-gray-900 dark:text-white">
              {candidate.name}
            </p>
            <p className="flex items-center gap-1 text-gray-500 dark:text-gray-400 text-sm">
              <MapPin className="w-3 h-3 text-blue-500 dark:text-blue-400" />{" "}
              {candidate.location}
            </p>
          </div>
        </div>
        {/* Circular progress */}
        <div className="relative w-12 h-12">
          <svg viewBox="0 0 36 36" className="w-12 h-12 rotate-[-90deg]">
            <circle
              cx="18"
              cy="18"
              r="15.9155"
              stroke="currentColor"
              className="text-gray-200 dark:text-gray-700"
              strokeWidth="3"
              fill="none"
            />
            <motion.circle
              cx="18"
              cy="18"
              r="15.9155"
              stroke="currentColor"
              className="text-blue-600 dark:text-blue-400"
              strokeWidth="3"
              strokeDasharray={`${candidate.score}, 100`}
              initial={{ strokeDashoffset: 100 }}
              animate={{ strokeDashoffset: 0 }}
              transition={{ duration: 1 }}
              fill="none"
            />
          </svg>
          <span className="absolute inset-0 flex items-center justify-center text-sm font-semibold text-gray-900 dark:text-white">
            {candidate.score}
          </span>
        </div>
      </div>
      <div className="flex justify-between items-center mt-4">
        <span className="px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 text-xs font-medium">
          {candidate.status}
        </span>
        <ChevronRight className="w-4 h-4 text-gray-500 dark:text-gray-300" />
      </div>
    </motion.div>
  );

  const FeedbackCard = ({ item }) => (
    <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700">
      <p className="font-semibold text-gray-900 dark:text-white">{item.name}</p>
      <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
        {item.role}
      </p>
      <p className="text-gray-700 dark:text-gray-300 italic">
        “{item.comment}”
      </p>
    </div>
  );

  return (
    <div className="min-h-screen px-10 py-6 bg-gray-50 dark:bg-gray-900 transition-colors">
      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 mt-4 lg:grid-cols-4 gap-6 mb-14">
        {stats.map((stat, idx) => (
          <StatCard key={idx} {...stat} />
        ))}
      </div>

      {/* Candidates + Sidebar */}
      <div className="flex flex-col xl:flex-row gap-10">
        <div className="xl:w-2/3 space-y-6">
          {candidates.map((c, idx) => (
            <CandidateCard key={idx} candidate={c} index={idx} />
          ))}
        </div>

        <div className="xl:w-1/3 space-y-8">
          {/* Schedule */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-6">
            <h3 className="font-semibold text-gray-900 dark:text-white flex items-center gap-2 mb-4">
              <Calendar className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              Schedule
            </h3>
            <div className="flex flex-col gap-3">
              <div className="flex justify-between p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <Clock className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <span className="font-medium text-gray-900 dark:text-white">
                  Interview
                </span>
                <span className="text-gray-500 dark:text-gray-400">
                  10:00 AM
                </span>
              </div>
              <div className="flex justify-between p-3 bg-amber-50 dark:bg-amber-900/20 rounded-lg">
                <Users className="w-4 h-4 text-amber-500 dark:text-amber-400" />
                <span className="font-medium text-gray-900 dark:text-white">
                  Team Review
                </span>
                <span className="text-gray-500 dark:text-gray-400">
                  2:00 PM
                </span>
              </div>
            </div>
          </div>

          {/* Performance */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-6">
            <h3 className="font-semibold text-gray-900 dark:text-white flex items-center gap-2 mb-4">
              <Eye className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              Performance
            </h3>
            <div className="space-y-4">
              {[
                { label: "Interview Success", value: 92 },
                { label: "Response Rate", value: 78 },
                { label: "Hiring Speed", value: 85 },
              ].map((metric, idx) => (
                <div key={idx}>
                  <div className="flex justify-between text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">
                    {metric.label}
                    <span className="font-semibold text-gray-900 dark:text-white">
                      {metric.value}%
                    </span>
                  </div>
                  <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full">
                    <div
                      className="h-2 bg-blue-600 dark:bg-blue-400 rounded-full"
                      style={{ width: `${metric.value}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Feedback */}
      <div className="mt-14 space-y-6">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
          Recent Feedback
        </h2>
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
          {feedback.map((f, idx) => (
            <FeedbackCard key={idx} item={f} />
          ))}
        </div>
      </div>
    </div>
  );
}
