'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import classnames from 'classnames'

const LinkList = [
  { label: 'Dashboard', href: '/' },
  { label: 'Issues', href: '/issues' }
]

const NavLink = () => {
  const currentPate = usePathname()

  return (
    <>
      {LinkList.map((eachLink, index) => <li key={index}>
        <Link key={index} href={eachLink.href}
          className={classnames({
            'text-zinc-900': eachLink.href === currentPate,
            'text-zinc-400': eachLink.href !== currentPate,
            'hover: text-zinc-800': true
          })}
        >
          {eachLink.label}
        </Link>
      </li>)}
    </>
  )
}


export default NavLink