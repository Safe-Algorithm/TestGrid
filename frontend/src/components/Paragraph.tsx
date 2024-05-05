import React, { ReactNode } from "react";

export default function Paragraph({ children, className }) {
  return (
    <p
      className={`text-md md:text-lg lg:text-xl leading-8 lg:leading-10 ${className}`}
    >
      {children}
    </p>
  );
}
