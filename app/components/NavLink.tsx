import Link from 'next/link'
import React from 'react'

const LinkList = [
  { label: 'Dashboard', href: '/' },
  { label: 'Issues', href: '/issues' }
]

const NavLink = () => {
  // use
  return (
    <>
      {LinkList.map((eachLink, index) => <li key={index}>
        <Link className='text-zinc-500 hover:text-zinc-800' href={eachLink.href}>{eachLink.label}</Link>
      </li>)}
    </>

  )
}


export default NavLink