import React from "react";

export default function Home() {
  return (
    <>
      <div className=" flex flex-col justify-center items-center w-full ">
        {[
          1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 20, 21,
          222, 23, 445, 456, 456, 567, 678, 67, 989, 45, 3453, 4,
        ].map((data, index) => (
          <div key={index}>
            <p className=" text-4xl ">hello world</p>
          </div>
        ))}
      </div>
    </>
  );
}
