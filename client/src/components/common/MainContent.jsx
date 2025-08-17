import { useState, useEffect } from "react";
import {
  Users,
  Briefcase,
  Mail,
  Calendar,
  Star,
  Clock,
  MapPin,
  ChevronRight,
  Award,
  Eye,
} from "lucide-react";

export default function MainContent() {
  const [currentJobIndex, setCurrentJobIndex] = useState(0);
  const [currentDate, setCurrentDate] = useState(new Date());
  const [isLoaded, setIsLoaded] = useState(false);

  const jobs = [
    { title: "Senior Frontend Developer", candidates: 12 },
    { title: "Product Manager", candidates: 8 },
    { title: "UX Designer", candidates: 15 },
    { title: "Data Scientist", candidates: 6 },
    { title: "Backend Engineer", candidates: 9 },
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
    { icon: Users, value: "100", label: "Applications", change: "+12%" },
    { icon: Briefcase, value: "5", label: "Active Jobs", change: "+2" },
    { icon: Mail, value: "2", label: "Interview Invites", change: "Today" },
    { icon: Star, value: "87%", label: "Match Rate", change: "+5%" },
  ];

  const feedback = [
    {
      name: "John Doe",
      role: "johndoe@gmail.com",
      comment:
        "The interview process was smooth and professional. I appreciated the timely communication and clear expectations.",
    },
    {
      name: "Jane Smith",
      role: "janesmith@gmail.com",
      comment:
        "This dashboard has significantly streamlined our recruitment efforts, though I'd like more customizable filters.",
    },
  ];

  useEffect(() => {
    setIsLoaded(true);
    const interval = setInterval(() => {
      setCurrentJobIndex((prev) => (prev + 1) % jobs.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const StatCard = ({ icon: Icon, value, label, change }) => (
    <div
      className="relative overflow-hidden rounded-2xl p-6 text-white transform hover:scale-105 transition-all duration-300 hover:shadow-2xl group"
      style={{ background: "#1C398E" }}
    >
      <div className="relative z-10">
        <div className="flex items-center justify-between mb-4">
          <Icon className="w-8 h-8 opacity-90" />
          <span className="text-sm font-medium bg-[#F15946]/20 px-2 py-1 rounded-full backdrop-blur-sm">
            {change}
          </span>
        </div>
        <div className="space-y-1">
          <p className="text-3xl font-bold tracking-tight">{value}</p>
          <p className="text-[#FFFFFF]/90 font-medium">{label}</p>
        </div>
      </div>
      <div className="absolute -right-4 -bottom-4 opacity-10 group-hover:opacity-20 transition-opacity">
        <Icon className="w-24 h-24" />
      </div>
    </div>
  );

  const CandidateCard = ({ candidate }) => (
    <div className="bg-[#FFFFFF] rounded-xl p-4 border border-[#F15946] hover:shadow-lg transition-all duration-300">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-[#1C398E] rounded-xl flex items-center justify-center text-white font-bold">
            {candidate.avatar}
          </div>
          <div>
            <p className="font-semibold text-[#1C398E]">{candidate.name}</p>
            <p className="text-sm text-[#71717B] flex items-center gap-1">
              <MapPin className="w-3 h-3 text-[#1C398E]" /> {candidate.location}
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
                  className="text-[#71717B]"
                  strokeWidth="3"
                  stroke="currentColor"
                  fill="none"
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <path
                  className="text-[#F15946]"
                  strokeWidth="3"
                  strokeDasharray={`${candidate.score}, 100`}
                  stroke="currentColor"
                  fill="none"
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-xs font-bold text-[#1C398E]">
                  {candidate.score}
                </span>
              </div>
            </div>
          </div>
          <span className="text-xs text-[#F15946] font-medium">
            {candidate.trend}
          </span>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <span className="inline-block px-3 py-1 text-xs rounded-full bg-[#F15946]/10 text-[#F15946] font-medium">
          {candidate.status}
        </span>
        <ChevronRight className="w-4 h-4 text-[#1C398E]" />
      </div>
    </div>
  );

  const FeedbackCard = ({ feedback }) => (
    <div className="bg-[#FFFFFF] rounded-2xl p-6 border border-[#F15946] shadow-sm hover:shadow-md transition-shadow duration-300">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 bg-[#1C398E] rounded-full flex items-center justify-center text-white font-bold text-lg">
          {feedback.name[0]}
        </div>
        <div>
          <p className="font-semibold text-[#1C398E]">{feedback.name}</p>
          <p className="text-sm text-[#71717B]">{feedback.role}</p>
        </div>
      </div>
      <div className="flex items-center mb-3">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-5 h-5 ${
              i < feedback.rating
                ? "text-[#F15946] fill-[#F15946]"
                : "text-[#71717B]/30"
            }`}
          />
        ))}
      </div>
      <p className="text-sm text-[#71717B] italic">"{feedback.comment}"</p>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#fff] p-6">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Stats Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
          {/* Left Column - Top Candidates */}
          <div className="xl:col-span-2 space-y-6">
            <div className="bg-[#FFFFFF] rounded-2xl shadow-sm border border-[#F15946] overflow-hidden">
              <div className="px-6 py-5 border-b border-[#F15946]">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-xl font-bold text-[#1C398E] flex items-center gap-2">
                      <Award className="w-6 h-6 text-[#F15946]" /> Top
                      Candidates
                    </h2>
                    <div className="mt-2">
                      <p className="text-sm text-[#71717B]">For</p>
                      <div className="inline-block px-4 py-2 rounded-lg bg-[#1C398E] text-white font-medium transition-all duration-500">
                        {jobs[currentJobIndex].title}
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-[#1C398E]">
                      {jobs[currentJobIndex].candidates}
                    </p>
                    <p className="text-sm text-[#71717B]">candidates</p>
                  </div>
                </div>
              </div>
              <div className="p-6 space-y-4">
                {candidates.map((candidate, index) => (
                  <CandidateCard key={index} candidate={candidate} />
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Schedule & Performance */}
          <div className="space-y-6">
            {/* Schedule Widget */}
            <div className="bg-[#FFFFFF] rounded-2xl shadow-sm border border-[#F15946] p-6">
              <h3 className="text-lg font-bold text-[#1C398E] mb-4 flex items-center gap-2">
                <Calendar className="w-5 h-5 text-[#1C398E]" /> Schedule
              </h3>
              <div className="space-y-4">
                <div className="text-center p-6 bg-[#FFFFFF] border border-[#F15946] rounded-xl">
                  <p className="text-sm text-[#71717B] mb-1">Today</p>
                  <p className="text-2xl font-bold text-[#1C398E]">
                    {currentDate.getDate()}
                  </p>
                  <p className="text-sm text-[#71717B]">
                    {currentDate.toLocaleDateString("en-US", {
                      month: "short",
                      year: "numeric",
                    })}
                  </p>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 bg-[#1C398E]/10 rounded-lg border-l-4 border-[#1C398E]">
                    <Clock className="w-4 h-4 text-[#1C398E]" />
                    <div>
                      <p className="font-medium text-[#1C398E]">
                        Interview - Sarah Chen
                      </p>
                      <p className="text-sm text-[#71717B]">10:00 AM</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-[#F15946]/10 rounded-lg border-l-4 border-[#F15946]">
                    <Users className="w-4 h-4 text-[#F15946]" />
                    <div>
                      <p className="font-medium text-[#F15946]">Team Review</p>
                      <p className="text-sm text-[#71717B]">2:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Performance Metrics */}
            <div className="bg-[#FFFFFF] rounded-2xl shadow-sm border border-[#F15946] p-6">
              <h3 className="text-lg font-bold text-[#1C398E] mb-4 flex items-center gap-2">
                <Eye className="w-5 h-5 text-[#1C398E]" /> Performance
              </h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-[#71717B]">
                    Interview Success
                  </span>
                  <span className="text-sm font-bold text-[#1C398E]">92%</span>
                </div>
                <div className="w-full bg-[#71717B]/20 rounded-full h-2">
                  <div
                    className="bg-[#F15946] h-2 rounded-full"
                    style={{ width: "92%" }}
                  ></div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-[#71717B]">
                    Response Rate
                  </span>
                  <span className="text-sm font-bold text-[#1C398E]">78%</span>
                </div>
                <div className="w-full bg-[#71717B]/20 rounded-full h-2">
                  <div
                    className="bg-[#F15946] h-2 rounded-full"
                    style={{ width: "78%" }}
                  ></div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-[#71717B]">
                    Hiring Speed
                  </span>
                  <span className="text-sm font-bold text-[#1C398E]">
                    14 days
                  </span>
                </div>
                <div className="w-full bg-[#71717B]/20 rounded-full h-2">
                  <div
                    className="bg-[#F15946] h-2 rounded-full"
                    style={{ width: "85%" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Feedback Section - Down Below */}
        <div className="space-y-6">
          <h2 className="text-xl font-bold text-[#1C398E] flex items-center gap-2">
            <Star className="w-6 h-6 text-[#F15946]" /> Recent Feedback
          </h2>
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
            {feedback.map((item, index) => (
              <FeedbackCard key={index} feedback={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
