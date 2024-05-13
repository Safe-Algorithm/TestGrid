import { useState } from "react";
import Heading from "./Heading";
import SidebarLink from "./SidebarLink";
import { IoClose, IoReorderThree } from "react-icons/io5";

export default function Sidebar() {
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };
  return (
    <>
      <button
        className="fixed top-2 left-0 z-10 p-2 m-2 rounded md:hidden"
        onClick={toggleSidebar}
      >
        {!sidebarVisible ? <IoReorderThree size={24} /> : <IoClose size={24} />}
      </button>

      <aside
        className={`bg-white border-r w-60 p-3 pl-0 flex flex-col gap-8 items-center ${
          sidebarVisible ? "flex" : "hidden"
        } md:flex`}
      >
        <Heading className="font-extrabold text-blue mb-4 text-center">
          TESTGRID
        </Heading>
        <ul className="flex flex-col gap-8">
          <SidebarLink
            name="Penetration Testing"
            path="penetration"
            icon=""
            activeIcon="src/assets/Pen-active.svg"
          />
          <SidebarLink
            name="Limit Testing"
            path="limit"
            icon="src/assets/Limit.svg"
            activeIcon="src/assets/Limit-active.svg"
          />
          <SidebarLink
            name="Testing Results"
            path="result"
            icon="src/assets/Result.svg"
            activeIcon="src/assets/Result-active.svg"
          />
          <SidebarLink
            name="Billing"
            path="billing"
            icon="src/assets/Billing.svg"
            activeIcon="src/assets/Billing-active.svg"
          />
        </ul>
      </aside>
    </>
  );
}
