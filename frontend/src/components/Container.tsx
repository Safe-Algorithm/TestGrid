import { ReactNode } from "react";
interface ContainerProps {
  children: ReactNode;
  className?: string;
}
function Container({ children, className }: ContainerProps) {
  return (
    <div className={`p-5 sm:p-0 sm:w-10/12 m-auto mt-2  ${className}`}>
      {children}
    </div>
  );
}
export default Container;
