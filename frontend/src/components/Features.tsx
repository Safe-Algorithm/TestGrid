import SectionHeading from "./SectionHeading";

export default function Features() {
  return (
    <div className="mt-16">
      <SectionHeading title="Plans" />
      <div className="flex flex-col md:grid md:grid-rows-3 md:grid-cols-2 gap-5 p-5 sm:p-0 sm:w-10/12 m-auto mt-2">
        <span className="md:row-start-1 md:row-end-4 md:col-start-1 md:col-end-2 border-4 border-blue rounded-default card-shadow h-[200px] md:h-[450px]">
          <div className="flex item-center">
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
        </span>

        <span className="md:row-start-1 md:row-end-2 md:col-start-2 md:col-end-3 border-4 border-green md:border-blue rounded-default h-[200px] md:h-auto md:card-shadow">
          2nd card
        </span>
        <span className="md:row-start-2 md:row-end-3 md:col-start-2 md:col-end-3 border-4 border-green rounded-default h-[200px] md:h-auto">
          3rd card
        </span>
        <span className="hidden md:block md:row-start-3 md:row-end-4 md:col-start-2 md:col-end-3 border-4 border-green rounded-default h-[200px] md:h-auto">
          4th card
        </span>
      </div>
    </div>
  );
}
