import React from "react";
import bulat from "../Assets/Bulat.svg";
import book from "../Assets/book.svg"
import semiCircle from "../Assets/SemiCircle.svg";
import { FaSearch } from "react-icons/fa";

export default function SectionOne() {
  return (
    <div className="w-full h-[99vh]">
      <section className="flex gap-40 border h-full w-full justify-center items-center">
        <div className="flex flex-col p-5">
          <div className="flex gap-5">
            <span className="font-poppins text-[50px] font-bold">Get Your</span>
            <img
              src={bulat}
              alt="Bulat Tapi Bukan Tekad"
              className="w-[140px]"
            />
          </div>
          <span className="font-poppins text-[50px] font-bold ml-[50px]">
            New Book
          </span>
          <span className="rotate-[-90deg] relative right-[30%] mt-14 p-1 font-bold border-t border-[#FDD4B7] w-max text-gray-500">
            Trending book collection release
          </span>
          <div className="flex gap-5 relative bottom-[5.5rem] ml-16">
            <img
              src={semiCircle}
              alt="Bulat Tapi Bukan Tekad"
              className="w-[50px]"
            />
            <span className="font-poppins text-[50px] font-bold">
              Collection
            </span>
          </div>
          <span className="w-[360px] text-[13px] relative bottom-[65px] border-b border-black ml-[40px] p-[11px] font-bold">
            Europe books evaluates unpublished manuscripts for international
            distribution
          </span>
          <button className="border border-[#0177FD] bg-[#0177FD] w-max py-3 px-6 rounded-full flex items-center justify-center gap-2 text-white font-bold relative bottom-10 ml-10 shadow-lg shadow-blue-500/50">
            <FaSearch /> Search Book
          </button>
        </div>
        <div>
          <img src={book} alt="Buku ecek nya" />
        </div>
      </section>
    </div>
  );
}
