import React from 'react'
import Image from 'next/image'
import { Button } from './ui/button'

const Header = () => {
  return (
    <React.Fragment>
      <div className="container">
        <header className="mt-[2.5rem] grid grid-cols-12 rounded-2xl bg-gray p-[1.5rem]">
          <div className="col-span-5 flex items-center">
            <nav className="uppercase">
              <ul className="flex space-x-5">
                <li>Home</li>
                <li>About</li>
                <li>Services</li>
                <li>Work</li>
              </ul>
            </nav>
          </div>
          <div className="col-span-2 flex items-center">
            <Image
              src="/images/mason-boost-logo.svg"
              alt="Mason Boost Logo"
              width={276}
              height={52}
            />
          </div>
          <div className="col-span-5 flex items-center justify-end">
            <Button className="uppercase">Contact us</Button>
          </div>
        </header>
      </div>
    </React.Fragment>
  )
}

export default Header
