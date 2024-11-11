import { Link } from "react-router-dom";
import Heading from "./Heading";
import Paragraph from "./Paragraph";

interface PenOptionProps {
  title: string;
  description: string;
  testPath: string;
  disabled: boolean;
}
export default function TestOption({
  title,
  description,
  testPath,
  disabled,
}: PenOptionProps) {
  return (
    <div className="flex flex-col border w-full p-4 h-64 bg-white rounded-default">
      <Heading className="font-medium mb-4">{title}</Heading>
      <Paragraph>{description}</Paragraph>
      <Link
        to={`/dashboard/test/penetration/${testPath}`}
        className={`md:p-2 ml-auto mt-auto text-center text-lg font-medium bg-green rounded-default p-1 w-24 border-blue border-2 hover:bg-blue hover:text-green transition-colors ${
          disabled ? "cursor-not-allowed" : "cursor-pointer"
        }`}
        onClick={(e) => (disabled ? e.preventDefault() : null)}
      >
        Try
      </Link>
    </div>
  );
}
