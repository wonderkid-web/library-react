import { useLoaderData } from "react-router-dom"
import { BorrowerType } from "./RootLayout"
import { useUserAuth } from "../context/UserAuthContext"
import ReactPaginate from "react-paginate"
import { FaAngleLeft, FaAngleRight } from "react-icons/fa"
import { useEffect, useState } from "react"

export const getBorrowedBook = async ({ params }: any) => {
    const raw = await fetch(`http://localhost:3000/user/${params.name}`)
    const data = await raw.json()
    return data
}

// export const getBook = async () => {
//     const raw = await fetch("https://www.dbooks.org/api/recent");
//     const data = await raw.json();
//     return data.books
// };

const User = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [photoFile, setPhotoFile] = useState()
    const [loading, setLoading] = useState(false)
    const [exstention, setExstention] = useState(null)
    const [photoURL, setPhotoURL] = useState("https://www.kindpng.com/picc/m/130-1300240_round-user-dry-clean-symbol-png-transparent-png.png")
    const rowsPerPage = 3;

    const { user, uploadProfilePict } = useUserAuth()


    const borrowedBook = useLoaderData() as BorrowerType


    const handlePageClick = (data: any) => {
        const selectedPage = data.selected + 1;
        setCurrentPage(selectedPage);
    };

    const handleFile = (e) =>{
        if(e.target.files[0]){
            const ext = e.target.files[0].name.split('.').pop()
            setExstention(ext)
            setPhotoFile(e.target.files[0])
        }
    }

    const handleUploadProfilePhoto = () =>{
        uploadProfilePict(photoFile, user, setLoading, exstention)
    }

    useEffect(()=>{
        if(user && user.photoURL){
            setPhotoURL(user.photoURL)
        }
    },[user])

    return (
        <div className="h-fit">
            {
                user ?
                    <div className="card grid grid-cols-2 grid-rows-[300px_100px_w-fit_50px] gap-4 p-6 w-2/3 mx-auto my-6 card-side bg-base-100 shadow-xl">
                        <figure className="w-[200px] justify-self-center mask mask-squircle">
                            {user &&
                                <img src={photoURL} alt="Movie" />
                            }
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">{user.displayName}</h2>
                            <p>{user.email}</p>
                            <div className="card-actions justify-end">
                                <div className="join">
                                    <input onChange={(e)=>handleFile(e)} type="file" className="justify-self-center join-item file-input file-input-bordered file-input-warning w-full max-w-xs" />
                                    <button disabled={loading} onClick={()=>handleUploadProfilePhoto()} className="btn btn-warning join-item">upload file</button>
                                </div>
                            </div>
                        </div>

                        <h1 className="text-xl text-center justify-self-center col-span-2 row-start-2 p-2 bg-warning h-fit rounded-md">Buku yang dipinjam</h1>
                        <table className="col-span-2 mt-4 table border w-full">
                            <thead>
                                <tr className="border border-slate-400">
                                    <th className="text-lg text-slate-700">Cover</th>
                                    <th className="text-lg text-slate-700">ID</th>
                                    <th className="text-lg text-slate-700">Title</th>
                                    {/* <th className="text-lg text-slate-700">Action</th> */}
                                </tr>
                            </thead>
                            <tbody>
                                {borrowedBook
                                    .slice((currentPage - 1) * rowsPerPage, currentPage * rowsPerPage)
                                    .map((book: BookType) => (
                                        <tr key={book.id} className="border border-slate-400">
                                            <td>
                                                <div className="flex items-center space-x-3">
                                                    <div className="avatar">
                                                        <div className="mask w-[100px] h-[120px] shadow-lg rounded">
                                                            <img
                                                                src={book.imgURL}
                                                                alt="Avatar Tailwind CSS Component"
                                                                className="object-fill object-center"
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>{book.idBook}</td>
                                            <td>{book.title}</td>
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
                                pageRangeDisplayed={3}
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
                    <h1>{book.updated_at }</h1>
                    </>
                )
            })
        } */}