import Home from "./pages/Home";
import Resumes from "./pages/Resumes";
import Leaderboard from "./pages/Leaderboard";
import Schedule from "./pages/Schedule";
import About from "./pages/About";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Default from "./layout/Default";
import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <Routes>
      <Route element={<Default />}>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/scan" element={<Resumes />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/about" element={<About />} />
        <Route path="/schedule" element={<Schedule />} />
      </Route>
    </Routes>
  );
}
