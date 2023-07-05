import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaAngleLeft, FaAngleRight, FaSearch } from "react-icons/fa";
import ReactPaginate from "react-paginate";
import { BookType } from "./RootLayout";

const Search = () => {
    const [books, setBooks] = useState([]);
    const [search, setSearch] = useState("");
    const [query, setQuery] = useState("");
    const [total, setTotal] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const rowsPerPage = 10;

    const getBook = async () => {
        const raw = await fetch("https://www.dbooks.org/api/recent");
        const data = await raw.json();
        setBooks(data.books);
    };

    const getBookByQuery = async (q: string) => {
        let link = `https://www.dbooks.org/api/search/${q}`;
        const raw = await fetch(link);
        const newBook = await raw.json();
        setTotal(newBook.total);
        setBooks(newBook.books);
    };

    const handleKeyPress = (event: any) => {
        if (event.key === "Enter") {
            getBookByQuery(query);
        }
    };

    useEffect(() => {
        getBook();
    }, []);

    const handlePageClick = (data: any) => {
        const selectedPage = data.selected + 1;
        setCurrentPage(selectedPage);
    };

    return (
        <section className="flex justify-center min-h-screen">
            <div className="search-query flex my-2 absolute justify-center items-center mt-20 w-full gap-5">
                <input
                    type="text"
                    placeholder="name of your book then press enter or click search"
                    onChange={(e) => setQuery(e.target.value)}
                    onKeyPress={handleKeyPress}
                    className="input w-1/2 shadow-md bg-white p-7"
                    autoFocus
                />
                <button
                    className="font-bold flex justify-center items-center bg-primary text-white p-5 rounded-lg cursor-pointer shadow-md"
                    onClick={() => getBookByQuery(query)}
                >
                    <FaSearch />
                </button>
            </div>
            <div className="p-4 flex flex-col justify-start mt-[110px]">
                <div className="p-12 flex gap-5 mb-[-50px]">
                    {total && (
                        <input
                            className="input bg-white border border-slate-500 w-full max-w-xs"
                            type="text"
                            onChange={(e) => setSearch(e.target.value)}
                            placeholder="found exact book you looking for!"
                        />
                    )}
                    {total && (
                        <h1 className="flex justify-center items-center text-lg font-bold p-2 text-white rounded-lg bg-warning w-fit">
                            Total : {total}
                        </h1>
                    )}
                </div>
                {total === undefined ? (
                    <h1 className="btn">
                        Your book is not found! or u just miss type ?
                    </h1>
                ) : (
                    <div>
                        <div className="overflow-x-auto p-12">
                            <table className="table border w-full">
                                <thead>
                                    <tr className="border border-slate-400">
                                        <th className="text-lg text-slate-700">Cover</th>
                                        <th className="text-lg text-slate-700">ID</th>
                                        <th className="text-lg text-slate-700">Title</th>
                                        <th className="text-lg text-slate-700">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {books
                                        .filter((book: BookType) => {
                                            return search.toLowerCase() === ""
                                                ? book
                                                : book.title.toLowerCase().includes(search.toLowerCase());
                                        })
                                        .slice((currentPage - 1) * rowsPerPage, currentPage * rowsPerPage)
                                        .map((book: BookType) => (
                                            <tr key={book.id} className="border border-slate-400">
                                                <td>
                                                    <div className="flex items-center space-x-3">
                                                        <div className="avatar">
                                                            <div className="mask w-[100px] h-[120px] shadow-lg rounded">
                                                                <img
                                                                    src={book.image}
                                                                    alt="Avatar Tailwind CSS Component"
                                                                    className="object-fill object-center"
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>{book.id}</td>
                                                <td>{book.title}</td>
                                                <th>
                                                    <Link to={`/bookProfile/${book.id.replace("X", "")}`}>
                                                        <button className="btn font-bold btn-primary">
                                                            details
                                                        </button>
                                                    </Link>
                                                </th>
                                            </tr>
                                        ))}
                                </tbody>
                            </table>
                            <div className="flex justify-center items-center">
                                <ReactPaginate
                                    previousLabel={<FaAngleLeft />}
                                    nextLabel={<FaAngleRight />}
                                    breakLabel={"..."}
                                    pageCount={Math.ceil(books.length / rowsPerPage)}
                                    marginPagesDisplayed={2}
                                    pageRangeDisplayed={5}
                                    onPageChange={handlePageClick}
                                    containerClassName={"my-3 flex gap- justify-center items-center p-1 bg-primary w-max rounded-lg text-white"}
                                    activeClassName={"bg-white text-slate-700"}
                                    nextClassName={"btn border border-white bg-transparent text-white ml-5"}
                                    previousClassName={"btn border border-white bg-transparent text-white mr-5"}
                                    pageClassName={`p-5 w-[20px] h-[20px] flex justify-center items-center rounded-lg mx-1 font-bold`}
                                />
                            </div>
                        </div>
                        <div className="overflow-x-auto p-12">
                            <h1 className="text-center text-xl col-span-3 my-2 font-bold">
                                Maybe you are interested in this?
                            </h1>
                            <div className="carousel carousel-center w-full grid grid-cols-3 my-[50px] p-5 sp-4 space-x-4 bg-yellow-200 rounded-lg scroll-ps-6 snap-x">
                                <div className="bottom flex gap-4 mr-4">
                                    {books
                                        .map((book: BookType) => (
                                            <div key={book.id} className="w-[250px] carousel-item">
                                                <div className="card card-compact bg-white shadow-xl">
                                                    <figure>
                                                        <img
                                                            className="w-[250px] h-[300px]"
                                                            src={book.image}
                                                            alt="Shoes"
                                                        />
                                                    </figure>
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
                                        ))}
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Search;
