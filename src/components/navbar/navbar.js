import React from "react";
import LargeScreenBar from "./large-screen-bar";
import SmallScreenBar from "./small-screen-bar";

export default function Navbar({ children }) {
  return (
    <div className=" relative w-full">
      <div className=" hidden sm:block  w-full z-50  ">
        <LargeScreenBar />
      </div>
      <div className=" sm:hidden w-full top-[85%] z-10  fixed ">
        <SmallScreenBar />
      </div>
    </div>
  );
}
