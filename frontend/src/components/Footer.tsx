import Container from "./Container";
import Heading from "./Heading";
import Paragraph from "./Paragraph";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className=" bg-blue ">
      <Container>
        <div className="flex flex-col items-center space-y-3 md:space-y-0 md:flex-row justify-between">
          <div className="flex justify-center items-center">
            <img className="w-[64px]" src="images/white-logo.svg" alt="" />
            <Heading className=" text-white md:text-3xl lg:text-3xl font-bold md:m-auto md:ml-0">
              TestGrid
            </Heading>
          </div>
          <Paragraph className="flex items-center text-white text-center text-base font-bold md:m-auto mt-0">
            &copy; 2024 Safe Algorithm. All rights reserved.
          </Paragraph>
          <div className="flex mt-0 md:m-auto md:mr-0 justify-center items-center space-x-3">
            <a href="https://twitter.com/safealgo" target="_blank">
              <FaSquareXTwitter className="text-white text-2xl md:text-3xl hover:text-green transition-colors" />
            </a>
            <a href="https://github.com/Safe-Algorithm" target="_blank">
              <FaGithubSquare className="text-white text-2xl md:text-3xl hover:text-green transition-colors" />
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
