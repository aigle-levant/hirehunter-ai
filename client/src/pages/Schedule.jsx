import { useResumes } from "@/store/Context";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function SchedulerWithCalendly() {
  const { resumes } = useResumes();
  const candidates = resumes.filter((r) => r.selected);
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!candidates.length)
    return (
      <p className="p-8 text-gray-700 dark:text-gray-300">
        No candidates selected.
      </p>
    );

  const candidate = candidates[currentIndex];

  // Generate Calendly URL with prefilled name & email
  const calendlyUrl = `https://calendly.com/aiglelevant/30min?name=${encodeURIComponent(
    candidate.name
  )}&email=${encodeURIComponent(candidate.email)}`;

  const handleNext = () => {
    if (currentIndex < candidates.length - 1) setCurrentIndex(currentIndex + 1);
  };

  return (
    <div className="p-8 max-w-6xl mx-auto space-y-6 bg-white dark:bg-gray-900 rounded-2xl shadow-lg dark:shadow-gray-800">
      <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
        Scheduling for: {candidate.name}
      </h2>

      <iframe
        src={calendlyUrl}
        className="w-full h-[700px] border rounded-lg border-gray-200 dark:border-gray-700"
      ></iframe>

      {candidates.length > 1 && (
        <div className="flex justify-between mt-4">
          <Button
            onClick={() => setCurrentIndex((i) => Math.max(i - 1, 0))}
            disabled={currentIndex === 0}
          >
            Previous Candidate
          </Button>
          <Button
            onClick={handleNext}
            disabled={currentIndex === candidates.length - 1}
          >
            Next Candidate
          </Button>
        </div>
      )}
    </div>
  );
}
