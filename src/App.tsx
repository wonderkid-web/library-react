import { RouterProvider, createBrowserRouter } from "react-router-dom";
import BookProfile, { getBookById } from "./Components/BookProfile";
import Search from "./Components/Search";
import SectionOne from "./Components/SectionOne"
import RootLayout from "./Components/RootLayout";
import Error from "./Components/Error";
import Borrower, {getBorrower} from "./Components/Borrower";
import User, { getBorrowedBook } from "./Components/User";



function App() {

  const router = createBrowserRouter([
    {
      element: <RootLayout />,
      path: '/',
      children: [
        {
          path: '/',
          errorElement: <Error />,
          element: <SectionOne />
        },
        {
          path: '/bookProfile/:id',
          element: <BookProfile />,
          loader: getBookById
        },
        {
          path: '/user/:name',
          element: <User />,
          loader: getBorrowedBook
        },
        {
          path: '/search',
          element: <Search />,
        },
        {
          path: 'borrower',
          element: <Borrower />,
          loader: getBorrower
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
