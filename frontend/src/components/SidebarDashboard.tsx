import { useState } from "react";
import Heading from "./Heading";
import SidebarLink from "./SidebarLink";
import { IoClose, IoReorderThree } from "react-icons/io5";
import { MdLogout } from "react-icons/md";
import PenIcon from "../assets/Pen.svg";
import PenIconActive from "../assets/Pen-active.svg";
import BillingIcon from "../assets/Billing.svg";
import BillingIconActive from "../assets/Billing-active.svg";
import LimitIcon from "../assets/Limit.svg";
import LimitIconActive from "../assets/Limit-active.svg";
import ResultIcon from "../assets/Result.svg";
import ResultIconActive from "../assets/Result-active.svg";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Avatar from "../assets/Avatar.svg";

export default function SidebarDashboard() {
  return (
    <aside
      id="logo-sidebar"
      className="fixed top-0 left-0 md:sticky md:col-start-1 md:col-end-2 md:row-start-2 md:row-end-3 md:w-64 z-50 h-screen pt-2 transition-transform -translate-x-full bg-white border-r border-gray-200 md:translate-x-0"
      aria-label="Sidebar"
    >
      <div className="h-full px-3 pb-4 overflow-y-auto bg-white">
        <ul className="flex flex-col gap-y-5 font-medium py-2">
          <NavLink
            to="test/penetration"
            className={({ isActive }) => (isActive ? "pb-0" : "")}
          >
            {({ isActive }) => {
              return (
                <div
                  className={`flex items-center gap-x-1 p-2 rounded-default hover:bg-blue-200 ${
                    isActive ? "bg-blue-200 text-blue" : "bg-none text-black"
                  } transition-colors`}
                >
                  <img src={isActive ? PenIconActive : PenIcon} />
                  <span className="font-normal">Penetration Testing</span>
                </div>
              );
            }}
          </NavLink>
          <NavLink
            to="test/limit"
            className={({ isActive }) =>
              isActive ? "pb-0 cursor-not-allowed" : "cursor-not-allowed"
            }

            onClick={(e) => e.preventDefault()}
          >
            {({ isActive }) => {
              return (
                <div
                  className={`flex items-center gap-x-1 p-2 rounded-default hover:bg-blue-200 ${
                    isActive ? "bg-blue-200 text-blue" : "bg-none text-black"
                  } transition-colors`}
                >
                  <img src={isActive ? LimitIconActive : LimitIcon} />
                  <span className="font-normal">Limit Testing</span>
                </div>
              );
            }}
          </NavLink>
          <NavLink
            to="test/history"
            className={({ isActive }) => (isActive ? "pb-0" : "")}
          >
            {({ isActive }) => {
              return (
                <div
                  className={`flex items-center gap-x-1 p-2 rounded-default hover:bg-blue-200 ${
                    isActive ? "bg-blue-200 text-blue" : "bg-none text-black"
                  } transition-colors`}
                >
                  <img src={isActive ? ResultIconActive : ResultIcon} />
                  <span className="font-normal">Testing Results</span>
                </div>
              );
            }}
          </NavLink>
          <NavLink
            to="billing"
            className={({ isActive }) =>
              isActive ? "pb-0 cursor-not-allowed" : "cursor-not-allowed"
            }
            onClick={(e) => e.preventDefault()}
          >
            {({ isActive }) => {
              return (
                <div
                  className={`flex items-center gap-x-1 p-2 rounded-default hover:bg-blue-200 ${
                    isActive ? "bg-blue-200 text-blue" : "bg-none text-black"
                  } transition-colors`}
                >
                  <img src={isActive ? BillingIconActive : BillingIcon} />
                  <span className="font-normal">Billing</span>
                </div>
              );
            }}
          </NavLink>
        </ul>
      </div>
    </aside>
  );

  // const [sidebarVisible, setSidebarVisible] = useState(false);
  // const toggleSidebar = () => {
  //   setSidebarVisible(!sidebarVisible);
  // };
  // const navigate = useNavigate();
  // function handleLogoClick() {
  //   navigate("/");
  // }
  // return (
  //   <>
  //     <button
  //       className="absolute top-2 left-0 z-10 p-2 m-2 rounded md:hidden"
  //       onClick={toggleSidebar}
  //     >
  //       {!sidebarVisible ? <IoReorderThree size={24} /> : <IoClose size={24} />}
  //     </button>

  //     <aside
  //       className={`bg-white border-r w-60 flex flex-col p-2 gap-8 ${
  //         sidebarVisible ? "flex" : "hidden"
  //       } md:flex`}
  //     >
  //       <button onClick={handleLogoClick}>
  //         <Heading className="font-extrabold text-blue mb-4 text-center [text-shadow:1px_1px_var(--tw-shadow-color)] shadow-black">
  //           TESTGRID
  //         </Heading>
  //       </button>
  //       <ul className="flex flex-col h-dvh gap-8">
  //         <SidebarLink
  //           name="Penetration Testing"
  //           path="penetration"
  //           icon={PenIcon}
  //           activeIcon={PenIconActive}
  //         />
  //         <SidebarLink
  //           name="Limit Testing"
  //           path="limit"
  //           icon={LimitIcon}
  //           activeIcon={LimitIconActive}
  //         />
  //         <SidebarLink
  //           name="Testing Results"
  //           path="result"
  //           icon={ResultIcon}
  //           activeIcon={ResultIconActive}
  //         />
  //         <SidebarLink
  //           name="Billing"
  //           path="billing"
  //           icon={BillingIcon}
  //           activeIcon={BillingIconActive}
  //         />
  //         <li className="flex grow items-end">
  //           <div className="w-full flex items-center gap-2 bg-gray-100 p-2 rounded-default">
  //             <img className="w-8" src={Avatar} alt="" />
  //             <h1 className="text-blue font-bold">@username</h1>
  //             <MdLogout
  //               className="text-blue grow ml-[35px] hover:text-red-600 cursor-pointer"
  //               title="Logout"
  //             />
  //           </div>
  //         </li>
  //       </ul>
  //     </aside>
  //   </>
  // );
}
