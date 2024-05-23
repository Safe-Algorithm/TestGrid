import { useEffect } from "react";
import Cookies from "js-cookie";

import Container from "../components/Container";
import Heading from "../components/Heading";
import PenOption from "../components/PenOption";
import { useNavigate } from "react-router-dom";

export default function PenOptions() {
  const host = import.meta.env.VITE_SERVER_HOST;
  const port = import.meta.env.VITE_SERVER_PORT;

  const navigate = useNavigate();
  useEffect(() => {
    async function authenticateUser() {
      const accessToken = Cookies.get("accessToken");
      const response = await fetch(
        `http://${host}:${port}/api/v1/auth/is-authenticated`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      if (response.status != 200) {
        navigate("/login");
      }
    }
    authenticateUser();
  });
  return (
    <div className="bg-neutral-100 w-full h-full md:h-screen">
      <Container>
        <Heading className="mb-8 text-blue font-bold">
          Select The Test Type You Want To Run
        </Heading>
        <div className="grid md:grid-cols-2 gap-4">
          <PenOption
            title="Test The Server Network Security "
            description="scan a server and find available services and targets on it"
            testPath="network"
          />
          <PenOption
            title="Web Application SQL Security Testing"
            description="scan for SQL vulnerabilities such as SQL injections"
            testPath=""
          />
          <PenOption
            title="Web Application javascript Testing"
            description="scan for javascript vulnerabilities such as XSS"
            testPath=""
          />
          <PenOption
            title="Web application Directory Enumeration Testing"
            description="scan for directories and files in a web application"
            testPath=""
          />
        </div>
      </Container>
    </div>
  );
}
