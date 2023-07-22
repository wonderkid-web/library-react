import { useLoaderData } from "react-router-dom"
import { BorrowerType } from "./RootLayout"

// import moment from "moment"

export const getBorrower = async () => {
    const raw = await fetch(`http://localhost:3006/book`)
    const data = await raw.json()
    return data.details
}

const Borrower = () => {

    const handleStatus = async (idBook:number) =>{
        await fetch(`https://localhost:3006/change-status`, {
            method: 'POST',
            headers: {
              'Content-Type': 'Application/Json'
            },
            body: JSON.stringify({
              idBook,
            })
          })
    }

    const borrower = useLoaderData() as BorrowerType

    return (
        <div className="p-12 h-screen">
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
                            (borrower).map((book: BorrowerType) => {
                                return (
                                    <tr key={book.id}>
                                        <td>{book.id}</td>
                                        <td>{book.idBook}</td>
                                        <td>{book.borrower}</td>
                                        <td>{book.created_at}</td>
                                        <td>{book.updated_at}</td>
                                        <td><button className="btn btn-error">Delete</button></td>
                                        <td><button onClick={()=>handleStatus(book.idBook)} className="btn btn-info">Done</button></td>
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