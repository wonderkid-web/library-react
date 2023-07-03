import { useLoaderData } from "react-router-dom";
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
      <div className="hero-content flex-col lg:flex-row gap-[100px] border p-16 bg-yellow-200 rounded-xl">
        <img
          src={book.image}
          className="w-[600px] h-[600px] rounded-lg shadow-2xl"
        />
        <div className="flex flex-col">
          <h1 className="text-4xl font-bold text-black">{book.title}</h1>
          <span className="mb-[80px]">by {book.authors}</span>
          <table>
            <tr>
              <th>Publisher</th>
              <th>:</th>
              <td>{book.publisher}</td>
            </tr>
            <tr>
              <td>ID</td>
              <td>:</td>
              <td>{book.id}</td>
            </tr>
            <tr>
              <td>Halaman</td>
              <td>:</td>
              <td>{book.pages}</td>
            </tr>
            <tr>
              <td>Description</td>
              <td>:</td>
              <td>{book.description}</td>
            </tr>
          </table>
          <div className="flex gap-5 mt-10">
            <button className="btn btn-primary w-[100px]">
              <a href={book.download}>Download</a>
            </button>
            <button className="btn btn-primary w-[100px]">
              <a href={book.download}>Borrow</a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookProfile;
