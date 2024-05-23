import Container from "../components/Container";
import Cookies from "js-cookie";

import { useEffect, useState } from "react";
import HistoryCard from "../components/HistoryCard";

export default function TestHistory() {
  const [data, setData] = useState();
  const host = import.meta.env.VITE_SERVER_HOST;
  const port = import.meta.env.VITE_SERVER_PORT;

  useEffect(() => {
    const accessToken = Cookies.get("accessToken");
    async function firstRequest() {
      const response = await fetch(
        `http://${host}:${port}/api/v1/test/user-tests`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      setData(await response.json());
    }
    firstRequest();
    const intervalId = setInterval(async function () {
      const response = await fetch(
        `http://${host}:${port}/api/v1/test/user-tests`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      setData(await response.json());
    }, 5000);

    return () => {
      clearInterval(intervalId); // Clean up the interval when the component unmounts
    };
  }, [host, port]);

  return (
    <div className="bg-neutral-100 pb-12">
      <Container className="bg-white m-2 w-11/12 py-4">
        <div className="m-4">
          <p className="mb-12 md:mb-18 text-black text-2xl md:text-4xl font-bold">
            Testing History
          </p>

          {data &&
            data.map((e, index) => {
              return (
                <HistoryCard
                  name={`Test ${index + 1}`}
                  status={e.status}
                  date={e.updated_at}
                  id={e.task_celery_id}
                />
              );
            })}
        </div>
      </Container>
    </div>
  );
}
