import React from "react";
import MailIcon from "../icons/mail-icon";
import PhoneIcon from "../icons/phone-icon";
import LocationIcon from "../icons/location-icon";
import {
  myEmail,
  myName,
  myNumber,
  personalData,
} from "@/src/services/datya-provider";
import DownArrowIcon from "../icons/down-arr-icon";

export default function Home() {
  return (
    <>
      <div className="bg-[#F6F6F6] h-full min-h-screen">
        <div className="flex w-full flex-wrap justify-center items-center  space-x-10 sm:max-md:space-y-5 ">
          <div
            className=" lg:w-1/4 md:w-1/3 sm:w-1/2 xs:w-1/2  
          sm:max-md:ml-8
          w-full h-[400px] bg-pink-200  lg:mt-[100px] sm:mt-[150px] 
          shadow-[-90px_-60px_0px_-15px_rgba(194,24,91,0.05)] animate-float z-0"
          ></div>
          {/* Home Content */}
          <div className="  xs:1/3 lg:w-1/3 md:w-1/3 sm:w-full h-[400px]  mt-[170px] sm:max-md:text-center">
            <p className="font-[Open Sans] text-3xl font-[600] leading-loose text-[#2D3748] ">
              I'M
            </p>

            {/* Name */}
            <p className="font-[Open Sans] text-3xl font-[600] leading-10 text-[#C2185B]  ">
              {personalData.name}
            </p>
            {/* Email */}
            <p className="flex sm:max-md:justify-center font-[Open Sans] gap-2 text-lg font-medium leading-10 text-[#2D3748] mt-[7px]">
              <MailIcon className=" h-6 w-6  mt-[10px] stroke-[#2D3748] fill-[#2D3748]" />
              {myEmail}
            </p>
            {/* Number */}
            <p className=" flex sm:max-md:justify-center sm:max-md:mr-28 font-[Open Sans] gap-2 text-lg font-medium  text-[#2D3748] mt-[3px]">
              <PhoneIcon className="h-6 w-6  mt-[3px] stroke-[#2D3748] fill-[#2D3748]" />
              {personalData.number}
            </p>
            {/* Location */}
            <p className=" flex sm:max-md:justify-center sm:max-md:mr-24 font-[Open Sans] gap-2 text-lg font-medium leading-5 text-[#2D3748] mt-[15px]">
              <LocationIcon className="h-6 w-6  stroke-[#2D3748] fill-[#2D3748]" />
              {personalData.location.split(",")[0]}
              <br />
              {personalData.location.split(",")[1]}
            </p>

            <div className="flex gap-2 mt-[20px] sm:max-lg:justify-center">
              <button className="flex border py-3 px-5 rounded bg-[#C2185B] border-[#C2185B] justify-center items-center hover:bg-white hover:text-[#C2185B] text-white transition-all duration-300 ease-linear  ">
                <p className=" font-[Open Sans] font-medium ">View Portfolio</p>
              </button>

              <button className="flex py-3 px-5  border rounded group  border-[#C2185B] justify-center items-center">
                <p className=" font-[Open Sans] font-medium text-[#C2185B]">
                  Download CV
                </p>
                <span className=" mx-2 animate-bounce ">
                  <DownArrowIcon className="h-4 w-4 stroke-[#C2185B] fill-[#C2185B]  group-hover:fill-white " />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
