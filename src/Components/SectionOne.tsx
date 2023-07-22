import { FaArrowRight, FaSearch } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";
import moment from "moment";
import { NewsType } from "./RootLayout";
import { useUserAuth } from "../context/UserAuthContext";
import { useEffect, useState } from "react";
import { updateProfile } from "firebase/auth";


export const getNews = async () => {
  const raw = await fetch('https://berita-indo-api.vercel.app/v1/cnbc-news/tech')
  const data = await raw.json()
  return data.data;
}




export default function SectionOne() {
  const news = useLoaderData() as NewsType;
  const [name, setName] = useState()
  const [askName, setAskName] = useState(false)
  const { user }: any = useUserAuth()

  // console.log(user.user);

  useEffect(() => {
    if (!user.displayName) {
      setAskName(true)
      console.log('ga ada nama');
    } else {
      console.log('ada nama');

    }
  }, [])

  const handleUpdateName = async (name:string) =>{
      updateProfile(user, {displayName:name})
      alert('nama berhasil di ubah!')
      setAskName(false)
  }

  return (
    <>
      {/* Left */}
      {
        askName ? (
          <div className="form-control">
            <label className="label">
              <span className="label-text">Kamu belum ngisi nama nih!</span>
            </label>
            <label className="input-group">
              <span>Nama:</span>
              <input onChange={(e)=> setName(e.target.value)} type="text" placeholder="Nama kamu" className="input input-bordered" />
              <button onClick={()=>handleUpdateName(name)} className="btn btn-warning">update</button>
            </label>
          </div>
        ) :
          <>
          <pre>
            {JSON.stringify(getNews, null, 2)}
          </pre>
            <section className="min-h-screen flex mx-auto border-b">
              <div className="flex p-16 mx-auto my-auto gap-10">
                <div className="flex flex-col">
                  {user && <h1>{user.email}</h1>}
                  {user && <h1>nama : {user.displayName}</h1>}
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
            <section className="w-full mx-auto my-auto p-12">
              <h1 className="font-bold text-slate-800 text-4xl text-center">News</h1>
              {news.slice(0, 1).map((news: NewsType, index: number) => (
                <div key={index} className="card lg:card-side p-12">
                  <figure className="rounded-xl"><img src={news.image.large} alt={news.title} className="w-[600px] h-96 rounded-xl flex-1" /></figure>
                  <Link to={news.link}>
                    <div className="card-body w-[600px] h-96">
                      <h2 className="card-title text-4xl">{news.title}</h2>
                      <p>Threads merupakan aplikasi baru yang terhubung dengan Instagram. Keduanya memiliki format berbeda, Instagram berfokus pada foto dan video sementara Threads berbasis teks.</p>
                      <p className="font-bold text-slate-800 mt-20">{moment(news.isoDate).format('YYYY-MM-DD')}</p>
                    </div>
                  </Link>
                </div>
              ))}
              <div className="mt-10">
                <Link to={`/news`}>
                  <div className="flex justify-between items-center">
                    <h2 className="font-bold p-2 text-4xl">Latest News</h2>
                    <span className="flex justify-center items-center gap-4 font-bold">Show All <FaArrowRight /></span>
                  </div>
                </Link>
                <div className="carousel rounded-box carousel-center w-full" key={null}>
                  {
                    news.slice(1, 11).map((news: NewsType, index: number) => (
                      <div key={index} className="carousel-item p-2">
                        <div className="card w-[21.5rem] shadow-md">
                          <figure className="px-1 pt-1">
                            <img src={news.image.large} alt={news.title} className="rounded-xl" />
                          </figure>
                          <div className="card-body">
                            <span className="font-bold text-slate-800">News . {moment(news.isoDate).format('YYYY-MM-DD')}</span>
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
      }
    </>
  );
}