import { ReactNode } from "react";
interface ContainerProps {
  children: ReactNode;
  className?: string;
}
function Container({ children, className }: ContainerProps) {
  return <div className={`w-11/12 m-auto mt-8  ${className}`}>{children}</div>;
}
export default Container;
