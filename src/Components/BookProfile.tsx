import { useLoaderData } from "react-router-dom";
import { BookType } from "./RootLayout";
import { QRCodeSVG } from 'qrcode.react';

export const getBookById = async ({ params }: any) => {
  const raw = await fetch(`https://www.dbooks.org/api/book/${params.id}`)
  const data = await raw.json()
  return data
}

const BookProfile = () => {

  const book = useLoaderData() as BookType

  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src={book.image}
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div className="w-1/2 mx-4 flex flex-col">
          <h1 className="text-5xl font-bold">{book.title}</h1>
          <span className="indicator-item mt-4 indicator-bottom indicator-start badge badge-info text-white">9463666656</span>
          <ul className="py-6 list-disc">
            <li>Authors: {book.authors}</li>
            <li>Publisher: {book.publisher}</li>
            <li>ID:{book.id}</li>
            <li>Halaman: {book.pages}</li>
            <li>Description: {book.description}</li>
          </ul>
          <div className="join">
            <button className="btn join-item btn-warning font-bold">
              <a href={book.download}>Download</a>
            </button>
            <div className="divider"></div>
            <button className="btn join-item btn-warning font-bold">
              <a href={`profile/${book.id}`}>Borrow</a>
            </button>
          </div>
          <QRCodeSVG value={`http://localhost:5173/profile/${book.id}`} size={150} />
        </div>
      </div>
    </div>
  );
};

export default BookProfile;
