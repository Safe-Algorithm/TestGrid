import Container from "./Container";
import Paragraph from "./Paragraph";

export default function Footer() {
  return (
    <footer className=" bg-blue ">
      <Container>
        <div className="flex flex-col md:flex-row justify-between p-4">
          <Paragraph className=" text-white text-center text-base md:text-lg font-bold m-4 md:m-auto md:ml-0">
            TestGrid
          </Paragraph>
          <Paragraph className="text-white text-center text-base font-bold md:m-auto ">
            &copy; 2024 Safe Algorithm. All rights reserved.
          </Paragraph>
          <div className="flex md:m-auto md:mr-0 justify-center">
            <a href="https://twitter.com/safealgo" target="_blank">
              <img src="src/assets/x-icon.svg" className=" w-20 md:w-auto" />
            </a>
            <a href="https://github.com/Safe-Algorithm" target="_blank">
              <img src="src/assets/github-icon.svg" className="p-5 md:p-6" />
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
