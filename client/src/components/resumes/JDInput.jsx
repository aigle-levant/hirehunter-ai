import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useState, useEffect } from "react";
import { X, Plus, ArrowRight, Moon, Sun } from "lucide-react";
import { jobs } from "../../pages/Jobs";
import { useResumes } from "@/store/Context";
import { Link } from "react-router-dom";

export default function JDInput() {
  const [jobDescriptions, setJobDescriptions] = useState([""]);
  const [loading, setLoading] = useState(false);
  const { keywords, setKeywords } = useResumes(); // ✅ from store

  // Dark mode state
  const [darkMode, setDarkMode] = useState(
    document.documentElement.classList.contains("dark")
  );

  useEffect(() => {
    if (darkMode) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }, [darkMode]);

  const handleChange = (index, value) => {
    const updated = [...jobDescriptions];
    updated[index] = value;
    setJobDescriptions(updated);
  };

  const handleAddJD = () => setJobDescriptions([...jobDescriptions, ""]);

  const handleRemoveJD = (index) => {
    const updated = [...jobDescriptions];
    updated.splice(index, 1);
    setJobDescriptions(updated);

    const updatedKeywords = [...keywords];
    updatedKeywords.splice(index, 1);
    setKeywords(updatedKeywords);
  };

  const handleSelectJob = (title) => {
    const job = jobs.find((j) => j.title === title);
    const jobKey = jobKeywords.find((j) => j.title === title);
    if (job && jobKey) {
      setJobDescriptions([...jobDescriptions, job.description]);
      setKeywords([...keywords, { jd: job.title, keywords: jobKey.keywords }]);
    }
  };

  const handleProceed = () => {
    setLoading(true);
    const res = jobDescriptions.map((jd) => {
      const found = jobKeywords.find((j) => jd.includes(j.title));
      return found || { jd, keywords: ["sample", "keywords"] };
    });
    setKeywords(res);
    setLoading(false);
  };

  return (
    <section className="flex flex-col items-center gap-16 py-20 px-8 max-w-4xl mx-auto">
      {/* Header */}
      <div className="text-left space-y-3 w-full">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100">
          Paste Your Job Description
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Select jobs or paste custom JDs to extract key requirements.
        </p>

        <div className="flex flex-wrap gap-3">
          {jobs.map((job) => (
            <Button
              key={job.title}
              variant="outline"
              onClick={() => handleSelectJob(job.title)}
              className="px-3 py-1 text-sm"
            >
              {job.title}
            </Button>
          ))}
        </div>
      </div>

      {/* Textareas */}
      <div className="flex flex-col gap-6 w-full">
        {jobDescriptions.map((jd, index) => (
          <div key={index} className="relative">
            <Textarea
              value={jd}
              onChange={(e) => handleChange(index, e.target.value)}
              placeholder={`Paste Job Description ${index + 1} here...`}
              className="min-h-[180px] pr-12 dark:bg-slate-700 dark:text-white"
            />
            {jobDescriptions.length > 1 && (
              <button
                type="button"
                onClick={() => handleRemoveJD(index)}
                className="absolute top-3 right-3 text-muted-foreground hover:text-foreground"
              >
                <X className="w-5 h-5" />
              </button>
            )}
          </div>
        ))}
      </div>

      {/* Buttons */}
      <div className="flex gap-4 flex-wrap justify-center">
        <Button variant="outline" onClick={handleAddJD}>
          <Plus className="w-4 h-4 mr-2" /> Add another
        </Button>
        <Button onClick={handleProceed} disabled={loading}>
          {loading ? "Analyzing..." : "Proceed"}
          <ArrowRight className="w-4 h-4 ml-2" />
        </Button>
      </div>

      {/* Extracted keywords */}
      {keywords.length > 0 && (
        <div className="w-full bg-muted p-6 rounded-xl dark:bg-slate-800">
          <h3 className="text-xl font-semibold mb-4 dark:text-gray-100">
            Extracted Keywords
          </h3>
          <div className="space-y-4">
            {keywords.map((item, idx) => (
              <div
                key={idx}
                className="border p-4 rounded-lg dark:border-gray-600"
              >
                <p className="font-medium mb-2 dark:text-gray-200">{item.jd}</p>
                <div className="flex flex-wrap gap-2">
                  {item.keywords.map((kw, i) => (
                    <span
                      key={i}
                      className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm"
                    >
                      {kw}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 flex justify-center">
            <Link to="/scan">
              <Button>Go to Resumes</Button>
            </Link>
          </div>
        </div>
      )}
    </section>
  );
}
