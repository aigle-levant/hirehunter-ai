import { useState } from "react";
import { ArrowUp, ArrowDown, Crown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useResumes } from "@/store/Context";

export default function Leaderboard() {
  const resumes = useResumes((state) => state.resumes);
  const [sortField, setSortField] = useState("hirescore"); // hirescore | yoe
  const [sortAsc, setSortAsc] = useState(false);
  const [showAll, setShowAll] = useState(false);

  const sortedResumes = [...resumes].sort((a, b) => {
    const valA = sortField === "hirescore" ? a.hirescore : a.yoe;
    const valB = sortField === "hirescore" ? b.hirescore : b.yoe;
    return sortAsc ? valA - valB : valB - valA;
  });

  const displayResumes = showAll ? sortedResumes : sortedResumes.slice(0, 5);

  const rankColors = ["text-yellow-500", "text-gray-400", "text-amber-600"];

  return (
    <div className="container mx-auto p-6 space-y-6 bg-white dark:bg-gray-900 rounded-2xl">
      <h1 className="text-3xl font-bold text-center">Candidate Leaderboard</h1>

      {/* Controls */}
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

      {/* Leaderboard Rows */}
      <div className="bg-white shadow rounded-xl divide-y">
        <AnimatePresence>
          {displayResumes.map((r, idx) => (
            <motion.div
              key={r.email}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="flex items-center justify-between p-4"
            >
              {/* Rank + Medal */}
              <div className="flex items-center gap-3 w-1/4">
                <span className="font-bold text-lg">#{idx + 1}</span>
                {idx < 3 && (
                  <Crown
                    className={`w-5 h-5 ${rankColors[idx]}`}
                    strokeWidth={2}
                  />
                )}
                <div>
                  <p className="font-medium">{r.name}</p>
                  <p className="text-xs text-gray-500">{r.position}</p>
                </div>
              </div>

              {/* HireScore */}
              <p className="w-1/5 text-indigo-600 font-bold">{r.hirescore}</p>

              {/* YoE */}
              <p className="w-1/5 text-gray-600">YoE: {r.yoe}</p>

              {/* Status */}
              <span
                className={`text-xs px-2 py-1 rounded-full ${
                  r.status === "Analyzing..."
                    ? "bg-yellow-100 text-yellow-700"
                    : "bg-green-100 text-green-700"
                }`}
              >
                {r.status}
              </span>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Show More */}
      {sortedResumes.length > 5 && (
        <div className="flex justify-center">
          <button
            onClick={() => setShowAll(!showAll)}
            className="mt-3 text-indigo-600 hover:underline"
          >
            {showAll ? "Show Less" : "Show All"}
          </button>
        </div>
      )}
    </div>
  );
}
