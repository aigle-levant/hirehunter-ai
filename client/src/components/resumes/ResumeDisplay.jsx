import { useState, useEffect } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Eye,
  Download,
  Star,
  Calendar,
  User,
  Briefcase,
} from "lucide-react";

export default function ResumeDisplay() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const resumes = [
    {
      id: 1,
      name: "John Doe - Senior Developer",
      uploadDate: "2024-08-15",
      rating: 4.8,
      position: "Senior Software Engineer",
      company: "Tech Corp",
      preview:
        "Software engineer with 5+ years of experience in React, Node.js, and cloud technologies...",
      tags: ["React", "Node.js", "AWS", "TypeScript"],
      thumbnail:
        "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=400&h=500&fit=crop",
    },
    {
      id: 2,
      name: "Jane Smith - UX Designer",
      uploadDate: "2024-08-14",
      rating: 4.9,
      position: "Senior UX Designer",
      company: "Design Studio",
      preview:
        "Creative UX designer specializing in user-centered design with expertise in Figma, Adobe Creative Suite...",
      tags: ["Figma", "Adobe XD", "User Research", "Prototyping"],
      thumbnail:
        "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=400&h=500&fit=crop",
    },
    {
      id: 3,
      name: "Mike Johnson - Marketing Manager",
      uploadDate: "2024-08-13",
      rating: 4.7,
      position: "Marketing Manager",
      company: "Growth Inc",
      preview:
        "Results-driven marketing professional with 7+ years in digital marketing, SEO, and campaign management...",
      tags: ["SEO", "Google Ads", "Analytics", "Content Strategy"],
      thumbnail:
        "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=400&h=500&fit=crop",
    },
    {
      id: 4,
      name: "Sarah Wilson - Data Scientist",
      uploadDate: "2024-08-12",
      rating: 4.9,
      position: "Senior Data Scientist",
      company: "AI Labs",
      preview:
        "Data scientist with expertise in machine learning, Python, and statistical analysis for business insights...",
      tags: ["Python", "Machine Learning", "SQL", "TensorFlow"],
      thumbnail:
        "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=400&h=500&fit=crop",
    },
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 200);
    return () => clearTimeout(timer);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % resumes.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + resumes.length) % resumes.length);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const getCardPosition = (index) => {
    const diff = index - currentIndex;
    const totalCards = resumes.length;

    if (diff === 0) return "translate-x-0 scale-100 z-30";
    if (diff === 1 || diff === -(totalCards - 1))
      return "translate-x-80 scale-90 z-20";
    if (diff === -1 || diff === totalCards - 1)
      return "-translate-x-80 scale-90 z-20";
    return "translate-x-96 scale-75 z-10 opacity-0";
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  return (
    <section
      id="resume-swiper"
      className="py-16 px-4 bg-gradient-to-br from-gray-50 to-white min-h-screen"
    >
      {/* Header */}
      <div
        className={`text-center mb-12 transition-all duration-1000 ease-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <h2 className="text-4xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-4">
          Preview Your Resumes
        </h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Browse through your uploaded resumes with our interactive carousel.
          Click to view details or download.
        </p>
      </div>

      {/* Swiper Container */}
      <div
        className={`relative max-w-6xl mx-auto transition-all duration-1000 ease-out delay-300 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        }`}
      >
        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-40 p-3 bg-white/80 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-white hover:-translate-y-1 border border-gray-200"
          aria-label="Previous resume"
        >
          <ChevronLeft className="w-6 h-6 text-gray-700" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-40 p-3 bg-white/80 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-white hover:-translate-y-1 border border-gray-200"
          aria-label="Next resume"
        >
          <ChevronRight className="w-6 h-6 text-gray-700" />
        </button>

        {/* Cards Container */}
        <div className="relative h-[500px] flex items-center justify-center overflow-hidden">
          {resumes.map((resume, index) => (
            <div
              key={resume.id}
              className={`absolute w-80 h-96 transition-all duration-500 ease-in-out cursor-pointer ${getCardPosition(
                index
              )}`}
              onClick={() => goToSlide(index)}
            >
              <div className="w-full h-full bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-200">
                {/* Card Header */}
                <div className="relative h-32 bg-gradient-to-br from-blue-500 to-purple-600 p-4">
                  <div className="absolute top-4 right-4 flex gap-2">
                    <div className="flex items-center gap-1 bg-white/20 backdrop-blur-sm rounded-full px-2 py-1">
                      <Star className="w-3 h-3 text-yellow-300 fill-current" />
                      <span className="text-white text-xs font-medium">
                        {resume.rating}
                      </span>
                    </div>
                  </div>
                  <div className="text-white">
                    <h3 className="font-bold text-lg mb-1 truncate">
                      {resume.name}
                    </h3>
                    <div className="flex items-center gap-2 text-sm opacity-90">
                      <Briefcase className="w-4 h-4" />
                      <span className="truncate">{resume.position}</span>
                    </div>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 flex flex-col h-64">
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                    <Calendar className="w-4 h-4" />
                    <span>Uploaded {formatDate(resume.uploadDate)}</span>
                  </div>

                  <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
                    <User className="w-4 h-4" />
                    <span>{resume.company}</span>
                  </div>

                  <p className="text-gray-700 text-sm leading-relaxed mb-4 flex-1 line-clamp-3">
                    {resume.preview}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {resume.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-blue-50 text-blue-600 rounded-full text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                    {resume.tags.length > 3 && (
                      <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-medium">
                        +{resume.tags.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2 mt-auto">
                    <button className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium">
                      <Eye className="w-4 h-4" />
                      View
                    </button>
                    <button className="flex items-center justify-center gap-2 px-3 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors text-sm font-medium">
                      <Download className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Indicators */}
        <div className="flex justify-center mt-8 gap-2">
          {resumes.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-blue-600 w-8"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to resume ${index + 1}`}
            />
          ))}
        </div>

        {/* Resume Counter */}
        <div className="text-center mt-6">
          <p className="text-gray-500 text-sm">
            {currentIndex + 1} of {resumes.length} resumes
          </p>
        </div>
      </div>
    </section>
  );
}
