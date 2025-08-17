import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { X, Plus, AlertTriangle, ArrowRight } from "lucide-react";
import { mockJDs } from "../../services/data";

export default function JDInput() {
  const [jobDescriptions, setJobDescriptions] = useState([""]);
  const [keywords, setKeywords] = useState([]);
  const [loading, setLoading] = useState(false);

  // handle textarea change
  const handleChange = (index, value) => {
    const updated = [...jobDescriptions];
    updated[index] = value;
    setJobDescriptions(updated);
  };

  // add another textarea
  const handleAddJD = () => {
    setJobDescriptions([...jobDescriptions, ""]);
  };

  // remove textarea
  const handleRemoveJD = (index) => {
    const updated = [...jobDescriptions];
    updated.splice(index, 1);
    setJobDescriptions(updated);
  };

  // use mock data instead of backend
  const handleProceed = async () => {
    setLoading(true);

    const res = jobDescriptions.map((jd) => {
      const found = mockJDs.find((m) =>
        jd.toLowerCase().includes(m.jd.toLowerCase())
      );
      return found || { jd, keywords: ["sample", "keywords"] };
    });

    setKeywords(res);
    setLoading(false);
  };

  return (
    <section
      id="jd-input"
      className="flex flex-col items-center gap-16 py-20 px-8 max-w-4xl mx-auto"
    >
      {/* upper part */}
      <div className="text-left space-y-3 w-full">
        <h2 className="text-3xl font-bold text-gray-800">
          Paste Your Job Description
        </h2>
        <p className="text-lg text-gray-600">
          I'll analyze it and extract the key requirements for you.
        </p>
        <div className="flex items-center gap-3 bg-white/70 backdrop-blur-sm px-4 py-2 rounded-full border-2 border-blue-200 shadow-md w-fit">
          <div className="flex items-center justify-center gap-2 bg-gradient-to-r from-blue-50 via-white to-blue-50 backdrop-blur-md px-4 py-2 rounded-full border border-blue-200/60 shadow-sm">
            <div className="relative">
              <div className="h-2.5 w-2.5 bg-blue-500 rounded-full animate-pulse"></div>
              <div className="absolute inset-0 h-2.5 w-2.5 rounded-full border-2 border-blue-400 animate-[ping_1.5s_linear_infinite]"></div>
            </div>
          </div>
          <span className="text-transparent bg-clip-text bg-blue-600 font-bold tracking-wide text-sm">
            AI Brain at Work
          </span>
        </div>
      </div>

      {/* input textareas */}
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

      {/* button container */}
      <div className="flex gap-4 flex-wrap justify-center">
        <Button variant="outline" onClick={handleAddJD}>
          <Plus className="w-4 h-4 mr-2" />
          Add another
        </Button>
        <Button onClick={handleProceed} disabled={loading}>
          {loading ? "Analyzing..." : "Proceed"}
          <ArrowRight className="w-4 h-4 ml-2" />
        </Button>
      </div>

      {/* grouped keywords per JD */}
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
        </div>
      )}

      {/* confirmation */}
      {keywords.length > 0 && (
        <div className="text-center space-y-6 p-8 bg-gray-50 rounded-2xl border-2 border-gray-100 w-full">
          <div className="space-y-3">
            <div className="flex items-center justify-center gap-2">
              <h3 className="text-2xl font-semibold text-gray-800">
                Ready to Proceed?
              </h3>
            </div>
            <p className="text-gray-600 text-lg">
              Let's proceed to parsing resumes, shall we?
            </p>
          </div>

          <div className="flex flex-row gap-4 justify-center">
            <Button
              variant="outline"
              className="px-6 py-3 text-lg border-red-200 text-red-600 hover:bg-red-50 hover:border-red-300 transition-all duration-200"
              onClick={() => {
                setJobDescriptions([""]);
                setKeywords([]);
              }}
            >
              <AlertTriangle className="w-5 h-5 mr-2" />
              Discard
            </Button>
            <Button className="px-8 py-3 bg-green-600 hover:bg-green-700 text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              Proceed
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      )}
    </section>
  );
}
