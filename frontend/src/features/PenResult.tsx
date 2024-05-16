import { Link, useParams } from "react-router-dom";
import Container from "../components/Container";
import Heading from "../components/Heading";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import ResultSmallCard from "../components/ResultSmallCard";
import TimeIcon from "../assets/Time.svg";
import StatusIcon from "../assets/Status.svg";
import OSIcon from "../assets/OS.svg";
import ResultBigCard from "../components/ResultBigCard";

export default function PenResult() {
  const { id } = useParams();
  const host = import.meta.env.VITE_SERVER_HOST;
  const port = import.meta.env.VITE_SERVER_PORT;
  const [status, setStatus] = useState("PENDING");
  const [result, setResult] = useState();
  useEffect(() => {
    const intervalId = setInterval(async function () {
      const accessToken = Cookies.get("accessToken");

      const response = await fetch(`http://${host}:${port}/api/v1/test/${id}`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      const data = await response.json();
      setStatus(data.status);
      if (data.status == "SUCCESS") {
        clearInterval(intervalId);
        const cleanedData = cleanData(data.result);
        setResult(cleanedData);
      }
    }, 5000);

    return () => {
      clearInterval(intervalId); // Clean up the interval when the component unmounts
    };
  }, [id, host, port]);

  return (
    <div className="bg-neutral-100 pb-12">
      <Container className="bg-white m-2 w-11/12 py-4">
        <div className="m-4">
          <div className="flex justify-between">
            <p className="mb-12 md:mb-18 text-black text-2xl md:text-4xl font-bold">
              Testing Results
            </p>
            <Link to="" className="text-blue underline text-lg font-medium">
              Testing History
            </Link>
          </div>
          <div className="text-center text-blue">
            {status != "SUCCESS" ? status + "..." : ""}
          </div>
          {result && (
            <>
              <p className="text-blue font-bold mb-4 text-xl md:text-3xl">
                Info
              </p>
              <div className="grid md:grid-cols-2 2xl:grid-cols-4 gap-2 mb-12">
                {result.elapsed && (
                  <ResultSmallCard
                    name="Elapsed Time"
                    value={result.elapsed}
                    icon={TimeIcon}
                  />
                )}
                {result.status && (
                  <ResultSmallCard
                    name="Status"
                    value={result.status}
                    icon={StatusIcon}
                  />
                )}
                {result.ostype && (
                  <ResultSmallCard
                    name="OS"
                    value={result.ostype}
                    icon={OSIcon}
                  />
                )}
                {result.numOfServices && (
                  <ResultSmallCard
                    name="Number Of Services"
                    value={result.numOfServices}
                    icon={OSIcon}
                  />
                )}
              </div>
              <p className="text-darkgreen font-bold mb-4 text-xl md:text-3xl">
                Services
              </p>
              <div className="grid lg:grid-cols-2 gap-4 mb-4">
                {result.services &&
                  result.services.map((service) => {
                    return (
                      <ResultBigCard
                        serviceName={service.name}
                        version={service.version}
                        productName={service.product}
                        portID={service.portid}
                      />
                    );
                  })}
              </div>
            </>
          )}
        </div>
      </Container>
    </div>
  );
}

function cleanData(result: object) {
  const timeInSeconds =
    result.result.nmaprun.runstats.finished["@elapsed"] || null;
  const time = beautifyTime(timeInSeconds);
  const serverStatus = result.result.nmaprun.host.status["@state"] || null;
  const port = result.result.nmaprun.host.ports.port || null;
  let os = null;
  let numOfServices = 0;
  let services = null;
  if (port) {
    if (Array.isArray(port)) {
      numOfServices = port.length;
      services = port.map((e) => {
        if (!os && e.service["@ostype"]) {
          os = e.service["@ostype"];
        }
        return {
          portid: e["@portid"] || null,
          name: e.service["@name"] || null,
          product: e.service["@product"] || null,
          version: e.service["@version"] || null,
        };
      });
    } else {
      numOfServices = 1;
      os = port.service["@ostype"] || null;
      services = [
        {
          portid: port["@portid"] || null,
          name: port.service["@name"] || null,
          product: port.service["@product"] || null,
          version: port.service["@version"] || null,
        },
      ];
    }
  }
  return {
    elapsed: time,
    status: serverStatus,
    ostype: os,
    numOfServices,
    services,
  };
}

function beautifyTime(timeInSeconds: string) {
  const elapsed = parseFloat(timeInSeconds);
  if (elapsed < 60) {
    return `${Math.floor(elapsed)} Seconds`;
  } else if (elapsed < 3600) {
    const minutes = Math.round(elapsed / 60);
    return `${minutes} Mins`;
  } else if (elapsed < 86400) {
    const hours = Math.round(elapsed / 3600);
    return `${hours} Hrs`;
  } else {
    const days = Math.round(elapsed / 86400);
    return `${days} Days`;
  }
}
