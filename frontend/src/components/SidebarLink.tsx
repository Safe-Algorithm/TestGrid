import { Link, useLocation } from "react-router-dom";

interface SidebarLinkProps {
  name: string;
  icon: string;
  activeIcon: string;
  path: string;
}
export default function SidebarLink({
  name,
  icon,
  activeIcon,
  path,
}: SidebarLinkProps) {
  const { pathname } = useLocation();
  const currentLocation = pathname.split("/")[1];
  const isOpen = currentLocation == path;
  return (
    <li id={path}>
      <Link to={`/${path}`} className="flex gap-2">
        <img
          src={
            isOpen ? "src/assets/Vector-active.svg" : "src/assets/Vector.svg"
          }
        />
        <img src={isOpen ? activeIcon : icon} />
        <span
          className={isOpen ? "text-blue font-bold" : "text-black font-medium"}
        >
          {name}
        </span>
      </Link>
    </li>
  );
}
