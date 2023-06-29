import { useState } from 'react'
import Navbar from "./Components/Navbar"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar />
     <h1 className="bg-red-700">Wahyu already Changed this on Dev branch!</h1>
    </>
  )
}

export default App
