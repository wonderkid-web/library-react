import { Outlet } from "react-router-dom"
import Navbar from "./Navbar"

export interface BookType{
  image: string;
  id: string;
  description: string;
  authors: string;
  publisher: string;
  pages: string;
  title: string;
}

const RootLayout = () => {
  return (
    <div>
        <Navbar />
        <Outlet />
    </div>
  )
}

export default RootLayout