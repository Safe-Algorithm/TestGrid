import { useState } from "react";
import Heading from "./Heading";
import SidebarLink from "./SidebarLink";
import { IoClose, IoReorderThree } from "react-icons/io5";

import PenIcon from "../assets/Pen.svg";
import PenIconActive from "../assets/Pen-active.svg";
import BillingIcon from "../assets/Billing.svg";
import BillingIconActive from "../assets/Billing-active.svg";
import LimitIcon from "../assets/Limit.svg";
import LimitIconActive from "../assets/Limit-active.svg";
import ResultIcon from "../assets/Result.svg";
import ResultIconActive from "../assets/Result-active.svg";
export default function Sidebar() {
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };
  return (
    <>
      <button
        className="absolute top-2 left-0 z-10 p-2 m-2 rounded md:hidden"
        onClick={toggleSidebar}
      >
        {!sidebarVisible ? <IoReorderThree size={24} /> : <IoClose size={24} />}
      </button>

      <aside
        className={`bg-white border-r w-60 p-3 pl-0 flex flex-col gap-8 items-center ${
          sidebarVisible ? "flex" : "hidden"
        } md:flex`}
      >
        <Heading className="font-extrabold text-blue mb-4 text-center [text-shadow:1px_1px_var(--tw-shadow-color)] shadow-black">
          TESTGRID
        </Heading>
        <ul className="flex flex-col gap-8">
          <SidebarLink
            name="Penetration Testing"
            path="penetration"
            icon={PenIcon}
            activeIcon={PenIconActive}
          />
          <SidebarLink
            name="Limit Testing"
            path="limit"
            icon={LimitIcon}
            activeIcon={LimitIconActive}
          />
          <SidebarLink
            name="Testing Results"
            path="result"
            icon={ResultIcon}
            activeIcon={ResultIconActive}
          />
          <SidebarLink
            name="Billing"
            path="billing"
            icon={BillingIcon}
            activeIcon={BillingIconActive}
          />
        </ul>
      </aside>
    </>
  );
}
