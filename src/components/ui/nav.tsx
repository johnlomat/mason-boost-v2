import React from 'react'

const NavMenu = () => {
  return (
    <React.Fragment>
      <nav className="py-10 uppercase xl:py-0">
        <ul className="flex flex-col space-x-0 space-y-6 text-center xl:flex-row xl:space-x-5 xl:space-y-0 xl:text-left">
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>Work</li>
        </ul>
      </nav>
    </React.Fragment>
  )
}

export default NavMenu
