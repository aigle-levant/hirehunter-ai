import { Button } from "@/components/ui/button";
import { Sticker } from "lucide-react";

export default function HeroSection() {
  return (
    <section id="hero" className="flex flex-row items-center gap-12 py-20 px-8">
      <div className="flex-shrink-0">
        <div className="animate-float">
          <Sticker size={180} color="#3b82f6" className="drop-shadow-2xl" />
        </div>
      </div>

      <div className="flex flex-col justify-center">
        <h1 className="font-extrabold text-4xl mb-6 leading-tight">
          Let me parse your resumes for you!
        </h1>
        <p className="text-gray-600 text-xl mb-8">
          To get started, scroll down or press this button.
        </p>
        <Button
          variant="outline"
          className="px-8 py-4 bg-blue-100 hover:bg-blue-200 text-blue-700 text-xl rounded-xl shadow-lg transition-all duration-300 ease-out hover:scale-110 hover:shadow-xl animate-bounce-hover"
        >
          Get Started
        </Button>
      </div>

      <style jsx>{`
        @keyframes float {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
          100% {
            transform: translateY(0px);
          }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        .animate-bounce-hover:hover {
          animation: bounceHover 0.6s ease-in-out;
        }
        @keyframes bounceHover {
          0% {
            transform: scale(1);
          }
          30% {
            transform: scale(1.15);
          }
          50% {
            transform: scale(1.05);
          }
          70% {
            transform: scale(1.12);
          }
          100% {
            transform: scale(1.1);
          }
        }
      `}</style>
    </section>
  );
}
