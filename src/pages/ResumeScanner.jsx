import Resume from "../components/parser/Resume";
import ResumeUpload from "../components/parser/ResumeUpload";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import ResumeDetails from "../components/parser/ResumeDetails";
import AIDialog from "../components/parser/AIDialog";
import { Sticker } from "lucide-react";

export default function ResumeScanner() {
  const [upload, isUploaded] = useState(false);
  return (
    <section id="resume">
      <div id="scanner" className="flex flex-row font-body">
        <Resume />
        <div id="modals" className="flex flex-col">
          <h1 className="font-sans">Parse your resume</h1>
          <div className="flex flex-row">
            <div className="rounded-full p-4 bg-blue-900">
              <Sticker size={40} color="#ffffff" absoluteStrokeWidth />
            </div>
            <p>
              Allow me to parse your resume for you! Drop the resume here in
              this little box. I’ll take care of the rest.
            </p>
          </div>
          <ResumeUpload />
          <Button variant="outline">Parse</Button>
          <Button variant="outline">Discard</Button>
        </div>
      </div>
      <div>
        <ResumeDetails />
        <AIDialog />
      </div>
    </section>
  );
}
