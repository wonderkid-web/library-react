import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import { useUserAuth } from "../context/UserAuthContext";
import { useEffect, useState } from "react";

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
  const [loading, setLoading] = useState<boolean>(false)
  const [success, setSuccess] = useState<boolean>(false)
  const [fail, setFail] = useState<boolean>(false)

  const { user:akun }: any = useUserAuth()

  const { data: books, isLoading, isError, } = useQuery({
    queryFn: async () => {
      const data = await axios.get('http://localhost:3006/book')
      return data
    },
    refetchInterval: 1500,
    queryKey: ['loan',],
  })

  const handlePost = async (id:number, email:any) =>{
    try{
      setLoading(true)
      setSuccess(true)
      const data = await fetch('http://localhost:3006/loaning', {
        method: 'POST',
        headers:{
          "Content-Type":"application/json"
        },
        body: JSON.stringify({
          id, email
        })
      })

      if(data.ok){
        setSuccess(true)
      }
    }catch(e:any){
      // console.log(e.message)
    }
    
  }


  useEffect(() => {
    setTimeout(() => {
      if (success || fail || setLoading) {
        setSuccess(false)
        setFail(false)
        setLoading(false)
      }
    }, 3000)
  }, [success, fail, loading])

  if (isLoading) {
    return <img src="./process.svg"></img>
  } else if (isError) {
    return <h1>Error</h1>
  }else if(books.data.total == 0) {
    return <img src="./empty.svg"></img>
  }

  return (
    <>
      <div className="grid grid-cols-3 pt-4 place-items-center  gap-4">

        {

          books?.data.details?.map((book: MyBook) => {
            return (
              <div className="card w-96 bg-base-100 shadow-md h-[450px]" key={book.id}>
                <figure className="px-10 pt-10">
                  <img src={`http://localhost:3006/images/${book.image}`} alt="Shoes" className="rounded-xl shadow-md relative top-[50px]" />
                </figure>
                <div className="card-body items-center text-center">
                  <h2 className="card-title">{book.title}!</h2>
                  <p className="p-2 rounded-md bg-yellow-500 text-white">Stock: {book.stock}</p>
                  <p>If a dog chews shoes whose shoes does he choose?</p>
                  <div className="card-actions">
                    <button disabled={book.stock == 0 ? true : false}  onClick={()=>handlePost(book.id, akun.email)} className="btn btn-primary">Borrow</button>
                  </div>
                </div>
              </div>

            )
          })
      
        }

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
    </>
  )
}

export default SearchCopy