import Paragraph from "./Paragraph";
import TestNameIcon from "../assets/TestName.svg";
import TestStatusIcon from "../assets/TestStatus.svg";
import DateIcon from "../assets/Date.svg";
import StartingTimeIcon from "../assets/StartingTime.svg";
import { useNavigate } from "react-router-dom";

interface HistoryCardProps {
  name: string;
  status: string;
  date: string;
  id: string;
}
export default function HistoryCard({
  name,
  status,
  date,
  id,
}: HistoryCardProps) {
  const { beautifiedDate, time } = beautifyDate(date);
  const navigate = useNavigate();

  const handleCardClick = () => {
    // Navigate to the result page with the test ID
    navigate(`/test/result/${id}`);
  };
  return (
    <ul
      className="flex justify-between mb-4 p-4 bg-skyblue2 border border-skyblue3 cursor-pointer"
      onClick={handleCardClick}
    >
      <li className="flex">
        <img src={TestNameIcon} className="mr-2" />
        <Paragraph className="font-bold text-blue">{name}</Paragraph>
      </li>
      <li className="flex">
        <img src={TestStatusIcon} className="mr-2" />
        <Paragraph className="font-bold text-blue">{status}</Paragraph>
      </li>
      <li className="flex">
        <img src={DateIcon} className="mr-2" />
        <Paragraph className="font-bold text-blue">{beautifiedDate}</Paragraph>
      </li>
      <li className="flex">
        <img src={StartingTimeIcon} className="mr-2" />
        <Paragraph className="font-bold text-blue">{time}</Paragraph>
      </li>
    </ul>
  );
}
function beautifyDate(date: string) {
  const newDate = new Date(date);
  const time = newDate.toLocaleTimeString();
  const beautifiedDate = newDate.toLocaleDateString();
  return { beautifiedDate, time };
}
