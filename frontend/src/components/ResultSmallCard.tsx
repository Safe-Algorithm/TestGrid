import { ReactElement } from "react";
import Paragraph from "./Paragraph";

interface ResultSmallCardProps {
  name: string;
  value: string;
  icon: ReactElement;
}
export default function ResultSmallCard({
  name,
  value,
  icon,
}: ResultSmallCardProps) {
  return (
    <div className="bg-skyblue2 p-4 md:w-11/12 border border-skyblue3 rounded-md">
      <div className="flex">
        <img src={icon} className=" mr-4" />
        <Paragraph className=" font-bold">{name}</Paragraph>
      </div>
      <p className="my-2 md:my-8 md:m-8 text-center text-2xl lg:text-3xl text-blue font-bold">
        {value}
      </p>
    </div>
  );
}
