import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    // <nav className="grid-cols-2 items-center border-b-2 w-full bg-[#fdf9f3] fixed z-50 top-0">
    //   <div className="left">
    //     <ul className="flex gap-4 ml-12 cursor-pointer">
    //       <li className="font-bold">Library Panda</li>
    //     </ul>
    //   </div>
    // <div className="right items-center justify-self-end mr-8 cursor-pointer">
    //   <ul className="flex gap-4 ml-12 ">
    //     <li>
    //       <NavLink to={`/`}
    //         className={({ isActive, isPending }) =>
    //           isActive
    //             ? "bg-warning rounded-lg p-2 text-white"
    //             : isPending
    //               ? "pending"
    //               : ""
    //         }
    //       >Beranda</NavLink></li>
    //       <li>
    //       <NavLink to={`/search`}
    //         className={({ isActive, isPending }) =>
    //           isActive
    //             ? "bg-warning rounded-lg p-2 text-white"
    //             : isPending
    //               ? "pending"
    //               : ""
    //         }
    //       >Search</NavLink>
    //     </li>
    //     <li>
    //       <NavLink to={`/profile/:id`}
    //         className={({ isActive, isPending }) =>
    //           isActive
    //             ? "bg-warning rounded-full p-2 text-white"
    //             : isPending
    //               ? "pending"
    //               : ""
    //         }
    //       >profile</NavLink>
    //     </li>
    //     <li>
    //       <img className="rounded-full" src="https://images7.alphacoders.com/500/500493.jpg" width={40} />
    //     </li>
    //   </ul>
    // </div>
    // </nav >
    <div className="navbar border fixed top-0 z-50 bg-[#fdf9f3]">
      <div className="flex-1 normal-case text-xl cursor-pointer font-bold">
        Library Panda
      </div>
      <div className="flex-none gap-2">
        <div className="right items-center justify-self-end mr-8 cursor-pointer">
          <ul className="flex gap-4 ml-12 ">
            <li>
              <NavLink to={`/`}
                className={({ isActive, isPending }) =>
                  isActive
                    ? "bg-warning rounded-lg p-2 text-white"
                    : isPending
                      ? "pending"
                      : ""
                }
              >Beranda</NavLink></li>
            <li>
              <NavLink to={`/search`}
                className={({ isActive, isPending }) =>
                  isActive
                    ? "bg-warning rounded-lg p-2 text-white"
                    : isPending
                      ? "pending"
                      : ""
                }
              >Search</NavLink>
            </li>
            <li>
              <NavLink to={`/profile/:id`}
                className={({ isActive, isPending }) =>
                  isActive
                    ? "bg-warning rounded-full p-2 text-white"
                    : isPending
                      ? "pending"
                      : ""
                }
              >profile</NavLink>
            </li>
            <li>
              <img className="rounded-full" src="https://images7.alphacoders.com/500/500493.jpg" width={40} />
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar;