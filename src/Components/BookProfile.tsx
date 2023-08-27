import { useLoaderData } from "react-router-dom";
import { BookType } from "./RootLayout";
import { QRCodeSVG } from 'qrcode.react';
import { useUserAuth } from "../context/UserAuthContext";
import { useEffect, useState } from "react";
import moment from "moment";

export const getBookById = async ({ params }: any) => {
  const raw = await fetch(`https://www.dbooks.org/api/book/${params.id}`)
  const data = await raw.json()
  return data
}


const BookProfile = () => {
  const book = useLoaderData() as BookType

  const { user }: any = useUserAuth()
  const [success, setSuccess] = useState(Boolean)
  const [fail, setFail] = useState(Boolean)
  const [loading, setLoading] = useState(false)



  const borrowingBook = async (idBook: string, borrower: string, imgURL: string, return_at: string) => {
    try {
      setLoading(true)
      const posting = await fetch('http://localhost:3006/borrowing', {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          idBook,
          borrower,
          imgURL,
          status: true,
          return_at
        })
      })
      if (posting.ok) {
        setSuccess(true)
      } else {
        setFail(true)
      }
      setLoading(false)
    } catch (e: any) {
      console.log(e.message)
    }
  }

  const handleBookReturnTime = () => {
    const dateFormat = "D, MMMM YYYY, kk:mm:ss"
    const timestampsReturnBook = moment().format(dateFormat)
    return new Date(timestampsReturnBook).getTime()
  }


  useEffect(() => {
    setTimeout(() => {
      if (success || fail) {
        setSuccess(false)
        setFail(false)
      }
    }, 3000)
  }, [success, fail])

  return (
    <section className="min-h-screen p-12">
      <div className="hero">
        <div className="hero-content lg:flex-row">
          <div className="justify-self-end">
            <table className=" table mt-5 bg-[#fdf9f3]">
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
                <tr className="w-full">
                  <td>
                    <div className="flex flex-col w-full items-center gap-4">
                      <div className="join order-1 self-end">
                        <button className="btn join-item btn-primary border-white font-bold">
                          <a href={book.download}>Download</a>
                        </button>
                        {/* <button disabled={loading} className="btn join-item btn-primary border-l border-white font-bold" onClick={() => {
                          borrowingBook(book.id.replace("X", ""), user.displayName, book.image, handleBookReturnTime().toString())
                        }}>Borrow</button> */}
                        {/* You can open the modal using ID.showModal() method */}
                        <button className="btn join-item btn-primary border-l border-white font-bold" onClick={() => window.my_modal_3.showModal()}>open modal</button>
                        <dialog id="my_modal_3" className="modal">
                          <form method="dialog" className="modal-box w-11/12 max-w-5xl h-full">
                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                            <h3 className="font-bold text-3xl text-center m-4">{book.title}</h3>
                            <iframe className="w-full h-[95%]" src={`${book.url}pdf/`} frameborder="0"></iframe>
                          </form>
                        </dialog>
                      </div>
                      <QRCodeSVG className="self-end shadow-md" value={`http://localhost:5173/profile/${book.id}`} size={150} />
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <img src={book.image} alt="Book" className="rounded-xl w-5/6 shadow-xl" />


        </div>
      </div>
      {
        success &&
        <div className="toast toast-start">
          <div className="alert alert-success">
            <span>Buku kamu berhasil di pinjam!</span>
          </div>
        </div>
      }
      {
        fail &&
        <div className="toast toast-start">
          <div className="alert alert-warning">
            <span>Kamu meminjam buku yang sama nih!!</span>
          </div>
        </div>
      }
    </section>
  );
};

export default BookProfile;
