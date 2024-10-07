'use client'

import React, { useEffect, useState } from 'react'
import { IoArrowUp } from 'react-icons/io5'

import { Button } from '@/components/ui/button'

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false)

  const handleScroll = () => {
    const scrollTop = window.scrollY
    const windowHeight = window.innerHeight
    const documentHeight = document.documentElement.scrollHeight
    const scrolledPercentage = (scrollTop / (documentHeight - windowHeight)) * 100

    setIsVisible(scrolledPercentage > 30)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <React.Fragment>
      {isVisible && (
        <Button
          size="icon"
          asChild
          className="back-to-top fixed bottom-[125px] right-2 z-50 border-2 border-black bg-white p-1 text-black hover:bg-white hover:text-black"
          onClick={handleClick}
        >
          <IoArrowUp className="h-4 w-4" />
        </Button>
      )}
    </React.Fragment>
  )
}

export default BackToTop
