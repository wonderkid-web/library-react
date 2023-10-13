import { useLoaderData, useSearchParams } from "react-router-dom"
import { BookType, BorrowerType } from "./RootLayout"
import { useUserAuth } from "../context/UserAuthContext"
import ReactPaginate from "react-paginate"
import { FaAngleLeft, FaAngleRight } from "react-icons/fa"
import { useEffect, useState } from "react"
import moment from "moment-timezone"
import Countdown from "react-countdown"
import CountdownTemplate from "./CountdownTemplate"
import { useQuery } from "@tanstack/react-query"



export const getBorrowedBook = async ({ params }: any) => {
    // console.log(params.name);

    const raw = await fetch(`https://library-react-backend.vercel.app/borrower/${params.name}`)
    const data = await raw.json()
    return data
}


const User = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [photoFile, setPhotoFile] = useState()
    const [loading, setLoading] = useState(false)
    const [exstention, setExstention] = useState(null)
    const [photoURL, setPhotoURL] = useState("https://www.kindpng.com/picc/m/130-1300240_round-user-dry-clean-symbol-png-transparent-png.png")
    const rowsPerPage = 5;

    const { user, uploadProfilePict }: any = useUserAuth()

    const borrowedBook = useLoaderData() as BorrowerType

    const { data: b } = useQuery({
        queryFn: async () => {
            const raw = await fetch(`https://library-react-backend.vercel.app/borrower/${user.displayName}`)
            const data = await raw.json()
            return data
        },
        queryKey: ['borrower'],
        refetchInterval: 1500
    })

    const formatLengkap = "D, MMMM YYYY, kk:mm:ss"


    const Completionist = () => <span>Waktu pinjam buku kamu sudah habis nih, silahkan kembalikan buku kamu ke perpus yah!</span>;

    const renderer = ({ days, hours, minutes, seconds, completed }: any) => {
        if (completed) {
            // Render a completed state
            return <Completionist />;
        } else {
            // Render a countdown
            return (
                <CountdownTemplate days={days} hours={hours} minutes={minutes} seconds={seconds} />
            )
            // return <span>{hours}:{minutes}:{seconds}</span>;
        }
    };



    const handlePageClick = (data: any) => {
        const selectedPage = data.selected + 1;
        setCurrentPage(selectedPage);
    };

    const handleFile = (e:any) => {
        if (e.target.files[0]) {
            const ext = e.target.files[0].name.split('.').pop()
            setExstention(ext)
            setPhotoFile(e.target.files[0])
        }
    }

    const handleUploadProfilePhoto = () => {
        uploadProfilePict(photoFile, user, setLoading, exstention)
    }

    useEffect(() => {
        if (user && user.photoURL) {
            setPhotoURL(user.photoURL)
        }
    }, [user, photoURL])


    return (
        <div className="h-fit">
            {
                user ?

                    <div className="card w-full grid grid-cols-2 grid-rows-[300px_100px_w-fit_50px] gap-4 p-6 w-2/3 mx-auto card-side bg-base-100 shadow-xl">
                        <figure className="w-[200px] justify-self-center mask mask-squircle">
                            {user &&
                                <img src={photoURL} alt="Movie" />
                            }
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title self-end">{user.displayName}</h2>
                            <p className="self-end">{user.email}</p>
                            <div className="card-actions justify-end">
                                <div className="join">
                                    <input onChange={(e) => handleFile(e)} type="file" className="justify-self-center join-item file-input file-input-bordered file-input-warning w-full max-w-xs" />
                                    <button disabled={loading} onClick={() => handleUploadProfilePhoto()} className="btn btn-warning join-item">upload file</button>
                                </div>
                            </div>
                        </div>

                        <h1 className="text-xl text-center justify-self-center col-span-2 row-start-2 p-2 bg-warning h-fit rounded-md">Buku yang dipinjam</h1>
                        <table className="col-span-2 mt-4 table border w-full table-zebra ">
                            <thead>
                                <tr className="">
                                    <th className="text-lg text-center text-slate-700">NO</th>
                                    <th className="text-lg text-center text-slate-700">Cover</th>
                                    <th className="text-lg text-center text-slate-700">ID</th>
                                    <th className="text-lg text-center text-slate-700">Waktu Peminjaman</th>
                                    <th className="text-lg text-center text-slate-700">Waktu Pengembalian</th>
                                    <th className="text-lg text-center text-slate-700">Waktu Pinjam yang Tersisa</th>
                                    <th className="text-lg text-center text-slate-700">Catatan</th>

                                </tr>
                            </thead>
                            <tbody>
                                {b && b
                                    .slice((currentPage - 1) * rowsPerPage, currentPage * rowsPerPage)
                                    .map((book: BookType, index: number) => (
                                        <tr key={book.id} className="">
                                            <td className="text-center">{index + 1}</td>
                                            <td>
                                                <div className="flex items-center space-x-3">
                                                    <div className="avatar">
                                                        <div className="mask w-[100px] h-[120px] shadow-lg rounded">
                                                            <img
                                                                src={`https://library-react-backend.vercel.app/images/${book?.coverUrl}`}
                                                                alt="Avatar Tailwind CSS Component"
                                                                className="object-fill object-center"
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="text-center">{book.id}</td>
                                            <td className="text-center">
                                                {
                                                    moment(book.borrow_at).format(formatLengkap)
                                                }
                                            </td>
                                            <td className="text-center">
                                                {
                                                    moment(book.borrow_at).add(3, 'd').format(formatLengkap)
                                                }
                                            </td>
                                            <td className="text-center ">
                                                {
                                                    book.status ? (
                                                        <Countdown date={Number(moment(book.borrow_at).format('x')) + 259200000} renderer={renderer} />
                                                    ) : (
                                                        <>
                                                            <h1 className="p-2 w-fit mx-auto rounded-md bg-emerald-500 text-white cursor-pointer">Buku sudah Dipulangkan</h1>
                                                        </>
                                                    )
                                                }
                                            </td>
                                            <td>
                                                {book.notes === null && <button className="p-1 rounded-md bg-green-200">Tidak ada Sanksi</button>}
                                                {book.notes === "Denda" && <button className="p-1 rounded-md bg-yellow-200">Kamu di Denda Rp. 5.000 karna telat memulangkan buku</button>}
                                                {book.notes === "Rusak" && <button className="p-1 rounded-md bg-orange-200">Kamu di Denda Rp. 25.000 karna merusak buku</button>}
                                                {book.notes === "Hilang" && <button className="p-1 rounded-md bg-red-200">Kamu di Denda Rp. 150.000 karna menghilangkan buku</button>}
                                            
                                            </td>
                                            {

                                                // Number(moment(book.borrow_at).add(3, "days").format('x')
                                                // console.log(moment(book.borrow_at).tz("Asia/Jakarta").add(3, "days").format('x'))
                                            }
                                        </tr>
                                    ))}
                            </tbody>
                        </table>
                        <div className="flex justify-center items-center row-end col-span-2">
                            <ReactPaginate
                                previousLabel={<FaAngleLeft />}
                                nextLabel={<FaAngleRight />}
                                breakLabel={"..."}
                                pageCount={Math.ceil(borrowedBook.length / rowsPerPage)}
                                marginPagesDisplayed={2}
                                pageRangeDisplayed={10}
                                onPageChange={handlePageClick}
                                containerClassName={"my-3 flex gap- justify-center items-center p-1 text-[#33272a] bg-[#ff8ba7] w-max rounded-lg text-white"}
                                activeClassName={"bg-white text-slate-700"}
                                nextClassName={"btn border border-white bg-transparent text-white ml-5"}
                                previousClassName={"btn border border-white bg-transparent text-white mr-5"}
                                pageClassName={`p-5 w-[20px] h-[20px] flex justify-center items-center rounded-lg mx-1 font-bold`}
                            />
                        </div>
                    </div>
                    :
                    <span className="loading loading-infinity loading-lg"></span>

            }
        </div>
    )
}

export default User

{/* {
            (borrowedBook as unknown as BorrowerType[]).map((book:BorrowerType)=>{
                return(
                    <>
                    <h1>{book.id}</h1>
                    <h1>{book.borrower}</h1>
                    <h1>{book.idBook}</h1>
                    <h1>{book.created_at}</h1>
                    <h1>{book.updated_at}</h1>
                    </>
                )
            })
        } */}
