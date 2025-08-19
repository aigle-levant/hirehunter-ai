import { useState } from "react";
import { Button } from "@/components/ui/button";
import { X, ArrowRight, Upload } from "lucide-react";
import { useResumes } from "@/store/Context"; // Zustand store
import { mockResumes } from "@/data/mockResumes";

export default function Resumes() {
  const { resumes, addResumes, removeResume, discardAll, updateResume } =
    useResumes();

  const handleUpload = (e) => {
    const files = Array.from(e.target.files).map((file) => {
      const candidate =
        mockResumes[Math.floor(Math.random() * mockResumes.length)];

      return {
        id: Date.now() + Math.random(),
        ...candidate,
        fileName: file.name,
        status: "Analyzing...",
        selected: false,
      };
    });

    addResumes(files);

    // simulate async analysis
    setTimeout(() => {
      files.forEach((resume) => {
        updateResume(resume.email, { status: "HireScore ready!" });
      });
    }, 2000 + Math.random() * 2000);
  };

  const handleRemove = (email) => {
    removeResume(email);
  };

  return (
    <section className="container bg-white dark:bg-gray-900 rounded-2xl mx-auto p-6 space-y-8">
      <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white text-center">
        Upload resumes
      </h1>
      <p className="text-center text-gray-600 dark:text-gray-300">
        The secret HireScore will reveal the top talents automatically…
      </p>

      {/* Upload Section */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-4">
        <label className="cursor-pointer flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition shadow-lg">
          <Upload className="w-5 h-5" /> Upload Resumes
          <input
            type="file"
            multiple
            onChange={handleUpload}
            className="hidden"
          />
        </label>
        <span className="text-gray-500 dark:text-gray-300">
          {resumes.length} candidate{resumes.length !== 1 && "s"} uploaded
        </span>
      </div>

      {/* Resume / Candidate Cards */}
      {resumes.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {resumes.map((resume) => (
            <div
              key={resume.id}
              className="bg-white dark:bg-gray-800 p-5 rounded-2xl shadow-xl relative hover:scale-105 transition-transform duration-300"
            >
              <div className="flex justify-between items-center mb-3">
                <p className="font-bold text-gray-900 dark:text-white">
                  {resume.name}
                </p>
                <button
                  onClick={() => handleRemove(resume.email)}
                  className="text-gray-400 hover:text-red-500"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <p className="text-sm text-gray-500 dark:text-gray-300 mb-2">
                Position: {resume.position}
              </p>

              <p className="text-2xl font-extrabold text-indigo-600 dark:text-indigo-400 mb-2">
                {resume.hirescore}{" "}
                <span className="text-gray-400 dark:text-gray-300 text-base">
                  HireScore
                </span>
              </p>

              <span
                className={`text-xs px-2 py-1 rounded-full ${
                  resume.status === "Analyzing..."
                    ? "bg-yellow-100 text-yellow-700 dark:bg-yellow-200/30 dark:text-yellow-500"
                    : "bg-green-100 text-green-700 dark:bg-green-200/30 dark:text-green-500"
                }`}
              >
                {resume.status}
              </span>

              {/* Strong Skills */}
              <div className="mt-3">
                <p className="text-sm font-medium text-green-700 dark:text-green-400 mb-1">
                  Strong Skills:
                </p>
                <div className="flex flex-wrap gap-2">
                  {(resume.strongSkills || []).map((skill, i) => (
                    <span
                      key={i}
                      className="bg-green-100 dark:bg-green-200/30 text-green-800 dark:text-green-400 px-3 py-1 rounded-full text-xs"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Weak Skills */}
              <div className="mt-2">
                <p className="text-sm font-medium text-red-600 dark:text-red-400 mb-1">
                  Weak Skills:
                </p>
                <div className="flex flex-wrap gap-2">
                  {(resume.weakSkills || []).map((skill, i) => (
                    <span
                      key={i}
                      className="bg-red-100 dark:bg-red-200/30 text-red-700 dark:text-red-400 px-3 py-1 rounded-full text-xs"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Actions */}
      {resumes.length > 0 && (
        <div className="flex flex-wrap gap-4 justify-center mt-8">
          <Button
            variant="outline"
            className="px-6 py-3 text-red-600 border-red-200 hover:bg-red-50 dark:hover:bg-red-900/30 dark:text-red-400"
            onClick={discardAll}
          >
            Discard All
          </Button>
          <Button className="px-6 py-3 bg-blue-900 hover:bg-blue-600 text-white dark:bg-indigo-800 dark:hover:bg-indigo-700 flex items-center gap-2 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105">
            <a href="/leaderboard">Go to leaderboard</a>{" "}
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      )}
    </section>
  );
}
