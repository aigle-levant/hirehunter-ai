import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useResumes = create(
  persist(
    (set) => ({
      resumes: [],
      keywords: [],

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
    }),
    {
      name: "resumes-storage", // key in localStorage
    }
  )
);
