import { useState } from "react";
import { Button } from "@/components/ui/button";
import { X, ArrowRight, Upload } from "lucide-react";
import { NavLink } from "react-router-dom";
import { useResumes } from "../components/resumes/Context";

const mockCandidates = [
  "Ravi Prasanna",
  "Ebenesar Ramesh",
  "Vivian D'Souza",
  "Narayan Krishnamoorthy",
];
const mockPositions = ["SDE-2", "Web Developer", "Sales Intern", "Netadmin"];
const allSkills = [
  "React",
  "Node.js",
  "SQL",
  "C++",
  "Angular",
  "Leadership",
  "Communication",
];

export default function Resumes() {
  const { resumes, addResumes, removeResume, discardAll, toggleSelect } =
    useResumes();
  const [filterPosition, setFilterPosition] = useState("");
  const [filterSkill, setFilterSkill] = useState("");
  const [sortField, setSortField] = useState("hirescore");
  const [sortAsc, setSortAsc] = useState(false);

  const handleUpload = (e) => {
    const files = Array.from(e.target.files).map((file) => {
      const yoe = Math.floor(Math.random() * 10);
      const hirescore = Math.floor(Math.random() * 100) + 1;
      const shuffledSkills = [...allSkills].sort(() => 0.5 - Math.random());
      return {
        name: file.name,
        candidate:
          mockCandidates[Math.floor(Math.random() * mockCandidates.length)],
        position:
          mockPositions[Math.floor(Math.random() * mockPositions.length)],
        hirescore,
        yoe,
        status: "Analyzing...",
        highlightedSkills: shuffledSkills.slice(0, 3),
        weakSkills: shuffledSkills.slice(3, 6),
        email: file.name.replace(/\s/g, "").toLowerCase() + "@mail.com",
        selected: false,
      };
    });
    addResumes(files);

    setTimeout(() => {
      files.forEach((r) => (r.status = "HireScore ready!"));
      addResumes([]); // trigger update
    }, 1500 + Math.random() * 1500);
  };

  const filteredResumes = resumes
    .filter((r) => !filterPosition || r.position === filterPosition)
    .filter((r) => !filterSkill || r.highlightedSkills.includes(filterSkill))
    .sort((a, b) => {
      const valA = sortField === "hirescore" ? a.hirescore : a.yoe;
      const valB = sortField === "hirescore" ? b.hirescore : b.yoe;
      return sortAsc ? valA - valB : valB - valA;
    });

  return (
    <section className="container mx-auto p-6 space-y-8">
      <h1 className="text-4xl font-bold text-center">
        Upload & See Candidates
      </h1>

      {/* Upload + Filters */}
      <div className="flex flex-wrap gap-4 justify-center items-center my-4">
        <label className="cursor-pointer flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition shadow-lg">
          <Upload className="w-5 h-5" /> Upload Resumes
          <input
            type="file"
            multiple
            onChange={handleUpload}
            className="hidden"
          />
        </label>
        <span>
          {resumes.length} candidate{resumes.length !== 1 && "s"} uploaded
        </span>

        <select
          value={filterPosition}
          onChange={(e) => setFilterPosition(e.target.value)}
          className="border rounded px-3 py-2"
        >
          <option value="">All Positions</option>
          {mockPositions.map((p) => (
            <option key={p} value={p}>
              {p}
            </option>
          ))}
        </select>

        <select
          value={filterSkill}
          onChange={(e) => setFilterSkill(e.target.value)}
          className="border rounded px-3 py-2"
        >
          <option value="">All Skills</option>
          {allSkills.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>

        <select
          value={sortField}
          onChange={(e) => setSortField(e.target.value)}
          className="border rounded px-3 py-2"
        >
          <option value="hirescore">Sort by HireScore</option>
          <option value="yoe">Sort by YoE</option>
        </select>
        <Button onClick={() => setSortAsc(!sortAsc)}>
          {sortAsc ? "Asc" : "Desc"}
        </Button>
      </div>

      {/* Candidate Cards */}
      {filteredResumes.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {filteredResumes.map((r) => (
            <div
              key={r.email}
              className="bg-white p-5 rounded-2xl shadow hover:scale-105 transition"
            >
              <div className="flex justify-between items-center mb-2">
                <p className="font-bold">{r.candidate}</p>
                <button
                  onClick={() => removeResume(resumes.indexOf(r))}
                  className="text-gray-400 hover:text-red-500"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <p className="text-sm text-gray-500 mb-1">{r.position}</p>
              <p className="text-indigo-600 text-2xl font-bold mb-1">
                {r.hirescore}{" "}
                <span className="text-gray-400 text-base">HireScore</span>
              </p>
              <p className="text-sm text-gray-500 mb-2">YoE: {r.yoe}</p>
              <span
                className={`text-xs px-2 py-1 rounded-full ${
                  r.status === "Analyzing..."
                    ? "bg-yellow-100 text-yellow-700"
                    : "bg-green-100 text-green-700"
                }`}
              >
                {r.status}
              </span>

              {/* Skills */}
              <div className="mt-3">
                <p className="text-sm font-medium text-green-700 mb-1">
                  Highlighted Skills:
                </p>
                <div className="flex flex-wrap gap-2">
                  {r.highlightedSkills.map((s, i) => (
                    <span
                      key={i}
                      className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
              <div className="mt-2">
                <p className="text-sm font-medium text-red-600 mb-1">
                  Weak Skills:
                </p>
                <div className="flex flex-wrap gap-2">
                  {r.weakSkills.map((s, i) => (
                    <span
                      key={i}
                      className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-xs"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-2 mt-3">
                <Button
                  onClick={() => toggleSelect(r.email)}
                  className={
                    r.selected ? "bg-green-600 text-white" : "bg-gray-200"
                  }
                >
                  {r.selected ? "Selected" : "Select"}
                </Button>
                <NavLink to="/schedule">
                  <Button className="bg-indigo-600 text-white">
                    Go to Schedule
                  </Button>
                </NavLink>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Actions */}
      {resumes.length > 0 && (
        <div className="flex justify-center gap-4 mt-8">
          <Button variant="outline" onClick={discardAll}>
            Discard All
          </Button>
        </div>
      )}
    </section>
  );
}
