import React from "react";

function Join() {
  return (
    <div className="flex bg-gray-600 px-[2rem] py-[2rem] gap-[10rem]">
      {/* left-j */}
      <div className=" w-1/2 text-white text-[3.4rem] font-bold uppercase relative space-y-0">
        {/* hr */}
        <hr className="absolute w-[11.5rem] border-[3px]  border-solid ml-1 border-orange-500 rounded-[30%] mx-[-10px] my-[1px]" />
        <div>
          <span className="stroke-text">READY TO </span>
          <span> LEVEL UP</span>
        </div>
        <div>
          <span>YOUR BODY </span>
          <span className="stroke-text">WITH US?</span>
        </div>
      </div>
      {/* right-j */}
      <div className="flex justify-center items-end ">
        <form
          action=""
          className="flex gap-[3rem] bg-gray-500 px-[2.5rem] py-[0.6rem] rounded-md"
        >
          <input
            className="bg-transparent border-none outline-none text-gray-200 "
            type="email"
            placeholder="Enter your email"
          />
          <button className="btn bg-orange-500 text-white rounded-md p-2 text-sm focus:outline-none transition-transform duration-300 transform hover:scale-110 focus:scale-110">
            Join Now
          </button>
        </form>
      </div>
    </div>
  );
}

export default Join;
