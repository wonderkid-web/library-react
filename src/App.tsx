import { BrowserRouter, Route, RouterProvider, Routes, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import BookProfile, { getBookById } from "./Components/BookProfile";
import Navbar from "./Components/Navbar";
import Search from "./Components/Search";
import SectionOne from "./Components/SectionOne"
import RootLayout from "./Components/RootLayout";
import Error from "./Components/Error";


function App() {

  const router = createBrowserRouter([
    {
      element: <RootLayout />,
      path: '/',
      children: [
        {
          path: '/',
          errorElement: <Error />,
          element: (
            <>
              <SectionOne />
              <Search />
            </>
          )
        },
        {
          path: '/profile/:id',
          element: <BookProfile />,
          loader: getBookById
        }
      ]
    }
  ])



  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App;
