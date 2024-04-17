import React from "react";

export default function SectionHeading({ title }) {
  return (
    <span>
      <h1 className="bg-green p-[2px] w-[10rem] rounded-r-full font-bold text-center text-blue text-2xl border-black border relative -left-[1rem] section-shadow">
        {title}
      </h1>
    </span>
  );
}
