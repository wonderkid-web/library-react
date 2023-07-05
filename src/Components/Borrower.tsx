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
        <div className="">
            <ul className="list-disc">
                {
                    borrower.map((data: BorrowerType) => {
                        return (
                            <>
                                <li>ID: {data.id}</li>
                                <li>ID: {data.idBook}</li>
                                <li>ID: {data.borrower}</li>
                                <li>ID: {data.created_at}</li>
                                <li>ID: {data.updated_at}</li>
                                <hr />
                            </>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default Borrower