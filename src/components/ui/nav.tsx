'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'

const NavMenu = () => {
  const pathname = usePathname()

  return (
    <React.Fragment>
      <nav className="py-10 uppercase xl:py-0">
        <ul className="flex flex-col space-x-0 space-y-6 text-center xl:flex-row xl:space-x-5 xl:space-y-0 xl:text-left">
          <li>
            <Link href="/" className={cn({ 'font-bold text-brown': pathname === '/' })}>
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/about-us"
              className={cn({ 'font-bold text-brown': pathname === '/about-us' })}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/services"
              className={cn({ 'font-bold text-brown': pathname === '/services' })}
            >
              Services
            </Link>
          </li>
          <li>
            <Link href="/work" className={cn({ 'font-bold text-brown': pathname === '/work' })}>
              Work
            </Link>
          </li>
        </ul>
      </nav>
    </React.Fragment>
  )
}

export default NavMenu
