import { Button } from "@/components/ui/button";

export default function ResumeUpload() {
  return (
    <div id="file-upload" className="border-dashed border-blue-500 px-6 py-4">
      <p>Browse a pdf or drop it here.</p>
      <input type="file" />
      <Button variant="outline">Browse file</Button>
    </div>
  );
}
