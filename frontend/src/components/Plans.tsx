import SectionHeading from "./SectionHeading";

export default function Plans() {
  return (
    <section className="mt-16">
      <SectionHeading title="Plans" />
      <div className="flex flex-col md:grid md:grid-rows-3 md:grid-cols-2 gap-5 p-5 sm:p-0 sm:w-10/12 m-auto mt-8">
        <span className="flex relative flex-col md:block md:row-start-1 md:row-end-4 md:col-start-1 md:col-end-2 border-4 border-blue rounded-default p-1 card-shadow min-h-[150px] md:h-auto">
          <div className="flex item-center md:hidden">
            <div className="flex">
              <img
                className="w-[3rem]"
                src="./images/astrick-icon.svg"
                alt=""
              />
              <h1 className="font-extrabold tracking-wider text-xl mt-2 ml-1 text-blue">
                INTRO
              </h1>
            </div>
            <div className="flex justify-end grow">
              <h1 className="font-bold text-lg m-2">FREE/LIFETIME</h1>
            </div>
          </div>
          <ul className="p-2 flex flex-col gap-5 mt-3 md:h-full md:mt-0 md:gap-8 lg:gap-16">
            <li className="flex items-center mt-8">
              <img
                className="w-[2rem] lg:w-[3rem]"
                src="./images/tick-icon.svg"
                alt=""
              />
              <p className="ml-2 lg:ml-4 text-blue md:text-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
              </p>
            </li>
            <li className="flex items-center">
              <img
                className="w-[2rem] lg:w-[3rem]"
                src="./images/tick-icon.svg"
                alt=""
              />
              <p className="ml-2 lg:ml-4 text-blue md:text-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
              </p>
            </li>
            <li className="flex items-center">
              <img
                className="w-[2rem] lg:w-[3rem]"
                src="./images/tick-icon.svg"
                alt=""
              />
              <p className="ml-2 lg:ml-4 text-blue md:text-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
              </p>
            </li>
          </ul>
          <img
            className="absolute -bottom-[3px] -left-[1px] hidden md:block"
            src="./images/saving-icon.svg"
            alt=""
          />
        </span>

        <span className="flex flex-col justify-center md:block md:row-start-2 md:row-end-3 md:col-start-2 md:col-end-3 border-4 border-green rounded-default p-1 min-h-[150px] md:h-auto">
          <div className="flex item-center md:h-full md:items-center">
            <div className="flex">
              <img
                className="w-[3rem] lg:w-[54px]"
                src="./images/astrick-icon.svg"
                alt=""
              />
              <h1 className="font-extrabold tracking-wider text-xl lg:text-3xl mt-2 ml-1 text-blue stroke">
                BASIC
              </h1>
            </div>
            <div className="flex justify-end grow">
              <h1 className="font-bold text-lg lg:text-xl m-2 italic">
                5$/MONTH
              </h1>
            </div>
          </div>
          {/* <ul className="p-2 flex flex-col gap-5 mt-3">
          <li className="flex">
            <img className="w-[2rem]" src="./images/tick-icon.svg" alt="" />
            <p className="ml-2 text-blue">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
            </p>
          </li>
          <li className="flex">
            <img className="w-[2rem]" src="./images/tick-icon.svg" alt="" />
            <p className="ml-2 text-blue">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
            </p>
          </li>
          <li className="flex">
            <img className="w-[2rem]" src="./images/tick-icon.svg" alt="" />
            <p className="ml-2 text-blue">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
            </p>
          </li>
        </ul> */}
        </span>
        <span className="flex flex-col justify-center md:block md:row-start-3 md:row-end-4 md:col-start-2 md:col-end-3 border-4 border-green rounded-default p-1 min-h-[150px] md:h-auto">
          <div className="flex item-center md:h-full md:items-center">
            <div className="flex">
              <img
                className="w-[3rem] lg:w-[54px]"
                src="./images/astrick-icon.svg"
                alt=""
              />
              <h1 className="font-extrabold tracking-wider text-xl lg:text-3xl mt-2 ml-1 text-blue stroke">
                ENTERPRISE
              </h1>
            </div>
            <div className="flex justify-end grow">
              <h1 className="font-bold text-lg lg:text-xl m-2 italic">
                10$/MONTH
              </h1>
            </div>
          </div>
          {/* <ul className="p-2 flex flex-col gap-5 mt-3">
          <li className="flex">
            <img className="w-[2rem]" src="./images/tick-icon.svg" alt="" />
            <p className="ml-2 text-blue">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
            </p>
          </li>
          <li className="flex">
            <img className="w-[2rem]" src="./images/tick-icon.svg" alt="" />
            <p className="ml-2 text-blue">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
            </p>
          </li>
          <li className="flex">
            <img className="w-[2rem]" src="./images/tick-icon.svg" alt="" />
            <p className="ml-2 text-blue">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
            </p>
          </li>
        </ul> */}
        </span>
        <span className="hidden p-1 md:block md:row-start-1 md:row-end-2 md:col-start-2 md:col-end-3 card-shadow border-4 border-blue rounded-default h-[200px] md:h-auto">
          <div className="flex items-center md:h-full md:items-center">
            <div className="flex">
              <img
                className="w-[3rem] lg:w-[54px]"
                src="./images/astrick-icon.svg"
                alt=""
              />
              <h1 className="font-extrabold tracking-wider text-xl lg:text-3xl mt-2 ml-1 text-blue stroke">
                INTRO
              </h1>
            </div>
            <div className="flex justify-end grow">
              <h1 className="font-bold text-lg m-2 lg:text-xl italic">
                FREE/LIFETIME
              </h1>
            </div>
          </div>
        </span>
      </div>
    </section>
  );
}
