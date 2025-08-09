import { useState } from "react";
import Resume from "../components/parser/Resume";
import ResumeUpload from "../components/parser/ResumeUpload";
import ResumeDetails from "../components/parser/ResumeDetails";
import AIDialog from "../components/parser/AIDialog";
import { Button } from "@/components/ui/button";
import { Sticker } from "lucide-react";
import TypingText from "@/components/parser/TypingText";

export default function ResumeScanner() {
  const [isUploaded, setIsUploaded] = useState(false);
  const [isParsing, setIsParsing] = useState(false);
  const [isParsed, setIsParsed] = useState(false);
  const [showAIDialog, setShowAIDialog] = useState(false);

  const handleParse = () => {
    if (!isUploaded) return;
    setIsParsing(true);
    setIsParsed(false);
    setShowAIDialog(false);

    setTimeout(() => {
      setIsParsing(false);
      setIsParsed(true);
      setShowAIDialog(true);
      // Scroll AI dialog into view smoothly
      document
        .getElementById("ai-dialog")
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 2000);
  };

  const handleDiscard = () => {
    setIsUploaded(false);
    setIsParsed(false);
    setIsParsing(false);
    setShowAIDialog(false);
  };

  return (
    <section
      id="resume"
      className="font-body max-w-7xl mx-auto p-6 space-y-8
                 bg-white dark:bg-zinc-900 transition-colors duration-300"
    >
      <TypingText
        text="Parse Your Resume"
        speed={100}
        className="text-3xl font-sans font-semibold mb-4 ml-5 text-blue-900 dark:text-blue-400"
      />

      <div className="flex flex-col md:flex-row gap-10">
        <div className="flex-1">
          <Resume />
        </div>

        <div
          className="flex-1 flex flex-col space-y-6 rounded-xl p-6 shadow-lg
                        bg-white dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700
                        transition-colors duration-300"
        >
          <div className="flex items-center space-x-4">
            <div className="rounded-full bg-blue-900 p-4 flex-shrink-0">
              <Sticker size={40} color="#fff" strokeWidth={1.5} />
            </div>
            <p className="text-gray-700 dark:text-gray-300">
              Drop your resume in the box below, and I'll take care of the rest!
            </p>
          </div>

          <ResumeUpload onUpload={() => setIsUploaded(true)} />

          <div className="flex justify-center space-x-4 mt-4">
            <Button
              variant="outline"
              onClick={handleParse}
              disabled={!isUploaded || isParsing || isParsed}
            >
              {isParsing ? (
                <svg
                  className="animate-spin h-5 w-5 text-blue-600 mx-auto"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                  ></path>
                </svg>
              ) : (
                "Parse"
              )}
            </Button>

            <Button
              variant="outline"
              onClick={handleDiscard}
              disabled={!isUploaded && !isParsed && !isParsing}
            >
              Discard
            </Button>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        {isParsed && <ResumeDetails />}
        {showAIDialog && (
          <div
            id="ai-dialog"
            className="animate-slide-up"
            style={{ animationFillMode: "forwards" }}
          >
            <AIDialog />
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes slide-up {
          0% {
            opacity: 0;
            transform: translateY(1.5rem);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slide-up {
          animation-name: slide-up;
          animation-duration: 400ms;
          animation-timing-function: ease-out;
          animation-fill-mode: forwards;
        }
      `}</style>
    </section>
  );
}
