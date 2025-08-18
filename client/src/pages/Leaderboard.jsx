import { useState } from "react";
import { ArrowUp, ArrowDown } from "lucide-react";
import { useResumes } from "../components/resumes/Context";

export default function Leaderboard() {
  const { resumes } = useResumes();
  const [sortField, setSortField] = useState("hirescore"); // "hirescore" or "yoe"
  const [sortAsc, setSortAsc] = useState(false);

  const sortedResumes = [...resumes].sort((a, b) => {
    const valA = sortField === "hirescore" ? a.hirescore : a.yoe;
    const valB = sortField === "hirescore" ? b.hirescore : b.yoe;
    return sortAsc ? valA - valB : valB - valA;
  });

  return (
    <div className="container mx-auto p-6 space-y-6">
      <h1 className="text-3xl font-bold text-center">Candidate Leaderboard</h1>

      {/* Sorting Controls */}
      <div className="flex justify-center gap-4 flex-wrap my-4">
        <select
          value={sortField}
          onChange={(e) => setSortField(e.target.value)}
          className="border rounded px-3 py-2"
        >
          <option value="hirescore">Sort by HireScore</option>
          <option value="yoe">Sort by YoE</option>
        </select>

        <button
          onClick={() => setSortAsc(!sortAsc)}
          className="px-4 py-2 border rounded"
        >
          {sortAsc ? (
            <ArrowUp className="inline w-4 h-4" />
          ) : (
            <ArrowDown className="inline w-4 h-4" />
          )}
        </button>
      </div>

      {/* Leaderboard Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sortedResumes.map((r, idx) => (
          <div
            key={r.email}
            className="bg-white p-5 rounded-2xl shadow hover:scale-105 transition"
          >
            <div className="flex justify-between items-center mb-2">
              <p className="font-bold">{r.candidate}</p>
              <span className="text-gray-500 text-sm">#{idx + 1}</span>
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

            {r.interviewDate && (
              <p className="mt-2 text-sm text-gray-600">
                Interview: {new Date(r.interviewDate).toLocaleDateString()}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
