import React, { ReactNode } from "react";
import Paragraph from "./Paragraph";
import Heading from "./Heading";

interface FeatureCardProps {
  title: string;
  icon: string;
  children: ReactNode;
}
export default function FeatureCard({
  title,
  icon,
  children,
}: FeatureCardProps) {
  return (
    <div className="p-4 border-4 rounded-md border-blue shadow-custom-features shadow-green">
      <img src={icon} className="inline-block mr-4 w-10 md:w-12 lg:w-14"></img>
      <Heading className="font-bold text-blue inline">{title}</Heading>
      <Paragraph className="mt-4">{children}</Paragraph>
    </div>
  );
}
