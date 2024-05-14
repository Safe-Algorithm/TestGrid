import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import DashboardHeader from "./DashboardHeader";

export default function DashboardLayout() {
  return (
    <div className="flex flex-row bg-neutral-100 w-screen h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col gap-12">
        <DashboardHeader />
        <Outlet />
      </div>
    </div>
  );
}
