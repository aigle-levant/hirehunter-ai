import { create } from "zustand";
import { persist } from "zustand/middleware";
import { mockResumes } from "@/data/mockResumes";
import { jobs } from "@/data/jobs";

export const useResumes = create(
  persist(
    (set) => ({
      resumes: mockResumes, // all uploaded candidates
      keywords: [],
      jobs: jobs,

      // add resumes
      addResumes: (newResumes) =>
        set((state) => ({ resumes: [...state.resumes, ...newResumes] })),

      // remove a resume
      removeResume: (email) =>
        set((state) => ({
          resumes: state.resumes.filter((r) => r.email !== email),
        })),

      discardAll: () => set({ resumes: [] }),

      // toggle candidate selection
      toggleSelect: (email) =>
        set((state) => ({
          resumes: state.resumes.map((r) =>
            r.email === email ? { ...r, selected: !r.selected } : r
          ),
        })),

      // update candidate (status, skills, etc.)
      updateResume: (email, data) =>
        set((state) => ({
          resumes: state.resumes.map((r) =>
            r.email === email ? { ...r, ...data } : r
          ),
        })),

      // **Set status for rejected candidates automatically**
      setRejectedCandidates: () =>
        set((state) => ({
          resumes: state.resumes.map((r) =>
            r.selected ? r : { ...r, status: "rejected" }
          ),
        })),

      // keywords
      setKeywords: (keywords) => set({ keywords }),
      clearKeywords: () => set({ keywords: [] }),

      // jobs
      setJobs: (jobs) => set({ jobs }),
      addJob: (job) => set((state) => ({ jobs: [...state.jobs, job] })),
      removeJob: (title) =>
        set((state) => ({ jobs: state.jobs.filter((j) => j.title !== title) })),
    }),
    {
      name: "resumes-storage",
    }
  )
);
