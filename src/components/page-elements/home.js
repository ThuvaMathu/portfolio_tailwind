import React from "react";
import MailIcon from "../icons/mail-icon";
import PhoneIcon from "../icons/phone-icon";
import LocationIcon from "../icons/location-icon";
import { myEmail, myName, myNumber } from "@/src/services/datya-provider";

export default function Home() {

  return (
    <>
      {/* <div className=" flex flex-col space-y-8 justify-center items-center w-full ">
        <div className=" w-full grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gri ">
          <div className=" w-full h-60 bg-rose-400 order-last "></div>
          <div className=" w-full h-60 bg-green-400 "></div>
          <div className=" w-full h-60 bg-yellow-400 order-first  "></div>
        </div>

      */}
      <div className="bg-[#F6F6F6] h-screen">

        {/* <div className=" gap-2 mt-[20px]" >
            <button className="float-right sticky  right-10  h-10 w-10 border rounded-full bg-[#C2185B] border-[#C2185B]  ">
              
              </button></div> */}

        {/* profile picture */}
        <div className="flex w-full flex-wrap justify-center items-center  space-x-10 sm:max-md:space-y-5 ">
          <div className=" lg:w-1/4 md:w-1/3 sm:w-1/2 xs: w-1/2  
          sm:max-md:ml-8
          w-full h-[400px] bg-pink-200  lg:mt-[100px] sm:mt-[150px] 
          shadow-[-90px_-60px_0px_-15px_rgba(194,24,91,0.05)] animate-float"
          >
          </div>
          {/* Home Content */}
          <div className="  xs:1/3 lg:w-1/3 md:w-1/3 sm:w-full h-[400px]  mt-[170px] sm:max-md:text-center">
            <p className="font-[Open Sans] text-3xl font-[600] leading-loose text-[#2D3748]" >I'M</p>

            {/* Name */}
            <p className="font-[Open Sans] text-3xl font-[600] leading-10 text-[#C2185B]" >{myName}</p>
            {/* Email */}
            <p className="flex sm:max-md:justify-center font-[Open Sans] gap-2 text-lg font-medium leading-10 text-[#2D3748] mt-[7px]" >
              <MailIcon className=" h-6 w-6  mt-[10px] stroke-[#2D3748] fill-[#2D3748]" />
              {myEmail}
            </p>
            {/* Number */}
            <p className=" flex sm:max-md:justify-center sm:max-md:mr-28 font-[Open Sans] gap-2 text-lg font-medium  text-[#2D3748] mt-[3px]" >
              <PhoneIcon className="h-6 w-6  mt-[3px] stroke-[#2D3748] fill-[#2D3748]" />
              {myNumber}
            </p>
            {/* Location */}
            <p className=" flex sm:max-md:justify-center sm:max-md:mr-24 font-[Open Sans] gap-2 text-lg font-medium leading-5 text-[#2D3748] mt-[15px]" >
              <LocationIcon className="h-6 w-6  stroke-[#2D3748] fill-[#2D3748]" />
              21 Elkon street,<br></br>
              Belbird park-4300
            </p>

            <div className="flex gap-2 mt-[20px] sm:max-lg:justify-center" >
              <button className="flex h-10 w-40 border rounded bg-[#C2185B] border-[#C2185B]  ">
                <p className=" pl-7 pt-1.5 font-[Open Sans] font-medium text-white">View Portfolio</p>
              </button>
              <button className="flex h-10 w-40 border rounded  border-[#C2185B] ">
                <p className=" pl-7 pt-1.5 font-[Open Sans] font-medium text-[#C2185B]">Download CV</p>

              </button>


            </div>


          </div>
        </div>
      </div>

    </>
  );
}
