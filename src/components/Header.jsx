import React from "react";
import Logo from "../assets/logo.png";

function Header() {
  return (
    <div className="flex justify-between">
      <img
        className="w-48
      h-16 mr-40 mb-10 "
        src={Logo}
        alt=""
      />
      <ul className="list-none flex justify-center gap-10 text-white font-semibold ml-12 pl-32 mt-8 text- ">
        <li className="group hover:text-orange-500 hover:cursor-pointer">
          Home
        </li>
        <li className="group hover:text-orange-500 hover:cursor-pointer">
          Programs
        </li>
        <li className="group hover:text-orange-500 hover:cursor-pointer">
          Why Us
        </li>
        <li className="group hover:text-orange-500 hover:cursor-pointer">
          Plans
        </li>
        <li className="group hover:text-orange-500 hover:cursor-pointer">
          Testimonials
        </li>
      </ul>
    </div>
  );
}

export default Header;
