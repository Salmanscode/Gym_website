import React, { useState } from "react";
import { TestimonialsData } from "../data/TestimonialsData";
import rightarrow from "../assets/rightArrow.png";
import leftarrow from "../assets/leftArrow.png";

function Testimonials() {
  const [selected, setSelected] = useState(0);
  const tLength = TestimonialsData.length;
  return (
    <div className="flex bg-gray-600 gap-[1rem] px-9 py-6">
      {/* left-t */}
      <div className=" flex w-1/2 gap-[1rem] flex-col uppercase text-white ">
        <span className="text-orange-500 font-bold text-xl">Testimonials</span>
        <span className="stroke-text font-bold text-[3.5rem] ">What they</span>
        <span className="font-bold text-[3.5rem]">say about us</span>
        {/* TestimonialsData part */}
        <span className="normal-case text-justify  font-bold tracking-widest leading-10 ">
          {TestimonialsData[selected].review}
        </span>
        <span className="font-semibold">
          <span className="text-orange-500">
            {TestimonialsData[selected].name}{" "}
          </span>
          - {TestimonialsData[selected].status}
        </span>
      </div>
      {/* right-t */}
      {/* image-div */}
      <div className="flex-grow relative">
        <div className="absolute w-[17rem] h-[20rem] border-2 border-solid border-orange-400 bg-transparent right-[10rem] top-[0.9rem] "></div>
        <div className="absolute w-[17rem] h-[19rem] right-[8rem] top-[4rem] bg-gradient-to-r from-yellow-400 to-orange-500 "></div>
        {/* image */}
        <img
          className="absolute w-[17rem] h-[20rem] object-cover right-[9rem] top-[2rem] "
          src={TestimonialsData[selected].image}
          alt=""
        />
        {/* arrow */}
        <div className="flex gap-[1rem] absolute bottom-[1rem] left-[3rem]">
          <img
            className="w-[1.5rem] cursor-pointer   object-cover transition-transform duration-300 transform hover:scale-110"
            onClick={() => {
              setSelected(selected === 0 ? tLength - 1 : selected - 1);
            }}
            src={leftarrow}
            alt=""
          />
          <img
            className="w-[1.5rem] cursor-pointer  object-cover transition-transform duration-300 transform hover:scale-110"
            onClick={() => {
              setSelected(selected === tLength - 1 ? 0 : selected + 1);
            }}
            src={rightarrow}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
