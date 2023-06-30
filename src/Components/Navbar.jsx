import React from 'react'

const Navbar = () => {
  return (
    <nav className="grid-cols-2 items-center border-b-2 fixed w-full">
      <div className="left">  
          <ul className="flex gap-4 ml-12 cursor-pointer">
            <li>Library Panda</li>
            <li>| Buku</li>
          </ul>
      </div>
      <div className="right items-center justify-self-end mr-8">
          <ul className="flex gap-4 ml-12 cursor-pointer">
            <li>Pencarian</li>
            <li>Transaksi</li>
            <li>
                <img className="mt-1" src="public/bell.png" width={15}/>
            </li>
            <li>
                <img className="rounded-xl" src="https://images7.alphacoders.com/500/500493.jpg" width={40}/>
            </li>
          </ul>
      </div>
    </nav>
  )
}

export default Navbar;