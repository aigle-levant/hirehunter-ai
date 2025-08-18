import { Outlet } from "react-router-dom";
import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";

export default function Layout() {
  return (
    <div className="min-h-screen bg-white text-zinc-900 dark:bg-zinc-900 dark:text-white">
      <Navbar />
      <main className="pt-15">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
