import { useQuery } from "@tanstack/react-query"
import { useState } from "react";
import { useNavigate } from "react-router-dom"

interface Book {
  id: string;
  title: string;
  subtitle: string;
  authors: string;
  image: string;
  url: string;
}

const Read = () => {

  const [name, setName] = useState<string>('')

  const navigate = useNavigate()

  let { data, isLoading } = useQuery({
    queryFn: async () => {
      const data = await fetch('https://www.dbooks.org/api/recent')
      const raw = await data.json()
      return raw
    },
    queryKey: ['books']
  })
  const { data: queried, isLoading: queriedLoading } = useQuery({
    queryFn: async () => {
      const data = await fetch(`https://www.dbooks.org/api/search/${name}`)
      const raw = await data.json()
      return raw
    },
    queryKey: [{ name }]
  })

  if (isLoading) {
    return <img src={'./process.svg'} />
  }

  return (
    <>
      <input onChange={e => setName(e.currentTarget.value)} className="my-4 ml-[25vw] p-4 shadow-sm rounded-md w-1/2 " type="search" placeholder="Search Book" />
      {queriedLoading && <img src={'./process.svg'} />}
      {
        name ? (
          <div className="grid grid-cols-3 p-4 pt-[50px] place-items-center gap-[50px]">
            {
              queried?.books?.map((book: Book) => {
                return (
                  <div className="card w-96 bg-base-100 shadow-md h-[350px]" key={book.id}>
                    <figure className="px-10 pt-10">
                      <img src={book.image} alt="Shoes" className="rounded-xl shadow-md relative top-[70px]" />
                    </figure>
                    <div className="card-body items-center text-center">
                      <h2 className="card-title">{book.title}!</h2>
                      <p>{book.subtitle}</p>
                      <div className="card-actions">
                        <button className="btn btn-primary" onClick={() => {
                          navigate(`/read/bookprofile/${book.id.replace(`X`, ' ')}`)
                        }}>Read Online</button>
                      </div>
                    </div>
                  </div>

                )
              })
            }
          </div>
        ) : (
          <div className="grid grid-cols-3 p-4 pt-[50px] place-items-center gap-[50px]">
            {
              data?.books?.map((book: Book) => {
                return (
                  <div className="card w-96 bg-base-100 shadow-md h-[350px]" key={book.id}>
                    <figure className="px-10 pt-10">
                      <img src={book.image} alt="Shoes" className="rounded-xl shadow-md relative top-[70px]" />
                    </figure>
                    <div className="card-body items-center text-center">
                      <h2 className="card-title">{book.title}!</h2>
                      <p>{book.subtitle}</p>
                      <div className="card-actions">
                        <button className="btn btn-primary" onClick={() => {
                          navigate(`/read/bookprofile/${book.id.replace(`X`, ' ')}`)
                        }}>Read Online</button>
                      </div>
                    </div>
                  </div>

                )
              })
            }
          </div>
        )
      }



    </>
  )
}

export default Read