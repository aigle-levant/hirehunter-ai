import TopBar from "@/components/common/TopBar";
import SideNavbar from "@/components/common/SideNavbar";
import { Outlet } from "react-router-dom";

export default function DashboardLayout() {
  return (
    <div className="flex min-h-screen bg-gray-300 dark:bg-slate-900">
      <SideNavbar />
      <div className="flex-1 flex flex-col ml-5">
        <TopBar />
        <main className="p-6 flex-1 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
