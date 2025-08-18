import { createContext, useContext, useState, useEffect } from "react";

const ResumesContext = createContext();

export const ResumesProvider = ({ children }) => {
  const [resumes, setResumes] = useState(() => {
    const saved = localStorage.getItem("resumes");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("resumes", JSON.stringify(resumes));
  }, [resumes]);

  const addResumes = (newResumes) =>
    setResumes((prev) => [...prev, ...newResumes]);
  const removeResume = (index) =>
    setResumes((prev) => prev.filter((_, i) => i !== index));
  const discardAll = () => setResumes([]);

  const toggleSelect = (email) =>
    setResumes((prev) =>
      prev.map((r) => (r.email === email ? { ...r, selected: !r.selected } : r))
    );

  const updateResume = (email, data) =>
    setResumes((prev) =>
      prev.map((r) => (r.email === email ? { ...r, ...data } : r))
    );

  return (
    <ResumesContext.Provider
      value={{
        resumes,
        addResumes,
        removeResume,
        discardAll,
        toggleSelect,
        updateResume,
        setResumes,
      }}
    >
      {children}
    </ResumesContext.Provider>
  );
};

export const useResumes = () => useContext(ResumesContext);
