import { Link, NavLink, useNavigate } from "react-router-dom";
import image from "/Bulat.svg"
import { useUserAuth } from "../context/UserAuthContext";
import { useEffect, useState } from "react";
import { FaSignOutAlt, FaUser } from "react-icons/fa";

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
  },[user, photoURL])

  return (
    <div>
      <div className="navbar border-b shadow-sm px-6 h-3">
        <div className="flex-1">
          <span className="text-xl font-bold">
            Library Panda
          </span>
          <img
            src={image}
            alt="Bulat Tapi Bukan Tekad"
            className="w-[55px] ml-3"
          />
        </div>
        <div className="flex justify-center items-center">
          <div className="flex-none">
            <ul className="menu menu-horizontal ">
              <li>
                <div className="indicator">
                  <NavLink to={`/`}
                    className={
                      ({ isActive, isPending }) =>
                        isActive
                          ? "bg-warning font-bold rounded-lg p-2 text-white"
                          : isPending
                            ? "pending p-2"
                            : "p-2 font-bold"
                    }
                  >Beranda</NavLink>
                </div>
              </li>
              <li>
                <div className="indicator">
                  <NavLink to={`/search`}
                    className={({ isActive, isPending }) =>
                      isActive
                        ? "bg-warning font-bold rounded-lg p-2 text-white"
                        : isPending
                          ? "pending p-2"
                          : "p-2 font-bold"
                    }
                  >Search</NavLink>
                </div>
              </li>
              <li>
                <div className="indicator">
                  <NavLink to={`/read`}
                    className={({ isActive, isPending }) =>
                      isActive
                        ? "bg-warning font-bold rounded-lg p-2 text-white"
                        : isPending
                          ? "pending p-2"
                          : "p-2 font-bold"
                    }
                  >Read</NavLink>
                </div>
              </li>
              {/* Borrower Link */}
              {/* <li>
                <div className="indicator">
                  <NavLink to={`/borrower`}
                    className={({ isActive, isPending }) =>
                      isActive
                        ? "bg-warning font-bold rounded-lg p-2 text-white"
                        : isPending
                          ? "pending p-2"
                          : "p-2 font-bold"
                    }
                  >Borrower</NavLink>
                </div>
              </li> */}
            </ul>
          </div>
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img className="rounded-full" src={photoURL} width={40} />
              </div>
            </label>
            <ul tabIndex={0} className="menu menu-lg dropdown-content mt-3 z-[1] p-2 shadow-lg rounded-box w-52 bg-base-100">
              <li>
                {
                  user &&
                  <Link to={`/borrower/${user.displayName}`}>Profile <FaUser /></Link>
                }
              </li>
              <li>
                <p onClick={() => handleLogout()}>
                  Logout <FaSignOutAlt />
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div >
    </div >
  )
}

export default Navbar;