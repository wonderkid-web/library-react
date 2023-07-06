import { useLoaderData } from "react-router-dom"
import { BorrowerType } from "./RootLayout"
import moment from "moment"

export const getBorrowedBook = async ({params} : any) =>{
    const raw = await fetch(`http://localhost:3000/user/${params.name}`)
    const data = await raw.json()
    return data
}

const User = () => {
  
    const borrowedBook = useLoaderData() as BorrowerType
  
  return (
    <div>
        <h1>Profile</h1>
        {
            (borrowedBook as unknown as BorrowerType[]).map((book:BorrowerType)=>{
                return(
                    <>
                    <h1>{book.id}</h1>
                    <h1>{book.borrower}</h1>
                    <h1>{book.idBook}</h1>
                    <h1>{moment(book.created_at).format('MM-DD-YYYY')}</h1>
                    <h1>{moment(book.updated_at).format('MM-DD-YYYY')}</h1>
                    </>
                )
            })
        }
    </div>
  )
}

export default User