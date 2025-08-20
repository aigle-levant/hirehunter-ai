import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useState, useEffect } from "react";
import { X, Plus, ArrowRight, RotateCcw, Loader2 } from "lucide-react";
import { useResumes } from "@/store/Context";
import { Link } from "react-router-dom";

import { jobs } from "@/data/jobs";
import { keywords as jobKeywords } from "@/data/keywords";

export default function JDInput() {
  const [jobDescriptions, setJobDescriptions] = useState([""]);
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);

  const { keywords, setKeywords } = useResumes();

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
    const jobKey = jobKeywords.find((k) => k.title === title);

    if (job && jobKey) {
      setJobDescriptions([...jobDescriptions, job.description]);
      setKeywords([...keywords, { jd: job.title, keywords: jobKey.keywords }]);
    }
  };

  const handleProceed = () => {
    setLoading(true);
    setProgress(0);

    let interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(interval);

          // After animation ends, compute keywords
          const res = jobDescriptions.map((jd) => {
            const match = jobs.find((j) => jd.includes(j.title));
            const jobKey = match
              ? jobKeywords.find((k) => k.title === match.title)
              : null;

            return jobKey
              ? { jd: match.title, keywords: jobKey.keywords }
              : { jd, keywords: ["sample", "keywords"] };
          });

          setKeywords(res);
          setLoading(false);
        }
        return p + 10;
      });
    }, 200); // 2s total (200ms * 10 steps)
  };

  const handleReset = () => {
    setJobDescriptions([""]);
    setKeywords([]);
    setProgress(0);
    setLoading(false);
  };

  return (
    <section className="flex flex-col items-center gap-16 py-20 px-8 max-w-4xl mx-auto">
      {/* Header */}
      <div className="text-left space-y-3 w-full">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100">
          Parse JDs
        </h2>

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
          {loading ? (
            <>
              <Loader2 className="w-4 h-4 mr-2 animate-spin" /> Analyzing...
            </>
          ) : (
            <>
              Proceed <ArrowRight className="w-4 h-4 ml-2" />
            </>
          )}
        </Button>
      </div>

      {/* Progress bar */}
      {loading && (
        <div className="w-full max-w-md bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
          <div
            className="bg-primary h-3 transition-all duration-200"
            style={{ width: `${progress}%` }}
          />
        </div>
      )}

      {/* Extracted keywords */}
      {keywords.length > 0 && !loading && (
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

          <div className="mt-6 flex gap-10 justify-center">
            <Button variant="destructive" onClick={handleReset}>
              <RotateCcw className="w-4 h-4 mr-2" /> Reset
            </Button>
            <Link to="/scan">
              <Button>Go to Resumes</Button>
            </Link>
          </div>
        </div>
      )}
    </section>
  );
}
