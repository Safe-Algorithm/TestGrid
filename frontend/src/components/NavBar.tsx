import { NavLink } from "react-router-dom";
import Logo from "./Logo";

interface NavBarProps {
  isLogin?: boolean;
}
export default function NavBar({ isLogin = false }: NavBarProps) {
  return (
    <div className="md:flex">
      <Logo />
      <div className="flex-1">
        <ul className="hidden md:flex md:flex-row md:items-center md:justify-between font-roboto text-blue m-6">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/pricing">Pricing</NavLink>
          </li>
          <li>
            <NavLink to="/services">Services</NavLink>
          </li>
          <li>
            <NavLink to="/aboutus">About Us</NavLink>
          </li>
          <li>
            {
              <NavLink to={`/${isLogin ? "login" : "register"}`}>
                {isLogin ? "Login" : "Signup"}
              </NavLink>
            }
          </li>
        </ul>
      </div>
    </div>
  );
}