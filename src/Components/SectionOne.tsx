import { FaSearch } from "react-icons/fa";

export default function SectionOne() {
  return (
    <>
      {/* Left */}
      <section className="flex mt-32 justify-between h-screen ml-16">
        <div className="flex flex-col ">
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
        <img src="book.svg" alt="Buku ecek nya" className="w-[450px] relative bottom-[30vh] right-[5vw]" />
      </section>
    </>
  );
}
