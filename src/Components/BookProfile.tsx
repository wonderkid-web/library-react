import { useLoaderData, useNavigate } from "react-router-dom";
import { BookType } from "./RootLayout";

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
        <div className="w-1/2 mx-4">
          <h1 className="text-5xl font-bold">{book.title}</h1>
          <ul className="py-6">
            <li>Authors: {book.authors}</li>
            <li>Publisher: {book.publisher}</li>
            <li>ID:{book.id}</li>
            <li>Halaman: {book.pages}</li>
            <li>Description: {book.description}</li>
          </ul>
          <button className="btn btn-primary">
            <a href={book.download}>Download</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookProfile;
