import React from "react";

export default function Header() {
  return (
    <div className="p-5 sm:p-0 sm:w-10/12 m-auto mt-2">
      <header className="relative border-4 border-black rounded-default p-3 min-h-[26rem] sm:min-h-[28rem] header-shadow md:flex">
        <div className="md:w-1/2 lg:w-auto md:pt-16">
          <h1 className="font-extrabold text-3xl sm:text-5xl lg:text-6xl text-blue">
            Centralized Website Testing
            <img
              src="./images/discover-icon.svg"
              className="inline ml-3 mt-1"
              alt="icon"
            />
          </h1>
          <p className="mt-4 lg:mt-8 text-black text-md sm:text-lg lg:text-2xl leading-8 lg:leading-10 xl:w-[77%]">
            Our platform serves as a robust tool designed to fortify websites
            against security breaches and optimize their performance under heavy
            user traffic.
          </p>
          <button className="inline bg-green border-2 lg:text-lg border-black font-bold text-black p-2 lg:p-3 mt-10 lg:mt-22 sm:w-[11rem] lg:w-72 rounded-default">
            Get Started
          </button>
        </div>

        <div className="absolute bottom-0 sm:-bottom-1 right-0 md:static md:w-1/2 lg:w-auto">
          <img
            src="./images/homepage-illustration-01.svg"
            className="w-[11rem] sm:w-[15rem] md:w-96 lg:w-[78rem]"
            alt=""
          />
        </div>
      </header>
    </div>
  );
}
