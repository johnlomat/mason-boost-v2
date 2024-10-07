import React from 'react'
import Image from 'next/image'
import { cva } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const headingVariants = cva('uppercase', {
  variants: {
    headingColor: {
      default: 'text-[#353535]',
      white: 'text-white',
    },
  },
  defaultVariants: {
    headingColor: 'default',
  },
})

const descriptionVariants = cva('', {
  variants: {
    descriptionColor: {
      default: 'body-text',
      gray: 'text-gray',
    },
  },
  defaultVariants: {
    descriptionColor: 'default',
  },
})

type BaseProps = {
  heading?: string
  headingColor?: 'default' | 'white'
  description: string
  descriptionColor?: 'default' | 'gray'
  className?: string
}

type WithImage = BaseProps & {
  useImage: true
  imageSrc: string
  bullet?: never
  bulletNoBackground?: never
  imageWidth: number
  imageHeight: number
  imageAlt: string
}
type WithoutImage = BaseProps & {
  useImage?: false
  imageSrc?: never
  bullet: string
  bulletNoBackground?: boolean
  imageWidth?: never
  imageHeight?: never
  imageAlt?: never
}

type BlurbProp = WithImage | WithoutImage

const Blurb = ({
  bullet,
  heading,
  headingColor,
  description,
  descriptionColor,
  bulletNoBackground = false,
  useImage,
  imageSrc,
  imageWidth,
  imageHeight,
  imageAlt,
  className,
}: BlurbProp) => {
  return (
    <React.Fragment>
      <div
        className={cn(
          'flex flex-col items-center space-x-0 space-y-6 text-center xl:flex-row xl:items-start xl:space-x-[1.25rem] xl:space-y-0 xl:text-left',
          className,
        )}
      >
        {useImage ? (
          <Image src={imageSrc} alt={imageAlt} width={imageWidth} height={imageHeight} />
        ) : (
          <div
            className={cn(
              'border-primary text-primary flex h-[58px] w-[58px] items-center justify-center rounded-full border-2 p-[25px] font-semibold',
              { 'bg-primary text-white': bulletNoBackground === false },
            )}
          >
            {bullet}
          </div>
        )}
        <div className={cn({ 'space-y-4 self-center': heading })}>
          <div className={cn('header-5', headingVariants({ headingColor }))}>
            <h3>{heading}</h3>
          </div>
          <div className={cn(descriptionVariants({ descriptionColor }))}>
            <p>{description}</p>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Blurb
