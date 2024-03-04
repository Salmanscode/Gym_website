import React from "react";
import Github from "../assets/github.png";
import Instagram from "../assets/instagram.png";
import Linkedin from "../assets/linkedin.png";
import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";

function Footer() {
  return (
    // footer-container
    <div className="bg-gray-600 relative  ">
      <div className="  h-[12rem] filter blur-[200px] bg-orange-500"></div>
      {/* hr */}
      <hr className="border-[1px] border-solid border-gray-300  " />
      {/* footer */}
      <div className="px-[1rem] py-[2rem] flex  gap-[3rem] items-center justify-center h-[18rem]  ">
        {/* social links */}
        <div className="flex gap-[4.5rem] w-[3rem] h-[3rem] items-center justify-center cursor-pointer   ">
          <img
            className="transition-transform duration-300 transform hover:scale-110"
            src={Github}
            alt=""
          />
          <img
            className="transition-transform duration-300 transform hover:scale-110"
            src={Instagram}
            alt=""
          />
          <img
            className="transition-transform duration-300 transform hover:scale-110"
            src={Linkedin}
            alt=""
          />
        </div>
      </div>
      <div className="flex items-center justify-center ">
        <img className="w-[12rem] pt-0.1 " src={Logo} alt="" />
      </div>
      {/* blur */}
      {/* <div className="bottom-2 right-[15%] w-[26rem] h-[12rem] filter blur-[200px] bg-red-400 "></div>
      <div className="bottom-2 left-[15%]w-[26rem] h-[12rem] filter blur-[200px] bg-orange-500 "></div> */}
    </div>
  );
}

export default Footer;
