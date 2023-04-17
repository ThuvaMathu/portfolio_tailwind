import React from "react";

export default function LargeScreenBar() {
  return (
    <>
      <div className=" flex  w-full h-[55px] bg-[#FFFFFF] justify-center items-center gap-6 shadow-[0px_2px_2px_0px_rgba(0,0,0,0.09)] ">
        <button className=" font-[Open Sans]  text-xl font-[600]  text-[#2D3748] hover:text-[#C2185B]">Home</button>
        <button className=" font-[Open Sans]  text-xl font-[600]  text-[#2D3748]  hover:text-[#C2185B]">About Me</button>
        <button className="font-[Open Sans]  text-xl font-[600]  text-[#2D3748]  hover:text-[#C2185B]">Skills</button>
        <button className=" font-[Open Sans]  text-xl font-[600]  text-[#2D3748]  hover:text-[#C2185B]">Projects</button>
        <button className=" font-[Open Sans]  text-xl font-[600]  text-[#2D3748]  hover:text-[#C2185B]">Contact Me</button>
      </div>
    </>
  );
}
