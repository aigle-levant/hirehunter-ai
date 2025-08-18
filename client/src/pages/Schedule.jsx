import { useResumes } from "../components/resumes/Context";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";

export default function Schedule() {
  const { resumes, updateResume } = useResumes();
  const candidates = resumes.filter((r) => r.selected);

  const handleDateChange = (email, date) =>
    updateResume(email, { interviewDate: date });

  const handleSubmit = () => {
    alert(`Scheduled ${candidates.length} candidates. Check console.`);
    console.log(
      candidates.map((c) => ({
        name: c.candidate,
        email: c.email,
        interviewDate: c.interviewDate,
      }))
    );
  };

  if (!candidates.length) return <p className="p-8">No candidates selected.</p>;

  return (
    <div className="p-8 max-w-4xl mx-auto space-y-4">
      {candidates.map((c) => (
        <div
          key={c.email}
          className="border p-4 rounded-lg flex flex-col md:flex-row md:items-center md:justify-between gap-4"
        >
          <div>
            <p className="font-semibold">{c.candidate}</p>
            <p className="text-sm">{c.position}</p>
          </div>
          <Calendar
            mode="single"
            selected={c.interviewDate}
            onSelect={(date) => handleDateChange(c.email, date)}
          />
          <div>
            {c.interviewDate
              ? new Date(c.interviewDate).toLocaleDateString()
              : "No date selected"}
          </div>
        </div>
      ))}
      <Button onClick={handleSubmit} className="mt-4">
        Confirm Schedule
      </Button>
    </div>
  );
}
