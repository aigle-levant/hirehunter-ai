import { useState, useRef, useEffect } from "react";
import { Upload, FileText, X, CheckCircle } from "lucide-react";

export default function ResumeUpload() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const fileInputRef = useRef(null);

  const handleFileSelect = (file) => {
    if (
      file &&
      (file.type === "application/pdf" ||
        file.type ===
          "application/vnd.openxmlformats-officedocument.wordprocessingml.document")
    ) {
      setSelectedFile(file);
    }
  };

  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    handleFileSelect(file);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files[0];
    handleFileSelect(file);
  };

  const removeFile = () => {
    setSelectedFile(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleUpload = async () => {
    if (!selectedFile) return;

    setIsUploading(true);
    // Simulate upload process
    setTimeout(() => {
      setIsUploading(false);
      // Here you would typically handle the actual file upload
      alert(`Successfully uploaded: ${selectedFile.name}`);
    }, 2000);
  };

  const formatFileSize = (bytes) => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="w-full flex justify-end p-8">
      <div className="max-w-md w-full">
        {/* Header with fade-in animation */}
        <div
          className={`text-right mb-8 transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <h2 className="text-3xl font-bold font-sans bg-black bg-clip-text text-transparent mb-2">
            Upload Your Resume
          </h2>
          <p className="text-lg text-gray-600 font-body">
            I'll parse and analyze it for you instantly
          </p>
        </div>

        <div
          className={`transition-all duration-1000 ease-out delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="backdrop-blur-xl bg-white/90 border border-gray-200/50 rounded-2xl shadow-2xl p-8 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-gray-50/20 to-white/30"></div>
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-white/30 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-gray-100/40 rounded-full blur-3xl"></div>

            <div className="relative z-10">
              <div className="mb-6">
                <div
                  className={`relative border-2 border-dashed rounded-xl p-6 text-center transition-all duration-300 ${
                    isDragging
                      ? "border-blue-400/80 bg-blue-50/50 backdrop-blur-sm"
                      : selectedFile
                      ? "border-green-400/80 bg-green-50/50 backdrop-blur-sm"
                      : "border-gray-300/60 hover:border-gray-400/80 hover:bg-gray-50/30 backdrop-blur-sm"
                  }`}
                  onDragOver={handleDragOver}
                  onDragLeave={handleDragLeave}
                  onDrop={handleDrop}
                >
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept=".pdf,.docx"
                    onChange={handleFileInputChange}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  />

                  {!selectedFile ? (
                    <div className="space-y-4">
                      <div className="mx-auto w-14 h-14 bg-gray-100/80 backdrop-blur-sm rounded-full flex items-center justify-center border border-gray-200/50">
                        <Upload
                          className={`w-6 h-6 ${
                            isDragging ? "text-blue-500" : "text-gray-600"
                          }`}
                        />
                      </div>
                      <div>
                        <p className="text-base font-medium text-gray-800 mb-2">
                          {isDragging
                            ? "Drop your resume here"
                            : "Drag & drop your resume here"}
                        </p>
                        <p className="text-sm text-gray-600 mb-4">
                          or click to browse files
                        </p>
                        <div className="inline-flex items-center px-6 py-2 bg-white text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 border border-gray-200">
                          Choose File
                        </div>
                      </div>
                      <p className="text-xs text-gray-500">
                        Supports PDF and DOCX files up to 10MB
                      </p>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      <div className="mx-auto w-14 h-14 bg-green-100/80 backdrop-blur-sm rounded-full flex items-center justify-center border border-green-200/50">
                        <CheckCircle className="w-6 h-6 text-green-600" />
                      </div>
                      <div>
                        <p className="text-base font-medium text-green-700">
                          File Ready to Upload
                        </p>
                        <p className="text-sm text-gray-600">
                          Click upload to process your resume
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {selectedFile && (
                <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 mb-6 border border-gray-200/50">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-blue-100/80 backdrop-blur-sm rounded-lg border border-blue-200/50">
                        <FileText className="w-4 h-4 text-blue-600" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-800 text-sm">
                          {selectedFile.name}
                        </p>
                        <p className="text-xs text-gray-500">
                          {formatFileSize(selectedFile.size)}
                        </p>
                      </div>
                    </div>
                    <button
                      onClick={removeFile}
                      className="p-1 hover:bg-gray-100/80 rounded-full transition-colors backdrop-blur-sm"
                      aria-label="Remove file"
                    >
                      <X className="w-4 h-4 text-gray-500 hover:text-gray-700" />
                    </button>
                  </div>
                </div>
              )}

              {selectedFile && (
                <div className="text-center">
                  <button
                    onClick={handleUpload}
                    disabled={isUploading}
                    className={`inline-flex items-center px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                      isUploading
                        ? "bg-gray-200 text-gray-500 cursor-not-allowed shadow-md"
                        : "bg-white text-gray-700 hover:bg-gray-50 shadow-lg hover:shadow-xl transform hover:-translate-y-2 border border-gray-200"
                    }`}
                  >
                    {isUploading ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-2 border-gray-400 border-t-transparent mr-2"></div>
                        Processing...
                      </>
                    ) : (
                      <>
                        <Upload className="w-4 h-4 mr-2" />
                        Upload & Parse Resume
                      </>
                    )}
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
