import { BrowserRouter, Route, RouterProvider, Routes, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import BookProfile, {getDetail} from "./Components/BookProfile";
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
          path: 'profile/:id',
          loader: getDetail,
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
