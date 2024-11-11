import React from "react";
import Logo from "../../public/images/logo.svg";
import Avatar from "../assets/Avatar.svg";
import { Link } from "react-router-dom";
export default function NavDashboard() {
  return (
    <nav className="w-full bg-white border-b border-gray-200 col-start-1 col-end-3 row-start-1 row-end-2">
      <div className="px-3 py-3 lg:px-5 lg:pl-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-start rtl:justify-end">
            <button
              data-drawer-target="logo-sidebar"
              data-drawer-toggle="logo-sidebar"
              aria-controls="logo-sidebar"
              type="button"
              className="inline-flex items-center p-2 text-sm text-blue rounded-lg md:hidden hover:bg-blue hover:text-green focus:outline-none focus:ring-2 focus:ring-blue-200"
            >
              <span className="sr-only">Open sidebar</span>
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  clip-rule="evenodd"
                  fill-rule="evenodd"
                  d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                ></path>
              </svg>
            </button>
            <Link to="/" className="flex ms-2 md:me-24">
              <img src={Logo} className="w-12" alt="Logo" />
              <span className="self-center font-bold text-xl md:text-3xl text-blue whitespace-nowrap">
                TestGrid
              </span>
            </Link>
          </div>
          <div className="flex items-center">
            <div className="flex items-center ms-3">
              <div>
                <button
                  type="button"
                  className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-blue-200"
                  aria-expanded="false"
                  data-dropdown-toggle="dropdown-user"
                >
                  <span className="sr-only">Open user menu</span>
                  <img
                    className="w-8 h-8 rounded-full"
                    src={Avatar}
                    alt="user photo"
                  />
                </button>
              </div>
              <div
                className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow"
                id="dropdown-user"
              >
                <div className="px-4 py-3" role="none">
                  <p className="text-sm text-blue font-bold" role="none">
                    Ammar Ahmad
                  </p>
                  <p
                    className="text-sm text-blue truncate"
                    role="none"
                  >
                    Ammar@example.com
                  </p>
                </div>
                <ul className="" role="none">
                  <li className="p-1">
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-black hover:bg-blue hover:text-green transition-colors rounded-default"
                      role="menuitem"
                    >
                      Sign out
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
