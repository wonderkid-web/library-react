import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="grid-cols-2 items-center border-b-2 w-full bg-[#fdf9f3] absolute">
      <div className="left">
        <ul className="flex gap-4 ml-12 cursor-pointer">
          <li className="font-bold">Library Panda</li>
          <li>|</li>
          <li>Buku</li>
        </ul>
      </div>
      <div className="right items-center justify-self-end mr-8">
        <ul className="flex gap-4 ml-12 cursor-pointer items-center justify-center">
          <li>Pencarian</li>
          <li>
            <Link to={`/profile`}>profile</Link>
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