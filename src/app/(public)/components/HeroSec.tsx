import React from "react";

function HeroSec() {
  return (
    <div className="lg:mx-20 md:mx-16 sm:mx-8 mx-4">
      <div>
        <h2 className="text-white text-2xl font-bold my-10 sm:text-start text-center">
          What I Do
        </h2>
        <p className="text-white lg:text-6xl md:text4xl sm:text-3xl text-xl font-bold lg:w-[900px] sm:text-start text-center">
          I explain and teach technology, solve tech problems and help you make
          gadget buying decisions.
        </p>
      </div>
      <div className="flex flex-col gap-y-5 mb-10">
        <p className="uppercase mt-20 text-white lg:text-2xl text-lg font-bold sm:text-start text-center">
          Subscribe to Our Newsletter
        </p>
        <div className="flex gap-x-5 sm:flex-row flex-col gap-y-5 md:items-start items-center">
          <input
            type="email"
            placeholder="Email address"
            className="outline-none p-3 lg:w-[40%] md:w-[40%] sm:w-[50%]  w-[80%]"
          />
          <button className="uppercase bg-[#17b909] p-3 w-36 text-white">Submit</button>
        </div>
      </div>
    </div>
  );
}

export default HeroSec;
