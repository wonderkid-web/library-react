import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
// import { useUserAuth } from "../context/UserAuthContext";
import { useEffect, useState } from "react";
import moment from "moment";


export default function SectionOne() {
  const [news, setNews] = useState([])



  // const { user } = useUserAuth()

  const getNews = async () => {
    const raw = await fetch('https://berita-indo-api.vercel.app/v1/cnbc-news/tech')
    const data = await raw.json()
    setNews(data.data)
  }

  useEffect(() => {
    getNews();
    console.log(news)
  }, [])

  return (
    <>
      {/* Left */}
      <section className="min-h-screen flex mx-auto border-b">
        <div className="flex p-16 mx-auto my-auto gap-10">
          <div className="flex flex-col">
            {/* {user && <h1>{user.email}</h1>} */}
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
            <img src="book.svg" alt="Buku ecek nya" />
          </div>
        </div>
      </section>
      <section className="h-screen mx-auto my-auto p-12">
        <div className="card w-96 shadow-xl">
          <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
          <div className="card-body">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
        <div className="mt-10">
          <h2 className="font-bold p-2 text-4xl">Latest News</h2>
          <div className="carousel rounded-box carousel-center bg-warning  w-full" key={news.id}>
            {
              news.slice(0, 10).map((news) => (
                <div className="carousel-item p-2">
                  <div className="card w-96 sm:w-60 lg:w-96 bg-white shadow-xl">
                    <figure className="px-5 pt-5">
                      <img src={news.image.small} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body">
                      <span className="font-bold text-slate-800">News . {moment(news.isoDate).format('YYYY MM DD')}</span>
                      <h3 className="font-bold text-slate-800">{news.contentSnippet}</h3>
                      <p></p>
                      <div className="card-actions">
                        <Link to={news.link}>
                          <button className="btn btn-warning">Lihat Berita</button>
                        </Link>
                      </div>
                    </div>
                  </div>

                </div>
              ))
            }
          </div>
        </div>
      </section>
    </>
  );
}