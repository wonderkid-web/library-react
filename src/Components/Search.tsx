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

    const getBookByQuery = async (q) =>{
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
            <input className="p-2 w-full" type="text" onChange={(e)=> setQuery(e.target.value)} placeholder="name of your book" />
            <button className="font-bold p-2 m-2 bg-yellow-500" onClick={()=>getBookByQuery(query)}>Search this book</button>
            {
                total && <input className="p-2 w-full" type="text" onChange={(e)=> setSearch(e.target.value)} placeholder="found exact book you looking for!" />
            }
            {
                total ? <h1 className="text-lg font-bold p-2 rounded-full bg-yellow-500 w-fit m-2">Total: {total}</h1> :
                 <h1>Your book is not found! or u just miss type ?</h1>
            }
            {
                books && books.filter(book=>{
                    return search.toLocaleLowerCase() === '' ? book : book.title.toLowerCase().includes(search.toLocaleLowerCase())
                }).map(book => {
                    return (
                        <ul className="list-disc list-inside" key={book.id}>
                            <li>
                                {book.title}
                            </li>
                        </ul>
                    )
                })
            }
        </div>
    )
}

export default Search