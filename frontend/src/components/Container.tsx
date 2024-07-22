import { ReactNode } from "react";
interface ContainerProps {
  children: ReactNode;
  className?: string;
}
function Container({ children, className }: ContainerProps) {
  className = className ? className : "";
  return (
    <div className={`md:p-5 sm:w-10/12 m-auto mt-2 ${className}`}>
      {children}
    </div>
  );
}
export default Container;
