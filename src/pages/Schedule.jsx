import * as React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Schedule() {
  const location = useLocation();
  const navigate = useNavigate();

  const candidates = location.state?.candidates ?? [];

  const [interviewDates, setInterviewDates] = React.useState(() =>
    candidates.reduce((acc, c) => {
      acc[c.email] = null;
      return acc;
    }, {})
  );

  function onDateChange(email, date) {
    setInterviewDates((prev) => ({ ...prev, [email]: date }));
  }

  function handleSubmit() {
    const scheduled = candidates
      .map((c) => ({
        ...c,
        interviewDate: interviewDates[c.email],
      }))
      .filter((c) => c.interviewDate);

    console.log("Scheduled interviews:", scheduled);

    alert(
      `Scheduled ${scheduled.length} candidates. Check console for details.`
    );

    navigate("/");
  }

  if (!candidates.length) {
    return (
      <div className="p-8 text-center dark:bg-gray-900 dark:text-gray-300 min-h-screen flex flex-col justify-center items-center">
        <p>No candidates received. Please select candidates first.</p>
        <Button onClick={() => navigate(-1)} className="mt-4">
          Go Back
        </Button>
      </div>
    );
  }

  return (
    <div className="p-8 max-w-4xl mx-auto dark:bg-gray-900 min-h-screen">
      <h1 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-gray-100">
        Interview Scheduler
      </h1>

      <div className="space-y-8">
        {candidates.map((candidate) => (
          <div
            key={candidate.email}
            className="
              border rounded-lg p-6 shadow-sm bg-white
              flex flex-col md:flex-row md:items-center md:justify-between gap-6
              transition-transform duration-300 ease-in-out
              hover:shadow-lg hover:scale-[1.02]
              dark:bg-gray-800 dark:border-gray-700 dark:hover:shadow-lg
            "
          >
            <div className="flex-1 min-w-0">
              <p className="font-semibold text-lg truncate text-gray-900 dark:text-gray-100">
                {candidate.name}
              </p>
              <p className="text-sm text-muted-foreground truncate dark:text-gray-400">
                {candidate.email}
              </p>
              <p className="text-sm mt-1 text-gray-700 truncate dark:text-gray-300">
                {candidate.skills}
              </p>
            </div>

            <div className="flex flex-col md:flex-row md:items-center gap-4">
              <label className="block font-semibold whitespace-nowrap text-gray-900 dark:text-gray-100">
                Pick Interview Date:
              </label>
              <Calendar
                mode="single"
                selected={interviewDates[candidate.email]}
                onSelect={(date) => onDateChange(candidate.email, date)}
                className="max-w-[280px]"
              />
            </div>

            <div className="mt-2 md:mt-0 md:ml-6 text-sm text-muted-foreground whitespace-nowrap min-w-[140px] text-center md:text-left dark:text-gray-400">
              {interviewDates[candidate.email]
                ? new Date(interviewDates[candidate.email]).toLocaleDateString()
                : "No date selected"}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 flex justify-end gap-4">
        <Button variant="outline" onClick={() => navigate(-1)}>
          Back
        </Button>
        <Button
          onClick={handleSubmit}
          disabled={!Object.values(interviewDates).some(Boolean)}
        >
          Confirm Schedule
        </Button>
      </div>
    </div>
  );
}
