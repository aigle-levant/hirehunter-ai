import { useState } from "react";
import { Button } from "@/components/ui/button";
import { X, ArrowRight, Upload } from "lucide-react";
import { useResumes } from "@/store/Context"; // import Zustand store

// mock candidates and positions
export const mockResumes = [
  {
    name: "Ravi Prasanna",
    email: "ravi.prasanna@example.com",
    phone: "+91-9876543210",
    position: "SDE-2",
    yoe: 3,
    hirescore: 82,
    strongSkills: ["JavaScript", "Python", "RESTful APIs", "MySQL"],
    weakSkills: ["MongoDB", "Java"],
  },
  {
    name: "Ebenesar Ramesh",
    email: "ebenesar.ramesh@example.com",
    phone: "+91-9123456780",
    position: "Web Developer",
    yoe: 2,
    hirescore: 75,
    strongSkills: ["HTML", "CSS", "React", "Responsive Design", "Git"],
    weakSkills: ["Vue", "PHP", "Node.js"],
  },
  {
    name: "Vivian D'Souza",
    email: "vivian.dsouza@example.com",
    phone: "+91-9812345678",
    position: "Sales Intern",
    yoe: 1,
    hirescore: 68,
    strongSkills: ["Client Outreach", "Lead Generation", "Communication"],
    weakSkills: ["Salesforce", "Reports"],
  },
  {
    name: "Narayan Krishnamoorthy",
    email: "narayan.krish@example.com",
    phone: "+91-9001122334",
    position: "Netadmin",
    yoe: 4,
    hirescore: 88,
    strongSkills: [
      "Network Security",
      "Routers",
      "Firewalls",
      "Troubleshooting",
    ],
    weakSkills: ["Cisco", "CCNA"],
  },
  {
    name: "Avinash Ghattopadhyay",
    email: "avinash.ghatto@example.com",
    phone: "+91-9556677889",
    position: "Web Developer",
    yoe: 2,
    hirescore: 71,
    strongSkills: ["JavaScript", "React", "UI/UX", "Responsive Design"],
    weakSkills: ["Angular", "Vue", "PHP"],
  },
  {
    name: "Samarth Pakharia",
    email: "samarth.pakharia@example.com",
    phone: "+91-9988776655",
    position: "SDE-2",
    yoe: 5,
    hirescore: 91,
    strongSkills: ["Java", "Python", "MongoDB", "RESTful APIs"],
    weakSkills: ["MySQL"],
  },
  {
    name: "Abul Fazal",
    email: "abul.fazal@example.com",
    phone: "+91-9445566778",
    position: "Sales Intern",
    yoe: 1,
    hirescore: 63,
    strongSkills: ["Sales", "Communication", "Prospecting"],
    weakSkills: ["CRM", "Salesforce"],
  },
  {
    name: "Sanyam Gupta",
    email: "sanyam.gupta@example.com",
    phone: "+91-9665544332",
    position: "Netadmin",
    yoe: 3,
    hirescore: 79,
    strongSkills: ["DNS", "TCP/IP", "Switches", "Troubleshooting"],
    weakSkills: ["Cisco", "CCNA"],
  },
];

export default function Resumes() {
  const { resumes, addResumes, removeResume, discardAll, updateResume } =
    useResumes();

  // ✅ When files are uploaded, randomly assign them to a mockResume
  const handleUpload = (e) => {
    const files = Array.from(e.target.files).map((file) => {
      const candidate =
        mockResumes[Math.floor(Math.random() * mockResumes.length)];

      return {
        id: Date.now() + Math.random(),
        ...candidate, // use full candidate details
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
    <section
      id="resumes"
      className="container bg-white dark:bg-gray-900 rounded-2xl mx-auto p-6 space-y-8"
    >
      <h1 className="text-4xl font-extrabold text-gray-900 text-center">
        Upload resumes
      </h1>
      <p className="text-center text-gray-600">
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
        <span className="text-gray-500">
          {resumes.length} candidate{resumes.length !== 1 && "s"} uploaded
        </span>
      </div>

      {/* Resume / Candidate Cards */}
      {resumes.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {resumes.map((resume) => (
            <div
              key={resume.id}
              className="bg-white p-5 rounded-2xl shadow-xl relative hover:scale-105 transition-transform duration-300"
            >
              <div className="flex justify-between items-center mb-3">
                <p className="font-bold text-gray-900">{resume.name}</p>
                <button
                  onClick={() => handleRemove(resume.email)}
                  className="text-gray-400 hover:text-red-500"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <p className="text-sm text-gray-500 mb-2">
                Position: {resume.position}
              </p>

              <p className="text-2xl font-extrabold text-indigo-600 mb-2">
                {resume.hirescore}{" "}
                <span className="text-gray-400 text-base">HireScore</span>
              </p>

              <span
                className={`text-xs px-2 py-1 rounded-full ${
                  resume.status === "Analyzing..."
                    ? "bg-yellow-100 text-yellow-700"
                    : "bg-green-100 text-green-700"
                }`}
              >
                {resume.status}
              </span>

              {/* Strong Skills */}
              <div className="mt-3">
                <p className="text-sm font-medium text-green-700 mb-1">
                  Strong Skills:
                </p>
                <div className="flex flex-wrap gap-2">
                  {(resume.strongSkills || []).map((skill, i) => (
                    <span
                      key={i}
                      className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Weak Skills */}
              <div className="mt-2">
                <p className="text-sm font-medium text-red-600 mb-1">
                  Weak Skills:
                </p>
                <div className="flex flex-wrap gap-2">
                  {(resume.weakSkills || []).map((skill, i) => (
                    <span
                      key={i}
                      className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-xs"
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
            className="px-6 py-3 text-red-600 border-red-200 hover:bg-red-50"
            onClick={discardAll}
          >
            Discard All
          </Button>
          <Button className="px-6 py-3 bg-blue-900 hover:bg-blue-600 text-white flex items-center gap-2 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105">
            <a href="/leaderboard">Go to leaderboard</a>{" "}
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      )}
    </section>
  );
}
