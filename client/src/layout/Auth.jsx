import { Outlet } from "react-router-dom";

export default function Auth() {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <Outlet />
    </main>
  );
}
