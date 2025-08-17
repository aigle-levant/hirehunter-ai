import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { X, Plus, AlertTriangle, ArrowRight } from "lucide-react";

export default function JDInput() {
  const [jobDescription, setJobDescription] = useState("");
  const [keywords, setKeywords] = useState([
    "React",
    "JavaScript",
    "Node.js",
    "TypeScript",
    "AWS",
    "Docker",
  ]);

  const removeKeyword = (index) => {
    setKeywords(keywords.filter((_, i) => i !== index));
  };

  return (
    <section
      id="jd-input"
      className="flex flex-col items-center gap-16 py-20 px-8 max-w-4xl mx-auto"
    >
      {/* this is the upper part */}
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
      <style jsx>{`
        .animate-spin-slow {
          animation: spin 6s linear infinite;
        }
      `}</style>
      {/* this the input */}
      <div className="w-full space-y-4">
        <label
          htmlFor="job-description"
          className="text-lg font-semibold text-gray-700"
        >
          Job Description
        </label>
        <Textarea
          id="job-description"
          value={jobDescription}
          onChange={(e) => setJobDescription(e.target.value)}
          placeholder="Paste the complete job description here... Include requirements, responsibilities, qualifications, and any other relevant details."
          className="h-64 p-6 text-gray-700 placeholder-gray-400 resize-none"
        />
      </div>
      {/* this is the button container */}
      <div className="flex flex-row gap-6">
        <Button
          variant="outline"
          className="group px-6 py-3 text-lg border-2 border-gray-300 hover:border-blue-400 transition-all duration-300 hover:bg-blue-50"
        >
          <Plus className="w-5 h-5 mr-2 rounded-xl text-gray-500 group-hover:rotate-90 group-hover:text-blue-500 transition-all duration-300" />
          <span className="group-hover:text-blue-600 transition-colors duration-300">
            Add Another
          </span>
        </Button>

        <Button
          className="group relative px-8 py-3 text-lg bg-white border-2 border-transparent hover:bg-blue-600 bg-clip-padding shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 overflow-hidden rounded-xl"
          style={{
            background:
              "linear-gradient(white, white) padding-box, linear-gradient(to right, #2563eb, #4f46e5) border-box",
          }}
        >
          <span className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-indigo-600/10 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700 ease-in-out" />
          <span className="relative text-gray-800 group-hover:text-blue-700 transition-colors duration-300">
            Proceed
          </span>
        </Button>
      </div>
      {/* this is for keywords */}
      <div className="w-full space-y-6">
        <div className="text-center">
          <h3 className="text-2xl font-semibold text-gray-800 mb-2">
            Keywords Found
          </h3>
          <p className="text-gray-600">Look what I found!</p>
        </div>

        <div className="flex flex-wrap gap-4 justify-center">
          {keywords.map((keyword, index) => {
            const colors = [
              "bg-blue-500 text-white",
              "bg-purple-500 text-white",
              "bg-green-500 text-white",
              "bg-orange-500 text-white",
              "bg-indigo-500 text-white",
              "bg-teal-500 text-white",
            ];
            const colorClass = colors[index % colors.length];

            return (
              <div
                key={index}
                className={`group flex items-center px-5 py-3 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg cursor-pointer ${colorClass} animate-float-keyword`}
                style={{
                  animationDelay: `${index * 0.3}s`,
                  animationDuration: `${3 + (index % 3)}s`,
                }}
              >
                <span className="font-semibold text-sm tracking-wide mr-3">
                  {keyword}
                </span>
                <button
                  onClick={() => removeKeyword(index)}
                  className="w-6 h-6 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-all duration-200 hover:scale-110 hover:rotate-90"
                >
                  <X className="w-3 h-3 text-white" />
                </button>
              </div>
            );
          })}
        </div>
      </div>
      {/* this is for confirmation */}
      <div className="text-center space-y-6 p-8 bg-gray-50 rounded-2xl border-2 border-gray-100">
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
    </section>
  );
}
