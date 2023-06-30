import { FaSearch } from "react-icons/fa";
import Navbar from "./Navbar";

export default function SectionOne() {
  return (
    <>
      <Navbar />
      {/* Left */}
      <section className="flex justify-between">
        <div className="flex flex-col p-5 relative top-40">
          <div className="flex gap-5">
            <span className="font-poppins lg:text-[40px] font-bold">Perpustakaan</span>
            <img
              src="Bulat.svg"
              alt="Bulat Tapi Bukan Tekad"
              className="w-[200px]"
            />
          </div>
          <span className=" font-poppins lg:text-[50px] font-bold">
            Putra Anda Binjai
          </span>
          <span className="w-[655px] text-[20px]  border-b border-black py-5">
            Smk Putra Anda adalah sekolah Pusat Unggulan Se-Kota Binjai.
          </span>
          <button className="border border-[#0177FD] bg-[#0177FD] w-max py-4 px-10 rounded-full flex items-center justify-center gap-2 text-white font-bold mt-8 shadow-lg shadow-blue-500/50">
            <FaSearch /> Search Book
          </button>
        </div>

        {/* Right */}
        <img src="book.svg" alt="Buku ecek nya" className="w-[450px] relative top-[100px] left-[-100px]" />
      </section>
    </>
  );
}
