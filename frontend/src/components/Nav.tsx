"use client";
import Container from "./Container";
import Cookies from "js-cookie";
import Avatar from "../assets/Avatar.svg";

export function Nav() {
  return (
    <section>
      <Container className="w-11/12 sm:w-10/12 flex items-center justify-center">
        <nav className="w-full border-2 border-blue bg-white rounded-default">
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
                <ul className="hidden md:flex flex-col text-blue font-medium p-4 md:p-0 mt-4 rounded md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 gap-y-2 md:gap-y-0">
                  <li>
                    <a
                      href="/login"
                      className="block hover:bg-blue hover:text-green md:bg-none py-2 px-3 rounded  md:bg-transparent md:hover:text-green transition-colors border-blue md:border-none"
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
                className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-blue rounded-lg md:hidden focus:outline-none focus:bg-blue focus:text-green"
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
              <ul className="flex flex-col text-blue font-medium p-4 md:p-0 mt-4 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 gap-y-2 md:gap-y-0">
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
                <li>
                  {!Cookies.get("accessToken") ? (
                    <a
                      href="/login"
                      className="block hover:bg-blue hover:text-green md:bg-none py-2 px-3 rounded  md:bg-transparent md:hover:text-green transition-colors border-blue md:border-none"
                      aria-current="page"
                    >
                      Login
                    </a>
                  ) : null}
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </Container>
    </section>
  );
}
