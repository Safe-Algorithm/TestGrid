import Container from "./Container";
import Paragraph from "./Paragraph";
import Heading from "./Heading";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();

  function handleOnClick() {
    navigate("/test/penetration");
  }

  return (
    <Container>
      <header className="relative border-4 border-black rounded-default p-3 min-h-[31rem] sm:min-h-[28rem] header-shadow md:flex">
        <div className="md:w-1/2 lg:w-auto md:pt-16 flex flex-col">
          <h1 className="font-extrabold text-5xl lg:text-6xl text-blue">
            Centralized Website Testing
            <img
              src="./images/discover-icon.svg"
              className="inline ml-3 mt-1 w-16 md:w-20"
              alt="icon"
            />
          </h1>
          <Paragraph className="">
            Our platform serves as a robust tool designed to fortify websites
            against security breaches and optimize their performance under heavy
            user traffic.
          </Paragraph>
          <span className="flex items-end grow mb-8">
            <button
              onClick={handleOnClick}
              className="inline bg-green border-2 lg:text-lg border-black font-bold text-black p-2 lg:p-3 mt-10 lg:mt-22 sm:w-[11rem] lg:w-72 rounded-default"
            >
              <Heading>Get Started</Heading>
            </button>
          </span>
        </div>

        <div className="absolute bottom-0 sm:-bottom-1 right-0 md:static md:w-1/2 lg:w-auto">
          <img
            src="./images/homepage-illustration-01.svg"
            className="w-[11rem] sm:w-[15rem] md:w-96 lg:w-[78rem]"
            alt=""
          />
        </div>
      </header>
    </Container>
  );
}
