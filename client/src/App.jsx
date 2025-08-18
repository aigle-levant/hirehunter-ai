import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Resumes from "./pages/Resumes";
import Leaderboard from "./pages/Leaderboard";
import Schedule from "./pages/Schedule";
import About from "./pages/About";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Jobs from "./pages/Jobs";
import Default from "./layout/Default";
import Auth from "./layout/Auth";
import DashboardLayout from "./layout/DashboardLayout";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <Routes>
      <Route element={<Default />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Route>

      <Route element={<Auth />}>
        <Route path="/login" element={<Login />} />
      </Route>

      <Route element={<DashboardLayout />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/scan" element={<Resumes />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/schedule" element={<Schedule />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
