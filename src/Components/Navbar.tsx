import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="grid-cols-2 items-center border-b-2 w-full bg-[#fdf9f3]">
      <div className="left">
        <ul className="flex gap-4 ml-12 cursor-pointer">
          <li className="font-bold">Library Panda</li>
          <li>|</li>
          <li>
            <NavLink to={`/`}
              className={({ isActive, isPending }) =>
                isActive
                  ? "bg-warning rounded-full p-2"
                  : isPending
                    ? "pending"
                    : ""
              }
            >Beranda</NavLink></li>
          <li>
            <NavLink to={`/profile/:id`}
              className={({ isActive, isPending }) =>
                isActive
                  ? "bg-warning rounded-full p-2"
                  : isPending
                    ? "pending"
                    : ""
              }
            >profile</NavLink>
          </li>
        </ul>
      </div>
      <div className="right items-center justify-self-end mr-8 cursor-pointer">
        <ul className="flex gap-4 ml-12 ">
          <li>Pencarian</li>
          <li>
            <NavLink to={`/`} className={({ isActive, isPending }: any) => isActive ? "active" : isPending ? "pending" : ""}>profile</NavLink>
          </li>
          <li>
            <img className="mt-1" src="/bell.png" width={15} />
          </li>
          <li>
            <img className="rounded-full" src="https://images7.alphacoders.com/500/500493.jpg" width={40} />
          </li>
        </ul>
      </div>
    </nav >
  )
}

export default Navbar;