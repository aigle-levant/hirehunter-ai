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

    // Filter out duplicates based on email
    const uniqueFiles = files.filter(
      (file) => !resumes.some((r) => r.email === file.email)
    );

    if (uniqueFiles.length < files.length) {
      alert("Some duplicates were ignored!");
    }

    addResumes(uniqueFiles);

    // simulate async analysis
    setTimeout(() => {
      uniqueFiles.forEach((resume) => {
        updateResume(resume.email, { status: "HireScore ready!" });
      });
    }, 2000 + Math.random() * 2000);
  };

  const handleRemove = (email) => {
    removeResume(email);
  };

  return (
    <section className="container bg-background rounded-2xl mx-auto p-6 space-y-8">
      <h1 className="text-4xl font-basier-circle font-bold text-foreground text-center">
        Upload resumes
      </h1>
      <p className="text-center font-body text-muted-foreground">
        The secret HireScore will reveal the top talents automatically…
      </p>

      {/* Upload Section */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-4">
        <label className="cursor-pointer flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-xl hover:bg-primary/90 transition shadow-lg">
          <Upload className="w-5 h-5 " /> Upload Resumes
          <input
            type="file"
            multiple
            onChange={handleUpload}
            className="hidden font-body"
          />
        </label>
        <span className="text-muted-foreground font-body">
          {resumes.length} candidate{resumes.length !== 1 && "s"} uploaded
        </span>
      </div>

      {/* Resume / Candidate Cards */}
      {resumes.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {resumes.map((resume) => (
            <div
              key={resume.id}
              className="font-body bg-card text-card-foreground p-5 rounded-2xl shadow-xl relative hover:scale-105 transition-transform duration-300"
            >
              <div className="flex justify-between items-center mb-3">
                <p className="font-basier-circle font-bold">{resume.name}</p>
                <button
                  onClick={() => handleRemove(resume.email)}
                  className="text-muted-foreground hover:text-destructive"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <p className="text-sm text-muted-foreground mb-2">
                Position: {resume.position}
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
                <p className="text-sm font-bold font-basier-circle text-green-700 dark:text-green-400 mb-1">
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
                <p className="text-sm font-medium font-basier-circle text-red-600 dark:text-red-400 mb-1">
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
            className="px-6 py-3 text-destructive border-destructive/30 hover:bg-destructive/10"
            onClick={discardAll}
          >
            Discard All
          </Button>
          <Button className="px-6 py-3 flex items-center font-body gap-2 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105">
            <a href="/leaderboard">Go to leaderboard</a>{" "}
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      )}
    </section>
  );
}
