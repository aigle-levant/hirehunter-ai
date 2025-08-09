import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";

export default function ResumeUpload({ onUpload }) {
  const [fileName, setFileName] = useState("");
  const fileInputRef = useRef(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFileName(file.name);
      onUpload && onUpload(file);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file && file.type === "application/pdf") {
      setFileName(file.name);
      onUpload && onUpload(file);
    } else {
      alert("Please upload a PDF file.");
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  return (
    <div
      id="file-upload"
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      className="border-2 border-dashed border-blue-500 rounded-md p-6 cursor-pointer hover:bg-blue-50 dark:hover:bg-zinc-800 transition-colors flex flex-col items-center justify-center text-center"
      onClick={() => fileInputRef.current?.click()}
      style={{ minHeight: "160px" }}
    >
      <input
        ref={fileInputRef}
        type="file"
        accept=".pdf"
        className="hidden"
        onChange={handleFileChange}
      />
      <p className="mb-4 text-gray-700 dark:text-gray-300 max-w-xs">
        {fileName ? (
          <span>
            Selected file: <strong>{fileName}</strong>
          </span>
        ) : (
          "Browse or drop your PDF resume here"
        )}
      </p>
      <Button variant="outline" onClick={() => fileInputRef.current?.click()}>
        Browse File
      </Button>
    </div>
  );
}
