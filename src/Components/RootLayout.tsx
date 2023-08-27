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
  return_at: string;
  url?: string;
}

export interface DeletedBook {
  id: string;
  title: string;
  authors: string;
  userId?: string;
  bookId: string;
  category: string;
  image: string;
  stock: number;
  borrowId?: any;
}


export interface BorrowerType{
  map: any;
  id: number;
  idBook: number;
  borrower: string;
  created_at: string;
  updated_at: string;
}

export interface NewsType{
  map: any;
  contentSnippet: string;
  isoDate: string;
  link: string;
  title: string;
  image: string;
  large: string;
  small: string;
  slice: any;
  id: number;
}

const RootLayout = () => {
  const location = useLocation()
  return (
    <div>
    {
      location.pathname != '/login' ? location.pathname != '/signup' ? <Navbar /> : "" : ""
    }

        <Outlet />
    </div>
  )
}

export default RootLayout