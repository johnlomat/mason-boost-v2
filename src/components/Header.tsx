'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { HamburgerMenuIcon } from '@radix-ui/react-icons'
import * as VisuallyHidden from '@radix-ui/react-visually-hidden'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetClose } from '@/components/ui/sheet'
import NavMenu from '@/components/ui/nav'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleNavClick = () => {
    setIsOpen(false)
  }

  useEffect(() => {
    const handleResize = () => {
      setIsOpen(false)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <React.Fragment>
      <header className="absolute z-10 w-full pt-6 md:pt-[2.5rem]">
        <div className="container">
          <div className="grid grid-cols-12 rounded-2xl bg-white p-4 md:p-[1.5rem]">
            <div className="col-span-5 hidden items-center xl:flex">
              <NavMenu />
            </div>
            <div className="col-span-8 flex max-w-[276px] items-center xl:col-span-2">
              <Link href="/">
                <Image
                  src="/images/mason-boost-logo.svg"
                  alt="Mason Boost Logo"
                  width={276}
                  height={52}
                />
              </Link>
            </div>
            <div className="col-span-5 hidden items-center justify-end xl:flex">
              <Button className="uppercase" asChild>
                <Link href="/contact-us">Contact us</Link>
              </Button>
            </div>
            <div className="col-span-4 flex items-center justify-end xl:hidden">
              <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild>
                  <Button size="icon" aria-label="Menu">
                    <HamburgerMenuIcon />
                  </Button>
                </SheetTrigger>
                <SheetContent>
                  <VisuallyHidden.Root>
                    <SheetTitle>Menu</SheetTitle>
                  </VisuallyHidden.Root>
                  <NavMenu onNavClick={handleNavClick} />
                  <div className="text-center">
                    <SheetClose asChild>
                      <Button className="uppercase" asChild>
                        <Link href="/contact-us">Contact us</Link>
                      </Button>
                    </SheetClose>
                  </div>
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
