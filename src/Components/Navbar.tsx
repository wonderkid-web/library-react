import { Link, NavLink, useNavigate } from "react-router-dom";
import image from "/Bulat.svg"
import { useUserAuth } from "../context/UserAuthContext";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [photoURL, setPhotoURL] = useState("https://www.kindpng.com/picc/m/130-1300240_round-user-dry-clean-symbol-png-transparent-png.png")


  const { logOut, user } = useUserAuth()

  const navigate = useNavigate()

  const handleLogout = async () => {
    try {
      await logOut()
      return navigate('/login')
    } catch (e) {
      console.error(e.message)
    }
  }

  useEffect(()=>{
    if(user && user.photoURL){
      setPhotoURL(user.photoURL)
    }
  },[user])

  return (
    <div className="navbar border bg-[#fdf9f3]">
      <div className="flex-1 normal-case text-xl cursor-pointer font-bold p-2">
        <div className="flex justify-center items-center flex-wrap">
          <span>
            Library Panda
          </span>
          <img
            src={image}
            alt="Bulat Tapi Bukan Tekad"
            className="w-[50px] ml-3"
          />
        </div>
      </div>
      <div className="flex-none gap-2">
        <div className="right items-center justify-self-end mr-8 cursor-pointer">
          <ul className="flex gap-4 ml-12 ">
            <li>
              <NavLink to={`/`}
                className={
                  ({ isActive, isPending }) =>
                    isActive
                      ? "bg-warning  rounded-lg p-2 text-white"
                      : isPending
                        ? "pending"
                        : ""
                }
              >Beranda</NavLink></li>
            <li>
              <NavLink to={`/search`}
                className={({ isActive, isPending }) =>
                  isActive
                    ? "bg-warning  rounded-lg p-2 text-white"
                    : isPending
                      ? "pending"
                      : ""
                }
              >Search</NavLink>
            </li>
            <li>
              <NavLink to={`/borrower`}
                className={({ isActive, isPending }) =>
                  isActive
                    ? "bg-warning  rounded-full p-2 text-white"
                    : isPending
                      ? "pending"
                      : ""
                }
              >Borrower</NavLink>
            </li>
            <li>
              <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn bg-transparent border-none rounded-full">
                  <img className="rounded-full" src={photoURL} width={40} />
                </label>
                <ul tabIndex={0} className="dropdown-content z-[1] menu shadow bg-base-100 rounded-box w-52">
                  <li>
                    {
                      user &&
                      <Link to={`/user/${user.displayName}`}>Profile</Link>
                    }
                  </li>
                  <li>
                    <p onClick={() => handleLogout()}>
                      Logout
                    </p>
                  </li>
                </ul>
              </div>

            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar;