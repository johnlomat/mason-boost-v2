import React from 'react'
import { cn } from '@/lib/utils'
import { cva } from 'class-variance-authority'

const subheadingVariants = cva('uppercase', {
  variants: {
    subheadingColor: {
      default: 'text-brown',
      white: 'text-white',
    },
  },
  defaultVariants: {
    subheadingColor: 'default',
  },
})

const headingVariants = cva('uppercase', {
  variants: {
    headingColor: {
      default: 'text-black',
      white: 'text-white',
    },
    headingSize: {
      default: 'header-2',
      sm: 'text-[2rem] font-bold leading-tight md:text-[2.25rem] xl:text-[2rem]',
      md: 'text-[2rem] font-bold leading-tight md:text-[2.25rem] xl:text-[2.5rem]',
    },
  },
  defaultVariants: {
    headingColor: 'default',
    headingSize: 'default',
  },
})

interface HeadingBlockProp {
  subheading?: string
  heading: string
  className?: string
  children?: React.ReactNode
  subheadingColor?: 'default' | 'white'
  headingColor?: 'default' | 'white'
  headingSize?: 'default' | 'sm' | 'md'
}

const HeadingBlock = ({
  subheading,
  heading,
  className,
  children,
  subheadingColor = 'default', // Default value
  headingColor = 'default', // Default value
  headingSize = 'default',
}: HeadingBlockProp) => {
  return (
    <React.Fragment>
      <div className="space-y-4">
        <div
          className={cn(
            { 'space-y-2': headingSize === 'default' },
            { 'space-y-4': headingSize === 'sm' },
            { 'space-y-2': headingSize === 'md' },
            className,
          )}
        >
          {subheading && (
            <span className={cn(subheadingVariants({ subheadingColor }))}>{subheading}</span>
          )}
          <div className={cn(headingVariants({ headingColor, headingSize }))}>
            <h2>{heading}</h2>
          </div>
        </div>
        {children && <div className="space-y-10">{children}</div>}
      </div>
    </React.Fragment>
  )
}

export default HeadingBlock
