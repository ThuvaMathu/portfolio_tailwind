import React from "react";

export default function LargeScreenBar() {
  return (
    <>
      <div className=" flex  w-full h-[70px] bg-blue-400 justify-center items-center gap-6 ">
        <button className=" text-2xl">Home</button>
        <button className=" text-2xl">About Me</button>
        <button className=" text-2xl">Skils</button>
        <button className=" text-2xl">Projects</button>
        <button className=" text-2xl">Contact Me</button>
      </div>
    </>
  );
}
