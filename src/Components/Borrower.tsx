import { useLoaderData } from "react-router-dom"
import { BorrowerType } from "./RootLayout"

export const getBorrower = async () => {
    const raw = await fetch('http://localhost:3000/book')
    const data = await raw.json()
    return data.details
}

const Borrower = () => {

    const borrower = useLoaderData() as BorrowerType

    return (
        <div className="mt-[70px]">
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>Book ID</th>
                            <th>Borrower</th>
                            <th>Borrowed Time</th>
                            <th>Giving Back Time</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        (borrower).map((book:BorrowerType)=>{
                            return(
                                <tr>
                                    <td>ID: {book.id}</td>
                                    <td>ID: {book.idBook}</td>
                                    <td>ID: {book.borrower}</td>
                                    <td>ID: {book.created_at}</td>
                                    <td>ID: {book.updated_at}</td>
                                </tr>
                            )
                        })
                    }
                    </tbody>
                </table>
            </div>
                
        </div>
    )
}

export default Borrower