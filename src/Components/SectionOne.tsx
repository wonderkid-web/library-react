import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function SectionOne() {
  return (
    <>
      {/* Left */}
      <section className="min-h-screen flex justify-center items-center">
        <div className="container flex p-16 mx-auto">
          <div className="flex flex-col">
            <div className="flex gap-5">
              <span className="font-poppins text-[50px] font-bold">Perpustakaan</span>
              <img
                src="Bulat.svg"
                alt="Bulat Tapi Bukan Tekad"
                className="w-[150px]"
              />
            </div>
            <span className="font-poppins text-[50px] font-bold ml-[50px] mt-[20px]">
              Putra Anda
            </span>
            <span className="rotate-[-90deg] relative top-[-20px] right-[140px] mt-16 text-[27px] font-bold border-t border-[#FDD4B7] w-max text-gray-500">
              SMK PUTRA ANDA BINJAI
            </span>
            <div className="flex gap-5 relative bottom-[5rem] ml-16">
              <img
                src="SemiCircle.svg"
                alt="Bulat Tapi Bukan Tekad"
                className="w-[50px]"
              />
              <span className="font-poppins text-[50px] font-bold">
                Binjai
              </span>
            </div>
            <span className="w-[655px] text-[20px] relative bottom-[65px] border-b border-black ml-[40px] p-[11px] py-5">
              Smk Putra Anda is a school of the Center for Excellence in the City of Binjai.
            </span>
            <Link to={`/search`}>
              <button className="border border-[#0177FD] bg-[#0177FD] w-max py-4 px-10 rounded-full flex items-center justify-center gap-2 text-white font-bold relative bottom-10 ml-14 shadow-lg shadow-blue-500/50">
                <FaSearch /> Search Book
              </button>
            </Link>
          </div>
          <div>
            <img src="book.svg" alt="Buku ecek nya"/>
          </div>
        </div>

        {/* Right */}
      </section>
    </>
  );
}