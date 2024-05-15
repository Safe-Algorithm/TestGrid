import { Link } from "react-router-dom";
import Heading from "./Heading";
import Paragraph from "./Paragraph";

interface PenOptionProps {
  title: string;
  description: string;
  testPath: string;
}
export default function TestOption({
  title,
  description,
  testPath,
}: PenOptionProps) {
  return (
    <div className="flex flex-col border w-11/12 p-4 h-64 bg-white">
      <Heading className="font-medium mb-4">{title}</Heading>
      <Paragraph>{description}</Paragraph>
      <Link
        to={`/test/penetration/${testPath}`}
        className="md:p-2 ml-auto mt-auto text-center text-lg font-medium bg-green rounded-full w-2/12"
      >
        Try
      </Link>
    </div>
  );
}
