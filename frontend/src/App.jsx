import Home from "./pages/Home.tsx";
import ResumeScanner from "./pages/ResumeScanner.tsx";
import Leaderboard from "./pages/Leaderboard.tsx";
import NotFound from "./pages/NotFound.tsx";
import Schedule from "./pages/Schedule.tsx";
import About from "./pages/About.tsx";
import Candidate from "./pages/Candidate.tsx";
import Candidates from "./pages/Candidates.tsx";
import Default from "./layout/Default.tsx";
import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <Routes>
      <Route element={<Default />}>
        <Route path="/" element={<Home />} />
        <Route path="/scan" element={<ResumeScanner />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/candidate/:id" element={<Candidate />} />
        <Route path="/candidate" element={<Candidates />} />
        <Route path="/about" element={<About />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
