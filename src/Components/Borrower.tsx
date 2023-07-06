import { useLoaderData } from "react-router-dom"
import { BorrowerType } from "./RootLayout"
import moment from "moment"

export const getBorrower = async () => {
    const raw = await fetch('http://localhost:3000/book')
    const data = await raw.json()
    return data.details
}

const Borrower = () => {

    const borrower = useLoaderData() as BorrowerType

    return (
        <div className="mt-[70px] p-12">
            <div className="overflow-x-auto">
                <table className="table ">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>Book ID</th>
                            <th>Borrower</th>
                            <th>Borrowed Time</th>
                            <th>Giving Back Time</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        (borrower as unknown as BookType).map((book:BorrowerType)=>{
                            return(
                                <tr>
                                    <td>{book.id}</td>
                                    <td>{book.idBook}</td>
                                    <td>{book.borrower}</td>
                                    <td>{moment(book.created_at).format('MM-DD-YYYY')}</td>
                                    <td>{moment(book.updated_at).format('MM-DD-YYYY')}</td>
                                    <td><button className="btn btn-error">Delete</button></td>
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