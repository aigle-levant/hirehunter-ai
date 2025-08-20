import React, { useState, useEffect } from "react";
import { ArrowUp, Trophy, FileText, Calendar } from "lucide-react";
import { Link } from "react-router-dom";

export default function HeroInput() {
  const examples = [
    "Rank candidates for the web developer role.",
    "Parse this JD and extract keywords.",
    "Schedule interviews for shortlisted candidates.",
    "Send rejection mail to candidates.",
  ];

  const [displayText, setDisplayText] = useState("");
  const [exampleIndex, setExampleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  // Typewriter effect
  useEffect(() => {
    const currentExample = examples[exampleIndex];
    let typingSpeed = isDeleting ? 20 : 30;

    const handleTyping = () => {
      if (!isDeleting && charIndex < currentExample.length) {
        setDisplayText(currentExample.substring(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);
      } else if (isDeleting && charIndex > 0) {
        setDisplayText(currentExample.substring(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);
      } else if (!isDeleting && charIndex === currentExample.length) {
        setTimeout(() => setIsDeleting(true), 1000); // pause before delete
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setExampleIndex((prev) => (prev + 1) % examples.length);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, exampleIndex, examples]);

  return (
    <div className="min-h-screen flex pt-10 justify-center">
      <div className="w-full max-w-5xl">
        {/* Main Input Container */}
        <div className="bg-black/60 backdrop-blur-sm rounded-3xl p-6 border border-white/10">
          <div className="flex items-start gap-4 ">
            {/* Input Area */}
            <div className="flex-1">
              <p className="w-full bg-transparent text-white/60 placeholder-white/50 text-lg resize-none border-none outline-none font-medium leading-relaxed min-h-[60px]">
                {displayText}
              </p>
            </div>

            {/* Send Button */}
            <button className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-200 bg-white/50 hover:bg-white/80">
              <ArrowUp className="w-5 h-5" />
            </button>
          </div>

          {/* Bottom Controls */}
          <div className="flex items-center justify-between gap-30 mt-4 pt-4 border-t border-white/10">
            <div className="flex items-center gap-2 flex-wrap">
              {/* HR Feature Buttons */}
              <Link to="/login">
                <button className="flex items-center gap-2 px-3 py-2 rounded-full text-sm font-medium bg-white/10 text-white/70 border border-white/20 hover:bg-white/20 hover:text-white transition-all duration-200">
                  <Trophy className="w-4 h-4" />
                  Leaderboard
                </button>
              </Link>
              <Link to="/login">
                <button className="flex items-center gap-2 px-3 py-2 rounded-full text-sm font-medium bg-white/10 text-white/70 border border-white/20 hover:bg-white/20 hover:text-white transition-all duration-200">
                  <FileText className="w-4 h-4" />
                  Parse resumes
                </button>
              </Link>
              <Link to="/login">
                <button className="flex items-center gap-2 px-3 py-2 rounded-full text-sm font-medium bg-white/10 text-white/70 border border-white/20 hover:bg-white/20 hover:text-white transition-all duration-200">
                  <Calendar className="w-4 h-4" />
                  Schedule interviews
                </button>
              </Link>
            </div>

            {/* Character Count */}
            <div className="text-white/40 text-sm">
              {examples[exampleIndex].length}/2000
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
