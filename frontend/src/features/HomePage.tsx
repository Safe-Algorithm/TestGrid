import { Link } from "react-router-dom";
import Header from "../components/Header";
import Plans from "../components/Plans";
import Contact from "../components/Contact";
import { Reviews } from "../components/Reviews";
function HomePage() {
  const cardContent = {
    id: crypto.randomUUID(),
    name: "customer 1",
    designation: "it's a very good product",
    content: "content",
  };

  return (
    <main className="w-full h-[5000px] bg-[url('./images/background.svg')]">
      <Header />
      <Plans />
      <Reviews />
      <Contact />
    </main>
  );
}
export default HomePage;
