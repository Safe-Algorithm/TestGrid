import Container from "../components/Container";
import Features from "../components/Features";
import Footer from "../components/Footer";

import Header from "../components/Header";
import Plans from "../components/Plans";
import Contact from "../components/Contact";
import { Reviews } from "../components/Reviews";
import { Nav } from "../components/Nav";
function HomePage() {
  return (
    <main className="w-full bg-[url('./images/background.svg')]">
      {/* <NavBar /> */}
      <Nav />
      <Header />
      <Features />
      <Plans />
      <Reviews />
      <Contact />
      <Footer />
    </main>
  );
}
export default HomePage;
