import { ReactElement, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import VectorIcon from "../assets/Vector.svg";
import VectorIconActive from "../assets/Vector-active.svg";
interface SidebarLinkProps {
  name: string;
  icon: ReactElement;
  activeIcon: ReactElement;
  path: string;
}
export default function SidebarLink({
  name,
  icon,
  activeIcon,
  path,
}: SidebarLinkProps) {
  const { pathname } = useLocation();
  const [currentLocation, setCurrentLocation] = useState("");
  const [isActive, setIsActive] = useState(false);
  useEffect(() => {
    setCurrentLocation(pathname.split("/")[2]);
    setIsActive(currentLocation == path);
  }, [path, currentLocation, pathname]);
  return (
    <li id={path}>
      <Link
        to={`/test/${path}`}
        className={`flex gap-2 p-2 ${isActive && "bg-skyblue3 rounded-md"}`}
      >
        <img src={isActive ? VectorIconActive : VectorIcon} />

        <img src={isActive ? activeIcon : icon} />
        <span
          className={
            isActive ? "text-blue font-bold" : "text-black font-medium"
          }
        >
          {name}
        </span>
      </Link>
    </li>
  );
}
