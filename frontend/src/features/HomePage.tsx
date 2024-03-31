import { Link } from "react-router-dom";
import Header from "../components/Header";
import Features from "../components/Features";
function HomePage() {
  return (
    <main className="w-full h-[5000px] bg-[url('./images/background.svg')]">
      <Header />
      <Features />
    </main>
  );
}
export default HomePage;
