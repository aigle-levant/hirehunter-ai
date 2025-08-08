import Home from "./pages/Home";
import ResumeScanner from "./pages/ResumeScanner";
import Leaderboard from "./pages/Leaderboard";
// import NotFound from "./pages/NotFound";
import Schedule from "./pages/Schedule";
import About from "./pages/About";
import Candidate from "./pages/Candidate";
// import Candidates from "./pages/Candidates.tsx";
import Default from "./layout/Default";
import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <Routes>
      <Route element={<Default />}>
        <Route path="/" element={<Home />} />
        <Route path="/scan" element={<ResumeScanner />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/candidate/:id" element={<Candidate />} />
        {/* <Route path="/candidate" element={<Candidates />} /> */}
        <Route path="/about" element={<About />} />
        <Route path="/schedule" element={<Schedule />} />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Route>
    </Routes>
  );
}
