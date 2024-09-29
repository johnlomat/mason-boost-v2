import React from 'react'
import { cn } from '@/lib/utils'

interface HeroSectionProp {
  heading: string
  backgroundImage?: string
}

const HeroSection = ({ heading, backgroundImage }: HeroSectionProp) => {
  return (
    <React.Fragment>
      <section
        className={cn(
          'relative flex min-h-[43.5rem] flex-col justify-center bg-brown bg-cover bg-center bg-no-repeat pt-[8rem]',
          backgroundImage,
        )}
      >
        <div className="container">
          <div className="header-1 text-center uppercase text-white">
            <h1>{heading}</h1>
          </div>
        </div>
      </section>
    </React.Fragment>
  )
}

export default HeroSection
