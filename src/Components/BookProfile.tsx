import { useLoaderData } from "react-router-dom";
import { BookType } from "./RootLayout";
import { QRCodeSVG } from 'qrcode.react';
import { useUserAuth } from "../context/UserAuthContext";
import { useEffect, useState } from "react";



export const getBookById = async ({ params }: any) => {
  const raw = await fetch(`https://www.dbooks.org/api/book/${params.id}`)
  const data = await raw.json()
  return data
}


const BookProfile = () => {
  const { user } = useUserAuth()
  const [success, setSuccess] = useState()
  const [fail, setFail] = useState()
  const [alert, setAlert] = useState()



  const borrowingBook = async (idBook: string, borrower: string) => {
    try {
      await fetch('http://localhost:3000/borrowing', {
        method: 'POST',
        headers: {
          'Content-Type': 'Application/Json'
        },
        body: JSON.stringify({
          idBook,
          borrower
        })
      })

    } catch (e) {
      console.log('gagal')
      setFail(true)
      setTimeout(() => {
        setFail(false)
      }, 3000)
      console.log(e.message)
    }
  }

  const book = useLoaderData() as BookType

  return (
    <section className="min-h-screen p-12">
      <div className="container max-w-md mx-auto sm:max-w-xl  md:max-w-5xl lg:flex lg:max-w-full lg:p-0 lg:justify-center py-1 rounded-lg mb-0 bg-no-repeat">
        <div className="lg:p-12 lg:flex-1 p-1">
          <img src={book.image} alt="Book" className="rounded-xl shadow-xl sm:mt-6 mt-12 sm:h-64 sm:w-full sm:object-cover sm:object-top lg:hidden" />
          <table className="table mt-5 bg-[#fdf9f3]">
            <thead className=" border-none">
              <tr>
                <th className="text-xl sm:text-4xl md:text-4xl lg:text-4xl font-bold text-slate-800" colSpan={3}>
                  <h1 className="text-xl sm:text-4xl md:text-4xl lg:text-4xl font-bold text-slate-800">{book.title}</h1>
                  <span className="badge-info text-white rounded-full px-2 py-1 text-[15px]">{book.id}</span>
                </th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-none">
                <th className="text-lg">Authors</th>
                <td>:</td>
                <td className="text-lg">{book.authors}</td>
              </tr>
              <tr className="border-none">
                <th className="text-lg">ID</th>
                <td>:</td>
                <td className="text-lg">{book.id}</td>
              </tr>
              <tr className="border-none">
                <th className="text-lg">Pages</th>
                <td>:</td>
                <td className="text-lg">{book.pages}</td>
              </tr>
              <tr className="border-none">
                <th className="text-lg">Publisher</th>
                <td>:</td>
                <td className="text-lg">{book.publisher}</td>
              </tr>
              <tr className="border-none">
                <th className="text-lg">Description</th>
                <td>:</td>
                <td className="text-lg text-justify">{book.description}</td>
              </tr>
              <tr className="border-none">
                <td></td>
                <td></td>
                <td className="float-right lg:flex gap-36">
                  <div className="join">
                    <button className="btn join-item btn-primary border-r border-white font-bold">
                      <a href={book.download}>Download</a>
                    </button>
                    <button className="btn join-item btn-primary border-l border-white font-bold" onClick={() => {
                      borrowingBook(book.id.replace("X", ""), user.displayName)
                    }}>Borrow</button>
                  </div>
                  {/* <dialog id="borrowModal" className="modal">
                    <form method="dialog" className="modal-box bg-white">
                      <div className="card card-side border">
                        <figure><img src={book.image} alt="Movie" className="" /></figure>
                        <div className="card-body">
                          <h2 className="card-title text-black">{book.title}</h2>
                        </div>
                      </div>
                      <div className="mt-5">
                        <div className="flex flex-col">
                          <label htmlFor="id" className="text-black font-bold p-2">ID Book</label>
                          <h2 className="text-white badge-info w-max px-2 py-1 rounded-full text-bold">{book.id.replace("X", "")}</h2>
                        </div>
                        <div className="flex flex-col mt-5">
                          <label htmlFor="id" className="text-black font-bold p-2">Borrower Name</label>
                          <input type="text" placeholder="Example Wonderkit" className="input input-bordered input-black w-full bg-white text-black" value={borrow} onChange={(e: any) => setBorrower(e.target.value)} />
                        </div>
                      </div>
                     
                    </form>
                  </dialog> */}
                  <QRCodeSVG className="shadow-md" value={`http://localhost:5173/profile/${book.id}`} size={150} />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="hidden p-12 lg:block mt-[125px]">
          <img src={book.image} alt="Book" className="rounded-xl shadow-xl w-[350px]" />
        </div>
      </div>
      {
        success &&
        <div className="alert alert-success">
          <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
          <span>Buku kamu berhasil dipinjam!!</span>
        </div>
      }
      {
        fail &&
        <div className="alert alert-error">
          <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
          <span>Buku gagal di pinjam! karna sudah ada buku yang sama.</span>
        </div>
      }
    </section>
  );
};

export default BookProfile;
