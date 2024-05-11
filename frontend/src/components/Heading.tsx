import { ReactNode } from "react";

interface HeadingProps {
  className?: string;
  children: ReactNode;
}
export default function Heading({ className, children }: HeadingProps) {
  return <h1 className={`text-xl lg:text-2xl ${className}`}>{children}</h1>;
}
