import { BrowserRouter, Route, RouterProvider, Routes, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import BookProfile from "./Components/BookProfile";
import Navbar from "./Components/Navbar";
import Search from "./Components/Search";
import SectionOne from "./Components/SectionOne"
import RootLayout from "./Components/RootLayout";


function App() {
  const router = createBrowserRouter([
    {
      element: <RootLayout />,
      path: '/',
      children: [
        {
          path: '/',
          element: (
            <>
              <SectionOne />
              <Search />
            </>
          )
        },
        {
          path: '/profile',
          element: <BookProfile />
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
