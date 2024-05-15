import { useParams } from "react-router-dom";
import Container from "../components/Container";
import Heading from "../components/Heading";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";

export default function PenResult() {
  const { id } = useParams();
  const host = import.meta.env.VITE_SERVER_HOST;
  const port = import.meta.env.VITE_SERVER_PORT;
  const [status, setStatus] = useState("PENDING");
  const [result, setResult] = useState(null);
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
        setResult(data.result);
      }
    }, 5000);

    return () => {
      clearInterval(intervalId); // Clean up the interval when the component unmounts
    };
  }, [id, host, port]);
  if (result) {
    const data = cleanData(result);
  }
  return (
    <Container className="bg-white h-3/4">
      <Heading className="text-blue font-bold mb-16">Results</Heading>
      <div className="text-center">
        {status != "SUCCESS" ? status + "..." : "s"}
      </div>
    </Container>
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
