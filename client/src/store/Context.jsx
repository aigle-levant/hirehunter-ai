import { create } from "zustand";
import { persist } from "zustand/middleware";
import { mockResumes } from "@/data/mockResumes";
import { jobs } from "@/data/jobs";

export const useResumes = create(
  persist(
    (set) => ({
      resumes: mockResumes,

      // dynamic state (starts empty)
      keywords: [],

      // static job list
      jobs: jobs,

      // resumes
      addResumes: (newResumes) =>
        set((state) => ({ resumes: [...state.resumes, ...newResumes] })),

      removeResume: (email) =>
        set((state) => ({
          resumes: state.resumes.filter((r) => r.email !== email),
        })),

      discardAll: () => set({ resumes: [] }),

      toggleSelect: (email) =>
        set((state) => ({
          resumes: state.resumes.map((r) =>
            r.email === email ? { ...r, selected: !r.selected } : r
          ),
        })),

      updateResume: (email, data) =>
        set((state) => ({
          resumes: state.resumes.map((r) =>
            r.email === email ? { ...r, ...data } : r
          ),
        })),

      // keywords
      setKeywords: (keywords) => set({ keywords }),
      clearKeywords: () => set({ keywords: [] }),

      // jobs
      setJobs: (jobs) => set({ jobs }),
      addJob: (job) => set((state) => ({ jobs: [...state.jobs, job] })),
      removeJob: (title) =>
        set((state) => ({
          jobs: state.jobs.filter((j) => j.title !== title),
        })),
    }),
    {
      name: "resumes-storage", // key in localStorage
    }
  )
);
