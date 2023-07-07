import { Outlet, useLocation } from "react-router-dom"
import Navbar from "./Navbar"

export interface BookType{
  image: string;
  id: string;
  description: string;
  authors: string;
  publisher: string;
  pages: string;
  title: string;
  download: string;
  disabled: string;
  book:any;
  borrow: string;
}

export interface BorrowerType{
  map: any;
  id: number;
  idBook: number;
  borrower: string;
  created_at: string;
  updated_at: string;
}

const RootLayout = () => {
  const location = useLocation()
  return (
    <div>
    {
      location.pathname != '/login' && '/signup' && <Navbar />
    }
        <Outlet />
    </div>
  )
}

export default RootLayout