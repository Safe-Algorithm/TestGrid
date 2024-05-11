import Heading from "./Heading";

export default function Sidebar() {
  return (
    <aside className="bg-white fixed left-0 border-r h-screen p-4 block ">
      <Heading className="font-extrabold text-blue mb-4">Dashboard</Heading>
    </aside>
  );
}
