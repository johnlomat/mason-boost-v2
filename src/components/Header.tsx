import React from 'react'
import Image from 'next/image'
import { HamburgerMenuIcon } from '@radix-ui/react-icons'
import { Button } from './ui/button'
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet'
import NavMenu from './ui/nav'
import Link from 'next/link'

const Header = () => {
  return (
    <React.Fragment>
      <header className="absolute z-10 w-full pt-6 md:pt-[2.5rem]">
        <div className="container">
          <div className="grid grid-cols-12 rounded-2xl bg-white p-4 md:p-[1.5rem]">
            <div className="col-span-5 hidden items-center xl:flex">
              <NavMenu />
            </div>
            <div className="col-span-8 flex max-w-[276px] items-center xl:col-span-2">
              <Image
                src="/images/mason-boost-logo.svg"
                alt="Mason Boost Logo"
                width={276}
                height={52}
              />
            </div>
            <div className="col-span-5 hidden items-center justify-end xl:flex">
              <Button className="uppercase" asChild>
                <Link href="#">Contact us</Link>
              </Button>
            </div>
            <div className="col-span-4 flex items-center justify-end xl:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <Button size="icon">
                    <HamburgerMenuIcon />
                  </Button>
                </SheetTrigger>
                <SheetContent>
                  <NavMenu />
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </header>
    </React.Fragment>
  )
}

export default Header
