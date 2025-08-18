import { useState, useEffect } from "react";
import {
  Users,
  Briefcase,
  Calendar,
  Star,
  Clock,
  MapPin,
  Award,
  Eye,
  ChevronRight,
} from "lucide-react";
import { motion } from "framer-motion";

export default function MainContent() {
  const jobs = [
    { title: "Senior Frontend Developer", candidates: 12 },
    { title: "Product Manager", candidates: 8 },
    { title: "UX Designer", candidates: 15 },
  ];

  const stats = [
    { icon: Users, value: "100", label: "Applications", change: "+12%" },
    { icon: Briefcase, value: "5", label: "Active Jobs", change: "+2" },
    { icon: Calendar, value: "2", label: "Interviews Today", change: "Today" },
    { icon: Star, value: "87%", label: "Match Rate", change: "+5%" },
  ];

  const candidates = [
    {
      name: "Sarah Chen",
      score: 95,
      location: "San Francisco",
      avatar: "SC",
      trend: "+12%",
      status: "Interview Scheduled",
    },
    {
      name: "Michael Rodriguez",
      score: 92,
      location: "New York",
      avatar: "MR",
      trend: "+8%",
      status: "Technical Review",
    },
    {
      name: "Emma Thompson",
      score: 89,
      location: "London",
      avatar: "ET",
      trend: "+15%",
      status: "Portfolio Review",
    },
  ];

  const feedback = [
    {
      name: "John Doe",
      role: "HR Manager",
      comment:
        "The platform makes screening candidates incredibly fast and intuitive.",
    },
    {
      name: "Jane Smith",
      role: "Team Lead",
      comment:
        "I love the candidate insights and how quickly I can track interviews.",
    },
  ];

  const StatCard = ({ icon: Icon, value, label, change }) => (
    <motion.div
      whileHover={{ y: -3, scale: 1.02 }}
      className="relative p-6 rounded-2xl bg-blue-50 overflow-hidden shadow-md"
    >
      <Icon className="w-8 h-8 text-blue-600" />
      <p className="text-2xl font-bold mt-2">{value}</p>
      <p className="text-sm text-gray-600 mt-1">{label}</p>
    </motion.div>
  );

  const CandidateCard = ({ candidate, index }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 * (index + 1) }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5, scale: 1.02 }}
      className="bg-white rounded-xl p-5 shadow-md border-l-4 border-blue-600 mb-4"
    >
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center text-white font-bold">
            {candidate.avatar}
          </div>
          <div>
            <p className="font-bold font-helv-bold text-gray-900">
              {candidate.name}
            </p>
            <p className="flex items-center gap-1 text-gray-500 text-sm">
              <MapPin className="w-3 h-3 text-blue-600" /> {candidate.location}
            </p>
          </div>
        </div>
        <div className="text-right font-helv-bold">
          <div className="relative w-12 h-12">
            <svg viewBox="0 0 36 36" className="w-12 h-12 rotate-[-90deg]">
              <circle
                cx="18"
                cy="18"
                r="15.9155"
                stroke="#fff"
                strokeWidth="3"
                fill="none"
              />
              <motion.circle
                cx="18"
                cy="18"
                r="15.9155"
                stroke="#000"
                strokeWidth="3"
                strokeDasharray={`${candidate.score}, 100`}
                initial={{ strokeDashoffset: 100 }}
                animate={{ strokeDashoffset: 0 }}
                transition={{ duration: 1.2 }}
                fill="none"
              />
            </svg>
            <span className="absolute inset-0 flex items-center justify-center text-sm font-bold text-gray-900">
              {candidate.score}
            </span>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center mt-4">
        <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-600 text-xs">
          {candidate.status}
        </span>
        <ChevronRight className="w-4 h-4 text-gray-900" />
      </div>
    </motion.div>
  );

  const FeedbackCard = ({ item }) => (
    <div className="bg-white rounded-2xl p-6 shadow-md border-1 border-blue-100">
      <p className="font-bold text-gray-900">{item.name}</p>
      <p className="text-sm text-gray-500 mb-2">{item.role}</p>
      <p className="text-gray-700 italic">"{item.comment}"</p>
    </div>
  );

  return (
    <div className="min-h-screen px-12 py-8 bg-white rounded-2xl">
      {/* Stats Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {stats.map((stat, idx) => (
          <StatCard key={idx} {...stat} />
        ))}
      </div>

      {/* Top Candidates */}
      <div className="flex flex-col xl:flex-row gap-12">
        <div className="xl:w-2/3">
          {candidates.map((c, idx) => (
            <CandidateCard key={idx} candidate={c} index={idx} />
          ))}
        </div>

        {/* Right Panel */}
        <div className="xl:w-1/3 space-y-6">
          <div className="bg-white rounded-2xl shadow-md p-6 border-l-4 border-blue-600">
            <h3 className="font-bold text-gray-900 flex items-center gap-2 mb-4">
              <Calendar className="w-5 h-5 text-blue-600" /> Schedule
            </h3>
            <div className="flex flex-col gap-3">
              <div className="flex justify-between p-3 bg-blue-50 rounded-lg">
                <Clock className="w-4 h-4 text-blue-600" />
                <span className="font-medium text-gray-900">
                  Interview - Sarah
                </span>
                <span className="text-gray-500">10:00 AM</span>
              </div>
              <div className="flex justify-between p-3 bg-orange-50 rounded-lg">
                <Users className="w-4 h-4 text-orange-500" />
                <span className="font-medium text-gray-900">Team Review</span>
                <span className="text-gray-500">2:00 PM</span>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-2xl shadow-md p-6 border-l border-blue-100">
            <h3 className="font-bold text-gray-900 flex items-center gap-2 mb-4">
              <Eye className="w-5 h-5 text-blue-500" /> Performance
            </h3>
            <div className="space-y-3">
              {[
                { label: "Interview Success", value: 92 },
                { label: "Response Rate", value: 78 },
                { label: "Hiring Speed", value: 85 },
              ].map((metric, idx) => (
                <div key={idx}>
                  <div className="flex justify-between text-sm font-medium text-gray-500 mb-1">
                    {metric.label}
                    <span className="font-bold text-gray-900">
                      {metric.value}%
                    </span>
                  </div>
                  <div className="w-full h-2 bg-gray-200 rounded-full">
                    <div
                      className="h-2 bg-blue-500 rounded-full"
                      style={{ width: `${metric.value}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Feedback Section */}
      <div className="mt-12 space-y-6">
        <h2 className="text-xl font-bold text-gray-900 mb-4">
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
