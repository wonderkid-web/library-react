import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

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

    const getBookByQuery = async (q) => {
        let link = `https://www.dbooks.org/api/search/${q}`
        const raw = await fetch(link)
        const newBook = await raw.json()
        setTotal(newBook.total)
        setBooks(newBook.books)
    }

    useEffect(() => {
        getBook()
    }, [])


    return (
        <div className="p-4 flex flex-col justify-start">
            <div className="search-query flex my-2">
                <input type="text" placeholder="name of your book" onChange={(e) => setQuery(e.target.value)} className="input input-bordered w-full max-w-xs" />
                <button className="font-bold p-2 mx-2 btn w-fit" onClick={() => getBookByQuery(query)}>Search this book</button>
            </div>
            {
                total && <input className="input input-bordered w-full max-w-xs" type="text" onChange={(e) => setSearch(e.target.value)} placeholder="found exact book you looking for!" />
            }
            {
                total ? <h1 className="text-lg font-bold p-2 rounded-full bg-yellow-500 w-fit m-2">Total: {total}</h1> :
                    <h1 className="btn" disabled="disabled">Your book is not found! or u just miss type ?</h1>
            }
            <h1>Your title book`s :</h1>
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
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
                                    <tr key={book.id}>
                                        <th>{book.id}</th>
                                        <td>{book.title}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
            <div className="carousel carousel-center w-full grid grid-cols-3 my-[50px] p-4 sp-4 space-x-4 bg-yellow-200 rounded-box">
                <h1 className="text-center text-xl col-span-3 my-4">Mungkin kamu tertarik dengan ini?</h1>
                <div className="bottom flex gap-4">
                    {books && books.map(book => {
                        return (
                            <div key={book.id} className="w-[250px] carousel-item">
                                <div className="card card-compact bg-base-100 shadow-xl">
                                    <figure><img className="w-full" src={book.image} alt="Shoes" /></figure>
                                    <div className="card-body">
                                        <h2 className="card-title">{book.title}</h2>
                                        <p>Author: {book.authors}</p>
                                        <p>ID: {book.id}</p>
                                        <div className="card-actions justify-end">
                                            <Link to={`/profile/${book.id}`}>
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

export default Search