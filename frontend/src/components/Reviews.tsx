import React from "react";
("use client");
import { CardStack } from "./ui/card-stack";
import { cn } from "../utils/cn";
import SectionHeading from "./SectionHeading";
import Container from "./Container";
export function Reviews() {
  return (
    <section className="mt-16 relative w-full" id="reviews">
      <SectionHeading title="Reviews" />
      <Container className="w-11/12">
        <div className="md:w-10/12 m-auto flex justify-center">
          <span className="h-24 top-[170px] md:top-[193px] left-0 border border-y-1 border-x-0 border-black bg-green w-full absolute"></span>
          <CardStack items={CARDS} />
        </div>
      </Container>
    </section>
  );
}
// Small utility to highlight the content of specific section of a testimonial content
export const Highlight = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <span
      className={cn(
        "font-bold bg-emerald-100 text-emerald-700 dark:bg-emerald-700/[0.2] dark:text-emerald-500 px-1 py-0.5",
        className
      )}
    >
      {children}
    </span>
  );
};

const CARDS = [
  {
    id: 0,
    name: "Ahmad Ali",
    designation: "IT Manager",
    content: (
      <p>
        <Highlight>TestGrid</Highlight> is a lifesaver. It automates a large
        portion of our penetration testing, freeing up my time for more complex
        tasks. The platform also provides excellent reporting, making it easy to
        communicate vulnerabilities to stakeholders.
      </p>
    ),
  },
  {
    id: 1,
    name: "Fatimah Khalid",
    designation: "CEO",
    content: (
      <p>
        Loved <Highlight>TestGrid</Highlight>, My website loads fast and stays
        secure 💙.
      </p>
    ),
  },
  {
    id: 2,
    name: "Ammar Mohammad",
    designation: "Security Analyst",
    content: (
      <p>
        Since using <Highlight>TestGrid</Highlight>, we've experienced fewer
        security incidents and our website performance has improved
        significantly.
      </p>
    ),
  },
];
