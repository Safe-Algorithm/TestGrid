import React, { ReactNode } from "react";

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
      <h2 className="text-lg md:text-2xl xl:text-4xl text-blue font-semibold inline">
        {title}
      </h2>
      <p className="mt-4 md:text-xl xl:text-3xl !leading-8 md:!leading-10 leading-12">
        {children}
      </p>
    </div>
  );
}
