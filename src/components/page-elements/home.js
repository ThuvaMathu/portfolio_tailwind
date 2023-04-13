import React from "react";

export default function Home() {
  return (
    <>
      <div className=" flex flex-col space-y-8 justify-center items-center w-full ">
        <div className=" w-full grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gri ">
          <div className=" w-full h-60 bg-rose-400 order-last "></div>
          <div className=" w-full h-60 bg-green-400 "></div>
          <div className=" w-full h-60 bg-yellow-400 order-first  "></div>
        </div>

        <div className=" w-full flex flex-wrap ">
          <div className=" lg:w-1/3 md:w-1/2 w-full h-60 bg-rose-400 order-last"></div>
          <div className=" lg:w-1/3 md:w-1/2 w-full h-60 bg-green-400  "></div>
          <div className=" lg:w-1/3 md:w-1/2 w-full h-60 bg-yellow-400"></div>
        </div>
      </div>
    </>
  );
}
