'use client'

import React from 'react'
import { Button } from '@/components/ui/button'
import { IoArrowUp } from 'react-icons/io5'

const BackToTop = () => {
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <React.Fragment>
      <Button
        size="icon"
        asChild
        className="back-to-top fixed bottom-10 right-2 border-2 border-black bg-white p-1 text-black hover:bg-white hover:text-black"
        onClick={handleClick}
      >
        <IoArrowUp className="h-4 w-4" />
      </Button>
    </React.Fragment>
  )
}

export default BackToTop
