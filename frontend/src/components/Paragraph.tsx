import { ReactNode } from "react";

interface ParagraphProps {
  className?: string;
  children: ReactNode;
}
export default function Paragraph({ className, children }: ParagraphProps) {
  return (
    <p
      className={`text-md md:text-lg lg:text-xl leading-8 lg:leading-10 ${className}`}
    >
      {children}
    </p>
  );
}
