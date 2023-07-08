import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { NewsType } from "./RootLayout";
import moment from "moment";

function NewsPages() {
    const [newsAll, setNewsAll] = useState([])
    const [loading, setLoading] = useState(true)
    const [filter, setFilter] = useState();

    const getAllNews = async () => {
        const raw = await fetch(`https://berita-indo-api.vercel.app/v1/cnbc-news/`);
        const data = await raw.json();
        setNewsAll(data.data)
        setLoading(false)
    }

    const getAllNewsQuery = async () => {
        const raw = await fetch(`https://berita-indo-api.vercel.app/v1/cnbc-news/`);
        const data = await raw.json();
        setNewsAll(data.data)
        setLoading(false)
    }

    const handleFilterChange = (event: any) => {
        setFilter(event.target.value);
        console.log(event.target.value)
    };

    useEffect(() => {
        getAllNews()
    }, [])

    return (
        <section className="flex justify-center py-5 h-screen">
            <div className="flex flex-col">
                <select className="select select-bordered w-full max-w-xs" id="filterSelect" value={filter} onChange={() => handleFilterChange(filter)}>
                    <option value="">All</option>
                    <option value="market">Market</option>
                    <option value="investment">Investmen</option>
                    <option value="news">News</option>
                </select>
                {
                    loading ? <span className="loading loading-infinity w-36"></span> :
                        <div className="w-full flex flex-wrap mx-auto justify-center items-center h-fit bg-[#fdf9f3]">
                            {
                                newsAll.map((data: NewsType) => (
                                    <div className="carousel-item p-2">
                                        <div className="card w-[21.5rem] shadow-md">
                                            <figure className="px-1 pt-1">
                                                <img src={data.image.large} alt={data.title} className="rounded-xl" />
                                            </figure>
                                            <div className="card-body">
                                                <span className="font-bold text-slate-800">News . {moment(data.isoDate).format('YYYY-MM-DD')}</span>
                                                <h3 className="font-bold text-slate-800">{data.title}</h3>
                                                <p></p>
                                                <div className="card-actions">
                                                    <Link to={data.link}>
                                                        <button className="btn btn-warning">Lihat Berita</button>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>

                                    </div>

                                ))
                            }
                        </div>
                }
            </div>
        </section>
    )
}

export default NewsPages