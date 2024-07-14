"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "../utils/cn";
import Heading from "./Heading";
import Container from "./Container";
import Cookies from "js-cookie";
import Avatar from "../assets/Avatar.svg";

export function Nav() {
  return (
    <section>
      <Container className="w-11/12 sm:w-10/12 flex items-center justify-center">
        <nav className="w-full border-4 border-blue bg-white rounded-default nav-shadow">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between md:justify-start mx-auto px-2">
            <a
              href="/"
              className="flex items-center rtl:space-x-reverse md:grow"
            >
              <img
                src="images/logo.svg"
                className="w-[50px]"
                alt="Test Grid Logo"
              />
              <span className="self-center font-bold text-xl md:text-3xl text-blue whitespace-nowrap">
                TestGrid
              </span>
            </a>
            <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
              {Cookies.get("accessToken") ? (
                <button
                  type="button"
                  className="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-blue-200"
                  id="user-menu-button"
                  aria-expanded="false"
                  data-dropdown-toggle="user-dropdown"
                  data-dropdown-placement="bottom"
                >
                  <span className="sr-only">Open user menu</span>
                  <img
                    className="w-8 h-8 rounded-full"
                    src={Avatar}
                    alt="avatar"
                  />
                </button>
              ) : (
                <ul className="flex flex-col text-blue font-medium p-4 md:p-0 mt-4 border rounded md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 gap-y-2 md:gap-y-0">
                  <li>
                    <a
                      href="/login"
                      className="block hover:bg-blue hover:text-green md:bg-none py-2 px-3 rounded  md:bg-transparent md:hover:text-green transition-colors border border-blue md:border-none"
                      aria-current="page"
                    >
                      Login
                    </a>
                  </li>
                </ul>
              )}
              {/* <!-- Dropdown menu --> */}
              <div
                className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow"
                id="user-dropdown"
              >
                <div className="px-4 py-3">
                  <span className="block text-sm text-blue font-bold">
                    Bonnie Green
                  </span>
                  <span className="block text-sm  text-blue truncate">
                    email@example.com
                  </span>
                </div>
                <ul className="py-2" aria-labelledby="user-menu-button">
                  <li className="p-1">
                    <a
                      href="/test/penetration"
                      className="block px-4 py-2 text-sm text-black hover:bg-blue hover:text-green transition-colors rounded-default"
                    >
                      Dashboard
                    </a>
                  </li>
                  <li className="p-1">
                    <a
                      href="/signout"
                      className="block px-4 py-2 text-sm text-black hover:bg-blue hover:text-green transition-colors rounded-default"
                    >
                      Sign out
                    </a>
                  </li>
                </ul>
              </div>
              <button
                data-collapse-toggle="navbar-user"
                type="button"
                className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden focus:outline-none focus:ring-2 focus:ring-gray-200"
                aria-controls="navbar-user"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 17 14"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 1h15M1 7h15M1 13h15"
                  />
                </svg>
              </button>
            </div>
            <div
              className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1 md:px-8"
              id="navbar-user"
            >
              <ul className="flex flex-col text-blue font-medium p-4 md:p-0 mt-4 border rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 gap-y-2 md:gap-y-0">
                <li>
                  <a
                    href="#features"
                    className="block hover:bg-blue hover:text-green md:bg-none py-2 px-3 rounded  md:bg-transparent md:hover:text-green transition-colors border border-blue md:border-none"
                    aria-current="page"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a
                    href="#plans"
                    className="block hover:bg-blue hover:text-green md:bg-none py-2 px-3 text-blue rounded md:hover:text-green transition-colors border border-blue md:border-none"
                  >
                    Plans
                  </a>
                </li>
                <li>
                  <a
                    href="#reviews"
                    className="block hover:bg-blue hover:text-green md:bg-none py-2 px-3 text-blue rounded md:hover:text-green transition-colors border border-blue md:border-none"
                  >
                    Reviews
                  </a>
                </li>
                <li>
                  <a
                    href="#contact-us"
                    className="block hover:bg-blue hover:text-green md:bg-none py-2 px-3 text-blue rounded md:hover:text-green transition-colors border border-blue md:border-none"
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </Container>
    </section>
  );
}

// function Navbar({ className }: { className?: string }) {
//   const [active, setActive] = useState<string | null | React.ReactNode>(null);
//   return (
//     <div className={cn("w-full", className)}>
//       <Menu setActive={setActive}>
//         <div className="flex items-center">
//           <img src="images/logo.svg" className="w-[95px]" alt="" />
//           <Heading className="font-bold md:text-3xl text-blue">
//             TestGrid
//           </Heading>
//         </div>
//         <div className="flex grow-0 justify-end items-center w-full space-x-4">
//           <MenuItem
//             setActive={() => setActive(null)}
//             active={active}
//             item="Features"
//             href="#features"
//           ></MenuItem>
//           <MenuItem
//             setActive={() => setActive(null)}
//             active={active}
//             item="Plans"
//             href="#plans"
//           ></MenuItem>
//           <MenuItem
//             setActive={() => setActive(null)}
//             active={active}
//             item="Reviews"
//             href="#reviews"
//           ></MenuItem>
//           <MenuItem
//             setActive={() => setActive(null)}
//             active={active}
//             item="Contact Us"
//             href="#contact-us"
//           ></MenuItem>
//           {!Cookies.get("accessToken") ? (
//             <MenuItem
//               setActive={() => setActive(null)}
//               active={active}
//               item="Login"
//               href="/login"
//             ></MenuItem>
//           ) : (
//             <MenuItem
//               setActive={setActive}
//               active={active}
//               item={<img className="w-12" src={Avatar} alt="avatar" />}
//             >
//               <div className="flex flex-col space-y-4 text-sm">
//                 <HoveredLink href="/logou">Logout</HoveredLink>
//                 <HoveredLink href="/test">Dashboard</HoveredLink>
//               </div>
//             </MenuItem>
//           )}
//         </div>
//         {/* <MenuItem setActive={setActive} active={active} item="Products">
//           <div className="  text-sm grid grid-cols-2 gap-10 p-4">
//             <ProductItem
//               title="Algochurn"
//               href="https://algochurn.com"
//               src="https://assets.aceternity.com/demos/algochurn.webp"
//               description="Prepare for tech interviews like never before."
//             />
//             <ProductItem
//               title="Tailwind Master Kit"
//               href="https://tailwindmasterkit.com"
//               src="https://assets.aceternity.com/demos/tailwindmasterkit.webp"
//               description="Production ready Tailwind css components for your next project"
//             />
//             <ProductItem
//               title="Moonbeam"
//               href="https://gomoonbeam.com"
//               src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.51.31%E2%80%AFPM.png"
//               description="Never write from scratch again. Go from idea to blog in minutes."
//             />
//             <ProductItem
//               title="Rogue"
//               href="https://userogue.com"
//               src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.47.07%E2%80%AFPM.png"
//               description="Respond to government RFPs, RFIs and RFQs 10x faster using AI"
//             />
//           </div>
//         </MenuItem>
//         <MenuItem setActive={setActive} active={active} item="Pricing">
//           <div className="flex flex-col space-y-4 text-sm">
//             <HoveredLink href="/hobby">Hobby</HoveredLink>
//             <HoveredLink href="/individual">Individual</HoveredLink>
//             <HoveredLink href="/team">Team</HoveredLink>
//             <HoveredLink href="/enterprise">Enterprise</HoveredLink>
//           </div>
//         </MenuItem> */}
//       </Menu>
//     </div>
//   );
// }
