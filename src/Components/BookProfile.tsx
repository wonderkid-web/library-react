import { useLoaderData } from "react-router-dom";
import { BookType } from "./RootLayout";
import { QRCodeSVG } from 'qrcode.react';
import Background from "/public/sssurf.svg"

export const getBookById = async ({ params }: any) => {
  const raw = await fetch(`https://www.dbooks.org/api/book/${params.id}`)
  const data = await raw.json()
  return data
}

const BookProfile = () => {

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
                    <button className="btn join-item btn-warning font-bold">
                      <a href={book.download}>Download</a>
                    </button>
                    <button className="btn join-item btn-warning font-bold">
                      <a href={`profile/${book.id}`}>Borrow</a>
                    </button>
                  </div>
                  <QRCodeSVG className="shadow-md" value={`http://localhost:5173/profile/${book.id}`} size={150} />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="hidden p-12 lg:block mt-[125px]">
          <img src={book.image} alt="Book" className="rounded-xl shadow-xl" />
        </div>
      </div>
    </section>
  );
};

export default BookProfile;
