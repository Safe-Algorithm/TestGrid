import Avatar from "../assets/Avatar.svg";
export default function DashboardHeader() {
  return (
    <div className="h-20 p-2 bg-white px-4 flex justify-between ">
      <div></div>
      <img src={Avatar} />
    </div>
  );
}
