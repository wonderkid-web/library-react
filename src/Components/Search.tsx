import { useEffect, useState } from "react"

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
            <input type="text" placeholder="name of your book" onChange={(e) => setQuery(e.target.value)} className="input input-bordered w-full max-w-xs" />
            <button className="font-bold p-2 m-2 btn" onClick={() => getBookByQuery(query)}>Search this book</button>
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
                                    <tr>
                                        <th>{book.id}</th>
                                        <td>{book.title}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div >
    )
}

export default Search