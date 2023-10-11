import Link from 'next/link'
import React from 'react'
import { AiFillBug } from 'react-icons/ai'
import NavLink from './components/NavLink'



const NavBar = () => {
  return (
    <nav className="flex space-x-6 border-b mb-5 px-5 h-14 items-center">
      <Link href="/"><AiFillBug /></Link>
      <ul className="flex space-x-6">
        <NavLink />
      </ul>
    </nav>
  )
}

export default NavBar
