import React from "react";
import bulat from "../Assets/Bulat.svg";

export default function SectionOne() {
  return (
    <div className="w-full h-[99vh] bg-[#FDF9F3] flex items-center justify-center">
      <div className="border border-sky-300">
        <div className="flex flex-col p-5">
          <div className="flex gap-5">
            <span className="font-poppins text-[50px] font-bold">Get Your</span>
            <img
              src={bulat}
              alt="Bulat Tapi Bukan Tekad"
              className="w-[100px]"
            />
          </div>
          <span className="font-poppins text-[50px] font-bold">New Book</span>
        </div>
      </div>
    </div>
  );
}
