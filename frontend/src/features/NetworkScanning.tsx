import { Link, useNavigate } from "react-router-dom";
import Container from "../components/Container";
import Heading from "../components/Heading";
import Paragraph from "../components/Paragraph";
import Cookies from "js-cookie";

export default function NetworkScanning() {
  const host = import.meta.env.VITE_SERVER_HOST;
  const port = import.meta.env.VITE_SERVER_PORT;
  const navigate = useNavigate();
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    let stealth = false;
    if (e.target.stealth.value == "True") stealth = true;

    const accessToken = Cookies.get("accessToken");
    const testOptions = {
      task_field: "penetration_test",
      task_type: "network_scan",
      task_params: {
        host: e.target.IP.value,
        stealthy: stealth,
        port_range: [e.target.minRange.value, e.target.maxRange.value],
      },
    };

    const response = await fetch(
      `http://${host}:${port}/api/v1/test/run-test`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify(testOptions),
      }
    );
    const data = await response.json();

    if (response.status == 200) {
      navigate(`/test/result/${data.task_id}`);
    }
  }
  return (
    <div className="bg-neutral-100 w-full h-full md:h-screen ">
      <Container className="bg-white">
        <Heading className="text-blue font-bold">Penetration Testing</Heading>
        <Paragraph className="font-medium">
          Test The Server Network Security
        </Paragraph>

        <form onSubmit={handleSubmit} className="flex flex-col m-10">
          <Paragraph className="font-semibold">IP address</Paragraph>
          <input
            type="text"
            name="IP"
            required
            className="p-4 mb-2 md:text-xl bg-skyblue w-1/2 text-blue font-medium focus:outline-skyblue rounded-md"
          />

          <Paragraph className="font-semibold">Stealth</Paragraph>
          <p className=" text-warning font-medium text-xs mb-2">
            Do you want to run this test as stealthily as possible to avoid
            being detected?
          </p>

          <select
            name="stealth"
            className="p-4 mb-2 md:text-xl bg-skyblue w-1/2 text-blue font-medium focus:outline-skyblue rounded-md"
          >
            <option selected>False</option>
            <option>True</option>
          </select>

          <div>
            <Paragraph className="font-semibold">Port Range</Paragraph>
            <p className=" text-warning font-medium text-xs mb-3">
              Maximum Port Range is 65535
            </p>
            <div className="flex w-1/2 justify-between">
              <div className=" w-2/5">
                <p className="font-medium">From</p>
                <input
                  type="text"
                  name="minRange"
                  defaultValue={1}
                  className="p-4 md:text-xl bg-skyblue text-blue font-medium focus:outline-skyblue rounded-md w-full"
                />
              </div>
              <div className=" w-2/5">
                <p className="font-medium">To</p>
                <input
                  type="text"
                  name="maxRange"
                  defaultValue={1000}
                  className="p-4 mb-12 md:text-xl bg-skyblue text-blue font-medium focus:outline-skyblue rounded-md w-full"
                />
              </div>
            </div>
            <button className="md:p-2 ml-auto mt-auto text-white text-center text-lg font-medium bg-blue rounded-full w-1/4 md:w-1/12">
              Run
            </button>
          </div>
        </form>
      </Container>
    </div>
  );
}
