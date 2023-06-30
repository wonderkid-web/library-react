const Navbar = () => {
  return (
    <nav className="grid-cols-2 items-center border-b-2 fixed w-full bg-[#fdf9f3] z-[999999]">
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
          <li>Transaksi</li>
          <li>
            <img className="mt-1" src="public/bell.png" width={15} />
          </li>
          <li>
            <img className="rounded-full" src="https://rfkinrikhwan.vercel.app/static/media/rifki.23a8057d258289c1d3d5.jpeg" width={40} />
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar;