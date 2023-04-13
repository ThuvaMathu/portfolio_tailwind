import React from "react";
import HomeIcon from "../icons/home-icon";
import AboutMeIcon from "../icons/about-icon";

export default function SmallScreenBar() {
  return (
    <>
      <div className="  w-full h-16 flex justify-center items-center ">
        <div className=" w-72 h-4/5 bg-blue-400 rounded-lg flex justify-center items-center gap-4 ">
          <HomeIcon className=" h-10 w-10 stroke-white fill-white " />
          <AboutMeIcon className=" h-10 w-10 stroke-white fill-white " />
        </div>
      </div>
    </>
  );
}
