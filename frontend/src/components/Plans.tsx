import { useState } from "react";
import Container from "./Container";
import Heading from "./Heading";
import Paragraph from "./Paragraph";
import SectionHeading from "./SectionHeading";

export default function Plans() {
  const [activePlan, setActivePlan] = useState(1)<number>;
  const handleActivePlan = (index) => {
    setActivePlan(index);
    // event.target.classList.add("card-shadow", "border-blue");
  };
  return (
    <section className="mt-16" id="plans">
      <SectionHeading title="Plans" />

      <Container>
        <div className="flex flex-col md:grid md:grid-rows-3 md:grid-cols-2 gap-5 p-5">
          {/* start plan features */}
          <span className="relative flex-col hidden md:flex md:row-start-1 md:row-end-4 md:col-start-1 md:col-end-2 border-4 border-blue rounded-default p-1 card-shadow min-h-[150px] md:h-[550px]">
            {activePlan == 1 && (
              <ul className="p-2 flex flex-col gap-5 mt-3 md:h-full md:mt-0 md:gap-8">
                <li className="flex items-center mt-8">
                  <img
                    className="w-[2rem] lg:w-[3rem]"
                    src="./images/tick-icon.svg"
                    alt=""
                  />
                  <Paragraph className="ml-2 lg:ml-4 text-blue">
                    feature of free plan 1
                  </Paragraph>
                </li>
                <li className="flex items-center">
                  <img
                    className="w-[2rem] lg:w-[3rem]"
                    src="./images/tick-icon.svg"
                    alt=""
                  />
                  <Paragraph className="ml-2 lg:ml-4 text-blue">
                    feature of free plan 1
                  </Paragraph>
                </li>
                <li className="flex items-center">
                  <img
                    className="w-[2rem] lg:w-[3rem]"
                    src="./images/tick-icon.svg"
                    alt=""
                  />
                  <Paragraph className="ml-2 lg:ml-4 text-blue">
                    feature of free plan 1
                  </Paragraph>
                </li>
              </ul>
            )}
            {activePlan == 2 && (
              <ul className="p-2 flex flex-col gap-5 mt-3 md:h-full md:mt-0 md:gap-8">
                <li className="flex items-center mt-8">
                  <img
                    className="w-[2rem] lg:w-[3rem]"
                    src="./images/tick-icon.svg"
                    alt=""
                  />
                  <Paragraph className="ml-2 lg:ml-4 text-blue">
                    feature of free plan 2
                  </Paragraph>
                </li>
                <li className="flex items-center">
                  <img
                    className="w-[2rem] lg:w-[3rem]"
                    src="./images/tick-icon.svg"
                    alt=""
                  />
                  <Paragraph className="ml-2 lg:ml-4 text-blue">
                    feature of free plan 2
                  </Paragraph>
                </li>
                <li className="flex items-center">
                  <img
                    className="w-[2rem] lg:w-[3rem]"
                    src="./images/tick-icon.svg"
                    alt=""
                  />
                  <Paragraph className="ml-2 lg:ml-4 text-blue">
                    feature of free plan 2
                  </Paragraph>
                </li>
                <li className="flex items-center">
                  <img
                    className="w-[2rem] lg:w-[3rem]"
                    src="./images/tick-icon.svg"
                    alt=""
                  />
                  <Paragraph className="ml-2 lg:ml-4 text-blue">
                    feature of free plan 2
                  </Paragraph>
                </li>
              </ul>
            )}
            {activePlan == 3 && (
              <ul className="p-2 flex flex-col gap-5 mt-3 md:h-full md:mt-0 md:gap-8">
                <li className="flex items-center mt-8">
                  <img
                    className="w-[2rem] lg:w-[3rem]"
                    src="./images/tick-icon.svg"
                    alt=""
                  />
                  <Paragraph className="ml-2 lg:ml-4 text-blue">
                    feature of free plan 3
                  </Paragraph>
                </li>
                <li className="flex items-center">
                  <img
                    className="w-[2rem] lg:w-[3rem]"
                    src="./images/tick-icon.svg"
                    alt=""
                  />
                  <Paragraph className="ml-2 lg:ml-4 text-blue">
                    feature of free plan 3
                  </Paragraph>
                </li>
                <li className="flex items-center">
                  <img
                    className="w-[2rem] lg:w-[3rem]"
                    src="./images/tick-icon.svg"
                    alt=""
                  />
                  <Paragraph className="ml-2 lg:ml-4 text-blue">
                    feature of free plan 3
                  </Paragraph>
                </li>
                <li className="flex items-center">
                  <img
                    className="w-[2rem] lg:w-[3rem]"
                    src="./images/tick-icon.svg"
                    alt=""
                  />
                  <Paragraph className="ml-2 lg:ml-4 text-blue">
                    feature of free plan 3
                  </Paragraph>
                </li>
                <li className="flex items-center">
                  <img
                    className="w-[2rem] lg:w-[3rem]"
                    src="./images/tick-icon.svg"
                    alt=""
                  />
                  <Paragraph className="ml-2 lg:ml-4 text-blue">
                    feature of free plan 3
                  </Paragraph>
                </li>
              </ul>
            )}
            {/* <img
              className="absolute -bottom-[3px] -left-[1px] hidden md:block"
              src="./images/saving-icon.svg"
              alt=""
            /> */}
          </span>
          {/* end plan features */}
          {/* start of first plan */}
          <span
            onClick={() => handleActivePlan(1)}
            className={`p-1 md:block md:row-start-1 md:row-end-2 md:col-start-2 md:col-end-3 rounded-default border-4 min-h-[150px] md:h-auto cursor-pointer transition-colors ${
              activePlan == 1
                ? "card-shadow border-4 border-blue"
                : "hover:border-blue border-green"
            }`}
          >
            <div className="grid md:h-full">
              <div className="flex items-start col-start-1 col-end-2">
                <img
                  className="w-[3rem] lg:w-[54px]"
                  src="./images/astrick-icon.svg"
                  alt=""
                />
                <Heading className="font-extrabold tracking-wider mt-2 ml-1 text-blue stroke">
                  INTRO
                </Heading>
              </div>
              <div className="flex justify-end grow col-start-2 col-end-3">
                <Paragraph className="font-bold m-2 italic">
                  FREE/LIFETIME
                </Paragraph>
              </div>
              {activePlan == 1 && (
                <ul className="flex p-2 flex-col gap-5 mt-3 md:h-full md:mt-0 md:gap-8 md:hidden">
                  <li className="flex items-center mt-8">
                    <img
                      className="w-[2rem] lg:w-[3rem]"
                      src="./images/tick-icon.svg"
                      alt=""
                    />
                    <Paragraph className="ml-2 lg:ml-4 text-blue">
                      feature of free plan 1
                    </Paragraph>
                  </li>
                  <li className="flex items-center">
                    <img
                      className="w-[2rem] lg:w-[3rem]"
                      src="./images/tick-icon.svg"
                      alt=""
                    />
                    <Paragraph className="ml-2 lg:ml-4 text-blue">
                      feature of free plan 1
                    </Paragraph>
                  </li>
                  <li className="flex items-center">
                    <img
                      className="w-[2rem] lg:w-[3rem]"
                      src="./images/tick-icon.svg"
                      alt=""
                    />
                    <Paragraph className="ml-2 lg:ml-4 text-blue">
                      feature of free plan 1
                    </Paragraph>
                  </li>
                </ul>
              )}
            </div>
          </span>
          {/* end of first plan */}
          {/* start of second plan */}
          <span
            onClick={() => handleActivePlan(2)}
            className={`flex flex-col justify-center md:block md:row-start-2 md:row-end-3 md:col-start-2 md:col-end-3 border-4 rounded-default p-1 min-h-[150px] md:h-auto cursor-pointer transition-colors ${
              activePlan == 2
                ? "card-shadow border-4 border-blue"
                : "hover:border-blue border-green"
            }`}
          >
            <div className="grid md:h-full">
              <div className="flex items-start col-start-1 col-end-2">
                <img
                  className="w-[3rem] lg:w-[54px]"
                  src="./images/astrick-icon.svg"
                  alt=""
                />
                <Heading className="font-extrabold tracking-wider mt-2 ml-1 text-blue stroke">
                  BASIC
                </Heading>
              </div>
              <div className="flex justify-end grow col-start-2 col-end-3">
                <Paragraph className="font-bold m-2 italic">5$/MONTH</Paragraph>
              </div>
              {activePlan == 2 && (
                <ul className="p-2 flex flex-col gap-5 mt-3 md:h-full md:mt-0 md:gap-8 md:hidden">
                  <li className="flex items-center mt-8">
                    <img
                      className="w-[2rem] lg:w-[3rem]"
                      src="./images/tick-icon.svg"
                      alt=""
                    />
                    <Paragraph className="ml-2 lg:ml-4 text-blue">
                      feature of free plan 2
                    </Paragraph>
                  </li>
                  <li className="flex items-center">
                    <img
                      className="w-[2rem] lg:w-[3rem]"
                      src="./images/tick-icon.svg"
                      alt=""
                    />
                    <Paragraph className="ml-2 lg:ml-4 text-blue">
                      feature of free plan 2
                    </Paragraph>
                  </li>
                  <li className="flex items-center">
                    <img
                      className="w-[2rem] lg:w-[3rem]"
                      src="./images/tick-icon.svg"
                      alt=""
                    />
                    <Paragraph className="ml-2 lg:ml-4 text-blue">
                      feature of free plan 2
                    </Paragraph>
                  </li>
                  <li className="flex items-center">
                    <img
                      className="w-[2rem] lg:w-[3rem]"
                      src="./images/tick-icon.svg"
                      alt=""
                    />
                    <Paragraph className="ml-2 lg:ml-4 text-blue">
                      feature of free plan 2
                    </Paragraph>
                  </li>
                </ul>
              )}
            </div>
          </span>
          {/* end of second plan */}

          {/* start of third plan */}
          <span
            onClick={() => handleActivePlan(3)}
            className={`flex flex-col cursor-pointer justify-center md:block md:row-start-3 md:row-end-4 md:col-start-2 md:col-end-3 border-4 rounded-default p-1 min-h-[150px] md:h-auto transition-colors ${
              activePlan == 3
                ? "card-shadow border-4 border-blue"
                : "hover:border-blue border-green"
            }`}
          >
            <div className="grid md:h-full">
              <div className="flex items-start col-start-1 col-end-2">
                <img
                  className="w-[3rem] lg:w-[54px]"
                  src="./images/astrick-icon.svg"
                  alt=""
                />
                <Heading className="font-extrabold tracking-wider mt-2 ml-1 text-blue stroke">
                  ENTERPRISE
                </Heading>
              </div>
              <div className="flex justify-end grow col-start-2 col-end-3">
                <Paragraph className="font-bold m-2 italic">
                  10$/MONTH
                </Paragraph>
              </div>
              {activePlan == 3 && (
                <ul className="p-2 flex flex-col gap-5 mt-3 md:h-full md:mt-0 md:gap-8 md:hidden">
                  <li className="flex items-center mt-8">
                    <img
                      className="w-[2rem] lg:w-[3rem]"
                      src="./images/tick-icon.svg"
                      alt=""
                    />
                    <Paragraph className="ml-2 lg:ml-4 text-blue">
                      feature of free plan 3
                    </Paragraph>
                  </li>
                  <li className="flex items-center">
                    <img
                      className="w-[2rem] lg:w-[3rem]"
                      src="./images/tick-icon.svg"
                      alt=""
                    />
                    <Paragraph className="ml-2 lg:ml-4 text-blue">
                      feature of free plan 3
                    </Paragraph>
                  </li>
                  <li className="flex items-center">
                    <img
                      className="w-[2rem] lg:w-[3rem]"
                      src="./images/tick-icon.svg"
                      alt=""
                    />
                    <Paragraph className="ml-2 lg:ml-4 text-blue">
                      feature of free plan 3
                    </Paragraph>
                  </li>
                  <li className="flex items-center">
                    <img
                      className="w-[2rem] lg:w-[3rem]"
                      src="./images/tick-icon.svg"
                      alt=""
                    />
                    <Paragraph className="ml-2 lg:ml-4 text-blue">
                      feature of free plan 3
                    </Paragraph>
                  </li>
                  <li className="flex items-center">
                    <img
                      className="w-[2rem] lg:w-[3rem]"
                      src="./images/tick-icon.svg"
                      alt=""
                    />
                    <Paragraph className="ml-2 lg:ml-4 text-blue">
                      feature of free plan 3
                    </Paragraph>
                  </li>
                </ul>
              )}
            </div>
          </span>
          {/* end of third plan */}
        </div>
      </Container>
    </section>
  );
}
