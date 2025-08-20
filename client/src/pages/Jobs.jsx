import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Briefcase } from "lucide-react";
import { useResumes } from "@/store/Context";

export default function Jobs() {
  const { jobs } = useResumes();
  const [openJob, setOpenJob] = useState(null);
  const [darkMode, setDarkMode] = useState(
    document.documentElement.classList.contains("dark")
  );
  useEffect(() => {
    if (darkMode) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }, [darkMode]);

  return (
    <section className="container bg-gray-50 dark:bg-gray-900 transition-colors mx-auto p-8 space-y-10 rounded-2xl">
      {/* Heading */}
      <div className="space-y-3">
        <h1 className="text-4xl font-basier-circle text-black dark:text-white bg-clip-text">
          Browse jobs
        </h1>
      </div>

      {/* Jobs Grid */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {jobs.map((job) => (
          <Dialog
            key={job.title}
            open={openJob === job.title}
            onOpenChange={() =>
              setOpenJob(openJob === job.title ? null : job.title)
            }
          >
            <DialogTrigger asChild>
              <Card className="cursor-pointer group relative overflow-hidden border border-slate-200 dark:border-slate-700 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 rounded-2xl">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-teal-500/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <CardHeader className="flex flex-row items-center gap-3">
                  <div className="p-2 rounded-lg bg-blue-900 dark:bg-blue-200">
                    <Briefcase className="w-6 h-6 text-white dark:text-black" />
                  </div>
                  <CardTitle className="text-lg font-semibold text-slate-900 dark:text-white">
                    {job.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Click to learn more about this role.
                  </p>
                </CardContent>
              </Card>
            </DialogTrigger>

            {/* Dialog Content */}
            <DialogContent className="w-[90vw] max-w-3xl dark:bg-slate-900 dark:text-gray-100 rounded-2xl shadow-2xl">
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold text-blue-600 dark:text-blue-300">
                  {job.title}
                </DialogTitle>
              </DialogHeader>
              <div className="mt-4 whitespace-pre-line max-h-[65vh] overflow-y-auto pr-2 text-gray-700 dark:text-gray-300 leading-relaxed">
                {job.description}
              </div>
              <div className="mt-6 flex justify-end gap-3">
                <Button
                  variant="outline"
                  className="dark:border-gray-600"
                  onClick={() => setOpenJob(null)}
                >
                  Close
                </Button>
                <Button className="bg-blue-600 dark:bg-blue-300 text-white dark:text-black hover:bg-blue-700 hover:dark:bg-blue-700 hover:dark:text-blue-100">
                  <a href="/jd">Apply now</a>
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        ))}
      </div>
    </section>
  );
}
