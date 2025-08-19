import { useState } from "react";
import { Crown, Search, ArrowUpDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useResumes } from "@/store/Context";

// shadcn/ui
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";

export default function Leaderboard() {
  const resumes = useResumes((state) => state.resumes);

  const [sortField, setSortField] = useState("hirescore"); // hirescore | yoe
  const [sortAsc, setSortAsc] = useState(false);
  const [showAll, setShowAll] = useState(false);
  const [selected, setSelected] = useState([]);
  const [skillFilter, setSkillFilter] = useState("");
  const [search, setSearch] = useState("");

  const toggleSelect = (email) => {
    setSelected((prev) =>
      prev.includes(email)
        ? prev.filter((id) => id !== email)
        : [...prev, email]
    );
  };

  // Filtering
  let filteredResumes = resumes.filter((r) => {
    const matchesSearch =
      r.name.toLowerCase().includes(search.toLowerCase()) ||
      r.position.toLowerCase().includes(search.toLowerCase());

    const matchesSkill = skillFilter
      ? r.strongSkills?.some((s) =>
          s.toLowerCase().includes(skillFilter.toLowerCase())
        ) ||
        r.weakSkills?.some((s) =>
          s.toLowerCase().includes(skillFilter.toLowerCase())
        )
      : true;

    return matchesSearch && matchesSkill;
  });

  // Sorting
  const sortedResumes = [...filteredResumes].sort((a, b) => {
    const valA = sortField === "hirescore" ? a.hirescore : a.yoe;
    const valB = sortField === "hirescore" ? b.hirescore : b.yoe;
    return sortAsc ? valA - valB : valB - valA;
  });

  const displayResumes = showAll ? sortedResumes : sortedResumes.slice(0, 5);
  const rankColors = ["text-yellow-500", "text-gray-400", "text-amber-600"];

  return (
    <Card className="w-full max-w-4xl mx-auto p-6">
      <CardHeader>
        <CardTitle className="text-3xl text-center">Leaderboard</CardTitle>
      </CardHeader>
      <CardContent>
        {/* Controls */}
        <div className="flex flex-wrap gap-4 justify-center mb-6">
          {/* Search */}
          <div className="relative w-60">
            <Search className="absolute left-2 top-3 h-4 w-4 text-gray-400" />
            <Input
              type="text"
              placeholder="Search by name or position"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-8"
            />
          </div>

          {/* Skill Filter */}
          <Input
            type="text"
            placeholder="Filter by skill (e.g. React)"
            value={skillFilter}
            onChange={(e) => setSkillFilter(e.target.value)}
            className="w-52"
          />

          {/* Sort Field */}
          <Select value={sortField} onValueChange={(val) => setSortField(val)}>
            <SelectTrigger className="w-44">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="hirescore">HireScore</SelectItem>
              <SelectItem value="yoe">Years of Experience</SelectItem>
            </SelectContent>
          </Select>

          {/* Toggle Asc/Desc */}
          <Button
            variant="outline"
            onClick={() => setSortAsc(!sortAsc)}
            className="flex items-center gap-2"
          >
            <ArrowUpDown className="w-4 h-4" />
            {sortAsc ? "Ascending" : "Descending"}
          </Button>
          {selected.length > 0 ? (
            <Button
              variant="outline"
              onClick={() => console.log("Schedule interviews")}
              className="flex items-center gap-2"
            >
              <a href="/schedule">Schedule an interview</a>
            </Button>
          ) : (
            <Button
              variant="outline"
              disabled
              className="flex items-center gap-2"
            >
              Select some candidates
            </Button>
          )}
        </div>

        {/* Leaderboard */}
        <div className="bg-white dark:bg-gray-900 shadow rounded-xl divide-y">
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
                <div className="flex items-center gap-3 w-1/3">
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

                {/* Selection */}
                <Checkbox
                  checked={selected.includes(r.email)}
                  onCheckedChange={() => toggleSelect(r.email)}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Show More */}
        {sortedResumes.length > 5 && (
          <div className="flex justify-center">
            <Button
              variant="link"
              onClick={() => setShowAll(!showAll)}
              className="mt-3"
            >
              {showAll ? "Show Less" : "Show All"}
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
