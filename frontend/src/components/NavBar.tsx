import { NavLink } from "react-router-dom";
import Logo from "./Logo";

interface NavBarProps {
  isLogin?: boolean;
}
export default function NavBar({ isLogin = false }: NavBarProps) {
  return (
    <nav className="md:flex">
      <Logo />
      <div className="md:flex-auto xl:flex-1">
        <ul className="hidden md:flex md:flex-row md:items-center md:justify-between font-roboto text-blue m-6">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/pricing">Pricing</NavLink>
          </li>
          <li>
            <NavLink to="/features">Features</NavLink>
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
    </nav>
  );
}
