import React from "react";
import { programsData } from "../data/ProgramsData";
import rightarrow from "../assets/rightArrow.png";
function Programs() {
  return (
    <div className="flex bg-gray-600 flex-col gap-8 px-0 py-8">
      {/* Header */}
      <div className="flex gap-24 font-bold text-6xl justify-center text-white uppercase italic">
        <span className="stroke-text">Explore our</span>
        <span>Programs</span>
        <span className="stroke-text">to shape you</span>
      </div>
      <div className="flex gap-4 ">
        {programsData.map((program) => (
          // catogory
          <div className="flex flex-col text-white bg-gray-500 p-8 gap-4 justify-between  bg-gradient-to-r hover:from-orange-400 hover:to-orange-600 cursor-pointer">
            <div className="w-8 h-4 fill-white ">{program.image}</div> <br />
            <span className="text-lg font-bold ">{program.heading}</span>
            <span className="text-base font-semibold leading-6 italic">
              {program.details}
            </span>
            <div className="flex items-center gap-8">
              <span className="font-extrabold">Join Now</span>
              <img className="w-6" src={rightarrow} alt="" />
            </div>
          </div>
        ))}
        ;
      </div>
    </div>
  );
}

export default Programs;
