import React from "react";
import Heading from "./Heading";

export default function SectionHeading({ title }) {
  return (
    <span>
      <Heading className="bg-green p-[2px] w-[10rem] rounded-r-full font-bold text-center text-blue border-black border relative -left-[1rem] section-shadow">
        {title}
      </Heading>
    </span>
  );
}
