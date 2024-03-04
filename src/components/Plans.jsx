import React from "react";
import { PlansData } from "../data/PlansData.jsx";
import whitetick from "../assets/whiteTick.png";

function Plans() {
  return (
    //   plans-conatiner
    <div className="bg-gray-600 mt-[-4rem] px-0 py-8 flex flex-col gap-16 relative ">
      <div className="bg-orange-500 bg-opacity-90 absolute rounded-full filter blur-[150px] z-auto w-[32rem] h-[30rem] top-[6rem] left-[0rem]"></div>
      <div className="bg-orange-500 bg-opacity-90 absolute rounded-full filter blur-[150px] z-auto w-[27rem] h-[27rem] top-[10rem] right-[0rem]"></div>
      {/* plans-header */}
      <div className="flex gap-24 font-bold text-5xl justify-center text-white uppercase italic">
        <span className="stroke-text">READY TO START</span>
        <span>YOUR JOURNEY</span>
        <span className="stroke-text">NOW WITHUS</span>
      </div>
      {/* plans card */}
      <div className="flex items-center justify-center gap-[3rem]  ">
        {PlansData.map((plan, i) => (
          <div
            className="flex flex-col bg-gray-500 text-white gap-[2rem] p-[2rem] w-[22rem] bg-gradient-to-r hover:from-orange-400 hover:to-orange-600 
            hover:fill-white cursor-pointer scale-y-110   object-cover transition-transform duration-300 transform hover:scale-110"
            key={i}
          >
            {plan.icon}

            <span className="font-bold text-2xl italic ">{plan.name}</span>
            <span className="text-5xl font-bold">${plan.price}</span>

            <div className="px-">
              {plan.features.map((feature, i) => (
                <div className="flex py-2 space-x-2">
                  <img className="w-[1.5rem]" src={whitetick} alt="" />
                  <span className="font-extrabold" key={i}>
                    {feature}
                  </span>
                </div>
              ))}
            </div>

            <div>
              <span className="text-2xl italic">See more benefits - </span>
            </div>
            <button className="btn">Join Now</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Plans;
