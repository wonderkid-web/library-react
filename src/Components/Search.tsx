import { useEffect, useState } from "react"
import { BookType } from "./RootLayout"
import { Link } from "react-router-dom"
import { FaSearch } from "react-icons/fa"

const Search = () => {
    const [books, setBooks] = useState()
    const [search, setSearch] = useState('')
    const [query, setQuery] = useState('')
    const [total, setTotal] = useState('')


    const getBook = async () => {
        const raw = await fetch('https://www.dbooks.org/api/recent')
        const data = await raw.json()
        setBooks(data.books)
    }

    const getBookByQuery = async (q: string) => {
        let link = `https://www.dbooks.org/api/search/${q}`
        const raw = await fetch(link)
        const newBook = await raw.json()
        setTotal(newBook.total)
        setBooks(newBook.books)
    }

    useEffect(() => {
        getBook()
    }, [])

    console.log(total)
    return (
        <div className="p-4 flex flex-col justify-start mt-24">
            <div className="search-query flex my-2 absolute">
                <input type="text" placeholder="name of your book" onChange={(e) => setQuery(e.target.value)} className="input w-full bg-white  border max-w-xs" />
                <button className="font-bold p-2 mx-2 btn w-fit" onClick={() => getBookByQuery(query)}><FaSearch/></button>
            </div>
            {
                total && <input className="input input-bordered w-full max-w-xs" type="text" onChange={(e) => setSearch(e.target.value)} placeholder="found exact book you looking for!" />
            }
            {
                total && <h1 className="text-lg font-bold p-2 rounded-full bg-yellow-500 w-fit m-2">Total: {total}</h1>
            }
            {
                total == undefined ? <h1 className="btn">Your book is not found! or u just miss type ?</h1> : <></>
            }
            <h1>Your title book`s :</h1>
            <div className="overflow-x-auto p-12">
                <table className="table border">
                    {/* head */}
                    <thead>
                        <tr>
                            <th className="text-lg">Cover</th>
                            <th className="text-lg">ID</th>
                            <th className="text-lg">Title</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            books && books.filter(book => {
                                return search.toLocaleLowerCase() === '' ? book : book.title.toLowerCase().includes(search.toLocaleLowerCase())
                            }).map(book => {
                                return (
                                    <tr key={book.id} className="border-[.5px] border-slate-500">
                                        <td>
                                            <div className="flex items-center space-x-3">
                                                <div className="avatar">
                                                    <div className="mask w-[100px] h-[120px] shadow-lg rounded">
                                                        <img src={book.image} alt="Avatar Tailwind CSS Component" className="object-fill object-center" />
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            {book.id}
                                        </td>
                                        <td>{book.title}</td>
                                        <th>
                                            <Link to={`/profile/${book.id.replace("X", "")}`}>
                                                <button className="btn font-bold btn-primary">details</button>
                                            </Link>
                                        </th>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
            <div className="carousel carousel-center w-full grid grid-cols-3 my-[50px] p-4 sp-4 space-x-4 bg-yellow-200 rounded-box">
                <h1 className="text-center text-xl col-span-3 my-4">Mungkin kamu tertarik dengan ini?</h1>
                <div className="bottom flex gap-4 mr-4">
                    {books && books.map((book: BookType) => {
                        return (
                            <div key={book.id} className="w-[350px] carousel-item">
                                <div className="card card-compact bg-white shadow-xl">
                                    <figure><img className="w-[350px] h-[350px]" src={book.image} alt="Shoes" /></figure>
                                    <div className="card-body">
                                        <h2 className="card-title">{book.title}</h2>
                                        <p>Author: {book.authors}</p>
                                        <p>ID: {book.id.replace("X", "")}</p>
                                        <div className="card-actions justify-end">
                                            <Link to={`/profile/${book.id.replace("X", "")}`}>
                                                <button className="btn font-bold btn-primary">
                                                    Borrow
                                                </button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Search;