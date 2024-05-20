import { NavLink } from "react-router-dom";
import Logo from "./Logo";
import Cookies from "js-cookie";
import Avatar from "../assets/Avatar.svg";

interface NavBarProps {
  isLogin?: boolean;
}
export default function NavBar({ isLogin = false }: NavBarProps) {
  return (
    <nav className="md:flex">
      <div className="flex-auto">
        <Logo />
      </div>
      <div className="md:flex-auto xl:flex-1">
        <ul className="hidden md:flex md:flex-row md:items-center md:justify-between font-roboto text-blue m-6">
          <li>
            <NavLink to="/" className="lg:text-lg">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/features" className="lg:text-lg">
              Features
            </NavLink>
          </li>
          <li>
            <NavLink to="/pricing" className="lg:text-lg">
              Plans
            </NavLink>
          </li>
          <li>
            <NavLink to="/aboutus" className="lg:text-lg">
              Reviews
            </NavLink>
          </li>
          <li>
            <NavLink to="/aboutus" className="lg:text-lg">
              Contact Us
            </NavLink>
          </li>
          <li>
            {!Cookies.get("accessToken") ? (
              <NavLink
                to={`/${isLogin ? "login" : "signup"}`}
                className="text-lg px-8 py-2 bg-white border-2 border-black rounded-md shadow-custom-features shadow-blue"
              >
                {isLogin ? "Login" : "Signup"}
              </NavLink>
            ) : (
              <img src={Avatar} />
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
}
