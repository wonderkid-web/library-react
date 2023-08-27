import { useQuery } from "@tanstack/react-query"
import axios from "axios"

interface MyBook {
  id: number;
  title: string;
  authors: string;
  userId: number | null;
  bookId: string;
  category: string;
  image: string;
  stock: number;
  borrowId: number | null;
}

const SearchCopy = () => {
  const { data:books, isLoading } = useQuery({
    queryFn: async () => {
      const data = await axios.get('http://localhost:3006/book')
      return data
    },
    queryKey: ['books-search']
  })

 
  if(isLoading){
    return <img src="./process.svg"></img>
  }

  return (
    <div className="grid grid-cols-3 pt-4 place-items-center  gap-4">

      {

       books?.data.details?.map((book : MyBook) => {
          return (
            <div className="card w-96 bg-base-100 shadow-md h-[450px]">
              <figure className="px-10 pt-10">
                <img src={book.image} alt="Shoes" className="rounded-xl shadow-md relative top-[50px]" />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">{book.title}!</h2>
                <p className="p-2 rounded-md bg-yellow-500 text-white">Stock: {book.stock}</p>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions">
                  <button className="btn btn-primary">Borrow</button>
                </div>
              </div>
            </div>

          )
        })
      }

    </div>
  )
}

export default SearchCopy