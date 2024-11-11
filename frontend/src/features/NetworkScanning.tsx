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
      navigate(`result/${data.task_id}`);
    }
  }
  return (
    <div className="bg-neutral-100 col-start-1 md:col-start-2 col-end-3 row-start-2 row-end-3 p-4">
      <section className="bg-white p-4 rounded-default">
      <p className="mb-2 text-blue text-2xl md:text-4xl font-bold">Penetration Testing</p>
        <Paragraph className="font-medium">
          Test The Server Network Security
        </Paragraph>

        <form onSubmit={handleSubmit} className="flex flex-col w-full mt-10">
          <Paragraph className="font-semibold">IP address</Paragraph>
          <input
            type="text"
            name="IP"
            required
            className="w-full p-4 mb-2 md:text-xl text-blue font-medium focus:outline-blue-200 focus:outline-4 focus:border-none rounded-md"
          />

          <Paragraph className="font-semibold">Stealth</Paragraph>
          <p className="text-warning font-medium text-xs mb-2">
            Do you want to run this test as stealthily as possible to avoid
            being detected?
          </p>

          <select
            name="stealth"
            className="w-full p-4 mb-2 md:text-xl text-blue font-medium focus:outline-blue-200 focus:outline-4 focus:border-none rounded-md"
          >
            <option selected>False</option>
            <option>True</option>
          </select>

          <div>
            <Paragraph className="font-semibold">Port Range</Paragraph>
            <p className=" text-warning font-medium text-xs mb-3">
              Maximum Port Range is 65535
            </p>
            <div className="flex flex-row flex-wrap md:flex-nowrap w-full gap-2">
              <div className="w-full">
                <p className="font-medium mb-2">From</p>
                <input
                  type="text"
                  name="minRange"
                  defaultValue={1}
                  className="w-full p-4 md:text-xl text-blue font-medium focus:outline-blue-200 focus:outline-4 focus:border-none rounded-md"
                />
              </div>
              <div className="w-full">
                <p className="font-medium mb-2">To</p>
                <input
                  type="text"
                  name="maxRange"
                  defaultValue={1000}
                  className="w-full p-4 mb-12 md:text-xl text-blue font-medium focus:outline-blue-200 focus:outline-4 focus:border-none rounded-md"
                />
              </div>
            </div>
            <button className="w-32 p-2 border-blue border-2 ml-auto mt-auto text-white text-center text-lg font-medium bg-blue rounded-full transition-colors hover:bg-green hover:text-blue hover:border-blue hover:border-2">
              Run
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}
