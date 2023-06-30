import { FaSearch } from "react-icons/fa";
import Navbar from "./Navbar";

export default function SectionOne() {
  return (
    <>
      <Navbar />
      <section className="flex h-screen w-full gap-40 items-center justify-center md:container md:mx-auto">
        <div className="flex flex-col p-5">
          <div className="flex gap-5 w-max">
            <span className="font-poppins text-5xl font-bold">Get Your</span>
            <img
              src="Bulat.svg"
              alt="Bulat Tapi Bukan Tekad"
              className="w-[200px]"
            />
          </div>
          <span className="font-poppins text-[80px] font-bold ml-[50px]">
            New Book
          </span>
          <span className="rotate-[-90deg] relative right-[200px] mt-16 text-[27px] font-bold border-t border-[#FDD4B7] w-max text-gray-500 top-5">
            Trending book collection release
          </span>
          <div className="flex gap-5 relative bottom-[5rem] ml-16">
            <img
              src="SemiCircle.svg"
              alt="Bulat Tapi Bukan Tekad"
              className="w-[80px]"
            />
            <span className="font-poppins text-[80px] font-bold">
              Collection
            </span>
          </div>
          <span className="w-[655px] text-[20px] relative bottom-[65px] border-b border-black ml-[40px] p-[11px] py-5">
            Europe books evaluates unpublished manuscripts <br /> for international
            distribution
          </span>
          <button className="border border-[#0177FD] bg-[#0177FD] w-max py-4 px-10 rounded-full flex items-center justify-center gap-2 text-white font-bold relative bottom-10 ml-14 shadow-lg shadow-blue-500/50">
            <FaSearch /> Search Book
          </button>
        </div>
        <div className="">
          <img src="book.svg" alt="Buku ecek nya" className="scale-[1.3] relative bottom-10" />
        </div>
      </section>
      <section className="w-full h-[99vh] flex justify-center items-center bg-[#fdf9f3]">
        <h2>Section kedua</h2>
      </section>
    </>
  );
}