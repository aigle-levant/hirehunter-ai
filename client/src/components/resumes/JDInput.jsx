import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { X, Plus, AlertTriangle, ArrowRight } from "lucide-react";
import { jobs } from "../../pages/Jobs";
import { useResumes } from "@/store/Context";
import { Link } from "react-router-dom";

const jobKeywords = [
  {
    title: "SDE-2",
    keywords: [
      "JavaScript",
      "Python",
      "Java",
      "RESTful APIs",
      "MySQL",
      "MongoDB",
    ],
  },
  {
    title: "Web Developer",
    keywords: [
      "Web Developer",
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Angular",
      "Vue",
      "UI/UX",
      "Responsive Design",
      "Version Control",
      "Git",
      "Node.js",
      "PHP",
    ],
  },
  {
    title: "Senior HR",
    keywords: [
      "Human Resources",
      "Talent Acquisition",
      "Employee Engagement",
      "Recruitment",
      "Onboarding",
      "HR Policies",
      "Labor Laws",
      "Employee Relations",
      "Performance Evaluation",
      "Leadership",
      "Communication",
    ],
  },
  {
    title: "Netadmin",
    keywords: [
      "Network Administrator",
      "Network Security",
      "TCP/IP",
      "DNS",
      "Routers",
      "Switches",
      "Firewalls",
      "Troubleshooting",
      "Cisco",
      "CCNA",
    ],
  },
  {
    title: "Sales Intern",
    keywords: [
      "Sales",
      "Client Outreach",
      "Lead Generation",
      "Prospecting",
      "Sales Presentations",
      "Reports",
      "CRM",
      "Salesforce",
      "Communication",
    ],
  },
];

export default function JDInput() {
  const [jobDescriptions, setJobDescriptions] = useState([""]);
  const [loading, setLoading] = useState(false);

  const { keywords, setKeywords } = useResumes(); // ✅ from store

  const handleChange = (index, value) => {
    const updated = [...jobDescriptions];
    updated[index] = value;
    setJobDescriptions(updated);
  };

  const handleAddJD = () => {
    setJobDescriptions([...jobDescriptions, ""]);
  };

  const handleRemoveJD = (index) => {
    const updated = [...jobDescriptions];
    updated.splice(index, 1);
    setJobDescriptions(updated);

    // also update keywords
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

    setKeywords(res); // ✅ store globally
    setLoading(false);
  };

  return (
    <section className="flex flex-col items-center gap-16 py-20 px-8 max-w-4xl mx-auto">
      {/* header */}
      <div className="text-left space-y-3 w-full">
        <h2 className="text-3xl font-bold text-gray-800">
          Paste Your Job Description
        </h2>
        <p className="text-lg text-gray-600">
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

      {/* textareas */}
      <div className="flex flex-col gap-6 w-full">
        {jobDescriptions.map((jd, index) => (
          <div key={index} className="relative">
            <Textarea
              value={jd}
              onChange={(e) => handleChange(index, e.target.value)}
              placeholder={`Paste Job Description ${index + 1} here...`}
              className="min-h-[180px] pr-12"
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

      {/* buttons */}
      <div className="flex gap-4 flex-wrap justify-center">
        <Button variant="outline" onClick={handleAddJD}>
          <Plus className="w-4 h-4 mr-2" /> Add another
        </Button>
        <Button onClick={handleProceed} disabled={loading}>
          {loading ? "Analyzing..." : "Proceed"}
          <ArrowRight className="w-4 h-4 ml-2" />
        </Button>
      </div>

      {/* extracted keywords */}
      {keywords.length > 0 && (
        <div className="w-full bg-muted p-6 rounded-xl">
          <h3 className="text-xl font-semibold mb-4">Extracted Keywords</h3>
          <div className="space-y-4">
            {keywords.map((item, idx) => (
              <div key={idx} className="border p-4 rounded-lg">
                <p className="font-medium mb-2">{item.jd}</p>
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

          {/* ✅ new button */}
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
