import React from 'react'
import Image from 'next/image'

interface ImageWithTextProp {
  imageSrc: string
  heading: string
}

const ImageWithText = ({ imageSrc, heading }: ImageWithTextProp) => {
  return (
    <React.Fragment>
      <div className="group relative overflow-hidden rounded-lg">
        <Image
          src={imageSrc}
          alt={heading}
          width={300}
          height={255}
          className="w-full transition-all duration-300 group-hover:scale-125"
        />
        <div className="absolute bottom-0 left-0 z-30 w-full px-7 py-8">
          <div className="subheading leading-tight text-white">
            <h3>{heading}</h3>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 top-0 z-10 bg-gradient-to-b from-transparent to-black"></div>
      </div>
    </React.Fragment>
  )
}

export default ImageWithText
