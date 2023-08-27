import { RouterProvider, createBrowserRouter } from "react-router-dom";
import BookProfile, { getBookById } from "./Components/BookProfile";
import Search, { getBook } from "./Components/Search";
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
import SearchCopy from "./Components/SearchCopy";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Read from "./Components/Read";






function App() {

  const router = createBrowserRouter([
    {
      element: <RootLayout />,
      path: '/',
      children: [
        {
          path: '/',
          errorElement: <Error />,
          // loader: getNews,
          element: (
            <ProtectedRoute>
              <SectionOne />
            </ProtectedRoute>
          )
        },
        {
          path: '/read/bookProfile/:id',
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
              <SearchCopy />
            </ProtectedRoute>
          ),
          // loader: getBook
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
          path: '/read',
          element: <Read />
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

  const queryClient = new QueryClient()

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <UserAuthcontextProvider>
          <RouterProvider router={router} />
        </UserAuthcontextProvider>
      </QueryClientProvider>
    </>
  )
}

export default App;
