import React from "react";

export default function Heading({ children, className }) {
  return <h1 className={`text-xl lg:text-2xl ${className}`}>{children}</h1>;
}
