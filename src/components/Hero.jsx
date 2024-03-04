import React from "react";
import Header from "./Header";
import heroimage from "../assets/hero_image.png";
import heroimageback from "../assets/hero_image_back.png";
import Heart from "../assets/heart.png";
import Calories from "../assets/calories.png";
import CountUp from "react-countup";

const Hero = () => {
  return (
    <div className="flex justify-between bg-gray-600 text-white py-4 ">
      {/* blur */}
      <div className="bg-orange-500 bg-opacity-80 absolute rounded-full filter blur-[180px] z-auto w-[20rem] h-[28rem]"></div>
      {/* left-h */}
      <div className="p-8 pt-6 flex:3 flex space-x-1 space-y-7 flex-col ">
        <Header />
        {/* the Best ad */}
        <div
          className=" mt-16
        bg-gray-700 rounded-full w-1/3  p-5 py-4 px-2 uppercase  relative flex items-center justify-start  "
        >
          <div className="absolute bg-orange-500 w-24 px-8 h-4/5 rounded-3xl z-10 "></div>
          <span className="text-white z-20">The best GYM in the town</span>
        </div>
        {/* hero Heading */}
        <div className="flex flex-col gap-3 uppercase text-[80px] font-bold text-white text-inherit">
          <div>
            <span className="stroke-text">Shape </span>
            <span>Your</span>
          </div>
          <div>
            <span>Ideal Body</span>
          </div>
          <div className="text-base font-extralight normal-case tracking-1 w-4/5 ">
            <span className="font-semibold font-serif">
              The difference between the impossible and the possible lies in a
              person's determination.
            </span>
          </div>
        </div>
        {/* figures */}
        <div className="flex gap-8 ">
          <div className="flex flex-col">
            <span className="text-white text-3xl">
              <CountUp end={180} start={100} delay="0.5" prefix="+" />
            </span>
            <span className="text-gray-300 ">EXPERT TRAINERS</span>
          </div>
          <div className="flex flex-col">
            <span className="text-white text-3xl">
              <CountUp end={878} start={800} delay="0.5" prefix="+" />
            </span>
            <span className="text-gray-300">MEMBERS JOINED</span>
          </div>
          <div className="flex flex-col">
            <span className="text-white text-3xl">
              <CountUp end={50} start={0} delay="0.5" prefix="+" />
            </span>
            <span className="text-gray-300 ">FITNESSS PROGRAMS</span>
          </div>
        </div>
        {/* hero buttons */}
        <div className="flex gap-4 font-normal">
          <buttons className="text-white font-bold bg-orange-500 w-36 h-12 flex items-center justify-center rounded-sm  hover:bg-orange-600 focus:bg-orange-700   focus:outline-none transition-transform duration-300 transform hover:scale-110 focus:scale-110">
            Get Started
          </buttons>
          <buttons
            className="text-white font-bold bg-transparent w-36 h-12 border-2 border-solid border-orange-500 flex items-center justify-center rounded-sm
           hover:bg-gray-600 focus:bg-orange-700   focus:outline-none transition-transform duration-300 transform hover:scale-110 focus:scale-110"
          >
            Learn More
          </buttons>
        </div>
      </div>
      {/* right side */}

      <div className=" flex-3 relative bg-orange-500 p-2 min-h-screen w-1/4 ">
        <button className="absolute top-8 right-12 text-black font-bold bg-white px-4 py-2 rounded-md shadow-md transition-transform duration-300 transform hover:scale-150 focus:scale-150 ">
          Join Now
        </button>

        <div className="flex flex-col gap-5 bg-gray-600 w-fit p-4 items-start rounded-md absolute right-20 top-32 transition-transform duration-1000 ease-in-out hover:-translate-x-1/2 ">
          <img className="w-8" src={Heart} alt="" />
          <span className="text-gray-300  text-lg">Heart Rate</span>
          <span className="text-white font-bold text-2xl  ">116 bpm</span>
        </div>
        {/* hero images */}

        <img
          className="absolute top-48 right-44 w-96 z-20"
          src={heroimage}
          alt=""
        />
        <img
          className="absolute top-16 right-96 z-10 w-64 "
          src={heroimageback}
          alt=""
        />
        {/* calories */}
        <div className="calories transition-transform duration-1000 ease-in-out hover:-translate-x-1/2 ">
          <img className="w-12 " src={Calories} alt="" />

          <div className="flex flex-col justify-between">
            <span className="text-gray-400">Calories Burned</span>
            <span className="text-white text-1xl font-bold">220 kcal</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
