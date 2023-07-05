import { useLoaderData } from "react-router-dom"
import { BorrowerType } from "./RootLayout"

export const getBorrowedBook = async ({params}) =>{
    const raw = await fetch(`http://localhost:3000/user/${params.name}`)
    const data = await raw.json()
    return data
}

const User = () => {
  
    const borrowedBook = useLoaderData() as BorrowerType
    console.log(borrowedBook);
    
  
  return (
    <div>
        <h1>Profile</h1>
        {
            borrowedBook.map((book:BorrowerType)=>{
                return(
                    <>
                    <h1>{book.id}</h1>
                    <h1>{book.borrower}</h1>
                    <h1>{book.idBook}</h1>
                    <h1>{book.created_at}</h1>
                    <h1>{book.updated_at }</h1>
                    </>
                )
            })
        }

    </div>
  )
}

export default User