import SidebarDashboard from "../components/SidebarDashboard";
import DashboardLayout from "../components/DashboardLayout";
import NavDashboard from "../components/NavDashbaord";
import { Outlet } from "react-router-dom";

export default function Dashboard() {
  return (
    <div className="bg-neutral-100 h-screen grid grid-cols-[16rem_1fr]">
      <SidebarDashboard />
      <NavDashboard />
      {/* dashboard/ ___ */}
      <Outlet />
    </div>
  );
}
