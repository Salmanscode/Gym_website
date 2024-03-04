import React from "react";
import image1 from "../assets/image1.png";
import image2 from "../assets/image2.png";
import image3 from "../assets/image3.png";
import image4 from "../assets/image4.png";
import nb from "../assets/nb.png";
import nike from "../assets/nike.png";
import adidas from "../assets/adidas.png";
import tick from "../assets/tick.png";

const Reasons = () => {
  return (
    // reasons
    <div class="bg-gray-600 px-6 py-10 flex gap-8  ">
      <div className="w-1/3">
        <img className="w-100 h-96  py-5 " src={image2} alt="" />
      </div>
      {/* left-h */}
      <div className="uppercase gap-4 flex flex-col w-1/3 ">
        <span className="font-bold text-orange-500 text-5xl ">
          some reasons
        </span>
        <div className="text-white font-bold text-6xl">
          <span className="stroke-text  "> why </span>
          <span>choose us ?</span>
        </div>

        {/* 4 reasons */}
        <div className="flex  flex-col g-8 p-4">
          <div className="flex  text-xl text-white font-bold p-2 space-x-4 space-y-1 transform hover:-translate-y-1 transition-transform duration-500 ">
            <img src={tick} alt=""></img>
            <span>OVER 140+ EXPERT COACHES</span>
          </div>
          <div className="flex  text-xl text-white font-bold p-2 space-x-4 space-y-1 transform hover:-translate-y-1 transition-transform duration-500">
            <img src={tick} alt="" />
            <span>TRAIN SMARTER AND FASTER THAN BEFORE</span>
          </div>
          <div className="flex  text-xl text-white font-bold p-2 space-x-4 space-y-1 transform hover:-translate-y-1 transition-transform duration-500">
            <img src={tick} alt="" />
            <span>1 FREE PROGRAM FOR NEW MEMBER</span>
          </div>
          <div className="flex  text-xl text-white font-bold p-2 space-x-4 space-y-2 transform hover:-translate-y-1 transition-transform duration-500 ">
            <img src={tick} alt="" />
            <span>RELIABLE PARTNERS</span>
          </div>
        </div>
      </div>

      {/* right-h */}
      <div className="flex-grow space-y-10 space-x- ">
        <span className=" text-gray-400 font-serif font-bold text-5xl px-7  ">
          OUR PARTNERS
        </span>

        <div className="flex gap-1 space-x-5 space-y-0 px-2 ">
          <img
            className="
            w-full h-full object-cover transition-transform duration-300 transform hover:scale-110"
            src={nb}
            alt=""
          />

          <img
            className="
            w-full h-full object-cover transition-transform duration-300 transform hover:scale-110"
            src={adidas}
            alt=""
          />
          <img
            className="
            w-full h-full object-cover transition-transform duration-300 transform hover:scale-110"
            src={nike}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Reasons;
