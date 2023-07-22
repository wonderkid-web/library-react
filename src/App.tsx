import { RouterProvider, createBrowserRouter } from "react-router-dom";
import BookProfile, { getBookById } from "./Components/BookProfile";
import Search from "./Components/Search";
import SectionOne, { getNews } from "./Components/SectionOne"
import RootLayout from "./Components/RootLayout";
import Error from "./Components/Error";
import Borrower, { getBorrower } from "./Components/Borrower";
import User, { getBorrowedBook } from "./Components/User";
import ProtectedRoute from "./Components/ProtectedRoute";
import Login from "./Components/Login";
import { UserAuthcontextProvider } from "./context/UserAuthContext";
import Signup from "./Components/Signup";
import NewsPages from "./Components/NewsPages";
import Countdown from "./Components/CountdownTemplate";



function App() {

  const router = createBrowserRouter([
    {
      element: <RootLayout />,
      path: '/',
      children: [
        {
          path: '/',
          errorElement: <Error />,
          loader: getNews,
          element: (
            <ProtectedRoute>
              <SectionOne />
            </ProtectedRoute>
          )
        },
        {
          path: '/bookProfile/:id',
          element: (
            <ProtectedRoute>
              <BookProfile />
            </ProtectedRoute>
          ),
          loader: getBookById
        },
        {
          path: '/borrower/:name',
          element: (
            <ProtectedRoute>
              <User />
            </ProtectedRoute>
          ),
          loader: getBorrowedBook
        },
        {
          path: '/search',
          element: (
            <ProtectedRoute>
              <Search />
            </ProtectedRoute>
          )
        },
        {
          path: '/borrower',
          element: (
            <ProtectedRoute>
              <Borrower />
            </ProtectedRoute>
          ),
          loader: getBorrower
        },
        {
          path: '/login',
          element: <Login />
        },
        {
          path: '/signup',
          element: <Signup />
        },
        {
          path: '/news',
          element: (
            <ProtectedRoute>
              <NewsPages />
            </ProtectedRoute>
          )
        },
        {
          path: '/countdown',
          element: (
            <ProtectedRoute>
              <Countdown />
            </ProtectedRoute>
          )
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
