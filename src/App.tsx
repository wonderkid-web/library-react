import { RouterProvider, createBrowserRouter } from "react-router-dom";
import BookProfile, { getBookById } from "./Components/BookProfile";
import Search from "./Components/Search";
import SectionOne from "./Components/SectionOne"
import RootLayout from "./Components/RootLayout";
import Error from "./Components/Error";
import Borrower, { getBorrower } from "./Components/Borrower";
import User, { getBorrowedBook } from "./Components/User";
import ProtectedRoute from "./Components/ProtectedRoute";
import Login from "./Components/Login";
import { UserAuthcontextProvider } from "./context/UserAuthContext";
import Signup from "./Components/Signup";



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
            <ProtectedRoute>
              <SectionOne />
            </ProtectedRoute>
          )
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
          path: '/borrower',
          element: <Borrower />,
          loader: getBorrower
        },
        {
          path: '/login',
          element: <Login />
        },{
          path: '/signup',
          element: <Signup />
        }
      ]
    }
  ])



  return (
    <>
      <UserAuthcontextProvider>
        <RouterProvider router={router} />
      </UserAuthcontextProvider>
    </>
  )
}

export default App;
